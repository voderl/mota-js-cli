// https://github.com/oliver-moran/jimp
import Jimp from 'jimp';

import data from '../editor/project/data';
import maps from '../editor/project/maps';
import icons from '../editor/project/icons';
import read from './read';

const fs = require('fs');
const path = require('path');
// 打包工具 https://github.com/odrick/free-tex-packer-core
const texturePacker = require('free-tex-packer-core');

const main = { floors: { } };
global.main = main;
global.window = {};
main.outputPath = path.resolve('./data');
main.tilesets = data.main.tilesets;
main.autotiles = Object.keys(icons.autotile);
main.icons = {
  floor: 0,
  lv: 1,
  hpmax: 2,
  hp: 3,
  atk: 4,
  def: 5,
  mdef: 6,
  money: 7,
  experience: 8,
  up: 9,
  book: 10,
  fly: 11,
  toolbox: 12,
  keyboard: 13,
  shop: 14,
  save: 15,
  load: 16,
  settings: 17,
  play: 18,
  pause: 19,
  stop: 20,
  speedDown: 21,
  speedUp: 22,
  rewind: 23,
  equipbox: 24,
  mana: 25,
  skill: 26,
  paint: 27,
  erase: 28,
  empty: 29,
  exit: 30,
  btn1: 31,
  btn2: 32,
  btn3: 33,
  btn4: 34,
  btn5: 35,
  btn6: 36,
  btn7: 37,
  btn8: 38,
};
main.images = {
  tilesets: {},
  autotile: {},
  extraImages: {},
  animatesBuffer: {},
};
const floors = require.context('../editor/project/floors/', false, /\.js$/);
const extraImagesList = read.readdir('../editor/project/extraImages/', false, /\.(png|jpg|gif|ico)$/);
const { floorIds, images: rawImages } = data.main;
main.animates = data.main.animates;
main.extraImagesList = extraImagesList;
const blockIds = {};
// 加载出地图数组中所使用的block 的num
(function loadFloors() {
  const initBlock = num => {
    if (blockIds[num]) return;
    blockIds[num] = true;
  };
  const traversalArray = (arr, func) => {
    if (arr instanceof Array) return arr.forEach(n => traversalArray(n, func));
    return func(arr);
  };

  floorIds.forEach((floorId) => floors(`./${floorId}.js`));

  floorIds.forEach((floorId) => {
    const floor = main.floors[floorId];
    traversalArray([floor.map, floor.fgmap, floor.bgmap], initBlock);
  });
}());

const getTilesetOffset = (num) => {
  if (typeof num !== 'number') {
    return null;
  }
  let startOffset = 10000;
  if (num < startOffset) return null;
  for (const i in main.tilesets) {
    const tilesetId = main.tilesets[i];
    const imgName = tilesetId;
    const img = main.images.tilesets[imgName];
    const width = Math.floor(img.bitmap.width / 32);
    const height = Math.floor(img.bitmap.height / 32);
    if (num >= startOffset && num < startOffset + width * height) {
      const x = (num - startOffset) % width;
      const y = parseInt((num - startOffset) / width, 10);
      return { image: img, x, y };
    }
    startOffset += startOffset;
  }
  return null;
};
const getAnimateFrames = function (cls, useOriginValue) {
  if (cls === 'enemys' || cls === 'npcs') {
    return 2;
  }
  if (cls === 'animates' || cls === 'enemy48') {
    return 4;
  }
  if (cls === 'npc48') {
    return useOriginValue ? 4 : 1;
  }
  return 1;
};
const getBlock = (num) => {
  let block;
  if (num === 0) return null;
  // alone 指一个图片对应一个block
  if (num === 17) { // airwall
    block = {
      cls: 'terrains',
      id: 'airwall',
      image: main.images.airwall,
      alone: true,
    };
  } else if (maps[num]) {
    block = JSON.parse(JSON.stringify(maps[num]));
    const { id, cls } = block;
    if (cls === 'autotile') {
      block.image = main.images.autotile[id];
      block.animate = Math.ceil(main.images.autotile[id].bitmap.width / 96);
      block.alone = true;
    } else {
      block.image = main.images[cls];
      block.posY = icons[cls][id];
    }
  } else {
    const tilesetOffset = getTilesetOffset(num);
    if (tilesetOffset) {
      block = {
        cls: 'tileset',
        id: `X${num}`,
        posX: tilesetOffset.x,
        posY: tilesetOffset.y,
        image: tilesetOffset.image,
      };
    } else return null;
  }
  if (!block.animate) {
    block.animate = getAnimateFrames(block.cls, true);
  }
  block.height = 32;
  if (block.cls === 'enemy48' || block.cls === 'npc48') block.height = 48;
  block.posX = block.posX || 0;
  block.posY = block.posY || 0;
  return block;
};
const loadImages = require('./loadImages').default;

