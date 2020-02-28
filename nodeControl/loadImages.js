const Jimp = require('jimp');
const path = require('path');

const materials = [
  'animates',
  'enemys',
  'hero', 'items', 'npcs', 'terrains', 'enemy48', 'npc48', 'airwall',
];
const imagesDir = path.resolve('../mota-js/project/images');
const readImage = (rootDir, arr) => {
  const list = [];
  arr.forEach((name) => {
    let realName = name;
    if (name.indexOf('.') === -1) realName = `${name}.png`;
    list.push(
      Jimp.read(`${imagesDir}/${realName}`).then(image => {
        rootDir[name] = image;
      }).catch(err => console.error(err)),
    );
  });
  return Promise.all(list);
};

async function loadImages() {
  const { main } = global;
  const _root = main.images;
  console.log(_root);
  await readImage(_root, materials);
  await readImage(_root.autotile, main.autotiles);
  await readImage(_root.tilesets, main.tilesets);
}
export default loadImages;
