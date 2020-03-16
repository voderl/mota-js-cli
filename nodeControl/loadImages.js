const fs = require('fs');
const Jimp = require('jimp');
const path = require('path');

const materials = [
  'animates',
  'enemys',
  'items', 'npcs', 'terrains', 'enemy48', 'npc48',
  'icons',
];
const imagesDir = path.resolve('../editor/project/images/');
const extraImagesDir = path.resolve('../editor/project/extraImages/');
const animatesDir = path.resolve('../editor/project/animates');
const animatesData = {};
const readFile = (src) => {
  const temp = new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
  temp.catch((err) => { throw err; });
  return temp;
};
const readAnimate = (name) => new Promise((resolve, reject) => {
  let realName = name;
  if (name.indexOf('.') === -1) realName = `${name}.animate`;
  readFile(path.resolve(animatesDir, realName)).then((raw) => {
    resolve(raw);
  },
  reject);
});
const addImage = (rootDir, name) => {
  let realName = name;
  if (name.indexOf('.') === -1) realName = `${name}.png`;
  return Jimp.read(`${path.resolve(imagesDir, realName)}`).then(image => {
    rootDir[name] = image;
  }).catch(err => console.error(err));
};
const addExtraImage = (rootDir, name) => {
  if (name.startsWith('./')) name = name.slice(2);
  let realName = name;
  if (name.indexOf('.') === -1) realName = `${name}.png`;
  return Jimp.read(`${path.resolve(extraImagesDir, realName)}`).then(image => {
    rootDir[name] = image;
  }).catch(err => console.error(err));
};
const addAnimate = (rootDir, name) => {
  return readAnimate(name).then((raw) => {
    const data = JSON.parse(raw);
    animatesData[name] = data;
    const bitmapsData = [];
    const regex = /^data:image\/\w+;base64,/;
    data.bitmaps.forEach((rawBase, i) => {
      if (rawBase === '') return bitmapsData.push(0);
      const base = rawBase.replace(regex, '');
      const dataBuffer = Buffer.from(base, 'base64');
      const _name = `${name}-${i}`;
      rootDir[_name] = dataBuffer;
      return bitmapsData.push(1);
    });
    data.bitmaps = bitmapsData;
  });
};
const read = (list, rootDir, name, addFunc = addImage) => {
  if (rootDir instanceof Array) {
    return rootDir.forEach(data => read(list, ...data));
  }
  if (name instanceof Array) {
    return name.forEach((_name) => read(list, rootDir, _name, addFunc));
  }
  list.push(addFunc(rootDir, name));
  return null;
};
const readAll = (arr) => {
  const list = [];
  read(list, arr);
  return Promise.all(list);
};
async function loadImages() {
  const { main } = global;
  const _root = main.images;
  main.imagesDir = imagesDir;
  main.extraImagesDir = extraImagesDir;
  // main.rawImages.push('hero.png', 'ground.png');
  await readAll([
    [_root, materials],
    [_root.autotile, main.autotiles],
    [_root.tilesets, main.tilesets],
    // load ExtraImages
    [_root.extraImages, main.extraImagesList, addExtraImage],
    [_root.animatesBuffer, main.animates, addAnimate],
  ]);
  const { outputPath } = main;
  const data = JSON.stringify(animatesData);
  const name = 'animates.json';
  fs.writeFile(path.resolve(outputPath, name), data,
    (err) => {
      if (err) throw err;
      console.log(`文件${name}保存成功`);
    });
}
export default loadImages;