loadImages().then(() => {
  console.log('资源加载完成');
  const blocksBuffer = {};
  // 加载blocks
  const info = { };
  const _maps = { };
  const writeFile = (name, data) => {
    fs.writeFile(`${main.outputPath}/${name}`, data,
      (err) => {
        if (err) throw err;
        console.log(`写入${name}成功`);
      });
  };
  // 加载额外images
  (function () {
    const { extraImages } = main.images;
    console.log(Object.keys(extraImages));
    Object.keys(extraImages).forEach(id => {
      const { [id]: image } = extraImages;
      // 较大的图片 可能被jimp 处理后体积增大 如bg.jpg 因此较大图片单独处理
      // 因此在此重新读取文件重新写入
      if (image.bitmap.width * image.bitmap.height >= 160000) {
        fs.readFile(`${path.resolve(main.extraImagesDir, id)}`,
          (err, img) => {
            if (err) throw err;
            fs.writeFile(`${path.resolve('./data', id)}`, img,
              (err) => {
                if (err) throw err;
                console.log(`写入${id}成功`);
              });
          });
        return;
      }
      image.getBuffer(Jimp.MIME_PNG, (err, imageBuffer) => {
        if (err) throw err;
        let basename = id;
        if (id.lastIndexOf('.') !== -1) {
          basename = id.substring(0, id.lastIndexOf('.'));
        }
        if (blocksBuffer[basename]) console.log(`额外图片里有重名id${basename}`);
        blocksBuffer[basename] = imageBuffer;
      });
    });
  }());
  Object.keys(blockIds).forEach((numId) => {
    const num = parseInt(numId, 10);
    const block = getBlock(num);
    if (!block) return;
    const {
      image, posX, posY, animate, alone, id, height,
    } = block;
    if (!image) return;
    if (blocksBuffer[id]) {
      info[id] = { num, animate: 1 };
      _maps[numId] = block;
      delete block.image;
      delete block.alone;
      delete block.posX;
      delete block.height;
      delete block.posY;
      delete block.animate;
      return;
    }
    info[id] = { num, animate };
    _maps[numId] = block;
    delete block.image;
    delete block.alone;
    delete block.posX;
    delete block.height;
    delete block.posY;
    delete block.animate;
    if (alone) {
      image.getBuffer(Jimp.MIME_PNG, (err, imageBuffer) => {
        if (err) throw err;
        blocksBuffer[id] = imageBuffer;
      });
      return;
    }
    // load promise 加入数组
    const temp = new Jimp(32 * animate, height, (err, img) => {
      if (err) throw err;
      img.blit(image, 0, 0, posX * 32, posY * height, 32 * animate, height)
        .getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          if (err) throw err;
          if (blocksBuffer[id]) console.log(`额外图片里有重名id"${id}"`);
          blocksBuffer[id] = buffer;
        });
    });
  });
  // write info
  writeFile('_info.json', JSON.stringify(info)); // id to num
  writeFile('_maps.json', JSON.stringify(_maps)); // num to data
  // 加载icons
  (function () {
    const iconsData = main.icons;
    const iconsImg = main.images.icons;
    Object.keys(iconsData).forEach(id => {
      const temp = new Jimp(32, 32, (err, img) => {
        if (err) throw err;
        img.blit(iconsImg, 0, 0, 0, iconsData[id] * 32, 32, 32)
          .getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err) throw err;
            blocksBuffer[id] = buffer;
          });
      });
    });
  }());
  
  // 加载animate 是否存在其余文件
  (function () {
    const { animatesBuffer } = main.images;
    Object.keys(animatesBuffer).forEach(id => {
      blocksBuffer[id] = animatesBuffer[id];
    });
  }());
  // new Jimp 是异步的，但是没有返回Promise 因此用setTimeout
  setTimeout(() => {
    const images = [];
    const options = {
      textureName: 'packer',
      allowRotation: true,
      exporter: 'Pixi',
      detectIdentical: false,
      width: 512,
      height: 512,
      padding: 0,
    };
    const { outputPath } = main;
    Object.keys(blocksBuffer).forEach((id) => images.push({
      path: id,
      contents: blocksBuffer[id],
    }));
    texturePacker(images, options, (files, error) => {
      if (error) {
        console.error('Packaging failed', error);
      } else {
        files.forEach((item) => {
          fs.writeFile(path.resolve(outputPath, item.name), item.buffer, (err) => {
            if (err) throw err;
            console.log(`${item.name}写入成功`);
          });
        });
      }
    });
  });
});
