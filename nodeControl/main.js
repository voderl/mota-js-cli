import Jimp from 'jimp';

import { icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1 as icons } from '../mota-js/project/icons';
import { maps_90f36752_8815_4be8_b32b_d7fad1d0542e as maps } from '../mota-js/project/maps';
import { data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d as data } from '../mota-js/project/data';

const fs = require('fs');
const path = require('path');
const texturePacker = require('free-tex-packer-core');

const main = { floors: { } };
global.main = main;
global.window = {};
main.tilesets = data.main.tilesets;
main.autotiles = Object.keys(icons.autotile);
main.images = {
  tilesets: {},
  autotile: {},
};
const floors = require.context('../mota-js/project/floors/', false, /\.js$/);
const { floorIds } = data.main;
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
  Object.keys(blockIds).forEach((num) => {
    const block = getBlock(num);
    if (!block) return;
    const {
      image, posX, posY, animate, alone, id, height,
    } = block;
    if (!image) return;
    if (alone) {
      image.getBuffer(Jimp.MIME_PNG, (err, data) => {
        if (err) throw err;
        blocksBuffer[id] = data;
      });
      return;
    }
    blocksBuffer[id] = new Jimp(32 * animate, height, (err, img) => {
      if (err) throw err;
      img.blit(image, 0, 0, posX * 32, posY * height, 32 * animate, height)
        .getBuffer(Jimp.MIME_PNG, (err, data) => {
          if (err) throw err;
          blocksBuffer[id] = data;
        });
    });
  });
  console.log('no');
  // TODO: setTimeout => Promise
  setTimeout(() => {
    const images = [];
    const options = {
      textureName: 'packer',
      allowRotation: true,
      exporter: 'Pixi',
      detectIdentical: false,
      width: 1024,
    };
    const outputPath = path.resolve('./data');

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
  }, 100);
});
