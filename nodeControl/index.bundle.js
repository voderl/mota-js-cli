/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mota_js_project_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _mota_js_project_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _mota_js_project_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
// https://github.com/oliver-moran/jimp






const fs = __webpack_require__(5);
const path = __webpack_require__(6);
// 打包工具 https://github.com/odrick/free-tex-packer-core
const texturePacker = __webpack_require__(7);

const main = { floors: { } };
global.main = main;
global.window = {};
main.outputPath = path.resolve('./data');
main.tilesets = _mota_js_project_data__WEBPACK_IMPORTED_MODULE_3__["data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d"].main.tilesets;
main.autotiles = Object.keys(_mota_js_project_icons__WEBPACK_IMPORTED_MODULE_1__["icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1"].autotile);
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
const floors = __webpack_require__(8);
const { floorIds, images: rawImages } = _mota_js_project_data__WEBPACK_IMPORTED_MODULE_3__["data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d"].main;
main.animates = _mota_js_project_data__WEBPACK_IMPORTED_MODULE_3__["data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d"].main.animates;
main.rawImages = rawImages;
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
  } else if (_mota_js_project_maps__WEBPACK_IMPORTED_MODULE_2__["maps_90f36752_8815_4be8_b32b_d7fad1d0542e"][num]) {
    block = JSON.parse(JSON.stringify(_mota_js_project_maps__WEBPACK_IMPORTED_MODULE_2__["maps_90f36752_8815_4be8_b32b_d7fad1d0542e"][num]));
    const { id, cls } = block;
    if (cls === 'autotile') {
      block.image = main.images.autotile[id];
      block.animate = Math.ceil(main.images.autotile[id].bitmap.width / 96);
      block.alone = true;
    } else {
      block.image = main.images[cls];
      block.posY = _mota_js_project_icons__WEBPACK_IMPORTED_MODULE_1__["icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1"][cls][id];
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
const loadImages = __webpack_require__(14).default;

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
  Object.keys(blockIds).forEach((numId) => {
    const num = parseInt(numId, 10);
    const block = getBlock(num);
    if (!block) return;
    const {
      image, posX, posY, animate, alone, id, height,
    } = block;
    if (!image) return;
    info[id] = { num, animate };
    _maps[numId] = block;
    delete block.image;
    delete block.alone;
    delete block.posX;
    delete block.height;
    delete block.posY;
    delete block.animate;
    if (alone) {
      image.getBuffer(jimp__WEBPACK_IMPORTED_MODULE_0___default.a.MIME_PNG, (err, imageBuffer) => {
        if (err) throw err;
        blocksBuffer[id] = imageBuffer;
      });
      return;
    }
    // load promise 加入数组
    const temp = new jimp__WEBPACK_IMPORTED_MODULE_0___default.a(32 * animate, height, (err, img) => {
      if (err) throw err;
      img.blit(image, 0, 0, posX * 32, posY * height, 32 * animate, height)
        .getBuffer(jimp__WEBPACK_IMPORTED_MODULE_0___default.a.MIME_PNG, (err, buffer) => {
          if (err) throw err;
          if (blocksBuffer[id]) console.log(`额外图片里有重名id"${id}"`);
          blocksBuffer[id] = buffer;
        });
    });
  });
  // write info
  writeFile('_info.json', JSON.stringify(info));
  writeFile('_maps.json', JSON.stringify(_maps));
  // 加载icons
  (function () {
    const iconsData = main.icons;
    const iconsImg = main.images.icons;
    Object.keys(iconsData).forEach(id => {
      const temp = new jimp__WEBPACK_IMPORTED_MODULE_0___default.a(32, 32, (err, img) => {
        if (err) throw err;
        img.blit(iconsImg, 0, 0, 0, iconsData[id] * 32, 32, 32)
          .getBuffer(jimp__WEBPACK_IMPORTED_MODULE_0___default.a.MIME_PNG, (err, buffer) => {
            if (err) throw err;
            blocksBuffer[id] = buffer;
          });
      });
    });
  }());
  // 加载额外images
  (function () {
    const { extraImages } = main.images;
    Object.keys(extraImages).forEach(id => {
      const { [id]: image } = extraImages;
      // 较大的图片 可能被jimp 处理后体积增大 如bg.jpg 因此较大图片单独处理
      // 因此在此重新读取文件重新写入
      if (image.bitmap.width * image.bitmap.height >= 160000) {
        fs.readFile(`${path.resolve(main.imagesDir, id)}`,
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
      image.getBuffer(jimp__WEBPACK_IMPORTED_MODULE_0___default.a.MIME_PNG, (err, imageBuffer) => {
        if (err) throw err;
        let basename = id;
        if (id.lastIndexOf('.') !== -1) {
          basename = id.substring(0, id.lastIndexOf('.'));
        }
        if (blocksBuffer[basename]) console.log(`额外图片里有重名id${basename}`)
        blocksBuffer[basename] = imageBuffer;
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jimp");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1", function() { return icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1; });
var icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1 = 
{
	"hero": {
		"down": {
			"loc": 0,
			"stop": 0,
			"leftFoot": 1,
			"rightFoot": 3
		},
		"left": {
			"loc": 1,
			"stop": 0,
			"leftFoot": 1,
			"rightFoot": 3
		},
		"right": {
			"loc": 2,
			"stop": 0,
			"leftFoot": 1,
			"rightFoot": 3
		},
		"up": {
			"loc": 3,
			"stop": 0,
			"leftFoot": 1,
			"rightFoot": 3
		},
		"width": 32,
		"height": 48
	},
	"terrains": {
		"ground": 0,
		"grass": 1,
		"grass2": 2,
		"yellowWall": 3,
		"whiteWall": 4,
		"blueWall": 5,
		"snowGround": 6,
		"ground2": 7,
		"ground3": 8,
		"ground4": 9,
		"sand": 10,
		"ground5": 11,
		"yellowWall2": 12,
		"whiteWall2": 13,
		"blueWall2": 14,
		"blockWall": 15,
		"grayWall": 16,
		"white": 17,
		"ground6": 18,
		"soil": 19,
		"ground7": 20,
		"ground8": 21,
		"ice": 22,
		"downFloor": 23,
		"upFloor": 24,
		"yellowDoor": 25,
		"blueDoor": 26,
		"redDoor": 27,
		"greenDoor": 28,
		"specialDoor": 29,
		"steelDoor": 30,
		"blueShop-left": 31,
		"blueShop-right": 32,
		"pinkShop-left": 33,
		"pinkShop-right": 34,
		"arrowUp": 35,
		"arrowDown": 36,
		"arrowLeft": 37,
		"arrowRight": 38,
		"light": 39,
		"darkLight": 40,
		"ski": 41,
		"flower": 42,
		"box": 43,
		"boxed": 44
	},
	"animates": {
		"star": 0,
		"lava": 1,
		"blueWater": 2,
		"water": 3,
		"yellowDoor": 4,
		"blueDoor": 5,
		"redDoor": 6,
		"greenDoor": 7,
		"specialDoor": 8,
		"steelDoor": 9,
		"yellowWall": 10,
		"whiteWall": 11,
		"blueWall": 12,
		"crystalUp": 13,
		"crystalBottom": 14,
		"starPortal": 15,
		"fire": 16,
		"portal": 17,
		"switch": 18,
		"lavaNet": 19,
		"poisonNet": 20,
		"weakNet": 21,
		"curseNet": 22,
		"downPortal": 23,
		"leftPortal": 24,
		"rightPortal": 25,
		"upPortal": 26
	},
	"npcs": {
		"man": 0,
		"woman": 1,
		"thief": 2,
		"fairy": 3,
		"magician": 4,
		"womanMagician": 5,
		"oldMan": 6,
		"child": 7,
		"wood": 8,
		"pinkShop": 9,
		"blueShop": 10,
		"princess": 11,
		"wlt": 12,
		"wt": 13,
		"wrt": 14,
		"wl": 15,
		"wc": 16,
		"wr": 17,
		"wlb": 18,
		"wrb": 19,
		"dlt": 20,
		"dt": 21,
		"drt": 22,
		"dl": 23,
		"dc": 24,
		"dr": 25,
		"dlb": 26,
		"drb": 27
	},
	"npc48": {
		"npc0": 0,
		"npc1": 1,
		"npc2": 2,
		"npc3": 3
	},
	"enemys": {
		"greenSlime": 0,
		"redSlime": 1,
		"blackSlime": 2,
		"slimelord": 3,
		"bat": 4,
		"bigBat": 5,
		"redBat": 6,
		"vampire": 7,
		"skeleton": 8,
		"skeletonSoilder": 9,
		"skeletonCaptain": 10,
		"ghostSkeleton": 11,
		"zombie": 12,
		"zombieKnight": 13,
		"rock": 14,
		"slimeMan": 15,
		"bluePriest": 16,
		"redPriest": 17,
		"brownWizard": 18,
		"redWizard": 19,
		"yellowGuard": 20,
		"blueGuard": 21,
		"redGuard": 22,
		"swordsman": 23,
		"soldier": 24,
		"yellowKnight": 25,
		"redKnight": 26,
		"darkKnight": 27,
		"blackKing": 28,
		"yellowKing": 29,
		"greenKing": 30,
		"blueKnight": 31,
		"goldSlime": 32,
		"poisonSkeleton": 33,
		"poisonBat": 34,
		"steelRock": 35,
		"skeletonPriest": 36,
		"skeletonKing": 37,
		"skeletonWizard": 38,
		"redSkeletonCaption": 39,
		"badHero": 40,
		"demon": 41,
		"demonPriest": 42,
		"goldHornSlime": 43,
		"redKing": 44,
		"whiteKing": 45,
		"blackMagician": 46,
		"silverSlime": 47,
		"swordEmperor": 48,
		"whiteHornSlime": 49,
		"badPrincess": 50,
		"badFairy": 51,
		"grayPriest": 52,
		"redSwordsman": 53,
		"whiteGhost": 54,
		"poisonZombie": 55,
		"magicDragon": 56,
		"octopus": 57,
		"darkFairy": 58,
		"greenKnight": 59
	},
	"enemy48": {
		"angel": 0,
		"elemental": 1,
		"steelGuard": 2,
		"evilBat": 3
	},
	"items": {
		"yellowKey": 0,
		"blueKey": 1,
		"redKey": 2,
		"greenKey": 3,
		"steelKey": 4,
		"bigKey": 6,
		"redJewel": 16,
		"blueJewel": 17,
		"greenJewel": 18,
		"yellowJewel": 19,
		"redPotion": 20,
		"bluePotion": 21,
		"greenPotion": 22,
		"yellowPotion": 23,
		"lifeWand": 33,
		"sword0": 60,
		"sword1": 50,
		"sword2": 51,
		"sword3": 52,
		"sword4": 53,
		"sword5": 54,
		"shield0": 61,
		"shield1": 55,
		"shield2": 56,
		"shield3": 57,
		"shield4": 58,
		"shield5": 59,
		"book": 9,
		"fly": 12,
		"pickaxe": 45,
		"icePickaxe": 44,
		"bomb": 43,
		"centerFly": 13,
		"upFly": 15,
		"downFly": 14,
		"coin": 11,
		"snow": 41,
		"cross": 40,
		"superPotion": 29,
		"earthquake": 8,
		"poisonWine": 24,
		"weakWine": 25,
		"curseWine": 27,
		"superWine": 28,
		"knife": 42,
		"moneyPocket": 46,
		"shoes": 47,
		"hammer": 48,
		"jumpShoes": 49,
		"skill1": 30,
		"wand": 10
	},
	"autotile": {
		"autotile": 0,
		"autotile1": 0,
		"autotile2": 0,
		"autotile3": 0
	}
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maps_90f36752_8815_4be8_b32b_d7fad1d0542e", function() { return maps_90f36752_8815_4be8_b32b_d7fad1d0542e; });
var maps_90f36752_8815_4be8_b32b_d7fad1d0542e = 
{
	"1": {"cls":"terrains","id":"yellowWall","canBreak":true},
	"2": {"cls":"terrains","id":"whiteWall","canBreak":true},
	"3": {"cls":"terrains","id":"blueWall","canBreak":true},
	"4": {"cls":"animates","id":"star","noPass":true},
	"5": {"cls":"animates","id":"lava","noPass":true},
	"6": {"cls":"terrains","id":"ice"},
	"7": {"cls":"terrains","id":"blueShop-left"},
	"8": {"cls":"terrains","id":"blueShop-right"},
	"9": {"cls":"terrains","id":"pinkShop-left"},
	"10": {"cls":"terrains","id":"pinkShop-right"},
	"11": {"cls":"animates","id":"lavaNet","noPass":false,"trigger":"passNet"},
	"12": {"cls":"animates","id":"poisonNet","noPass":false,"trigger":"passNet"},
	"13": {"cls":"animates","id":"weakNet","noPass":false,"trigger":"passNet"},
	"14": {"cls":"animates","id":"curseNet","noPass":false,"trigger":"passNet"},
	"15": {"cls":"animates","id":"blueWater","noPass":true},
	"16": {"cls":"animates","id":"water","noPass":true},
	"20": {"cls":"autotile","id":"autotile","noPass":true},
	"21": {"cls":"items","id":"yellowKey"},
	"22": {"cls":"items","id":"blueKey"},
	"23": {"cls":"items","id":"redKey"},
	"24": {"cls":"items","id":"greenKey"},
	"25": {"cls":"items","id":"steelKey"},
	"26": {"cls":"items","id":"bigKey"},
	"27": {"cls":"items","id":"redJewel"},
	"28": {"cls":"items","id":"blueJewel"},
	"29": {"cls":"items","id":"greenJewel"},
	"30": {"cls":"items","id":"yellowJewel"},
	"31": {"cls":"items","id":"redPotion"},
	"32": {"cls":"items","id":"bluePotion"},
	"33": {"cls":"items","id":"greenPotion"},
	"34": {"cls":"items","id":"yellowPotion"},
	"35": {"cls":"items","id":"sword1"},
	"36": {"cls":"items","id":"shield1"},
	"37": {"cls":"items","id":"sword2"},
	"38": {"cls":"items","id":"shield2"},
	"39": {"cls":"items","id":"sword3"},
	"40": {"cls":"items","id":"shield3"},
	"41": {"cls":"items","id":"sword4"},
	"42": {"cls":"items","id":"shield4"},
	"43": {"cls":"items","id":"sword5"},
	"44": {"cls":"items","id":"shield5"},
	"45": {"cls":"items","id":"book"},
	"46": {"cls":"items","id":"fly"},
	"47": {"cls":"items","id":"pickaxe"},
	"48": {"cls":"items","id":"icePickaxe"},
	"49": {"cls":"items","id":"bomb"},
	"50": {"cls":"items","id":"centerFly"},
	"51": {"cls":"items","id":"upFly"},
	"52": {"cls":"items","id":"downFly"},
	"53": {"cls":"items","id":"coin"},
	"54": {"cls":"items","id":"snow"},
	"55": {"cls":"items","id":"cross"},
	"56": {"cls":"items","id":"superPotion"},
	"57": {"cls":"items","id":"earthquake"},
	"58": {"cls":"items","id":"poisonWine"},
	"59": {"cls":"items","id":"weakWine"},
	"60": {"cls":"items","id":"curseWine"},
	"61": {"cls":"items","id":"superWine"},
	"62": {"cls":"items","id":"knife"},
	"63": {"cls":"items","id":"moneyPocket"},
	"64": {"cls":"items","id":"shoes"},
	"65": {"cls":"items","id":"hammer"},
	"68": {"cls":"items","id":"lifeWand"},
	"69": {"cls":"items","id":"jumpShoes"},
	"70": {"cls":"items","id":"sword0"},
	"71": {"cls":"items","id":"shield0"},
	"72": {"cls":"items","id":"skill1"},
	"73": {"cls":"items","id":"wand"},
	"81": {"cls":"terrains","id":"yellowDoor","trigger":"openDoor"},
	"82": {"cls":"terrains","id":"blueDoor","trigger":"openDoor"},
	"83": {"cls":"terrains","id":"redDoor","trigger":"openDoor"},
	"84": {"cls":"terrains","id":"greenDoor","trigger":"openDoor"},
	"85": {"cls":"terrains","id":"specialDoor","trigger":"openDoor"},
	"86": {"cls":"terrains","id":"steelDoor","trigger":"openDoor"},
	"87": {"cls":"terrains","id":"upFloor","noPass":false},
	"88": {"cls":"terrains","id":"downFloor","noPass":false},
	"89": {"cls":"animates","id":"portal","noPass":false},
	"90": {"cls":"animates","id":"starPortal","noPass":false},
	"91": {"cls":"animates","id":"upPortal","noPass":false},
	"92": {"cls":"animates","id":"leftPortal","noPass":false},
	"93": {"cls":"animates","id":"downPortal","noPass":false},
	"94": {"cls":"animates","id":"rightPortal","noPass":false},
	"101": {"cls":"animates","id":"crystalUp"},
	"102": {"cls":"animates","id":"crystalBottom"},
	"103": {"cls":"animates","id":"fire"},
	"104": {"cls":"animates","id":"switch"},
	"121": {"cls":"npcs","id":"man"},
	"122": {"cls":"npcs","id":"woman"},
	"123": {"cls":"npcs","id":"thief"},
	"124": {"cls":"npcs","id":"fairy"},
	"125": {"cls":"npcs","id":"magician"},
	"126": {"cls":"npcs","id":"womanMagician"},
	"127": {"cls":"npcs","id":"oldMan"},
	"128": {"cls":"npcs","id":"child"},
	"129": {"cls":"npcs","id":"wood"},
	"130": {"cls":"npcs","id":"pinkShop"},
	"131": {"cls":"npcs","id":"blueShop"},
	"132": {"cls":"npcs","id":"princess"},
	"133": {"cls":"npc48","id":"npc0","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"}},
	"134": {"cls":"npc48","id":"npc1","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"}},
	"135": {"cls":"npc48","id":"npc2","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"}},
	"136": {"cls":"npc48","id":"npc3","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"}},
	"151": {"cls":"autotile","id":"autotile1","noPass":true},
	"152": {"cls":"autotile","id":"autotile2","noPass":true},
	"153": {"cls":"autotile","id":"autotile3","noPass":true},
	"161": {"cls":"terrains","id":"arrowUp","noPass":false,"cannotOut":["left","right","down"],"cannotIn":["down"]},
	"162": {"cls":"terrains","id":"arrowDown","noPass":false,"cannotOut":["left","right","up"],"cannotIn":["up"]},
	"163": {"cls":"terrains","id":"arrowLeft","noPass":false,"cannotOut":["up","down","right"],"cannotIn":["right"]},
	"164": {"cls":"terrains","id":"arrowRight","noPass":false,"cannotOut":["up","down","left"],"cannotIn":["left"]},
	"165": {"cls":"terrains","id":"light","trigger":"changeLight","noPass":false},
	"166": {"cls":"terrains","id":"darkLight","noPass":true},
	"167": {"cls":"terrains","id":"ski","trigger":"ski","noPass":false},
	"168": {"cls":"terrains","id":"flower","noPass":false},
	"169": {"cls":"terrains","id":"box","trigger":"pushBox","noPass":true},
	"170": {"cls":"terrains","id":"boxed","trigger":"pushBox","noPass":true},
	"181": {"cls":"npcs","id":"wlt"},
	"182": {"cls":"npcs","id":"wt"},
	"183": {"cls":"npcs","id":"wrt"},
	"184": {"cls":"npcs","id":"wl"},
	"185": {"cls":"npcs","id":"wc"},
	"186": {"cls":"npcs","id":"wr"},
	"187": {"cls":"npcs","id":"wlb"},
	"188": {"cls":"npcs","id":"wrb"},
	"189": {"cls":"npcs","id":"dlt"},
	"190": {"cls":"npcs","id":"dt"},
	"191": {"cls":"npcs","id":"drt"},
	"192": {"cls":"npcs","id":"dl"},
	"193": {"cls":"npcs","id":"dc"},
	"194": {"cls":"npcs","id":"dr"},
	"195": {"cls":"npcs","id":"dlb"},
	"196": {"cls":"npcs","id":"drb"},
	"201": {"cls":"enemys","id":"greenSlime"},
	"202": {"cls":"enemys","id":"redSlime"},
	"203": {"cls":"enemys","id":"blackSlime"},
	"204": {"cls":"enemys","id":"slimelord"},
	"205": {"cls":"enemys","id":"bat"},
	"206": {"cls":"enemys","id":"bigBat"},
	"207": {"cls":"enemys","id":"redBat"},
	"208": {"cls":"enemys","id":"vampire"},
	"209": {"cls":"enemys","id":"skeleton"},
	"210": {"cls":"enemys","id":"skeletonSoilder"},
	"211": {"cls":"enemys","id":"skeletonCaptain"},
	"212": {"cls":"enemys","id":"ghostSkeleton"},
	"213": {"cls":"enemys","id":"zombie"},
	"214": {"cls":"enemys","id":"zombieKnight"},
	"215": {"cls":"enemys","id":"rock"},
	"216": {"cls":"enemys","id":"slimeMan"},
	"217": {"cls":"enemys","id":"bluePriest"},
	"218": {"cls":"enemys","id":"redPriest"},
	"219": {"cls":"enemys","id":"brownWizard"},
	"220": {"cls":"enemys","id":"redWizard"},
	"221": {"cls":"enemys","id":"yellowGuard"},
	"222": {"cls":"enemys","id":"blueGuard"},
	"223": {"cls":"enemys","id":"redGuard"},
	"224": {"cls":"enemys","id":"swordsman"},
	"225": {"cls":"enemys","id":"soldier"},
	"226": {"cls":"enemys","id":"yellowKnight"},
	"227": {"cls":"enemys","id":"redKnight"},
	"228": {"cls":"enemys","id":"darkKnight"},
	"229": {"cls":"enemys","id":"blackKing"},
	"230": {"cls":"enemys","id":"yellowKing"},
	"231": {"cls":"enemys","id":"greenKing"},
	"232": {"cls":"enemys","id":"blueKnight"},
	"233": {"cls":"enemys","id":"goldSlime"},
	"234": {"cls":"enemys","id":"poisonSkeleton"},
	"235": {"cls":"enemys","id":"poisonBat"},
	"236": {"cls":"enemys","id":"steelRock"},
	"237": {"cls":"enemys","id":"skeletonPriest"},
	"238": {"cls":"enemys","id":"skeletonKing"},
	"239": {"cls":"enemys","id":"skeletonWizard"},
	"240": {"cls":"enemys","id":"redSkeletonCaption"},
	"241": {"cls":"enemys","id":"badHero"},
	"242": {"cls":"enemys","id":"demon"},
	"243": {"cls":"enemys","id":"demonPriest"},
	"244": {"cls":"enemys","id":"goldHornSlime"},
	"245": {"cls":"enemys","id":"redKing"},
	"246": {"cls":"enemys","id":"whiteKing"},
	"247": {"cls":"enemys","id":"blackMagician"},
	"248": {"cls":"enemys","id":"silverSlime"},
	"249": {"cls":"enemys","id":"swordEmperor"},
	"250": {"cls":"enemys","id":"whiteHornSlime"},
	"251": {"cls":"enemys","id":"badPrincess"},
	"252": {"cls":"enemys","id":"badFairy"},
	"253": {"cls":"enemys","id":"grayPriest"},
	"254": {"cls":"enemys","id":"redSwordsman"},
	"255": {"cls":"enemys","id":"whiteGhost"},
	"256": {"cls":"enemys","id":"poisonZombie"},
	"257": {"cls":"enemys","id":"magicDragon"},
	"258": {"cls":"enemys","id":"octopus"},
	"259": {"cls":"enemys","id":"darkFairy"},
	"260": {"cls":"enemys","id":"greenKnight"},
	"261": {"cls":"enemy48","id":"angel"},
	"262": {"cls":"enemy48","id":"elemental"},
	"263": {"cls":"enemy48","id":"steelGuard"},
	"264": {"cls":"enemy48","id":"evilBat"}
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d", function() { return data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d; });
var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"sample0",
			"sample1",
			"sample2",
			"sample3",
			"MT0"
		],
		"images": [
			"bg.jpg",
			"winskin.png"
		],
		"tilesets": [
			"magictower.png"
		],
		"animates": [
			"hand",
			"sword",
			"zone"
		],
		"bgms": [
			"bgm.mp3"
		],
		"sounds": [
			"floor.mp3",
			"attack.mp3",
			"door.mp3",
			"item.mp3",
			"equip.mp3",
			"zone.mp3",
			"jump.mp3",
			"pickaxe.mp3",
			"bomb.mp3",
			"centerFly.mp3"
		],
		"nameMap": {
			"背景图.jpg": "bg.jpg",
			"背景音乐.mp3": "bgm.mp3"
		},
		"startBackground": "bg.jpg",
		"startLogoStyle": "color: black",
		"levelChoose": [
			[
				"简单",
				"Easy"
			],
			[
				"普通",
				"Normal"
			],
			[
				"困难",
				"Hard"
			],
			[
				"噩梦",
				"Hell"
			]
		],
		"equipName": [
			"武器",
			"盾牌"
		],
		"startBgm": null,
		"statusLeftBackground": null,
		"statusTopBackground": "url(project/images/ground.png) repeat",
		"toolsBackground": "url(project/images/ground.png) repeat",
		"borderColor": "#CCCCCC",
		"statusBarColor": "white",
		"hardLabelColor": "red",
		"floorChangingBackground": "black",
		"floorChangingTextColor": "white",
		"font": "Verdana",
		"startButtonsStyle": "background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: #FFFFFF 2px solid; caret-color: #FFD700;"
	},
	"firstData": {
		"title": "魔塔样板",
		"name": "template",
		"version": "Ver 2.6.6",
		"floorId": "sample0",
		"hero": {
			"name": "阳光",
			"lv": 1,
			"hpmax": 9999,
			"hp": 1000,
			"manamax": -1,
			"mana": 0,
			"atk": 100,
			"def": 100,
			"mdef": 0,
			"money": 0,
			"experience": 0,
			"equipment": [],
			"items": {
				"keys": {
					"yellowKey": 0,
					"blueKey": 0,
					"redKey": 0
				},
				"constants": {},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "up",
				"x": 6,
				"y": 10
			},
			"flags": {},
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "在这里可以用事件来自定义绘制标题界面的背景图等"
			},
			{
				"type": "comment",
				"text": "也可以直接切换到其他楼层（比如某个开始剧情楼层）进行操作。"
			},
			{
				"type": "showImage",
				"code": 1,
				"image": "bg.jpg",
				"loc": [
					0,
					0
				],
				"dw": 100,
				"dh": 100,
				"opacity": 1,
				"time": 0
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "comment",
						"text": "给用户提供选择项，这里简单的使用了choices事件"
					},
					{
						"type": "comment",
						"text": "也可以贴按钮图然后使用等待操作来完成"
					},
					{
						"type": "choices",
						"choices": [
							{
								"text": "开始游戏",
								"action": [
									{
										"type": "comment",
										"text": "检查bgm状态，下同"
									},
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "if",
										"condition": "core.flags.startDirectly",
										"true": [
											{
												"type": "comment",
												"text": "直接开始游戏，设置初始化数据"
											},
											{
												"type": "function",
												"function": "function(){\ncore.events.setInitData('')\n}"
											}
										],
										"false": [
											{
												"type": "comment",
												"text": "动态生成难度选择项"
											},
											{
												"type": "function",
												"function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\"text\": one[0], \"action\": [\n\t\t{\"type\": \"function\", \"function\": \"function() { core.status.hard = '\"+one[1]+\"'; core.events.setInitData('\"+one[1]+\"'); }\"}\n\t]});\n})\ncore.insertAction({\"type\": \"choices\", \"choices\": choices});\n}"
											}
										]
									},
									{
										"type": "hideImage",
										"code": 1,
										"time": 0
									},
									{
										"type": "comment",
										"text": "成功选择难度"
									},
									{
										"type": "break"
									}
								]
							},
							{
								"text": "读取存档",
								"action": [
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "comment",
										"text": "简单的使用“呼出读档界面”来处理"
									},
									{
										"type": "callLoad"
									}
								]
							},
							{
								"text": "回放录像",
								"action": [
									{
										"type": "function",
										"function": "function(){\ncore.control.checkBgm()\n}"
									},
									{
										"type": "comment",
										"text": "这段代码会弹框选择录像文件"
									},
									{
										"type": "if",
										"condition": "!core.isReplaying()",
										"true": [
											{
												"type": "function",
												"function": "function(){\ncore.chooseReplayFile()\n}"
											}
										],
										"false": []
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			}
		],
		"startText": [
		],
		"shops": [
			{
				"id": "moneyShop1",
				"name": "贪婪之神",
				"icon": "blueShop",
				"textInList": "1F金币商店",
				"commonTimes": false,
				"mustEnable": false,
				"use": "money",
				"need": "20+10*times*(times+1)",
				"text": "勇敢的武士啊，给我${need}金币就可以：",
				"choices": [
					{
						"text": "生命+800",
						"effect": "status:hp+=800"
					}
				]
			},
			{
				"id": "expShop1",
				"name": "经验之神",
				"icon": "pinkShop",
				"textInList": "1F经验商店",
				"commonTimes": false,
				"mustEnable": false,
				"use": "experience",
				"need": "-1",
				"text": "勇敢的武士啊，给我若干经验就可以：",
				"choices": [
					{
						"text": "等级+1",
						"need": "100",
						"effect": "status:hp+=1000"
					}
				]
			},
			{
				"id": "itemShop",
				"item": true,
				"textInList": "道具商店",
				"mustEnable": false,
				"choices": [
					{
						"id": "yellowKey",
						"number": 10,
						"money": 10
					}
				]
			},
			{
				"id": "keyShop1",
				"textInList": "回收钥匙商店",
				"mustEnable": false,
				"commonEvent": "回收钥匙商店"
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "20",
				"title": "第二级",
				"action": [
					{
						"type": "setValue",
						"name": "status:atk",
						"value": "status:atk+10"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"value": "status:def+10"
					}
				]
			},
			{
				"need": "40",
				"title": "",
				"action": [
					{
						"type": "tip",
						"text": "恭喜升级"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redJewel": 3,
		"blueJewel": 3,
		"greenJewel": 5,
		"redPotion": 100,
		"bluePotion": 250,
		"yellowPotion": 500,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"moveSpeed": 100,
		"animateSpeed": 400,
		"floorChangeTime": 0
	},
	"flags": {
		"enableFloor": true,
		"enableName": false,
		"enableLv": false,
		"enableHPMax": false,
		"enableMana": false,
		"enableMDef": true,
		"enableMoney": true,
		"enableExperience": false,
		"enableLevelUp": false,
		"levelUpLeftMode": false,
		"enableKeys": true,
		"enablePZF": false,
		"enableDebuff": false,
		"enableSkill": false,
		"flyNearStair": true,
		"flyRecordPosition": false,
		"pickaxeFourDirections": false,
		"bombFourDirections": false,
		"snowFourDirections": false,
		"bigKeyIsBox": false,
		"steelDoorWithoutKey": false,
		"itemFirstText": false,
		"equipment": false,
		"equipboxButton": false,
		"iconInEquipbox": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"hatredDecrease": true,
		"betweenAttackCeil": false,
		"betweenAttackMax": false,
		"useLoop": false,
		"startUsingCanvas": false,
		"startDirectly": true,
		"statusCanvas": false,
		"statusCanvasRowsOnMobile": 3,
		"displayEnemyDamage": true,
		"displayCritical": true,
		"displayExtraDamage": true,
		"enableGentleClick": true,
		"potionWhileRouting": false,
		"ignoreChangeFloor": true,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableDisabledShop": true,
		"disableShopOnDamage": false,
		"blurFg": false,
		"checkConsole": false
	}
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("free-tex-packer-core");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MT0.js": 9,
	"./sample0.js": 10,
	"./sample1.js": 11,
	"./sample2.js": 12,
	"./sample3.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

main.floors.MT0=
{
"floorId": "MT0",
"title": "主塔 0 层",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  10016,  10017,  10018,  10024,  10025,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
"firstArrive": [],
"parallelDo": "",
"events": {},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"bgmap": [

],
"fgmap": [

],
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

main.floors.sample0=
{
"floorId": "sample0",
"title": "样板 0 层",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"bgm": "bgm.mp3",
"item_ratio": 1,
"map": [
    [  0,  0,220,  0,  0, 20, 87,  3, 65, 64, 44, 43, 42],
    [  0,246,  0,246,  0, 20,  0,  3, 58, 59, 60, 61, 41],
    [219,  0,  0,  0,219, 20,  0,  3, 57, 26, 62, 63, 40],
    [ 20, 20,125, 20, 20, 20,  0,  3, 53, 54, 55, 56, 39],
    [216,247,263,235,248,  6,  0,  3, 49, 50, 51, 52, 38],
    [  6,  6,125,  6,  6,  6,  0,  1, 45, 46, 47, 48, 37],
    [224,254,212,262,204,  5,  0,  1, 31, 32, 34, 33, 36],
    [201,261,217,   0,207,  5,  0,  1, 27, 28, 29, 30, 35],
    [  5,  5,125,  5,  5,  5,  0,  1, 21, 22, 23, 24, 25],
    [  0,  0,237,  0,  0,  0, 45,  1,  1,  1,121,  1,  1],
    [  4,  4,133,  4,  4,  4,  0,  0,  0,  0,  0, 85,124],
    [ 87, 11, 12, 13, 14,  4,  4,  2,  2,  2,122,  2,  2],
    [ 88, 89, 90, 91, 92, 93, 94,  2, 81, 82, 83, 84, 86]
],
"firstArrive": [],
"events": {
    "10,9": [
        "\t[老人,man]这些是本样板支持的所有的道具。\n\n道具分为四类：items, constants, tools，equips。\nitems 为即捡即用类道具，例如宝石、血瓶、剑盾等。\nconstants 为永久道具，例如怪物手册、楼层传送器、幸运金币等。\ntools 为消耗类道具，例如破墙镐、炸弹、中心对称飞行器等。\nequips 为装备，例如剑盾等。",
        "\t[老人,man]\b[up]有关道具效果，定义在items.js中。\n目前大多数道具已有默认行为，如有自定义的需求则需在items.js中修改代码。",
        "\t[老人,man]\b[up]拾取道具结束后可触发 afterGetItem 事件。\n\n有关事件的各种信息在下一层会有更为详细的说明。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "10,11": [
        "\t[老人,woman]这些是门，需要对应的钥匙打开。\n机关门必须使用特殊的开法。",
        "\t[老人,woman]开门后可触发 afterOpenDoor 事件。\n\n有关事件的各种信息在下一层会有更为详细的说明。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "2,10": [
        "\t[少女,npc0]这些是路障、楼梯、传送门。",
        "\t[少女,npc0]血网的伤害数值、中毒后每步伤害数值、衰弱时攻防下降的数值，都在 data.js 内定义。\n\n路障同样会尽量被自动寻路绕过。",
        "\t[少女,npc0]楼梯和传送门需要在changeFloor中定义目标楼层和位置，可参见样板里已有的的写法。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "2,8": [
        "\t[老人,magician]这些都是各种各样的怪物，所有怪物的数据都在enemys.js中设置。",
        "\t[老人,magician]这批怪物分别为：普通、先攻、魔攻、坚固、2连击、3连击、4连击、破甲、反击、净化。",
        "\t[老人,magician]打败怪物后可触发 afterBattle 事件。\n\n有关事件的各种信息在下一层会有更为详细的说明。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "2,5": [
        "\t[老人,magician]模仿、吸血、中毒、衰弱、诅咒。\n\n请注意吸血怪需要设置value为吸血数值，可参见样板中黑暗大法师的写法。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "2,3": [
        "\t[老人,magician]领域、夹击。\n请注意领域怪需要设置value为伤害数值，可参见样板中初级巫师的写法。",
        "\t[老人,magician]夹击和领域同时发生时先计算领域，再夹击。\n自动寻路同样会尽量绕过你设置的这些点。",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "12,10": {
        "enable": false,
        "data": [
            "\t[仙子,fairy]只有楼上启用事件后，才能看到我并可以和我对话来触发事件。",
            {
                "type": "hide",
                "time": 500
            }
        ]
    }
},
"changeFloor": {
    "6,0": {
        "floorId": "sample1",
        "stair": "downFloor"
    },
    "0,11": {
        "floorId": "sample0",
        "loc": [
            0,
            12
        ]
    },
    "0,12": {
        "floorId": "sample0",
        "stair": "upFloor"
    },
    "1,12": {
        "floorId": "sample0",
        "loc": [
            1,
            12
        ]
    },
    "2,12": {
        "floorId": "sample0",
        "loc": [
            2,
            12
        ]
    },
    "3,12": {
        "floorId": "sample0",
        "loc": [
            6,
            1
        ],
        "direction": "up"
    },
    "4,12": {
        "floorId": "sample0",
        "loc": [
            0,
            9
        ],
        "direction": "left",
        "time": 1000
    },
    "5,12": {
        "floorId": "sample0",
        "loc": [
            6,
            10
        ],
        "time": 0,
        "portalWithoutTrigger": false
    },
    "6,12": {
        "floorId": "sample0",
        "loc": [
            10,
            10
        ],
        "direction": "left",
        "time": 1000
    }
},
"afterBattle": {
    "2,6": [
        "\t[ghostSkeleton]不可能，你怎么可能打败我！\n（一个打败怪物触发的事件）"
    ]
},
"afterGetItem": {
    "11,8": [
        "由于状态栏放不下，绿钥匙和铁门钥匙均视为tools，放入工具栏中。\n碰到绿门和铁门仍然会自动使用开门。"
    ],
    "8,6": [
        "由于吸血和夹击等的存在，血瓶默认自动被绕路。\n你可以修改data.js中的系统Flag来设置这一项。"
    ],
    "8,7": [
        "如需修改消耗品的效果，请前往 data.js ，找到并修改values内对应的具体数值即可。\n如果有更高级的需求（如每个区域宝石数值变化），详见doc文档内的做法说明。"
    ],
    "9,5": [
        "每层楼的 canFlyTo 决定了该楼层能否被飞到。\n\n不能被飞到的楼层也无法使用楼层传送器。",
        "飞行的楼层顺序由 main.js 中 floorIds 加载顺序所决定。\n\n是否必须在楼梯边使用楼传器由 data.js 中的系统Flag所决定。"
    ],
    "10,5": [
        "破墙镐是破面前的墙壁还是四个方向的墙壁，由data.js中的系统Flag所决定。"
    ],
    "8,4": [
        "炸弹是只能炸面前的怪物还是四个方向的怪物，由data.js中的系统Flag所决定。\n如只能炸前方怪物则和上面的圣锤等价。\n不能被炸的怪物在enemys中可以定义，可参见样板里黑衣魔王和黑暗大法师的写法。"
    ],
    "10,4": [
        "“上楼”和“下楼”的目标层由 main.js 的 floorIds顺序所决定。"
    ],
    "9,2": [
        "该道具默认是大黄门钥匙，如需改为钥匙盒直接修改 data.js 中的系统Flag即可。"
    ],
    "10,2": [
        "屠龙匕首目前未被定义，可能需要自行实现功能。\n有关如何实现一个道具功能参见doc文档。"
    ],
    "12,7": [
        "在 data.js 的系统Flag中设置是否启用装备栏。\n如果不启用则装备会直接增加属性。"
    ],
    "12,6": [
        "在 data.js 的系统Flag中设置是否启用装备栏按钮。\n如果启用则装备栏按钮会替代楼传按钮。"
    ],
    "12,5": [
        "装备的种类由全塔属性中的equipName决定,type的值就是该类型在equipName中的位次，例如默认情况下equiptype为0代表武器，同时只有type为0的装备的animate属性生效"
    ]
},
"afterOpenDoor": {
    "11,12": [
        "你开了一个绿门，触发了一个afterOpenDoor事件"
    ]
},
"cannotMove": {},
"bgmap": [
    [  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0, 42,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 37,  0, 55,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0, 38,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
"fgmap": [

],
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

main.floors.sample1=
{
"floorId": "sample1",
"title": "样板 1 层",
"name": "1",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "grass",
"images": [
    [
        0,
        0,
        "bg.jpg",
        0
    ]
],
"weather": [
    "snow",
    6
],
"item_ratio": 1,
"map": [
    [  7,131,  8,152,  9,130, 10,152,166,165,132,165,166],
    [  0,  0,  0,  0,  0,  0,  0,152,165,164,  0,162,165],
    [152,152,152,152,121,152,152,152,  0,  0,229,  0,  0],
    [ 43, 33, 44,151,  0,  0,  0,152,165,161,  0,163,165],
    [ 21, 22, 21,151,  0,  0,  0,152,166,165,  0,165,166],
    [151,245,151,151,  0, 87,  0,152,152,152, 85,153,153],
    [  0,246,  0,151,  0,  0,  0,152,152,221,  0,221,153],
    [246,  0,246,151,  0,  0,  0,121, 85,  0,  0,  0,153],
    [151,246,151,151,  0,153,153,153,153,153,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,164,  0,  0,163,  0,  0],
    [  1,  1,  1,  1,  0, 20,  0,  0,  0,162,  0,161,  0],
    [  1,  0,123,  1,  0, 20,124,  0,121,  0,122,  0,126],
    [  1,  0,  0,  1, 88, 20, 86,  0,  0,  0,  0,  0,122]
],
"firstArrive": [],
"events": {
    "4,10": [
        "\t[样板提示]本层楼将会对各类事件进行介绍。",
        "左边是一个仿50层的陷阱做法，上方是商店、快捷商店的使用方法，右上是一个典型的杀怪开门的例子，右下是各类可能的NPC事件。",
        "本样板目前支持的事件列表大致有：\ntext: 显示一段文字（比如你现在正在看到的）\ntip: 左上角显示提示\nshow: 使一个事件有效（可见、可被交互）\nhide: 使一个事件失效（不可见、不可被交互）\ntrigger: 触发另一个地点的事件\nanimate: 显示动画\nbattle: 强制和某怪物战斗\nopenDoor: 无需钥匙开门（例如机关门、暗墙）",
        "openShop: 打开一个全局商店\ndisableShop: 禁用一个全局商店\nchangeFloor: 传送勇士到某层某位置\nchangePos: 传送勇士到当层某位置；转向\nshowImage: 显示图片\nsetFg: 更改画面色调\nsetWeather: 更改天气\nmove: 移动事件效果\nmoveHero: 移动勇士效果\nplayBgm: 播放某个背景音乐\npauseBgm: 暂停背景音乐\nresumeBgm: 恢复背景音乐的播放\nplaySound: 播放某个音频",
        "if: 条件判断\nchoices: 提供选项\nsetValue: 设置勇士属性道具，或某个变量/flag\nupdate: 更新状态栏和地图显伤\nwin: 获得胜利（游戏通关）\nlose: 游戏失败\nsleep: 等待多少毫秒\nexit: 立刻结束当前事件\nrevisit: 立刻结束事件并重新触发\nfunction: 自定义JS脚本\n\n更多支持的事件还在编写中，欢迎您宝贵的意见。",
        "有关各事件的样例，可参见本层一些NPC的写法。\n所有事件样例本层都有介绍。\n\n一个自定义事件处理完后，需要调用{\"type\": \"hide\"}该事件才不会再次出现。",
        {
            "type": "hide"
        }
    ],
    "1,5": {
        "enable": false,
        "data": []
    },
    "1,6": {
        "enable": false,
        "data": []
    },
    "0,7": {
        "enable": false,
        "data": []
    },
    "2,7": {
        "enable": false,
        "data": []
    },
    "1,8": {
        "enable": false,
        "data": []
    },
    "1,7": [
        {
            "type": "show",
            "loc": [
                1,
                5
            ],
            "time": 1500
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[redKing]欢迎来到魔塔，你是第一百位挑战者。\n若你能打败我所有的手下，我就与你一对一的决斗。\n现在你必须接受我的安排。",
        {
            "type": "show",
            "loc": [
                [
                    1,
                    6
                ],
                [
                    0,
                    7
                ],
                [
                    1,
                    8
                ],
                [
                    2,
                    7
                ]
            ],
            "time": 500
        },
        "\t[hero]什么？",
        {
            "type": "playSound",
            "name": "attack.mp3"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "status:atk/10"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "status:def/10"
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    6
                ],
                [
                    0,
                    7
                ],
                [
                    2,
                    7
                ],
                [
                    1,
                    8
                ]
            ]
        },
        {
            "type": "hide",
            "loc": [
                1,
                5
            ],
            "time": 500
        },
        {
            "type": "hide"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0
            ],
            "time": 1250
        },
        {
            "type": "sleep",
            "time": 700
        },
        {
            "type": "changeFloor",
            "floorId": "sample1",
            "loc": [
                1,
                11
            ],
            "direction": "right",
            "time": 1000
        },
        {
            "type": "trigger",
            "loc": [
                2,
                11
            ]
        }
    ],
    "2,11": [
        "\t[杰克,thief]喂！醒醒！快醒醒！",
        {
            "type": "setCurtain",
            "time": 1500
        },
        "\t[hero]额，我这是在什么地方？",
        "\t[杰克,thief]你被魔王抓了起来扔进了监狱，和我关在了一起，但是幸运的是我在昨天刚刚挖好一条越狱的暗道！",
        {
            "type": "openDoor",
            "loc": [
                3,
                11
            ]
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[杰克,thief]我先走了，祝你好运！",
        {
            "type": "move",
            "time": 750,
            "steps": [
                "right",
                "right",
                "down"
            ]
        },
        "上面是个move事件，可以对NPC等进行移动。\n详见样板中小偷事件的写法。",
        "\t[hero]怎么跑的这么快..."
    ],
    "4,2": [
        "\t[老人,man]本塔的商店有两类，全局商店和非全局商店。\n\n所谓非全局商店，就类似于右下角那个卖钥匙的老人一样，一定要碰到才能触发事件。\n\n而全局商店，则能在快捷商店中直接使用。",
        "\t[老人,man]要注册一个全局商店，你需要在 data.js 中，找到 shops，并在内添加你的商店信息。",
        "\t[老人,man]商店信息添加后，可以在需要的事件处调用{\"type\": \"openShop\"}来打开你添加的全局商店。",
        "\t[老人,man]在上面的例子里，左边是一个仿50层的金币商店，右边是一个仿24层的经验商店。\n\n商店被访问后即可在快捷商店中进行使用。",
        "\t[老人,man]如果你需要在某层暂时禁用快捷商店，可以在data.js中设置cannotUseQuickShop。\n如果需要永久禁用商店，请使用{\"type\":\"disableShop\"}",
        {
            "type": "hide",
            "time": 500
        }
    ],
    "1,0": [
        {
            "type": "openShop",
            "id": "moneyShop1"
        }
    ],
    "5,0": [
        {
            "type": "openShop",
            "id": "expShop1"
        }
    ],
    "7,7": [
        "\t[老人,man]这是一个典型的杀怪开门、强制战斗事件。",
        {
            "type": "hide"
        }
    ],
    "8,7": {
        "enable": false,
        "data": []
    },
    "9,7": [
        {
            "type": "show",
            "loc": [
                8,
                7
            ]
        },
        {
            "type": "hide"
        }
    ],
    "10,4": [
        "\t[blackKing]你终于还是来了。",
        "\t[hero]放开我们的公主！",
        "\t[blackKing]如果我不愿意呢？",
        "\t[hero]无需多说，拔剑吧！",
        {
            "type": "battle",
            "id": "blackKing"
        },
        {
            "type": "hide",
            "loc": [
                10,
                2
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                8,
                7
            ]
        },
        "\t[blackKing]没想到你已经变得这么强大了... 算你厉害。\n公主就交给你了，请好好对她。",
        {
            "type": "hide"
        }
    ],
    "10,0": [
        "\t[hero]公主，我来救你了~",
        "\t[公主,princess]快救我出去！我受够这里了！",
        "\t[hero]公主别怕，我们走吧~",
        {
            "type": "win",
            "reason": "救出公主"
        }
    ],
    "6,12": {
        "enable": false,
        "data": []
    },
    "6,11": [
        "\t[仙子,fairy]通过调用 {\"type\": \"show\"} 可以使隐藏的事件显示出来。\n比如我下面这个机关门。",
        {
            "type": "show",
            "loc": [
                6,
                12
            ]
        },
        "\t[仙子,fairy]通过调用 {\"type\": \"openDoor\"} 可以无需钥匙打开一扇门或暗墙。",
        {
            "type": "openDoor",
            "loc": [
                6,
                12
            ]
        },
        "\t[仙子,fairy]同时，也可以对其它层进行操作，比如楼下的机关门，现在已经为你打开了。",
        {
            "type": "openDoor",
            "loc": [
                11,
                10
            ],
            "floorId": "sample0"
        },
        "\t[仙子,fairy]如果 show 或 hide 指定了 time 参数，则以动画效果显示，指定的参数作为消失时间（毫秒）来计算。",
        "\t[仙子,fairy]现在到楼下来找我吧~",
        {
            "type": "show",
            "loc": [
                12,
                10
            ],
            "floorId": "sample0"
        },
        {
            "type": "hide",
            "time": 500
        }
    ],
    "8,11": [
        {
            "type": "setValue",
            "name": "flag:man_times",
            "value": "flag:man_times+1"
        },
        "\t[老人,man]在文字中使用${' ${ '}和 } 可以计算并显示一个表达式的结果。\n",
        "\t[老人,man]例如：\n你的当前攻击力是${status:atk}，防御力是${status:def}。\n攻防和的十倍是${10*(status:atk+status:def)}，攻防之积是${status:atk*status:def}。\n你有${item:yellowKey}把黄钥匙，${item:blueKey}把蓝钥匙，${item:redKey}把红钥匙。\n你有${item:pickaxe}个破，${item:bomb}个炸，${item:centerFly}个飞。\n这是你第${flag:man_times}次和我对话。",
        "\t[老人,man]同时，你也可以通过{\"type\": \"setValue\"}来设置一个勇士的属性、道具，或某个Flag。",
        "\t[老人,man]例如：\n现在我将让你的攻防提升50%，再将攻防和的十倍加到生命值上。",
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "status:atk*1.5"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "status:def*1.5"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "status:hp+10*(status:atk+status:def)"
        },
        "\t[老人,man]再送你500金币，1000经验，1破2炸3飞！",
        {
            "type": "setValue",
            "name": "status:money",
            "value": "status:money+500"
        },
        {
            "type": "setValue",
            "name": "status:experience",
            "value": "status:experience+1000"
        },
        {
            "type": "setValue",
            "name": "item:pickaxe",
            "value": "item:pickaxe+1"
        },
        {
            "type": "setValue",
            "name": "item:bomb",
            "value": "item:bomb+2"
        },
        {
            "type": "setValue",
            "name": "item:centerFly",
            "value": "item:centerFly+3"
        },
        "\t[老人,man]status:xxx 代表勇士的某个属性。\n其中xxx可取hp, atk, def, mdef, money,experience这几项。\n\nitem:xxx 代表勇士的某个道具的个数。\nxxx为道具ID，具体可参见items.js中的定义。\n\nflag:xxx 代表某个自定义Flag或变量。\nxxx为Flag/变量名，可以自行定义，由字母、数字和下划线组成。\n未定义过而直接取用的Flag默认值为false。",
        "\t[老人,man]你现在可以重新和我进行对话，进一步看到属性值的改变。"
    ],
    "10,11": [
        {
            "type": "if",
            "condition": "flag:woman_times==0",
            "true": [
                "\t[老人,woman]这是个很复杂的例子，它将教会你如何使用if 语句进行条件判断，以及 choices 提供选项来供用户进行选择。",
                "\t[老人,woman]第一次访问我将显示这段文字；从第二次开始将会向你出售钥匙。\n钥匙价格将随着访问次数递增。\n当合计出售了七把钥匙后，将送你一把大黄门钥匙，并消失不再出现。",
                "\t[老人,woman]这部分的逻辑比较长，请细心看样板的写法，是很容易看懂并理解的。"
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "flag:woman_times==8",
                    "true": [
                        "\t[老人,woman]你购买的钥匙已经够多了，再继续卖给你的话我会有危险的。",
                        "\t[老人,woman]看在你贡献给我这么多钱的份上，送你一把大黄门钥匙吧，希望你能好好用它。",
                        {
                            "type": "setValue",
                            "name": "item:bigKey",
                            "value": "item:bigKey+1"
                        },
                        "\t[老人,woman]我先走了，拜拜~",
                        {
                            "type": "hide",
                            "time": 500
                        },
                        {
                            "type": "exit"
                        }
                    ],
                    "false": [
                        {
                            "type": "choices",
                            "text": "\t[老人,woman]少年，你需要钥匙吗？\n我这里有大把的！",
                            "choices": [
                                {
                                    "text": "黄钥匙（${9+flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=9+flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(9+flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:yellowKey",
                                                    "value": "item:yellowKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "蓝钥匙（${18+2*flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=18+2*flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(18+2*flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:blueKey",
                                                    "value": "item:blueKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "红钥匙（${36+4*flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=36+4*flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(36+4*flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:redKey",
                                                    "value": "item:redKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "离开",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:woman_times",
            "value": "flag:woman_times+1"
        },
        {
            "type": "revisit"
        }
    ],
    "12,11": [
        "\t[老人,womanMagician]使用 {\"type\":\"function\"} 可以写自定义的JS脚本。\n本塔支持的所有主要API会在doc文档内给出。",
        "\t[老人,womanMagician]例如这个例子：即将弹出一个输入窗口，然后会将你的输入结果直接加到你的攻击力上。",
        {
            "type": "input",
            "text": "请输入你要加攻击力的数值："
        },
        {
            "type": "if",
            "condition": "flag:input>0",
            "true": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "value": "status:atk+flag:input"
                },
                {
                    "type": "tip",
                    "text": "操作成功，攻击+${flag:input}"
                },
                "操作成功，攻击+${flag:input}"
            ],
            "false": []
        },
        "\t[老人,womanMagician]具体可参见样板中本事件的写法。"
    ],
    "10,12": null,
    "12,12": [
        {
            "type": "switch",
            "condition": "flag:woman_times",
            "caseList": [
                {
                    "case": "0",
                    "action": [
                        "\t[老人,woman]现在使用switch改写这个例子"
                    ]
                },
                {
                    "case": "8",
                    "action": [
                        "\t[老人,woman]你购买的钥匙已经够多了，再继续卖给你的话我会有危险的。",
                        "\t[老人,woman]看在你贡献给我这么多钱的份上，送你一把大黄门钥匙吧，希望你能好好用它。",
                        {
                            "type": "setValue",
                            "name": "item:bigKey",
                            "value": "item:bigKey+1"
                        },
                        "\t[老人,woman]我先走了，拜拜~",
                        {
                            "type": "hide",
                            "time": 500
                        },
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "case": "default",
                    "action": [
                        {
                            "type": "comment",
                            "text": "当没有符合的值的场合执行此事件"
                        },
                        {
                            "type": "choices",
                            "text": "\t[老人,woman]少年，你需要钥匙吗？\n我这里有大把的！",
                            "choices": [
                                {
                                    "text": "黄钥匙（${9+flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=9+flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(9+flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:yellowKey",
                                                    "value": "item:yellowKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "蓝钥匙（${18+2*flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=18+2*flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(18+2*flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:blueKey",
                                                    "value": "item:blueKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "红钥匙（${36+4*flag:woman_times}金币）",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "status:money>=36+4*flag:woman_times",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "value": "status:money-(36+4*flag:woman_times)"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:redKey",
                                                    "value": "item:redKey+1"
                                                }
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {
                                                    "type": "revisit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "离开",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:woman_times",
            "value": "flag:woman_times+1"
        },
        {
            "type": "revisit"
        }
    ]
},
"changeFloor": {
    "4,12": {
        "floorId": "sample0",
        "loc": [
            6,
            0
        ]
    },
    "5,5": {
        "floorId": "sample2",
        "stair": "downFloor",
        "direction": "up"
    },
    "10,12": null
},
"afterBattle": {
    "9,6": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ],
    "11,6": [
        {
            "type": "setValue",
            "name": "flag:door",
            "value": "flag:door+1"
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"bgmap": [

],
"fgmap": [

],
"autoEvent": {
    "10,5": {
        "0": {
            "condition": "flag:door==2",
            "currentFloor": true,
            "priority": 0,
            "delayExecute": false,
            "multiExecute": false,
            "data": [
                {
                    "type": "openDoor"
                }

            ]
        }
    }
}
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

main.floors.sample2=
{
"floorId": "sample2",
"title": "样板 2 层",
"name": "2",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,121,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,202,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  1,  1, 45,  0,  1,  0,202,202,  0,  0,  0,  0,  0,  1,  1,  0,  0,  1,  0,202,202,  0],
    [  0,  0,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 88,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,122,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,202,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  1,  1,  0,  0,  1,  0,202,202,  0,  0,  0,  0,  0,  1,  1,  0,  0,  1,  0,202,202,  0],
    [  0,  0,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,202,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
"width": 26,
"height": 26,
"firstArrive": [],
"events": {
    "3,2": [
        "123"
    ],
    "12,12": [
        "234"
    ]
},
"changeFloor": {
    "6,10": {
        "floorId": "sample1",
        "stair": "upFloor"
    },
    "7,12": {
        "floorId": "sample3",
        "stair": "downFloor"
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"upFloor": null,
"bgmap": [

],
"fgmap": [

],
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

main.floors.sample3=
{
"floorId": "sample3",
"title": "主塔 40 层",
"name": "40",
"canFlyTo": false,
"canUseQuickShop": true,
"defaultGround": "snowGround",
"images": [],
"color": [
    255,
    0,
    0,
    0.3
],
"weather": [
    "rain",
    10
],
"bgm": "bgm.mp3",
"item_ratio": 1,
"map": [
    [  5,  5,  5,  5,  5,  5, 87,  5,  5,  5,  5,  5,  5],
    [  5,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1, 85,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,247,  1,247,  1,247,  4,  4,  4,  5],
    [  5,  4,  4,  4,  1,247,247,247,  1,  4,  4,  4,  5],
    [  5,  4,  4,  4,  1,247, 30,247,  1,  4,  4,  4,  5],
    [  5,  4,  4,  4,247,  1,124,  1,247,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1,123,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  5],
    [  5,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  5],
    [  5,  5,  5,  5,  5,  5, 88,  5,  5,  5,  5,  5,  5]
],
"firstArrive": [
    "\t[实战！]本楼将尝试复刻《宿命的旋律》40F剧情。"
],
"events": {
    "6,11": {
        "enable": false,
        "data": []
    },
    "6,10": [
        {
            "type": "playSound",
            "name": "door.mp3"
        },
        {
            "type": "show",
            "loc": [
                6,
                11
            ]
        },
        {
            "type": "hide"
        },
        {
            "type": "trigger",
            "loc": [
                6,
                7
            ]
        }
    ],
    "6,7": [
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]杰克，你究竟是什么人？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[杰克,thief]……",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]我们……是朋友对吧？\n是朋友就应该相互信任对吧？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[杰克,thief]……事到如今也没有什么好隐瞒的了。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[杰克,thief]没错，我就是这一切的背后主谋。",
        {
            "type": "move",
            "steps": [
                {
                    "direction": "up",
                    "value": 3
                }
            ],
            "time": 1000
        },
        {
            "type": "show",
            "loc": [
                6,
                4
            ],
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]我的真名为——黑暗大法师，第四区域的头目。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]呵呵，不知道为什么，我竟然对事情走到现在这一步毫不感觉意外。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]以杰克的名义利用了你这么久，真是抱歉啊。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]真正的杰克现在在哪里？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]盗贼杰克这个人类从未存在过，他只是我用来接近你的一副皮囊而已。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……这样啊，呵呵。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]为什么你看上去丝毫不生气？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]多亏了鬼帝，我现在的脾气好得连我自己都害怕。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]说起来我还得好好感谢你呢，如果没有杰克……你的帮助，我早就死在第一区域了。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]不论你的目的如何，你的所作所为都是对我有利的。不是吗？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]能够如此淡定的面对背叛，看来跟五年前相比，你确实成长了很多啊。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]五年前？……黑暗大法师，在这之前，我们好像素未谋面吧？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]五年前那场屠城你应该这一生都不会忘记吧。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]很不巧，那场屠城的主谋，也是我。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]这么说，击中我双亲的那道紫色闪电，也就是你释放的吧……",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]你的双亲？这种事情我怎么可能会记得？\n你难道在踩死蚂蚁的时候还会一只只记下他们的样子吗？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]老 子 要 你 的 命",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]你应该对我心怀感激才对，如果不是那时的我看出了你隐藏的稀有勇者体质，你绝对不可能活到今天。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]在暗中动手脚让你通过勇者选拔的人也是我，我一直一直在暗中引导你走到今天这一步。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]是我救赎了一无是处的你。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]为什么只有我一个人活了下来！！！！",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]为什么偏偏是我！！！！",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]我刚才不是说过了吗？因为我看出了你有稀有勇者体质啊。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]你刚刚跟鬼帝交过手，应该已经很清楚这稀有勇者体质意味着什么了吧？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……就因为我有这种体质，就不得不背负如此残酷的宿命吗？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]愚蠢！这意味着只要我对你加以引导跟培养，你就能成为这世间实力最强的存在！",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……所以，你究竟想利用我干什么？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]我利用你干的事情，你不是已经完成了吗？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……你说什么？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]不知不觉间，你已经在我的指引下跟鬼帝正面交手并且杀掉了他啊。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]就连我跟鬼帝的对决……也是被你安排好了的？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]你们两个一个是人类勇者，一个是魔物勇者，迟早会有交手的一天。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]我只不过是操纵了一系列的连锁事件让这一天提早了数十年到来而已。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……你这样做对谁有好处？他可是你们魔物世界的救世主啊。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]一个惧怕征战，爱好和平的懦夫，也配叫救世主？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]获得了力量，却只会被动挨打而不主动向人类世界出击，龟缩在第二区域惶惶度日，他根本就不配拥有稀有勇者体质。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]为了不让这种人霸占着积累多年的庞大灵魂能量无作为，我设计让你杀掉了他。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]你没有辜负我的期待，成功战胜了那个废物，现在你体内累积的灵魂能量……也就是魔力，已经达到了能跟魔王匹敌的地步。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]……是吗？现在的我能与魔王匹敌？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]不止如此，你现在的力量之强就算是统治世界也是绰绰有余！",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]怎么样？要不要加入我的麾下，跟随我去征战人类世界？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]能与魔王匹敌的话，也就是说。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]我 现 在 对 付 你 这 种 杂 碎 也 绰 绰 有 余 吧 ？",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]……什么？！",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[blackMagician]等一下！别冲动！你先等我把这利害关系理一理——",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]你给老子闭嘴。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]老子什么都不想听。",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]老子现在想做的事情只有一件——",
        {
            "type": "playSound",
            "name": "item.mp3"
        },
        "\t[hero]剁掉你的头，把它放回我双亲的墓前。",
        {
            "type": "update"
        }
    ],
    "6,4": {
        "enable": false,
        "data": []
    },
    "5,4": {
        "enable": false,
        "data": []
    },
    "7,4": {
        "enable": false,
        "data": []
    },
    "5,5": {
        "enable": false,
        "data": []
    },
    "7,5": {
        "enable": false,
        "data": []
    },
    "6,3": {
        "trigger": "action",
        "enable": false,
        "data": [
            "\t[blackMagician]听不进去人话的蠢货，就要用疼痛来管教！",
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]出来吧！禁忌——紫电凶杀阵！",
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        3
                    ],
                    [
                        4,
                        6
                    ],
                    [
                        8,
                        6
                    ],
                    [
                        8,
                        3
                    ]
                ],
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[blackMagician]感受绝望吧！冥顽不化的蠢货！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "sleep",
                "time": 200
            },
            {
                "type": "playSound",
                "name": "attack.mp3"
            },
            {
                "type": "animate",
                "name": "thunder",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 200
            },
            "\t[hero]唔……！！（吐血）",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]我的魔力可是充足的很啊！我会一直折磨到你屈服于我为止！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]人类！好好感受吧！当初你们施加于我的痛苦！如今我要百倍奉还！",
            {
                "type": "show",
                "loc": [
                    6,
                    6
                ],
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "trigger",
                "loc": [
                    6,
                    6
                ]
            }
        ]
    },
    "4,3": {
        "trigger": "action",
        "displayDamage": false,
        "enable": false,
        "data": []
    },
    "8,3": {
        "trigger": "action",
        "displayDamage": false,
        "enable": false,
        "data": []
    },
    "4,6": {
        "trigger": "action",
        "displayDamage": false,
        "enable": false,
        "data": []
    },
    "8,6": {
        "trigger": "action",
        "displayDamage": false,
        "enable": false,
        "data": []
    },
    "6,6": {
        "enable": false,
        "data": [
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]…妖精…小姐……是你吗？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]不要绝望，也不要悲伤。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]你从来都不是独自一人在前进。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]咱一直，一直都在注视着你。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]耍小聪明的你、笨笨的你呆呆的你、胆小的你、勇敢的你帅气的你……全部全部都是你。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]所以放心吧，无论发生什么，咱都会陪伴在你身边的。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]因为你要是离开我的话，立刻就会死掉吧？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]…妖精…小姐……其实一直以来，我都非常感激你……",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]笨蛋！都这种时候了就不要作出像是临终遗言的发言了啊！！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]喂！那边穿衣品味差到极点的黑暗大法师，别左顾右盼说的就是你！你应该知道咱的身份吧？\n还不速速退下！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]可恶…多管闲事的妖精族…明明只要再让他承受一点疼痛来瓦解他的意志力，我的计划就成功了！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]哼哼哼~抱歉哦，这个笨蛋的意志力可不像你想象的那么薄弱哦！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]不甘心！我不甘心！妖精公主又如何！\n只要是阻挡我的，不管是谁我都要铲除！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]终于露出狐狸尾巴了，其实咱早就看出你有谋反的念头。你的计划就是拉拢这家伙入伙然后推翻魔王对魔塔的统治对吧？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]呵呵呵……那个昏庸的魔王，掌握着那么庞大的魔物军队却只知道固守魔塔，而不主动侵略人类世界扩张领土！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]我实在是看不过眼，所以我才决定把这个具备稀有勇者体质的家伙培养成新一任魔王！\n来让这个世界的势力重新洗牌！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]你觉得一个满脑子想着回家种田的废柴勇者会成为改变世界的魔王？你晃晃脑袋试试，是不是能听到大海的声音？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]恼人至极的妖精族！呵呵呵……我干脆一不做二不休，连你也一块收拾了吧！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]别小瞧咱！咱好歹也是妖精族里实力数一数二的存在！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]只会耍嘴皮子的恼人苍蝇！我倒要看看一块焦炭会不会说话！\n——招雷弹！！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "playSound",
                "name": "attack.mp3"
            },
            {
                "type": "animate",
                "name": "thunder",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[小妖精,fairy]切，这点伤痛跟他刚才经历的身心地狱相比根本就不算什么。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]哼！翅膀都被烧焦了还要嘴硬？你难不成真以为我不会对你动真格？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]……你这混蛋！给我离她远点！！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]！…你现在受了很严重的致命伤，乱动什么？\n乖。别怕，这里有咱顶着！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]对了，咱再问你一遍，你是很珍惜自己性命的对吧？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]！…等等…妖精小姐，你不会是……？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]喂，黑暗大法师，你作为魔塔里最博学多识的蠢货，应该对咱妖精族的特殊能力再清楚不过吧？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]什么？！难不成你是想！！不可能……\n就为了一个渺小的人类，不可理喻！！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]哼哼哼！你害怕的表情可真美味！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]不过比起这个，咱更期待你吃到“妖精自灭冲击”之后的死状哦！~",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[blackMagician]不！！不应该是这样的！我完美的计划竟然会被一只小小的妖精破坏！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]不要！……千万不要！……为了我这种人……唔！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]笨蛋，动都动不了了就不要强撑着站起来了啊。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]真是的，都到最后一刻了，你这家伙好歹也让咱省点心吧。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[小妖精,fairy]那么，再见了……我的勇者大人。",
            {
                "type": "move",
                "time": 700,
                "steps": [
                    {
                        "direction": "up",
                        "value": 3
                    }
                ]
            },
            {
                "type": "playSound",
                "name": "attack.mp3"
            },
            {
                "type": "sleep",
                "time": 200
            },
            "\t[blackMagician]不可能！！！！！",
            {
                "type": "hide",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "hide",
                "loc": [
                    4,
                    3
                ]
            },
            {
                "type": "hide",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "hide",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "hide",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "sample3",
                "loc": [
                    6,
                    6
                ],
                "direction": "up",
                "time": 1000
            },
            {
                "type": "show",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "sleep",
                "time": 200
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "sleep",
                "time": 200
            },
            "\t[hero]…妖精…小姐……",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]……妖精小姐！",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]是梦吗？……不对，为什么我在流泪？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]这颗漂亮的宝石是……？",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]我全都想起来了……妖精小姐为了我……\n牺牲了自己的性命。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]在这颗宝石上，我能感受到你的温度……\n熟悉而又令人安心，这就是你最后留给我的东西吗……",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]好温暖……",
            {
                "type": "setValue",
                "name": "item:yellowJewel",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            "\t[hero]……",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    11
                ]
            }
        ]
    },
    "6,5": {
        "enable": false,
        "data": []
    }
},
"changeFloor": {
    "6,0": {
        "floorId": "sample3",
        "stair": "upFloor"
    },
    "6,12": {
        "floorId": "sample2",
        "stair": "upFloor"
    }
},
"afterBattle": {
    "6,4": [
        "\t[blackMagician]天真！你以为这样就能战胜我吗？",
        {
            "type": "show",
            "loc": [
                7,
                5
            ],
            "time": 500
        },
        {
            "type": "update"
        }
    ],
    "7,5": [
        "\t[blackMagician]你打败的不过是我众多分身中的其中一个而已。",
        {
            "type": "show",
            "loc": [
                5,
                4
            ],
            "time": 500
        },
        {
            "type": "update"
        }
    ],
    "5,4": [
        "\t[blackMagician]你的身体已经伤痕累累了，可我还留有着九成多的魔力。",
        {
            "type": "show",
            "loc": [
                5,
                5
            ],
            "time": 500
        },
        {
            "type": "update"
        }
    ],
    "5,5": [
        "\t[blackMagician]顽固的家伙！放弃抵抗吧！",
        {
            "type": "show",
            "loc": [
                7,
                4
            ],
            "time": 500
        },
        {
            "type": "update"
        }
    ],
    "7,4": [
        "\t[blackMagician]哈哈哈哈！我的灵魂远比你想象的强大！\n我即是永恒！",
        {
            "type": "show",
            "loc": [
                6,
                3
            ],
            "time": 500
        },
        {
            "type": "trigger",
            "loc": [
                6,
                3
            ]
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"bgmap": [

],
"fgmap": [

],
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fs = __webpack_require__(5);
const Jimp = __webpack_require__(1);
const path = __webpack_require__(6);

const materials = [
  'animates',
  'enemys',
  'hero', 'items', 'npcs', 'terrains', 'enemy48', 'npc48',
  'airwall',
  'icons',
];
const imagesDir = path.resolve('../mota-js/project/images');
const animatesDir = path.resolve('../mota-js/project/animates');
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
  return Jimp.read(`${imagesDir}/${realName}`).then(image => {
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
  main.rawImages.push('hero.png', 'ground.png', 'snowNode.png');
  await readAll([
    [_root, materials],
    [_root.autotile, main.autotiles],
    [_root.tilesets, main.tilesets],
    [_root.extraImages, main.rawImages],
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
/* harmony default export */ __webpack_exports__["default"] = (loadImages);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2ljb25zLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9tYXBzLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9kYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyZWUtdGV4LXBhY2tlci1jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9NVDAuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUwLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvc2FtcGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9tb3RhLWpzL3Byb2plY3QvZmxvb3JzL3NhbXBsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUzLmpzIiwid2VicGFjazovLy8uL25vZGVDb250cm9sL2xvYWRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdRQTtBQUFBO0FBQU87QUFDUDtBQUNBLE9BQU8sbURBQW1EO0FBQzFELE9BQU8sa0RBQWtEO0FBQ3pELE9BQU8saURBQWlEO0FBQ3hELE9BQU8sMkNBQTJDO0FBQ2xELE9BQU8sMkNBQTJDO0FBQ2xELE9BQU8sNEJBQTRCO0FBQ25DLE9BQU8sc0NBQXNDO0FBQzdDLE9BQU8sdUNBQXVDO0FBQzlDLE9BQU8sc0NBQXNDO0FBQzdDLFFBQVEsdUNBQXVDO0FBQy9DLFFBQVEsbUVBQW1FO0FBQzNFLFFBQVEscUVBQXFFO0FBQzdFLFFBQVEsbUVBQW1FO0FBQzNFLFFBQVEsb0VBQW9FO0FBQzVFLFFBQVEsZ0RBQWdEO0FBQ3hELFFBQVEsNENBQTRDO0FBQ3BELFFBQVEsK0NBQStDO0FBQ3ZELFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsaUNBQWlDO0FBQ3pDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsaUNBQWlDO0FBQ3pDLFFBQVEsa0NBQWtDO0FBQzFDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEseUJBQXlCO0FBQ2pDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsaUNBQWlDO0FBQ3pDLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsaUNBQWlDO0FBQ3pDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsOEJBQThCO0FBQ3RDLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsNkJBQTZCO0FBQ3JDLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsd0RBQXdEO0FBQ2hFLFFBQVEsc0RBQXNEO0FBQzlELFFBQVEscURBQXFEO0FBQzdELFFBQVEsdURBQXVEO0FBQy9ELFFBQVEseURBQXlEO0FBQ2pFLFFBQVEsdURBQXVEO0FBQy9ELFFBQVEsK0NBQStDO0FBQ3ZELFFBQVEsaURBQWlEO0FBQ3pELFFBQVEsOENBQThDO0FBQ3RELFFBQVEsa0RBQWtE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QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw0QkFBNEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzdaQSwrQjs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsbUJBQW1CO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0EscUZBQXFGLHlCQUF5QjtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7QUM1K0JBO0FBQUEsV0FBVyxtQkFBTyxDQUFDLENBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLENBQU07QUFDM0IsYUFBYSxtQkFBTyxDQUFDLENBQU07O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsdUJBQXVCLFdBQVcsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25ELHNCQUFzQixVQUFVLEdBQUcsU0FBUztBQUM1QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSyxHQUFHLEVBQUU7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QixLQUFLO0FBQ0w7QUFDZSx5RUFBVSxFQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXItbW9yYW4vamltcFxuaW1wb3J0IEppbXAgZnJvbSAnamltcCc7XG5cbmltcG9ydCB7IGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSBhcyBpY29ucyB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9pY29ucyc7XG5pbXBvcnQgeyBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSBhcyBtYXBzIH0gZnJvbSAnLi4vbW90YS1qcy9wcm9qZWN0L21hcHMnO1xuaW1wb3J0IHsgZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQgYXMgZGF0YSB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9kYXRhJztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIOaJk+WMheW3peWFtyBodHRwczovL2dpdGh1Yi5jb20vb2RyaWNrL2ZyZWUtdGV4LXBhY2tlci1jb3JlXG5jb25zdCB0ZXh0dXJlUGFja2VyID0gcmVxdWlyZSgnZnJlZS10ZXgtcGFja2VyLWNvcmUnKTtcblxuY29uc3QgbWFpbiA9IHsgZmxvb3JzOiB7IH0gfTtcbmdsb2JhbC5tYWluID0gbWFpbjtcbmdsb2JhbC53aW5kb3cgPSB7fTtcbm1haW4ub3V0cHV0UGF0aCA9IHBhdGgucmVzb2x2ZSgnLi9kYXRhJyk7XG5tYWluLnRpbGVzZXRzID0gZGF0YS5tYWluLnRpbGVzZXRzO1xubWFpbi5hdXRvdGlsZXMgPSBPYmplY3Qua2V5cyhpY29ucy5hdXRvdGlsZSk7XG5tYWluLmljb25zID0ge1xuICBmbG9vcjogMCxcbiAgbHY6IDEsXG4gIGhwbWF4OiAyLFxuICBocDogMyxcbiAgYXRrOiA0LFxuICBkZWY6IDUsXG4gIG1kZWY6IDYsXG4gIG1vbmV5OiA3LFxuICBleHBlcmllbmNlOiA4LFxuICB1cDogOSxcbiAgYm9vazogMTAsXG4gIGZseTogMTEsXG4gIHRvb2xib3g6IDEyLFxuICBrZXlib2FyZDogMTMsXG4gIHNob3A6IDE0LFxuICBzYXZlOiAxNSxcbiAgbG9hZDogMTYsXG4gIHNldHRpbmdzOiAxNyxcbiAgcGxheTogMTgsXG4gIHBhdXNlOiAxOSxcbiAgc3RvcDogMjAsXG4gIHNwZWVkRG93bjogMjEsXG4gIHNwZWVkVXA6IDIyLFxuICByZXdpbmQ6IDIzLFxuICBlcXVpcGJveDogMjQsXG4gIG1hbmE6IDI1LFxuICBza2lsbDogMjYsXG4gIHBhaW50OiAyNyxcbiAgZXJhc2U6IDI4LFxuICBlbXB0eTogMjksXG4gIGV4aXQ6IDMwLFxuICBidG4xOiAzMSxcbiAgYnRuMjogMzIsXG4gIGJ0bjM6IDMzLFxuICBidG40OiAzNCxcbiAgYnRuNTogMzUsXG4gIGJ0bjY6IDM2LFxuICBidG43OiAzNyxcbiAgYnRuODogMzgsXG59O1xubWFpbi5pbWFnZXMgPSB7XG4gIHRpbGVzZXRzOiB7fSxcbiAgYXV0b3RpbGU6IHt9LFxuICBleHRyYUltYWdlczoge30sXG4gIGFuaW1hdGVzQnVmZmVyOiB7fSxcbn07XG5jb25zdCBmbG9vcnMgPSByZXF1aXJlLmNvbnRleHQoJy4uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvJywgZmFsc2UsIC9cXC5qcyQvKTtcbmNvbnN0IHsgZmxvb3JJZHMsIGltYWdlczogcmF3SW1hZ2VzIH0gPSBkYXRhLm1haW47XG5tYWluLmFuaW1hdGVzID0gZGF0YS5tYWluLmFuaW1hdGVzO1xubWFpbi5yYXdJbWFnZXMgPSByYXdJbWFnZXM7XG5jb25zdCBibG9ja0lkcyA9IHt9O1xuLy8g5Yqg6L295Ye65Zyw5Zu+5pWw57uE5Lit5omA5L2/55So55qEYmxvY2sg55qEbnVtXG4oZnVuY3Rpb24gbG9hZEZsb29ycygpIHtcbiAgY29uc3QgaW5pdEJsb2NrID0gbnVtID0+IHtcbiAgICBpZiAoYmxvY2tJZHNbbnVtXSkgcmV0dXJuO1xuICAgIGJsb2NrSWRzW251bV0gPSB0cnVlO1xuICB9O1xuICBjb25zdCB0cmF2ZXJzYWxBcnJheSA9IChhcnIsIGZ1bmMpID0+IHtcbiAgICBpZiAoYXJyIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBhcnIuZm9yRWFjaChuID0+IHRyYXZlcnNhbEFycmF5KG4sIGZ1bmMpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IGZsb29ycyhgLi8ke2Zsb29ySWR9LmpzYCkpO1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IHtcbiAgICBjb25zdCBmbG9vciA9IG1haW4uZmxvb3JzW2Zsb29ySWRdO1xuICAgIHRyYXZlcnNhbEFycmF5KFtmbG9vci5tYXAsIGZsb29yLmZnbWFwLCBmbG9vci5iZ21hcF0sIGluaXRCbG9jayk7XG4gIH0pO1xufSgpKTtcblxuY29uc3QgZ2V0VGlsZXNldE9mZnNldCA9IChudW0pID0+IHtcbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gMTAwMDA7XG4gIGlmIChudW0gPCBzdGFydE9mZnNldCkgcmV0dXJuIG51bGw7XG4gIGZvciAoY29uc3QgaSBpbiBtYWluLnRpbGVzZXRzKSB7XG4gICAgY29uc3QgdGlsZXNldElkID0gbWFpbi50aWxlc2V0c1tpXTtcbiAgICBjb25zdCBpbWdOYW1lID0gdGlsZXNldElkO1xuICAgIGNvbnN0IGltZyA9IG1haW4uaW1hZ2VzLnRpbGVzZXRzW2ltZ05hbWVdO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5mbG9vcihpbWcuYml0bWFwLndpZHRoIC8gMzIpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1nLmJpdG1hcC5oZWlnaHQgLyAzMik7XG4gICAgaWYgKG51bSA+PSBzdGFydE9mZnNldCAmJiBudW0gPCBzdGFydE9mZnNldCArIHdpZHRoICogaGVpZ2h0KSB7XG4gICAgICBjb25zdCB4ID0gKG51bSAtIHN0YXJ0T2Zmc2V0KSAlIHdpZHRoO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KChudW0gLSBzdGFydE9mZnNldCkgLyB3aWR0aCwgMTApO1xuICAgICAgcmV0dXJuIHsgaW1hZ2U6IGltZywgeCwgeSB9O1xuICAgIH1cbiAgICBzdGFydE9mZnNldCArPSBzdGFydE9mZnNldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRBbmltYXRlRnJhbWVzID0gZnVuY3Rpb24gKGNscywgdXNlT3JpZ2luVmFsdWUpIHtcbiAgaWYgKGNscyA9PT0gJ2VuZW15cycgfHwgY2xzID09PSAnbnBjcycpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBpZiAoY2xzID09PSAnYW5pbWF0ZXMnIHx8IGNscyA9PT0gJ2VuZW15NDgnKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgaWYgKGNscyA9PT0gJ25wYzQ4Jykge1xuICAgIHJldHVybiB1c2VPcmlnaW5WYWx1ZSA/IDQgOiAxO1xuICB9XG4gIHJldHVybiAxO1xufTtcbmNvbnN0IGdldEJsb2NrID0gKG51bSkgPT4ge1xuICBsZXQgYmxvY2s7XG4gIGlmIChudW0gPT09IDApIHJldHVybiBudWxsO1xuICAvLyBhbG9uZSDmjIfkuIDkuKrlm77niYflr7nlupTkuIDkuKpibG9ja1xuICBpZiAobnVtID09PSAxNykgeyAvLyBhaXJ3YWxsXG4gICAgYmxvY2sgPSB7XG4gICAgICBjbHM6ICd0ZXJyYWlucycsXG4gICAgICBpZDogJ2FpcndhbGwnLFxuICAgICAgaW1hZ2U6IG1haW4uaW1hZ2VzLmFpcndhbGwsXG4gICAgICBhbG9uZTogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1hcHNbbnVtXSkge1xuICAgIGJsb2NrID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYXBzW251bV0pKTtcbiAgICBjb25zdCB7IGlkLCBjbHMgfSA9IGJsb2NrO1xuICAgIGlmIChjbHMgPT09ICdhdXRvdGlsZScpIHtcbiAgICAgIGJsb2NrLmltYWdlID0gbWFpbi5pbWFnZXMuYXV0b3RpbGVbaWRdO1xuICAgICAgYmxvY2suYW5pbWF0ZSA9IE1hdGguY2VpbChtYWluLmltYWdlcy5hdXRvdGlsZVtpZF0uYml0bWFwLndpZHRoIC8gOTYpO1xuICAgICAgYmxvY2suYWxvbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibG9jay5pbWFnZSA9IG1haW4uaW1hZ2VzW2Nsc107XG4gICAgICBibG9jay5wb3NZID0gaWNvbnNbY2xzXVtpZF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRpbGVzZXRPZmZzZXQgPSBnZXRUaWxlc2V0T2Zmc2V0KG51bSk7XG4gICAgaWYgKHRpbGVzZXRPZmZzZXQpIHtcbiAgICAgIGJsb2NrID0ge1xuICAgICAgICBjbHM6ICd0aWxlc2V0JyxcbiAgICAgICAgaWQ6IGBYJHtudW19YCxcbiAgICAgICAgcG9zWDogdGlsZXNldE9mZnNldC54LFxuICAgICAgICBwb3NZOiB0aWxlc2V0T2Zmc2V0LnksXG4gICAgICAgIGltYWdlOiB0aWxlc2V0T2Zmc2V0LmltYWdlLFxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFibG9jay5hbmltYXRlKSB7XG4gICAgYmxvY2suYW5pbWF0ZSA9IGdldEFuaW1hdGVGcmFtZXMoYmxvY2suY2xzLCB0cnVlKTtcbiAgfVxuICBibG9jay5oZWlnaHQgPSAzMjtcbiAgaWYgKGJsb2NrLmNscyA9PT0gJ2VuZW15NDgnIHx8IGJsb2NrLmNscyA9PT0gJ25wYzQ4JykgYmxvY2suaGVpZ2h0ID0gNDg7XG4gIGJsb2NrLnBvc1ggPSBibG9jay5wb3NYIHx8IDA7XG4gIGJsb2NrLnBvc1kgPSBibG9jay5wb3NZIHx8IDA7XG4gIHJldHVybiBibG9jaztcbn07XG5jb25zdCBsb2FkSW1hZ2VzID0gcmVxdWlyZSgnLi9sb2FkSW1hZ2VzJykuZGVmYXVsdDtcblxubG9hZEltYWdlcygpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygn6LWE5rqQ5Yqg6L295a6M5oiQJyk7XG4gIGNvbnN0IGJsb2Nrc0J1ZmZlciA9IHt9O1xuICAvLyDliqDovb1ibG9ja3NcbiAgY29uc3QgaW5mbyA9IHsgfTtcbiAgY29uc3QgX21hcHMgPSB7IH07XG4gIGNvbnN0IHdyaXRlRmlsZSA9IChuYW1lLCBkYXRhKSA9PiB7XG4gICAgZnMud3JpdGVGaWxlKGAke21haW4ub3V0cHV0UGF0aH0vJHtuYW1lfWAsIGRhdGEsXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coYOWGmeWFpSR7bmFtZX3miJDlip9gKTtcbiAgICAgIH0pO1xuICB9O1xuICBPYmplY3Qua2V5cyhibG9ja0lkcykuZm9yRWFjaCgobnVtSWQpID0+IHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChudW1JZCwgMTApO1xuICAgIGNvbnN0IGJsb2NrID0gZ2V0QmxvY2sobnVtKTtcbiAgICBpZiAoIWJsb2NrKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgaW1hZ2UsIHBvc1gsIHBvc1ksIGFuaW1hdGUsIGFsb25lLCBpZCwgaGVpZ2h0LFxuICAgIH0gPSBibG9jaztcbiAgICBpZiAoIWltYWdlKSByZXR1cm47XG4gICAgaW5mb1tpZF0gPSB7IG51bSwgYW5pbWF0ZSB9O1xuICAgIF9tYXBzW251bUlkXSA9IGJsb2NrO1xuICAgIGRlbGV0ZSBibG9jay5pbWFnZTtcbiAgICBkZWxldGUgYmxvY2suYWxvbmU7XG4gICAgZGVsZXRlIGJsb2NrLnBvc1g7XG4gICAgZGVsZXRlIGJsb2NrLmhlaWdodDtcbiAgICBkZWxldGUgYmxvY2sucG9zWTtcbiAgICBkZWxldGUgYmxvY2suYW5pbWF0ZTtcbiAgICBpZiAoYWxvbmUpIHtcbiAgICAgIGltYWdlLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBpbWFnZUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGJsb2Nrc0J1ZmZlcltpZF0gPSBpbWFnZUJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBsb2FkIHByb21pc2Ug5Yqg5YWl5pWw57uEXG4gICAgY29uc3QgdGVtcCA9IG5ldyBKaW1wKDMyICogYW5pbWF0ZSwgaGVpZ2h0LCAoZXJyLCBpbWcpID0+IHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgIGltZy5ibGl0KGltYWdlLCAwLCAwLCBwb3NYICogMzIsIHBvc1kgKiBoZWlnaHQsIDMyICogYW5pbWF0ZSwgaGVpZ2h0KVxuICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICBpZiAoYmxvY2tzQnVmZmVyW2lkXSkgY29uc29sZS5sb2coYOmineWkluWbvueJh+mHjOaciemHjeWQjWlkXCIke2lkfVwiYCk7XG4gICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvLyB3cml0ZSBpbmZvXG4gIHdyaXRlRmlsZSgnX2luZm8uanNvbicsIEpTT04uc3RyaW5naWZ5KGluZm8pKTtcbiAgd3JpdGVGaWxlKCdfbWFwcy5qc29uJywgSlNPTi5zdHJpbmdpZnkoX21hcHMpKTtcbiAgLy8g5Yqg6L29aWNvbnNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpY29uc0RhdGEgPSBtYWluLmljb25zO1xuICAgIGNvbnN0IGljb25zSW1nID0gbWFpbi5pbWFnZXMuaWNvbnM7XG4gICAgT2JqZWN0LmtleXMoaWNvbnNEYXRhKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXcgSmltcCgzMiwgMzIsIChlcnIsIGltZykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGltZy5ibGl0KGljb25zSW1nLCAwLCAwLCAwLCBpY29uc0RhdGFbaWRdICogMzIsIDMyLCAzMilcbiAgICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyDliqDovb3pop3lpJZpbWFnZXNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGV4dHJhSW1hZ2VzIH0gPSBtYWluLmltYWdlcztcbiAgICBPYmplY3Qua2V5cyhleHRyYUltYWdlcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCB7IFtpZF06IGltYWdlIH0gPSBleHRyYUltYWdlcztcbiAgICAgIC8vIOi+g+Wkp+eahOWbvueJhyDlj6/og73ooqtqaW1wIOWkhOeQhuWQjuS9k+enr+WinuWkpyDlpoJiZy5qcGcg5Zug5q2k6L6D5aSn5Zu+54mH5Y2V54us5aSE55CGXG4gICAgICAvLyDlm6DmraTlnKjmraTph43mlrDor7vlj5bmlofku7bph43mlrDlhpnlhaVcbiAgICAgIGlmIChpbWFnZS5iaXRtYXAud2lkdGggKiBpbWFnZS5iaXRtYXAuaGVpZ2h0ID49IDE2MDAwMCkge1xuICAgICAgICBmcy5yZWFkRmlsZShgJHtwYXRoLnJlc29sdmUobWFpbi5pbWFnZXNEaXIsIGlkKX1gLFxuICAgICAgICAgIChlcnIsIGltZykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGAke3BhdGgucmVzb2x2ZSgnLi9kYXRhJywgaWQpfWAsIGltZyxcbiAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5YaZ5YWlJHtpZH3miJDlip9gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGltYWdlLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBpbWFnZUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGxldCBiYXNlbmFtZSA9IGlkO1xuICAgICAgICBpZiAoaWQubGFzdEluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBiYXNlbmFtZSA9IGlkLnN1YnN0cmluZygwLCBpZC5sYXN0SW5kZXhPZignLicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2tzQnVmZmVyW2Jhc2VuYW1lXSkgY29uc29sZS5sb2coYOmineWkluWbvueJh+mHjOaciemHjeWQjWlkJHtiYXNlbmFtZX1gKVxuICAgICAgICBibG9ja3NCdWZmZXJbYmFzZW5hbWVdID0gaW1hZ2VCdWZmZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSgpKTtcbiAgLy8g5Yqg6L29YW5pbWF0ZSDmmK/lkKblrZjlnKjlhbbkvZnmlofku7ZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGVzQnVmZmVyIH0gPSBtYWluLmltYWdlcztcbiAgICBPYmplY3Qua2V5cyhhbmltYXRlc0J1ZmZlcikuZm9yRWFjaChpZCA9PiB7XG4gICAgICBibG9ja3NCdWZmZXJbaWRdID0gYW5pbWF0ZXNCdWZmZXJbaWRdO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyBuZXcgSmltcCDmmK/lvILmraXnmoTvvIzkvYbmmK/msqHmnInov5Tlm55Qcm9taXNlIOWboOatpOeUqHNldFRpbWVvdXRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gW107XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRleHR1cmVOYW1lOiAncGFja2VyJyxcbiAgICAgIGFsbG93Um90YXRpb246IHRydWUsXG4gICAgICBleHBvcnRlcjogJ1BpeGknLFxuICAgICAgZGV0ZWN0SWRlbnRpY2FsOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICB9O1xuICAgIGNvbnN0IHsgb3V0cHV0UGF0aCB9ID0gbWFpbjtcbiAgICBPYmplY3Qua2V5cyhibG9ja3NCdWZmZXIpLmZvckVhY2goKGlkKSA9PiBpbWFnZXMucHVzaCh7XG4gICAgICBwYXRoOiBpZCxcbiAgICAgIGNvbnRlbnRzOiBibG9ja3NCdWZmZXJbaWRdLFxuICAgIH0pKTtcbiAgICB0ZXh0dXJlUGFja2VyKGltYWdlcywgb3B0aW9ucywgKGZpbGVzLCBlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhY2thZ2luZyBmYWlsZWQnLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgZnMud3JpdGVGaWxlKHBhdGgucmVzb2x2ZShvdXRwdXRQYXRoLCBpdGVtLm5hbWUpLCBpdGVtLmJ1ZmZlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aXRlbS5uYW1lfeWGmeWFpeaIkOWKn2ApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXBcIik7IiwiZXhwb3J0IHZhciBpY29uc180NjY1ZWUxMl8zYTFmXzQ0YTRfYmVhM18wZmNjYmE2MzRkYzEgPSBcclxue1xyXG5cdFwiaGVyb1wiOiB7XHJcblx0XHRcImRvd25cIjoge1xyXG5cdFx0XHRcImxvY1wiOiAwLFxyXG5cdFx0XHRcInN0b3BcIjogMCxcclxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxyXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXHJcblx0XHR9LFxyXG5cdFx0XCJsZWZ0XCI6IHtcclxuXHRcdFx0XCJsb2NcIjogMSxcclxuXHRcdFx0XCJzdG9wXCI6IDAsXHJcblx0XHRcdFwibGVmdEZvb3RcIjogMSxcclxuXHRcdFx0XCJyaWdodEZvb3RcIjogM1xyXG5cdFx0fSxcclxuXHRcdFwicmlnaHRcIjoge1xyXG5cdFx0XHRcImxvY1wiOiAyLFxyXG5cdFx0XHRcInN0b3BcIjogMCxcclxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxyXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXHJcblx0XHR9LFxyXG5cdFx0XCJ1cFwiOiB7XHJcblx0XHRcdFwibG9jXCI6IDMsXHJcblx0XHRcdFwic3RvcFwiOiAwLFxyXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXHJcblx0XHRcdFwicmlnaHRGb290XCI6IDNcclxuXHRcdH0sXHJcblx0XHRcIndpZHRoXCI6IDMyLFxyXG5cdFx0XCJoZWlnaHRcIjogNDhcclxuXHR9LFxyXG5cdFwidGVycmFpbnNcIjoge1xyXG5cdFx0XCJncm91bmRcIjogMCxcclxuXHRcdFwiZ3Jhc3NcIjogMSxcclxuXHRcdFwiZ3Jhc3MyXCI6IDIsXHJcblx0XHRcInllbGxvd1dhbGxcIjogMyxcclxuXHRcdFwid2hpdGVXYWxsXCI6IDQsXHJcblx0XHRcImJsdWVXYWxsXCI6IDUsXHJcblx0XHRcInNub3dHcm91bmRcIjogNixcclxuXHRcdFwiZ3JvdW5kMlwiOiA3LFxyXG5cdFx0XCJncm91bmQzXCI6IDgsXHJcblx0XHRcImdyb3VuZDRcIjogOSxcclxuXHRcdFwic2FuZFwiOiAxMCxcclxuXHRcdFwiZ3JvdW5kNVwiOiAxMSxcclxuXHRcdFwieWVsbG93V2FsbDJcIjogMTIsXHJcblx0XHRcIndoaXRlV2FsbDJcIjogMTMsXHJcblx0XHRcImJsdWVXYWxsMlwiOiAxNCxcclxuXHRcdFwiYmxvY2tXYWxsXCI6IDE1LFxyXG5cdFx0XCJncmF5V2FsbFwiOiAxNixcclxuXHRcdFwid2hpdGVcIjogMTcsXHJcblx0XHRcImdyb3VuZDZcIjogMTgsXHJcblx0XHRcInNvaWxcIjogMTksXHJcblx0XHRcImdyb3VuZDdcIjogMjAsXHJcblx0XHRcImdyb3VuZDhcIjogMjEsXHJcblx0XHRcImljZVwiOiAyMixcclxuXHRcdFwiZG93bkZsb29yXCI6IDIzLFxyXG5cdFx0XCJ1cEZsb29yXCI6IDI0LFxyXG5cdFx0XCJ5ZWxsb3dEb29yXCI6IDI1LFxyXG5cdFx0XCJibHVlRG9vclwiOiAyNixcclxuXHRcdFwicmVkRG9vclwiOiAyNyxcclxuXHRcdFwiZ3JlZW5Eb29yXCI6IDI4LFxyXG5cdFx0XCJzcGVjaWFsRG9vclwiOiAyOSxcclxuXHRcdFwic3RlZWxEb29yXCI6IDMwLFxyXG5cdFx0XCJibHVlU2hvcC1sZWZ0XCI6IDMxLFxyXG5cdFx0XCJibHVlU2hvcC1yaWdodFwiOiAzMixcclxuXHRcdFwicGlua1Nob3AtbGVmdFwiOiAzMyxcclxuXHRcdFwicGlua1Nob3AtcmlnaHRcIjogMzQsXHJcblx0XHRcImFycm93VXBcIjogMzUsXHJcblx0XHRcImFycm93RG93blwiOiAzNixcclxuXHRcdFwiYXJyb3dMZWZ0XCI6IDM3LFxyXG5cdFx0XCJhcnJvd1JpZ2h0XCI6IDM4LFxyXG5cdFx0XCJsaWdodFwiOiAzOSxcclxuXHRcdFwiZGFya0xpZ2h0XCI6IDQwLFxyXG5cdFx0XCJza2lcIjogNDEsXHJcblx0XHRcImZsb3dlclwiOiA0MixcclxuXHRcdFwiYm94XCI6IDQzLFxyXG5cdFx0XCJib3hlZFwiOiA0NFxyXG5cdH0sXHJcblx0XCJhbmltYXRlc1wiOiB7XHJcblx0XHRcInN0YXJcIjogMCxcclxuXHRcdFwibGF2YVwiOiAxLFxyXG5cdFx0XCJibHVlV2F0ZXJcIjogMixcclxuXHRcdFwid2F0ZXJcIjogMyxcclxuXHRcdFwieWVsbG93RG9vclwiOiA0LFxyXG5cdFx0XCJibHVlRG9vclwiOiA1LFxyXG5cdFx0XCJyZWREb29yXCI6IDYsXHJcblx0XHRcImdyZWVuRG9vclwiOiA3LFxyXG5cdFx0XCJzcGVjaWFsRG9vclwiOiA4LFxyXG5cdFx0XCJzdGVlbERvb3JcIjogOSxcclxuXHRcdFwieWVsbG93V2FsbFwiOiAxMCxcclxuXHRcdFwid2hpdGVXYWxsXCI6IDExLFxyXG5cdFx0XCJibHVlV2FsbFwiOiAxMixcclxuXHRcdFwiY3J5c3RhbFVwXCI6IDEzLFxyXG5cdFx0XCJjcnlzdGFsQm90dG9tXCI6IDE0LFxyXG5cdFx0XCJzdGFyUG9ydGFsXCI6IDE1LFxyXG5cdFx0XCJmaXJlXCI6IDE2LFxyXG5cdFx0XCJwb3J0YWxcIjogMTcsXHJcblx0XHRcInN3aXRjaFwiOiAxOCxcclxuXHRcdFwibGF2YU5ldFwiOiAxOSxcclxuXHRcdFwicG9pc29uTmV0XCI6IDIwLFxyXG5cdFx0XCJ3ZWFrTmV0XCI6IDIxLFxyXG5cdFx0XCJjdXJzZU5ldFwiOiAyMixcclxuXHRcdFwiZG93blBvcnRhbFwiOiAyMyxcclxuXHRcdFwibGVmdFBvcnRhbFwiOiAyNCxcclxuXHRcdFwicmlnaHRQb3J0YWxcIjogMjUsXHJcblx0XHRcInVwUG9ydGFsXCI6IDI2XHJcblx0fSxcclxuXHRcIm5wY3NcIjoge1xyXG5cdFx0XCJtYW5cIjogMCxcclxuXHRcdFwid29tYW5cIjogMSxcclxuXHRcdFwidGhpZWZcIjogMixcclxuXHRcdFwiZmFpcnlcIjogMyxcclxuXHRcdFwibWFnaWNpYW5cIjogNCxcclxuXHRcdFwid29tYW5NYWdpY2lhblwiOiA1LFxyXG5cdFx0XCJvbGRNYW5cIjogNixcclxuXHRcdFwiY2hpbGRcIjogNyxcclxuXHRcdFwid29vZFwiOiA4LFxyXG5cdFx0XCJwaW5rU2hvcFwiOiA5LFxyXG5cdFx0XCJibHVlU2hvcFwiOiAxMCxcclxuXHRcdFwicHJpbmNlc3NcIjogMTEsXHJcblx0XHRcIndsdFwiOiAxMixcclxuXHRcdFwid3RcIjogMTMsXHJcblx0XHRcIndydFwiOiAxNCxcclxuXHRcdFwid2xcIjogMTUsXHJcblx0XHRcIndjXCI6IDE2LFxyXG5cdFx0XCJ3clwiOiAxNyxcclxuXHRcdFwid2xiXCI6IDE4LFxyXG5cdFx0XCJ3cmJcIjogMTksXHJcblx0XHRcImRsdFwiOiAyMCxcclxuXHRcdFwiZHRcIjogMjEsXHJcblx0XHRcImRydFwiOiAyMixcclxuXHRcdFwiZGxcIjogMjMsXHJcblx0XHRcImRjXCI6IDI0LFxyXG5cdFx0XCJkclwiOiAyNSxcclxuXHRcdFwiZGxiXCI6IDI2LFxyXG5cdFx0XCJkcmJcIjogMjdcclxuXHR9LFxyXG5cdFwibnBjNDhcIjoge1xyXG5cdFx0XCJucGMwXCI6IDAsXHJcblx0XHRcIm5wYzFcIjogMSxcclxuXHRcdFwibnBjMlwiOiAyLFxyXG5cdFx0XCJucGMzXCI6IDNcclxuXHR9LFxyXG5cdFwiZW5lbXlzXCI6IHtcclxuXHRcdFwiZ3JlZW5TbGltZVwiOiAwLFxyXG5cdFx0XCJyZWRTbGltZVwiOiAxLFxyXG5cdFx0XCJibGFja1NsaW1lXCI6IDIsXHJcblx0XHRcInNsaW1lbG9yZFwiOiAzLFxyXG5cdFx0XCJiYXRcIjogNCxcclxuXHRcdFwiYmlnQmF0XCI6IDUsXHJcblx0XHRcInJlZEJhdFwiOiA2LFxyXG5cdFx0XCJ2YW1waXJlXCI6IDcsXHJcblx0XHRcInNrZWxldG9uXCI6IDgsXHJcblx0XHRcInNrZWxldG9uU29pbGRlclwiOiA5LFxyXG5cdFx0XCJza2VsZXRvbkNhcHRhaW5cIjogMTAsXHJcblx0XHRcImdob3N0U2tlbGV0b25cIjogMTEsXHJcblx0XHRcInpvbWJpZVwiOiAxMixcclxuXHRcdFwiem9tYmllS25pZ2h0XCI6IDEzLFxyXG5cdFx0XCJyb2NrXCI6IDE0LFxyXG5cdFx0XCJzbGltZU1hblwiOiAxNSxcclxuXHRcdFwiYmx1ZVByaWVzdFwiOiAxNixcclxuXHRcdFwicmVkUHJpZXN0XCI6IDE3LFxyXG5cdFx0XCJicm93bldpemFyZFwiOiAxOCxcclxuXHRcdFwicmVkV2l6YXJkXCI6IDE5LFxyXG5cdFx0XCJ5ZWxsb3dHdWFyZFwiOiAyMCxcclxuXHRcdFwiYmx1ZUd1YXJkXCI6IDIxLFxyXG5cdFx0XCJyZWRHdWFyZFwiOiAyMixcclxuXHRcdFwic3dvcmRzbWFuXCI6IDIzLFxyXG5cdFx0XCJzb2xkaWVyXCI6IDI0LFxyXG5cdFx0XCJ5ZWxsb3dLbmlnaHRcIjogMjUsXHJcblx0XHRcInJlZEtuaWdodFwiOiAyNixcclxuXHRcdFwiZGFya0tuaWdodFwiOiAyNyxcclxuXHRcdFwiYmxhY2tLaW5nXCI6IDI4LFxyXG5cdFx0XCJ5ZWxsb3dLaW5nXCI6IDI5LFxyXG5cdFx0XCJncmVlbktpbmdcIjogMzAsXHJcblx0XHRcImJsdWVLbmlnaHRcIjogMzEsXHJcblx0XHRcImdvbGRTbGltZVwiOiAzMixcclxuXHRcdFwicG9pc29uU2tlbGV0b25cIjogMzMsXHJcblx0XHRcInBvaXNvbkJhdFwiOiAzNCxcclxuXHRcdFwic3RlZWxSb2NrXCI6IDM1LFxyXG5cdFx0XCJza2VsZXRvblByaWVzdFwiOiAzNixcclxuXHRcdFwic2tlbGV0b25LaW5nXCI6IDM3LFxyXG5cdFx0XCJza2VsZXRvbldpemFyZFwiOiAzOCxcclxuXHRcdFwicmVkU2tlbGV0b25DYXB0aW9uXCI6IDM5LFxyXG5cdFx0XCJiYWRIZXJvXCI6IDQwLFxyXG5cdFx0XCJkZW1vblwiOiA0MSxcclxuXHRcdFwiZGVtb25Qcmllc3RcIjogNDIsXHJcblx0XHRcImdvbGRIb3JuU2xpbWVcIjogNDMsXHJcblx0XHRcInJlZEtpbmdcIjogNDQsXHJcblx0XHRcIndoaXRlS2luZ1wiOiA0NSxcclxuXHRcdFwiYmxhY2tNYWdpY2lhblwiOiA0NixcclxuXHRcdFwic2lsdmVyU2xpbWVcIjogNDcsXHJcblx0XHRcInN3b3JkRW1wZXJvclwiOiA0OCxcclxuXHRcdFwid2hpdGVIb3JuU2xpbWVcIjogNDksXHJcblx0XHRcImJhZFByaW5jZXNzXCI6IDUwLFxyXG5cdFx0XCJiYWRGYWlyeVwiOiA1MSxcclxuXHRcdFwiZ3JheVByaWVzdFwiOiA1MixcclxuXHRcdFwicmVkU3dvcmRzbWFuXCI6IDUzLFxyXG5cdFx0XCJ3aGl0ZUdob3N0XCI6IDU0LFxyXG5cdFx0XCJwb2lzb25ab21iaWVcIjogNTUsXHJcblx0XHRcIm1hZ2ljRHJhZ29uXCI6IDU2LFxyXG5cdFx0XCJvY3RvcHVzXCI6IDU3LFxyXG5cdFx0XCJkYXJrRmFpcnlcIjogNTgsXHJcblx0XHRcImdyZWVuS25pZ2h0XCI6IDU5XHJcblx0fSxcclxuXHRcImVuZW15NDhcIjoge1xyXG5cdFx0XCJhbmdlbFwiOiAwLFxyXG5cdFx0XCJlbGVtZW50YWxcIjogMSxcclxuXHRcdFwic3RlZWxHdWFyZFwiOiAyLFxyXG5cdFx0XCJldmlsQmF0XCI6IDNcclxuXHR9LFxyXG5cdFwiaXRlbXNcIjoge1xyXG5cdFx0XCJ5ZWxsb3dLZXlcIjogMCxcclxuXHRcdFwiYmx1ZUtleVwiOiAxLFxyXG5cdFx0XCJyZWRLZXlcIjogMixcclxuXHRcdFwiZ3JlZW5LZXlcIjogMyxcclxuXHRcdFwic3RlZWxLZXlcIjogNCxcclxuXHRcdFwiYmlnS2V5XCI6IDYsXHJcblx0XHRcInJlZEpld2VsXCI6IDE2LFxyXG5cdFx0XCJibHVlSmV3ZWxcIjogMTcsXHJcblx0XHRcImdyZWVuSmV3ZWxcIjogMTgsXHJcblx0XHRcInllbGxvd0pld2VsXCI6IDE5LFxyXG5cdFx0XCJyZWRQb3Rpb25cIjogMjAsXHJcblx0XHRcImJsdWVQb3Rpb25cIjogMjEsXHJcblx0XHRcImdyZWVuUG90aW9uXCI6IDIyLFxyXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogMjMsXHJcblx0XHRcImxpZmVXYW5kXCI6IDMzLFxyXG5cdFx0XCJzd29yZDBcIjogNjAsXHJcblx0XHRcInN3b3JkMVwiOiA1MCxcclxuXHRcdFwic3dvcmQyXCI6IDUxLFxyXG5cdFx0XCJzd29yZDNcIjogNTIsXHJcblx0XHRcInN3b3JkNFwiOiA1MyxcclxuXHRcdFwic3dvcmQ1XCI6IDU0LFxyXG5cdFx0XCJzaGllbGQwXCI6IDYxLFxyXG5cdFx0XCJzaGllbGQxXCI6IDU1LFxyXG5cdFx0XCJzaGllbGQyXCI6IDU2LFxyXG5cdFx0XCJzaGllbGQzXCI6IDU3LFxyXG5cdFx0XCJzaGllbGQ0XCI6IDU4LFxyXG5cdFx0XCJzaGllbGQ1XCI6IDU5LFxyXG5cdFx0XCJib29rXCI6IDksXHJcblx0XHRcImZseVwiOiAxMixcclxuXHRcdFwicGlja2F4ZVwiOiA0NSxcclxuXHRcdFwiaWNlUGlja2F4ZVwiOiA0NCxcclxuXHRcdFwiYm9tYlwiOiA0MyxcclxuXHRcdFwiY2VudGVyRmx5XCI6IDEzLFxyXG5cdFx0XCJ1cEZseVwiOiAxNSxcclxuXHRcdFwiZG93bkZseVwiOiAxNCxcclxuXHRcdFwiY29pblwiOiAxMSxcclxuXHRcdFwic25vd1wiOiA0MSxcclxuXHRcdFwiY3Jvc3NcIjogNDAsXHJcblx0XHRcInN1cGVyUG90aW9uXCI6IDI5LFxyXG5cdFx0XCJlYXJ0aHF1YWtlXCI6IDgsXHJcblx0XHRcInBvaXNvbldpbmVcIjogMjQsXHJcblx0XHRcIndlYWtXaW5lXCI6IDI1LFxyXG5cdFx0XCJjdXJzZVdpbmVcIjogMjcsXHJcblx0XHRcInN1cGVyV2luZVwiOiAyOCxcclxuXHRcdFwia25pZmVcIjogNDIsXHJcblx0XHRcIm1vbmV5UG9ja2V0XCI6IDQ2LFxyXG5cdFx0XCJzaG9lc1wiOiA0NyxcclxuXHRcdFwiaGFtbWVyXCI6IDQ4LFxyXG5cdFx0XCJqdW1wU2hvZXNcIjogNDksXHJcblx0XHRcInNraWxsMVwiOiAzMCxcclxuXHRcdFwid2FuZFwiOiAxMFxyXG5cdH0sXHJcblx0XCJhdXRvdGlsZVwiOiB7XHJcblx0XHRcImF1dG90aWxlXCI6IDAsXHJcblx0XHRcImF1dG90aWxlMVwiOiAwLFxyXG5cdFx0XCJhdXRvdGlsZTJcIjogMCxcclxuXHRcdFwiYXV0b3RpbGUzXCI6IDBcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSA9IFxyXG57XHJcblx0XCIxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ5ZWxsb3dXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxyXG5cdFwiMlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwid2hpdGVXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxyXG5cdFwiM1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVdhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXHJcblx0XCI0XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzdGFyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjVcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxhdmFcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiNlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiaWNlXCJ9LFxyXG5cdFwiN1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVNob3AtbGVmdFwifSxcclxuXHRcIjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVTaG9wLXJpZ2h0XCJ9LFxyXG5cdFwiOVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwicGlua1Nob3AtbGVmdFwifSxcclxuXHRcIjEwXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJwaW5rU2hvcC1yaWdodFwifSxcclxuXHRcIjExXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsYXZhTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwicG9pc29uTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxM1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwid2Vha05ldFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJ0cmlnZ2VyXCI6XCJwYXNzTmV0XCJ9LFxyXG5cdFwiMTRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImN1cnNlTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxNVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiYmx1ZVdhdGVyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE2XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ3YXRlclwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIyMFwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGVcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMjFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInllbGxvd0tleVwifSxcclxuXHRcIjIyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJibHVlS2V5XCJ9LFxyXG5cdFwiMjNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInJlZEtleVwifSxcclxuXHRcIjI0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJncmVlbktleVwifSxcclxuXHRcIjI1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdGVlbEtleVwifSxcclxuXHRcIjI2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJiaWdLZXlcIn0sXHJcblx0XCIyN1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkSmV3ZWxcIn0sXHJcblx0XCIyOFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYmx1ZUpld2VsXCJ9LFxyXG5cdFwiMjlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImdyZWVuSmV3ZWxcIn0sXHJcblx0XCIzMFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93SmV3ZWxcIn0sXHJcblx0XCIzMVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkUG90aW9uXCJ9LFxyXG5cdFwiMzJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVQb3Rpb25cIn0sXHJcblx0XCIzM1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5Qb3Rpb25cIn0sXHJcblx0XCIzNFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93UG90aW9uXCJ9LFxyXG5cdFwiMzVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMVwifSxcclxuXHRcIjM2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQxXCJ9LFxyXG5cdFwiMzdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMlwifSxcclxuXHRcIjM4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQyXCJ9LFxyXG5cdFwiMzlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkM1wifSxcclxuXHRcIjQwXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQzXCJ9LFxyXG5cdFwiNDFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkNFwifSxcclxuXHRcIjQyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ0XCJ9LFxyXG5cdFwiNDNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkNVwifSxcclxuXHRcIjQ0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ1XCJ9LFxyXG5cdFwiNDVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJvb2tcIn0sXHJcblx0XCI0NlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZmx5XCJ9LFxyXG5cdFwiNDdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInBpY2theGVcIn0sXHJcblx0XCI0OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiaWNlUGlja2F4ZVwifSxcclxuXHRcIjQ5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJib21iXCJ9LFxyXG5cdFwiNTBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNlbnRlckZseVwifSxcclxuXHRcIjUxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ1cEZseVwifSxcclxuXHRcIjUyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJkb3duRmx5XCJ9LFxyXG5cdFwiNTNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNvaW5cIn0sXHJcblx0XCI1NFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic25vd1wifSxcclxuXHRcIjU1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJjcm9zc1wifSxcclxuXHRcIjU2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdXBlclBvdGlvblwifSxcclxuXHRcIjU3XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJlYXJ0aHF1YWtlXCJ9LFxyXG5cdFwiNThcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInBvaXNvbldpbmVcIn0sXHJcblx0XCI1OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwid2Vha1dpbmVcIn0sXHJcblx0XCI2MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY3Vyc2VXaW5lXCJ9LFxyXG5cdFwiNjFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN1cGVyV2luZVwifSxcclxuXHRcIjYyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJrbmlmZVwifSxcclxuXHRcIjYzXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJtb25leVBvY2tldFwifSxcclxuXHRcIjY0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaG9lc1wifSxcclxuXHRcIjY1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJoYW1tZXJcIn0sXHJcblx0XCI2OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwibGlmZVdhbmRcIn0sXHJcblx0XCI2OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwianVtcFNob2VzXCJ9LFxyXG5cdFwiNzBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMFwifSxcclxuXHRcIjcxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQwXCJ9LFxyXG5cdFwiNzJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNraWxsMVwifSxcclxuXHRcIjczXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ3YW5kXCJ9LFxyXG5cdFwiODFcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInllbGxvd0Rvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVEb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjgzXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJyZWREb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjg0XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJncmVlbkRvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODVcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInNwZWNpYWxEb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjg2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJzdGVlbERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInVwRmxvb3JcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjg4XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJkb3duRmxvb3JcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjg5XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJwb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkwXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzdGFyUG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCI5MVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwidXBQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkyXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsZWZ0UG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCI5M1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiZG93blBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiOTRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInJpZ2h0UG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxMDFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImNyeXN0YWxVcFwifSxcclxuXHRcIjEwMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3J5c3RhbEJvdHRvbVwifSxcclxuXHRcIjEwM1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiZmlyZVwifSxcclxuXHRcIjEwNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwic3dpdGNoXCJ9LFxyXG5cdFwiMTIxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm1hblwifSxcclxuXHRcIjEyMlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b21hblwifSxcclxuXHRcIjEyM1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ0aGllZlwifSxcclxuXHRcIjEyNFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJmYWlyeVwifSxcclxuXHRcIjEyNVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJtYWdpY2lhblwifSxcclxuXHRcIjEyNlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b21hbk1hZ2ljaWFuXCJ9LFxyXG5cdFwiMTI3XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm9sZE1hblwifSxcclxuXHRcIjEyOFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJjaGlsZFwifSxcclxuXHRcIjEyOVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b29kXCJ9LFxyXG5cdFwiMTMwXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInBpbmtTaG9wXCJ9LFxyXG5cdFwiMTMxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImJsdWVTaG9wXCJ9LFxyXG5cdFwiMTMyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInByaW5jZXNzXCJ9LFxyXG5cdFwiMTMzXCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMwXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcclxuXHRcIjEzNFwiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjMVwiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXHJcblx0XCIxMzVcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzJcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxyXG5cdFwiMTM2XCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMzXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcclxuXHRcIjE1MVwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUxXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE1MlwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE1M1wiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUzXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE2MVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYXJyb3dVcFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwiZG93blwiXSxcImNhbm5vdEluXCI6W1wiZG93blwiXX0sXHJcblx0XCIxNjJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93RG93blwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwidXBcIl0sXCJjYW5ub3RJblwiOltcInVwXCJdfSxcclxuXHRcIjE2M1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYXJyb3dMZWZ0XCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcInVwXCIsXCJkb3duXCIsXCJyaWdodFwiXSxcImNhbm5vdEluXCI6W1wicmlnaHRcIl19LFxyXG5cdFwiMTY0XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd1JpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcInVwXCIsXCJkb3duXCIsXCJsZWZ0XCJdLFwiY2Fubm90SW5cIjpbXCJsZWZ0XCJdfSxcclxuXHRcIjE2NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwibGlnaHRcIixcInRyaWdnZXJcIjpcImNoYW5nZUxpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxNjZcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImRhcmtMaWdodFwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIxNjdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInNraVwiLFwidHJpZ2dlclwiOlwic2tpXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxNjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImZsb3dlclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiMTY5XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJib3hcIixcInRyaWdnZXJcIjpcInB1c2hCb3hcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTcwXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJib3hlZFwiLFwidHJpZ2dlclwiOlwicHVzaEJveFwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIxODFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2x0XCJ9LFxyXG5cdFwiMTgyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInd0XCJ9LFxyXG5cdFwiMTgzXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndydFwifSxcclxuXHRcIjE4NFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bFwifSxcclxuXHRcIjE4NVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3Y1wifSxcclxuXHRcIjE4NlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3clwifSxcclxuXHRcIjE4N1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bGJcIn0sXHJcblx0XCIxODhcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3JiXCJ9LFxyXG5cdFwiMTg5XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRsdFwifSxcclxuXHRcIjE5MFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkdFwifSxcclxuXHRcIjE5MVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkcnRcIn0sXHJcblx0XCIxOTJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGxcIn0sXHJcblx0XCIxOTNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGNcIn0sXHJcblx0XCIxOTRcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZHJcIn0sXHJcblx0XCIxOTVcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGxiXCJ9LFxyXG5cdFwiMTk2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyYlwifSxcclxuXHRcIjIwMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuU2xpbWVcIn0sXHJcblx0XCIyMDJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTbGltZVwifSxcclxuXHRcIjIwM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrU2xpbWVcIn0sXHJcblx0XCIyMDRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzbGltZWxvcmRcIn0sXHJcblx0XCIyMDVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYXRcIn0sXHJcblx0XCIyMDZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiaWdCYXRcIn0sXHJcblx0XCIyMDdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRCYXRcIn0sXHJcblx0XCIyMDhcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ2YW1waXJlXCJ9LFxyXG5cdFwiMjA5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25cIn0sXHJcblx0XCIyMTBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvblNvaWxkZXJcIn0sXHJcblx0XCIyMTFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbkNhcHRhaW5cIn0sXHJcblx0XCIyMTJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnaG9zdFNrZWxldG9uXCJ9LFxyXG5cdFwiMjEzXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiem9tYmllXCJ9LFxyXG5cdFwiMjE0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiem9tYmllS25pZ2h0XCJ9LFxyXG5cdFwiMjE1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicm9ja1wifSxcclxuXHRcIjIxNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNsaW1lTWFuXCJ9LFxyXG5cdFwiMjE3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmx1ZVByaWVzdFwifSxcclxuXHRcIjIxOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFByaWVzdFwifSxcclxuXHRcIjIxOVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJyb3duV2l6YXJkXCJ9LFxyXG5cdFwiMjIwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkV2l6YXJkXCJ9LFxyXG5cdFwiMjIxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93R3VhcmRcIn0sXHJcblx0XCIyMjJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlR3VhcmRcIn0sXHJcblx0XCIyMjNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRHdWFyZFwifSxcclxuXHRcIjIyNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN3b3Jkc21hblwifSxcclxuXHRcIjIyNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNvbGRpZXJcIn0sXHJcblx0XCIyMjZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dLbmlnaHRcIn0sXHJcblx0XCIyMjdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLbmlnaHRcIn0sXHJcblx0XCIyMjhcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkYXJrS25pZ2h0XCJ9LFxyXG5cdFwiMjI5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmxhY2tLaW5nXCJ9LFxyXG5cdFwiMjMwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93S2luZ1wifSxcclxuXHRcIjIzMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS2luZ1wifSxcclxuXHRcIjIzMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsdWVLbmlnaHRcIn0sXHJcblx0XCIyMzNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnb2xkU2xpbWVcIn0sXHJcblx0XCIyMzRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25Ta2VsZXRvblwifSxcclxuXHRcIjIzNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInBvaXNvbkJhdFwifSxcclxuXHRcIjIzNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN0ZWVsUm9ja1wifSxcclxuXHRcIjIzN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uUHJpZXN0XCJ9LFxyXG5cdFwiMjM4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25LaW5nXCJ9LFxyXG5cdFwiMjM5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25XaXphcmRcIn0sXHJcblx0XCIyNDBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTa2VsZXRvbkNhcHRpb25cIn0sXHJcblx0XCIyNDFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYWRIZXJvXCJ9LFxyXG5cdFwiMjQyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGVtb25cIn0sXHJcblx0XCIyNDNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblByaWVzdFwifSxcclxuXHRcIjI0NFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdvbGRIb3JuU2xpbWVcIn0sXHJcblx0XCIyNDVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLaW5nXCJ9LFxyXG5cdFwiMjQ2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVLaW5nXCJ9LFxyXG5cdFwiMjQ3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmxhY2tNYWdpY2lhblwifSxcclxuXHRcIjI0OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNpbHZlclNsaW1lXCJ9LFxyXG5cdFwiMjQ5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3dvcmRFbXBlcm9yXCJ9LFxyXG5cdFwiMjUwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVIb3JuU2xpbWVcIn0sXHJcblx0XCIyNTFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYWRQcmluY2Vzc1wifSxcclxuXHRcIjI1MlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZEZhaXJ5XCJ9LFxyXG5cdFwiMjUzXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZ3JheVByaWVzdFwifSxcclxuXHRcIjI1NFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFN3b3Jkc21hblwifSxcclxuXHRcIjI1NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlR2hvc3RcIn0sXHJcblx0XCIyNTZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25ab21iaWVcIn0sXHJcblx0XCIyNTdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJtYWdpY0RyYWdvblwifSxcclxuXHRcIjI1OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm9jdG9wdXNcIn0sXHJcblx0XCIyNTlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkYXJrRmFpcnlcIn0sXHJcblx0XCIyNjBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJncmVlbktuaWdodFwifSxcclxuXHRcIjI2MVwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJhbmdlbFwifSxcclxuXHRcIjI2MlwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJlbGVtZW50YWxcIn0sXHJcblx0XCIyNjNcIjoge1wiY2xzXCI6XCJlbmVteTQ4XCIsXCJpZFwiOlwic3RlZWxHdWFyZFwifSxcclxuXHRcIjI2NFwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJldmlsQmF0XCJ9XHJcbn0iLCJleHBvcnQgdmFyIGRhdGFfYTFlMmZiNGFfZTk4Nl80NTI0X2IwZGFfOWI3YmE3YzA4NzRkID0gXHJcbntcclxuXHRcIm1haW5cIjoge1xyXG5cdFx0XCJmbG9vcklkc1wiOiBbXHJcblx0XHRcdFwic2FtcGxlMFwiLFxyXG5cdFx0XHRcInNhbXBsZTFcIixcclxuXHRcdFx0XCJzYW1wbGUyXCIsXHJcblx0XHRcdFwic2FtcGxlM1wiLFxyXG5cdFx0XHRcIk1UMFwiXHJcblx0XHRdLFxyXG5cdFx0XCJpbWFnZXNcIjogW1xyXG5cdFx0XHRcImJnLmpwZ1wiLFxyXG5cdFx0XHRcIndpbnNraW4ucG5nXCJcclxuXHRcdF0sXHJcblx0XHRcInRpbGVzZXRzXCI6IFtcclxuXHRcdFx0XCJtYWdpY3Rvd2VyLnBuZ1wiXHJcblx0XHRdLFxyXG5cdFx0XCJhbmltYXRlc1wiOiBbXHJcblx0XHRcdFwiaGFuZFwiLFxyXG5cdFx0XHRcInN3b3JkXCIsXHJcblx0XHRcdFwiem9uZVwiXHJcblx0XHRdLFxyXG5cdFx0XCJiZ21zXCI6IFtcclxuXHRcdFx0XCJiZ20ubXAzXCJcclxuXHRcdF0sXHJcblx0XHRcInNvdW5kc1wiOiBbXHJcblx0XHRcdFwiZmxvb3IubXAzXCIsXHJcblx0XHRcdFwiYXR0YWNrLm1wM1wiLFxyXG5cdFx0XHRcImRvb3IubXAzXCIsXHJcblx0XHRcdFwiaXRlbS5tcDNcIixcclxuXHRcdFx0XCJlcXVpcC5tcDNcIixcclxuXHRcdFx0XCJ6b25lLm1wM1wiLFxyXG5cdFx0XHRcImp1bXAubXAzXCIsXHJcblx0XHRcdFwicGlja2F4ZS5tcDNcIixcclxuXHRcdFx0XCJib21iLm1wM1wiLFxyXG5cdFx0XHRcImNlbnRlckZseS5tcDNcIlxyXG5cdFx0XSxcclxuXHRcdFwibmFtZU1hcFwiOiB7XHJcblx0XHRcdFwi6IOM5pmv5Zu+LmpwZ1wiOiBcImJnLmpwZ1wiLFxyXG5cdFx0XHRcIuiDjOaZr+mfs+S5kC5tcDNcIjogXCJiZ20ubXAzXCJcclxuXHRcdH0sXHJcblx0XHRcInN0YXJ0QmFja2dyb3VuZFwiOiBcImJnLmpwZ1wiLFxyXG5cdFx0XCJzdGFydExvZ29TdHlsZVwiOiBcImNvbG9yOiBibGFja1wiLFxyXG5cdFx0XCJsZXZlbENob29zZVwiOiBbXHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIueugOWNlVwiLFxyXG5cdFx0XHRcdFwiRWFzeVwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIuaZrumAmlwiLFxyXG5cdFx0XHRcdFwiTm9ybWFsXCJcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi5Zuw6Zq+XCIsXHJcblx0XHRcdFx0XCJIYXJkXCJcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi5Zmp5qKmXCIsXHJcblx0XHRcdFx0XCJIZWxsXCJcclxuXHRcdFx0XVxyXG5cdFx0XSxcclxuXHRcdFwiZXF1aXBOYW1lXCI6IFtcclxuXHRcdFx0XCLmrablmahcIixcclxuXHRcdFx0XCLnm77niYxcIlxyXG5cdFx0XSxcclxuXHRcdFwic3RhcnRCZ21cIjogbnVsbCxcclxuXHRcdFwic3RhdHVzTGVmdEJhY2tncm91bmRcIjogbnVsbCxcclxuXHRcdFwic3RhdHVzVG9wQmFja2dyb3VuZFwiOiBcInVybChwcm9qZWN0L2ltYWdlcy9ncm91bmQucG5nKSByZXBlYXRcIixcclxuXHRcdFwidG9vbHNCYWNrZ3JvdW5kXCI6IFwidXJsKHByb2plY3QvaW1hZ2VzL2dyb3VuZC5wbmcpIHJlcGVhdFwiLFxyXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNDQ0NDQ0NcIixcclxuXHRcdFwic3RhdHVzQmFyQ29sb3JcIjogXCJ3aGl0ZVwiLFxyXG5cdFx0XCJoYXJkTGFiZWxDb2xvclwiOiBcInJlZFwiLFxyXG5cdFx0XCJmbG9vckNoYW5naW5nQmFja2dyb3VuZFwiOiBcImJsYWNrXCIsXHJcblx0XHRcImZsb29yQ2hhbmdpbmdUZXh0Q29sb3JcIjogXCJ3aGl0ZVwiLFxyXG5cdFx0XCJmb250XCI6IFwiVmVyZGFuYVwiLFxyXG5cdFx0XCJzdGFydEJ1dHRvbnNTdHlsZVwiOiBcImJhY2tncm91bmQtY29sb3I6ICMzMjM2OUY7IG9wYWNpdHk6IDAuODU7IGNvbG9yOiAjRkZGRkZGOyBib3JkZXI6ICNGRkZGRkYgMnB4IHNvbGlkOyBjYXJldC1jb2xvcjogI0ZGRDcwMDtcIlxyXG5cdH0sXHJcblx0XCJmaXJzdERhdGFcIjoge1xyXG5cdFx0XCJ0aXRsZVwiOiBcIumtlOWhlOagt+adv1wiLFxyXG5cdFx0XCJuYW1lXCI6IFwidGVtcGxhdGVcIixcclxuXHRcdFwidmVyc2lvblwiOiBcIlZlciAyLjYuNlwiLFxyXG5cdFx0XCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG5cdFx0XCJoZXJvXCI6IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwi6Ziz5YWJXCIsXHJcblx0XHRcdFwibHZcIjogMSxcclxuXHRcdFx0XCJocG1heFwiOiA5OTk5LFxyXG5cdFx0XHRcImhwXCI6IDEwMDAsXHJcblx0XHRcdFwibWFuYW1heFwiOiAtMSxcclxuXHRcdFx0XCJtYW5hXCI6IDAsXHJcblx0XHRcdFwiYXRrXCI6IDEwMCxcclxuXHRcdFx0XCJkZWZcIjogMTAwLFxyXG5cdFx0XHRcIm1kZWZcIjogMCxcclxuXHRcdFx0XCJtb25leVwiOiAwLFxyXG5cdFx0XHRcImV4cGVyaWVuY2VcIjogMCxcclxuXHRcdFx0XCJlcXVpcG1lbnRcIjogW10sXHJcblx0XHRcdFwiaXRlbXNcIjoge1xyXG5cdFx0XHRcdFwia2V5c1wiOiB7XHJcblx0XHRcdFx0XHRcInllbGxvd0tleVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJibHVlS2V5XCI6IDAsXHJcblx0XHRcdFx0XHRcInJlZEtleVwiOiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcImNvbnN0YW50c1wiOiB7fSxcclxuXHRcdFx0XHRcInRvb2xzXCI6IHt9LFxyXG5cdFx0XHRcdFwiZXF1aXBzXCI6IHt9XHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jXCI6IHtcclxuXHRcdFx0XHRcImRpcmVjdGlvblwiOiBcInVwXCIsXHJcblx0XHRcdFx0XCJ4XCI6IDYsXHJcblx0XHRcdFx0XCJ5XCI6IDEwXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiZmxhZ3NcIjoge30sXHJcblx0XHRcdFwic3RlcHNcIjogMFxyXG5cdFx0fSxcclxuXHRcdFwic3RhcnRDYW52YXNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWcqOi/memHjOWPr+S7peeUqOS6i+S7tuadpeiHquWumuS5iee7mOWItuagh+mimOeVjOmdoueahOiDjOaZr+WbvuetiVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul55u05o6l5YiH5o2i5Yiw5YW25LuW5qW85bGC77yI5q+U5aaC5p+Q5Liq5byA5aeL5Ymn5oOF5qW85bGC77yJ6L+b6KGM5pON5L2c44CCXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcInNob3dJbWFnZVwiLFxyXG5cdFx0XHRcdFwiY29kZVwiOiAxLFxyXG5cdFx0XHRcdFwiaW1hZ2VcIjogXCJiZy5qcGdcIixcclxuXHRcdFx0XHRcImxvY1wiOiBbXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0MFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJkd1wiOiAxMDAsXHJcblx0XHRcdFx0XCJkaFwiOiAxMDAsXHJcblx0XHRcdFx0XCJvcGFjaXR5XCI6IDEsXHJcblx0XHRcdFx0XCJ0aW1lXCI6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcIndoaWxlXCIsXHJcblx0XHRcdFx0XCJjb25kaXRpb25cIjogXCIxXCIsXHJcblx0XHRcdFx0XCJkYXRhXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnu5nnlKjmiLfmj5DkvpvpgInmi6npobnvvIzov5nph4znroDljZXnmoTkvb/nlKjkuoZjaG9pY2Vz5LqL5Lu2XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul6LS05oyJ6ZKu5Zu+54S25ZCO5L2/55So562J5b6F5pON5L2c5p2l5a6M5oiQXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNob2ljZXNcIixcclxuXHRcdFx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLlvIDlp4vmuLjmiI9cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiYWN0aW9uXCI6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLmo4Dmn6ViZ23nirbmgIHvvIzkuIvlkIxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaWZcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImNvcmUuZmxhZ3Muc3RhcnREaXJlY3RseVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHJ1ZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi55u05o6l5byA5aeL5ri45oiP77yM6K6+572u5Yid5aeL5YyW5pWw5o2uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuZXZlbnRzLnNldEluaXREYXRhKCcnKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Yqo5oCB55Sf5oiQ6Zq+5bqm6YCJ5oup6aG5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbnZhciBjaG9pY2VzID0gW107XFxubWFpbi5sZXZlbENob29zZS5mb3JFYWNoKGZ1bmN0aW9uIChvbmUpIHtcXG5cXHRjaG9pY2VzLnB1c2goe1xcXCJ0ZXh0XFxcIjogb25lWzBdLCBcXFwiYWN0aW9uXFxcIjogW1xcblxcdFxcdHtcXFwidHlwZVxcXCI6IFxcXCJmdW5jdGlvblxcXCIsIFxcXCJmdW5jdGlvblxcXCI6IFxcXCJmdW5jdGlvbigpIHsgY29yZS5zdGF0dXMuaGFyZCA9ICdcXFwiK29uZVsxXStcXFwiJzsgY29yZS5ldmVudHMuc2V0SW5pdERhdGEoJ1xcXCIrb25lWzFdK1xcXCInKTsgfVxcXCJ9XFxuXFx0XX0pO1xcbn0pXFxuY29yZS5pbnNlcnRBY3Rpb24oe1xcXCJ0eXBlXFxcIjogXFxcImNob2ljZXNcXFwiLCBcXFwiY2hvaWNlc1xcXCI6IGNob2ljZXN9KTtcXG59XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJoaWRlSW1hZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvZGVcIjogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRpbWVcIjogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaIkOWKn+mAieaLqemavuW6plwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJicmVha1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuivu+WPluWtmOaho1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIueugOWNleeahOS9v+eUqOKAnOWRvOWHuuivu+aho+eVjOmdouKAneadpeWkhOeQhlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjYWxsTG9hZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuWbnuaUvuW9leWDj1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIui/meauteS7o+eggeS8muW8ueahhumAieaLqeW9leWDj+aWh+S7tlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJpZlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiIWNvcmUuaXNSZXBsYXlpbmcoKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHJ1ZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY2hvb3NlUmVwbGF5RmlsZSgpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZhbHNlXCI6IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5o6l5LiL5p2l5Lya5omn6KGMc3RhcnRUZXh05Lit55qE5LqL5Lu2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhcnRUZXh0XCI6IFtcclxuXHRcdF0sXHJcblx0XHRcInNob3BzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaWRcIjogXCJtb25leVNob3AxXCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwi6LSq5amq5LmL56WeXCIsXHJcblx0XHRcdFx0XCJpY29uXCI6IFwiYmx1ZVNob3BcIixcclxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCIxRumHkeW4geWVhuW6l1wiLFxyXG5cdFx0XHRcdFwiY29tbW9uVGltZXNcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwidXNlXCI6IFwibW9uZXlcIixcclxuXHRcdFx0XHRcIm5lZWRcIjogXCIyMCsxMCp0aW1lcyoodGltZXMrMSlcIixcclxuXHRcdFx0XHRcInRleHRcIjogXCLli4fmlaLnmoTmrablo6vllYrvvIznu5nmiJEke25lZWR96YeR5biB5bCx5Y+v5Lul77yaXCIsXHJcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi55Sf5ZG9KzgwMFwiLFxyXG5cdFx0XHRcdFx0XHRcImVmZmVjdFwiOiBcInN0YXR1czpocCs9ODAwXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImlkXCI6IFwiZXhwU2hvcDFcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCLnu4/pqozkuYvnpZ5cIixcclxuXHRcdFx0XHRcImljb25cIjogXCJwaW5rU2hvcFwiLFxyXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIjFG57uP6aqM5ZWG5bqXXCIsXHJcblx0XHRcdFx0XCJjb21tb25UaW1lc1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJ1c2VcIjogXCJleHBlcmllbmNlXCIsXHJcblx0XHRcdFx0XCJuZWVkXCI6IFwiLTFcIixcclxuXHRcdFx0XHRcInRleHRcIjogXCLli4fmlaLnmoTmrablo6vllYrvvIznu5nmiJHoi6XlubLnu4/pqozlsLHlj6/ku6XvvJpcIixcclxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnrYnnuqcrMVwiLFxyXG5cdFx0XHRcdFx0XHRcIm5lZWRcIjogXCIxMDBcIixcclxuXHRcdFx0XHRcdFx0XCJlZmZlY3RcIjogXCJzdGF0dXM6aHArPTEwMDBcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaWRcIjogXCJpdGVtU2hvcFwiLFxyXG5cdFx0XHRcdFwiaXRlbVwiOiB0cnVlLFxyXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIumBk+WFt+WVhuW6l1wiLFxyXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcImlkXCI6IFwieWVsbG93S2V5XCIsXHJcblx0XHRcdFx0XHRcdFwibnVtYmVyXCI6IDEwLFxyXG5cdFx0XHRcdFx0XHRcIm1vbmV5XCI6IDEwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpZFwiOiBcImtleVNob3AxXCIsXHJcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwi5Zue5pS26ZKl5YyZ5ZWG5bqXXCIsXHJcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwiY29tbW9uRXZlbnRcIjogXCLlm57mlLbpkqXljJnllYblupdcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJsZXZlbFVwXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmVlZFwiOiBcIjBcIixcclxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuatpOWkhOaYr+WIneWni+etiee6p++8jOWPqumcgOWhq+WGmeensOWPt1wiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuZWVkXCI6IFwiMjBcIixcclxuXHRcdFx0XHRcInRpdGxlXCI6IFwi56ys5LqM57qnXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdGF0dXM6YXRrKzEwXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXR1czpkZWZcIixcclxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0YXR1czpkZWYrMTBcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmVlZFwiOiBcIjQwXCIsXHJcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwidGlwXCIsXHJcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaBreWWnOWNh+e6p1wiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRcInZhbHVlc1wiOiB7XHJcblx0XHRcImxhdmFEYW1hZ2VcIjogMTAwLFxyXG5cdFx0XCJwb2lzb25EYW1hZ2VcIjogMTAsXHJcblx0XHRcIndlYWtWYWx1ZVwiOiAyMCxcclxuXHRcdFwicmVkSmV3ZWxcIjogMyxcclxuXHRcdFwiYmx1ZUpld2VsXCI6IDMsXHJcblx0XHRcImdyZWVuSmV3ZWxcIjogNSxcclxuXHRcdFwicmVkUG90aW9uXCI6IDEwMCxcclxuXHRcdFwiYmx1ZVBvdGlvblwiOiAyNTAsXHJcblx0XHRcInllbGxvd1BvdGlvblwiOiA1MDAsXHJcblx0XHRcImdyZWVuUG90aW9uXCI6IDgwMCxcclxuXHRcdFwiYnJlYWtBcm1vclwiOiAwLjksXHJcblx0XHRcImNvdW50ZXJBdHRhY2tcIjogMC4xLFxyXG5cdFx0XCJwdXJpZnlcIjogMyxcclxuXHRcdFwiaGF0cmVkXCI6IDIsXHJcblx0XHRcIm1vdmVTcGVlZFwiOiAxMDAsXHJcblx0XHRcImFuaW1hdGVTcGVlZFwiOiA0MDAsXHJcblx0XHRcImZsb29yQ2hhbmdlVGltZVwiOiAwXHJcblx0fSxcclxuXHRcImZsYWdzXCI6IHtcclxuXHRcdFwiZW5hYmxlRmxvb3JcIjogdHJ1ZSxcclxuXHRcdFwiZW5hYmxlTmFtZVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTHZcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUhQTWF4XCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVNYW5hXCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVNRGVmXCI6IHRydWUsXHJcblx0XHRcImVuYWJsZU1vbmV5XCI6IHRydWUsXHJcblx0XHRcImVuYWJsZUV4cGVyaWVuY2VcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUxldmVsVXBcIjogZmFsc2UsXHJcblx0XHRcImxldmVsVXBMZWZ0TW9kZVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlS2V5c1wiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVQWkZcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZURlYnVmZlwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlU2tpbGxcIjogZmFsc2UsXHJcblx0XHRcImZseU5lYXJTdGFpclwiOiB0cnVlLFxyXG5cdFx0XCJmbHlSZWNvcmRQb3NpdGlvblwiOiBmYWxzZSxcclxuXHRcdFwicGlja2F4ZUZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxyXG5cdFx0XCJib21iRm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXHJcblx0XHRcInNub3dGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcclxuXHRcdFwiYmlnS2V5SXNCb3hcIjogZmFsc2UsXHJcblx0XHRcInN0ZWVsRG9vcldpdGhvdXRLZXlcIjogZmFsc2UsXHJcblx0XHRcIml0ZW1GaXJzdFRleHRcIjogZmFsc2UsXHJcblx0XHRcImVxdWlwbWVudFwiOiBmYWxzZSxcclxuXHRcdFwiZXF1aXBib3hCdXR0b25cIjogZmFsc2UsXHJcblx0XHRcImljb25JbkVxdWlwYm94XCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVBZGRQb2ludFwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTmVnYXRpdmVEYW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcImhhdHJlZERlY3JlYXNlXCI6IHRydWUsXHJcblx0XHRcImJldHdlZW5BdHRhY2tDZWlsXCI6IGZhbHNlLFxyXG5cdFx0XCJiZXR3ZWVuQXR0YWNrTWF4XCI6IGZhbHNlLFxyXG5cdFx0XCJ1c2VMb29wXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGFydFVzaW5nQ2FudmFzXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGFydERpcmVjdGx5XCI6IHRydWUsXHJcblx0XHRcInN0YXR1c0NhbnZhc1wiOiBmYWxzZSxcclxuXHRcdFwic3RhdHVzQ2FudmFzUm93c09uTW9iaWxlXCI6IDMsXHJcblx0XHRcImRpc3BsYXlFbmVteURhbWFnZVwiOiB0cnVlLFxyXG5cdFx0XCJkaXNwbGF5Q3JpdGljYWxcIjogdHJ1ZSxcclxuXHRcdFwiZGlzcGxheUV4dHJhRGFtYWdlXCI6IHRydWUsXHJcblx0XHRcImVuYWJsZUdlbnRsZUNsaWNrXCI6IHRydWUsXHJcblx0XHRcInBvdGlvbldoaWxlUm91dGluZ1wiOiBmYWxzZSxcclxuXHRcdFwiaWdub3JlQ2hhbmdlRmxvb3JcIjogdHJ1ZSxcclxuXHRcdFwiY2FuR29EZWFkWm9uZVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTW92ZURpcmVjdGx5XCI6IHRydWUsXHJcblx0XHRcImVuYWJsZURpc2FibGVkU2hvcFwiOiB0cnVlLFxyXG5cdFx0XCJkaXNhYmxlU2hvcE9uRGFtYWdlXCI6IGZhbHNlLFxyXG5cdFx0XCJibHVyRmdcIjogZmFsc2UsXHJcblx0XHRcImNoZWNrQ29uc29sZVwiOiBmYWxzZVxyXG5cdH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJlZS10ZXgtcGFja2VyLWNvcmVcIik7IiwidmFyIG1hcCA9IHtcblx0XCIuL01UMC5qc1wiOiA5LFxuXHRcIi4vc2FtcGxlMC5qc1wiOiAxMCxcblx0XCIuL3NhbXBsZTEuanNcIjogMTEsXG5cdFwiLi9zYW1wbGUyLmpzXCI6IDEyLFxuXHRcIi4vc2FtcGxlMy5qc1wiOiAxM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDg7IiwibWFpbi5mbG9vcnMuTVQwPVxyXG57XHJcblwiZmxvb3JJZFwiOiBcIk1UMFwiLFxyXG5cInRpdGxlXCI6IFwi5Li75aGUIDAg5bGCXCIsXHJcblwibmFtZVwiOiBcIjBcIixcclxuXCJjYW5GbHlUb1wiOiB0cnVlLFxyXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxyXG5cImNhbm5vdFZpZXdNYXBcIjogZmFsc2UsXHJcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxyXG5cImltYWdlc1wiOiBbXSxcclxuXCJpdGVtX3JhdGlvXCI6IDEsXHJcblwibWFwXCI6IFtcclxuICAgIFsgIDEwMDE2LCAgMTAwMTcsICAxMDAxOCwgIDEwMDI0LCAgMTAwMjUsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF1cclxuXSxcclxuXCJmaXJzdEFycml2ZVwiOiBbXSxcclxuXCJwYXJhbGxlbERvXCI6IFwiXCIsXHJcblwiZXZlbnRzXCI6IHt9LFxyXG5cImNoYW5nZUZsb29yXCI6IHt9LFxyXG5cImFmdGVyQmF0dGxlXCI6IHt9LFxyXG5cImFmdGVyR2V0SXRlbVwiOiB7fSxcclxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxyXG5cImNhbm5vdE1vdmVcIjoge30sXHJcblwiYmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJmZ21hcFwiOiBbXHJcblxyXG5dLFxyXG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMD1cclxue1xyXG5cImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcblwidGl0bGVcIjogXCLmoLfmnb8gMCDlsYJcIixcclxuXCJuYW1lXCI6IFwiMFwiLFxyXG5cImNhbkZseVRvXCI6IHRydWUsXHJcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXHJcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxyXG5cImltYWdlc1wiOiBbXSxcclxuXCJiZ21cIjogXCJiZ20ubXAzXCIsXHJcblwiaXRlbV9yYXRpb1wiOiAxLFxyXG5cIm1hcFwiOiBbXHJcbiAgICBbICAwLCAgMCwyMjAsICAwLCAgMCwgMjAsIDg3LCAgMywgNjUsIDY0LCA0NCwgNDMsIDQyXSxcclxuICAgIFsgIDAsMjQ2LCAgMCwyNDYsICAwLCAyMCwgIDAsICAzLCA1OCwgNTksIDYwLCA2MSwgNDFdLFxyXG4gICAgWzIxOSwgIDAsICAwLCAgMCwyMTksIDIwLCAgMCwgIDMsIDU3LCAyNiwgNjIsIDYzLCA0MF0sXHJcbiAgICBbIDIwLCAyMCwxMjUsIDIwLCAyMCwgMjAsICAwLCAgMywgNTMsIDU0LCA1NSwgNTYsIDM5XSxcclxuICAgIFsyMTYsMjQ3LDI2MywyMzUsMjQ4LCAgNiwgIDAsICAzLCA0OSwgNTAsIDUxLCA1MiwgMzhdLFxyXG4gICAgWyAgNiwgIDYsMTI1LCAgNiwgIDYsICA2LCAgMCwgIDEsIDQ1LCA0NiwgNDcsIDQ4LCAzN10sXHJcbiAgICBbMjI0LDI1NCwyMTIsMjYyLDIwNCwgIDUsICAwLCAgMSwgMzEsIDMyLCAzNCwgMzMsIDM2XSxcclxuICAgIFsyMDEsMjYxLDIxNywgICAwLDIwNywgIDUsICAwLCAgMSwgMjcsIDI4LCAyOSwgMzAsIDM1XSxcclxuICAgIFsgIDUsICA1LDEyNSwgIDUsICA1LCAgNSwgIDAsICAxLCAyMSwgMjIsIDIzLCAyNCwgMjVdLFxyXG4gICAgWyAgMCwgIDAsMjM3LCAgMCwgIDAsICAwLCA0NSwgIDEsICAxLCAgMSwxMjEsICAxLCAgMV0sXHJcbiAgICBbICA0LCAgNCwxMzMsICA0LCAgNCwgIDQsICAwLCAgMCwgIDAsICAwLCAgMCwgODUsMTI0XSxcclxuICAgIFsgODcsIDExLCAxMiwgMTMsIDE0LCAgNCwgIDQsICAyLCAgMiwgIDIsMTIyLCAgMiwgIDJdLFxyXG4gICAgWyA4OCwgODksIDkwLCA5MSwgOTIsIDkzLCA5NCwgIDIsIDgxLCA4MiwgODMsIDg0LCA4Nl1cclxuXSxcclxuXCJmaXJzdEFycml2ZVwiOiBbXSxcclxuXCJldmVudHNcIjoge1xyXG4gICAgXCIxMCw5XCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXei/meS6m+aYr+acrOagt+adv+aUr+aMgeeahOaJgOacieeahOmBk+WFt+OAglxcblxcbumBk+WFt+WIhuS4uuWbm+exu++8mml0ZW1zLCBjb25zdGFudHMsIHRvb2xz77yMZXF1aXBz44CCXFxuaXRlbXMg5Li65Y2z5o2h5Y2z55So57G76YGT5YW377yM5L6L5aaC5a6d55+z44CB6KGA55O244CB5YmR55u+562J44CCXFxuY29uc3RhbnRzIOS4uuawuOS5hemBk+WFt++8jOS+i+WmguaAqueJqeaJi+WGjOOAgealvOWxguS8oOmAgeWZqOOAgeW5uOi/kOmHkeW4geetieOAglxcbnRvb2xzIOS4uua2iOiAl+exu+mBk+WFt++8jOS+i+WmguegtOWimemVkOOAgeeCuOW8ueOAgeS4reW/g+WvueensOmjnuihjOWZqOetieOAglxcbmVxdWlwcyDkuLroo4XlpIfvvIzkvovlpoLliZHnm77nrYnjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXVxcYlt1cF3mnInlhbPpgZPlhbfmlYjmnpzvvIzlrprkuYnlnKhpdGVtcy5qc+S4reOAglxcbuebruWJjeWkp+WkmuaVsOmBk+WFt+W3suaciem7mOiupOihjOS4uu+8jOWmguacieiHquWumuS5ieeahOmcgOaxguWImemcgOWcqGl0ZW1zLmpz5Lit5L+u5pS55Luj56CB44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl1cXGJbdXBd5ou+5Y+W6YGT5YW357uT5p2f5ZCO5Y+v6Kem5Y+RIGFmdGVyR2V0SXRlbSDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEwLDExXCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5d6L+Z5Lqb5piv6Zeo77yM6ZyA6KaB5a+55bqU55qE6ZKl5YyZ5omT5byA44CCXFxu5py65YWz6Zeo5b+F6aG75L2/55So54m55q6K55qE5byA5rOV44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeW8gOmXqOWQjuWPr+inpuWPkSBhZnRlck9wZW5Eb29yIOS6i+S7tuOAglxcblxcbuacieWFs+S6i+S7tueahOWQhOenjeS/oeaBr+WcqOS4i+S4gOWxguS8muacieabtOS4uuivpue7hueahOivtOaYjuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMiwxMFwiOiBbXHJcbiAgICAgICAgXCJcXHRb5bCR5aWzLG5wYzBd6L+Z5Lqb5piv6Lev6Zqc44CB5qW85qKv44CB5Lyg6YCB6Zeo44CCXCIsXHJcbiAgICAgICAgXCJcXHRb5bCR5aWzLG5wYzBd6KGA572R55qE5Lyk5a6z5pWw5YC844CB5Lit5q+S5ZCO5q+P5q2l5Lyk5a6z5pWw5YC844CB6KGw5byx5pe25pS76Ziy5LiL6ZmN55qE5pWw5YC877yM6YO95ZyoIGRhdGEuanMg5YaF5a6a5LmJ44CCXFxuXFxu6Lev6Zqc5ZCM5qC35Lya5bC96YeP6KKr6Ieq5Yqo5a+76Lev57uV6L+H44CCXCIsXHJcbiAgICAgICAgXCJcXHRb5bCR5aWzLG5wYzBd5qW85qKv5ZKM5Lyg6YCB6Zeo6ZyA6KaB5ZyoY2hhbmdlRmxvb3LkuK3lrprkuYnnm67moIfmpbzlsYLlkozkvY3nva7vvIzlj6/lj4Lop4HmoLfmnb/ph4zlt7LmnInnmoTnmoTlhpnms5XjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjIsOFwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXei/meS6m+mDveaYr+WQhOenjeWQhOagt+eahOaAqueJqe+8jOaJgOacieaAqueJqeeahOaVsOaNrumDveWcqGVuZW15cy5qc+S4reiuvue9ruOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3ov5nmibnmgKrnianliIbliKvkuLrvvJrmma7pgJrjgIHlhYjmlLvjgIHprZTmlLvjgIHlnZrlm7rjgIEy6L+e5Ye744CBM+i/nuWHu+OAgTTov57lh7vjgIHnoLTnlLLjgIHlj43lh7vjgIHlh4DljJbjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d5omT6LSl5oCq54mp5ZCO5Y+v6Kem5Y+RIGFmdGVyQmF0dGxlIOS6i+S7tuOAglxcblxcbuacieWFs+S6i+S7tueahOWQhOenjeS/oeaBr+WcqOS4i+S4gOWxguS8muacieabtOS4uuivpue7hueahOivtOaYjuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMiw1XCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d5qih5Lu/44CB5ZC46KGA44CB5Lit5q+S44CB6KGw5byx44CB6K+F5ZKS44CCXFxuXFxu6K+35rOo5oSP5ZC46KGA5oCq6ZyA6KaB6K6+572udmFsdWXkuLrlkLjooYDmlbDlgLzvvIzlj6/lj4Lop4HmoLfmnb/kuK3pu5HmmpflpKfms5XluIjnmoTlhpnms5XjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjIsM1wiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXemihuWfn+OAgeWkueWHu+OAglxcbuivt+azqOaEj+mihuWfn+aAqumcgOimgeiuvue9rnZhbHVl5Li65Lyk5a6z5pWw5YC877yM5Y+v5Y+C6KeB5qC35p2/5Lit5Yid57qn5ber5biI55qE5YaZ5rOV44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXeWkueWHu+WSjOmihuWfn+WQjOaXtuWPkeeUn+aXtuWFiOiuoeeul+mihuWfn++8jOWGjeWkueWHu+OAglxcbuiHquWKqOWvu+i3r+WQjOagt+S8muWwvemHj+e7lei/h+S9oOiuvue9rueahOi/meS6m+eCueOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTIsMTBcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3lj6rmnInmpbzkuIrlkK/nlKjkuovku7blkI7vvIzmiY3og73nnIvliLDmiJHlubblj6/ku6XlkozmiJHlr7nor53mnaXop6blj5Hkuovku7bjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59LFxyXG5cImNoYW5nZUZsb29yXCI6IHtcclxuICAgIFwiNiwwXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcImRvd25GbG9vclwiXHJcbiAgICB9LFxyXG4gICAgXCIwLDExXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxMlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjAsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXHJcbiAgICB9LFxyXG4gICAgXCIxLDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxMlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjIsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgIDEyXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiMywxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXHJcbiAgICB9LFxyXG4gICAgXCI0LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICA5XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcclxuICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgfSxcclxuICAgIFwiNSwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgMTBcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGltZVwiOiAwLFxyXG4gICAgICAgIFwicG9ydGFsV2l0aG91dFRyaWdnZXJcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBcIjYsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXHJcbiAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgIH1cclxufSxcclxuXCJhZnRlckJhdHRsZVwiOiB7XHJcbiAgICBcIjIsNlwiOiBbXHJcbiAgICAgICAgXCJcXHRbZ2hvc3RTa2VsZXRvbl3kuI3lj6/og73vvIzkvaDmgI7kuYjlj6/og73miZPotKXmiJHvvIFcXG7vvIjkuIDkuKrmiZPotKXmgKrnianop6blj5HnmoTkuovku7bvvIlcIlxyXG4gICAgXVxyXG59LFxyXG5cImFmdGVyR2V0SXRlbVwiOiB7XHJcbiAgICBcIjExLDhcIjogW1xyXG4gICAgICAgIFwi55Sx5LqO54q25oCB5qCP5pS+5LiN5LiL77yM57u/6ZKl5YyZ5ZKM6ZOB6Zeo6ZKl5YyZ5Z2H6KeG5Li6dG9vbHPvvIzmlL7lhaXlt6XlhbfmoI/kuK3jgIJcXG7norDliLDnu7/pl6jlkozpk4Hpl6jku43nhLbkvJroh6rliqjkvb/nlKjlvIDpl6jjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiOCw2XCI6IFtcclxuICAgICAgICBcIueUseS6juWQuOihgOWSjOWkueWHu+etieeahOWtmOWcqO+8jOihgOeTtum7mOiupOiHquWKqOiiq+e7lei3r+OAglxcbuS9oOWPr+S7peS/ruaUuWRhdGEuanPkuK3nmoTns7vnu59GbGFn5p2l6K6+572u6L+Z5LiA6aG544CCXCJcclxuICAgIF0sXHJcbiAgICBcIjgsN1wiOiBbXHJcbiAgICAgICAgXCLlpoLpnIDkv67mlLnmtojogJflk4HnmoTmlYjmnpzvvIzor7fliY3lvoAgZGF0YS5qcyDvvIzmib7liLDlubbkv67mlLl2YWx1ZXPlhoXlr7nlupTnmoTlhbfkvZPmlbDlgLzljbPlj6/jgIJcXG7lpoLmnpzmnInmm7Tpq5jnuqfnmoTpnIDmsYLvvIjlpoLmr4/kuKrljLrln5/lrp3nn7PmlbDlgLzlj5jljJbvvInvvIzor6bop4Fkb2PmlofmoaPlhoXnmoTlgZrms5Xor7TmmI7jgIJcIlxyXG4gICAgXSxcclxuICAgIFwiOSw1XCI6IFtcclxuICAgICAgICBcIuavj+WxgualvOeahCBjYW5GbHlUbyDlhrPlrprkuobor6XmpbzlsYLog73lkKbooqvpo57liLDjgIJcXG5cXG7kuI3og73ooqvpo57liLDnmoTmpbzlsYLkuZ/ml6Dms5Xkvb/nlKjmpbzlsYLkvKDpgIHlmajjgIJcIixcclxuICAgICAgICBcIumjnuihjOeahOalvOWxgumhuuW6j+eUsSBtYWluLmpzIOS4rSBmbG9vcklkcyDliqDovb3pobrluo/miYDlhrPlrprjgIJcXG5cXG7mmK/lkKblv4XpobvlnKjmpbzmoq/ovrnkvb/nlKjmpbzkvKDlmajnlLEgZGF0YS5qcyDkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEwLDVcIjogW1xyXG4gICAgICAgIFwi56C05aKZ6ZWQ5piv56C06Z2i5YmN55qE5aKZ5aOB6L+Y5piv5Zub5Liq5pa55ZCR55qE5aKZ5aOB77yM55SxZGF0YS5qc+S4reeahOezu+e7n0ZsYWfmiYDlhrPlrprjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiOCw0XCI6IFtcclxuICAgICAgICBcIueCuOW8ueaYr+WPquiDveeCuOmdouWJjeeahOaAqueJqei/mOaYr+Wbm+S4quaWueWQkeeahOaAqueJqe+8jOeUsWRhdGEuanPkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXFxu5aaC5Y+q6IO954K45YmN5pa55oCq54mp5YiZ5ZKM5LiK6Z2i55qE5Zyj6ZSk562J5Lu344CCXFxu5LiN6IO96KKr54K455qE5oCq54mp5ZyoZW5lbXlz5Lit5Y+v5Lul5a6a5LmJ77yM5Y+v5Y+C6KeB5qC35p2/6YeM6buR6KGj6a2U546L5ZKM6buR5pqX5aSn5rOV5biI55qE5YaZ5rOV44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEwLDRcIjogW1xyXG4gICAgICAgIFwi4oCc5LiK5qW84oCd5ZKM4oCc5LiL5qW84oCd55qE55uu5qCH5bGC55SxIG1haW4uanMg55qEIGZsb29ySWRz6aG65bqP5omA5Yaz5a6a44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjksMlwiOiBbXHJcbiAgICAgICAgXCLor6XpgZPlhbfpu5jorqTmmK/lpKfpu4Tpl6jpkqXljJnvvIzlpoLpnIDmlLnkuLrpkqXljJnnm5Lnm7TmjqXkv67mlLkgZGF0YS5qcyDkuK3nmoTns7vnu59GbGFn5Y2z5Y+v44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEwLDJcIjogW1xyXG4gICAgICAgIFwi5bGg6b6Z5YyV6aaW55uu5YmN5pyq6KKr5a6a5LmJ77yM5Y+v6IO96ZyA6KaB6Ieq6KGM5a6e546w5Yqf6IO944CCXFxu5pyJ5YWz5aaC5L2V5a6e546w5LiA5Liq6YGT5YW35Yqf6IO95Y+C6KeBZG9j5paH5qGj44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEyLDdcIjogW1xyXG4gICAgICAgIFwi5ZyoIGRhdGEuanMg55qE57O757ufRmxhZ+S4reiuvue9ruaYr+WQpuWQr+eUqOijheWkh+agj+OAglxcbuWmguaenOS4jeWQr+eUqOWImeijheWkh+S8muebtOaOpeWinuWKoOWxnuaAp+OAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMiw2XCI6IFtcclxuICAgICAgICBcIuWcqCBkYXRhLmpzIOeahOezu+e7n0ZsYWfkuK3orr7nva7mmK/lkKblkK/nlKjoo4XlpIfmoI/mjInpkq7jgIJcXG7lpoLmnpzlkK/nlKjliJnoo4XlpIfmoI/mjInpkq7kvJrmm7/ku6PmpbzkvKDmjInpkq7jgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTIsNVwiOiBbXHJcbiAgICAgICAgXCLoo4XlpIfnmoTnp43nsbvnlLHlhajloZTlsZ7mgKfkuK3nmoRlcXVpcE5hbWXlhrPlrposdHlwZeeahOWAvOWwseaYr+ivpeexu+Wei+WcqGVxdWlwTmFtZeS4reeahOS9jeasoe+8jOS+i+Wmgum7mOiupOaDheWGteS4i2VxdWlwdHlwZeS4ujDku6PooajmrablmajvvIzlkIzml7blj6rmnIl0eXBl5Li6MOeahOijheWkh+eahGFuaW1hdGXlsZ7mgKfnlJ/mlYhcIlxyXG4gICAgXVxyXG59LFxyXG5cImFmdGVyT3BlbkRvb3JcIjoge1xyXG4gICAgXCIxMSwxMlwiOiBbXHJcbiAgICAgICAgXCLkvaDlvIDkuobkuIDkuKrnu7/pl6jvvIzop6blj5HkuobkuIDkuKphZnRlck9wZW5Eb29y5LqL5Lu2XCJcclxuICAgIF1cclxufSxcclxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxyXG5cImJnbWFwXCI6IFtcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsMTAzLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCA0MiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWzEwMywgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbIDM3LCAgMCwgNTUsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsIDM4LCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXHJcbl0sXHJcblwiZmdtYXBcIjogW1xyXG5cclxuXSxcclxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTE9XHJcbntcclxuXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxyXG5cInRpdGxlXCI6IFwi5qC35p2/IDEg5bGCXCIsXHJcblwibmFtZVwiOiBcIjFcIixcclxuXCJjYW5GbHlUb1wiOiB0cnVlLFxyXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxyXG5cImRlZmF1bHRHcm91bmRcIjogXCJncmFzc1wiLFxyXG5cImltYWdlc1wiOiBbXHJcbiAgICBbXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIFwiYmcuanBnXCIsXHJcbiAgICAgICAgMFxyXG4gICAgXVxyXG5dLFxyXG5cIndlYXRoZXJcIjogW1xyXG4gICAgXCJzbm93XCIsXHJcbiAgICA2XHJcbl0sXHJcblwiaXRlbV9yYXRpb1wiOiAxLFxyXG5cIm1hcFwiOiBbXHJcbiAgICBbICA3LDEzMSwgIDgsMTUyLCAgOSwxMzAsIDEwLDE1MiwxNjYsMTY1LDEzMiwxNjUsMTY2XSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMTUyLDE2NSwxNjQsICAwLDE2MiwxNjVdLFxyXG4gICAgWzE1MiwxNTIsMTUyLDE1MiwxMjEsMTUyLDE1MiwxNTIsICAwLCAgMCwyMjksICAwLCAgMF0sXHJcbiAgICBbIDQzLCAzMywgNDQsMTUxLCAgMCwgIDAsICAwLDE1MiwxNjUsMTYxLCAgMCwxNjMsMTY1XSxcclxuICAgIFsgMjEsIDIyLCAyMSwxNTEsICAwLCAgMCwgIDAsMTUyLDE2NiwxNjUsICAwLDE2NSwxNjZdLFxyXG4gICAgWzE1MSwyNDUsMTUxLDE1MSwgIDAsIDg3LCAgMCwxNTIsMTUyLDE1MiwgODUsMTUzLDE1M10sXHJcbiAgICBbICAwLDI0NiwgIDAsMTUxLCAgMCwgIDAsICAwLDE1MiwxNTIsMjIxLCAgMCwyMjEsMTUzXSxcclxuICAgIFsyNDYsICAwLDI0NiwxNTEsICAwLCAgMCwgIDAsMTIxLCA4NSwgIDAsICAwLCAgMCwxNTNdLFxyXG4gICAgWzE1MSwyNDYsMTUxLDE1MSwgIDAsMTUzLDE1MywxNTMsMTUzLDE1MywxNTMsMTUzLDE1M10sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE2NCwgIDAsICAwLDE2MywgIDAsICAwXSxcclxuICAgIFsgIDEsICAxLCAgMSwgIDEsICAwLCAyMCwgIDAsICAwLCAgMCwxNjIsICAwLDE2MSwgIDBdLFxyXG4gICAgWyAgMSwgIDAsMTIzLCAgMSwgIDAsIDIwLDEyNCwgIDAsMTIxLCAgMCwxMjIsICAwLDEyNl0sXHJcbiAgICBbICAxLCAgMCwgIDAsICAxLCA4OCwgMjAsIDg2LCAgMCwgIDAsICAwLCAgMCwgIDAsMTIyXVxyXG5dLFxyXG5cImZpcnN0QXJyaXZlXCI6IFtdLFxyXG5cImV2ZW50c1wiOiB7XHJcbiAgICBcIjQsMTBcIjogW1xyXG4gICAgICAgIFwiXFx0W+agt+adv+aPkOekul3mnKzlsYLmpbzlsIbkvJrlr7nlkITnsbvkuovku7bov5vooYzku4vnu43jgIJcIixcclxuICAgICAgICBcIuW3pui+ueaYr+S4gOS4quS7vzUw5bGC55qE6Zm36Zix5YGa5rOV77yM5LiK5pa55piv5ZWG5bqX44CB5b+r5o235ZWG5bqX55qE5L2/55So5pa55rOV77yM5Y+z5LiK5piv5LiA5Liq5YW45Z6L55qE5p2A5oCq5byA6Zeo55qE5L6L5a2Q77yM5Y+z5LiL5piv5ZCE57G75Y+v6IO955qETlBD5LqL5Lu244CCXCIsXHJcbiAgICAgICAgXCLmnKzmoLfmnb/nm67liY3mlK/mjIHnmoTkuovku7bliJfooajlpKfoh7TmnInvvJpcXG50ZXh0OiDmmL7npLrkuIDmrrXmloflrZfvvIjmr5TlpoLkvaDnjrDlnKjmraPlnKjnnIvliLDnmoTvvIlcXG50aXA6IOW3puS4iuinkuaYvuekuuaPkOekulxcbnNob3c6IOS9v+S4gOS4quS6i+S7tuacieaViO+8iOWPr+ingeOAgeWPr+iiq+S6pOS6ku+8iVxcbmhpZGU6IOS9v+S4gOS4quS6i+S7tuWkseaViO+8iOS4jeWPr+ingeOAgeS4jeWPr+iiq+S6pOS6ku+8iVxcbnRyaWdnZXI6IOinpuWPkeWPpuS4gOS4quWcsOeCueeahOS6i+S7tlxcbmFuaW1hdGU6IOaYvuekuuWKqOeUu1xcbmJhdHRsZTog5by65Yi25ZKM5p+Q5oCq54mp5oiY5paXXFxub3BlbkRvb3I6IOaXoOmcgOmSpeWMmeW8gOmXqO+8iOS+i+WmguacuuWFs+mXqOOAgeaal+Wime+8iVwiLFxyXG4gICAgICAgIFwib3BlblNob3A6IOaJk+W8gOS4gOS4quWFqOWxgOWVhuW6l1xcbmRpc2FibGVTaG9wOiDnpoHnlKjkuIDkuKrlhajlsYDllYblupdcXG5jaGFuZ2VGbG9vcjog5Lyg6YCB5YuH5aOr5Yiw5p+Q5bGC5p+Q5L2N572uXFxuY2hhbmdlUG9zOiDkvKDpgIHli4flo6vliLDlvZPlsYLmn5DkvY3nva7vvJvovazlkJFcXG5zaG93SW1hZ2U6IOaYvuekuuWbvueJh1xcbnNldEZnOiDmm7TmlLnnlLvpnaLoibLosINcXG5zZXRXZWF0aGVyOiDmm7TmlLnlpKnmsJRcXG5tb3ZlOiDnp7vliqjkuovku7bmlYjmnpxcXG5tb3ZlSGVybzog56e75Yqo5YuH5aOr5pWI5p6cXFxucGxheUJnbTog5pKt5pS+5p+Q5Liq6IOM5pmv6Z+z5LmQXFxucGF1c2VCZ206IOaaguWBnOiDjOaZr+mfs+S5kFxcbnJlc3VtZUJnbTog5oGi5aSN6IOM5pmv6Z+z5LmQ55qE5pKt5pS+XFxucGxheVNvdW5kOiDmkq3mlL7mn5DkuKrpn7PpopFcIixcclxuICAgICAgICBcImlmOiDmnaHku7bliKTmlq1cXG5jaG9pY2VzOiDmj5DkvpvpgInpoblcXG5zZXRWYWx1ZTog6K6+572u5YuH5aOr5bGe5oCn6YGT5YW377yM5oiW5p+Q5Liq5Y+Y6YePL2ZsYWdcXG51cGRhdGU6IOabtOaWsOeKtuaAgeagj+WSjOWcsOWbvuaYvuS8pFxcbndpbjog6I635b6X6IOc5Yip77yI5ri45oiP6YCa5YWz77yJXFxubG9zZTog5ri45oiP5aSx6LSlXFxuc2xlZXA6IOetieW+heWkmuWwkeavq+enklxcbmV4aXQ6IOeri+WIu+e7k+adn+W9k+WJjeS6i+S7tlxcbnJldmlzaXQ6IOeri+WIu+e7k+adn+S6i+S7tuW5tumHjeaWsOinpuWPkVxcbmZ1bmN0aW9uOiDoh6rlrprkuYlKU+iEmuacrFxcblxcbuabtOWkmuaUr+aMgeeahOS6i+S7tui/mOWcqOe8luWGmeS4re+8jOasoui/juaCqOWunei0teeahOaEj+ingeOAglwiLFxyXG4gICAgICAgIFwi5pyJ5YWz5ZCE5LqL5Lu255qE5qC35L6L77yM5Y+v5Y+C6KeB5pys5bGC5LiA5LqbTlBD55qE5YaZ5rOV44CCXFxu5omA5pyJ5LqL5Lu25qC35L6L5pys5bGC6YO95pyJ5LuL57uN44CCXFxuXFxu5LiA5Liq6Ieq5a6a5LmJ5LqL5Lu25aSE55CG5a6M5ZCO77yM6ZyA6KaB6LCD55Soe1xcXCJ0eXBlXFxcIjogXFxcImhpZGVcXFwifeivpeS6i+S7tuaJjeS4jeS8muWGjeasoeWHuueOsOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMSw1XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjEsNlwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCIwLDdcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiMiw3XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjEsOFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCIxLDdcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtyZWRLaW5nXeasoui/juadpeWIsOmtlOWhlO+8jOS9oOaYr+esrOS4gOeZvuS9jeaMkeaImOiAheOAglxcbuiLpeS9oOiDveaJk+i0peaIkeaJgOacieeahOaJi+S4i++8jOaIkeWwseS4juS9oOS4gOWvueS4gOeahOWGs+aWl+OAglxcbueOsOWcqOS9oOW/hemhu+aOpeWPl+aIkeeahOWuieaOkuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDhcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5LuA5LmI77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsvMTBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6ZGVmLzEwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICA4XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRDdXJ0YWluXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogW1xyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxMjUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA3MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhbmdlRmxvb3JcIixcclxuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMiwxMVwiOiBbXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeWWgu+8gemGkumGku+8geW/q+mGkumGku+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0Q3VydGFpblwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13pop3vvIzmiJHov5nmmK/lnKjku4DkuYjlnLDmlrnvvJ9cIixcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd5L2g6KKr6a2U546L5oqT5LqG6LW35p2l5omU6L+b5LqG55uR54ux77yM5ZKM5oiR5YWz5Zyo5LqG5LiA6LW377yM5L2G5piv5bm46L+Q55qE5piv5oiR5Zyo5pio5aSp5Yia5Yia5oyW5aW95LiA5p2h6LaK54ux55qE5pqX6YGT77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMzAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd5oiR5YWI6LWw5LqG77yM56Wd5L2g5aW96L+Q77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA3NTAsXHJcbiAgICAgICAgICAgIFwic3RlcHNcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb3duXCJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCLkuIrpnaLmmK/kuKptb3Zl5LqL5Lu277yM5Y+v5Lul5a+5TlBD562J6L+b6KGM56e75Yqo44CCXFxu6K+m6KeB5qC35p2/5Lit5bCP5YG35LqL5Lu255qE5YaZ5rOV44CCXCIsXHJcbiAgICAgICAgXCJcXHRbaGVyb13mgI7kuYjot5HnmoTov5nkuYjlv6suLi5cIlxyXG4gICAgXSxcclxuICAgIFwiNCwyXCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeacrOWhlOeahOWVhuW6l+acieS4pOexu++8jOWFqOWxgOWVhuW6l+WSjOmdnuWFqOWxgOWVhuW6l+OAglxcblxcbuaJgOiwk+mdnuWFqOWxgOWVhuW6l++8jOWwseexu+S8vOS6juWPs+S4i+inkumCo+S4quWNlumSpeWMmeeahOiAgeS6uuS4gOagt++8jOS4gOWumuimgeeisOWIsOaJjeiDveinpuWPkeS6i+S7tuOAglxcblxcbuiAjOWFqOWxgOWVhuW6l++8jOWImeiDveWcqOW/q+aNt+WVhuW6l+S4reebtOaOpeS9v+eUqOOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d6KaB5rOo5YaM5LiA5Liq5YWo5bGA5ZWG5bqX77yM5L2g6ZyA6KaB5ZyoIGRhdGEuanMg5Lit77yM5om+5YiwIHNob3Bz77yM5bm25Zyo5YaF5re75Yqg5L2g55qE5ZWG5bqX5L+h5oGv44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3llYblupfkv6Hmga/mt7vliqDlkI7vvIzlj6/ku6XlnKjpnIDopoHnmoTkuovku7blpITosIPnlKh7XFxcInR5cGVcXFwiOiBcXFwib3BlblNob3BcXFwifeadpeaJk+W8gOS9oOa3u+WKoOeahOWFqOWxgOWVhuW6l+OAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5Zyo5LiK6Z2i55qE5L6L5a2Q6YeM77yM5bem6L655piv5LiA5Liq5Lu/NTDlsYLnmoTph5HluIHllYblupfvvIzlj7PovrnmmK/kuIDkuKrku78yNOWxgueahOe7j+mqjOWVhuW6l+OAglxcblxcbuWVhuW6l+iiq+iuv+mXruWQjuWNs+WPr+WcqOW/q+aNt+WVhuW6l+S4rei/m+ihjOS9v+eUqOOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5aaC5p6c5L2g6ZyA6KaB5Zyo5p+Q5bGC5pqC5pe256aB55So5b+r5o235ZWG5bqX77yM5Y+v5Lul5ZyoZGF0YS5qc+S4reiuvue9rmNhbm5vdFVzZVF1aWNrU2hvcOOAglxcbuWmguaenOmcgOimgeawuOS5heemgeeUqOWVhuW6l++8jOivt+S9v+eUqHtcXFwidHlwZVxcXCI6XFxcImRpc2FibGVTaG9wXFxcIn1cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEsMFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuU2hvcFwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwibW9uZXlTaG9wMVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNSwwXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5TaG9wXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJleHBTaG9wMVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNyw3XCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXei/meaYr+S4gOS4quWFuOWei+eahOadgOaAquW8gOmXqOOAgeW8uuWItuaImOaWl+S6i+S7tuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiOCw3XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjksN1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTAsNFwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tLaW5nXeS9oOe7iOS6jui/mOaYr+adpeS6huOAglwiLFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5pS+5byA5oiR5Lus55qE5YWs5Li777yBXCIsXHJcbiAgICAgICAgXCJcXHRbYmxhY2tLaW5nXeWmguaenOaIkeS4jeaEv+aEj+WRou+8n1wiLFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5peg6ZyA5aSa6K+077yM5ouU5YmR5ZCn77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJiYXR0bGVcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcImJsYWNrS2luZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tLaW5nXeayoeaDs+WIsOS9oOW3sue7j+WPmOW+l+i/meS5iOW8uuWkp+S6hi4uLiDnrpfkvaDljonlrrPjgIJcXG7lhazkuLvlsLHkuqTnu5nkvaDkuobvvIzor7flpb3lpb3lr7nlpbnjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEwLDBcIjogW1xyXG4gICAgICAgIFwiXFx0W2hlcm9d5YWs5Li777yM5oiR5p2l5pWR5L2g5LqGflwiLFxyXG4gICAgICAgIFwiXFx0W+WFrOS4uyxwcmluY2Vzc13lv6vmlZHmiJHlh7rljrvvvIHmiJHlj5flpJ/ov5nph4zkuobvvIFcIixcclxuICAgICAgICBcIlxcdFtoZXJvXeWFrOS4u+WIq+aAle+8jOaIkeS7rOi1sOWQp35cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIndpblwiLFxyXG4gICAgICAgICAgICBcInJlYXNvblwiOiBcIuaVkeWHuuWFrOS4u1wiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNiwxMlwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI2LDExXCI6IFtcclxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld6YCa6L+H6LCD55SoIHtcXFwidHlwZVxcXCI6IFxcXCJzaG93XFxcIn0g5Y+v5Lul5L2/6ZqQ6JeP55qE5LqL5Lu25pi+56S65Ye65p2l44CCXFxu5q+U5aaC5oiR5LiL6Z2i6L+Z5Liq5py65YWz6Zeo44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAxMlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld6YCa6L+H6LCD55SoIHtcXFwidHlwZVxcXCI6IFxcXCJvcGVuRG9vclxcXCJ9IOWPr+S7peaXoOmcgOmSpeWMmeaJk+W8gOS4gOaJh+mXqOaIluaal+WimeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDEyXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3lkIzml7bvvIzkuZ/lj6/ku6Xlr7nlhbblroPlsYLov5vooYzmk43kvZzvvIzmr5TlpoLmpbzkuIvnmoTmnLrlhbPpl6jvvIznjrDlnKjlt7Lnu4/kuLrkvaDmiZPlvIDkuobjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDExLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5aaC5p6cIHNob3cg5oiWIGhpZGUg5oyH5a6a5LqGIHRpbWUg5Y+C5pWw77yM5YiZ5Lul5Yqo55S75pWI5p6c5pi+56S677yM5oyH5a6a55qE5Y+C5pWw5L2c5Li65raI5aSx5pe26Ze077yI5q+r56eS77yJ5p2l6K6h566X44CCXCIsXHJcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeeOsOWcqOWIsOalvOS4i+adpeaJvuaIkeWQp35cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMTIsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiOCwxMVwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOm1hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzptYW5fdGltZXMrMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWcqOaWh+Wtl+S4reS9v+eUqCR7JyAkeyAnfeWSjCB9IOWPr+S7peiuoeeul+W5tuaYvuekuuS4gOS4quihqOi+vuW8j+eahOe7k+aenOOAglxcblwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5L6L5aaC77yaXFxu5L2g55qE5b2T5YmN5pS75Ye75Yqb5pivJHtzdGF0dXM6YXRrfe+8jOmYsuW+oeWKm+aYryR7c3RhdHVzOmRlZn3jgIJcXG7mlLvpmLLlkoznmoTljYHlgI3mmK8kezEwKihzdGF0dXM6YXRrK3N0YXR1czpkZWYpfe+8jOaUu+mYsuS5i+enr+aYryR7c3RhdHVzOmF0aypzdGF0dXM6ZGVmfeOAglxcbuS9oOaciSR7aXRlbTp5ZWxsb3dLZXl95oqK6buE6ZKl5YyZ77yMJHtpdGVtOmJsdWVLZXl95oqK6JOd6ZKl5YyZ77yMJHtpdGVtOnJlZEtleX3miornuqLpkqXljJnjgIJcXG7kvaDmnIkke2l0ZW06cGlja2F4ZX3kuKrnoLTvvIwke2l0ZW06Ym9tYn3kuKrngrjvvIwke2l0ZW06Y2VudGVyRmx5feS4qumjnuOAglxcbui/meaYr+S9oOesrCR7ZmxhZzptYW5fdGltZXN95qyh5ZKM5oiR5a+56K+d44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lkIzml7bvvIzkvaDkuZ/lj6/ku6XpgJrov4d7XFxcInR5cGVcXFwiOiBcXFwic2V0VmFsdWVcXFwifeadpeiuvue9ruS4gOS4quWLh+Wjq+eahOWxnuaAp+OAgemBk+WFt++8jOaIluafkOS4qkZsYWfjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS+i+Wmgu+8mlxcbueOsOWcqOaIkeWwhuiuqeS9oOeahOaUu+mYsuaPkOWNhzUwJe+8jOWGjeWwhuaUu+mYsuWSjOeahOWNgeWAjeWKoOWIsOeUn+WRveWAvOS4iuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmF0ayoxLjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6ZGVmKjEuNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpocFwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmhwKzEwKihzdGF0dXM6YXRrK3N0YXR1czpkZWYpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5YaN6YCB5L2gNTAw6YeR5biB77yMMTAwMOe7j+mqjO+8jDHnoLQy54K4M+mjnu+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXkrNTAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmV4cGVyaWVuY2VcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czpleHBlcmllbmNlKzEwMDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnBpY2theGVcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06cGlja2F4ZSsxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpib21iXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJvbWIrMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Y2VudGVyRmx5XCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmNlbnRlckZseSszXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5dc3RhdHVzOnh4eCDku6Pooajli4flo6vnmoTmn5DkuKrlsZ7mgKfjgIJcXG7lhbbkuK14eHjlj6/lj5ZocCwgYXRrLCBkZWYsIG1kZWYsIG1vbmV5LGV4cGVyaWVuY2Xov5nlh6DpobnjgIJcXG5cXG5pdGVtOnh4eCDku6Pooajli4flo6vnmoTmn5DkuKrpgZPlhbfnmoTkuKrmlbDjgIJcXG54eHjkuLrpgZPlhbdJRO+8jOWFt+S9k+WPr+WPguingWl0ZW1zLmpz5Lit55qE5a6a5LmJ44CCXFxuXFxuZmxhZzp4eHgg5Luj6KGo5p+Q5Liq6Ieq5a6a5LmJRmxhZ+aIluWPmOmHj+OAglxcbnh4eOS4ukZsYWcv5Y+Y6YeP5ZCN77yM5Y+v5Lul6Ieq6KGM5a6a5LmJ77yM55Sx5a2X5q+N44CB5pWw5a2X5ZKM5LiL5YiS57q/57uE5oiQ44CCXFxu5pyq5a6a5LmJ6L+H6ICM55u05o6l5Y+W55So55qERmxhZ+m7mOiupOWAvOS4umZhbHNl44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3kvaDnjrDlnKjlj6/ku6Xph43mlrDlkozmiJHov5vooYzlr7nor53vvIzov5vkuIDmraXnnIvliLDlsZ7mgKflgLznmoTmlLnlj5jjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTAsMTFcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzPT0wXCIsXHJcbiAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d6L+Z5piv5Liq5b6I5aSN5p2C55qE5L6L5a2Q77yM5a6D5bCG5pWZ5Lya5L2g5aaC5L2V5L2/55SoaWYg6K+t5Y+l6L+b6KGM5p2h5Lu25Yik5pat77yM5Lul5Y+KIGNob2ljZXMg5o+Q5L6b6YCJ6aG55p2l5L6b55So5oi36L+b6KGM6YCJ5oup44CCXCIsXHJcbiAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d56ys5LiA5qyh6K6/6Zeu5oiR5bCG5pi+56S66L+Z5q615paH5a2X77yb5LuO56ys5LqM5qyh5byA5aeL5bCG5Lya5ZCR5L2g5Ye65ZSu6ZKl5YyZ44CCXFxu6ZKl5YyZ5Lu35qC85bCG6ZqP552A6K6/6Zeu5qyh5pWw6YCS5aKe44CCXFxu5b2T5ZCI6K6h5Ye65ZSu5LqG5LiD5oqK6ZKl5YyZ5ZCO77yM5bCG6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ77yM5bm25raI5aSx5LiN5YaN5Ye6546w44CCXCIsXHJcbiAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d6L+Z6YOo5YiG55qE6YC76L6R5q+U6L6D6ZW/77yM6K+357uG5b+D55yL5qC35p2/55qE5YaZ5rOV77yM5piv5b6I5a655piT55yL5oeC5bm255CG6Kej55qE44CCXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6d29tYW5fdGltZXM9PThcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g6LSt5Lmw55qE6ZKl5YyZ5bey57uP5aSf5aSa5LqG77yM5YaN57un57ut5Y2W57uZ5L2g55qE6K+d5oiR5Lya5pyJ5Y2x6Zmp55qE44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3nnIvlnKjkvaDotKHnjK7nu5nmiJHov5nkuYjlpJrpkrHnmoTku73kuIrvvIzpgIHkvaDkuIDmiorlpKfpu4Tpl6jpkqXljJnlkKfvvIzluIzmnJvkvaDog73lpb3lpb3nlKjlroPjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06YmlnS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpiaWdLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3miJHlhYjotbDkuobvvIzmi5zmi5x+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaG9pY2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXHRb6ICB5Lq6LHdvbWFuXeWwkeW5tO+8jOS9oOmcgOimgemSpeWMmeWQl++8n1xcbuaIkei/memHjOacieWkp+aKiueahO+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaG9pY2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIum7hOmSpeWMme+8iCR7OStmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49OStmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oOStmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnllbGxvd0tleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06eWVsbG93S2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLok53pkqXljJnvvIgkezE4KzIqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTE4KzIqZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDE4KzIqZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpibHVlS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpibHVlS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnuqLpkqXljJnvvIgkezM2KzQqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTM2KzQqZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDM2KzQqZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpyZWRLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnJlZEtleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi56a75byAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOndvbWFuX3RpbWVzKzFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMiwxMVwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuTWFnaWNpYW5d5L2/55SoIHtcXFwidHlwZVxcXCI6XFxcImZ1bmN0aW9uXFxcIn0g5Y+v5Lul5YaZ6Ieq5a6a5LmJ55qESlPohJrmnKzjgIJcXG7mnKzloZTmlK/mjIHnmoTmiYDmnInkuLvopoFBUEnkvJrlnKhkb2PmlofmoaPlhoXnu5nlh7rjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3kvovlpoLov5nkuKrkvovlrZDvvJrljbPlsIblvLnlh7rkuIDkuKrovpPlhaXnqpflj6PvvIznhLblkI7kvJrlsIbkvaDnmoTovpPlhaXnu5Pmnpznm7TmjqXliqDliLDkvaDnmoTmlLvlh7vlipvkuIrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuivt+i+k+WFpeS9oOimgeWKoOaUu+WHu+WKm+eahOaVsOWAvO+8mlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzppbnB1dD4wXCIsXHJcbiAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsrZmxhZzppbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRpcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuaTjeS9nOaIkOWKn++8jOaUu+WHuyske2ZsYWc6aW5wdXR9XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIuaTjeS9nOaIkOWKn++8jOaUu+WHuyske2ZsYWc6aW5wdXR9XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmYWxzZVwiOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuTWFnaWNpYW5d5YW35L2T5Y+v5Y+C6KeB5qC35p2/5Lit5pys5LqL5Lu255qE5YaZ5rOV44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEwLDEyXCI6IG51bGwsXHJcbiAgICBcIjEyLDEyXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN3aXRjaFwiLFxyXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgXCJjYXNlTGlzdFwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYXNlXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeeOsOWcqOS9v+eUqHN3aXRjaOaUueWGmei/meS4quS+i+WtkFwiXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIjogXCI4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g6LSt5Lmw55qE6ZKl5YyZ5bey57uP5aSf5aSa5LqG77yM5YaN57un57ut5Y2W57uZ5L2g55qE6K+d5oiR5Lya5pyJ5Y2x6Zmp55qE44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3nnIvlnKjkvaDotKHnjK7nu5nmiJHov5nkuYjlpJrpkrHnmoTku73kuIrvvIzpgIHkvaDkuIDmiorlpKfpu4Tpl6jpkqXljJnlkKfvvIzluIzmnJvkvaDog73lpb3lpb3nlKjlroPjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06YmlnS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpiaWdLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3miJHlhYjotbDkuobvvIzmi5zmi5x+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuW9k+ayoeacieespuWQiOeahOWAvOeahOWcuuWQiOaJp+ihjOatpOS6i+S7tlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNob2ljZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcdFvogIHkurosd29tYW5d5bCR5bm077yM5L2g6ZyA6KaB6ZKl5YyZ5ZCX77yfXFxu5oiR6L+Z6YeM5pyJ5aSn5oqK55qE77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob2ljZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6buE6ZKl5YyZ77yIJHs5K2ZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj05K2ZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSg5K2ZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93S2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTp5ZWxsb3dLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuiTnemSpeWMme+8iCR7MTgrMipmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MTgrMipmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMTgrMipmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJsdWVLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJsdWVLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIue6oumSpeWMme+8iCR7MzYrNCpmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MzYrNCpmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMzYrNCpmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnJlZEtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06cmVkS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnprvlvIBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6d29tYW5fdGltZXMrMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSxcclxuXCJjaGFuZ2VGbG9vclwiOiB7XHJcbiAgICBcIjQsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCI1LDVcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTJcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCIsXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXHJcbiAgICB9LFxyXG4gICAgXCIxMCwxMlwiOiBudWxsXHJcbn0sXHJcblwiYWZ0ZXJCYXR0bGVcIjoge1xyXG4gICAgXCI5LDZcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzpkb29yXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOmRvb3IrMVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTEsNlwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOmRvb3JcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6ZG9vcisxXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0sXHJcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxyXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXHJcblwiY2Fubm90TW92ZVwiOiB7fSxcclxuXCJiZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImZnbWFwXCI6IFtcclxuXHJcbl0sXHJcblwiYXV0b0V2ZW50XCI6IHtcclxuICAgIFwiMTAsNVwiOiB7XHJcbiAgICAgICAgXCIwXCI6IHtcclxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOmRvb3I9PTJcIixcclxuICAgICAgICAgICAgXCJjdXJyZW50Rmxvb3JcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJwcmlvcml0eVwiOiAwLFxyXG4gICAgICAgICAgICBcImRlbGF5RXhlY3V0ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJtdWx0aUV4ZWN1dGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMj1cclxue1xyXG5cImZsb29ySWRcIjogXCJzYW1wbGUyXCIsXHJcblwidGl0bGVcIjogXCLmoLfmnb8gMiDlsYJcIixcclxuXCJuYW1lXCI6IFwiMlwiLFxyXG5cImNhbkZseVRvXCI6IHRydWUsXHJcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXHJcblwiY2Fubm90Vmlld01hcFwiOiBmYWxzZSxcclxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3JvdW5kXCIsXHJcblwiaW1hZ2VzXCI6IFtdLFxyXG5cIml0ZW1fcmF0aW9cIjogMSxcclxuXCJtYXBcIjogW1xyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLDEyMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCA0NSwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4OCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgODcsICAwLCAgMCwgIDAsICAwLDEyMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXHJcbl0sXHJcblwid2lkdGhcIjogMjYsXHJcblwiaGVpZ2h0XCI6IDI2LFxyXG5cImZpcnN0QXJyaXZlXCI6IFtdLFxyXG5cImV2ZW50c1wiOiB7XHJcbiAgICBcIjMsMlwiOiBbXHJcbiAgICAgICAgXCIxMjNcIlxyXG4gICAgXSxcclxuICAgIFwiMTIsMTJcIjogW1xyXG4gICAgICAgIFwiMjM0XCJcclxuICAgIF1cclxufSxcclxuXCJjaGFuZ2VGbG9vclwiOiB7XHJcbiAgICBcIjYsMTBcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTFcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXHJcbiAgICB9LFxyXG4gICAgXCI3LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcImRvd25GbG9vclwiXHJcbiAgICB9XHJcbn0sXHJcblwiYWZ0ZXJCYXR0bGVcIjoge30sXHJcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxyXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXHJcblwiY2Fubm90TW92ZVwiOiB7fSxcclxuXCJ1cEZsb29yXCI6IG51bGwsXHJcblwiYmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJmZ21hcFwiOiBbXHJcblxyXG5dLFxyXG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMz1cclxue1xyXG5cImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXHJcblwidGl0bGVcIjogXCLkuLvloZQgNDAg5bGCXCIsXHJcblwibmFtZVwiOiBcIjQwXCIsXHJcblwiY2FuRmx5VG9cIjogZmFsc2UsXHJcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXHJcblwiZGVmYXVsdEdyb3VuZFwiOiBcInNub3dHcm91bmRcIixcclxuXCJpbWFnZXNcIjogW10sXHJcblwiY29sb3JcIjogW1xyXG4gICAgMjU1LFxyXG4gICAgMCxcclxuICAgIDAsXHJcbiAgICAwLjNcclxuXSxcclxuXCJ3ZWF0aGVyXCI6IFtcclxuICAgIFwicmFpblwiLFxyXG4gICAgMTBcclxuXSxcclxuXCJiZ21cIjogXCJiZ20ubXAzXCIsXHJcblwiaXRlbV9yYXRpb1wiOiAxLFxyXG5cIm1hcFwiOiBbXHJcbiAgICBbICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsIDg3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCA4NSwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LDI0NywgIDEsMjQ3LCAgMSwyNDcsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICAxLDI0NywyNDcsMjQ3LCAgMSwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDEsMjQ3LCAzMCwyNDcsICAxLCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LDI0NywgIDEsMTI0LCAgMSwyNDcsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwxMjMsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDEsICAwLCAgMSwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgNCwgIDAsICA0LCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICA0LCA4NSwgIDQsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsIDg4LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1XVxyXG5dLFxyXG5cImZpcnN0QXJyaXZlXCI6IFtcclxuICAgIFwiXFx0W+WunuaImO+8gV3mnKzmpbzlsIblsJ3or5XlpI3liLvjgIrlrr/lkb3nmoTml4vlvovjgIs0MEbliafmg4XjgIJcIlxyXG5dLFxyXG5cImV2ZW50c1wiOiB7XHJcbiAgICBcIjYsMTFcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNiwxMFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZG9vci5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI2LDdcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5p2w5YWL77yM5L2g56m256uf5piv5LuA5LmI5Lq677yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeKApuKAplwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5oiR5Lus4oCm4oCm5piv5pyL5Y+L5a+55ZCn77yfXFxu5piv5pyL5Y+L5bCx5bqU6K+l55u45LqS5L+h5Lu75a+55ZCn77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeKApuKApuS6i+WIsOWmguS7iuS5n+ayoeacieS7gOS5iOWlvemakOeekueahOS6huOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3msqHplJnvvIzmiJHlsLHmmK/ov5nkuIDliIfnmoTog4zlkI7kuLvosIvjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm1vdmVcIixcclxuICAgICAgICAgICAgXCJzdGVwc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR55qE55yf5ZCN5Li64oCU4oCU6buR5pqX5aSn5rOV5biI77yM56ys5Zub5Yy65Z+f55qE5aS055uu44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13lkbXlkbXvvIzkuI3nn6XpgZPkuLrku4DkuYjvvIzmiJHnq5/nhLblr7nkuovmg4XotbDliLDnjrDlnKjov5nkuIDmraXmr6vkuI3mhJ/op4nmhI/lpJbjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS7peadsOWFi+eahOWQjeS5ieWIqeeUqOS6huS9oOi/meS5iOS5he+8jOecn+aYr+aKseatieWViuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d55yf5q2j55qE5p2w5YWL546w5Zyo5Zyo5ZOq6YeM77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3nm5fotLzmnbDlhYvov5nkuKrkurrnsbvku47mnKrlrZjlnKjov4fvvIzku5blj6rmmK/miJHnlKjmnaXmjqXov5HkvaDnmoTkuIDlia/nmq7lm4rogIzlt7LjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApui/meagt+WViu+8jOWRteWRteOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Li65LuA5LmI5L2g55yL5LiK5Y675Lid5q+r5LiN55Sf5rCU77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13lpJrkuo/kuobprLzluJ3vvIzmiJHnjrDlnKjnmoTohL7msJTlpb3lvpfov57miJHoh6rlt7Hpg73lrrPmgJXjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeivtOi1t+adpeaIkei/mOW+l+WlveWlveaEn+iwouS9oOWRou+8jOWmguaenOayoeacieadsOWFi+KApuKApuS9oOeahOW4ruWKqe+8jOaIkeaXqeWwseatu+WcqOesrOS4gOWMuuWfn+S6huOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5LiN6K665L2g55qE55uu55qE5aaC5L2V77yM5L2g55qE5omA5L2c5omA5Li66YO95piv5a+55oiR5pyJ5Yip55qE44CC5LiN5piv5ZCX77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3og73lpJ/lpoLmraTmt6HlrprnmoTpnaLlr7nog4zlj5vvvIznnIvmnaXot5/kupTlubTliY3nm7jmr5TvvIzkvaDnoa7lrp7miJDplb/kuoblvojlpJrllYrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS6lOW5tOWJje+8n+KApuKApum7keaal+Wkp+azleW4iO+8jOWcqOi/meS5i+WJje+8jOaIkeS7rOWlveWDj+e0oOacquiwi+mdouWQp++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LqU5bm05YmN6YKj5Zy65bGg5Z+O5L2g5bqU6K+l6L+Z5LiA55Sf6YO95LiN5Lya5b+Y6K6w5ZCn44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lvojkuI3lt6fvvIzpgqPlnLrlsaDln47nmoTkuLvosIvvvIzkuZ/mmK/miJHjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKAplwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6L+Z5LmI6K+077yM5Ye75Lit5oiR5Y+M5Lqy55qE6YKj6YGT57Sr6Imy6Zeq55S177yM5Lmf5bCx5piv5L2g6YeK5pS+55qE5ZCn4oCm4oCmXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDnmoTlj4zkurLvvJ/ov5nnp43kuovmg4XmiJHmgI7kuYjlj6/og73kvJrorrDlvpfvvJ9cXG7kvaDpmr7pgZPlnKjouKnmrbvomoLomoHnmoTml7blgJnov5jkvJrkuIDlj6rlj6rorrDkuIvku5bku6znmoTmoLflrZDlkJfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeiAgSDlrZAg6KaBIOS9oCDnmoQg5ZG9XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDlupTor6Xlr7nmiJHlv4PmgIDmhJ/mv4DmiY3lr7nvvIzlpoLmnpzkuI3mmK/pgqPml7bnmoTmiJHnnIvlh7rkuobkvaDpmpDol4/nmoTnqIDmnInli4fogIXkvZPotKjvvIzkvaDnu53lr7nkuI3lj6/og73mtLvliLDku4rlpKnjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWcqOaal+S4reWKqOaJi+iEmuiuqeS9oOmAmui/h+WLh+iAhemAieaLlOeahOS6uuS5n+aYr+aIke+8jOaIkeS4gOebtOS4gOebtOWcqOaal+S4reW8leWvvOS9oOi1sOWIsOS7iuWkqei/meS4gOatpeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5piv5oiR5pWR6LWO5LqG5LiA5peg5piv5aSE55qE5L2g44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13kuLrku4DkuYjlj6rmnInmiJHkuIDkuKrkurrmtLvkuobkuIvmnaXvvIHvvIHvvIHvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS4uuS7gOS5iOWBj+WBj+aYr+aIke+8ge+8ge+8ge+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5Yia5omN5LiN5piv6K+06L+H5LqG5ZCX77yf5Zug5Li65oiR55yL5Ye65LqG5L2g5pyJ56iA5pyJ5YuH6ICF5L2T6LSo5ZWK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDliJrliJrot5/prLzluJ3kuqTov4fmiYvvvIzlupTor6Xlt7Lnu4/lvojmuIXmpZrov5nnqIDmnInli4fogIXkvZPotKjmhI/lkbPnnYDku4DkuYjkuoblkKfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuWwseWboOS4uuaIkeaciei/meenjeS9k+i0qO+8jOWwseS4jeW+l+S4jeiDjOi0n+WmguatpOaui+mFt+eahOWuv+WRveWQl++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oSa6KCi77yB6L+Z5oSP5ZGz552A5Y+q6KaB5oiR5a+55L2g5Yqg5Lul5byV5a+86Lef5Z+55YW777yM5L2g5bCx6IO95oiQ5Li66L+Z5LiW6Ze05a6e5Yqb5pyA5by655qE5a2Y5Zyo77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbmiYDku6XvvIzkvaDnqbbnq5/mg7PliKnnlKjmiJHlubLku4DkuYjvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWIqeeUqOS9oOW5sueahOS6i+aDhe+8jOS9oOS4jeaYr+W3sue7j+WujOaIkOS6huWQl++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6K+05LuA5LmI77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3nn6XkuI3op4npl7TvvIzkvaDlt7Lnu4/lnKjmiJHnmoTmjIflvJXkuIvot5/prLzluJ3mraPpnaLkuqTmiYvlubbkuJTmnYDmjonkuobku5bllYrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeWwsei/nuaIkei3n+msvOW4neeahOWvueWGs+KApuKApuS5n+aYr+iiq+S9oOWuieaOkuWlveS6hueahO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5Lus5Lik5Liq5LiA5Liq5piv5Lq657G75YuH6ICF77yM5LiA5Liq5piv6a2U54mp5YuH6ICF77yM6L+f5pep5Lya5pyJ5Lqk5omL55qE5LiA5aSp44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHlj6rkuI3ov4fmmK/mk43nurXkuobkuIDns7vliJfnmoTov57plIHkuovku7borqnov5nkuIDlpKnmj5Dml6nkuobmlbDljYHlubTliLDmnaXogIzlt7LjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuS9oOi/meagt+WBmuWvueiwgeacieWlveWkhO+8n+S7luWPr+aYr+S9oOS7rOmtlOeJqeS4lueVjOeahOaVkeS4luS4u+WViuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiA5Liq5oOn5oCV5b6B5oiY77yM54ix5aW95ZKM5bmz55qE5oem5aSr77yM5Lmf6YWN5Y+r5pWR5LiW5Li777yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ojrflvpfkuoblipvph4/vvIzljbTlj6rkvJrooqvliqjmjKjmiZPogIzkuI3kuLvliqjlkJHkurrnsbvkuJbnlYzlh7rlh7vvvIzpvp/nvKnlnKjnrKzkuozljLrln5/mg7bmg7bluqbml6XvvIzku5bmoLnmnKzlsLHkuI3phY3mi6XmnInnqIDmnInli4fogIXkvZPotKjjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4uuS6huS4jeiuqei/meenjeS6uumcuOWNoOedgOenr+e0r+WkmuW5tOeahOW6nuWkp+eBtemtguiDvemHj+aXoOS9nOS4uu+8jOaIkeiuvuiuoeiuqeS9oOadgOaOieS6huS7luOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5rKh5pyJ6L6c6LSf5oiR55qE5pyf5b6F77yM5oiQ5Yqf5oiY6IOc5LqG6YKj5Liq5bqf54mp77yM546w5Zyo5L2g5L2T5YaF57Sv56ev55qE54G16a2C6IO96YeP4oCm4oCm5Lmf5bCx5piv6a2U5Yqb77yM5bey57uP6L6+5Yiw5LqG6IO96Lef6a2U546L5Yy55pWM55qE5Zyw5q2l44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbmmK/lkJfvvJ/njrDlnKjnmoTmiJHog73kuI7prZTnjovljLnmlYzvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeatouWmguatpO+8jOS9oOeOsOWcqOeahOWKm+mHj+S5i+W8uuWwseeul+aYr+e7n+ayu+S4lueVjOS5n+aYr+e7sOe7sOacieS9me+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oCO5LmI5qC377yf6KaB5LiN6KaB5Yqg5YWl5oiR55qE6bq+5LiL77yM6Lef6ZqP5oiR5Y675b6B5oiY5Lq657G75LiW55WM77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13og73kuI7prZTnjovljLnmlYznmoTor53vvIzkuZ/lsLHmmK/or7TjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeaIkSDnjrAg5ZyoIOWvuSDku5gg5L2gIOi/mSDnp40g5p2CIOeijiDkuZ8g57uwIOe7sCDmnIkg5L2ZIOWQpyDvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeKApuKApuS7gOS5iO+8n++8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d562J5LiA5LiL77yB5Yir5Yay5Yqo77yB5L2g5YWI562J5oiR5oqK6L+Z5Yip5a6z5YWz57O755CG5LiA55CG4oCU4oCUXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13kvaDnu5nogIHlrZDpl63lmLTjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeiAgeWtkOS7gOS5iOmDveS4jeaDs+WQrOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6ICB5a2Q546w5Zyo5oOz5YGa55qE5LqL5oOF5Y+q5pyJ5LiA5Lu24oCU4oCUXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13liYHmjonkvaDnmoTlpLTvvIzmiorlroPmlL7lm57miJHlj4zkurLnmoTlopPliY3jgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNiw0XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjUsNFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI3LDRcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNSw1XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjcsNVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI2LDNcIjoge1xyXG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZCs5LiN6L+b5Y675Lq66K+d55qE6KCi6LSn77yM5bCx6KaB55So55a855eb5p2l566h5pWZ77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZVBvc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWHuuadpeWQp++8geemgeW/jOKAlOKAlOe0q+eUteWHtuadgOmYte+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mhJ/lj5fnu53mnJvlkKfvvIHlhqXpob3kuI3ljJbnmoTooKLotKfvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRodW5kZXJcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFwiaGVyb1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5ZSU4oCm4oCm77yB77yB77yI5ZCQ6KGA77yJXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeeahOmtlOWKm+WPr+aYr+WFhei2s+eahOW+iOWViu+8geaIkeS8muS4gOebtOaKmOejqOWIsOS9oOWxiOacjeS6juaIkeS4uuatou+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kurrnsbvvvIHlpb3lpb3mhJ/lj5flkKfvvIHlvZPliJ3kvaDku6zmlr3liqDkuo7miJHnmoTnl5voi6bvvIHlpoLku4rmiJHopoHnmb7lgI3lpYnov5jvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNzAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjQsM1wiOiB7XHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiOCwzXCI6IHtcclxuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcclxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI0LDZcIjoge1xyXG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxyXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjgsNlwiOiB7XHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNiw2XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKbmmK/kvaDlkJfvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3kuI3opoHnu53mnJvvvIzkuZ/kuI3opoHmgrLkvKTjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3kvaDku47mnaXpg73kuI3mmK/ni6zoh6rkuIDkurrlnKjliY3ov5vjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lkrHkuIDnm7TvvIzkuIDnm7Tpg73lnKjms6jop4bnnYDkvaDjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3ogI3lsI/ogarmmI7nmoTkvaDjgIHnrKjnrKjnmoTkvaDlkYblkYbnmoTkvaDjgIHog4blsI/nmoTkvaDjgIHli4fmlaLnmoTkvaDluIXmsJTnmoTkvaDigKbigKblhajpg6jlhajpg6jpg73mmK/kvaDjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3miYDku6XmlL7lv4PlkKfvvIzml6Dorrrlj5HnlJ/ku4DkuYjvvIzlkrHpg73kvJrpmarkvLTlnKjkvaDouqvovrnnmoTjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lm6DkuLrkvaDopoHmmK/nprvlvIDmiJHnmoTor53vvIznq4vliLvlsLHkvJrmrbvmjonlkKfvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm5aaW57K+4oCm5bCP5aeQ4oCm4oCm5YW25a6e5LiA55u05Lul5p2l77yM5oiR6YO96Z2e5bi45oSf5r+A5L2g4oCm4oCmXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld56yo6JuL77yB6YO96L+Z56eN5pe25YCZ5LqG5bCx5LiN6KaB5L2c5Ye65YOP5piv5Li057uI6YGX6KiA55qE5Y+R6KiA5LqG5ZWK77yB77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZaC77yB6YKj6L6556m/6KGj5ZOB5ZGz5beu5Yiw5p6B54K555qE6buR5pqX5aSn5rOV5biI77yM5Yir5bem6aG+5Y+z55u86K+055qE5bCx5piv5L2g77yB5L2g5bqU6K+l55+l6YGT5ZKx55qE6Lqr5Lu95ZCn77yfXFxu6L+Y5LiN6YCf6YCf6YCA5LiL77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWPr+aBtuKApuWkmueuoemXsuS6i+eahOWmlueyvuaXj+KApuaYjuaYjuWPquimgeWGjeiuqeS7luaJv+WPl+S4gOeCueeWvOeXm+adpeeTpuino+S7lueahOaEj+W/l+WKm++8jOaIkeeahOiuoeWIkuWwseaIkOWKn+S6hu+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWTvOWTvOWTvH7mirHmrYnlk6bvvIzov5nkuKrnrKjom4vnmoTmhI/lv5flipvlj6/kuI3lg4/kvaDmg7PosaHnmoTpgqPkuYjoloTlvLHlk6bvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN55SY5b+D77yB5oiR5LiN55SY5b+D77yB5aaW57K+5YWs5Li75Y+I5aaC5L2V77yBXFxu5Y+q6KaB5piv6Zi75oyh5oiR55qE77yM5LiN566h5piv6LCB5oiR6YO96KaB6ZOy6Zmk77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld57uI5LqO6Zyy5Ye654uQ54u45bC+5be05LqG77yM5YW25a6e5ZKx5pep5bCx55yL5Ye65L2g5pyJ6LCL5Y+N55qE5b+15aS044CC5L2g55qE6K6h5YiS5bCx5piv5ouJ5oui6L+Z5a625LyZ5YWl5LyZ54S25ZCO5o6o57+76a2U546L5a+56a2U5aGU55qE57uf5rK75a+55ZCn77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWRteWRteWRteKApuKApumCo+S4quaYj+W6uOeahOmtlOeOi++8jOaOjOaPoeedgOmCo+S5iOW6nuWkp+eahOmtlOeJqeWGm+mYn+WNtOWPquefpemBk+WbuuWuiOmtlOWhlO+8jOiAjOS4jeS4u+WKqOS+teeVpeS6uuexu+S4lueVjOaJqeW8oOmihuWcn++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHlrp7lnKjmmK/nnIvkuI3ov4fnnLzvvIzmiYDku6XmiJHmiY3lhrPlrprmiorov5nkuKrlhbflpIfnqIDmnInli4fogIXkvZPotKjnmoTlrrbkvJnln7nlhbvmiJDmlrDkuIDku7vprZTnjovvvIFcXG7mnaXorqnov5nkuKrkuJbnlYznmoTlir/lipvph43mlrDmtJfniYzvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3kvaDop4nlvpfkuIDkuKrmu6HohJHlrZDmg7PnnYDlm57lrrbnp43nlLDnmoTlup/mn7Tli4fogIXkvJrmiJDkuLrmlLnlj5jkuJbnlYznmoTprZTnjovvvJ/kvaDmmYPmmYPohJHooovor5Xor5XvvIzmmK/kuI3mmK/og73lkKzliLDlpKfmtbfnmoTlo7Dpn7PvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oG85Lq66Iez5p6B55qE5aaW57K+5peP77yB5ZG15ZG15ZG14oCm4oCm5oiR5bmy6ISG5LiA5LiN5YGa5LqM5LiN5LyR77yM6L+e5L2g5Lmf5LiA5Z2X5pS25ou+5LqG5ZCn77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5Yir5bCP556n5ZKx77yB5ZKx5aW95q255Lmf5piv5aaW57K+5peP6YeM5a6e5Yqb5pWw5LiA5pWw5LqM55qE5a2Y5Zyo77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWPquS8muiAjeWYtOearuWtkOeahOaBvOS6uuiLjeidh++8geaIkeWAkuimgeeci+eci+S4gOWdl+eEpueCreS8muS4jeS8muivtOivne+8gVxcbuKAlOKAlOaLm+mbt+W8ue+8ge+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRhY2subXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGh1bmRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5YiH77yM6L+Z54K55Lyk55eb6Lef5LuW5Yia5omN57uP5Y6G55qE6Lqr5b+D5Zyw54ux55u45q+U5qC55pys5bCx5LiN566X5LuA5LmI44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWTvO+8gee/heiGgOmDveiiq+eDp+eEpuS6hui/mOimgeWYtOehrO+8n+S9oOmavuS4jeaIkOecn+S7peS4uuaIkeS4jeS8muWvueS9oOWKqOecn+agvO+8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKbkvaDov5nmt7fom4vvvIHnu5nmiJHnprvlpbnov5zngrnvvIHvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3vvIHigKbkvaDnjrDlnKjlj5fkuoblvojkuKXph43nmoToh7Tlkb3kvKTvvIzkubHliqjku4DkuYjvvJ9cXG7kuZbjgILliKvmgJXvvIzov5nph4zmnInlkrHpobbnnYDvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lr7nkuobvvIzlkrHlho3pl67kvaDkuIDpgY3vvIzkvaDmmK/lvojnj43mg5zoh6rlt7HmgKflkb3nmoTlr7nlkKfvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d77yB4oCm562J562J4oCm5aaW57K+5bCP5aeQ77yM5L2g5LiN5Lya5piv4oCm4oCm77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZaC77yM6buR5pqX5aSn5rOV5biI77yM5L2g5L2c5Li66a2U5aGU6YeM5pyA5Y2a5a2m5aSa6K+G55qE6KCi6LSn77yM5bqU6K+l5a+55ZKx5aaW57K+5peP55qE54m55q6K6IO95Yqb5YaN5riF5qWa5LiN6L+H5ZCn77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS7gOS5iO+8n++8gemavuS4jeaIkOS9oOaYr+aDs++8ge+8geS4jeWPr+iDveKApuKAplxcbuWwseS4uuS6huS4gOS4qua4uuWwj+eahOS6uuexu++8jOS4jeWPr+eQhuWWu++8ge+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWTvOWTvOWTvO+8geS9oOWus+aAleeahOihqOaDheWPr+ecn+e+juWRs++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS4jei/h+avlOi1t+i/meS4qu+8jOWSseabtOacn+W+heS9oOWQg+WIsOKAnOWmlueyvuiHqueBreWGsuWHu+KAneS5i+WQjueahOatu+eKtuWTpu+8gX5cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN77yB77yB5LiN5bqU6K+l5piv6L+Z5qC355qE77yB5oiR5a6M576O55qE6K6h5YiS56uf54S25Lya6KKr5LiA5Y+q5bCP5bCP55qE5aaW57K+56C05Z2P77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeS4jeimge+8geKApuKApuWNg+S4h+S4jeimge+8geKApuKApuS4uuS6huaIkei/meenjeS6uuKApuKApuWUlO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeesqOibi++8jOWKqOmDveWKqOS4jeS6huS6huWwseS4jeimgeW8uuaSkeedgOermei1t+adpeS6huWViuOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5Xeecn+aYr+eahO+8jOmDveWIsOacgOWQjuS4gOWIu+S6hu+8jOS9oOi/meWutuS8meWlveatueS5n+iuqeWSseecgeeCueW/g+WQp+OAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XemCo+S5iO+8jOWGjeingeS6huKApuKApuaIkeeahOWLh+iAheWkp+S6uuOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNzAwLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRhY2subXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3lj6/og73vvIHvvIHvvIHvvIHvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZUZsb29yXCIsXHJcbiAgICAgICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKZcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5aaW57K+5bCP5aeQ77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeaYr+aipuWQl++8n+KApuKApuS4jeWvue+8jOS4uuS7gOS5iOaIkeWcqOa1geazqu+8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13ov5npopfmvILkuq7nmoTlrp3nn7PmmK/igKbigKbvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5oiR5YWo6YO95oOz6LW35p2l5LqG4oCm4oCm5aaW57K+5bCP5aeQ5Li65LqG5oiR4oCm4oCmXFxu54m654my5LqG6Ieq5bex55qE5oCn5ZG944CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeWcqOi/memil+Wuneefs+S4iu+8jOaIkeiDveaEn+WPl+WIsOS9oOeahOa4qeW6puKApuKAplxcbueGn+aCieiAjOWPiOS7pOS6uuWuieW/g++8jOi/meWwseaYr+S9oOacgOWQjueVmee7meaIkeeahOS4nOilv+WQl+KApuKAplwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13lpb3muKnmmpbigKbigKZcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93SmV3ZWxcIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIxXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKZcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCI2LDVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfVxyXG59LFxyXG5cImNoYW5nZUZsb29yXCI6IHtcclxuICAgIFwiNiwwXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxyXG4gICAgfSxcclxuICAgIFwiNiwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJ1cEZsb29yXCJcclxuICAgIH1cclxufSxcclxuXCJhZnRlckJhdHRsZVwiOiB7XHJcbiAgICBcIjYsNFwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lpKnnnJ/vvIHkvaDku6XkuLrov5nmoLflsLHog73miJjog5zmiJHlkJfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjcsNVwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDmiZPotKXnmoTkuI3ov4fmmK/miJHkvJflpJrliIbouqvkuK3nmoTlhbbkuK3kuIDkuKrogIzlt7LjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjUsNFwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDnmoTouqvkvZPlt7Lnu4/kvKTnl5XntK/ntK/kuobvvIzlj6/miJHov5jnlZnmnInnnYDkuZ3miJDlpJrnmoTprZTlipvjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjUsNVwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3pob3lm7rnmoTlrrbkvJnvvIHmlL7lvIPmirXmipflkKfvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjcsNFwiOiBbXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lk4jlk4jlk4jlk4jvvIHmiJHnmoTngbXprYLov5zmr5TkvaDmg7PosaHnmoTlvLrlpKfvvIFcXG7miJHljbPmmK/msLjmgZLvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0sXHJcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxyXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXHJcblwiY2Fubm90TW92ZVwiOiB7fSxcclxuXCJiZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImZnbWFwXCI6IFtcclxuXHJcbl0sXHJcbn0iLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBKaW1wID0gcmVxdWlyZSgnamltcCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgbWF0ZXJpYWxzID0gW1xuICAnYW5pbWF0ZXMnLFxuICAnZW5lbXlzJyxcbiAgJ2hlcm8nLCAnaXRlbXMnLCAnbnBjcycsICd0ZXJyYWlucycsICdlbmVteTQ4JywgJ25wYzQ4JyxcbiAgJ2FpcndhbGwnLFxuICAnaWNvbnMnLFxuXTtcbmNvbnN0IGltYWdlc0RpciA9IHBhdGgucmVzb2x2ZSgnLi4vbW90YS1qcy9wcm9qZWN0L2ltYWdlcycpO1xuY29uc3QgYW5pbWF0ZXNEaXIgPSBwYXRoLnJlc29sdmUoJy4uL21vdGEtanMvcHJvamVjdC9hbmltYXRlcycpO1xuY29uc3QgYW5pbWF0ZXNEYXRhID0ge307XG5jb25zdCByZWFkRmlsZSA9IChzcmMpID0+IHtcbiAgY29uc3QgdGVtcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmcy5yZWFkRmlsZShzcmMsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgZWxzZSByZXNvbHZlKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbiAgdGVtcC5jYXRjaCgoZXJyKSA9PiB7IHRocm93IGVycjsgfSk7XG4gIHJldHVybiB0ZW1wO1xufTtcbmNvbnN0IHJlYWRBbmltYXRlID0gKG5hbWUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgbGV0IHJlYWxOYW1lID0gbmFtZTtcbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID09PSAtMSkgcmVhbE5hbWUgPSBgJHtuYW1lfS5hbmltYXRlYDtcbiAgcmVhZEZpbGUocGF0aC5yZXNvbHZlKGFuaW1hdGVzRGlyLCByZWFsTmFtZSkpLnRoZW4oKHJhdykgPT4ge1xuICAgIHJlc29sdmUocmF3KTtcbiAgfSxcbiAgcmVqZWN0KTtcbn0pO1xuY29uc3QgYWRkSW1hZ2UgPSAocm9vdERpciwgbmFtZSkgPT4ge1xuICBsZXQgcmVhbE5hbWUgPSBuYW1lO1xuICBpZiAobmFtZS5pbmRleE9mKCcuJykgPT09IC0xKSByZWFsTmFtZSA9IGAke25hbWV9LnBuZ2A7XG4gIHJldHVybiBKaW1wLnJlYWQoYCR7aW1hZ2VzRGlyfS8ke3JlYWxOYW1lfWApLnRoZW4oaW1hZ2UgPT4ge1xuICAgIHJvb3REaXJbbmFtZV0gPSBpbWFnZTtcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59O1xuY29uc3QgYWRkQW5pbWF0ZSA9IChyb290RGlyLCBuYW1lKSA9PiB7XG4gIHJldHVybiByZWFkQW5pbWF0ZShuYW1lKS50aGVuKChyYXcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXcpO1xuICAgIGFuaW1hdGVzRGF0YVtuYW1lXSA9IGRhdGE7XG4gICAgY29uc3QgYml0bWFwc0RhdGEgPSBbXTtcbiAgICBjb25zdCByZWdleCA9IC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC87XG4gICAgZGF0YS5iaXRtYXBzLmZvckVhY2goKHJhd0Jhc2UsIGkpID0+IHtcbiAgICAgIGlmIChyYXdCYXNlID09PSAnJykgcmV0dXJuIGJpdG1hcHNEYXRhLnB1c2goMCk7XG4gICAgICBjb25zdCBiYXNlID0gcmF3QmFzZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG4gICAgICBjb25zdCBkYXRhQnVmZmVyID0gQnVmZmVyLmZyb20oYmFzZSwgJ2Jhc2U2NCcpO1xuICAgICAgY29uc3QgX25hbWUgPSBgJHtuYW1lfS0ke2l9YDtcbiAgICAgIHJvb3REaXJbX25hbWVdID0gZGF0YUJ1ZmZlcjtcbiAgICAgIHJldHVybiBiaXRtYXBzRGF0YS5wdXNoKDEpO1xuICAgIH0pO1xuICAgIGRhdGEuYml0bWFwcyA9IGJpdG1hcHNEYXRhO1xuICB9KTtcbn07XG5jb25zdCByZWFkID0gKGxpc3QsIHJvb3REaXIsIG5hbWUsIGFkZEZ1bmMgPSBhZGRJbWFnZSkgPT4ge1xuICBpZiAocm9vdERpciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHJvb3REaXIuZm9yRWFjaChkYXRhID0+IHJlYWQobGlzdCwgLi4uZGF0YSkpO1xuICB9XG4gIGlmIChuYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gbmFtZS5mb3JFYWNoKChfbmFtZSkgPT4gcmVhZChsaXN0LCByb290RGlyLCBfbmFtZSwgYWRkRnVuYykpO1xuICB9XG4gIGxpc3QucHVzaChhZGRGdW5jKHJvb3REaXIsIG5hbWUpKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgcmVhZEFsbCA9IChhcnIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICByZWFkKGxpc3QsIGFycik7XG4gIHJldHVybiBQcm9taXNlLmFsbChsaXN0KTtcbn07XG5hc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICBjb25zdCB7IG1haW4gfSA9IGdsb2JhbDtcbiAgY29uc3QgX3Jvb3QgPSBtYWluLmltYWdlcztcbiAgbWFpbi5pbWFnZXNEaXIgPSBpbWFnZXNEaXI7XG4gIG1haW4ucmF3SW1hZ2VzLnB1c2goJ2hlcm8ucG5nJywgJ2dyb3VuZC5wbmcnLCAnc25vd05vZGUucG5nJyk7XG4gIGF3YWl0IHJlYWRBbGwoW1xuICAgIFtfcm9vdCwgbWF0ZXJpYWxzXSxcbiAgICBbX3Jvb3QuYXV0b3RpbGUsIG1haW4uYXV0b3RpbGVzXSxcbiAgICBbX3Jvb3QudGlsZXNldHMsIG1haW4udGlsZXNldHNdLFxuICAgIFtfcm9vdC5leHRyYUltYWdlcywgbWFpbi5yYXdJbWFnZXNdLFxuICAgIFtfcm9vdC5hbmltYXRlc0J1ZmZlciwgbWFpbi5hbmltYXRlcywgYWRkQW5pbWF0ZV0sXG4gIF0pO1xuICBjb25zdCB7IG91dHB1dFBhdGggfSA9IG1haW47XG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShhbmltYXRlc0RhdGEpO1xuICBjb25zdCBuYW1lID0gJ2FuaW1hdGVzLmpzb24nO1xuICBmcy53cml0ZUZpbGUocGF0aC5yZXNvbHZlKG91dHB1dFBhdGgsIG5hbWUpLCBkYXRhLFxuICAgIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgIGNvbnNvbGUubG9nKGDmlofku7Yke25hbWV95L+d5a2Y5oiQ5YqfYCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkSW1hZ2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==