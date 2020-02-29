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
};
const floors = __webpack_require__(8);
const { floorIds, images: rawImages } = _mota_js_project_data__WEBPACK_IMPORTED_MODULE_3__["data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d"].main;
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
  Object.keys(blockIds).forEach((numId) => {
    const num = parseInt(numId, 10);
    const block = getBlock(num);
    if (!block) return;
    const {
      image, posX, posY, animate, alone, id, height,
    } = block;
    if (!image) return;
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
          blocksBuffer[id] = buffer;
        });
    });
  });
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
        blocksBuffer[basename] = imageBuffer;
      });
    });
  }());
  console.log('no');
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
			"Hi，欢迎来到 HTML5 魔塔样板！\n\n本样板由艾之葵制作，可以让你在不会写任何代码\n的情况下也能做出属于自己的H5魔塔！",
			"这里游戏开始时的剧情。\n定义在data.js的startText处。\n\n你可以在这里写上自己的内容。",
			"赶快来试一试吧！"
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
		"floorChangeTime": 800
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
		"startDirectly": false,
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
    [201,261,217,264,207,  5,  0,  1, 27, 28, 29, 30, 35],
    [  5,  5,125,  5,  5,  5,  0,  1, 21, 22, 23, 24, 25],
    [  0,  0,237,  0,  0,  0, 45,  1,  1,  1,121,  1,  1],
    [  4,  4,133,  4,  4,  4,  0,  0,  0,  0,  0, 85,124],
    [ 87, 11, 12, 13, 14,  4,  4,  2,  2,  2,122,  2,  2],
    [ 88, 89, 90, 91, 92, 93, 94,  2, 81, 82, 83, 84, 86]
],
"firstArrive": [
    {
        "type": "setText",
        "background": "winskin.png",
        "time": 0
    },
    "\t[样板提示]首次到达某层可以触发 firstArrive 事件，该事件可类似于RMXP中的“自动执行脚本”。\n\n本事件支持一切的事件类型，常常用来触发对话，例如：",
    "\t[hero]\b[up,hero]我是谁？我从哪来？我又要到哪去？",
    "\t[仙子,fairy]你问我...？我也不知道啊...",
    "本层主要对道具、门、怪物等进行介绍，有关事件的各种信息在下一层会有更为详细的说明。"
],
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
  main.imagesDir = imagesDir;
  console.log(_root);
  await readImage(_root, materials);
  await readImage(_root.autotile, main.autotiles);
  await readImage(_root.tilesets, main.tilesets);
  await readImage(_root.extraImages, main.rawImages);
}
/* harmony default export */ __webpack_exports__["default"] = (loadImages);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2ljb25zLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9tYXBzLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9kYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyZWUtdGV4LXBhY2tlci1jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9NVDAuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUwLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvc2FtcGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9tb3RhLWpzL3Byb2plY3QvZmxvb3JzL3NhbXBsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUzLmpzIiwid2VicGFjazovLy8uL25vZGVDb250cm9sL2xvYWRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Uyw2QkFBNkI7QUFDdEMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUywyQkFBMkI7QUFDcEMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyx5Q0FBeUM7QUFDbEQsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxvQ0FBb0M7QUFDN0MsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxvQ0FBb0M7QUFDN0MsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNoYUEsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLG1CQUFtQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNB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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7O0FDNStCQTtBQUFBLGFBQWEsbUJBQU8sQ0FBQyxDQUFNO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLG1CQUFtQixVQUFVLEdBQUcsU0FBUztBQUN6QztBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx5RUFBVSxFQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXItbW9yYW4vamltcFxuaW1wb3J0IEppbXAgZnJvbSAnamltcCc7XG5cbmltcG9ydCB7IGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSBhcyBpY29ucyB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9pY29ucyc7XG5pbXBvcnQgeyBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSBhcyBtYXBzIH0gZnJvbSAnLi4vbW90YS1qcy9wcm9qZWN0L21hcHMnO1xuaW1wb3J0IHsgZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQgYXMgZGF0YSB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9kYXRhJztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIOaJk+WMheW3peWFtyBodHRwczovL2dpdGh1Yi5jb20vb2RyaWNrL2ZyZWUtdGV4LXBhY2tlci1jb3JlXG5jb25zdCB0ZXh0dXJlUGFja2VyID0gcmVxdWlyZSgnZnJlZS10ZXgtcGFja2VyLWNvcmUnKTtcblxuY29uc3QgbWFpbiA9IHsgZmxvb3JzOiB7IH0gfTtcbmdsb2JhbC5tYWluID0gbWFpbjtcbmdsb2JhbC53aW5kb3cgPSB7fTtcbm1haW4udGlsZXNldHMgPSBkYXRhLm1haW4udGlsZXNldHM7XG5tYWluLmF1dG90aWxlcyA9IE9iamVjdC5rZXlzKGljb25zLmF1dG90aWxlKTtcbm1haW4uaWNvbnMgPSB7XG4gIGZsb29yOiAwLFxuICBsdjogMSxcbiAgaHBtYXg6IDIsXG4gIGhwOiAzLFxuICBhdGs6IDQsXG4gIGRlZjogNSxcbiAgbWRlZjogNixcbiAgbW9uZXk6IDcsXG4gIGV4cGVyaWVuY2U6IDgsXG4gIHVwOiA5LFxuICBib29rOiAxMCxcbiAgZmx5OiAxMSxcbiAgdG9vbGJveDogMTIsXG4gIGtleWJvYXJkOiAxMyxcbiAgc2hvcDogMTQsXG4gIHNhdmU6IDE1LFxuICBsb2FkOiAxNixcbiAgc2V0dGluZ3M6IDE3LFxuICBwbGF5OiAxOCxcbiAgcGF1c2U6IDE5LFxuICBzdG9wOiAyMCxcbiAgc3BlZWREb3duOiAyMSxcbiAgc3BlZWRVcDogMjIsXG4gIHJld2luZDogMjMsXG4gIGVxdWlwYm94OiAyNCxcbiAgbWFuYTogMjUsXG4gIHNraWxsOiAyNixcbiAgcGFpbnQ6IDI3LFxuICBlcmFzZTogMjgsXG4gIGVtcHR5OiAyOSxcbiAgZXhpdDogMzAsXG4gIGJ0bjE6IDMxLFxuICBidG4yOiAzMixcbiAgYnRuMzogMzMsXG4gIGJ0bjQ6IDM0LFxuICBidG41OiAzNSxcbiAgYnRuNjogMzYsXG4gIGJ0bjc6IDM3LFxuICBidG44OiAzOCxcbn07XG5tYWluLmltYWdlcyA9IHtcbiAgdGlsZXNldHM6IHt9LFxuICBhdXRvdGlsZToge30sXG4gIGV4dHJhSW1hZ2VzOiB7fSxcbn07XG5jb25zdCBmbG9vcnMgPSByZXF1aXJlLmNvbnRleHQoJy4uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvJywgZmFsc2UsIC9cXC5qcyQvKTtcbmNvbnN0IHsgZmxvb3JJZHMsIGltYWdlczogcmF3SW1hZ2VzIH0gPSBkYXRhLm1haW47XG5tYWluLnJhd0ltYWdlcyA9IHJhd0ltYWdlcztcbmNvbnN0IGJsb2NrSWRzID0ge307XG4vLyDliqDovb3lh7rlnLDlm77mlbDnu4TkuK3miYDkvb/nlKjnmoRibG9jayDnmoRudW1cbihmdW5jdGlvbiBsb2FkRmxvb3JzKCkge1xuICBjb25zdCBpbml0QmxvY2sgPSBudW0gPT4ge1xuICAgIGlmIChibG9ja0lkc1tudW1dKSByZXR1cm47XG4gICAgYmxvY2tJZHNbbnVtXSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IHRyYXZlcnNhbEFycmF5ID0gKGFyciwgZnVuYykgPT4ge1xuICAgIGlmIChhcnIgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGFyci5mb3JFYWNoKG4gPT4gdHJhdmVyc2FsQXJyYXkobiwgZnVuYykpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG5cbiAgZmxvb3JJZHMuZm9yRWFjaCgoZmxvb3JJZCkgPT4gZmxvb3JzKGAuLyR7Zmxvb3JJZH0uanNgKSk7XG5cbiAgZmxvb3JJZHMuZm9yRWFjaCgoZmxvb3JJZCkgPT4ge1xuICAgIGNvbnN0IGZsb29yID0gbWFpbi5mbG9vcnNbZmxvb3JJZF07XG4gICAgdHJhdmVyc2FsQXJyYXkoW2Zsb29yLm1hcCwgZmxvb3IuZmdtYXAsIGZsb29yLmJnbWFwXSwgaW5pdEJsb2NrKTtcbiAgfSk7XG59KCkpO1xuXG5jb25zdCBnZXRUaWxlc2V0T2Zmc2V0ID0gKG51bSkgPT4ge1xuICBpZiAodHlwZW9mIG51bSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgc3RhcnRPZmZzZXQgPSAxMDAwMDtcbiAgaWYgKG51bSA8IHN0YXJ0T2Zmc2V0KSByZXR1cm4gbnVsbDtcbiAgZm9yIChjb25zdCBpIGluIG1haW4udGlsZXNldHMpIHtcbiAgICBjb25zdCB0aWxlc2V0SWQgPSBtYWluLnRpbGVzZXRzW2ldO1xuICAgIGNvbnN0IGltZ05hbWUgPSB0aWxlc2V0SWQ7XG4gICAgY29uc3QgaW1nID0gbWFpbi5pbWFnZXMudGlsZXNldHNbaW1nTmFtZV07XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmZsb29yKGltZy5iaXRtYXAud2lkdGggLyAzMik7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5mbG9vcihpbWcuYml0bWFwLmhlaWdodCAvIDMyKTtcbiAgICBpZiAobnVtID49IHN0YXJ0T2Zmc2V0ICYmIG51bSA8IHN0YXJ0T2Zmc2V0ICsgd2lkdGggKiBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IHggPSAobnVtIC0gc3RhcnRPZmZzZXQpICUgd2lkdGg7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoKG51bSAtIHN0YXJ0T2Zmc2V0KSAvIHdpZHRoLCAxMCk7XG4gICAgICByZXR1cm4geyBpbWFnZTogaW1nLCB4LCB5IH07XG4gICAgfVxuICAgIHN0YXJ0T2Zmc2V0ICs9IHN0YXJ0T2Zmc2V0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldEFuaW1hdGVGcmFtZXMgPSBmdW5jdGlvbiAoY2xzLCB1c2VPcmlnaW5WYWx1ZSkge1xuICBpZiAoY2xzID09PSAnZW5lbXlzJyB8fCBjbHMgPT09ICducGNzJykge1xuICAgIHJldHVybiAyO1xuICB9XG4gIGlmIChjbHMgPT09ICdhbmltYXRlcycgfHwgY2xzID09PSAnZW5lbXk0OCcpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBpZiAoY2xzID09PSAnbnBjNDgnKSB7XG4gICAgcmV0dXJuIHVzZU9yaWdpblZhbHVlID8gNCA6IDE7XG4gIH1cbiAgcmV0dXJuIDE7XG59O1xuY29uc3QgZ2V0QmxvY2sgPSAobnVtKSA9PiB7XG4gIGxldCBibG9jaztcbiAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIC8vIGFsb25lIOaMh+S4gOS4quWbvueJh+WvueW6lOS4gOS4qmJsb2NrXG4gIGlmIChudW0gPT09IDE3KSB7IC8vIGFpcndhbGxcbiAgICBibG9jayA9IHtcbiAgICAgIGNsczogJ3RlcnJhaW5zJyxcbiAgICAgIGlkOiAnYWlyd2FsbCcsXG4gICAgICBpbWFnZTogbWFpbi5pbWFnZXMuYWlyd2FsbCxcbiAgICAgIGFsb25lOiB0cnVlLFxuICAgIH07XG4gIH0gZWxzZSBpZiAobWFwc1tudW1dKSB7XG4gICAgYmxvY2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1hcHNbbnVtXSkpO1xuICAgIGNvbnN0IHsgaWQsIGNscyB9ID0gYmxvY2s7XG4gICAgaWYgKGNscyA9PT0gJ2F1dG90aWxlJykge1xuICAgICAgYmxvY2suaW1hZ2UgPSBtYWluLmltYWdlcy5hdXRvdGlsZVtpZF07XG4gICAgICBibG9jay5hbG9uZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrLmltYWdlID0gbWFpbi5pbWFnZXNbY2xzXTtcbiAgICAgIGJsb2NrLnBvc1kgPSBpY29uc1tjbHNdW2lkXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGlsZXNldE9mZnNldCA9IGdldFRpbGVzZXRPZmZzZXQobnVtKTtcbiAgICBpZiAodGlsZXNldE9mZnNldCkge1xuICAgICAgYmxvY2sgPSB7XG4gICAgICAgIGNsczogJ3RpbGVzZXQnLFxuICAgICAgICBpZDogYFgke251bX1gLFxuICAgICAgICBwb3NYOiB0aWxlc2V0T2Zmc2V0LngsXG4gICAgICAgIHBvc1k6IHRpbGVzZXRPZmZzZXQueSxcbiAgICAgICAgaW1hZ2U6IHRpbGVzZXRPZmZzZXQuaW1hZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWJsb2NrLmFuaW1hdGUpIHtcbiAgICBibG9jay5hbmltYXRlID0gZ2V0QW5pbWF0ZUZyYW1lcyhibG9jay5jbHMsIHRydWUpO1xuICB9XG4gIGJsb2NrLmhlaWdodCA9IDMyO1xuICBpZiAoYmxvY2suY2xzID09PSAnZW5lbXk0OCcgfHwgYmxvY2suY2xzID09PSAnbnBjNDgnKSBibG9jay5oZWlnaHQgPSA0ODtcbiAgYmxvY2sucG9zWCA9IGJsb2NrLnBvc1ggfHwgMDtcbiAgYmxvY2sucG9zWSA9IGJsb2NrLnBvc1kgfHwgMDtcbiAgcmV0dXJuIGJsb2NrO1xufTtcbmNvbnN0IGxvYWRJbWFnZXMgPSByZXF1aXJlKCcuL2xvYWRJbWFnZXMnKS5kZWZhdWx0O1xuXG5sb2FkSW1hZ2VzKCkudGhlbigoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCfotYTmupDliqDovb3lrozmiJAnKTtcbiAgY29uc3QgYmxvY2tzQnVmZmVyID0ge307XG4gIC8vIOWKoOi9vWJsb2Nrc1xuICBPYmplY3Qua2V5cyhibG9ja0lkcykuZm9yRWFjaCgobnVtSWQpID0+IHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChudW1JZCwgMTApO1xuICAgIGNvbnN0IGJsb2NrID0gZ2V0QmxvY2sobnVtKTtcbiAgICBpZiAoIWJsb2NrKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgaW1hZ2UsIHBvc1gsIHBvc1ksIGFuaW1hdGUsIGFsb25lLCBpZCwgaGVpZ2h0LFxuICAgIH0gPSBibG9jaztcbiAgICBpZiAoIWltYWdlKSByZXR1cm47XG4gICAgaWYgKGFsb25lKSB7XG4gICAgICBpbWFnZS5nZXRCdWZmZXIoSmltcC5NSU1FX1BORywgKGVyciwgaW1hZ2VCdWZmZXIpID0+IHtcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBibG9ja3NCdWZmZXJbaWRdID0gaW1hZ2VCdWZmZXI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbG9hZCBwcm9taXNlIOWKoOWFpeaVsOe7hFxuICAgIGNvbnN0IHRlbXAgPSBuZXcgSmltcCgzMiAqIGFuaW1hdGUsIGhlaWdodCwgKGVyciwgaW1nKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICBpbWcuYmxpdChpbWFnZSwgMCwgMCwgcG9zWCAqIDMyLCBwb3NZICogaGVpZ2h0LCAzMiAqIGFuaW1hdGUsIGhlaWdodClcbiAgICAgICAgLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBidWZmZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvLyDliqDovb1pY29uc1xuICAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGljb25zRGF0YSA9IG1haW4uaWNvbnM7XG4gICAgY29uc3QgaWNvbnNJbWcgPSBtYWluLmltYWdlcy5pY29ucztcbiAgICBPYmplY3Qua2V5cyhpY29uc0RhdGEpLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3QgdGVtcCA9IG5ldyBKaW1wKDMyLCAzMiwgKGVyciwgaW1nKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgaW1nLmJsaXQoaWNvbnNJbWcsIDAsIDAsIDAsIGljb25zRGF0YVtpZF0gKiAzMiwgMzIsIDMyKVxuICAgICAgICAgIC5nZXRCdWZmZXIoSmltcC5NSU1FX1BORywgKGVyciwgYnVmZmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBibG9ja3NCdWZmZXJbaWRdID0gYnVmZmVyO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0oKSk7XG4gIC8vIOWKoOi9vemineWklmltYWdlc1xuICAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgZXh0cmFJbWFnZXMgfSA9IG1haW4uaW1hZ2VzO1xuICAgIE9iamVjdC5rZXlzKGV4dHJhSW1hZ2VzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHsgW2lkXTogaW1hZ2UgfSA9IGV4dHJhSW1hZ2VzO1xuICAgICAgLy8g6L6D5aSn55qE5Zu+54mHIOWPr+iDveiiq2ppbXAg5aSE55CG5ZCO5L2T56ev5aKe5aSnIOWmgmJnLmpwZyDlm6DmraTovoPlpKflm77niYfljZXni6zlpITnkIZcbiAgICAgIC8vIOWboOatpOWcqOatpOmHjeaWsOivu+WPluaWh+S7tumHjeaWsOWGmeWFpVxuICAgICAgaWYgKGltYWdlLmJpdG1hcC53aWR0aCAqIGltYWdlLmJpdG1hcC5oZWlnaHQgPj0gMTYwMDAwKSB7XG4gICAgICAgIGZzLnJlYWRGaWxlKGAke3BhdGgucmVzb2x2ZShtYWluLmltYWdlc0RpciwgaWQpfWAsXG4gICAgICAgICAgKGVyciwgaW1nKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGUoYCR7cGF0aC5yZXNvbHZlKCcuL2RhdGEnLCBpZCl9YCwgaW1nLFxuICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDlhpnlhaUke2lkfeaIkOWKn2ApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW1hZ2UuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGltYWdlQnVmZmVyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgbGV0IGJhc2VuYW1lID0gaWQ7XG4gICAgICAgIGlmIChpZC5sYXN0SW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgIGJhc2VuYW1lID0gaWQuc3Vic3RyaW5nKDAsIGlkLmxhc3RJbmRleE9mKCcuJykpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2Nrc0J1ZmZlcltiYXNlbmFtZV0gPSBpbWFnZUJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICBjb25zb2xlLmxvZygnbm8nKTtcbiAgLy8gbmV3IEppbXAg5piv5byC5q2l55qE77yM5L2G5piv5rKh5pyJ6L+U5ZueUHJvbWlzZSDlm6DmraTnlKhzZXRUaW1lb3V0XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0ZXh0dXJlTmFtZTogJ3BhY2tlcicsXG4gICAgICBhbGxvd1JvdGF0aW9uOiB0cnVlLFxuICAgICAgZXhwb3J0ZXI6ICdQaXhpJyxcbiAgICAgIGRldGVjdElkZW50aWNhbDogZmFsc2UsXG4gICAgICB3aWR0aDogNTEyLFxuICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgfTtcbiAgICBjb25zdCBvdXRwdXRQYXRoID0gcGF0aC5yZXNvbHZlKCcuL2RhdGEnKTtcblxuICAgIE9iamVjdC5rZXlzKGJsb2Nrc0J1ZmZlcikuZm9yRWFjaCgoaWQpID0+IGltYWdlcy5wdXNoKHtcbiAgICAgIHBhdGg6IGlkLFxuICAgICAgY29udGVudHM6IGJsb2Nrc0J1ZmZlcltpZF0sXG4gICAgfSkpO1xuICAgIHRleHR1cmVQYWNrZXIoaW1hZ2VzLCBvcHRpb25zLCAoZmlsZXMsIGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUGFja2FnaW5nIGZhaWxlZCcsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aC5yZXNvbHZlKG91dHB1dFBhdGgsIGl0ZW0ubmFtZSksIGl0ZW0uYnVmZmVyLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpdGVtLm5hbWV95YaZ5YWl5oiQ5YqfYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamltcFwiKTsiLCJleHBvcnQgdmFyIGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSA9IFxyXG57XHJcblx0XCJoZXJvXCI6IHtcclxuXHRcdFwiZG93blwiOiB7XHJcblx0XHRcdFwibG9jXCI6IDAsXHJcblx0XHRcdFwic3RvcFwiOiAwLFxyXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXHJcblx0XHRcdFwicmlnaHRGb290XCI6IDNcclxuXHRcdH0sXHJcblx0XHRcImxlZnRcIjoge1xyXG5cdFx0XHRcImxvY1wiOiAxLFxyXG5cdFx0XHRcInN0b3BcIjogMCxcclxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxyXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXHJcblx0XHR9LFxyXG5cdFx0XCJyaWdodFwiOiB7XHJcblx0XHRcdFwibG9jXCI6IDIsXHJcblx0XHRcdFwic3RvcFwiOiAwLFxyXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXHJcblx0XHRcdFwicmlnaHRGb290XCI6IDNcclxuXHRcdH0sXHJcblx0XHRcInVwXCI6IHtcclxuXHRcdFx0XCJsb2NcIjogMyxcclxuXHRcdFx0XCJzdG9wXCI6IDAsXHJcblx0XHRcdFwibGVmdEZvb3RcIjogMSxcclxuXHRcdFx0XCJyaWdodEZvb3RcIjogM1xyXG5cdFx0fSxcclxuXHRcdFwid2lkdGhcIjogMzIsXHJcblx0XHRcImhlaWdodFwiOiA0OFxyXG5cdH0sXHJcblx0XCJ0ZXJyYWluc1wiOiB7XHJcblx0XHRcImdyb3VuZFwiOiAwLFxyXG5cdFx0XCJncmFzc1wiOiAxLFxyXG5cdFx0XCJncmFzczJcIjogMixcclxuXHRcdFwieWVsbG93V2FsbFwiOiAzLFxyXG5cdFx0XCJ3aGl0ZVdhbGxcIjogNCxcclxuXHRcdFwiYmx1ZVdhbGxcIjogNSxcclxuXHRcdFwic25vd0dyb3VuZFwiOiA2LFxyXG5cdFx0XCJncm91bmQyXCI6IDcsXHJcblx0XHRcImdyb3VuZDNcIjogOCxcclxuXHRcdFwiZ3JvdW5kNFwiOiA5LFxyXG5cdFx0XCJzYW5kXCI6IDEwLFxyXG5cdFx0XCJncm91bmQ1XCI6IDExLFxyXG5cdFx0XCJ5ZWxsb3dXYWxsMlwiOiAxMixcclxuXHRcdFwid2hpdGVXYWxsMlwiOiAxMyxcclxuXHRcdFwiYmx1ZVdhbGwyXCI6IDE0LFxyXG5cdFx0XCJibG9ja1dhbGxcIjogMTUsXHJcblx0XHRcImdyYXlXYWxsXCI6IDE2LFxyXG5cdFx0XCJ3aGl0ZVwiOiAxNyxcclxuXHRcdFwiZ3JvdW5kNlwiOiAxOCxcclxuXHRcdFwic29pbFwiOiAxOSxcclxuXHRcdFwiZ3JvdW5kN1wiOiAyMCxcclxuXHRcdFwiZ3JvdW5kOFwiOiAyMSxcclxuXHRcdFwiaWNlXCI6IDIyLFxyXG5cdFx0XCJkb3duRmxvb3JcIjogMjMsXHJcblx0XHRcInVwRmxvb3JcIjogMjQsXHJcblx0XHRcInllbGxvd0Rvb3JcIjogMjUsXHJcblx0XHRcImJsdWVEb29yXCI6IDI2LFxyXG5cdFx0XCJyZWREb29yXCI6IDI3LFxyXG5cdFx0XCJncmVlbkRvb3JcIjogMjgsXHJcblx0XHRcInNwZWNpYWxEb29yXCI6IDI5LFxyXG5cdFx0XCJzdGVlbERvb3JcIjogMzAsXHJcblx0XHRcImJsdWVTaG9wLWxlZnRcIjogMzEsXHJcblx0XHRcImJsdWVTaG9wLXJpZ2h0XCI6IDMyLFxyXG5cdFx0XCJwaW5rU2hvcC1sZWZ0XCI6IDMzLFxyXG5cdFx0XCJwaW5rU2hvcC1yaWdodFwiOiAzNCxcclxuXHRcdFwiYXJyb3dVcFwiOiAzNSxcclxuXHRcdFwiYXJyb3dEb3duXCI6IDM2LFxyXG5cdFx0XCJhcnJvd0xlZnRcIjogMzcsXHJcblx0XHRcImFycm93UmlnaHRcIjogMzgsXHJcblx0XHRcImxpZ2h0XCI6IDM5LFxyXG5cdFx0XCJkYXJrTGlnaHRcIjogNDAsXHJcblx0XHRcInNraVwiOiA0MSxcclxuXHRcdFwiZmxvd2VyXCI6IDQyLFxyXG5cdFx0XCJib3hcIjogNDMsXHJcblx0XHRcImJveGVkXCI6IDQ0XHJcblx0fSxcclxuXHRcImFuaW1hdGVzXCI6IHtcclxuXHRcdFwic3RhclwiOiAwLFxyXG5cdFx0XCJsYXZhXCI6IDEsXHJcblx0XHRcImJsdWVXYXRlclwiOiAyLFxyXG5cdFx0XCJ3YXRlclwiOiAzLFxyXG5cdFx0XCJ5ZWxsb3dEb29yXCI6IDQsXHJcblx0XHRcImJsdWVEb29yXCI6IDUsXHJcblx0XHRcInJlZERvb3JcIjogNixcclxuXHRcdFwiZ3JlZW5Eb29yXCI6IDcsXHJcblx0XHRcInNwZWNpYWxEb29yXCI6IDgsXHJcblx0XHRcInN0ZWVsRG9vclwiOiA5LFxyXG5cdFx0XCJ5ZWxsb3dXYWxsXCI6IDEwLFxyXG5cdFx0XCJ3aGl0ZVdhbGxcIjogMTEsXHJcblx0XHRcImJsdWVXYWxsXCI6IDEyLFxyXG5cdFx0XCJjcnlzdGFsVXBcIjogMTMsXHJcblx0XHRcImNyeXN0YWxCb3R0b21cIjogMTQsXHJcblx0XHRcInN0YXJQb3J0YWxcIjogMTUsXHJcblx0XHRcImZpcmVcIjogMTYsXHJcblx0XHRcInBvcnRhbFwiOiAxNyxcclxuXHRcdFwic3dpdGNoXCI6IDE4LFxyXG5cdFx0XCJsYXZhTmV0XCI6IDE5LFxyXG5cdFx0XCJwb2lzb25OZXRcIjogMjAsXHJcblx0XHRcIndlYWtOZXRcIjogMjEsXHJcblx0XHRcImN1cnNlTmV0XCI6IDIyLFxyXG5cdFx0XCJkb3duUG9ydGFsXCI6IDIzLFxyXG5cdFx0XCJsZWZ0UG9ydGFsXCI6IDI0LFxyXG5cdFx0XCJyaWdodFBvcnRhbFwiOiAyNSxcclxuXHRcdFwidXBQb3J0YWxcIjogMjZcclxuXHR9LFxyXG5cdFwibnBjc1wiOiB7XHJcblx0XHRcIm1hblwiOiAwLFxyXG5cdFx0XCJ3b21hblwiOiAxLFxyXG5cdFx0XCJ0aGllZlwiOiAyLFxyXG5cdFx0XCJmYWlyeVwiOiAzLFxyXG5cdFx0XCJtYWdpY2lhblwiOiA0LFxyXG5cdFx0XCJ3b21hbk1hZ2ljaWFuXCI6IDUsXHJcblx0XHRcIm9sZE1hblwiOiA2LFxyXG5cdFx0XCJjaGlsZFwiOiA3LFxyXG5cdFx0XCJ3b29kXCI6IDgsXHJcblx0XHRcInBpbmtTaG9wXCI6IDksXHJcblx0XHRcImJsdWVTaG9wXCI6IDEwLFxyXG5cdFx0XCJwcmluY2Vzc1wiOiAxMSxcclxuXHRcdFwid2x0XCI6IDEyLFxyXG5cdFx0XCJ3dFwiOiAxMyxcclxuXHRcdFwid3J0XCI6IDE0LFxyXG5cdFx0XCJ3bFwiOiAxNSxcclxuXHRcdFwid2NcIjogMTYsXHJcblx0XHRcIndyXCI6IDE3LFxyXG5cdFx0XCJ3bGJcIjogMTgsXHJcblx0XHRcIndyYlwiOiAxOSxcclxuXHRcdFwiZGx0XCI6IDIwLFxyXG5cdFx0XCJkdFwiOiAyMSxcclxuXHRcdFwiZHJ0XCI6IDIyLFxyXG5cdFx0XCJkbFwiOiAyMyxcclxuXHRcdFwiZGNcIjogMjQsXHJcblx0XHRcImRyXCI6IDI1LFxyXG5cdFx0XCJkbGJcIjogMjYsXHJcblx0XHRcImRyYlwiOiAyN1xyXG5cdH0sXHJcblx0XCJucGM0OFwiOiB7XHJcblx0XHRcIm5wYzBcIjogMCxcclxuXHRcdFwibnBjMVwiOiAxLFxyXG5cdFx0XCJucGMyXCI6IDIsXHJcblx0XHRcIm5wYzNcIjogM1xyXG5cdH0sXHJcblx0XCJlbmVteXNcIjoge1xyXG5cdFx0XCJncmVlblNsaW1lXCI6IDAsXHJcblx0XHRcInJlZFNsaW1lXCI6IDEsXHJcblx0XHRcImJsYWNrU2xpbWVcIjogMixcclxuXHRcdFwic2xpbWVsb3JkXCI6IDMsXHJcblx0XHRcImJhdFwiOiA0LFxyXG5cdFx0XCJiaWdCYXRcIjogNSxcclxuXHRcdFwicmVkQmF0XCI6IDYsXHJcblx0XHRcInZhbXBpcmVcIjogNyxcclxuXHRcdFwic2tlbGV0b25cIjogOCxcclxuXHRcdFwic2tlbGV0b25Tb2lsZGVyXCI6IDksXHJcblx0XHRcInNrZWxldG9uQ2FwdGFpblwiOiAxMCxcclxuXHRcdFwiZ2hvc3RTa2VsZXRvblwiOiAxMSxcclxuXHRcdFwiem9tYmllXCI6IDEyLFxyXG5cdFx0XCJ6b21iaWVLbmlnaHRcIjogMTMsXHJcblx0XHRcInJvY2tcIjogMTQsXHJcblx0XHRcInNsaW1lTWFuXCI6IDE1LFxyXG5cdFx0XCJibHVlUHJpZXN0XCI6IDE2LFxyXG5cdFx0XCJyZWRQcmllc3RcIjogMTcsXHJcblx0XHRcImJyb3duV2l6YXJkXCI6IDE4LFxyXG5cdFx0XCJyZWRXaXphcmRcIjogMTksXHJcblx0XHRcInllbGxvd0d1YXJkXCI6IDIwLFxyXG5cdFx0XCJibHVlR3VhcmRcIjogMjEsXHJcblx0XHRcInJlZEd1YXJkXCI6IDIyLFxyXG5cdFx0XCJzd29yZHNtYW5cIjogMjMsXHJcblx0XHRcInNvbGRpZXJcIjogMjQsXHJcblx0XHRcInllbGxvd0tuaWdodFwiOiAyNSxcclxuXHRcdFwicmVkS25pZ2h0XCI6IDI2LFxyXG5cdFx0XCJkYXJrS25pZ2h0XCI6IDI3LFxyXG5cdFx0XCJibGFja0tpbmdcIjogMjgsXHJcblx0XHRcInllbGxvd0tpbmdcIjogMjksXHJcblx0XHRcImdyZWVuS2luZ1wiOiAzMCxcclxuXHRcdFwiYmx1ZUtuaWdodFwiOiAzMSxcclxuXHRcdFwiZ29sZFNsaW1lXCI6IDMyLFxyXG5cdFx0XCJwb2lzb25Ta2VsZXRvblwiOiAzMyxcclxuXHRcdFwicG9pc29uQmF0XCI6IDM0LFxyXG5cdFx0XCJzdGVlbFJvY2tcIjogMzUsXHJcblx0XHRcInNrZWxldG9uUHJpZXN0XCI6IDM2LFxyXG5cdFx0XCJza2VsZXRvbktpbmdcIjogMzcsXHJcblx0XHRcInNrZWxldG9uV2l6YXJkXCI6IDM4LFxyXG5cdFx0XCJyZWRTa2VsZXRvbkNhcHRpb25cIjogMzksXHJcblx0XHRcImJhZEhlcm9cIjogNDAsXHJcblx0XHRcImRlbW9uXCI6IDQxLFxyXG5cdFx0XCJkZW1vblByaWVzdFwiOiA0MixcclxuXHRcdFwiZ29sZEhvcm5TbGltZVwiOiA0MyxcclxuXHRcdFwicmVkS2luZ1wiOiA0NCxcclxuXHRcdFwid2hpdGVLaW5nXCI6IDQ1LFxyXG5cdFx0XCJibGFja01hZ2ljaWFuXCI6IDQ2LFxyXG5cdFx0XCJzaWx2ZXJTbGltZVwiOiA0NyxcclxuXHRcdFwic3dvcmRFbXBlcm9yXCI6IDQ4LFxyXG5cdFx0XCJ3aGl0ZUhvcm5TbGltZVwiOiA0OSxcclxuXHRcdFwiYmFkUHJpbmNlc3NcIjogNTAsXHJcblx0XHRcImJhZEZhaXJ5XCI6IDUxLFxyXG5cdFx0XCJncmF5UHJpZXN0XCI6IDUyLFxyXG5cdFx0XCJyZWRTd29yZHNtYW5cIjogNTMsXHJcblx0XHRcIndoaXRlR2hvc3RcIjogNTQsXHJcblx0XHRcInBvaXNvblpvbWJpZVwiOiA1NSxcclxuXHRcdFwibWFnaWNEcmFnb25cIjogNTYsXHJcblx0XHRcIm9jdG9wdXNcIjogNTcsXHJcblx0XHRcImRhcmtGYWlyeVwiOiA1OCxcclxuXHRcdFwiZ3JlZW5LbmlnaHRcIjogNTlcclxuXHR9LFxyXG5cdFwiZW5lbXk0OFwiOiB7XHJcblx0XHRcImFuZ2VsXCI6IDAsXHJcblx0XHRcImVsZW1lbnRhbFwiOiAxLFxyXG5cdFx0XCJzdGVlbEd1YXJkXCI6IDIsXHJcblx0XHRcImV2aWxCYXRcIjogM1xyXG5cdH0sXHJcblx0XCJpdGVtc1wiOiB7XHJcblx0XHRcInllbGxvd0tleVwiOiAwLFxyXG5cdFx0XCJibHVlS2V5XCI6IDEsXHJcblx0XHRcInJlZEtleVwiOiAyLFxyXG5cdFx0XCJncmVlbktleVwiOiAzLFxyXG5cdFx0XCJzdGVlbEtleVwiOiA0LFxyXG5cdFx0XCJiaWdLZXlcIjogNixcclxuXHRcdFwicmVkSmV3ZWxcIjogMTYsXHJcblx0XHRcImJsdWVKZXdlbFwiOiAxNyxcclxuXHRcdFwiZ3JlZW5KZXdlbFwiOiAxOCxcclxuXHRcdFwieWVsbG93SmV3ZWxcIjogMTksXHJcblx0XHRcInJlZFBvdGlvblwiOiAyMCxcclxuXHRcdFwiYmx1ZVBvdGlvblwiOiAyMSxcclxuXHRcdFwiZ3JlZW5Qb3Rpb25cIjogMjIsXHJcblx0XHRcInllbGxvd1BvdGlvblwiOiAyMyxcclxuXHRcdFwibGlmZVdhbmRcIjogMzMsXHJcblx0XHRcInN3b3JkMFwiOiA2MCxcclxuXHRcdFwic3dvcmQxXCI6IDUwLFxyXG5cdFx0XCJzd29yZDJcIjogNTEsXHJcblx0XHRcInN3b3JkM1wiOiA1MixcclxuXHRcdFwic3dvcmQ0XCI6IDUzLFxyXG5cdFx0XCJzd29yZDVcIjogNTQsXHJcblx0XHRcInNoaWVsZDBcIjogNjEsXHJcblx0XHRcInNoaWVsZDFcIjogNTUsXHJcblx0XHRcInNoaWVsZDJcIjogNTYsXHJcblx0XHRcInNoaWVsZDNcIjogNTcsXHJcblx0XHRcInNoaWVsZDRcIjogNTgsXHJcblx0XHRcInNoaWVsZDVcIjogNTksXHJcblx0XHRcImJvb2tcIjogOSxcclxuXHRcdFwiZmx5XCI6IDEyLFxyXG5cdFx0XCJwaWNrYXhlXCI6IDQ1LFxyXG5cdFx0XCJpY2VQaWNrYXhlXCI6IDQ0LFxyXG5cdFx0XCJib21iXCI6IDQzLFxyXG5cdFx0XCJjZW50ZXJGbHlcIjogMTMsXHJcblx0XHRcInVwRmx5XCI6IDE1LFxyXG5cdFx0XCJkb3duRmx5XCI6IDE0LFxyXG5cdFx0XCJjb2luXCI6IDExLFxyXG5cdFx0XCJzbm93XCI6IDQxLFxyXG5cdFx0XCJjcm9zc1wiOiA0MCxcclxuXHRcdFwic3VwZXJQb3Rpb25cIjogMjksXHJcblx0XHRcImVhcnRocXVha2VcIjogOCxcclxuXHRcdFwicG9pc29uV2luZVwiOiAyNCxcclxuXHRcdFwid2Vha1dpbmVcIjogMjUsXHJcblx0XHRcImN1cnNlV2luZVwiOiAyNyxcclxuXHRcdFwic3VwZXJXaW5lXCI6IDI4LFxyXG5cdFx0XCJrbmlmZVwiOiA0MixcclxuXHRcdFwibW9uZXlQb2NrZXRcIjogNDYsXHJcblx0XHRcInNob2VzXCI6IDQ3LFxyXG5cdFx0XCJoYW1tZXJcIjogNDgsXHJcblx0XHRcImp1bXBTaG9lc1wiOiA0OSxcclxuXHRcdFwic2tpbGwxXCI6IDMwLFxyXG5cdFx0XCJ3YW5kXCI6IDEwXHJcblx0fSxcclxuXHRcImF1dG90aWxlXCI6IHtcclxuXHRcdFwiYXV0b3RpbGVcIjogMCxcclxuXHRcdFwiYXV0b3RpbGUxXCI6IDAsXHJcblx0XHRcImF1dG90aWxlMlwiOiAwLFxyXG5cdFx0XCJhdXRvdGlsZTNcIjogMFxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgdmFyIG1hcHNfOTBmMzY3NTJfODgxNV80YmU4X2IzMmJfZDdmYWQxZDA1NDJlID0gXHJcbntcclxuXHRcIjFcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInllbGxvd1dhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXHJcblx0XCIyXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ3aGl0ZVdhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXHJcblx0XCIzXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJibHVlV2FsbFwiLFwiY2FuQnJlYWtcIjp0cnVlfSxcclxuXHRcIjRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInN0YXJcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiNVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwibGF2YVwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCI2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJpY2VcIn0sXHJcblx0XCI3XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJibHVlU2hvcC1sZWZ0XCJ9LFxyXG5cdFwiOFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVNob3AtcmlnaHRcIn0sXHJcblx0XCI5XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJwaW5rU2hvcC1sZWZ0XCJ9LFxyXG5cdFwiMTBcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInBpbmtTaG9wLXJpZ2h0XCJ9LFxyXG5cdFwiMTFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxhdmFOZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcclxuXHRcIjEyXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJwb2lzb25OZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcclxuXHRcIjEzXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ3ZWFrTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3Vyc2VOZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcclxuXHRcIjE1XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJibHVlV2F0ZXJcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTZcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcIndhdGVyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjIwXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZVwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIyMVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93S2V5XCJ9LFxyXG5cdFwiMjJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVLZXlcIn0sXHJcblx0XCIyM1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkS2V5XCJ9LFxyXG5cdFwiMjRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImdyZWVuS2V5XCJ9LFxyXG5cdFwiMjVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN0ZWVsS2V5XCJ9LFxyXG5cdFwiMjZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJpZ0tleVwifSxcclxuXHRcIjI3XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJyZWRKZXdlbFwifSxcclxuXHRcIjI4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJibHVlSmV3ZWxcIn0sXHJcblx0XCIyOVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5KZXdlbFwifSxcclxuXHRcIjMwXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ5ZWxsb3dKZXdlbFwifSxcclxuXHRcIjMxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJyZWRQb3Rpb25cIn0sXHJcblx0XCIzMlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYmx1ZVBvdGlvblwifSxcclxuXHRcIjMzXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJncmVlblBvdGlvblwifSxcclxuXHRcIjM0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ5ZWxsb3dQb3Rpb25cIn0sXHJcblx0XCIzNVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQxXCJ9LFxyXG5cdFwiMzZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDFcIn0sXHJcblx0XCIzN1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQyXCJ9LFxyXG5cdFwiMzhcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDJcIn0sXHJcblx0XCIzOVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQzXCJ9LFxyXG5cdFwiNDBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDNcIn0sXHJcblx0XCI0MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQ0XCJ9LFxyXG5cdFwiNDJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDRcIn0sXHJcblx0XCI0M1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQ1XCJ9LFxyXG5cdFwiNDRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDVcIn0sXHJcblx0XCI0NVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYm9va1wifSxcclxuXHRcIjQ2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJmbHlcIn0sXHJcblx0XCI0N1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicGlja2F4ZVwifSxcclxuXHRcIjQ4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJpY2VQaWNrYXhlXCJ9LFxyXG5cdFwiNDlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJvbWJcIn0sXHJcblx0XCI1MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY2VudGVyRmx5XCJ9LFxyXG5cdFwiNTFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInVwRmx5XCJ9LFxyXG5cdFwiNTJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImRvd25GbHlcIn0sXHJcblx0XCI1M1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY29pblwifSxcclxuXHRcIjU0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzbm93XCJ9LFxyXG5cdFwiNTVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNyb3NzXCJ9LFxyXG5cdFwiNTZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN1cGVyUG90aW9uXCJ9LFxyXG5cdFwiNTdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImVhcnRocXVha2VcIn0sXHJcblx0XCI1OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicG9pc29uV2luZVwifSxcclxuXHRcIjU5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ3ZWFrV2luZVwifSxcclxuXHRcIjYwXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJjdXJzZVdpbmVcIn0sXHJcblx0XCI2MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3VwZXJXaW5lXCJ9LFxyXG5cdFwiNjJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImtuaWZlXCJ9LFxyXG5cdFwiNjNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcIm1vbmV5UG9ja2V0XCJ9LFxyXG5cdFwiNjRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNob2VzXCJ9LFxyXG5cdFwiNjVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImhhbW1lclwifSxcclxuXHRcIjY4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJsaWZlV2FuZFwifSxcclxuXHRcIjY5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJqdW1wU2hvZXNcIn0sXHJcblx0XCI3MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQwXCJ9LFxyXG5cdFwiNzFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDBcIn0sXHJcblx0XCI3MlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2tpbGwxXCJ9LFxyXG5cdFwiNzNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcIndhbmRcIn0sXHJcblx0XCI4MVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwieWVsbG93RG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXHJcblx0XCI4MlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZURvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODNcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInJlZERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODRcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImdyZWVuRG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXHJcblx0XCI4NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwic3BlY2lhbERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODZcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInN0ZWVsRG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXHJcblx0XCI4N1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwidXBGbG9vclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiODhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImRvd25GbG9vclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiODlcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiOTBcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInN0YXJQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkxXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ1cFBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiOTJcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxlZnRQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkzXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJkb3duUG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCI5NFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwicmlnaHRQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjEwMVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3J5c3RhbFVwXCJ9LFxyXG5cdFwiMTAyXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJjcnlzdGFsQm90dG9tXCJ9LFxyXG5cdFwiMTAzXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJmaXJlXCJ9LFxyXG5cdFwiMTA0XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzd2l0Y2hcIn0sXHJcblx0XCIxMjFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwibWFuXCJ9LFxyXG5cdFwiMTIyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvbWFuXCJ9LFxyXG5cdFwiMTIzXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInRoaWVmXCJ9LFxyXG5cdFwiMTI0XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImZhaXJ5XCJ9LFxyXG5cdFwiMTI1XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm1hZ2ljaWFuXCJ9LFxyXG5cdFwiMTI2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvbWFuTWFnaWNpYW5cIn0sXHJcblx0XCIxMjdcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwib2xkTWFuXCJ9LFxyXG5cdFwiMTI4XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImNoaWxkXCJ9LFxyXG5cdFwiMTI5XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvb2RcIn0sXHJcblx0XCIxMzBcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwicGlua1Nob3BcIn0sXHJcblx0XCIxMzFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiYmx1ZVNob3BcIn0sXHJcblx0XCIxMzJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwicHJpbmNlc3NcIn0sXHJcblx0XCIxMzNcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzBcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxyXG5cdFwiMTM0XCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMxXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcclxuXHRcIjEzNVwiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjMlwiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXHJcblx0XCIxMzZcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzNcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxyXG5cdFwiMTUxXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZTFcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTUyXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZTJcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTUzXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZTNcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTYxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd1VwXCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcImxlZnRcIixcInJpZ2h0XCIsXCJkb3duXCJdLFwiY2Fubm90SW5cIjpbXCJkb3duXCJdfSxcclxuXHRcIjE2MlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYXJyb3dEb3duXCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcImxlZnRcIixcInJpZ2h0XCIsXCJ1cFwiXSxcImNhbm5vdEluXCI6W1widXBcIl19LFxyXG5cdFwiMTYzXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd0xlZnRcIixcIm5vUGFzc1wiOmZhbHNlLFwiY2Fubm90T3V0XCI6W1widXBcIixcImRvd25cIixcInJpZ2h0XCJdLFwiY2Fubm90SW5cIjpbXCJyaWdodFwiXX0sXHJcblx0XCIxNjRcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93UmlnaHRcIixcIm5vUGFzc1wiOmZhbHNlLFwiY2Fubm90T3V0XCI6W1widXBcIixcImRvd25cIixcImxlZnRcIl0sXCJjYW5ub3RJblwiOltcImxlZnRcIl19LFxyXG5cdFwiMTY1XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJsaWdodFwiLFwidHJpZ2dlclwiOlwiY2hhbmdlTGlnaHRcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjE2NlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiZGFya0xpZ2h0XCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE2N1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwic2tpXCIsXCJ0cmlnZ2VyXCI6XCJza2lcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjE2OFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiZmxvd2VyXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxNjlcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJveFwiLFwidHJpZ2dlclwiOlwicHVzaEJveFwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIxNzBcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJveGVkXCIsXCJ0cmlnZ2VyXCI6XCJwdXNoQm94XCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE4MVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bHRcIn0sXHJcblx0XCIxODJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3RcIn0sXHJcblx0XCIxODNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3J0XCJ9LFxyXG5cdFwiMTg0XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndsXCJ9LFxyXG5cdFwiMTg1XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndjXCJ9LFxyXG5cdFwiMTg2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndyXCJ9LFxyXG5cdFwiMTg3XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndsYlwifSxcclxuXHRcIjE4OFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3cmJcIn0sXHJcblx0XCIxODlcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGx0XCJ9LFxyXG5cdFwiMTkwXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImR0XCJ9LFxyXG5cdFwiMTkxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRydFwifSxcclxuXHRcIjE5MlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbFwifSxcclxuXHRcIjE5M1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkY1wifSxcclxuXHRcIjE5NFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkclwifSxcclxuXHRcIjE5NVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbGJcIn0sXHJcblx0XCIxOTZcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZHJiXCJ9LFxyXG5cdFwiMjAxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZ3JlZW5TbGltZVwifSxcclxuXHRcIjIwMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFNsaW1lXCJ9LFxyXG5cdFwiMjAzXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmxhY2tTbGltZVwifSxcclxuXHRcIjIwNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNsaW1lbG9yZFwifSxcclxuXHRcIjIwNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhdFwifSxcclxuXHRcIjIwNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJpZ0JhdFwifSxcclxuXHRcIjIwN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEJhdFwifSxcclxuXHRcIjIwOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInZhbXBpcmVcIn0sXHJcblx0XCIyMDlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvblwifSxcclxuXHRcIjIxMFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uU29pbGRlclwifSxcclxuXHRcIjIxMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uQ2FwdGFpblwifSxcclxuXHRcIjIxMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdob3N0U2tlbGV0b25cIn0sXHJcblx0XCIyMTNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ6b21iaWVcIn0sXHJcblx0XCIyMTRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ6b21iaWVLbmlnaHRcIn0sXHJcblx0XCIyMTVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyb2NrXCJ9LFxyXG5cdFwiMjE2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2xpbWVNYW5cIn0sXHJcblx0XCIyMTdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlUHJpZXN0XCJ9LFxyXG5cdFwiMjE4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkUHJpZXN0XCJ9LFxyXG5cdFwiMjE5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYnJvd25XaXphcmRcIn0sXHJcblx0XCIyMjBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRXaXphcmRcIn0sXHJcblx0XCIyMjFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dHdWFyZFwifSxcclxuXHRcIjIyMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsdWVHdWFyZFwifSxcclxuXHRcIjIyM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEd1YXJkXCJ9LFxyXG5cdFwiMjI0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3dvcmRzbWFuXCJ9LFxyXG5cdFwiMjI1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic29sZGllclwifSxcclxuXHRcIjIyNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInllbGxvd0tuaWdodFwifSxcclxuXHRcIjIyN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEtuaWdodFwifSxcclxuXHRcIjIyOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImRhcmtLbmlnaHRcIn0sXHJcblx0XCIyMjlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibGFja0tpbmdcIn0sXHJcblx0XCIyMzBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dLaW5nXCJ9LFxyXG5cdFwiMjMxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZ3JlZW5LaW5nXCJ9LFxyXG5cdFwiMjMyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmx1ZUtuaWdodFwifSxcclxuXHRcIjIzM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdvbGRTbGltZVwifSxcclxuXHRcIjIzNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInBvaXNvblNrZWxldG9uXCJ9LFxyXG5cdFwiMjM1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicG9pc29uQmF0XCJ9LFxyXG5cdFwiMjM2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3RlZWxSb2NrXCJ9LFxyXG5cdFwiMjM3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25Qcmllc3RcIn0sXHJcblx0XCIyMzhcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbktpbmdcIn0sXHJcblx0XCIyMzlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbldpemFyZFwifSxcclxuXHRcIjI0MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFNrZWxldG9uQ2FwdGlvblwifSxcclxuXHRcIjI0MVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZEhlcm9cIn0sXHJcblx0XCIyNDJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblwifSxcclxuXHRcIjI0M1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImRlbW9uUHJpZXN0XCJ9LFxyXG5cdFwiMjQ0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZ29sZEhvcm5TbGltZVwifSxcclxuXHRcIjI0NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEtpbmdcIn0sXHJcblx0XCIyNDZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ3aGl0ZUtpbmdcIn0sXHJcblx0XCIyNDdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibGFja01hZ2ljaWFuXCJ9LFxyXG5cdFwiMjQ4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2lsdmVyU2xpbWVcIn0sXHJcblx0XCIyNDlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzd29yZEVtcGVyb3JcIn0sXHJcblx0XCIyNTBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ3aGl0ZUhvcm5TbGltZVwifSxcclxuXHRcIjI1MVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZFByaW5jZXNzXCJ9LFxyXG5cdFwiMjUyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmFkRmFpcnlcIn0sXHJcblx0XCIyNTNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJncmF5UHJpZXN0XCJ9LFxyXG5cdFwiMjU0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkU3dvcmRzbWFuXCJ9LFxyXG5cdFwiMjU1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVHaG9zdFwifSxcclxuXHRcIjI1NlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInBvaXNvblpvbWJpZVwifSxcclxuXHRcIjI1N1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm1hZ2ljRHJhZ29uXCJ9LFxyXG5cdFwiMjU4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwib2N0b3B1c1wifSxcclxuXHRcIjI1OVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImRhcmtGYWlyeVwifSxcclxuXHRcIjI2MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS25pZ2h0XCJ9LFxyXG5cdFwiMjYxXCI6IHtcImNsc1wiOlwiZW5lbXk0OFwiLFwiaWRcIjpcImFuZ2VsXCJ9LFxyXG5cdFwiMjYyXCI6IHtcImNsc1wiOlwiZW5lbXk0OFwiLFwiaWRcIjpcImVsZW1lbnRhbFwifSxcclxuXHRcIjI2M1wiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJzdGVlbEd1YXJkXCJ9LFxyXG5cdFwiMjY0XCI6IHtcImNsc1wiOlwiZW5lbXk0OFwiLFwiaWRcIjpcImV2aWxCYXRcIn1cclxufSIsImV4cG9ydCB2YXIgZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQgPSBcclxue1xyXG5cdFwibWFpblwiOiB7XHJcblx0XHRcImZsb29ySWRzXCI6IFtcclxuXHRcdFx0XCJzYW1wbGUwXCIsXHJcblx0XHRcdFwic2FtcGxlMVwiLFxyXG5cdFx0XHRcInNhbXBsZTJcIixcclxuXHRcdFx0XCJzYW1wbGUzXCIsXHJcblx0XHRcdFwiTVQwXCJcclxuXHRcdF0sXHJcblx0XHRcImltYWdlc1wiOiBbXHJcblx0XHRcdFwiYmcuanBnXCIsXHJcblx0XHRcdFwid2luc2tpbi5wbmdcIlxyXG5cdFx0XSxcclxuXHRcdFwidGlsZXNldHNcIjogW1xyXG5cdFx0XHRcIm1hZ2ljdG93ZXIucG5nXCJcclxuXHRcdF0sXHJcblx0XHRcImFuaW1hdGVzXCI6IFtcclxuXHRcdFx0XCJoYW5kXCIsXHJcblx0XHRcdFwic3dvcmRcIixcclxuXHRcdFx0XCJ6b25lXCJcclxuXHRcdF0sXHJcblx0XHRcImJnbXNcIjogW1xyXG5cdFx0XHRcImJnbS5tcDNcIlxyXG5cdFx0XSxcclxuXHRcdFwic291bmRzXCI6IFtcclxuXHRcdFx0XCJmbG9vci5tcDNcIixcclxuXHRcdFx0XCJhdHRhY2subXAzXCIsXHJcblx0XHRcdFwiZG9vci5tcDNcIixcclxuXHRcdFx0XCJpdGVtLm1wM1wiLFxyXG5cdFx0XHRcImVxdWlwLm1wM1wiLFxyXG5cdFx0XHRcInpvbmUubXAzXCIsXHJcblx0XHRcdFwianVtcC5tcDNcIixcclxuXHRcdFx0XCJwaWNrYXhlLm1wM1wiLFxyXG5cdFx0XHRcImJvbWIubXAzXCIsXHJcblx0XHRcdFwiY2VudGVyRmx5Lm1wM1wiXHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lTWFwXCI6IHtcclxuXHRcdFx0XCLog4zmma/lm74uanBnXCI6IFwiYmcuanBnXCIsXHJcblx0XHRcdFwi6IOM5pmv6Z+z5LmQLm1wM1wiOiBcImJnbS5tcDNcIlxyXG5cdFx0fSxcclxuXHRcdFwic3RhcnRCYWNrZ3JvdW5kXCI6IFwiYmcuanBnXCIsXHJcblx0XHRcInN0YXJ0TG9nb1N0eWxlXCI6IFwiY29sb3I6IGJsYWNrXCIsXHJcblx0XHRcImxldmVsQ2hvb3NlXCI6IFtcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi566A5Y2VXCIsXHJcblx0XHRcdFx0XCJFYXN5XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi5pmu6YCaXCIsXHJcblx0XHRcdFx0XCJOb3JtYWxcIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCLlm7Dpmr5cIixcclxuXHRcdFx0XHRcIkhhcmRcIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCLlmanmoqZcIixcclxuXHRcdFx0XHRcIkhlbGxcIlxyXG5cdFx0XHRdXHJcblx0XHRdLFxyXG5cdFx0XCJlcXVpcE5hbWVcIjogW1xyXG5cdFx0XHRcIuatpuWZqFwiLFxyXG5cdFx0XHRcIuebvueJjFwiXHJcblx0XHRdLFxyXG5cdFx0XCJzdGFydEJnbVwiOiBudWxsLFxyXG5cdFx0XCJzdGF0dXNMZWZ0QmFja2dyb3VuZFwiOiBudWxsLFxyXG5cdFx0XCJzdGF0dXNUb3BCYWNrZ3JvdW5kXCI6IFwidXJsKHByb2plY3QvaW1hZ2VzL2dyb3VuZC5wbmcpIHJlcGVhdFwiLFxyXG5cdFx0XCJ0b29sc0JhY2tncm91bmRcIjogXCJ1cmwocHJvamVjdC9pbWFnZXMvZ3JvdW5kLnBuZykgcmVwZWF0XCIsXHJcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxyXG5cdFx0XCJzdGF0dXNCYXJDb2xvclwiOiBcIndoaXRlXCIsXHJcblx0XHRcImhhcmRMYWJlbENvbG9yXCI6IFwicmVkXCIsXHJcblx0XHRcImZsb29yQ2hhbmdpbmdCYWNrZ3JvdW5kXCI6IFwiYmxhY2tcIixcclxuXHRcdFwiZmxvb3JDaGFuZ2luZ1RleHRDb2xvclwiOiBcIndoaXRlXCIsXHJcblx0XHRcImZvbnRcIjogXCJWZXJkYW5hXCIsXHJcblx0XHRcInN0YXJ0QnV0dG9uc1N0eWxlXCI6IFwiYmFja2dyb3VuZC1jb2xvcjogIzMyMzY5Rjsgb3BhY2l0eTogMC44NTsgY29sb3I6ICNGRkZGRkY7IGJvcmRlcjogI0ZGRkZGRiAycHggc29saWQ7IGNhcmV0LWNvbG9yOiAjRkZENzAwO1wiXHJcblx0fSxcclxuXHRcImZpcnN0RGF0YVwiOiB7XHJcblx0XHRcInRpdGxlXCI6IFwi6a2U5aGU5qC35p2/XCIsXHJcblx0XHRcIm5hbWVcIjogXCJ0ZW1wbGF0ZVwiLFxyXG5cdFx0XCJ2ZXJzaW9uXCI6IFwiVmVyIDIuNi42XCIsXHJcblx0XHRcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcblx0XHRcImhlcm9cIjoge1xyXG5cdFx0XHRcIm5hbWVcIjogXCLpmLPlhYlcIixcclxuXHRcdFx0XCJsdlwiOiAxLFxyXG5cdFx0XHRcImhwbWF4XCI6IDk5OTksXHJcblx0XHRcdFwiaHBcIjogMTAwMCxcclxuXHRcdFx0XCJtYW5hbWF4XCI6IC0xLFxyXG5cdFx0XHRcIm1hbmFcIjogMCxcclxuXHRcdFx0XCJhdGtcIjogMTAwLFxyXG5cdFx0XHRcImRlZlwiOiAxMDAsXHJcblx0XHRcdFwibWRlZlwiOiAwLFxyXG5cdFx0XHRcIm1vbmV5XCI6IDAsXHJcblx0XHRcdFwiZXhwZXJpZW5jZVwiOiAwLFxyXG5cdFx0XHRcImVxdWlwbWVudFwiOiBbXSxcclxuXHRcdFx0XCJpdGVtc1wiOiB7XHJcblx0XHRcdFx0XCJrZXlzXCI6IHtcclxuXHRcdFx0XHRcdFwieWVsbG93S2V5XCI6IDAsXHJcblx0XHRcdFx0XHRcImJsdWVLZXlcIjogMCxcclxuXHRcdFx0XHRcdFwicmVkS2V5XCI6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiY29uc3RhbnRzXCI6IHt9LFxyXG5cdFx0XHRcdFwidG9vbHNcIjoge30sXHJcblx0XHRcdFx0XCJlcXVpcHNcIjoge31cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NcIjoge1xyXG5cdFx0XHRcdFwiZGlyZWN0aW9uXCI6IFwidXBcIixcclxuXHRcdFx0XHRcInhcIjogNixcclxuXHRcdFx0XHRcInlcIjogMTBcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJmbGFnc1wiOiB7fSxcclxuXHRcdFx0XCJzdGVwc1wiOiAwXHJcblx0XHR9LFxyXG5cdFx0XCJzdGFydENhbnZhc1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Zyo6L+Z6YeM5Y+v5Lul55So5LqL5Lu25p2l6Ieq5a6a5LmJ57uY5Yi25qCH6aKY55WM6Z2i55qE6IOM5pmv5Zu+562JXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcInRleHRcIjogXCLkuZ/lj6/ku6Xnm7TmjqXliIfmjaLliLDlhbbku5bmpbzlsYLvvIjmr5TlpoLmn5DkuKrlvIDlp4vliafmg4XmpbzlsYLvvInov5vooYzmk43kvZzjgIJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwic2hvd0ltYWdlXCIsXHJcblx0XHRcdFx0XCJjb2RlXCI6IDEsXHJcblx0XHRcdFx0XCJpbWFnZVwiOiBcImJnLmpwZ1wiLFxyXG5cdFx0XHRcdFwibG9jXCI6IFtcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImR3XCI6IDEwMCxcclxuXHRcdFx0XHRcImRoXCI6IDEwMCxcclxuXHRcdFx0XHRcIm9wYWNpdHlcIjogMSxcclxuXHRcdFx0XHRcInRpbWVcIjogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwid2hpbGVcIixcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcIjFcIixcclxuXHRcdFx0XHRcImRhdGFcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIue7meeUqOaIt+aPkOS+m+mAieaLqemhue+8jOi/memHjOeugOWNleeahOS9v+eUqOS6hmNob2ljZXPkuovku7ZcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLkuZ/lj6/ku6XotLTmjInpkq7lm77nhLblkI7kvb/nlKjnrYnlvoXmk43kvZzmnaXlrozmiJBcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY2hvaWNlc1wiLFxyXG5cdFx0XHRcdFx0XHRcImNob2ljZXNcIjogW1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuW8gOWni+a4uOaIj1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuajgOafpWJnbeeKtuaAge+8jOS4i+WQjFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY29udHJvbC5jaGVja0JnbSgpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJpZlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiY29yZS5mbGFncy5zdGFydERpcmVjdGx5XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0cnVlXCI6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLnm7TmjqXlvIDlp4vmuLjmiI/vvIzorr7nva7liJ3lp4vljJbmlbDmja5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxuY29yZS5ldmVudHMuc2V0SW5pdERhdGEoJycpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZhbHNlXCI6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLliqjmgIHnlJ/miJDpmr7luqbpgInmi6npoblcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxudmFyIGNob2ljZXMgPSBbXTtcXG5tYWluLmxldmVsQ2hvb3NlLmZvckVhY2goZnVuY3Rpb24gKG9uZSkge1xcblxcdGNob2ljZXMucHVzaCh7XFxcInRleHRcXFwiOiBvbmVbMF0sIFxcXCJhY3Rpb25cXFwiOiBbXFxuXFx0XFx0e1xcXCJ0eXBlXFxcIjogXFxcImZ1bmN0aW9uXFxcIiwgXFxcImZ1bmN0aW9uXFxcIjogXFxcImZ1bmN0aW9uKCkgeyBjb3JlLnN0YXR1cy5oYXJkID0gJ1xcXCIrb25lWzFdK1xcXCInOyBjb3JlLmV2ZW50cy5zZXRJbml0RGF0YSgnXFxcIitvbmVbMV0rXFxcIicpOyB9XFxcIn1cXG5cXHRdfSk7XFxufSlcXG5jb3JlLmluc2VydEFjdGlvbih7XFxcInR5cGVcXFwiOiBcXFwiY2hvaWNlc1xcXCIsIFxcXCJjaG9pY2VzXFxcIjogY2hvaWNlc30pO1xcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImhpZGVJbWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29kZVwiOiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGltZVwiOiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5oiQ5Yqf6YCJ5oup6Zq+5bqmXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImJyZWFrXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6K+75Y+W5a2Y5qGjXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImFjdGlvblwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY29udHJvbC5jaGVja0JnbSgpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi566A5Y2V55qE5L2/55So4oCc5ZG85Ye66K+75qGj55WM6Z2i4oCd5p2l5aSE55CGXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNhbGxMb2FkXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Zue5pS+5b2V5YOPXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImFjdGlvblwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY29udHJvbC5jaGVja0JnbSgpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6L+Z5q615Luj56CB5Lya5by55qGG6YCJ5oup5b2V5YOP5paH5Lu2XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImlmXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb25kaXRpb25cIjogXCIhY29yZS5pc1JlcGxheWluZygpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0cnVlXCI6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxuY29yZS5jaG9vc2VSZXBsYXlGaWxlKClcXG59XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZmFsc2VcIjogW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcInRleHRcIjogXCLmjqXkuIvmnaXkvJrmiafooYxzdGFydFRleHTkuK3nmoTkuovku7ZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJzdGFydFRleHRcIjogW1xyXG5cdFx0XHRcIkhp77yM5qyi6L+O5p2l5YiwIEhUTUw1IOmtlOWhlOagt+adv++8gVxcblxcbuacrOagt+adv+eUseiJvuS5i+iRteWItuS9nO+8jOWPr+S7peiuqeS9oOWcqOS4jeS8muWGmeS7u+S9leS7o+eggVxcbueahOaDheWGteS4i+S5n+iDveWBmuWHuuWxnuS6juiHquW3seeahEg16a2U5aGU77yBXCIsXHJcblx0XHRcdFwi6L+Z6YeM5ri45oiP5byA5aeL5pe255qE5Ymn5oOF44CCXFxu5a6a5LmJ5ZyoZGF0YS5qc+eahHN0YXJ0VGV4dOWkhOOAglxcblxcbuS9oOWPr+S7peWcqOi/memHjOWGmeS4iuiHquW3seeahOWGheWuueOAglwiLFxyXG5cdFx0XHRcIui1tuW/q+adpeivleS4gOivleWQp++8gVwiXHJcblx0XHRdLFxyXG5cdFx0XCJzaG9wc1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImlkXCI6IFwibW9uZXlTaG9wMVwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcIui0quWpquS5i+elnlwiLFxyXG5cdFx0XHRcdFwiaWNvblwiOiBcImJsdWVTaG9wXCIsXHJcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwiMUbph5HluIHllYblupdcIixcclxuXHRcdFx0XHRcImNvbW1vblRpbWVzXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcInVzZVwiOiBcIm1vbmV5XCIsXHJcblx0XHRcdFx0XCJuZWVkXCI6IFwiMjArMTAqdGltZXMqKHRpbWVzKzEpXCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5YuH5pWi55qE5q2m5aOr5ZWK77yM57uZ5oiRJHtuZWVkfemHkeW4geWwseWPr+S7pe+8mlwiLFxyXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIueUn+WRvSs4MDBcIixcclxuXHRcdFx0XHRcdFx0XCJlZmZlY3RcIjogXCJzdGF0dXM6aHArPTgwMFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpZFwiOiBcImV4cFNob3AxXCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwi57uP6aqM5LmL56WeXCIsXHJcblx0XHRcdFx0XCJpY29uXCI6IFwicGlua1Nob3BcIixcclxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCIxRue7j+mqjOWVhuW6l1wiLFxyXG5cdFx0XHRcdFwiY29tbW9uVGltZXNcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwidXNlXCI6IFwiZXhwZXJpZW5jZVwiLFxyXG5cdFx0XHRcdFwibmVlZFwiOiBcIi0xXCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5YuH5pWi55qE5q2m5aOr5ZWK77yM57uZ5oiR6Iul5bmy57uP6aqM5bCx5Y+v5Lul77yaXCIsXHJcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi562J57qnKzFcIixcclxuXHRcdFx0XHRcdFx0XCJuZWVkXCI6IFwiMTAwXCIsXHJcblx0XHRcdFx0XHRcdFwiZWZmZWN0XCI6IFwic3RhdHVzOmhwKz0xMDAwXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImlkXCI6IFwiaXRlbVNob3BcIixcclxuXHRcdFx0XHRcIml0ZW1cIjogdHJ1ZSxcclxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCLpgZPlhbfllYblupdcIixcclxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJpZFwiOiBcInllbGxvd0tleVwiLFxyXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiOiAxMCxcclxuXHRcdFx0XHRcdFx0XCJtb25leVwiOiAxMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaWRcIjogXCJrZXlTaG9wMVwiLFxyXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIuWbnuaUtumSpeWMmeWVhuW6l1wiLFxyXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcImNvbW1vbkV2ZW50XCI6IFwi5Zue5pS26ZKl5YyZ5ZWG5bqXXCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwibGV2ZWxVcFwiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5lZWRcIjogXCIwXCIsXHJcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLmraTlpITmmK/liJ3lp4vnrYnnuqfvvIzlj6rpnIDloavlhpnnp7Dlj7dcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmVlZFwiOiBcIjIwXCIsXHJcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIuesrOS6jOe6p1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RhdHVzOmF0aysxMFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdGF0dXM6ZGVmKzEwXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5lZWRcIjogXCI0MFwiLFxyXG5cdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInRpcFwiLFxyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLmga3llpzljYfnuqdcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0XCJ2YWx1ZXNcIjoge1xyXG5cdFx0XCJsYXZhRGFtYWdlXCI6IDEwMCxcclxuXHRcdFwicG9pc29uRGFtYWdlXCI6IDEwLFxyXG5cdFx0XCJ3ZWFrVmFsdWVcIjogMjAsXHJcblx0XHRcInJlZEpld2VsXCI6IDMsXHJcblx0XHRcImJsdWVKZXdlbFwiOiAzLFxyXG5cdFx0XCJncmVlbkpld2VsXCI6IDUsXHJcblx0XHRcInJlZFBvdGlvblwiOiAxMDAsXHJcblx0XHRcImJsdWVQb3Rpb25cIjogMjUwLFxyXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogNTAwLFxyXG5cdFx0XCJncmVlblBvdGlvblwiOiA4MDAsXHJcblx0XHRcImJyZWFrQXJtb3JcIjogMC45LFxyXG5cdFx0XCJjb3VudGVyQXR0YWNrXCI6IDAuMSxcclxuXHRcdFwicHVyaWZ5XCI6IDMsXHJcblx0XHRcImhhdHJlZFwiOiAyLFxyXG5cdFx0XCJtb3ZlU3BlZWRcIjogMTAwLFxyXG5cdFx0XCJhbmltYXRlU3BlZWRcIjogNDAwLFxyXG5cdFx0XCJmbG9vckNoYW5nZVRpbWVcIjogODAwXHJcblx0fSxcclxuXHRcImZsYWdzXCI6IHtcclxuXHRcdFwiZW5hYmxlRmxvb3JcIjogdHJ1ZSxcclxuXHRcdFwiZW5hYmxlTmFtZVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTHZcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUhQTWF4XCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVNYW5hXCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVNRGVmXCI6IHRydWUsXHJcblx0XHRcImVuYWJsZU1vbmV5XCI6IHRydWUsXHJcblx0XHRcImVuYWJsZUV4cGVyaWVuY2VcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUxldmVsVXBcIjogZmFsc2UsXHJcblx0XHRcImxldmVsVXBMZWZ0TW9kZVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlS2V5c1wiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVQWkZcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZURlYnVmZlwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlU2tpbGxcIjogZmFsc2UsXHJcblx0XHRcImZseU5lYXJTdGFpclwiOiB0cnVlLFxyXG5cdFx0XCJmbHlSZWNvcmRQb3NpdGlvblwiOiBmYWxzZSxcclxuXHRcdFwicGlja2F4ZUZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxyXG5cdFx0XCJib21iRm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXHJcblx0XHRcInNub3dGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcclxuXHRcdFwiYmlnS2V5SXNCb3hcIjogZmFsc2UsXHJcblx0XHRcInN0ZWVsRG9vcldpdGhvdXRLZXlcIjogZmFsc2UsXHJcblx0XHRcIml0ZW1GaXJzdFRleHRcIjogZmFsc2UsXHJcblx0XHRcImVxdWlwbWVudFwiOiBmYWxzZSxcclxuXHRcdFwiZXF1aXBib3hCdXR0b25cIjogZmFsc2UsXHJcblx0XHRcImljb25JbkVxdWlwYm94XCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVBZGRQb2ludFwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTmVnYXRpdmVEYW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcImhhdHJlZERlY3JlYXNlXCI6IHRydWUsXHJcblx0XHRcImJldHdlZW5BdHRhY2tDZWlsXCI6IGZhbHNlLFxyXG5cdFx0XCJiZXR3ZWVuQXR0YWNrTWF4XCI6IGZhbHNlLFxyXG5cdFx0XCJ1c2VMb29wXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGFydFVzaW5nQ2FudmFzXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGFydERpcmVjdGx5XCI6IGZhbHNlLFxyXG5cdFx0XCJzdGF0dXNDYW52YXNcIjogZmFsc2UsXHJcblx0XHRcInN0YXR1c0NhbnZhc1Jvd3NPbk1vYmlsZVwiOiAzLFxyXG5cdFx0XCJkaXNwbGF5RW5lbXlEYW1hZ2VcIjogdHJ1ZSxcclxuXHRcdFwiZGlzcGxheUNyaXRpY2FsXCI6IHRydWUsXHJcblx0XHRcImRpc3BsYXlFeHRyYURhbWFnZVwiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVHZW50bGVDbGlja1wiOiB0cnVlLFxyXG5cdFx0XCJwb3Rpb25XaGlsZVJvdXRpbmdcIjogZmFsc2UsXHJcblx0XHRcImlnbm9yZUNoYW5nZUZsb29yXCI6IHRydWUsXHJcblx0XHRcImNhbkdvRGVhZFpvbmVcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZU1vdmVEaXJlY3RseVwiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVEaXNhYmxlZFNob3BcIjogdHJ1ZSxcclxuXHRcdFwiZGlzYWJsZVNob3BPbkRhbWFnZVwiOiBmYWxzZSxcclxuXHRcdFwiYmx1ckZnXCI6IGZhbHNlLFxyXG5cdFx0XCJjaGVja0NvbnNvbGVcIjogZmFsc2VcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyZWUtdGV4LXBhY2tlci1jb3JlXCIpOyIsInZhciBtYXAgPSB7XG5cdFwiLi9NVDAuanNcIjogOSxcblx0XCIuL3NhbXBsZTAuanNcIjogMTAsXG5cdFwiLi9zYW1wbGUxLmpzXCI6IDExLFxuXHRcIi4vc2FtcGxlMi5qc1wiOiAxMixcblx0XCIuL3NhbXBsZTMuanNcIjogMTNcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA4OyIsIm1haW4uZmxvb3JzLk1UMD1cclxue1xyXG5cImZsb29ySWRcIjogXCJNVDBcIixcclxuXCJ0aXRsZVwiOiBcIuS4u+WhlCAwIOWxglwiLFxyXG5cIm5hbWVcIjogXCIwXCIsXHJcblwiY2FuRmx5VG9cIjogdHJ1ZSxcclxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcclxuXCJjYW5ub3RWaWV3TWFwXCI6IGZhbHNlLFxyXG5cImRlZmF1bHRHcm91bmRcIjogXCJncm91bmRcIixcclxuXCJpbWFnZXNcIjogW10sXHJcblwiaXRlbV9yYXRpb1wiOiAxLFxyXG5cIm1hcFwiOiBbXHJcbiAgICBbICAxMDAxNiwgIDEwMDE3LCAgMTAwMTgsICAxMDAyNCwgIDEwMDI1LCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXHJcbl0sXHJcblwiZmlyc3RBcnJpdmVcIjogW10sXHJcblwicGFyYWxsZWxEb1wiOiBcIlwiLFxyXG5cImV2ZW50c1wiOiB7fSxcclxuXCJjaGFuZ2VGbG9vclwiOiB7fSxcclxuXCJhZnRlckJhdHRsZVwiOiB7fSxcclxuXCJhZnRlckdldEl0ZW1cIjoge30sXHJcblwiYWZ0ZXJPcGVuRG9vclwiOiB7fSxcclxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxyXG5cImJnbWFwXCI6IFtcclxuXHJcbl0sXHJcblwiZmdtYXBcIjogW1xyXG5cclxuXSxcclxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTA9XHJcbntcclxuXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG5cInRpdGxlXCI6IFwi5qC35p2/IDAg5bGCXCIsXHJcblwibmFtZVwiOiBcIjBcIixcclxuXCJjYW5GbHlUb1wiOiB0cnVlLFxyXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxyXG5cImRlZmF1bHRHcm91bmRcIjogXCJncm91bmRcIixcclxuXCJpbWFnZXNcIjogW10sXHJcblwiYmdtXCI6IFwiYmdtLm1wM1wiLFxyXG5cIml0ZW1fcmF0aW9cIjogMSxcclxuXCJtYXBcIjogW1xyXG4gICAgWyAgMCwgIDAsMjIwLCAgMCwgIDAsIDIwLCA4NywgIDMsIDY1LCA2NCwgNDQsIDQzLCA0Ml0sXHJcbiAgICBbICAwLDI0NiwgIDAsMjQ2LCAgMCwgMjAsICAwLCAgMywgNTgsIDU5LCA2MCwgNjEsIDQxXSxcclxuICAgIFsyMTksICAwLCAgMCwgIDAsMjE5LCAyMCwgIDAsICAzLCA1NywgMjYsIDYyLCA2MywgNDBdLFxyXG4gICAgWyAyMCwgMjAsMTI1LCAyMCwgMjAsIDIwLCAgMCwgIDMsIDUzLCA1NCwgNTUsIDU2LCAzOV0sXHJcbiAgICBbMjE2LDI0NywyNjMsMjM1LDI0OCwgIDYsICAwLCAgMywgNDksIDUwLCA1MSwgNTIsIDM4XSxcclxuICAgIFsgIDYsICA2LDEyNSwgIDYsICA2LCAgNiwgIDAsICAxLCA0NSwgNDYsIDQ3LCA0OCwgMzddLFxyXG4gICAgWzIyNCwyNTQsMjEyLDI2MiwyMDQsICA1LCAgMCwgIDEsIDMxLCAzMiwgMzQsIDMzLCAzNl0sXHJcbiAgICBbMjAxLDI2MSwyMTcsMjY0LDIwNywgIDUsICAwLCAgMSwgMjcsIDI4LCAyOSwgMzAsIDM1XSxcclxuICAgIFsgIDUsICA1LDEyNSwgIDUsICA1LCAgNSwgIDAsICAxLCAyMSwgMjIsIDIzLCAyNCwgMjVdLFxyXG4gICAgWyAgMCwgIDAsMjM3LCAgMCwgIDAsICAwLCA0NSwgIDEsICAxLCAgMSwxMjEsICAxLCAgMV0sXHJcbiAgICBbICA0LCAgNCwxMzMsICA0LCAgNCwgIDQsICAwLCAgMCwgIDAsICAwLCAgMCwgODUsMTI0XSxcclxuICAgIFsgODcsIDExLCAxMiwgMTMsIDE0LCAgNCwgIDQsICAyLCAgMiwgIDIsMTIyLCAgMiwgIDJdLFxyXG4gICAgWyA4OCwgODksIDkwLCA5MSwgOTIsIDkzLCA5NCwgIDIsIDgxLCA4MiwgODMsIDg0LCA4Nl1cclxuXSxcclxuXCJmaXJzdEFycml2ZVwiOiBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwic2V0VGV4dFwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZFwiOiBcIndpbnNraW4ucG5nXCIsXHJcbiAgICAgICAgXCJ0aW1lXCI6IDBcclxuICAgIH0sXHJcbiAgICBcIlxcdFvmoLfmnb/mj5DnpLpd6aaW5qyh5Yiw6L6+5p+Q5bGC5Y+v5Lul6Kem5Y+RIGZpcnN0QXJyaXZlIOS6i+S7tu+8jOivpeS6i+S7tuWPr+exu+S8vOS6jlJNWFDkuK3nmoTigJzoh6rliqjmiafooYzohJrmnKzigJ3jgIJcXG5cXG7mnKzkuovku7bmlK/mjIHkuIDliIfnmoTkuovku7bnsbvlnovvvIzluLjluLjnlKjmnaXop6blj5Hlr7nor53vvIzkvovlpoLvvJpcIixcclxuICAgIFwiXFx0W2hlcm9dXFxiW3VwLGhlcm9d5oiR5piv6LCB77yf5oiR5LuO5ZOq5p2l77yf5oiR5Y+I6KaB5Yiw5ZOq5Y6777yfXCIsXHJcbiAgICBcIlxcdFvku5nlrZAsZmFpcnld5L2g6Zeu5oiRLi4u77yf5oiR5Lmf5LiN55+l6YGT5ZWKLi4uXCIsXHJcbiAgICBcIuacrOWxguS4u+imgeWvuemBk+WFt+OAgemXqOOAgeaAqueJqeetiei/m+ihjOS7i+e7je+8jOacieWFs+S6i+S7tueahOWQhOenjeS/oeaBr+WcqOS4i+S4gOWxguS8muacieabtOS4uuivpue7hueahOivtOaYjuOAglwiXHJcbl0sXHJcblwiZXZlbnRzXCI6IHtcclxuICAgIFwiMTAsOVwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3ov5nkupvmmK/mnKzmoLfmnb/mlK/mjIHnmoTmiYDmnInnmoTpgZPlhbfjgIJcXG5cXG7pgZPlhbfliIbkuLrlm5vnsbvvvJppdGVtcywgY29uc3RhbnRzLCB0b29sc++8jGVxdWlwc+OAglxcbml0ZW1zIOS4uuWNs+aNoeWNs+eUqOexu+mBk+WFt++8jOS+i+WmguWuneefs+OAgeihgOeTtuOAgeWJkeebvuetieOAglxcbmNvbnN0YW50cyDkuLrmsLjkuYXpgZPlhbfvvIzkvovlpoLmgKrnianmiYvlhozjgIHmpbzlsYLkvKDpgIHlmajjgIHlubjov5Dph5HluIHnrYnjgIJcXG50b29scyDkuLrmtojogJfnsbvpgZPlhbfvvIzkvovlpoLnoLTlopnplZDjgIHngrjlvLnjgIHkuK3lv4Plr7nnp7Dpo57ooYzlmajnrYnjgIJcXG5lcXVpcHMg5Li66KOF5aSH77yM5L6L5aaC5YmR55u+562J44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl1cXGJbdXBd5pyJ5YWz6YGT5YW35pWI5p6c77yM5a6a5LmJ5ZyoaXRlbXMuanPkuK3jgIJcXG7nm67liY3lpKflpJrmlbDpgZPlhbflt7LmnInpu5jorqTooYzkuLrvvIzlpoLmnInoh6rlrprkuYnnmoTpnIDmsYLliJnpnIDlnKhpdGVtcy5qc+S4reS/ruaUueS7o+eggeOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5dXFxiW3VwXeaLvuWPlumBk+WFt+e7k+adn+WQjuWPr+inpuWPkSBhZnRlckdldEl0ZW0g5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMCwxMVwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXei/meS6m+aYr+mXqO+8jOmcgOimgeWvueW6lOeahOmSpeWMmeaJk+W8gOOAglxcbuacuuWFs+mXqOW/hemhu+S9v+eUqOeJueauiueahOW8gOazleOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3lvIDpl6jlkI7lj6/op6blj5EgYWZ0ZXJPcGVuRG9vciDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjIsMTBcIjogW1xyXG4gICAgICAgIFwiXFx0W+WwkeWlsyxucGMwXei/meS6m+aYr+i3r+manOOAgealvOair+OAgeS8oOmAgemXqOOAglwiLFxyXG4gICAgICAgIFwiXFx0W+WwkeWlsyxucGMwXeihgOe9keeahOS8pOWus+aVsOWAvOOAgeS4reavkuWQjuavj+atpeS8pOWus+aVsOWAvOOAgeihsOW8seaXtuaUu+mYsuS4i+mZjeeahOaVsOWAvO+8jOmDveWcqCBkYXRhLmpzIOWGheWumuS5ieOAglxcblxcbui3r+manOWQjOagt+S8muWwvemHj+iiq+iHquWKqOWvu+i3r+e7lei/h+OAglwiLFxyXG4gICAgICAgIFwiXFx0W+WwkeWlsyxucGMwXealvOair+WSjOS8oOmAgemXqOmcgOimgeWcqGNoYW5nZUZsb29y5Lit5a6a5LmJ55uu5qCH5qW85bGC5ZKM5L2N572u77yM5Y+v5Y+C6KeB5qC35p2/6YeM5bey5pyJ55qE55qE5YaZ5rOV44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIyLDhcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3ov5nkupvpg73mmK/lkITnp43lkITmoLfnmoTmgKrnianvvIzmiYDmnInmgKrniannmoTmlbDmja7pg73lnKhlbmVteXMuanPkuK3orr7nva7jgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d6L+Z5om55oCq54mp5YiG5Yir5Li677ya5pmu6YCa44CB5YWI5pS744CB6a2U5pS744CB5Z2a5Zu644CBMui/nuWHu+OAgTPov57lh7vjgIE06L+e5Ye744CB56C055Sy44CB5Y+N5Ye744CB5YeA5YyW44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXeaJk+i0peaAqueJqeWQjuWPr+inpuWPkSBhZnRlckJhdHRsZSDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjIsNVwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXeaooeS7v+OAgeWQuOihgOOAgeS4reavkuOAgeihsOW8seOAgeivheWSkuOAglxcblxcbuivt+azqOaEj+WQuOihgOaAqumcgOimgeiuvue9rnZhbHVl5Li65ZC46KGA5pWw5YC877yM5Y+v5Y+C6KeB5qC35p2/5Lit6buR5pqX5aSn5rOV5biI55qE5YaZ5rOV44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIyLDNcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3poobln5/jgIHlpLnlh7vjgIJcXG7or7fms6jmhI/poobln5/mgKrpnIDopoHorr7nva52YWx1ZeS4uuS8pOWus+aVsOWAvO+8jOWPr+WPguingeagt+adv+S4reWInee6p+W3q+W4iOeahOWGmeazleOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3lpLnlh7vlkozpoobln5/lkIzml7blj5HnlJ/ml7blhYjorqHnrpfpoobln5/vvIzlho3lpLnlh7vjgIJcXG7oh6rliqjlr7vot6/lkIzmoLfkvJrlsL3ph4/nu5Xov4fkvaDorr7nva7nmoTov5nkupvngrnjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEyLDEwXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5Y+q5pyJ5qW85LiK5ZCv55So5LqL5Lu25ZCO77yM5omN6IO955yL5Yiw5oiR5bm25Y+v5Lul5ZKM5oiR5a+56K+d5p2l6Kem5Y+R5LqL5Lu244CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSxcclxuXCJjaGFuZ2VGbG9vclwiOiB7XHJcbiAgICBcIjYsMFwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJkb3duRmxvb3JcIlxyXG4gICAgfSxcclxuICAgIFwiMCwxMVwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCIwLDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxyXG4gICAgfSxcclxuICAgIFwiMSwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMTJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCIyLDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAxMlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjMsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIlxyXG4gICAgfSxcclxuICAgIFwiNCwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgOVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXHJcbiAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgIH0sXHJcbiAgICBcIjUsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRpbWVcIjogMCxcclxuICAgICAgICBcInBvcnRhbFdpdGhvdXRUcmlnZ2VyXCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgXCI2LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMTBcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxyXG4gICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICB9XHJcbn0sXHJcblwiYWZ0ZXJCYXR0bGVcIjoge1xyXG4gICAgXCIyLDZcIjogW1xyXG4gICAgICAgIFwiXFx0W2dob3N0U2tlbGV0b25d5LiN5Y+v6IO977yM5L2g5oCO5LmI5Y+v6IO95omT6LSl5oiR77yBXFxu77yI5LiA5Liq5omT6LSl5oCq54mp6Kem5Y+R55qE5LqL5Lu277yJXCJcclxuICAgIF1cclxufSxcclxuXCJhZnRlckdldEl0ZW1cIjoge1xyXG4gICAgXCIxMSw4XCI6IFtcclxuICAgICAgICBcIueUseS6jueKtuaAgeagj+aUvuS4jeS4i++8jOe7v+mSpeWMmeWSjOmTgemXqOmSpeWMmeWdh+inhuS4unRvb2xz77yM5pS+5YWl5bel5YW35qCP5Lit44CCXFxu56Kw5Yiw57u/6Zeo5ZKM6ZOB6Zeo5LuN54S25Lya6Ieq5Yqo5L2/55So5byA6Zeo44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjgsNlwiOiBbXHJcbiAgICAgICAgXCLnlLHkuo7lkLjooYDlkozlpLnlh7vnrYnnmoTlrZjlnKjvvIzooYDnk7bpu5jorqToh6rliqjooqvnu5Xot6/jgIJcXG7kvaDlj6/ku6Xkv67mlLlkYXRhLmpz5Lit55qE57O757ufRmxhZ+adpeiuvue9rui/meS4gOmhueOAglwiXHJcbiAgICBdLFxyXG4gICAgXCI4LDdcIjogW1xyXG4gICAgICAgIFwi5aaC6ZyA5L+u5pS55raI6ICX5ZOB55qE5pWI5p6c77yM6K+35YmN5b6AIGRhdGEuanMg77yM5om+5Yiw5bm25L+u5pS5dmFsdWVz5YaF5a+55bqU55qE5YW35L2T5pWw5YC85Y2z5Y+v44CCXFxu5aaC5p6c5pyJ5pu06auY57qn55qE6ZyA5rGC77yI5aaC5q+P5Liq5Yy65Z+f5a6d55+z5pWw5YC85Y+Y5YyW77yJ77yM6K+m6KeBZG9j5paH5qGj5YaF55qE5YGa5rOV6K+05piO44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjksNVwiOiBbXHJcbiAgICAgICAgXCLmr4/lsYLmpbznmoQgY2FuRmx5VG8g5Yaz5a6a5LqG6K+l5qW85bGC6IO95ZCm6KKr6aOe5Yiw44CCXFxuXFxu5LiN6IO96KKr6aOe5Yiw55qE5qW85bGC5Lmf5peg5rOV5L2/55So5qW85bGC5Lyg6YCB5Zmo44CCXCIsXHJcbiAgICAgICAgXCLpo57ooYznmoTmpbzlsYLpobrluo/nlLEgbWFpbi5qcyDkuK0gZmxvb3JJZHMg5Yqg6L296aG65bqP5omA5Yaz5a6a44CCXFxuXFxu5piv5ZCm5b+F6aG75Zyo5qW85qKv6L655L2/55So5qW85Lyg5Zmo55SxIGRhdGEuanMg5Lit55qE57O757ufRmxhZ+aJgOWGs+WumuOAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMCw1XCI6IFtcclxuICAgICAgICBcIuegtOWimemVkOaYr+egtOmdouWJjeeahOWimeWjgei/mOaYr+Wbm+S4quaWueWQkeeahOWimeWjge+8jOeUsWRhdGEuanPkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjgsNFwiOiBbXHJcbiAgICAgICAgXCLngrjlvLnmmK/lj6rog73ngrjpnaLliY3nmoTmgKrnianov5jmmK/lm5vkuKrmlrnlkJHnmoTmgKrnianvvIznlLFkYXRhLmpz5Lit55qE57O757ufRmxhZ+aJgOWGs+WumuOAglxcbuWmguWPquiDveeCuOWJjeaWueaAqueJqeWImeWSjOS4iumdoueahOWco+mUpOetieS7t+OAglxcbuS4jeiDveiiq+eCuOeahOaAqueJqeWcqGVuZW15c+S4reWPr+S7peWumuS5ie+8jOWPr+WPguingeagt+adv+mHjOm7keiho+mtlOeOi+WSjOm7keaal+Wkp+azleW4iOeahOWGmeazleOAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMCw0XCI6IFtcclxuICAgICAgICBcIuKAnOS4iualvOKAneWSjOKAnOS4i+alvOKAneeahOebruagh+WxgueUsSBtYWluLmpzIOeahCBmbG9vcklkc+mhuuW6j+aJgOWGs+WumuOAglwiXHJcbiAgICBdLFxyXG4gICAgXCI5LDJcIjogW1xyXG4gICAgICAgIFwi6K+l6YGT5YW36buY6K6k5piv5aSn6buE6Zeo6ZKl5YyZ77yM5aaC6ZyA5pS55Li66ZKl5YyZ55uS55u05o6l5L+u5pS5IGRhdGEuanMg5Lit55qE57O757ufRmxhZ+WNs+WPr+OAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMCwyXCI6IFtcclxuICAgICAgICBcIuWxoOm+meWMlemmluebruWJjeacquiiq+WumuS5ie+8jOWPr+iDvemcgOimgeiHquihjOWunueOsOWKn+iDveOAglxcbuacieWFs+WmguS9leWunueOsOS4gOS4qumBk+WFt+WKn+iDveWPguingWRvY+aWh+aho+OAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMiw3XCI6IFtcclxuICAgICAgICBcIuWcqCBkYXRhLmpzIOeahOezu+e7n0ZsYWfkuK3orr7nva7mmK/lkKblkK/nlKjoo4XlpIfmoI/jgIJcXG7lpoLmnpzkuI3lkK/nlKjliJnoo4XlpIfkvJrnm7TmjqXlop7liqDlsZ7mgKfjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTIsNlwiOiBbXHJcbiAgICAgICAgXCLlnKggZGF0YS5qcyDnmoTns7vnu59GbGFn5Lit6K6+572u5piv5ZCm5ZCv55So6KOF5aSH5qCP5oyJ6ZKu44CCXFxu5aaC5p6c5ZCv55So5YiZ6KOF5aSH5qCP5oyJ6ZKu5Lya5pu/5Luj5qW85Lyg5oyJ6ZKu44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEyLDVcIjogW1xyXG4gICAgICAgIFwi6KOF5aSH55qE56eN57G755Sx5YWo5aGU5bGe5oCn5Lit55qEZXF1aXBOYW1l5Yaz5a6aLHR5cGXnmoTlgLzlsLHmmK/or6XnsbvlnovlnKhlcXVpcE5hbWXkuK3nmoTkvY3mrKHvvIzkvovlpoLpu5jorqTmg4XlhrXkuItlcXVpcHR5cGXkuLow5Luj6KGo5q2m5Zmo77yM5ZCM5pe25Y+q5pyJdHlwZeS4ujDnmoToo4XlpIfnmoRhbmltYXRl5bGe5oCn55Sf5pWIXCJcclxuICAgIF1cclxufSxcclxuXCJhZnRlck9wZW5Eb29yXCI6IHtcclxuICAgIFwiMTEsMTJcIjogW1xyXG4gICAgICAgIFwi5L2g5byA5LqG5LiA5Liq57u/6Zeo77yM6Kem5Y+R5LqG5LiA5LiqYWZ0ZXJPcGVuRG9vcuS6i+S7tlwiXHJcbiAgICBdXHJcbn0sXHJcblwiY2Fubm90TW92ZVwiOiB7fSxcclxuXCJiZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImZnbWFwXCI6IFtcclxuXHJcbl0sXHJcbn0iLCJtYWluLmZsb29ycy5zYW1wbGUxPVxyXG57XHJcblwiZmxvb3JJZFwiOiBcInNhbXBsZTFcIixcclxuXCJ0aXRsZVwiOiBcIuagt+advyAxIOWxglwiLFxyXG5cIm5hbWVcIjogXCIxXCIsXHJcblwiY2FuRmx5VG9cIjogdHJ1ZSxcclxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcclxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3Jhc3NcIixcclxuXCJpbWFnZXNcIjogW1xyXG4gICAgW1xyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBcImJnLmpwZ1wiLFxyXG4gICAgICAgIDBcclxuICAgIF1cclxuXSxcclxuXCJ3ZWF0aGVyXCI6IFtcclxuICAgIFwic25vd1wiLFxyXG4gICAgNlxyXG5dLFxyXG5cIml0ZW1fcmF0aW9cIjogMSxcclxuXCJtYXBcIjogW1xyXG4gICAgWyAgNywxMzEsICA4LDE1MiwgIDksMTMwLCAxMCwxNTIsMTY2LDE2NSwxMzIsMTY1LDE2Nl0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE1MiwxNjUsMTY0LCAgMCwxNjIsMTY1XSxcclxuICAgIFsxNTIsMTUyLDE1MiwxNTIsMTIxLDE1MiwxNTIsMTUyLCAgMCwgIDAsMjI5LCAgMCwgIDBdLFxyXG4gICAgWyA0MywgMzMsIDQ0LDE1MSwgIDAsICAwLCAgMCwxNTIsMTY1LDE2MSwgIDAsMTYzLDE2NV0sXHJcbiAgICBbIDIxLCAyMiwgMjEsMTUxLCAgMCwgIDAsICAwLDE1MiwxNjYsMTY1LCAgMCwxNjUsMTY2XSxcclxuICAgIFsxNTEsMjQ1LDE1MSwxNTEsICAwLCA4NywgIDAsMTUyLDE1MiwxNTIsIDg1LDE1MywxNTNdLFxyXG4gICAgWyAgMCwyNDYsICAwLDE1MSwgIDAsICAwLCAgMCwxNTIsMTUyLDIyMSwgIDAsMjIxLDE1M10sXHJcbiAgICBbMjQ2LCAgMCwyNDYsMTUxLCAgMCwgIDAsICAwLDEyMSwgODUsICAwLCAgMCwgIDAsMTUzXSxcclxuICAgIFsxNTEsMjQ2LDE1MSwxNTEsICAwLDE1MywxNTMsMTUzLDE1MywxNTMsMTUzLDE1MywxNTNdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwxNjQsICAwLCAgMCwxNjMsICAwLCAgMF0sXHJcbiAgICBbICAxLCAgMSwgIDEsICAxLCAgMCwgMjAsICAwLCAgMCwgIDAsMTYyLCAgMCwxNjEsICAwXSxcclxuICAgIFsgIDEsICAwLDEyMywgIDEsICAwLCAyMCwxMjQsICAwLDEyMSwgIDAsMTIyLCAgMCwxMjZdLFxyXG4gICAgWyAgMSwgIDAsICAwLCAgMSwgODgsIDIwLCA4NiwgIDAsICAwLCAgMCwgIDAsICAwLDEyMl1cclxuXSxcclxuXCJmaXJzdEFycml2ZVwiOiBbXSxcclxuXCJldmVudHNcIjoge1xyXG4gICAgXCI0LDEwXCI6IFtcclxuICAgICAgICBcIlxcdFvmoLfmnb/mj5DnpLpd5pys5bGC5qW85bCG5Lya5a+55ZCE57G75LqL5Lu26L+b6KGM5LuL57uN44CCXCIsXHJcbiAgICAgICAgXCLlt6bovrnmmK/kuIDkuKrku781MOWxgueahOmZt+mYseWBmuazle+8jOS4iuaWueaYr+WVhuW6l+OAgeW/q+aNt+WVhuW6l+eahOS9v+eUqOaWueazle+8jOWPs+S4iuaYr+S4gOS4quWFuOWei+eahOadgOaAquW8gOmXqOeahOS+i+WtkO+8jOWPs+S4i+aYr+WQhOexu+WPr+iDveeahE5QQ+S6i+S7tuOAglwiLFxyXG4gICAgICAgIFwi5pys5qC35p2/55uu5YmN5pSv5oyB55qE5LqL5Lu25YiX6KGo5aSn6Ie05pyJ77yaXFxudGV4dDog5pi+56S65LiA5q615paH5a2X77yI5q+U5aaC5L2g546w5Zyo5q2j5Zyo55yL5Yiw55qE77yJXFxudGlwOiDlt6bkuIrop5LmmL7npLrmj5DnpLpcXG5zaG93OiDkvb/kuIDkuKrkuovku7bmnInmlYjvvIjlj6/op4HjgIHlj6/ooqvkuqTkupLvvIlcXG5oaWRlOiDkvb/kuIDkuKrkuovku7blpLHmlYjvvIjkuI3lj6/op4HjgIHkuI3lj6/ooqvkuqTkupLvvIlcXG50cmlnZ2VyOiDop6blj5Hlj6bkuIDkuKrlnLDngrnnmoTkuovku7ZcXG5hbmltYXRlOiDmmL7npLrliqjnlLtcXG5iYXR0bGU6IOW8uuWItuWSjOafkOaAqueJqeaImOaWl1xcbm9wZW5Eb29yOiDml6DpnIDpkqXljJnlvIDpl6jvvIjkvovlpoLmnLrlhbPpl6jjgIHmmpflopnvvIlcIixcclxuICAgICAgICBcIm9wZW5TaG9wOiDmiZPlvIDkuIDkuKrlhajlsYDllYblupdcXG5kaXNhYmxlU2hvcDog56aB55So5LiA5Liq5YWo5bGA5ZWG5bqXXFxuY2hhbmdlRmxvb3I6IOS8oOmAgeWLh+Wjq+WIsOafkOWxguafkOS9jee9rlxcbmNoYW5nZVBvczog5Lyg6YCB5YuH5aOr5Yiw5b2T5bGC5p+Q5L2N572u77yb6L2s5ZCRXFxuc2hvd0ltYWdlOiDmmL7npLrlm77niYdcXG5zZXRGZzog5pu05pS555S76Z2i6Imy6LCDXFxuc2V0V2VhdGhlcjog5pu05pS55aSp5rCUXFxubW92ZTog56e75Yqo5LqL5Lu25pWI5p6cXFxubW92ZUhlcm86IOenu+WKqOWLh+Wjq+aViOaenFxcbnBsYXlCZ206IOaSreaUvuafkOS4quiDjOaZr+mfs+S5kFxcbnBhdXNlQmdtOiDmmoLlgZzog4zmma/pn7PkuZBcXG5yZXN1bWVCZ206IOaBouWkjeiDjOaZr+mfs+S5kOeahOaSreaUvlxcbnBsYXlTb3VuZDog5pKt5pS+5p+Q5Liq6Z+z6aKRXCIsXHJcbiAgICAgICAgXCJpZjog5p2h5Lu25Yik5patXFxuY2hvaWNlczog5o+Q5L6b6YCJ6aG5XFxuc2V0VmFsdWU6IOiuvue9ruWLh+Wjq+WxnuaAp+mBk+WFt++8jOaIluafkOS4quWPmOmHjy9mbGFnXFxudXBkYXRlOiDmm7TmlrDnirbmgIHmoI/lkozlnLDlm77mmL7kvKRcXG53aW46IOiOt+W+l+iDnOWIqe+8iOa4uOaIj+mAmuWFs++8iVxcbmxvc2U6IOa4uOaIj+Wksei0pVxcbnNsZWVwOiDnrYnlvoXlpJrlsJHmr6vnp5JcXG5leGl0OiDnq4vliLvnu5PmnZ/lvZPliY3kuovku7ZcXG5yZXZpc2l0OiDnq4vliLvnu5PmnZ/kuovku7blubbph43mlrDop6blj5FcXG5mdW5jdGlvbjog6Ieq5a6a5LmJSlPohJrmnKxcXG5cXG7mm7TlpJrmlK/mjIHnmoTkuovku7bov5jlnKjnvJblhpnkuK3vvIzmrKLov47mgqjlrp3otLXnmoTmhI/op4HjgIJcIixcclxuICAgICAgICBcIuacieWFs+WQhOS6i+S7tueahOagt+S+i++8jOWPr+WPguingeacrOWxguS4gOS6m05QQ+eahOWGmeazleOAglxcbuaJgOacieS6i+S7tuagt+S+i+acrOWxgumDveacieS7i+e7jeOAglxcblxcbuS4gOS4quiHquWumuS5ieS6i+S7tuWkhOeQhuWujOWQju+8jOmcgOimgeiwg+eUqHtcXFwidHlwZVxcXCI6IFxcXCJoaWRlXFxcIn3or6Xkuovku7bmiY3kuI3kvJrlho3mrKHlh7rnjrDjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEsNVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCIxLDZcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiMCw3XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjIsN1wiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCIxLDhcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiMSw3XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDE1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbcmVkS2luZ13mrKLov47mnaXliLDprZTloZTvvIzkvaDmmK/nrKzkuIDnmb7kvY3mjJHmiJjogIXjgIJcXG7oi6XkvaDog73miZPotKXmiJHmiYDmnInnmoTmiYvkuIvvvIzmiJHlsLHkuI7kvaDkuIDlr7nkuIDnmoTlhrPmlpfjgIJcXG7njrDlnKjkvaDlv4XpobvmjqXlj5fmiJHnmoTlronmjpLjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICA4XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS7gOS5iO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6YXRrLzEwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmRlZlwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmRlZi8xMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgOFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0Q3VydGFpblwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFtcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTI1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNzAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZUZsb29yXCIsXHJcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTFcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjIsMTFcIjogW1xyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3lloLvvIHphpLphpLvvIHlv6vphpLphpLvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldEN1cnRhaW5cIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDE1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6aKd77yM5oiR6L+Z5piv5Zyo5LuA5LmI5Zyw5pa577yfXCIsXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeS9oOiiq+mtlOeOi+aKk+S6hui1t+adpeaJlOi/m+S6huebkeeLse+8jOWSjOaIkeWFs+WcqOS6huS4gOi1t++8jOS9huaYr+W5uOi/kOeahOaYr+aIkeWcqOaYqOWkqeWImuWImuaMluWlveS4gOadoei2iueLseeahOaal+mBk++8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDMwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeaIkeWFiOi1sOS6hu+8jOelneS9oOWlvei/kO+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibW92ZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNzUwLFxyXG4gICAgICAgICAgICBcInN0ZXBzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiZG93blwiXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwi5LiK6Z2i5piv5LiqbW92ZeS6i+S7tu+8jOWPr+S7peWvuU5QQ+etiei/m+ihjOenu+WKqOOAglxcbuivpuingeagt+adv+S4reWwj+WBt+S6i+S7tueahOWGmeazleOAglwiLFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5oCO5LmI6LeR55qE6L+Z5LmI5b+rLi4uXCJcclxuICAgIF0sXHJcbiAgICBcIjQsMlwiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3mnKzloZTnmoTllYblupfmnInkuKTnsbvvvIzlhajlsYDllYblupflkozpnZ7lhajlsYDllYblupfjgIJcXG5cXG7miYDosJPpnZ7lhajlsYDllYblupfvvIzlsLHnsbvkvLzkuo7lj7PkuIvop5LpgqPkuKrljZbpkqXljJnnmoTogIHkurrkuIDmoLfvvIzkuIDlrpropoHnorDliLDmiY3og73op6blj5Hkuovku7bjgIJcXG5cXG7ogIzlhajlsYDllYblupfvvIzliJnog73lnKjlv6vmjbfllYblupfkuK3nm7TmjqXkvb/nlKjjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeimgeazqOWGjOS4gOS4quWFqOWxgOWVhuW6l++8jOS9oOmcgOimgeWcqCBkYXRhLmpzIOS4re+8jOaJvuWIsCBzaG9wc++8jOW5tuWcqOWGhea3u+WKoOS9oOeahOWVhuW6l+S/oeaBr+OAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5ZWG5bqX5L+h5oGv5re75Yqg5ZCO77yM5Y+v5Lul5Zyo6ZyA6KaB55qE5LqL5Lu25aSE6LCD55Soe1xcXCJ0eXBlXFxcIjogXFxcIm9wZW5TaG9wXFxcIn3mnaXmiZPlvIDkvaDmt7vliqDnmoTlhajlsYDllYblupfjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWcqOS4iumdoueahOS+i+WtkOmHjO+8jOW3pui+ueaYr+S4gOS4quS7vzUw5bGC55qE6YeR5biB5ZWG5bqX77yM5Y+z6L655piv5LiA5Liq5Lu/MjTlsYLnmoTnu4/pqozllYblupfjgIJcXG5cXG7llYblupfooqvorr/pl67lkI7ljbPlj6/lnKjlv6vmjbfllYblupfkuK3ov5vooYzkvb/nlKjjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWmguaenOS9oOmcgOimgeWcqOafkOWxguaaguaXtuemgeeUqOW/q+aNt+WVhuW6l++8jOWPr+S7peWcqGRhdGEuanPkuK3orr7nva5jYW5ub3RVc2VRdWlja1Nob3DjgIJcXG7lpoLmnpzpnIDopoHmsLjkuYXnpoHnlKjllYblupfvvIzor7fkvb/nlKh7XFxcInR5cGVcXFwiOlxcXCJkaXNhYmxlU2hvcFxcXCJ9XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxLDBcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlblNob3BcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcIm1vbmV5U2hvcDFcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjUsMFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuU2hvcFwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiZXhwU2hvcDFcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjcsN1wiOiBbXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3ov5nmmK/kuIDkuKrlhbjlnovnmoTmnYDmgKrlvIDpl6jjgIHlvLrliLbmiJjmlpfkuovku7bjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjgsN1wiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI5LDdcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEwLDRcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrS2luZ13kvaDnu4jkuo7ov5jmmK/mnaXkuobjgIJcIixcclxuICAgICAgICBcIlxcdFtoZXJvXeaUvuW8gOaIkeS7rOeahOWFrOS4u++8gVwiLFxyXG4gICAgICAgIFwiXFx0W2JsYWNrS2luZ13lpoLmnpzmiJHkuI3mhL/mhI/lkaLvvJ9cIixcclxuICAgICAgICBcIlxcdFtoZXJvXeaXoOmcgOWkmuivtO+8jOaLlOWJkeWQp++8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJibGFja0tpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrS2luZ13msqHmg7PliLDkvaDlt7Lnu4/lj5jlvpfov5nkuYjlvLrlpKfkuoYuLi4g566X5L2g5Y6J5a6z44CCXFxu5YWs5Li75bCx5Lqk57uZ5L2g5LqG77yM6K+35aW95aW95a+55aW544CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMCwwXCI6IFtcclxuICAgICAgICBcIlxcdFtoZXJvXeWFrOS4u++8jOaIkeadpeaVkeS9oOS6hn5cIixcclxuICAgICAgICBcIlxcdFvlhazkuLsscHJpbmNlc3Nd5b+r5pWR5oiR5Ye65Y6777yB5oiR5Y+X5aSf6L+Z6YeM5LqG77yBXCIsXHJcbiAgICAgICAgXCJcXHRbaGVyb13lhazkuLvliKvmgJXvvIzmiJHku6zotbDlkKd+XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ3aW5cIixcclxuICAgICAgICAgICAgXCJyZWFzb25cIjogXCLmlZHlh7rlhazkuLtcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjYsMTJcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNiwxMVwiOiBbXHJcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XemAmui/h+iwg+eUqCB7XFxcInR5cGVcXFwiOiBcXFwic2hvd1xcXCJ9IOWPr+S7peS9v+makOiXj+eahOS6i+S7tuaYvuekuuWHuuadpeOAglxcbuavlOWmguaIkeS4i+mdoui/meS4quacuuWFs+mXqOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgMTJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XemAmui/h+iwg+eUqCB7XFxcInR5cGVcXFwiOiBcXFwib3BlbkRvb3JcXFwifSDlj6/ku6Xml6DpnIDpkqXljJnmiZPlvIDkuIDmiYfpl6jmiJbmmpflopnjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAxMlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5ZCM5pe277yM5Lmf5Y+v5Lul5a+55YW25a6D5bGC6L+b6KGM5pON5L2c77yM5q+U5aaC5qW85LiL55qE5py65YWz6Zeo77yM546w5Zyo5bey57uP5Li65L2g5omT5byA5LqG44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxMSxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeWmguaenCBzaG93IOaIliBoaWRlIOaMh+WumuS6hiB0aW1lIOWPguaVsO+8jOWImeS7peWKqOeUu+aViOaenOaYvuekuu+8jOaMh+WumueahOWPguaVsOS9nOS4uua2iOWkseaXtumXtO+8iOavq+enku+8ieadpeiuoeeul+OAglwiLFxyXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3njrDlnKjliLDmpbzkuIvmnaXmib7miJHlkKd+XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDEyLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjgsMTFcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzptYW5fdGltZXNcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6bWFuX3RpbWVzKzFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lnKjmloflrZfkuK3kvb/nlKgkeycgJHsgJ33lkowgfSDlj6/ku6XorqHnrpflubbmmL7npLrkuIDkuKrooajovr7lvI/nmoTnu5PmnpzjgIJcXG5cIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS+i+Wmgu+8mlxcbuS9oOeahOW9k+WJjeaUu+WHu+WKm+aYryR7c3RhdHVzOmF0a33vvIzpmLLlvqHlipvmmK8ke3N0YXR1czpkZWZ944CCXFxu5pS76Ziy5ZKM55qE5Y2B5YCN5pivJHsxMCooc3RhdHVzOmF0aytzdGF0dXM6ZGVmKX3vvIzmlLvpmLLkuYvnp6/mmK8ke3N0YXR1czphdGsqc3RhdHVzOmRlZn3jgIJcXG7kvaDmnIkke2l0ZW06eWVsbG93S2V5feaKium7hOmSpeWMme+8jCR7aXRlbTpibHVlS2V5feaKiuiTnemSpeWMme+8jCR7aXRlbTpyZWRLZXl95oqK57qi6ZKl5YyZ44CCXFxu5L2g5pyJJHtpdGVtOnBpY2theGV95Liq56C077yMJHtpdGVtOmJvbWJ95Liq54K477yMJHtpdGVtOmNlbnRlckZseX3kuKrpo57jgIJcXG7ov5nmmK/kvaDnrKwke2ZsYWc6bWFuX3RpbWVzfeasoeWSjOaIkeWvueivneOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5ZCM5pe277yM5L2g5Lmf5Y+v5Lul6YCa6L+He1xcXCJ0eXBlXFxcIjogXFxcInNldFZhbHVlXFxcIn3mnaXorr7nva7kuIDkuKrli4flo6vnmoTlsZ7mgKfjgIHpgZPlhbfvvIzmiJbmn5DkuKpGbGFn44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3kvovlpoLvvJpcXG7njrDlnKjmiJHlsIborqnkvaDnmoTmlLvpmLLmj5DljYc1MCXvvIzlho3lsIbmlLvpmLLlkoznmoTljYHlgI3liqDliLDnlJ/lkb3lgLzkuIrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsqMS41XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmRlZlwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmRlZioxLjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6aHBcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czpocCsxMCooc3RhdHVzOmF0aytzdGF0dXM6ZGVmKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWGjemAgeS9oDUwMOmHkeW4ge+8jDEwMDDnu4/pqozvvIwx56C0MueCuDPpo57vvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5KzUwMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpleHBlcmllbmNlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6ZXhwZXJpZW5jZSsxMDAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpwaWNrYXhlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnBpY2theGUrMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Ym9tYlwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpib21iKzJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmNlbnRlckZseVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpjZW50ZXJGbHkrM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXXN0YXR1czp4eHgg5Luj6KGo5YuH5aOr55qE5p+Q5Liq5bGe5oCn44CCXFxu5YW25LiteHh45Y+v5Y+WaHAsIGF0aywgZGVmLCBtZGVmLCBtb25leSxleHBlcmllbmNl6L+Z5Yeg6aG544CCXFxuXFxuaXRlbTp4eHgg5Luj6KGo5YuH5aOr55qE5p+Q5Liq6YGT5YW355qE5Liq5pWw44CCXFxueHh45Li66YGT5YW3SUTvvIzlhbfkvZPlj6/lj4Lop4FpdGVtcy5qc+S4reeahOWumuS5ieOAglxcblxcbmZsYWc6eHh4IOS7o+ihqOafkOS4quiHquWumuS5iUZsYWfmiJblj5jph4/jgIJcXG54eHjkuLpGbGFnL+WPmOmHj+WQje+8jOWPr+S7peiHquihjOWumuS5ie+8jOeUseWtl+avjeOAgeaVsOWtl+WSjOS4i+WIkue6v+e7hOaIkOOAglxcbuacquWumuS5iei/h+iAjOebtOaOpeWPlueUqOeahEZsYWfpu5jorqTlgLzkuLpmYWxzZeOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5L2g546w5Zyo5Y+v5Lul6YeN5paw5ZKM5oiR6L+b6KGM5a+56K+d77yM6L+b5LiA5q2l55yL5Yiw5bGe5oCn5YC855qE5pS55Y+Y44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEwLDExXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzp3b21hbl90aW1lcz09MFwiLFxyXG4gICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXei/meaYr+S4quW+iOWkjeadgueahOS+i+WtkO+8jOWug+WwhuaVmeS8muS9oOWmguS9leS9v+eUqGlmIOivreWPpei/m+ihjOadoeS7tuWIpOaWre+8jOS7peWPiiBjaG9pY2VzIOaPkOS+m+mAiemhueadpeS+m+eUqOaIt+i/m+ihjOmAieaLqeOAglwiLFxyXG4gICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeesrOS4gOasoeiuv+mXruaIkeWwhuaYvuekuui/meauteaWh+Wtl++8m+S7juesrOS6jOasoeW8gOWni+WwhuS8muWQkeS9oOWHuuWUrumSpeWMmeOAglxcbumSpeWMmeS7t+agvOWwhumaj+edgOiuv+mXruasoeaVsOmAkuWinuOAglxcbuW9k+WQiOiuoeWHuuWUruS6huS4g+aKiumSpeWMmeWQju+8jOWwhumAgeS9oOS4gOaKiuWkp+m7hOmXqOmSpeWMme+8jOW5tua2iOWkseS4jeWGjeWHuueOsOOAglwiLFxyXG4gICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXei/memDqOWIhueahOmAu+i+keavlOi+g+mVv++8jOivt+e7huW/g+eci+agt+adv+eahOWGmeazle+8jOaYr+W+iOWuueaYk+eci+aHguW5tueQhuino+eahOOAglwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzPT04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOi0reS5sOeahOmSpeWMmeW3sue7j+Wkn+WkmuS6hu+8jOWGjee7p+e7reWNlue7meS9oOeahOivneaIkeS8muacieWNsemZqeeahOOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d55yL5Zyo5L2g6LSh54yu57uZ5oiR6L+Z5LmI5aSa6ZKx55qE5Lu95LiK77yM6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ5ZCn77yM5biM5pyb5L2g6IO95aW95aW955So5a6D44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJpZ0tleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06YmlnS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5oiR5YWI6LWw5LqG77yM5ouc5oucflwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hvaWNlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFx0W+iAgeS6uix3b21hbl3lsJHlubTvvIzkvaDpnIDopoHpkqXljJnlkJfvvJ9cXG7miJHov5nph4zmnInlpKfmiornmoTvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hvaWNlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLpu4TpkqXljJnvvIgkezkrZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTkrZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDkrZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTp5ZWxsb3dLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnllbGxvd0tleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6JOd6ZKl5YyZ77yIJHsxOCsyKmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0xOCsyKmZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgxOCsyKmZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Ymx1ZUtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Ymx1ZUtleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi57qi6ZKl5YyZ77yIJHszNis0KmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0zNis0KmZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgzNis0KmZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06cmVkS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpyZWRLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuemu+W8gFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzp3b21hbl90aW1lcysxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTIsMTFcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbk1hZ2ljaWFuXeS9v+eUqCB7XFxcInR5cGVcXFwiOlxcXCJmdW5jdGlvblxcXCJ9IOWPr+S7peWGmeiHquWumuS5ieeahEpT6ISa5pys44CCXFxu5pys5aGU5pSv5oyB55qE5omA5pyJ5Li76KaBQVBJ5Lya5ZyoZG9j5paH5qGj5YaF57uZ5Ye644CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuTWFnaWNpYW5d5L6L5aaC6L+Z5Liq5L6L5a2Q77ya5Y2z5bCG5by55Ye65LiA5Liq6L6T5YWl56qX5Y+j77yM54S25ZCO5Lya5bCG5L2g55qE6L6T5YWl57uT5p6c55u05o6l5Yqg5Yiw5L2g55qE5pS75Ye75Yqb5LiK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCLor7fovpPlhaXkvaDopoHliqDmlLvlh7vlipvnmoTmlbDlgLzvvJpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6aW5wdXQ+MFwiLFxyXG4gICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6YXRrK2ZsYWc6aW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0aXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLmk43kvZzmiJDlip/vvIzmlLvlh7srJHtmbGFnOmlucHV0fVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCLmk43kvZzmiJDlip/vvIzmlLvlh7srJHtmbGFnOmlucHV0fVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZmFsc2VcIjogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbk1hZ2ljaWFuXeWFt+S9k+WPr+WPguingeagt+adv+S4reacrOS6i+S7tueahOWGmeazleOAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMCwxMlwiOiBudWxsLFxyXG4gICAgXCIxMiwxMlwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzd2l0Y2hcIixcclxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgIFwiY2FzZUxpc3RcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3njrDlnKjkvb/nlKhzd2l0Y2jmlLnlhpnov5nkuKrkvovlrZBcIlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYXNlXCI6IFwiOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOi0reS5sOeahOmSpeWMmeW3sue7j+Wkn+WkmuS6hu+8jOWGjee7p+e7reWNlue7meS9oOeahOivneaIkeS8muacieWNsemZqeeahOOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d55yL5Zyo5L2g6LSh54yu57uZ5oiR6L+Z5LmI5aSa6ZKx55qE5Lu95LiK77yM6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ5ZCn77yM5biM5pyb5L2g6IO95aW95aW955So5a6D44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJpZ0tleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06YmlnS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5oiR5YWI6LWw5LqG77yM5ouc5oucflwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLlvZPmsqHmnInnrKblkIjnmoTlgLznmoTlnLrlkIjmiafooYzmraTkuovku7ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaG9pY2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXHRb6ICB5Lq6LHdvbWFuXeWwkeW5tO+8jOS9oOmcgOimgemSpeWMmeWQl++8n1xcbuaIkei/memHjOacieWkp+aKiueahO+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaG9pY2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIum7hOmSpeWMme+8iCR7OStmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49OStmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oOStmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnllbGxvd0tleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06eWVsbG93S2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLok53pkqXljJnvvIgkezE4KzIqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTE4KzIqZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDE4KzIqZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpibHVlS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpibHVlS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnuqLpkqXljJnvvIgkezM2KzQqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTM2KzQqZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDM2KzQqZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpyZWRLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnJlZEtleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi56a75byAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOndvbWFuX3RpbWVzKzFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0sXHJcblwiY2hhbmdlRmxvb3JcIjoge1xyXG4gICAgXCI0LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiNSw1XCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUyXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcImRvd25GbG9vclwiLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIlxyXG4gICAgfSxcclxuICAgIFwiMTAsMTJcIjogbnVsbFxyXG59LFxyXG5cImFmdGVyQmF0dGxlXCI6IHtcclxuICAgIFwiOSw2XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6ZG9vclwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzpkb29yKzFcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjExLDZcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzpkb29yXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOmRvb3IrMVwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59LFxyXG5cImFmdGVyR2V0SXRlbVwiOiB7fSxcclxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxyXG5cImNhbm5vdE1vdmVcIjoge30sXHJcblwiYmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJmZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImF1dG9FdmVudFwiOiB7XHJcbiAgICBcIjEwLDVcIjoge1xyXG4gICAgICAgIFwiMFwiOiB7XHJcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzpkb29yPT0yXCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVudEZsb29yXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogMCxcclxuICAgICAgICAgICAgXCJkZWxheUV4ZWN1dGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwibXVsdGlFeGVjdXRlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTI9XHJcbntcclxuXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxyXG5cInRpdGxlXCI6IFwi5qC35p2/IDIg5bGCXCIsXHJcblwibmFtZVwiOiBcIjJcIixcclxuXCJjYW5GbHlUb1wiOiB0cnVlLFxyXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxyXG5cImNhbm5vdFZpZXdNYXBcIjogZmFsc2UsXHJcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxyXG5cImltYWdlc1wiOiBbXSxcclxuXCJpdGVtX3JhdGlvXCI6IDEsXHJcblwibWFwXCI6IFtcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwxMjEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgNDUsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgODgsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsIDg3LCAgMCwgIDAsICAwLCAgMCwxMjIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXVxyXG5dLFxyXG5cIndpZHRoXCI6IDI2LFxyXG5cImhlaWdodFwiOiAyNixcclxuXCJmaXJzdEFycml2ZVwiOiBbXSxcclxuXCJldmVudHNcIjoge1xyXG4gICAgXCIzLDJcIjogW1xyXG4gICAgICAgIFwiMTIzXCJcclxuICAgIF0sXHJcbiAgICBcIjEyLDEyXCI6IFtcclxuICAgICAgICBcIjIzNFwiXHJcbiAgICBdXHJcbn0sXHJcblwiY2hhbmdlRmxvb3JcIjoge1xyXG4gICAgXCI2LDEwXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxyXG4gICAgfSxcclxuICAgIFwiNywxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJkb3duRmxvb3JcIlxyXG4gICAgfVxyXG59LFxyXG5cImFmdGVyQmF0dGxlXCI6IHt9LFxyXG5cImFmdGVyR2V0SXRlbVwiOiB7fSxcclxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxyXG5cImNhbm5vdE1vdmVcIjoge30sXHJcblwidXBGbG9vclwiOiBudWxsLFxyXG5cImJnbWFwXCI6IFtcclxuXHJcbl0sXHJcblwiZmdtYXBcIjogW1xyXG5cclxuXSxcclxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTM9XHJcbntcclxuXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxyXG5cInRpdGxlXCI6IFwi5Li75aGUIDQwIOWxglwiLFxyXG5cIm5hbWVcIjogXCI0MFwiLFxyXG5cImNhbkZseVRvXCI6IGZhbHNlLFxyXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxyXG5cImRlZmF1bHRHcm91bmRcIjogXCJzbm93R3JvdW5kXCIsXHJcblwiaW1hZ2VzXCI6IFtdLFxyXG5cImNvbG9yXCI6IFtcclxuICAgIDI1NSxcclxuICAgIDAsXHJcbiAgICAwLFxyXG4gICAgMC4zXHJcbl0sXHJcblwid2VhdGhlclwiOiBbXHJcbiAgICBcInJhaW5cIixcclxuICAgIDEwXHJcbl0sXHJcblwiYmdtXCI6IFwiYmdtLm1wM1wiLFxyXG5cIml0ZW1fcmF0aW9cIjogMSxcclxuXCJtYXBcIjogW1xyXG4gICAgWyAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCA4NywgIDUsICA1LCAgNSwgIDUsICA1LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDEsICAwLCAgMSwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgODUsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwyNDcsICAxLDI0NywgIDEsMjQ3LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgMSwyNDcsMjQ3LDI0NywgIDEsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICAxLDI0NywgMzAsMjQ3LCAgMSwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwyNDcsICAxLDEyNCwgIDEsMjQ3LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDEsMTIzLCAgMSwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDQsICAwLCAgNCwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgNCwgODUsICA0LCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCA4OCwgIDUsICA1LCAgNSwgIDUsICA1LCAgNV1cclxuXSxcclxuXCJmaXJzdEFycml2ZVwiOiBbXHJcbiAgICBcIlxcdFvlrp7miJjvvIFd5pys5qW85bCG5bCd6K+V5aSN5Yi744CK5a6/5ZG955qE5peL5b6L44CLNDBG5Ymn5oOF44CCXCJcclxuXSxcclxuXCJldmVudHNcIjoge1xyXG4gICAgXCI2LDExXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjYsMTBcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRvb3IubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNiw3XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeadsOWFi++8jOS9oOeptuern+aYr+S7gOS5iOS6uu+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3igKbigKZcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeaIkeS7rOKApuKApuaYr+aci+WPi+WvueWQp++8n1xcbuaYr+aci+WPi+WwseW6lOivpeebuOS6kuS/oeS7u+WvueWQp++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3igKbigKbkuovliLDlpoLku4rkuZ/msqHmnInku4DkuYjlpb3pmpDnnpLnmoTkuobjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd5rKh6ZSZ77yM5oiR5bCx5piv6L+Z5LiA5YiH55qE6IOM5ZCO5Li76LCL44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXHJcbiAgICAgICAgICAgIFwic3RlcHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeeahOecn+WQjeS4uuKAlOKAlOm7keaal+Wkp+azleW4iO+8jOesrOWbm+WMuuWfn+eahOWktOebruOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5ZG15ZG177yM5LiN55+l6YGT5Li65LuA5LmI77yM5oiR56uf54S25a+55LqL5oOF6LWw5Yiw546w5Zyo6L+Z5LiA5q2l5q+r5LiN5oSf6KeJ5oSP5aSW44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ku6XmnbDlhYvnmoTlkI3kuYnliKnnlKjkuobkvaDov5nkuYjkuYXvvIznnJ/mmK/mirHmrYnllYrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeecn+ato+eahOadsOWFi+eOsOWcqOWcqOWTqumHjO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d55uX6LS85p2w5YWL6L+Z5Liq5Lq657G75LuO5pyq5a2Y5Zyo6L+H77yM5LuW5Y+q5piv5oiR55So5p2l5o6l6L+R5L2g55qE5LiA5Ymv55qu5ZuK6ICM5bey44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbov5nmoLfllYrvvIzlkbXlkbXjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4uuS7gOS5iOS9oOeci+S4iuWOu+S4neavq+S4jeeUn+awlO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5aSa5LqP5LqG6ay85bid77yM5oiR546w5Zyo55qE6IS+5rCU5aW95b6X6L+e5oiR6Ieq5bex6YO95a6z5oCV44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13or7TotbfmnaXmiJHov5jlvpflpb3lpb3mhJ/osKLkvaDlkaLvvIzlpoLmnpzmsqHmnInmnbDlhYvigKbigKbkvaDnmoTluK7liqnvvIzmiJHml6nlsLHmrbvlnKjnrKzkuIDljLrln5/kuobjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS4jeiuuuS9oOeahOebrueahOWmguS9le+8jOS9oOeahOaJgOS9nOaJgOS4uumDveaYr+WvueaIkeacieWIqeeahOOAguS4jeaYr+WQl++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d6IO95aSf5aaC5q2k5reh5a6a55qE6Z2i5a+56IOM5Y+b77yM55yL5p2l6Lef5LqU5bm05YmN55u45q+U77yM5L2g56Gu5a6e5oiQ6ZW/5LqG5b6I5aSa5ZWK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13kupTlubTliY3vvJ/igKbigKbpu5HmmpflpKfms5XluIjvvIzlnKjov5nkuYvliY3vvIzmiJHku6zlpb3lg4/ntKDmnKrosIvpnaLlkKfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS6lOW5tOWJjemCo+WcuuWxoOWfjuS9oOW6lOivpei/meS4gOeUn+mDveS4jeS8muW/mOiusOWQp+OAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5b6I5LiN5ben77yM6YKj5Zy65bGg5Z+O55qE5Li76LCL77yM5Lmf5piv5oiR44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKZcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXei/meS5iOivtO+8jOWHu+S4reaIkeWPjOS6sueahOmCo+mBk+e0q+iJsumXqueUte+8jOS5n+WwseaYr+S9oOmHiuaUvueahOWQp+KApuKAplwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g55qE5Y+M5Lqy77yf6L+Z56eN5LqL5oOF5oiR5oCO5LmI5Y+v6IO95Lya6K6w5b6X77yfXFxu5L2g6Zq+6YGT5Zyo6Lip5q276JqC6JqB55qE5pe25YCZ6L+Y5Lya5LiA5Y+q5Y+q6K6w5LiL5LuW5Lus55qE5qC35a2Q5ZCX77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13ogIEg5a2QIOimgSDkvaAg55qEIOWRvVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5bqU6K+l5a+55oiR5b+D5oCA5oSf5r+A5omN5a+577yM5aaC5p6c5LiN5piv6YKj5pe255qE5oiR55yL5Ye65LqG5L2g6ZqQ6JeP55qE56iA5pyJ5YuH6ICF5L2T6LSo77yM5L2g57ud5a+55LiN5Y+v6IO95rS75Yiw5LuK5aSp44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lnKjmmpfkuK3liqjmiYvohJrorqnkvaDpgJrov4fli4fogIXpgInmi5TnmoTkurrkuZ/mmK/miJHvvIzmiJHkuIDnm7TkuIDnm7TlnKjmmpfkuK3lvJXlr7zkvaDotbDliLDku4rlpKnov5nkuIDmraXjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaYr+aIkeaVkei1juS6huS4gOaXoOaYr+WkhOeahOS9oOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5Li65LuA5LmI5Y+q5pyJ5oiR5LiA5Liq5Lq65rS75LqG5LiL5p2l77yB77yB77yB77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13kuLrku4DkuYjlgY/lgY/mmK/miJHvvIHvvIHvvIHvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWImuaJjeS4jeaYr+ivtOi/h+S6huWQl++8n+WboOS4uuaIkeeci+WHuuS6huS9oOacieeogOacieWLh+iAheS9k+i0qOWViuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5Yia5Yia6Lef6ay85bid5Lqk6L+H5omL77yM5bqU6K+l5bey57uP5b6I5riF5qWa6L+Z56iA5pyJ5YuH6ICF5L2T6LSo5oSP5ZGz552A5LuA5LmI5LqG5ZCn77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKblsLHlm6DkuLrmiJHmnInov5nnp43kvZPotKjvvIzlsLHkuI3lvpfkuI3og4zotJ/lpoLmraTmrovphbfnmoTlrr/lkb3lkJfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaEmuigou+8gei/meaEj+WRs+edgOWPquimgeaIkeWvueS9oOWKoOS7peW8leWvvOi3n+WfueWFu++8jOS9oOWwseiDveaIkOS4uui/meS4lumXtOWunuWKm+acgOW8uueahOWtmOWcqO+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5omA5Lul77yM5L2g56m256uf5oOz5Yip55So5oiR5bmy5LuA5LmI77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHliKnnlKjkvaDlubLnmoTkuovmg4XvvIzkvaDkuI3mmK/lt7Lnu4/lrozmiJDkuoblkJfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuS9oOivtOS7gOS5iO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN55+l5LiN6KeJ6Ze077yM5L2g5bey57uP5Zyo5oiR55qE5oyH5byV5LiL6Lef6ay85bid5q2j6Z2i5Lqk5omL5bm25LiU5p2A5o6J5LqG5LuW5ZWK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13lsLHov57miJHot5/prLzluJ3nmoTlr7nlhrPigKbigKbkuZ/mmK/ooqvkvaDlronmjpLlpb3kuobnmoTvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOS7rOS4pOS4quS4gOS4quaYr+S6uuexu+WLh+iAhe+8jOS4gOS4quaYr+mtlOeJqeWLh+iAhe+8jOi/n+aXqeS8muacieS6pOaJi+eahOS4gOWkqeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5Y+q5LiN6L+H5piv5pON57q15LqG5LiA57O75YiX55qE6L+e6ZSB5LqL5Lu26K6p6L+Z5LiA5aSp5o+Q5pep5LqG5pWw5Y2B5bm05Yiw5p2l6ICM5bey44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbkvaDov5nmoLflgZrlr7nosIHmnInlpb3lpITvvJ/ku5blj6/mmK/kvaDku6zprZTniankuJbnlYznmoTmlZHkuJbkuLvllYrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4gOS4quaDp+aAleW+geaImO+8jOeIseWlveWSjOW5s+eahOaHpuWkq++8jOS5n+mFjeWPq+aVkeS4luS4u++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d6I635b6X5LqG5Yqb6YeP77yM5Y205Y+q5Lya6KKr5Yqo5oyo5omT6ICM5LiN5Li75Yqo5ZCR5Lq657G75LiW55WM5Ye65Ye777yM6b6f57yp5Zyo56ys5LqM5Yy65Z+f5oO25oO25bqm5pel77yM5LuW5qC55pys5bCx5LiN6YWN5oul5pyJ56iA5pyJ5YuH6ICF5L2T6LSo44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuLrkuobkuI3orqnov5nnp43kurrpnLjljaDnnYDnp6/ntK/lpJrlubTnmoTlup7lpKfngbXprYLog73ph4/ml6DkvZzkuLrvvIzmiJHorr7orqHorqnkvaDmnYDmjonkuobku5bjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOayoeaciei+nOi0n+aIkeeahOacn+W+he+8jOaIkOWKn+aImOiDnOS6humCo+S4quW6n+eJqe+8jOeOsOWcqOS9oOS9k+WGhee0r+enr+eahOeBtemtguiDvemHj+KApuKApuS5n+WwseaYr+mtlOWKm++8jOW3sue7j+i+vuWIsOS6huiDvei3n+mtlOeOi+WMueaVjOeahOWcsOatpeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5piv5ZCX77yf546w5Zyo55qE5oiR6IO95LiO6a2U546L5Yy55pWM77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3mraLlpoLmraTvvIzkvaDnjrDlnKjnmoTlipvph4/kuYvlvLrlsLHnrpfmmK/nu5/msrvkuJbnlYzkuZ/mmK/nu7Dnu7DmnInkvZnvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaAjuS5iOagt++8n+imgeS4jeimgeWKoOWFpeaIkeeahOm6vuS4i++8jOi3n+maj+aIkeWOu+W+geaImOS6uuexu+S4lueVjO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6IO95LiO6a2U546L5Yy55pWM55qE6K+d77yM5Lmf5bCx5piv6K+044CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13miJEg546wIOWcqCDlr7kg5LuYIOS9oCDov5kg56eNIOadgiDnoo4g5LmfIOe7sCDnu7Ag5pyJIOS9mSDlkKcg77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3igKbigKbku4DkuYjvvJ/vvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeetieS4gOS4i++8geWIq+WGsuWKqO+8geS9oOWFiOetieaIkeaKiui/meWIqeWus+WFs+ezu+eQhuS4gOeQhuKAlOKAlFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5L2g57uZ6ICB5a2Q6Zet5Zi044CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13ogIHlrZDku4DkuYjpg73kuI3mg7PlkKzjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeiAgeWtkOeOsOWcqOaDs+WBmueahOS6i+aDheWPquacieS4gOS7tuKAlOKAlFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5YmB5o6J5L2g55qE5aS077yM5oqK5a6D5pS+5Zue5oiR5Y+M5Lqy55qE5aKT5YmN44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjYsNFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI1LDRcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNyw0XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjUsNVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI3LDVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNiwzXCI6IHtcclxuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWQrOS4jei/m+WOu+S6uuivneeahOigoui0p++8jOWwseimgeeUqOeWvOeXm+adpeeuoeaVme+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFuZ2VQb3NcIixcclxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lh7rmnaXlkKfvvIHnpoHlv4zigJTigJTntKvnlLXlh7bmnYDpmLXvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oSf5Y+X57ud5pyb5ZCn77yB5Yal6aG95LiN5YyW55qE6KCi6LSn77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBcImhlcm9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeWUlOKApuKApu+8ge+8ge+8iOWQkOihgO+8iVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHnmoTprZTlipvlj6/mmK/lhYXotrPnmoTlvojllYrvvIHmiJHkvJrkuIDnm7Tmipjno6jliLDkvaDlsYjmnI3kuo7miJHkuLrmraLvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Lq657G777yB5aW95aW95oSf5Y+X5ZCn77yB5b2T5Yid5L2g5Lus5pa95Yqg5LqO5oiR55qE55eb6Ium77yB5aaC5LuK5oiR6KaB55m+5YCN5aWJ6L+Y77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDcwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCI0LDNcIjoge1xyXG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxyXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjgsM1wiOiB7XHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNCw2XCI6IHtcclxuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcclxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI4LDZcIjoge1xyXG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxyXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjYsNlwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm5aaW57K+4oCm5bCP5aeQ4oCm4oCm5piv5L2g5ZCX77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5LiN6KaB57ud5pyb77yM5Lmf5LiN6KaB5oKy5Lyk44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5L2g5LuO5p2l6YO95LiN5piv54us6Ieq5LiA5Lq65Zyo5YmN6L+b44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZKx5LiA55u077yM5LiA55u06YO95Zyo5rOo6KeG552A5L2g44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld6ICN5bCP6IGq5piO55qE5L2g44CB56yo56yo55qE5L2g5ZGG5ZGG55qE5L2g44CB6IOG5bCP55qE5L2g44CB5YuH5pWi55qE5L2g5biF5rCU55qE5L2g4oCm4oCm5YWo6YOo5YWo6YOo6YO95piv5L2g44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5omA5Lul5pS+5b+D5ZCn77yM5peg6K665Y+R55Sf5LuA5LmI77yM5ZKx6YO95Lya6Zmq5Ly05Zyo5L2g6Lqr6L6555qE44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5Zug5Li65L2g6KaB5piv56a75byA5oiR55qE6K+d77yM56uL5Yi75bCx5Lya5q275o6J5ZCn77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuWmlueyvuKApuWwj+WnkOKApuKApuWFtuWunuS4gOebtOS7peadpe+8jOaIkemDvemdnuW4uOaEn+a/gOS9oOKApuKAplwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeesqOibi++8gemDvei/meenjeaXtuWAmeS6huWwseS4jeimgeS9nOWHuuWDj+aYr+S4tOe7iOmBl+iogOeahOWPkeiogOS6huWViu+8ge+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWWgu+8gemCo+i+ueepv+iho+WTgeWRs+W3ruWIsOaegeeCueeahOm7keaal+Wkp+azleW4iO+8jOWIq+W3pumhvuWPs+ebvOivtOeahOWwseaYr+S9oO+8geS9oOW6lOivpeefpemBk+WSseeahOi6q+S7veWQp++8n1xcbui/mOS4jemAn+mAn+mAgOS4i++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lj6/mgbbigKblpJrnrqHpl7LkuovnmoTlppbnsr7ml4/igKbmmI7mmI7lj6ropoHlho3orqnku5bmib/lj5fkuIDngrnnlrznl5vmnaXnk6bop6Pku5bnmoTmhI/lv5flipvvvIzmiJHnmoTorqHliJLlsLHmiJDlip/kuobvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lk7zlk7zlk7x+5oqx5q2J5ZOm77yM6L+Z5Liq56yo6JuL55qE5oSP5b+X5Yqb5Y+v5LiN5YOP5L2g5oOz6LGh55qE6YKj5LmI6JaE5byx5ZOm77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeeUmOW/g++8geaIkeS4jeeUmOW/g++8geWmlueyvuWFrOS4u+WPiOWmguS9le+8gVxcbuWPquimgeaYr+mYu+aMoeaIkeeahO+8jOS4jeeuoeaYr+iwgeaIkemDveimgemTsumZpO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5Xee7iOS6jumcsuWHuueLkOeLuOWwvuW3tOS6hu+8jOWFtuWunuWSseaXqeWwseeci+WHuuS9oOacieiwi+WPjeeahOW/teWktOOAguS9oOeahOiuoeWIkuWwseaYr+aLieaLoui/meWutuS8meWFpeS8meeEtuWQjuaOqOe/u+mtlOeOi+WvuemtlOWhlOeahOe7n+ayu+WvueWQp++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lkbXlkbXlkbXigKbigKbpgqPkuKrmmI/lurjnmoTprZTnjovvvIzmjozmj6HnnYDpgqPkuYjlup7lpKfnmoTprZTnianlhpvpmJ/ljbTlj6rnn6XpgZPlm7rlrojprZTloZTvvIzogIzkuI3kuLvliqjkvrXnlaXkurrnsbvkuJbnlYzmianlvKDpooblnJ/vvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5a6e5Zyo5piv55yL5LiN6L+H55y877yM5omA5Lul5oiR5omN5Yaz5a6a5oqK6L+Z5Liq5YW35aSH56iA5pyJ5YuH6ICF5L2T6LSo55qE5a625LyZ5Z+55YW75oiQ5paw5LiA5Lu76a2U546L77yBXFxu5p2l6K6p6L+Z5Liq5LiW55WM55qE5Yq/5Yqb6YeN5paw5rSX54mM77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5L2g6KeJ5b6X5LiA5Liq5ruh6ISR5a2Q5oOz552A5Zue5a6256eN55Sw55qE5bqf5p+05YuH6ICF5Lya5oiQ5Li65pS55Y+Y5LiW55WM55qE6a2U546L77yf5L2g5pmD5pmD6ISR6KKL6K+V6K+V77yM5piv5LiN5piv6IO95ZCs5Yiw5aSn5rW355qE5aOw6Z+z77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaBvOS6uuiHs+aegeeahOWmlueyvuaXj++8geWRteWRteWRteKApuKApuaIkeW5suiEhuS4gOS4jeWBmuS6jOS4jeS8ke+8jOi/nuS9oOS5n+S4gOWdl+aUtuaLvuS6huWQp++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWIq+Wwj+eep+WSse+8geWSseWlveatueS5n+aYr+WmlueyvuaXj+mHjOWunuWKm+aVsOS4gOaVsOS6jOeahOWtmOWcqO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lj6rkvJrogI3lmLTnmq7lrZDnmoTmgbzkurroi43onYfvvIHmiJHlgJLopoHnnIvnnIvkuIDlnZfnhKbngq3kvJrkuI3kvJror7Tor53vvIFcXG7igJTigJTmi5vpm7flvLnvvIHvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRodW5kZXJcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWIh++8jOi/meeCueS8pOeXm+i3n+S7luWImuaJjee7j+WOhueahOi6q+W/g+WcsOeLseebuOavlOagueacrOWwseS4jeeul+S7gOS5iOOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lk7zvvIHnv4XohoDpg73ooqvng6fnhKbkuobov5jopoHlmLTnoazvvJ/kvaDpmr7kuI3miJDnnJ/ku6XkuLrmiJHkuI3kvJrlr7nkvaDliqjnnJ/moLzvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6L+Z5re36JuL77yB57uZ5oiR56a75aW56L+c54K577yB77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld77yB4oCm5L2g546w5Zyo5Y+X5LqG5b6I5Lil6YeN55qE6Ie05ZG95Lyk77yM5Lmx5Yqo5LuA5LmI77yfXFxu5LmW44CC5Yir5oCV77yM6L+Z6YeM5pyJ5ZKx6aG2552A77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5a+55LqG77yM5ZKx5YaN6Zeu5L2g5LiA6YGN77yM5L2g5piv5b6I54+N5oOc6Ieq5bex5oCn5ZG955qE5a+55ZCn77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXe+8geKApuetieetieKApuWmlueyvuWwj+WnkO+8jOS9oOS4jeS8muaYr+KApuKApu+8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWWgu+8jOm7keaal+Wkp+azleW4iO+8jOS9oOS9nOS4uumtlOWhlOmHjOacgOWNmuWtpuWkmuivhueahOigoui0p++8jOW6lOivpeWvueWSseWmlueyvuaXj+eahOeJueauiuiDveWKm+WGjea4healmuS4jei/h+WQp++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ku4DkuYjvvJ/vvIHpmr7kuI3miJDkvaDmmK/mg7PvvIHvvIHkuI3lj6/og73igKbigKZcXG7lsLHkuLrkuobkuIDkuKrmuLrlsI/nmoTkurrnsbvvvIzkuI3lj6/nkIbllrvvvIHvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lk7zlk7zlk7zvvIHkvaDlrrPmgJXnmoTooajmg4Xlj6/nnJ/nvo7lkbPvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3kuI3ov4fmr5Totbfov5nkuKrvvIzlkrHmm7TmnJ/lvoXkvaDlkIPliLDigJzlppbnsr7oh6rnga3lhrLlh7vigJ3kuYvlkI7nmoTmrbvnirblk6bvvIF+XCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4je+8ge+8geS4jeW6lOivpeaYr+i/meagt+eahO+8geaIkeWujOe+jueahOiuoeWIkuern+eEtuS8muiiq+S4gOWPquWwj+Wwj+eahOWmlueyvuegtOWdj++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13kuI3opoHvvIHigKbigKbljYPkuIfkuI3opoHvvIHigKbigKbkuLrkuobmiJHov5nnp43kurrigKbigKbllJTvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nrKjom4vvvIzliqjpg73liqjkuI3kuobkuoblsLHkuI3opoHlvLrmkpHnnYDnq5notbfmnaXkuobllYrjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nnJ/mmK/nmoTvvIzpg73liLDmnIDlkI7kuIDliLvkuobvvIzkvaDov5nlrrbkvJnlpb3mrbnkuZ/orqnlkrHnnIHngrnlv4PlkKfjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3pgqPkuYjvvIzlho3op4HkuobigKbigKbmiJHnmoTli4fogIXlpKfkurrjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDcwMCxcclxuICAgICAgICAgICAgICAgIFwic3RlcHNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN5Y+v6IO977yB77yB77yB77yB77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaGFuZ2VGbG9vclwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm5aaW57K+4oCm5bCP5aeQ4oCm4oCmXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuKApuWmlueyvuWwj+WnkO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13mmK/moqblkJfvvJ/igKbigKbkuI3lr7nvvIzkuLrku4DkuYjmiJHlnKjmtYHms6rvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d6L+Z6aKX5ryC5Lqu55qE5a6d55+z5piv4oCm4oCm77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeaIkeWFqOmDveaDs+i1t+adpeS6huKApuKApuWmlueyvuWwj+WnkOS4uuS6huaIkeKApuKAplxcbueJuueJsuS6huiHquW3seeahOaAp+WRveOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13lnKjov5npopflrp3nn7PkuIrvvIzmiJHog73mhJ/lj5fliLDkvaDnmoTmuKnluqbigKbigKZcXG7nhp/mgonogIzlj4jku6Tkurrlronlv4PvvIzov5nlsLHmmK/kvaDmnIDlkI7nlZnnu5nmiJHnmoTkuJzopb/lkJfigKbigKZcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5aW95rip5pqW4oCm4oCmXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnllbGxvd0pld2VsXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm4oCmXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiNiw1XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH1cclxufSxcclxuXCJjaGFuZ2VGbG9vclwiOiB7XHJcbiAgICBcIjYsMFwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJ1cEZsb29yXCJcclxuICAgIH0sXHJcbiAgICBcIjYsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTJcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXHJcbiAgICB9XHJcbn0sXHJcblwiYWZ0ZXJCYXR0bGVcIjoge1xyXG4gICAgXCI2LDRcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5aSp55yf77yB5L2g5Lul5Li66L+Z5qC35bCx6IO95oiY6IOc5oiR5ZCX77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI3LDVcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5omT6LSl55qE5LiN6L+H5piv5oiR5LyX5aSa5YiG6Lqr5Lit55qE5YW25Lit5LiA5Liq6ICM5bey44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI1LDRcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g55qE6Lqr5L2T5bey57uP5Lyk55eV57Sv57Sv5LqG77yM5Y+v5oiR6L+Y55WZ5pyJ552A5Lmd5oiQ5aSa55qE6a2U5Yqb44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI1LDVcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d6aG95Zu655qE5a625LyZ77yB5pS+5byD5oq15oqX5ZCn77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI3LDRcIjogW1xyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZOI5ZOI5ZOI5ZOI77yB5oiR55qE54G16a2C6L+c5q+U5L2g5oOz6LGh55qE5by65aSn77yBXFxu5oiR5Y2z5piv5rC45oGS77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59LFxyXG5cImFmdGVyR2V0SXRlbVwiOiB7fSxcclxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxyXG5cImNhbm5vdE1vdmVcIjoge30sXHJcblwiYmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJmZ21hcFwiOiBbXHJcblxyXG5dLFxyXG59IiwiY29uc3QgSmltcCA9IHJlcXVpcmUoJ2ppbXAnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IG1hdGVyaWFscyA9IFtcbiAgJ2FuaW1hdGVzJyxcbiAgJ2VuZW15cycsXG4gICdoZXJvJywgJ2l0ZW1zJywgJ25wY3MnLCAndGVycmFpbnMnLCAnZW5lbXk0OCcsICducGM0OCcsXG4gICdhaXJ3YWxsJyxcbiAgJ2ljb25zJyxcbl07XG5jb25zdCBpbWFnZXNEaXIgPSBwYXRoLnJlc29sdmUoJy4uL21vdGEtanMvcHJvamVjdC9pbWFnZXMnKTtcbmNvbnN0IHJlYWRJbWFnZSA9IChyb290RGlyLCBhcnIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBhcnIuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGxldCByZWFsTmFtZSA9IG5hbWU7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLicpID09PSAtMSkgcmVhbE5hbWUgPSBgJHtuYW1lfS5wbmdgO1xuICAgIGxpc3QucHVzaChcbiAgICAgIEppbXAucmVhZChgJHtpbWFnZXNEaXJ9LyR7cmVhbE5hbWV9YCkudGhlbihpbWFnZSA9PiB7XG4gICAgICAgIHJvb3REaXJbbmFtZV0gPSBpbWFnZTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpLFxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwobGlzdCk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICBjb25zdCB7IG1haW4gfSA9IGdsb2JhbDtcbiAgY29uc3QgX3Jvb3QgPSBtYWluLmltYWdlcztcbiAgbWFpbi5pbWFnZXNEaXIgPSBpbWFnZXNEaXI7XG4gIGNvbnNvbGUubG9nKF9yb290KTtcbiAgYXdhaXQgcmVhZEltYWdlKF9yb290LCBtYXRlcmlhbHMpO1xuICBhd2FpdCByZWFkSW1hZ2UoX3Jvb3QuYXV0b3RpbGUsIG1haW4uYXV0b3RpbGVzKTtcbiAgYXdhaXQgcmVhZEltYWdlKF9yb290LnRpbGVzZXRzLCBtYWluLnRpbGVzZXRzKTtcbiAgYXdhaXQgcmVhZEltYWdlKF9yb290LmV4dHJhSW1hZ2VzLCBtYWluLnJhd0ltYWdlcyk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkSW1hZ2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==