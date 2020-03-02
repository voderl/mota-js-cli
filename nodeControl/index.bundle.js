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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2ljb25zLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9tYXBzLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9kYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyZWUtdGV4LXBhY2tlci1jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9NVDAuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUwLmpzIiwid2VicGFjazovLy8uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvc2FtcGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9tb3RhLWpzL3Byb2plY3QvZmxvb3JzL3NhbXBsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vbW90YS1qcy9wcm9qZWN0L2Zsb29ycy9zYW1wbGUzLmpzIiwid2VicGFjazovLy8uL25vZGVDb250cm9sL2xvYWRJbWFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDd0I7O0FBRXVFO0FBQ0g7QUFDQTs7QUFFNUYsV0FBVyxtQkFBTyxDQUFDLENBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLENBQU07QUFDM0I7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxDQUFzQjs7QUFFcEQsY0FBYyxVQUFVLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtGQUFJO0FBQ3BCLDZCQUE2QixpR0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEI7QUFDQSxlQUFlLHNCQUE2RDtBQUM1RSxPQUFPLDhCQUE4QixHQUFHLCtGQUFJO0FBQzVDLGdCQUFnQiwrRkFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLFFBQVE7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVLCtGQUFJO0FBQ2pCLHNDQUFzQywrRkFBSTtBQUMxQyxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLGlHQUFLO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFjOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFJO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUk7QUFDdkI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUk7QUFDM0I7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBSTtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0EsaUNBQWlDLEdBQUc7QUFDcEMsZUFBZTtBQUNmLFdBQVc7QUFDWDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckMsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztBQ25SRCxpQzs7Ozs7OztBQ0FBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1FBO0FBQUE7QUFBTztBQUNQO0FBQ0EsT0FBTyxtREFBbUQ7QUFDMUQsT0FBTyxrREFBa0Q7QUFDekQsT0FBTyxpREFBaUQ7QUFDeEQsT0FBTywyQ0FBMkM7QUFDbEQsT0FBTywyQ0FBMkM7QUFDbEQsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyxzQ0FBc0M7QUFDN0MsT0FBTyx1Q0FBdUM7QUFDOUMsT0FBTyxzQ0FBc0M7QUFDN0MsUUFBUSx1Q0FBdUM7QUFDL0MsUUFBUSxtRUFBbUU7QUFDM0UsUUFBUSxxRUFBcUU7QUFDN0UsUUFBUSxtRUFBbUU7QUFDM0UsUUFBUSxvRUFBb0U7QUFDNUUsUUFBUSxnREFBZ0Q7QUFDeEQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxrQ0FBa0M7QUFDMUMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSx3REFBd0Q7QUFDaEUsUUFBUSxzREFBc0Q7QUFDOUQsUUFBUSxxREFBcUQ7QUFDN0QsUUFBUSx1REFBdUQ7QUFDL0QsUUFBUSx5REFBeUQ7QUFDakUsUUFBUSx1REFBdUQ7QUFDL0QsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSxpREFBaUQ7QUFDekQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUSxrREFBa0Q7QUFDMUQsUUFBUSxnREFBZ0Q7QUFDeEQsUUFBUSxrREFBa0Q7QUFDMUQsUUFBUSxrREFBa0Q7QUFDMUQsUUFBUSxtREFBbUQ7QUFDM0QsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUywyQkFBMkI7QUFDcEMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxxQ0FBcUMsd0RBQXdEO0FBQ3RHLFNBQVMscUNBQXFDLHdEQUF3RDtBQUN0RyxTQUFTLHFDQUFxQyx3REFBd0Q7QUFDdEcsU0FBUyxxQ0FBcUMsd0RBQXdEO0FBQ3RHLFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMsdUdBQXVHO0FBQ2hILFNBQVMscUdBQXFHO0FBQzlHLFNBQVMsd0dBQXdHO0FBQ2pILFNBQVMsdUdBQXVHO0FBQ2hILFNBQVMscUVBQXFFO0FBQzlFLFNBQVMsZ0RBQWdEO0FBQ3pELFNBQVMsMkRBQTJEO0FBQ3BFLFNBQVMsOENBQThDO0FBQ3ZELFNBQVMsOERBQThEO0FBQ3ZFLFNBQVMsZ0VBQWdFO0FBQ3pFLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsNkJBQTZCO0FBQ3RDLFNBQVMsNkJBQTZCO0FBQ3RDLFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsc0NBQXNDO0FBQy9DLFNBQVMsc0NBQXNDO0FBQy9DLFNBQVMsb0NBQW9DO0FBQzdDLFNBQVMsNkJBQTZCO0FBQ3RDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMscUNBQXFDO0FBQzlDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMscUNBQXFDO0FBQzlDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMscUNBQXFDO0FBQzlDLFNBQVMseUNBQXlDO0FBQ2xELFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsb0NBQW9DO0FBQzdDLFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsb0NBQW9DO0FBQzdDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMscUNBQXFDO0FBQzlDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsK0JBQStCO0FBQ3hDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsbUNBQW1DO0FBQzVDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVMsNkJBQTZCO0FBQ3RDLFNBQVMsaUNBQWlDO0FBQzFDLFNBQVMsa0NBQWtDO0FBQzNDLFNBQVM7QUFDVCxDOzs7Ozs7O0FDck1BO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxlQUFlLGdCQUFnQiwyQkFBMkIsc0JBQXNCO0FBQ2xJLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osY0FBYztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CLDJDQUEyQyxrQkFBa0Isc0NBQXNDLG9EQUFvRCxtQ0FBbUMseUNBQXlDLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxzQkFBc0IsNENBQTRDLEVBQUUsR0FBRztBQUNqWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDaGFBLCtCOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxtQkFBbUI7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUI7QUFDOUQ7QUFDQSxxRkFBcUYseUJBQXlCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJCQUEyQixJQUFJLEdBQUcsR0FBRztBQUNyQyxrQ0FBa0MsV0FBVyxPQUFPLFdBQVcsWUFBWSwyQkFBMkIsUUFBUSxzQkFBc0IsT0FBTyxlQUFlLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxhQUFhLEtBQUssVUFBVSxLQUFLLGVBQWUsV0FBVyxlQUFlO0FBQ3RSLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUJBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzQkFBc0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQsaUJBQWlCO0FBQ2pCLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG1CQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxtREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDOXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7OztBQzUrQkE7QUFBQSxXQUFXLG1CQUFPLENBQUMsQ0FBSTtBQUN2QixhQUFhLG1CQUFPLENBQUMsQ0FBTTtBQUMzQixhQUFhLG1CQUFPLENBQUMsQ0FBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCx1QkFBdUIsV0FBVyxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQsc0JBQXNCLFVBQVUsR0FBRyxTQUFTO0FBQzVDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLLEdBQUcsRUFBRTtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QixLQUFLO0FBQ0w7QUFDZSx5RUFBVSxFQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXItbW9yYW4vamltcFxuaW1wb3J0IEppbXAgZnJvbSAnamltcCc7XG5cbmltcG9ydCB7IGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSBhcyBpY29ucyB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9pY29ucyc7XG5pbXBvcnQgeyBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSBhcyBtYXBzIH0gZnJvbSAnLi4vbW90YS1qcy9wcm9qZWN0L21hcHMnO1xuaW1wb3J0IHsgZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQgYXMgZGF0YSB9IGZyb20gJy4uL21vdGEtanMvcHJvamVjdC9kYXRhJztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIOaJk+WMheW3peWFtyBodHRwczovL2dpdGh1Yi5jb20vb2RyaWNrL2ZyZWUtdGV4LXBhY2tlci1jb3JlXG5jb25zdCB0ZXh0dXJlUGFja2VyID0gcmVxdWlyZSgnZnJlZS10ZXgtcGFja2VyLWNvcmUnKTtcblxuY29uc3QgbWFpbiA9IHsgZmxvb3JzOiB7IH0gfTtcbmdsb2JhbC5tYWluID0gbWFpbjtcbmdsb2JhbC53aW5kb3cgPSB7fTtcbm1haW4ub3V0cHV0UGF0aCA9IHBhdGgucmVzb2x2ZSgnLi9kYXRhJyk7XG5tYWluLnRpbGVzZXRzID0gZGF0YS5tYWluLnRpbGVzZXRzO1xubWFpbi5hdXRvdGlsZXMgPSBPYmplY3Qua2V5cyhpY29ucy5hdXRvdGlsZSk7XG5tYWluLmljb25zID0ge1xuICBmbG9vcjogMCxcbiAgbHY6IDEsXG4gIGhwbWF4OiAyLFxuICBocDogMyxcbiAgYXRrOiA0LFxuICBkZWY6IDUsXG4gIG1kZWY6IDYsXG4gIG1vbmV5OiA3LFxuICBleHBlcmllbmNlOiA4LFxuICB1cDogOSxcbiAgYm9vazogMTAsXG4gIGZseTogMTEsXG4gIHRvb2xib3g6IDEyLFxuICBrZXlib2FyZDogMTMsXG4gIHNob3A6IDE0LFxuICBzYXZlOiAxNSxcbiAgbG9hZDogMTYsXG4gIHNldHRpbmdzOiAxNyxcbiAgcGxheTogMTgsXG4gIHBhdXNlOiAxOSxcbiAgc3RvcDogMjAsXG4gIHNwZWVkRG93bjogMjEsXG4gIHNwZWVkVXA6IDIyLFxuICByZXdpbmQ6IDIzLFxuICBlcXVpcGJveDogMjQsXG4gIG1hbmE6IDI1LFxuICBza2lsbDogMjYsXG4gIHBhaW50OiAyNyxcbiAgZXJhc2U6IDI4LFxuICBlbXB0eTogMjksXG4gIGV4aXQ6IDMwLFxuICBidG4xOiAzMSxcbiAgYnRuMjogMzIsXG4gIGJ0bjM6IDMzLFxuICBidG40OiAzNCxcbiAgYnRuNTogMzUsXG4gIGJ0bjY6IDM2LFxuICBidG43OiAzNyxcbiAgYnRuODogMzgsXG59O1xubWFpbi5pbWFnZXMgPSB7XG4gIHRpbGVzZXRzOiB7fSxcbiAgYXV0b3RpbGU6IHt9LFxuICBleHRyYUltYWdlczoge30sXG4gIGFuaW1hdGVzQnVmZmVyOiB7fSxcbn07XG5jb25zdCBmbG9vcnMgPSByZXF1aXJlLmNvbnRleHQoJy4uL21vdGEtanMvcHJvamVjdC9mbG9vcnMvJywgZmFsc2UsIC9cXC5qcyQvKTtcbmNvbnN0IHsgZmxvb3JJZHMsIGltYWdlczogcmF3SW1hZ2VzIH0gPSBkYXRhLm1haW47XG5tYWluLmFuaW1hdGVzID0gZGF0YS5tYWluLmFuaW1hdGVzO1xubWFpbi5yYXdJbWFnZXMgPSByYXdJbWFnZXM7XG5jb25zdCBibG9ja0lkcyA9IHt9O1xuLy8g5Yqg6L295Ye65Zyw5Zu+5pWw57uE5Lit5omA5L2/55So55qEYmxvY2sg55qEbnVtXG4oZnVuY3Rpb24gbG9hZEZsb29ycygpIHtcbiAgY29uc3QgaW5pdEJsb2NrID0gbnVtID0+IHtcbiAgICBpZiAoYmxvY2tJZHNbbnVtXSkgcmV0dXJuO1xuICAgIGJsb2NrSWRzW251bV0gPSB0cnVlO1xuICB9O1xuICBjb25zdCB0cmF2ZXJzYWxBcnJheSA9IChhcnIsIGZ1bmMpID0+IHtcbiAgICBpZiAoYXJyIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBhcnIuZm9yRWFjaChuID0+IHRyYXZlcnNhbEFycmF5KG4sIGZ1bmMpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IGZsb29ycyhgLi8ke2Zsb29ySWR9LmpzYCkpO1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IHtcbiAgICBjb25zdCBmbG9vciA9IG1haW4uZmxvb3JzW2Zsb29ySWRdO1xuICAgIHRyYXZlcnNhbEFycmF5KFtmbG9vci5tYXAsIGZsb29yLmZnbWFwLCBmbG9vci5iZ21hcF0sIGluaXRCbG9jayk7XG4gIH0pO1xufSgpKTtcblxuY29uc3QgZ2V0VGlsZXNldE9mZnNldCA9IChudW0pID0+IHtcbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gMTAwMDA7XG4gIGlmIChudW0gPCBzdGFydE9mZnNldCkgcmV0dXJuIG51bGw7XG4gIGZvciAoY29uc3QgaSBpbiBtYWluLnRpbGVzZXRzKSB7XG4gICAgY29uc3QgdGlsZXNldElkID0gbWFpbi50aWxlc2V0c1tpXTtcbiAgICBjb25zdCBpbWdOYW1lID0gdGlsZXNldElkO1xuICAgIGNvbnN0IGltZyA9IG1haW4uaW1hZ2VzLnRpbGVzZXRzW2ltZ05hbWVdO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5mbG9vcihpbWcuYml0bWFwLndpZHRoIC8gMzIpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1nLmJpdG1hcC5oZWlnaHQgLyAzMik7XG4gICAgaWYgKG51bSA+PSBzdGFydE9mZnNldCAmJiBudW0gPCBzdGFydE9mZnNldCArIHdpZHRoICogaGVpZ2h0KSB7XG4gICAgICBjb25zdCB4ID0gKG51bSAtIHN0YXJ0T2Zmc2V0KSAlIHdpZHRoO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KChudW0gLSBzdGFydE9mZnNldCkgLyB3aWR0aCwgMTApO1xuICAgICAgcmV0dXJuIHsgaW1hZ2U6IGltZywgeCwgeSB9O1xuICAgIH1cbiAgICBzdGFydE9mZnNldCArPSBzdGFydE9mZnNldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRBbmltYXRlRnJhbWVzID0gZnVuY3Rpb24gKGNscywgdXNlT3JpZ2luVmFsdWUpIHtcbiAgaWYgKGNscyA9PT0gJ2VuZW15cycgfHwgY2xzID09PSAnbnBjcycpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBpZiAoY2xzID09PSAnYW5pbWF0ZXMnIHx8IGNscyA9PT0gJ2VuZW15NDgnKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgaWYgKGNscyA9PT0gJ25wYzQ4Jykge1xuICAgIHJldHVybiB1c2VPcmlnaW5WYWx1ZSA/IDQgOiAxO1xuICB9XG4gIHJldHVybiAxO1xufTtcbmNvbnN0IGdldEJsb2NrID0gKG51bSkgPT4ge1xuICBsZXQgYmxvY2s7XG4gIGlmIChudW0gPT09IDApIHJldHVybiBudWxsO1xuICAvLyBhbG9uZSDmjIfkuIDkuKrlm77niYflr7nlupTkuIDkuKpibG9ja1xuICBpZiAobnVtID09PSAxNykgeyAvLyBhaXJ3YWxsXG4gICAgYmxvY2sgPSB7XG4gICAgICBjbHM6ICd0ZXJyYWlucycsXG4gICAgICBpZDogJ2FpcndhbGwnLFxuICAgICAgaW1hZ2U6IG1haW4uaW1hZ2VzLmFpcndhbGwsXG4gICAgICBhbG9uZTogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1hcHNbbnVtXSkge1xuICAgIGJsb2NrID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYXBzW251bV0pKTtcbiAgICBjb25zdCB7IGlkLCBjbHMgfSA9IGJsb2NrO1xuICAgIGlmIChjbHMgPT09ICdhdXRvdGlsZScpIHtcbiAgICAgIGJsb2NrLmltYWdlID0gbWFpbi5pbWFnZXMuYXV0b3RpbGVbaWRdO1xuICAgICAgYmxvY2suYWxvbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibG9jay5pbWFnZSA9IG1haW4uaW1hZ2VzW2Nsc107XG4gICAgICBibG9jay5wb3NZID0gaWNvbnNbY2xzXVtpZF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRpbGVzZXRPZmZzZXQgPSBnZXRUaWxlc2V0T2Zmc2V0KG51bSk7XG4gICAgaWYgKHRpbGVzZXRPZmZzZXQpIHtcbiAgICAgIGJsb2NrID0ge1xuICAgICAgICBjbHM6ICd0aWxlc2V0JyxcbiAgICAgICAgaWQ6IGBYJHtudW19YCxcbiAgICAgICAgcG9zWDogdGlsZXNldE9mZnNldC54LFxuICAgICAgICBwb3NZOiB0aWxlc2V0T2Zmc2V0LnksXG4gICAgICAgIGltYWdlOiB0aWxlc2V0T2Zmc2V0LmltYWdlLFxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFibG9jay5hbmltYXRlKSB7XG4gICAgYmxvY2suYW5pbWF0ZSA9IGdldEFuaW1hdGVGcmFtZXMoYmxvY2suY2xzLCB0cnVlKTtcbiAgfVxuICBibG9jay5oZWlnaHQgPSAzMjtcbiAgaWYgKGJsb2NrLmNscyA9PT0gJ2VuZW15NDgnIHx8IGJsb2NrLmNscyA9PT0gJ25wYzQ4JykgYmxvY2suaGVpZ2h0ID0gNDg7XG4gIGJsb2NrLnBvc1ggPSBibG9jay5wb3NYIHx8IDA7XG4gIGJsb2NrLnBvc1kgPSBibG9jay5wb3NZIHx8IDA7XG4gIHJldHVybiBibG9jaztcbn07XG5jb25zdCBsb2FkSW1hZ2VzID0gcmVxdWlyZSgnLi9sb2FkSW1hZ2VzJykuZGVmYXVsdDtcblxubG9hZEltYWdlcygpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygn6LWE5rqQ5Yqg6L295a6M5oiQJyk7XG4gIGNvbnN0IGJsb2Nrc0J1ZmZlciA9IHt9O1xuICAvLyDliqDovb1ibG9ja3NcbiAgT2JqZWN0LmtleXMoYmxvY2tJZHMpLmZvckVhY2goKG51bUlkKSA9PiB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQobnVtSWQsIDEwKTtcbiAgICBjb25zdCBibG9jayA9IGdldEJsb2NrKG51bSk7XG4gICAgaWYgKCFibG9jaykgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIGltYWdlLCBwb3NYLCBwb3NZLCBhbmltYXRlLCBhbG9uZSwgaWQsIGhlaWdodCxcbiAgICB9ID0gYmxvY2s7XG4gICAgaWYgKCFpbWFnZSkgcmV0dXJuO1xuICAgIGlmIChhbG9uZSkge1xuICAgICAgaW1hZ2UuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGltYWdlQnVmZmVyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGltYWdlQnVmZmVyO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxvYWQgcHJvbWlzZSDliqDlhaXmlbDnu4RcbiAgICBjb25zdCB0ZW1wID0gbmV3IEppbXAoMzIgKiBhbmltYXRlLCBoZWlnaHQsIChlcnIsIGltZykgPT4ge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgaW1nLmJsaXQoaW1hZ2UsIDAsIDAsIHBvc1ggKiAzMiwgcG9zWSAqIGhlaWdodCwgMzIgKiBhbmltYXRlLCBoZWlnaHQpXG4gICAgICAgIC5nZXRCdWZmZXIoSmltcC5NSU1FX1BORywgKGVyciwgYnVmZmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgIGJsb2Nrc0J1ZmZlcltpZF0gPSBidWZmZXI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgLy8g5Yqg6L29aWNvbnNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpY29uc0RhdGEgPSBtYWluLmljb25zO1xuICAgIGNvbnN0IGljb25zSW1nID0gbWFpbi5pbWFnZXMuaWNvbnM7XG4gICAgT2JqZWN0LmtleXMoaWNvbnNEYXRhKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXcgSmltcCgzMiwgMzIsIChlcnIsIGltZykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGltZy5ibGl0KGljb25zSW1nLCAwLCAwLCAwLCBpY29uc0RhdGFbaWRdICogMzIsIDMyLCAzMilcbiAgICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyDliqDovb3pop3lpJZpbWFnZXNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGV4dHJhSW1hZ2VzIH0gPSBtYWluLmltYWdlcztcbiAgICBPYmplY3Qua2V5cyhleHRyYUltYWdlcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCB7IFtpZF06IGltYWdlIH0gPSBleHRyYUltYWdlcztcbiAgICAgIC8vIOi+g+Wkp+eahOWbvueJhyDlj6/og73ooqtqaW1wIOWkhOeQhuWQjuS9k+enr+WinuWkpyDlpoJiZy5qcGcg5Zug5q2k6L6D5aSn5Zu+54mH5Y2V54us5aSE55CGXG4gICAgICAvLyDlm6DmraTlnKjmraTph43mlrDor7vlj5bmlofku7bph43mlrDlhpnlhaVcbiAgICAgIGlmIChpbWFnZS5iaXRtYXAud2lkdGggKiBpbWFnZS5iaXRtYXAuaGVpZ2h0ID49IDE2MDAwMCkge1xuICAgICAgICBmcy5yZWFkRmlsZShgJHtwYXRoLnJlc29sdmUobWFpbi5pbWFnZXNEaXIsIGlkKX1gLFxuICAgICAgICAgIChlcnIsIGltZykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGAke3BhdGgucmVzb2x2ZSgnLi9kYXRhJywgaWQpfWAsIGltZyxcbiAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5YaZ5YWlJHtpZH3miJDlip9gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGltYWdlLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBpbWFnZUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGxldCBiYXNlbmFtZSA9IGlkO1xuICAgICAgICBpZiAoaWQubGFzdEluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBiYXNlbmFtZSA9IGlkLnN1YnN0cmluZygwLCBpZC5sYXN0SW5kZXhPZignLicpKTtcbiAgICAgICAgfVxuICAgICAgICBibG9ja3NCdWZmZXJbYmFzZW5hbWVdID0gaW1hZ2VCdWZmZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSgpKTtcbiAgLy8g5Yqg6L29YW5pbWF0ZSDmmK/lkKblrZjlnKjlhbbkvZnmlofku7ZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGVzQnVmZmVyIH0gPSBtYWluLmltYWdlcztcbiAgICBPYmplY3Qua2V5cyhhbmltYXRlc0J1ZmZlcikuZm9yRWFjaChpZCA9PiB7XG4gICAgICBibG9ja3NCdWZmZXJbaWRdID0gYW5pbWF0ZXNCdWZmZXJbaWRdO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyBuZXcgSmltcCDmmK/lvILmraXnmoTvvIzkvYbmmK/msqHmnInov5Tlm55Qcm9taXNlIOWboOatpOeUqHNldFRpbWVvdXRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gW107XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRleHR1cmVOYW1lOiAncGFja2VyJyxcbiAgICAgIGFsbG93Um90YXRpb246IHRydWUsXG4gICAgICBleHBvcnRlcjogJ1BpeGknLFxuICAgICAgZGV0ZWN0SWRlbnRpY2FsOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICB9O1xuICAgIGNvbnN0IHsgb3V0cHV0UGF0aCB9ID0gbWFpbjtcbiAgICBPYmplY3Qua2V5cyhibG9ja3NCdWZmZXIpLmZvckVhY2goKGlkKSA9PiBpbWFnZXMucHVzaCh7XG4gICAgICBwYXRoOiBpZCxcbiAgICAgIGNvbnRlbnRzOiBibG9ja3NCdWZmZXJbaWRdLFxuICAgIH0pKTtcbiAgICB0ZXh0dXJlUGFja2VyKGltYWdlcywgb3B0aW9ucywgKGZpbGVzLCBlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhY2thZ2luZyBmYWlsZWQnLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgZnMud3JpdGVGaWxlKHBhdGgucmVzb2x2ZShvdXRwdXRQYXRoLCBpdGVtLm5hbWUpLCBpdGVtLmJ1ZmZlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aXRlbS5uYW1lfeWGmeWFpeaIkOWKn2ApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXBcIik7IiwiZXhwb3J0IHZhciBpY29uc180NjY1ZWUxMl8zYTFmXzQ0YTRfYmVhM18wZmNjYmE2MzRkYzEgPSBcclxue1xyXG5cdFwiaGVyb1wiOiB7XHJcblx0XHRcImRvd25cIjoge1xyXG5cdFx0XHRcImxvY1wiOiAwLFxyXG5cdFx0XHRcInN0b3BcIjogMCxcclxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxyXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXHJcblx0XHR9LFxyXG5cdFx0XCJsZWZ0XCI6IHtcclxuXHRcdFx0XCJsb2NcIjogMSxcclxuXHRcdFx0XCJzdG9wXCI6IDAsXHJcblx0XHRcdFwibGVmdEZvb3RcIjogMSxcclxuXHRcdFx0XCJyaWdodEZvb3RcIjogM1xyXG5cdFx0fSxcclxuXHRcdFwicmlnaHRcIjoge1xyXG5cdFx0XHRcImxvY1wiOiAyLFxyXG5cdFx0XHRcInN0b3BcIjogMCxcclxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxyXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXHJcblx0XHR9LFxyXG5cdFx0XCJ1cFwiOiB7XHJcblx0XHRcdFwibG9jXCI6IDMsXHJcblx0XHRcdFwic3RvcFwiOiAwLFxyXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXHJcblx0XHRcdFwicmlnaHRGb290XCI6IDNcclxuXHRcdH0sXHJcblx0XHRcIndpZHRoXCI6IDMyLFxyXG5cdFx0XCJoZWlnaHRcIjogNDhcclxuXHR9LFxyXG5cdFwidGVycmFpbnNcIjoge1xyXG5cdFx0XCJncm91bmRcIjogMCxcclxuXHRcdFwiZ3Jhc3NcIjogMSxcclxuXHRcdFwiZ3Jhc3MyXCI6IDIsXHJcblx0XHRcInllbGxvd1dhbGxcIjogMyxcclxuXHRcdFwid2hpdGVXYWxsXCI6IDQsXHJcblx0XHRcImJsdWVXYWxsXCI6IDUsXHJcblx0XHRcInNub3dHcm91bmRcIjogNixcclxuXHRcdFwiZ3JvdW5kMlwiOiA3LFxyXG5cdFx0XCJncm91bmQzXCI6IDgsXHJcblx0XHRcImdyb3VuZDRcIjogOSxcclxuXHRcdFwic2FuZFwiOiAxMCxcclxuXHRcdFwiZ3JvdW5kNVwiOiAxMSxcclxuXHRcdFwieWVsbG93V2FsbDJcIjogMTIsXHJcblx0XHRcIndoaXRlV2FsbDJcIjogMTMsXHJcblx0XHRcImJsdWVXYWxsMlwiOiAxNCxcclxuXHRcdFwiYmxvY2tXYWxsXCI6IDE1LFxyXG5cdFx0XCJncmF5V2FsbFwiOiAxNixcclxuXHRcdFwid2hpdGVcIjogMTcsXHJcblx0XHRcImdyb3VuZDZcIjogMTgsXHJcblx0XHRcInNvaWxcIjogMTksXHJcblx0XHRcImdyb3VuZDdcIjogMjAsXHJcblx0XHRcImdyb3VuZDhcIjogMjEsXHJcblx0XHRcImljZVwiOiAyMixcclxuXHRcdFwiZG93bkZsb29yXCI6IDIzLFxyXG5cdFx0XCJ1cEZsb29yXCI6IDI0LFxyXG5cdFx0XCJ5ZWxsb3dEb29yXCI6IDI1LFxyXG5cdFx0XCJibHVlRG9vclwiOiAyNixcclxuXHRcdFwicmVkRG9vclwiOiAyNyxcclxuXHRcdFwiZ3JlZW5Eb29yXCI6IDI4LFxyXG5cdFx0XCJzcGVjaWFsRG9vclwiOiAyOSxcclxuXHRcdFwic3RlZWxEb29yXCI6IDMwLFxyXG5cdFx0XCJibHVlU2hvcC1sZWZ0XCI6IDMxLFxyXG5cdFx0XCJibHVlU2hvcC1yaWdodFwiOiAzMixcclxuXHRcdFwicGlua1Nob3AtbGVmdFwiOiAzMyxcclxuXHRcdFwicGlua1Nob3AtcmlnaHRcIjogMzQsXHJcblx0XHRcImFycm93VXBcIjogMzUsXHJcblx0XHRcImFycm93RG93blwiOiAzNixcclxuXHRcdFwiYXJyb3dMZWZ0XCI6IDM3LFxyXG5cdFx0XCJhcnJvd1JpZ2h0XCI6IDM4LFxyXG5cdFx0XCJsaWdodFwiOiAzOSxcclxuXHRcdFwiZGFya0xpZ2h0XCI6IDQwLFxyXG5cdFx0XCJza2lcIjogNDEsXHJcblx0XHRcImZsb3dlclwiOiA0MixcclxuXHRcdFwiYm94XCI6IDQzLFxyXG5cdFx0XCJib3hlZFwiOiA0NFxyXG5cdH0sXHJcblx0XCJhbmltYXRlc1wiOiB7XHJcblx0XHRcInN0YXJcIjogMCxcclxuXHRcdFwibGF2YVwiOiAxLFxyXG5cdFx0XCJibHVlV2F0ZXJcIjogMixcclxuXHRcdFwid2F0ZXJcIjogMyxcclxuXHRcdFwieWVsbG93RG9vclwiOiA0LFxyXG5cdFx0XCJibHVlRG9vclwiOiA1LFxyXG5cdFx0XCJyZWREb29yXCI6IDYsXHJcblx0XHRcImdyZWVuRG9vclwiOiA3LFxyXG5cdFx0XCJzcGVjaWFsRG9vclwiOiA4LFxyXG5cdFx0XCJzdGVlbERvb3JcIjogOSxcclxuXHRcdFwieWVsbG93V2FsbFwiOiAxMCxcclxuXHRcdFwid2hpdGVXYWxsXCI6IDExLFxyXG5cdFx0XCJibHVlV2FsbFwiOiAxMixcclxuXHRcdFwiY3J5c3RhbFVwXCI6IDEzLFxyXG5cdFx0XCJjcnlzdGFsQm90dG9tXCI6IDE0LFxyXG5cdFx0XCJzdGFyUG9ydGFsXCI6IDE1LFxyXG5cdFx0XCJmaXJlXCI6IDE2LFxyXG5cdFx0XCJwb3J0YWxcIjogMTcsXHJcblx0XHRcInN3aXRjaFwiOiAxOCxcclxuXHRcdFwibGF2YU5ldFwiOiAxOSxcclxuXHRcdFwicG9pc29uTmV0XCI6IDIwLFxyXG5cdFx0XCJ3ZWFrTmV0XCI6IDIxLFxyXG5cdFx0XCJjdXJzZU5ldFwiOiAyMixcclxuXHRcdFwiZG93blBvcnRhbFwiOiAyMyxcclxuXHRcdFwibGVmdFBvcnRhbFwiOiAyNCxcclxuXHRcdFwicmlnaHRQb3J0YWxcIjogMjUsXHJcblx0XHRcInVwUG9ydGFsXCI6IDI2XHJcblx0fSxcclxuXHRcIm5wY3NcIjoge1xyXG5cdFx0XCJtYW5cIjogMCxcclxuXHRcdFwid29tYW5cIjogMSxcclxuXHRcdFwidGhpZWZcIjogMixcclxuXHRcdFwiZmFpcnlcIjogMyxcclxuXHRcdFwibWFnaWNpYW5cIjogNCxcclxuXHRcdFwid29tYW5NYWdpY2lhblwiOiA1LFxyXG5cdFx0XCJvbGRNYW5cIjogNixcclxuXHRcdFwiY2hpbGRcIjogNyxcclxuXHRcdFwid29vZFwiOiA4LFxyXG5cdFx0XCJwaW5rU2hvcFwiOiA5LFxyXG5cdFx0XCJibHVlU2hvcFwiOiAxMCxcclxuXHRcdFwicHJpbmNlc3NcIjogMTEsXHJcblx0XHRcIndsdFwiOiAxMixcclxuXHRcdFwid3RcIjogMTMsXHJcblx0XHRcIndydFwiOiAxNCxcclxuXHRcdFwid2xcIjogMTUsXHJcblx0XHRcIndjXCI6IDE2LFxyXG5cdFx0XCJ3clwiOiAxNyxcclxuXHRcdFwid2xiXCI6IDE4LFxyXG5cdFx0XCJ3cmJcIjogMTksXHJcblx0XHRcImRsdFwiOiAyMCxcclxuXHRcdFwiZHRcIjogMjEsXHJcblx0XHRcImRydFwiOiAyMixcclxuXHRcdFwiZGxcIjogMjMsXHJcblx0XHRcImRjXCI6IDI0LFxyXG5cdFx0XCJkclwiOiAyNSxcclxuXHRcdFwiZGxiXCI6IDI2LFxyXG5cdFx0XCJkcmJcIjogMjdcclxuXHR9LFxyXG5cdFwibnBjNDhcIjoge1xyXG5cdFx0XCJucGMwXCI6IDAsXHJcblx0XHRcIm5wYzFcIjogMSxcclxuXHRcdFwibnBjMlwiOiAyLFxyXG5cdFx0XCJucGMzXCI6IDNcclxuXHR9LFxyXG5cdFwiZW5lbXlzXCI6IHtcclxuXHRcdFwiZ3JlZW5TbGltZVwiOiAwLFxyXG5cdFx0XCJyZWRTbGltZVwiOiAxLFxyXG5cdFx0XCJibGFja1NsaW1lXCI6IDIsXHJcblx0XHRcInNsaW1lbG9yZFwiOiAzLFxyXG5cdFx0XCJiYXRcIjogNCxcclxuXHRcdFwiYmlnQmF0XCI6IDUsXHJcblx0XHRcInJlZEJhdFwiOiA2LFxyXG5cdFx0XCJ2YW1waXJlXCI6IDcsXHJcblx0XHRcInNrZWxldG9uXCI6IDgsXHJcblx0XHRcInNrZWxldG9uU29pbGRlclwiOiA5LFxyXG5cdFx0XCJza2VsZXRvbkNhcHRhaW5cIjogMTAsXHJcblx0XHRcImdob3N0U2tlbGV0b25cIjogMTEsXHJcblx0XHRcInpvbWJpZVwiOiAxMixcclxuXHRcdFwiem9tYmllS25pZ2h0XCI6IDEzLFxyXG5cdFx0XCJyb2NrXCI6IDE0LFxyXG5cdFx0XCJzbGltZU1hblwiOiAxNSxcclxuXHRcdFwiYmx1ZVByaWVzdFwiOiAxNixcclxuXHRcdFwicmVkUHJpZXN0XCI6IDE3LFxyXG5cdFx0XCJicm93bldpemFyZFwiOiAxOCxcclxuXHRcdFwicmVkV2l6YXJkXCI6IDE5LFxyXG5cdFx0XCJ5ZWxsb3dHdWFyZFwiOiAyMCxcclxuXHRcdFwiYmx1ZUd1YXJkXCI6IDIxLFxyXG5cdFx0XCJyZWRHdWFyZFwiOiAyMixcclxuXHRcdFwic3dvcmRzbWFuXCI6IDIzLFxyXG5cdFx0XCJzb2xkaWVyXCI6IDI0LFxyXG5cdFx0XCJ5ZWxsb3dLbmlnaHRcIjogMjUsXHJcblx0XHRcInJlZEtuaWdodFwiOiAyNixcclxuXHRcdFwiZGFya0tuaWdodFwiOiAyNyxcclxuXHRcdFwiYmxhY2tLaW5nXCI6IDI4LFxyXG5cdFx0XCJ5ZWxsb3dLaW5nXCI6IDI5LFxyXG5cdFx0XCJncmVlbktpbmdcIjogMzAsXHJcblx0XHRcImJsdWVLbmlnaHRcIjogMzEsXHJcblx0XHRcImdvbGRTbGltZVwiOiAzMixcclxuXHRcdFwicG9pc29uU2tlbGV0b25cIjogMzMsXHJcblx0XHRcInBvaXNvbkJhdFwiOiAzNCxcclxuXHRcdFwic3RlZWxSb2NrXCI6IDM1LFxyXG5cdFx0XCJza2VsZXRvblByaWVzdFwiOiAzNixcclxuXHRcdFwic2tlbGV0b25LaW5nXCI6IDM3LFxyXG5cdFx0XCJza2VsZXRvbldpemFyZFwiOiAzOCxcclxuXHRcdFwicmVkU2tlbGV0b25DYXB0aW9uXCI6IDM5LFxyXG5cdFx0XCJiYWRIZXJvXCI6IDQwLFxyXG5cdFx0XCJkZW1vblwiOiA0MSxcclxuXHRcdFwiZGVtb25Qcmllc3RcIjogNDIsXHJcblx0XHRcImdvbGRIb3JuU2xpbWVcIjogNDMsXHJcblx0XHRcInJlZEtpbmdcIjogNDQsXHJcblx0XHRcIndoaXRlS2luZ1wiOiA0NSxcclxuXHRcdFwiYmxhY2tNYWdpY2lhblwiOiA0NixcclxuXHRcdFwic2lsdmVyU2xpbWVcIjogNDcsXHJcblx0XHRcInN3b3JkRW1wZXJvclwiOiA0OCxcclxuXHRcdFwid2hpdGVIb3JuU2xpbWVcIjogNDksXHJcblx0XHRcImJhZFByaW5jZXNzXCI6IDUwLFxyXG5cdFx0XCJiYWRGYWlyeVwiOiA1MSxcclxuXHRcdFwiZ3JheVByaWVzdFwiOiA1MixcclxuXHRcdFwicmVkU3dvcmRzbWFuXCI6IDUzLFxyXG5cdFx0XCJ3aGl0ZUdob3N0XCI6IDU0LFxyXG5cdFx0XCJwb2lzb25ab21iaWVcIjogNTUsXHJcblx0XHRcIm1hZ2ljRHJhZ29uXCI6IDU2LFxyXG5cdFx0XCJvY3RvcHVzXCI6IDU3LFxyXG5cdFx0XCJkYXJrRmFpcnlcIjogNTgsXHJcblx0XHRcImdyZWVuS25pZ2h0XCI6IDU5XHJcblx0fSxcclxuXHRcImVuZW15NDhcIjoge1xyXG5cdFx0XCJhbmdlbFwiOiAwLFxyXG5cdFx0XCJlbGVtZW50YWxcIjogMSxcclxuXHRcdFwic3RlZWxHdWFyZFwiOiAyLFxyXG5cdFx0XCJldmlsQmF0XCI6IDNcclxuXHR9LFxyXG5cdFwiaXRlbXNcIjoge1xyXG5cdFx0XCJ5ZWxsb3dLZXlcIjogMCxcclxuXHRcdFwiYmx1ZUtleVwiOiAxLFxyXG5cdFx0XCJyZWRLZXlcIjogMixcclxuXHRcdFwiZ3JlZW5LZXlcIjogMyxcclxuXHRcdFwic3RlZWxLZXlcIjogNCxcclxuXHRcdFwiYmlnS2V5XCI6IDYsXHJcblx0XHRcInJlZEpld2VsXCI6IDE2LFxyXG5cdFx0XCJibHVlSmV3ZWxcIjogMTcsXHJcblx0XHRcImdyZWVuSmV3ZWxcIjogMTgsXHJcblx0XHRcInllbGxvd0pld2VsXCI6IDE5LFxyXG5cdFx0XCJyZWRQb3Rpb25cIjogMjAsXHJcblx0XHRcImJsdWVQb3Rpb25cIjogMjEsXHJcblx0XHRcImdyZWVuUG90aW9uXCI6IDIyLFxyXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogMjMsXHJcblx0XHRcImxpZmVXYW5kXCI6IDMzLFxyXG5cdFx0XCJzd29yZDBcIjogNjAsXHJcblx0XHRcInN3b3JkMVwiOiA1MCxcclxuXHRcdFwic3dvcmQyXCI6IDUxLFxyXG5cdFx0XCJzd29yZDNcIjogNTIsXHJcblx0XHRcInN3b3JkNFwiOiA1MyxcclxuXHRcdFwic3dvcmQ1XCI6IDU0LFxyXG5cdFx0XCJzaGllbGQwXCI6IDYxLFxyXG5cdFx0XCJzaGllbGQxXCI6IDU1LFxyXG5cdFx0XCJzaGllbGQyXCI6IDU2LFxyXG5cdFx0XCJzaGllbGQzXCI6IDU3LFxyXG5cdFx0XCJzaGllbGQ0XCI6IDU4LFxyXG5cdFx0XCJzaGllbGQ1XCI6IDU5LFxyXG5cdFx0XCJib29rXCI6IDksXHJcblx0XHRcImZseVwiOiAxMixcclxuXHRcdFwicGlja2F4ZVwiOiA0NSxcclxuXHRcdFwiaWNlUGlja2F4ZVwiOiA0NCxcclxuXHRcdFwiYm9tYlwiOiA0MyxcclxuXHRcdFwiY2VudGVyRmx5XCI6IDEzLFxyXG5cdFx0XCJ1cEZseVwiOiAxNSxcclxuXHRcdFwiZG93bkZseVwiOiAxNCxcclxuXHRcdFwiY29pblwiOiAxMSxcclxuXHRcdFwic25vd1wiOiA0MSxcclxuXHRcdFwiY3Jvc3NcIjogNDAsXHJcblx0XHRcInN1cGVyUG90aW9uXCI6IDI5LFxyXG5cdFx0XCJlYXJ0aHF1YWtlXCI6IDgsXHJcblx0XHRcInBvaXNvbldpbmVcIjogMjQsXHJcblx0XHRcIndlYWtXaW5lXCI6IDI1LFxyXG5cdFx0XCJjdXJzZVdpbmVcIjogMjcsXHJcblx0XHRcInN1cGVyV2luZVwiOiAyOCxcclxuXHRcdFwia25pZmVcIjogNDIsXHJcblx0XHRcIm1vbmV5UG9ja2V0XCI6IDQ2LFxyXG5cdFx0XCJzaG9lc1wiOiA0NyxcclxuXHRcdFwiaGFtbWVyXCI6IDQ4LFxyXG5cdFx0XCJqdW1wU2hvZXNcIjogNDksXHJcblx0XHRcInNraWxsMVwiOiAzMCxcclxuXHRcdFwid2FuZFwiOiAxMFxyXG5cdH0sXHJcblx0XCJhdXRvdGlsZVwiOiB7XHJcblx0XHRcImF1dG90aWxlXCI6IDAsXHJcblx0XHRcImF1dG90aWxlMVwiOiAwLFxyXG5cdFx0XCJhdXRvdGlsZTJcIjogMCxcclxuXHRcdFwiYXV0b3RpbGUzXCI6IDBcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSA9IFxyXG57XHJcblx0XCIxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ5ZWxsb3dXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxyXG5cdFwiMlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwid2hpdGVXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxyXG5cdFwiM1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVdhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXHJcblx0XCI0XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzdGFyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjVcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxhdmFcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiNlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiaWNlXCJ9LFxyXG5cdFwiN1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVNob3AtbGVmdFwifSxcclxuXHRcIjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVTaG9wLXJpZ2h0XCJ9LFxyXG5cdFwiOVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwicGlua1Nob3AtbGVmdFwifSxcclxuXHRcIjEwXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJwaW5rU2hvcC1yaWdodFwifSxcclxuXHRcIjExXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsYXZhTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwicG9pc29uTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxM1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwid2Vha05ldFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJ0cmlnZ2VyXCI6XCJwYXNzTmV0XCJ9LFxyXG5cdFwiMTRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImN1cnNlTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXHJcblx0XCIxNVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiYmx1ZVdhdGVyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE2XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ3YXRlclwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIyMFwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGVcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMjFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInllbGxvd0tleVwifSxcclxuXHRcIjIyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJibHVlS2V5XCJ9LFxyXG5cdFwiMjNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInJlZEtleVwifSxcclxuXHRcIjI0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJncmVlbktleVwifSxcclxuXHRcIjI1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdGVlbEtleVwifSxcclxuXHRcIjI2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJiaWdLZXlcIn0sXHJcblx0XCIyN1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkSmV3ZWxcIn0sXHJcblx0XCIyOFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYmx1ZUpld2VsXCJ9LFxyXG5cdFwiMjlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImdyZWVuSmV3ZWxcIn0sXHJcblx0XCIzMFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93SmV3ZWxcIn0sXHJcblx0XCIzMVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkUG90aW9uXCJ9LFxyXG5cdFwiMzJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVQb3Rpb25cIn0sXHJcblx0XCIzM1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5Qb3Rpb25cIn0sXHJcblx0XCIzNFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93UG90aW9uXCJ9LFxyXG5cdFwiMzVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMVwifSxcclxuXHRcIjM2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQxXCJ9LFxyXG5cdFwiMzdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMlwifSxcclxuXHRcIjM4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQyXCJ9LFxyXG5cdFwiMzlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkM1wifSxcclxuXHRcIjQwXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQzXCJ9LFxyXG5cdFwiNDFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkNFwifSxcclxuXHRcIjQyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ0XCJ9LFxyXG5cdFwiNDNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkNVwifSxcclxuXHRcIjQ0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ1XCJ9LFxyXG5cdFwiNDVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJvb2tcIn0sXHJcblx0XCI0NlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZmx5XCJ9LFxyXG5cdFwiNDdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInBpY2theGVcIn0sXHJcblx0XCI0OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiaWNlUGlja2F4ZVwifSxcclxuXHRcIjQ5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJib21iXCJ9LFxyXG5cdFwiNTBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNlbnRlckZseVwifSxcclxuXHRcIjUxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ1cEZseVwifSxcclxuXHRcIjUyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJkb3duRmx5XCJ9LFxyXG5cdFwiNTNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNvaW5cIn0sXHJcblx0XCI1NFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic25vd1wifSxcclxuXHRcIjU1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJjcm9zc1wifSxcclxuXHRcIjU2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdXBlclBvdGlvblwifSxcclxuXHRcIjU3XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJlYXJ0aHF1YWtlXCJ9LFxyXG5cdFwiNThcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInBvaXNvbldpbmVcIn0sXHJcblx0XCI1OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwid2Vha1dpbmVcIn0sXHJcblx0XCI2MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY3Vyc2VXaW5lXCJ9LFxyXG5cdFwiNjFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN1cGVyV2luZVwifSxcclxuXHRcIjYyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJrbmlmZVwifSxcclxuXHRcIjYzXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJtb25leVBvY2tldFwifSxcclxuXHRcIjY0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaG9lc1wifSxcclxuXHRcIjY1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJoYW1tZXJcIn0sXHJcblx0XCI2OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwibGlmZVdhbmRcIn0sXHJcblx0XCI2OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwianVtcFNob2VzXCJ9LFxyXG5cdFwiNzBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMFwifSxcclxuXHRcIjcxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQwXCJ9LFxyXG5cdFwiNzJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNraWxsMVwifSxcclxuXHRcIjczXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ3YW5kXCJ9LFxyXG5cdFwiODFcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInllbGxvd0Rvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVEb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjgzXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJyZWREb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjg0XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJncmVlbkRvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODVcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInNwZWNpYWxEb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcclxuXHRcIjg2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJzdGVlbERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxyXG5cdFwiODdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInVwRmxvb3JcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjg4XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJkb3duRmxvb3JcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjg5XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJwb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkwXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzdGFyUG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCI5MVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwidXBQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcclxuXHRcIjkyXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsZWZ0UG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCI5M1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiZG93blBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiOTRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInJpZ2h0UG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxMDFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImNyeXN0YWxVcFwifSxcclxuXHRcIjEwMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3J5c3RhbEJvdHRvbVwifSxcclxuXHRcIjEwM1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiZmlyZVwifSxcclxuXHRcIjEwNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwic3dpdGNoXCJ9LFxyXG5cdFwiMTIxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm1hblwifSxcclxuXHRcIjEyMlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b21hblwifSxcclxuXHRcIjEyM1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ0aGllZlwifSxcclxuXHRcIjEyNFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJmYWlyeVwifSxcclxuXHRcIjEyNVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJtYWdpY2lhblwifSxcclxuXHRcIjEyNlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b21hbk1hZ2ljaWFuXCJ9LFxyXG5cdFwiMTI3XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm9sZE1hblwifSxcclxuXHRcIjEyOFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJjaGlsZFwifSxcclxuXHRcIjEyOVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b29kXCJ9LFxyXG5cdFwiMTMwXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInBpbmtTaG9wXCJ9LFxyXG5cdFwiMTMxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImJsdWVTaG9wXCJ9LFxyXG5cdFwiMTMyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInByaW5jZXNzXCJ9LFxyXG5cdFwiMTMzXCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMwXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcclxuXHRcIjEzNFwiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjMVwiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXHJcblx0XCIxMzVcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzJcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxyXG5cdFwiMTM2XCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMzXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcclxuXHRcIjE1MVwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUxXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE1MlwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUyXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE1M1wiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUzXCIsXCJub1Bhc3NcIjp0cnVlfSxcclxuXHRcIjE2MVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYXJyb3dVcFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwiZG93blwiXSxcImNhbm5vdEluXCI6W1wiZG93blwiXX0sXHJcblx0XCIxNjJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93RG93blwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwidXBcIl0sXCJjYW5ub3RJblwiOltcInVwXCJdfSxcclxuXHRcIjE2M1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYXJyb3dMZWZ0XCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcInVwXCIsXCJkb3duXCIsXCJyaWdodFwiXSxcImNhbm5vdEluXCI6W1wicmlnaHRcIl19LFxyXG5cdFwiMTY0XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd1JpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcInVwXCIsXCJkb3duXCIsXCJsZWZ0XCJdLFwiY2Fubm90SW5cIjpbXCJsZWZ0XCJdfSxcclxuXHRcIjE2NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwibGlnaHRcIixcInRyaWdnZXJcIjpcImNoYW5nZUxpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxNjZcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImRhcmtMaWdodFwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIxNjdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInNraVwiLFwidHJpZ2dlclwiOlwic2tpXCIsXCJub1Bhc3NcIjpmYWxzZX0sXHJcblx0XCIxNjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImZsb3dlclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxyXG5cdFwiMTY5XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJib3hcIixcInRyaWdnZXJcIjpcInB1c2hCb3hcIixcIm5vUGFzc1wiOnRydWV9LFxyXG5cdFwiMTcwXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJib3hlZFwiLFwidHJpZ2dlclwiOlwicHVzaEJveFwiLFwibm9QYXNzXCI6dHJ1ZX0sXHJcblx0XCIxODFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2x0XCJ9LFxyXG5cdFwiMTgyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInd0XCJ9LFxyXG5cdFwiMTgzXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndydFwifSxcclxuXHRcIjE4NFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bFwifSxcclxuXHRcIjE4NVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3Y1wifSxcclxuXHRcIjE4NlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3clwifSxcclxuXHRcIjE4N1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bGJcIn0sXHJcblx0XCIxODhcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3JiXCJ9LFxyXG5cdFwiMTg5XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRsdFwifSxcclxuXHRcIjE5MFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkdFwifSxcclxuXHRcIjE5MVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkcnRcIn0sXHJcblx0XCIxOTJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGxcIn0sXHJcblx0XCIxOTNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGNcIn0sXHJcblx0XCIxOTRcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZHJcIn0sXHJcblx0XCIxOTVcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGxiXCJ9LFxyXG5cdFwiMTk2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyYlwifSxcclxuXHRcIjIwMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuU2xpbWVcIn0sXHJcblx0XCIyMDJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTbGltZVwifSxcclxuXHRcIjIwM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrU2xpbWVcIn0sXHJcblx0XCIyMDRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzbGltZWxvcmRcIn0sXHJcblx0XCIyMDVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYXRcIn0sXHJcblx0XCIyMDZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiaWdCYXRcIn0sXHJcblx0XCIyMDdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRCYXRcIn0sXHJcblx0XCIyMDhcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ2YW1waXJlXCJ9LFxyXG5cdFwiMjA5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25cIn0sXHJcblx0XCIyMTBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvblNvaWxkZXJcIn0sXHJcblx0XCIyMTFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbkNhcHRhaW5cIn0sXHJcblx0XCIyMTJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnaG9zdFNrZWxldG9uXCJ9LFxyXG5cdFwiMjEzXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiem9tYmllXCJ9LFxyXG5cdFwiMjE0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiem9tYmllS25pZ2h0XCJ9LFxyXG5cdFwiMjE1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicm9ja1wifSxcclxuXHRcIjIxNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNsaW1lTWFuXCJ9LFxyXG5cdFwiMjE3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmx1ZVByaWVzdFwifSxcclxuXHRcIjIxOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFByaWVzdFwifSxcclxuXHRcIjIxOVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJyb3duV2l6YXJkXCJ9LFxyXG5cdFwiMjIwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkV2l6YXJkXCJ9LFxyXG5cdFwiMjIxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93R3VhcmRcIn0sXHJcblx0XCIyMjJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlR3VhcmRcIn0sXHJcblx0XCIyMjNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRHdWFyZFwifSxcclxuXHRcIjIyNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN3b3Jkc21hblwifSxcclxuXHRcIjIyNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNvbGRpZXJcIn0sXHJcblx0XCIyMjZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dLbmlnaHRcIn0sXHJcblx0XCIyMjdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLbmlnaHRcIn0sXHJcblx0XCIyMjhcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkYXJrS25pZ2h0XCJ9LFxyXG5cdFwiMjI5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmxhY2tLaW5nXCJ9LFxyXG5cdFwiMjMwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93S2luZ1wifSxcclxuXHRcIjIzMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS2luZ1wifSxcclxuXHRcIjIzMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsdWVLbmlnaHRcIn0sXHJcblx0XCIyMzNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnb2xkU2xpbWVcIn0sXHJcblx0XCIyMzRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25Ta2VsZXRvblwifSxcclxuXHRcIjIzNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInBvaXNvbkJhdFwifSxcclxuXHRcIjIzNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN0ZWVsUm9ja1wifSxcclxuXHRcIjIzN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uUHJpZXN0XCJ9LFxyXG5cdFwiMjM4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25LaW5nXCJ9LFxyXG5cdFwiMjM5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25XaXphcmRcIn0sXHJcblx0XCIyNDBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTa2VsZXRvbkNhcHRpb25cIn0sXHJcblx0XCIyNDFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYWRIZXJvXCJ9LFxyXG5cdFwiMjQyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGVtb25cIn0sXHJcblx0XCIyNDNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblByaWVzdFwifSxcclxuXHRcIjI0NFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdvbGRIb3JuU2xpbWVcIn0sXHJcblx0XCIyNDVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLaW5nXCJ9LFxyXG5cdFwiMjQ2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVLaW5nXCJ9LFxyXG5cdFwiMjQ3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmxhY2tNYWdpY2lhblwifSxcclxuXHRcIjI0OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNpbHZlclNsaW1lXCJ9LFxyXG5cdFwiMjQ5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3dvcmRFbXBlcm9yXCJ9LFxyXG5cdFwiMjUwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVIb3JuU2xpbWVcIn0sXHJcblx0XCIyNTFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiYWRQcmluY2Vzc1wifSxcclxuXHRcIjI1MlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZEZhaXJ5XCJ9LFxyXG5cdFwiMjUzXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZ3JheVByaWVzdFwifSxcclxuXHRcIjI1NFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFN3b3Jkc21hblwifSxcclxuXHRcIjI1NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlR2hvc3RcIn0sXHJcblx0XCIyNTZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25ab21iaWVcIn0sXHJcblx0XCIyNTdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJtYWdpY0RyYWdvblwifSxcclxuXHRcIjI1OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm9jdG9wdXNcIn0sXHJcblx0XCIyNTlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkYXJrRmFpcnlcIn0sXHJcblx0XCIyNjBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJncmVlbktuaWdodFwifSxcclxuXHRcIjI2MVwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJhbmdlbFwifSxcclxuXHRcIjI2MlwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJlbGVtZW50YWxcIn0sXHJcblx0XCIyNjNcIjoge1wiY2xzXCI6XCJlbmVteTQ4XCIsXCJpZFwiOlwic3RlZWxHdWFyZFwifSxcclxuXHRcIjI2NFwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJldmlsQmF0XCJ9XHJcbn0iLCJleHBvcnQgdmFyIGRhdGFfYTFlMmZiNGFfZTk4Nl80NTI0X2IwZGFfOWI3YmE3YzA4NzRkID0gXHJcbntcclxuXHRcIm1haW5cIjoge1xyXG5cdFx0XCJmbG9vcklkc1wiOiBbXHJcblx0XHRcdFwic2FtcGxlMFwiLFxyXG5cdFx0XHRcInNhbXBsZTFcIixcclxuXHRcdFx0XCJzYW1wbGUyXCIsXHJcblx0XHRcdFwic2FtcGxlM1wiLFxyXG5cdFx0XHRcIk1UMFwiXHJcblx0XHRdLFxyXG5cdFx0XCJpbWFnZXNcIjogW1xyXG5cdFx0XHRcImJnLmpwZ1wiLFxyXG5cdFx0XHRcIndpbnNraW4ucG5nXCJcclxuXHRcdF0sXHJcblx0XHRcInRpbGVzZXRzXCI6IFtcclxuXHRcdFx0XCJtYWdpY3Rvd2VyLnBuZ1wiXHJcblx0XHRdLFxyXG5cdFx0XCJhbmltYXRlc1wiOiBbXHJcblx0XHRcdFwiaGFuZFwiLFxyXG5cdFx0XHRcInN3b3JkXCIsXHJcblx0XHRcdFwiem9uZVwiXHJcblx0XHRdLFxyXG5cdFx0XCJiZ21zXCI6IFtcclxuXHRcdFx0XCJiZ20ubXAzXCJcclxuXHRcdF0sXHJcblx0XHRcInNvdW5kc1wiOiBbXHJcblx0XHRcdFwiZmxvb3IubXAzXCIsXHJcblx0XHRcdFwiYXR0YWNrLm1wM1wiLFxyXG5cdFx0XHRcImRvb3IubXAzXCIsXHJcblx0XHRcdFwiaXRlbS5tcDNcIixcclxuXHRcdFx0XCJlcXVpcC5tcDNcIixcclxuXHRcdFx0XCJ6b25lLm1wM1wiLFxyXG5cdFx0XHRcImp1bXAubXAzXCIsXHJcblx0XHRcdFwicGlja2F4ZS5tcDNcIixcclxuXHRcdFx0XCJib21iLm1wM1wiLFxyXG5cdFx0XHRcImNlbnRlckZseS5tcDNcIlxyXG5cdFx0XSxcclxuXHRcdFwibmFtZU1hcFwiOiB7XHJcblx0XHRcdFwi6IOM5pmv5Zu+LmpwZ1wiOiBcImJnLmpwZ1wiLFxyXG5cdFx0XHRcIuiDjOaZr+mfs+S5kC5tcDNcIjogXCJiZ20ubXAzXCJcclxuXHRcdH0sXHJcblx0XHRcInN0YXJ0QmFja2dyb3VuZFwiOiBcImJnLmpwZ1wiLFxyXG5cdFx0XCJzdGFydExvZ29TdHlsZVwiOiBcImNvbG9yOiBibGFja1wiLFxyXG5cdFx0XCJsZXZlbENob29zZVwiOiBbXHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIueugOWNlVwiLFxyXG5cdFx0XHRcdFwiRWFzeVwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIuaZrumAmlwiLFxyXG5cdFx0XHRcdFwiTm9ybWFsXCJcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi5Zuw6Zq+XCIsXHJcblx0XHRcdFx0XCJIYXJkXCJcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwi5Zmp5qKmXCIsXHJcblx0XHRcdFx0XCJIZWxsXCJcclxuXHRcdFx0XVxyXG5cdFx0XSxcclxuXHRcdFwiZXF1aXBOYW1lXCI6IFtcclxuXHRcdFx0XCLmrablmahcIixcclxuXHRcdFx0XCLnm77niYxcIlxyXG5cdFx0XSxcclxuXHRcdFwic3RhcnRCZ21cIjogbnVsbCxcclxuXHRcdFwic3RhdHVzTGVmdEJhY2tncm91bmRcIjogbnVsbCxcclxuXHRcdFwic3RhdHVzVG9wQmFja2dyb3VuZFwiOiBcInVybChwcm9qZWN0L2ltYWdlcy9ncm91bmQucG5nKSByZXBlYXRcIixcclxuXHRcdFwidG9vbHNCYWNrZ3JvdW5kXCI6IFwidXJsKHByb2plY3QvaW1hZ2VzL2dyb3VuZC5wbmcpIHJlcGVhdFwiLFxyXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNDQ0NDQ0NcIixcclxuXHRcdFwic3RhdHVzQmFyQ29sb3JcIjogXCJ3aGl0ZVwiLFxyXG5cdFx0XCJoYXJkTGFiZWxDb2xvclwiOiBcInJlZFwiLFxyXG5cdFx0XCJmbG9vckNoYW5naW5nQmFja2dyb3VuZFwiOiBcImJsYWNrXCIsXHJcblx0XHRcImZsb29yQ2hhbmdpbmdUZXh0Q29sb3JcIjogXCJ3aGl0ZVwiLFxyXG5cdFx0XCJmb250XCI6IFwiVmVyZGFuYVwiLFxyXG5cdFx0XCJzdGFydEJ1dHRvbnNTdHlsZVwiOiBcImJhY2tncm91bmQtY29sb3I6ICMzMjM2OUY7IG9wYWNpdHk6IDAuODU7IGNvbG9yOiAjRkZGRkZGOyBib3JkZXI6ICNGRkZGRkYgMnB4IHNvbGlkOyBjYXJldC1jb2xvcjogI0ZGRDcwMDtcIlxyXG5cdH0sXHJcblx0XCJmaXJzdERhdGFcIjoge1xyXG5cdFx0XCJ0aXRsZVwiOiBcIumtlOWhlOagt+adv1wiLFxyXG5cdFx0XCJuYW1lXCI6IFwidGVtcGxhdGVcIixcclxuXHRcdFwidmVyc2lvblwiOiBcIlZlciAyLjYuNlwiLFxyXG5cdFx0XCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG5cdFx0XCJoZXJvXCI6IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwi6Ziz5YWJXCIsXHJcblx0XHRcdFwibHZcIjogMSxcclxuXHRcdFx0XCJocG1heFwiOiA5OTk5LFxyXG5cdFx0XHRcImhwXCI6IDEwMDAsXHJcblx0XHRcdFwibWFuYW1heFwiOiAtMSxcclxuXHRcdFx0XCJtYW5hXCI6IDAsXHJcblx0XHRcdFwiYXRrXCI6IDEwMCxcclxuXHRcdFx0XCJkZWZcIjogMTAwLFxyXG5cdFx0XHRcIm1kZWZcIjogMCxcclxuXHRcdFx0XCJtb25leVwiOiAwLFxyXG5cdFx0XHRcImV4cGVyaWVuY2VcIjogMCxcclxuXHRcdFx0XCJlcXVpcG1lbnRcIjogW10sXHJcblx0XHRcdFwiaXRlbXNcIjoge1xyXG5cdFx0XHRcdFwia2V5c1wiOiB7XHJcblx0XHRcdFx0XHRcInllbGxvd0tleVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJibHVlS2V5XCI6IDAsXHJcblx0XHRcdFx0XHRcInJlZEtleVwiOiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcImNvbnN0YW50c1wiOiB7fSxcclxuXHRcdFx0XHRcInRvb2xzXCI6IHt9LFxyXG5cdFx0XHRcdFwiZXF1aXBzXCI6IHt9XHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jXCI6IHtcclxuXHRcdFx0XHRcImRpcmVjdGlvblwiOiBcInVwXCIsXHJcblx0XHRcdFx0XCJ4XCI6IDYsXHJcblx0XHRcdFx0XCJ5XCI6IDEwXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiZmxhZ3NcIjoge30sXHJcblx0XHRcdFwic3RlcHNcIjogMFxyXG5cdFx0fSxcclxuXHRcdFwic3RhcnRDYW52YXNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWcqOi/memHjOWPr+S7peeUqOS6i+S7tuadpeiHquWumuS5iee7mOWItuagh+mimOeVjOmdoueahOiDjOaZr+WbvuetiVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul55u05o6l5YiH5o2i5Yiw5YW25LuW5qW85bGC77yI5q+U5aaC5p+Q5Liq5byA5aeL5Ymn5oOF5qW85bGC77yJ6L+b6KGM5pON5L2c44CCXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcInNob3dJbWFnZVwiLFxyXG5cdFx0XHRcdFwiY29kZVwiOiAxLFxyXG5cdFx0XHRcdFwiaW1hZ2VcIjogXCJiZy5qcGdcIixcclxuXHRcdFx0XHRcImxvY1wiOiBbXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0MFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJkd1wiOiAxMDAsXHJcblx0XHRcdFx0XCJkaFwiOiAxMDAsXHJcblx0XHRcdFx0XCJvcGFjaXR5XCI6IDEsXHJcblx0XHRcdFx0XCJ0aW1lXCI6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidHlwZVwiOiBcIndoaWxlXCIsXHJcblx0XHRcdFx0XCJjb25kaXRpb25cIjogXCIxXCIsXHJcblx0XHRcdFx0XCJkYXRhXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnu5nnlKjmiLfmj5DkvpvpgInmi6npobnvvIzov5nph4znroDljZXnmoTkvb/nlKjkuoZjaG9pY2Vz5LqL5Lu2XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul6LS05oyJ6ZKu5Zu+54S25ZCO5L2/55So562J5b6F5pON5L2c5p2l5a6M5oiQXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNob2ljZXNcIixcclxuXHRcdFx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLlvIDlp4vmuLjmiI9cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiYWN0aW9uXCI6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLmo4Dmn6ViZ23nirbmgIHvvIzkuIvlkIxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaWZcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImNvcmUuZmxhZ3Muc3RhcnREaXJlY3RseVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHJ1ZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi55u05o6l5byA5aeL5ri45oiP77yM6K6+572u5Yid5aeL5YyW5pWw5o2uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuZXZlbnRzLnNldEluaXREYXRhKCcnKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Yqo5oCB55Sf5oiQ6Zq+5bqm6YCJ5oup6aG5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbnZhciBjaG9pY2VzID0gW107XFxubWFpbi5sZXZlbENob29zZS5mb3JFYWNoKGZ1bmN0aW9uIChvbmUpIHtcXG5cXHRjaG9pY2VzLnB1c2goe1xcXCJ0ZXh0XFxcIjogb25lWzBdLCBcXFwiYWN0aW9uXFxcIjogW1xcblxcdFxcdHtcXFwidHlwZVxcXCI6IFxcXCJmdW5jdGlvblxcXCIsIFxcXCJmdW5jdGlvblxcXCI6IFxcXCJmdW5jdGlvbigpIHsgY29yZS5zdGF0dXMuaGFyZCA9ICdcXFwiK29uZVsxXStcXFwiJzsgY29yZS5ldmVudHMuc2V0SW5pdERhdGEoJ1xcXCIrb25lWzFdK1xcXCInKTsgfVxcXCJ9XFxuXFx0XX0pO1xcbn0pXFxuY29yZS5pbnNlcnRBY3Rpb24oe1xcXCJ0eXBlXFxcIjogXFxcImNob2ljZXNcXFwiLCBcXFwiY2hvaWNlc1xcXCI6IGNob2ljZXN9KTtcXG59XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJoaWRlSW1hZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvZGVcIjogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRpbWVcIjogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaIkOWKn+mAieaLqemavuW6plwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJicmVha1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuivu+WPluWtmOaho1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIueugOWNleeahOS9v+eUqOKAnOWRvOWHuuivu+aho+eVjOmdouKAneadpeWkhOeQhlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjYWxsTG9hZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuWbnuaUvuW9leWDj1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIui/meauteS7o+eggeS8muW8ueahhumAieaLqeW9leWDj+aWh+S7tlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJpZlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiIWNvcmUuaXNSZXBsYXlpbmcoKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHJ1ZVwiOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY2hvb3NlUmVwbGF5RmlsZSgpXFxufVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZhbHNlXCI6IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXHJcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5o6l5LiL5p2l5Lya5omn6KGMc3RhcnRUZXh05Lit55qE5LqL5Lu2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhcnRUZXh0XCI6IFtcclxuXHRcdFx0XCJIae+8jOasoui/juadpeWIsCBIVE1MNSDprZTloZTmoLfmnb/vvIFcXG5cXG7mnKzmoLfmnb/nlLHoib7kuYvokbXliLbkvZzvvIzlj6/ku6XorqnkvaDlnKjkuI3kvJrlhpnku7vkvZXku6PnoIFcXG7nmoTmg4XlhrXkuIvkuZ/og73lgZrlh7rlsZ7kuo7oh6rlt7HnmoRINemtlOWhlO+8gVwiLFxyXG5cdFx0XHRcIui/memHjOa4uOaIj+W8gOWni+aXtueahOWJp+aDheOAglxcbuWumuS5ieWcqGRhdGEuanPnmoRzdGFydFRleHTlpITjgIJcXG5cXG7kvaDlj6/ku6XlnKjov5nph4zlhpnkuIroh6rlt7HnmoTlhoXlrrnjgIJcIixcclxuXHRcdFx0XCLotbblv6vmnaXor5XkuIDor5XlkKfvvIFcIlxyXG5cdFx0XSxcclxuXHRcdFwic2hvcHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpZFwiOiBcIm1vbmV5U2hvcDFcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCLotKrlqarkuYvnpZ5cIixcclxuXHRcdFx0XHRcImljb25cIjogXCJibHVlU2hvcFwiLFxyXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIjFG6YeR5biB5ZWG5bqXXCIsXHJcblx0XHRcdFx0XCJjb21tb25UaW1lc1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJ1c2VcIjogXCJtb25leVwiLFxyXG5cdFx0XHRcdFwibmVlZFwiOiBcIjIwKzEwKnRpbWVzKih0aW1lcysxKVwiLFxyXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWLh+aVoueahOatpuWjq+WViu+8jOe7meaIkSR7bmVlZH3ph5HluIHlsLHlj6/ku6XvvJpcIixcclxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnlJ/lkb0rODAwXCIsXHJcblx0XHRcdFx0XHRcdFwiZWZmZWN0XCI6IFwic3RhdHVzOmhwKz04MDBcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaWRcIjogXCJleHBTaG9wMVwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcIue7j+mqjOS5i+elnlwiLFxyXG5cdFx0XHRcdFwiaWNvblwiOiBcInBpbmtTaG9wXCIsXHJcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwiMUbnu4/pqozllYblupdcIixcclxuXHRcdFx0XHRcImNvbW1vblRpbWVzXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcInVzZVwiOiBcImV4cGVyaWVuY2VcIixcclxuXHRcdFx0XHRcIm5lZWRcIjogXCItMVwiLFxyXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWLh+aVoueahOatpuWjq+WViu+8jOe7meaIkeiLpeW5sue7j+mqjOWwseWPr+S7pe+8mlwiLFxyXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuetiee6pysxXCIsXHJcblx0XHRcdFx0XHRcdFwibmVlZFwiOiBcIjEwMFwiLFxyXG5cdFx0XHRcdFx0XHRcImVmZmVjdFwiOiBcInN0YXR1czpocCs9MTAwMFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpZFwiOiBcIml0ZW1TaG9wXCIsXHJcblx0XHRcdFx0XCJpdGVtXCI6IHRydWUsXHJcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwi6YGT5YW35ZWG5bqXXCIsXHJcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwiaWRcIjogXCJ5ZWxsb3dLZXlcIixcclxuXHRcdFx0XHRcdFx0XCJudW1iZXJcIjogMTAsXHJcblx0XHRcdFx0XHRcdFwibW9uZXlcIjogMTBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImlkXCI6IFwia2V5U2hvcDFcIixcclxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCLlm57mlLbpkqXljJnllYblupdcIixcclxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJjb21tb25FdmVudFwiOiBcIuWbnuaUtumSpeWMmeWVhuW6l1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcImxldmVsVXBcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuZWVkXCI6IFwiMFwiLFxyXG5cdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5q2k5aSE5piv5Yid5aeL562J57qn77yM5Y+q6ZyA5aGr5YaZ56ew5Y+3XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5lZWRcIjogXCIyMFwiLFxyXG5cdFx0XHRcdFwidGl0bGVcIjogXCLnrKzkuoznuqdcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcclxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0YXR1czphdGsrMTBcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhdHVzOmRlZlwiLFxyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RhdHVzOmRlZisxMFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuZWVkXCI6IFwiNDBcIixcclxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJ0aXBcIixcclxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5oGt5Zac5Y2H57qnXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdFwidmFsdWVzXCI6IHtcclxuXHRcdFwibGF2YURhbWFnZVwiOiAxMDAsXHJcblx0XHRcInBvaXNvbkRhbWFnZVwiOiAxMCxcclxuXHRcdFwid2Vha1ZhbHVlXCI6IDIwLFxyXG5cdFx0XCJyZWRKZXdlbFwiOiAzLFxyXG5cdFx0XCJibHVlSmV3ZWxcIjogMyxcclxuXHRcdFwiZ3JlZW5KZXdlbFwiOiA1LFxyXG5cdFx0XCJyZWRQb3Rpb25cIjogMTAwLFxyXG5cdFx0XCJibHVlUG90aW9uXCI6IDI1MCxcclxuXHRcdFwieWVsbG93UG90aW9uXCI6IDUwMCxcclxuXHRcdFwiZ3JlZW5Qb3Rpb25cIjogODAwLFxyXG5cdFx0XCJicmVha0FybW9yXCI6IDAuOSxcclxuXHRcdFwiY291bnRlckF0dGFja1wiOiAwLjEsXHJcblx0XHRcInB1cmlmeVwiOiAzLFxyXG5cdFx0XCJoYXRyZWRcIjogMixcclxuXHRcdFwibW92ZVNwZWVkXCI6IDEwMCxcclxuXHRcdFwiYW5pbWF0ZVNwZWVkXCI6IDQwMCxcclxuXHRcdFwiZmxvb3JDaGFuZ2VUaW1lXCI6IDgwMFxyXG5cdH0sXHJcblx0XCJmbGFnc1wiOiB7XHJcblx0XHRcImVuYWJsZUZsb29yXCI6IHRydWUsXHJcblx0XHRcImVuYWJsZU5hbWVcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUx2XCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVIUE1heFwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTWFuYVwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlTURlZlwiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVNb25leVwiOiB0cnVlLFxyXG5cdFx0XCJlbmFibGVFeHBlcmllbmNlXCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVMZXZlbFVwXCI6IGZhbHNlLFxyXG5cdFx0XCJsZXZlbFVwTGVmdE1vZGVcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZUtleXNcIjogdHJ1ZSxcclxuXHRcdFwiZW5hYmxlUFpGXCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVEZWJ1ZmZcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZVNraWxsXCI6IGZhbHNlLFxyXG5cdFx0XCJmbHlOZWFyU3RhaXJcIjogdHJ1ZSxcclxuXHRcdFwiZmx5UmVjb3JkUG9zaXRpb25cIjogZmFsc2UsXHJcblx0XHRcInBpY2theGVGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcclxuXHRcdFwiYm9tYkZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxyXG5cdFx0XCJzbm93Rm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXHJcblx0XHRcImJpZ0tleUlzQm94XCI6IGZhbHNlLFxyXG5cdFx0XCJzdGVlbERvb3JXaXRob3V0S2V5XCI6IGZhbHNlLFxyXG5cdFx0XCJpdGVtRmlyc3RUZXh0XCI6IGZhbHNlLFxyXG5cdFx0XCJlcXVpcG1lbnRcIjogZmFsc2UsXHJcblx0XHRcImVxdWlwYm94QnV0dG9uXCI6IGZhbHNlLFxyXG5cdFx0XCJpY29uSW5FcXVpcGJveFwiOiBmYWxzZSxcclxuXHRcdFwiZW5hYmxlQWRkUG9pbnRcIjogZmFsc2UsXHJcblx0XHRcImVuYWJsZU5lZ2F0aXZlRGFtYWdlXCI6IGZhbHNlLFxyXG5cdFx0XCJoYXRyZWREZWNyZWFzZVwiOiB0cnVlLFxyXG5cdFx0XCJiZXR3ZWVuQXR0YWNrQ2VpbFwiOiBmYWxzZSxcclxuXHRcdFwiYmV0d2VlbkF0dGFja01heFwiOiBmYWxzZSxcclxuXHRcdFwidXNlTG9vcFwiOiBmYWxzZSxcclxuXHRcdFwic3RhcnRVc2luZ0NhbnZhc1wiOiBmYWxzZSxcclxuXHRcdFwic3RhcnREaXJlY3RseVwiOiBmYWxzZSxcclxuXHRcdFwic3RhdHVzQ2FudmFzXCI6IGZhbHNlLFxyXG5cdFx0XCJzdGF0dXNDYW52YXNSb3dzT25Nb2JpbGVcIjogMyxcclxuXHRcdFwiZGlzcGxheUVuZW15RGFtYWdlXCI6IHRydWUsXHJcblx0XHRcImRpc3BsYXlDcml0aWNhbFwiOiB0cnVlLFxyXG5cdFx0XCJkaXNwbGF5RXh0cmFEYW1hZ2VcIjogdHJ1ZSxcclxuXHRcdFwiZW5hYmxlR2VudGxlQ2xpY2tcIjogdHJ1ZSxcclxuXHRcdFwicG90aW9uV2hpbGVSb3V0aW5nXCI6IGZhbHNlLFxyXG5cdFx0XCJpZ25vcmVDaGFuZ2VGbG9vclwiOiB0cnVlLFxyXG5cdFx0XCJjYW5Hb0RlYWRab25lXCI6IGZhbHNlLFxyXG5cdFx0XCJlbmFibGVNb3ZlRGlyZWN0bHlcIjogdHJ1ZSxcclxuXHRcdFwiZW5hYmxlRGlzYWJsZWRTaG9wXCI6IHRydWUsXHJcblx0XHRcImRpc2FibGVTaG9wT25EYW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcImJsdXJGZ1wiOiBmYWxzZSxcclxuXHRcdFwiY2hlY2tDb25zb2xlXCI6IGZhbHNlXHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmVlLXRleC1wYWNrZXItY29yZVwiKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vTVQwLmpzXCI6IDksXG5cdFwiLi9zYW1wbGUwLmpzXCI6IDEwLFxuXHRcIi4vc2FtcGxlMS5qc1wiOiAxMSxcblx0XCIuL3NhbXBsZTIuanNcIjogMTIsXG5cdFwiLi9zYW1wbGUzLmpzXCI6IDEzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gODsiLCJtYWluLmZsb29ycy5NVDA9XHJcbntcclxuXCJmbG9vcklkXCI6IFwiTVQwXCIsXHJcblwidGl0bGVcIjogXCLkuLvloZQgMCDlsYJcIixcclxuXCJuYW1lXCI6IFwiMFwiLFxyXG5cImNhbkZseVRvXCI6IHRydWUsXHJcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXHJcblwiY2Fubm90Vmlld01hcFwiOiBmYWxzZSxcclxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3JvdW5kXCIsXHJcblwiaW1hZ2VzXCI6IFtdLFxyXG5cIml0ZW1fcmF0aW9cIjogMSxcclxuXCJtYXBcIjogW1xyXG4gICAgWyAgMTAwMTYsICAxMDAxNywgIDEwMDE4LCAgMTAwMjQsICAxMDAyNSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXVxyXG5dLFxyXG5cImZpcnN0QXJyaXZlXCI6IFtdLFxyXG5cInBhcmFsbGVsRG9cIjogXCJcIixcclxuXCJldmVudHNcIjoge30sXHJcblwiY2hhbmdlRmxvb3JcIjoge30sXHJcblwiYWZ0ZXJCYXR0bGVcIjoge30sXHJcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxyXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXHJcblwiY2Fubm90TW92ZVwiOiB7fSxcclxuXCJiZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImZnbWFwXCI6IFtcclxuXHJcbl0sXHJcbn0iLCJtYWluLmZsb29ycy5zYW1wbGUwPVxyXG57XHJcblwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuXCJ0aXRsZVwiOiBcIuagt+advyAwIOWxglwiLFxyXG5cIm5hbWVcIjogXCIwXCIsXHJcblwiY2FuRmx5VG9cIjogdHJ1ZSxcclxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcclxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3JvdW5kXCIsXHJcblwiaW1hZ2VzXCI6IFtdLFxyXG5cImJnbVwiOiBcImJnbS5tcDNcIixcclxuXCJpdGVtX3JhdGlvXCI6IDEsXHJcblwibWFwXCI6IFtcclxuICAgIFsgIDAsICAwLDIyMCwgIDAsICAwLCAyMCwgODcsICAzLCA2NSwgNjQsIDQ0LCA0MywgNDJdLFxyXG4gICAgWyAgMCwyNDYsICAwLDI0NiwgIDAsIDIwLCAgMCwgIDMsIDU4LCA1OSwgNjAsIDYxLCA0MV0sXHJcbiAgICBbMjE5LCAgMCwgIDAsICAwLDIxOSwgMjAsICAwLCAgMywgNTcsIDI2LCA2MiwgNjMsIDQwXSxcclxuICAgIFsgMjAsIDIwLDEyNSwgMjAsIDIwLCAyMCwgIDAsICAzLCA1MywgNTQsIDU1LCA1NiwgMzldLFxyXG4gICAgWzIxNiwyNDcsMjYzLDIzNSwyNDgsICA2LCAgMCwgIDMsIDQ5LCA1MCwgNTEsIDUyLCAzOF0sXHJcbiAgICBbICA2LCAgNiwxMjUsICA2LCAgNiwgIDYsICAwLCAgMSwgNDUsIDQ2LCA0NywgNDgsIDM3XSxcclxuICAgIFsyMjQsMjU0LDIxMiwyNjIsMjA0LCAgNSwgIDAsICAxLCAzMSwgMzIsIDM0LCAzMywgMzZdLFxyXG4gICAgWzIwMSwyNjEsMjE3LDI2NCwyMDcsICA1LCAgMCwgIDEsIDI3LCAyOCwgMjksIDMwLCAzNV0sXHJcbiAgICBbICA1LCAgNSwxMjUsICA1LCAgNSwgIDUsICAwLCAgMSwgMjEsIDIyLCAyMywgMjQsIDI1XSxcclxuICAgIFsgIDAsICAwLDIzNywgIDAsICAwLCAgMCwgNDUsICAxLCAgMSwgIDEsMTIxLCAgMSwgIDFdLFxyXG4gICAgWyAgNCwgIDQsMTMzLCAgNCwgIDQsICA0LCAgMCwgIDAsICAwLCAgMCwgIDAsIDg1LDEyNF0sXHJcbiAgICBbIDg3LCAxMSwgMTIsIDEzLCAxNCwgIDQsICA0LCAgMiwgIDIsICAyLDEyMiwgIDIsICAyXSxcclxuICAgIFsgODgsIDg5LCA5MCwgOTEsIDkyLCA5MywgOTQsICAyLCA4MSwgODIsIDgzLCA4NCwgODZdXHJcbl0sXHJcblwiZmlyc3RBcnJpdmVcIjogW1xyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcInNldFRleHRcIixcclxuICAgICAgICBcImJhY2tncm91bmRcIjogXCJ3aW5za2luLnBuZ1wiLFxyXG4gICAgICAgIFwidGltZVwiOiAwXHJcbiAgICB9LFxyXG4gICAgXCJcXHRb5qC35p2/5o+Q56S6XemmluasoeWIsOi+vuafkOWxguWPr+S7peinpuWPkSBmaXJzdEFycml2ZSDkuovku7bvvIzor6Xkuovku7blj6/nsbvkvLzkuo5STVhQ5Lit55qE4oCc6Ieq5Yqo5omn6KGM6ISa5pys4oCd44CCXFxuXFxu5pys5LqL5Lu25pSv5oyB5LiA5YiH55qE5LqL5Lu257G75Z6L77yM5bi45bi455So5p2l6Kem5Y+R5a+56K+d77yM5L6L5aaC77yaXCIsXHJcbiAgICBcIlxcdFtoZXJvXVxcYlt1cCxoZXJvXeaIkeaYr+iwge+8n+aIkeS7juWTquadpe+8n+aIkeWPiOimgeWIsOWTquWOu++8n1wiLFxyXG4gICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeS9oOmXruaIkS4uLu+8n+aIkeS5n+S4jeefpemBk+WVii4uLlwiLFxyXG4gICAgXCLmnKzlsYLkuLvopoHlr7npgZPlhbfjgIHpl6jjgIHmgKrniannrYnov5vooYzku4vnu43vvIzmnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIlxyXG5dLFxyXG5cImV2ZW50c1wiOiB7XHJcbiAgICBcIjEwLDlcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d6L+Z5Lqb5piv5pys5qC35p2/5pSv5oyB55qE5omA5pyJ55qE6YGT5YW344CCXFxuXFxu6YGT5YW35YiG5Li65Zub57G777yaaXRlbXMsIGNvbnN0YW50cywgdG9vbHPvvIxlcXVpcHPjgIJcXG5pdGVtcyDkuLrljbPmjaHljbPnlKjnsbvpgZPlhbfvvIzkvovlpoLlrp3nn7PjgIHooYDnk7bjgIHliZHnm77nrYnjgIJcXG5jb25zdGFudHMg5Li65rC45LmF6YGT5YW377yM5L6L5aaC5oCq54mp5omL5YaM44CB5qW85bGC5Lyg6YCB5Zmo44CB5bm46L+Q6YeR5biB562J44CCXFxudG9vbHMg5Li65raI6ICX57G76YGT5YW377yM5L6L5aaC56C05aKZ6ZWQ44CB54K45by544CB5Lit5b+D5a+556ew6aOe6KGM5Zmo562J44CCXFxuZXF1aXBzIOS4uuijheWkh++8jOS+i+WmguWJkeebvuetieOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5dXFxiW3VwXeacieWFs+mBk+WFt+aViOaenO+8jOWumuS5ieWcqGl0ZW1zLmpz5Lit44CCXFxu55uu5YmN5aSn5aSa5pWw6YGT5YW35bey5pyJ6buY6K6k6KGM5Li677yM5aaC5pyJ6Ieq5a6a5LmJ55qE6ZyA5rGC5YiZ6ZyA5ZyoaXRlbXMuanPkuK3kv67mlLnku6PnoIHjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXVxcYlt1cF3mi77lj5bpgZPlhbfnu5PmnZ/lkI7lj6/op6blj5EgYWZ0ZXJHZXRJdGVtIOS6i+S7tuOAglxcblxcbuacieWFs+S6i+S7tueahOWQhOenjeS/oeaBr+WcqOS4i+S4gOWxguS8muacieabtOS4uuivpue7hueahOivtOaYjuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTAsMTFcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5nkupvmmK/pl6jvvIzpnIDopoHlr7nlupTnmoTpkqXljJnmiZPlvIDjgIJcXG7mnLrlhbPpl6jlv4Xpobvkvb/nlKjnibnmrornmoTlvIDms5XjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5byA6Zeo5ZCO5Y+v6Kem5Y+RIGFmdGVyT3BlbkRvb3Ig5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIyLDEwXCI6IFtcclxuICAgICAgICBcIlxcdFvlsJHlpbMsbnBjMF3ov5nkupvmmK/ot6/pmpzjgIHmpbzmoq/jgIHkvKDpgIHpl6jjgIJcIixcclxuICAgICAgICBcIlxcdFvlsJHlpbMsbnBjMF3ooYDnvZHnmoTkvKTlrrPmlbDlgLzjgIHkuK3mr5LlkI7mr4/mraXkvKTlrrPmlbDlgLzjgIHoobDlvLHml7bmlLvpmLLkuIvpmY3nmoTmlbDlgLzvvIzpg73lnKggZGF0YS5qcyDlhoXlrprkuYnjgIJcXG5cXG7ot6/pmpzlkIzmoLfkvJrlsL3ph4/ooqvoh6rliqjlr7vot6/nu5Xov4fjgIJcIixcclxuICAgICAgICBcIlxcdFvlsJHlpbMsbnBjMF3mpbzmoq/lkozkvKDpgIHpl6jpnIDopoHlnKhjaGFuZ2VGbG9vcuS4reWumuS5ieebruagh+alvOWxguWSjOS9jee9ru+8jOWPr+WPguingeagt+adv+mHjOW3suacieeahOeahOWGmeazleOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMiw4XCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d6L+Z5Lqb6YO95piv5ZCE56eN5ZCE5qC355qE5oCq54mp77yM5omA5pyJ5oCq54mp55qE5pWw5o2u6YO95ZyoZW5lbXlzLmpz5Lit6K6+572u44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXei/meaJueaAqueJqeWIhuWIq+S4uu+8muaZrumAmuOAgeWFiOaUu+OAgemtlOaUu+OAgeWdmuWbuuOAgTLov57lh7vjgIEz6L+e5Ye744CBNOi/nuWHu+OAgeegtOeUsuOAgeWPjeWHu+OAgeWHgOWMluOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3miZPotKXmgKrnianlkI7lj6/op6blj5EgYWZ0ZXJCYXR0bGUg5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIyLDVcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3mqKHku7/jgIHlkLjooYDjgIHkuK3mr5LjgIHoobDlvLHjgIHor4XlkpLjgIJcXG5cXG7or7fms6jmhI/lkLjooYDmgKrpnIDopoHorr7nva52YWx1ZeS4uuWQuOihgOaVsOWAvO+8jOWPr+WPguingeagt+adv+S4rem7keaal+Wkp+azleW4iOeahOWGmeazleOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMiwzXCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d6aKG5Z+f44CB5aS55Ye744CCXFxu6K+35rOo5oSP6aKG5Z+f5oCq6ZyA6KaB6K6+572udmFsdWXkuLrkvKTlrrPmlbDlgLzvvIzlj6/lj4Lop4HmoLfmnb/kuK3liJ3nuqflt6vluIjnmoTlhpnms5XjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d5aS55Ye75ZKM6aKG5Z+f5ZCM5pe25Y+R55Sf5pe25YWI6K6h566X6aKG5Z+f77yM5YaN5aS55Ye744CCXFxu6Ieq5Yqo5a+76Lev5ZCM5qC35Lya5bC96YeP57uV6L+H5L2g6K6+572u55qE6L+Z5Lqb54K544CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMiwxMFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeWPquaciealvOS4iuWQr+eUqOS6i+S7tuWQju+8jOaJjeiDveeci+WIsOaIkeW5tuWPr+S7peWSjOaIkeWvueivneadpeinpuWPkeS6i+S7tuOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0sXHJcblwiY2hhbmdlRmxvb3JcIjoge1xyXG4gICAgXCI2LDBcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTFcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCJcclxuICAgIH0sXHJcbiAgICBcIjAsMTFcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDEyXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiMCwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJ1cEZsb29yXCJcclxuICAgIH0sXHJcbiAgICBcIjEsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEyXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiMiwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgMTJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCIzLDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCJcclxuICAgIH0sXHJcbiAgICBcIjQsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcclxuICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDlcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxyXG4gICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICB9LFxyXG4gICAgXCI1LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXHJcbiAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aW1lXCI6IDAsXHJcbiAgICAgICAgXCJwb3J0YWxXaXRob3V0VHJpZ2dlclwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFwiNiwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcclxuICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgfVxyXG59LFxyXG5cImFmdGVyQmF0dGxlXCI6IHtcclxuICAgIFwiMiw2XCI6IFtcclxuICAgICAgICBcIlxcdFtnaG9zdFNrZWxldG9uXeS4jeWPr+iDve+8jOS9oOaAjuS5iOWPr+iDveaJk+i0peaIke+8gVxcbu+8iOS4gOS4quaJk+i0peaAqueJqeinpuWPkeeahOS6i+S7tu+8iVwiXHJcbiAgICBdXHJcbn0sXHJcblwiYWZ0ZXJHZXRJdGVtXCI6IHtcclxuICAgIFwiMTEsOFwiOiBbXHJcbiAgICAgICAgXCLnlLHkuo7nirbmgIHmoI/mlL7kuI3kuIvvvIznu7/pkqXljJnlkozpk4Hpl6jpkqXljJnlnYfop4bkuLp0b29sc++8jOaUvuWFpeW3peWFt+agj+S4reOAglxcbueisOWIsOe7v+mXqOWSjOmTgemXqOS7jeeEtuS8muiHquWKqOS9v+eUqOW8gOmXqOOAglwiXHJcbiAgICBdLFxyXG4gICAgXCI4LDZcIjogW1xyXG4gICAgICAgIFwi55Sx5LqO5ZC46KGA5ZKM5aS55Ye7562J55qE5a2Y5Zyo77yM6KGA55O26buY6K6k6Ieq5Yqo6KKr57uV6Lev44CCXFxu5L2g5Y+v5Lul5L+u5pS5ZGF0YS5qc+S4reeahOezu+e7n0ZsYWfmnaXorr7nva7ov5nkuIDpobnjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiOCw3XCI6IFtcclxuICAgICAgICBcIuWmgumcgOS/ruaUuea2iOiAl+WTgeeahOaViOaenO+8jOivt+WJjeW+gCBkYXRhLmpzIO+8jOaJvuWIsOW5tuS/ruaUuXZhbHVlc+WGheWvueW6lOeahOWFt+S9k+aVsOWAvOWNs+WPr+OAglxcbuWmguaenOacieabtOmrmOe6p+eahOmcgOaxgu+8iOWmguavj+S4quWMuuWfn+Wuneefs+aVsOWAvOWPmOWMlu+8ie+8jOivpuingWRvY+aWh+aho+WGheeahOWBmuazleivtOaYjuOAglwiXHJcbiAgICBdLFxyXG4gICAgXCI5LDVcIjogW1xyXG4gICAgICAgIFwi5q+P5bGC5qW855qEIGNhbkZseVRvIOWGs+WumuS6huivpealvOWxguiDveWQpuiiq+mjnuWIsOOAglxcblxcbuS4jeiDveiiq+mjnuWIsOeahOalvOWxguS5n+aXoOazleS9v+eUqOalvOWxguS8oOmAgeWZqOOAglwiLFxyXG4gICAgICAgIFwi6aOe6KGM55qE5qW85bGC6aG65bqP55SxIG1haW4uanMg5LitIGZsb29ySWRzIOWKoOi9vemhuuW6j+aJgOWGs+WumuOAglxcblxcbuaYr+WQpuW/hemhu+WcqOalvOair+i+ueS9v+eUqOalvOS8oOWZqOeUsSBkYXRhLmpzIOS4reeahOezu+e7n0ZsYWfmiYDlhrPlrprjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTAsNVwiOiBbXHJcbiAgICAgICAgXCLnoLTlopnplZDmmK/noLTpnaLliY3nmoTlopnlo4Hov5jmmK/lm5vkuKrmlrnlkJHnmoTlopnlo4HvvIznlLFkYXRhLmpz5Lit55qE57O757ufRmxhZ+aJgOWGs+WumuOAglwiXHJcbiAgICBdLFxyXG4gICAgXCI4LDRcIjogW1xyXG4gICAgICAgIFwi54K45by55piv5Y+q6IO954K46Z2i5YmN55qE5oCq54mp6L+Y5piv5Zub5Liq5pa55ZCR55qE5oCq54mp77yM55SxZGF0YS5qc+S4reeahOezu+e7n0ZsYWfmiYDlhrPlrprjgIJcXG7lpoLlj6rog73ngrjliY3mlrnmgKrnianliJnlkozkuIrpnaLnmoTlnKPplKTnrYnku7fjgIJcXG7kuI3og73ooqvngrjnmoTmgKrnianlnKhlbmVteXPkuK3lj6/ku6XlrprkuYnvvIzlj6/lj4Lop4HmoLfmnb/ph4zpu5HooaPprZTnjovlkozpu5HmmpflpKfms5XluIjnmoTlhpnms5XjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTAsNFwiOiBbXHJcbiAgICAgICAgXCLigJzkuIrmpbzigJ3lkozigJzkuIvmpbzigJ3nmoTnm67moIflsYLnlLEgbWFpbi5qcyDnmoQgZmxvb3JJZHPpobrluo/miYDlhrPlrprjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiOSwyXCI6IFtcclxuICAgICAgICBcIuivpemBk+WFt+m7mOiupOaYr+Wkp+m7hOmXqOmSpeWMme+8jOWmgumcgOaUueS4uumSpeWMmeebkuebtOaOpeS/ruaUuSBkYXRhLmpzIOS4reeahOezu+e7n0ZsYWfljbPlj6/jgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTAsMlwiOiBbXHJcbiAgICAgICAgXCLlsaDpvpnljJXpppbnm67liY3mnKrooqvlrprkuYnvvIzlj6/og73pnIDopoHoh6rooYzlrp7njrDlip/og73jgIJcXG7mnInlhbPlpoLkvZXlrp7njrDkuIDkuKrpgZPlhbflip/og73lj4Lop4Fkb2PmlofmoaPjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTIsN1wiOiBbXHJcbiAgICAgICAgXCLlnKggZGF0YS5qcyDnmoTns7vnu59GbGFn5Lit6K6+572u5piv5ZCm5ZCv55So6KOF5aSH5qCP44CCXFxu5aaC5p6c5LiN5ZCv55So5YiZ6KOF5aSH5Lya55u05o6l5aKe5Yqg5bGe5oCn44CCXCJcclxuICAgIF0sXHJcbiAgICBcIjEyLDZcIjogW1xyXG4gICAgICAgIFwi5ZyoIGRhdGEuanMg55qE57O757ufRmxhZ+S4reiuvue9ruaYr+WQpuWQr+eUqOijheWkh+agj+aMiemSruOAglxcbuWmguaenOWQr+eUqOWImeijheWkh+agj+aMiemSruS8muabv+S7o+alvOS8oOaMiemSruOAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMiw1XCI6IFtcclxuICAgICAgICBcIuijheWkh+eahOenjeexu+eUseWFqOWhlOWxnuaAp+S4reeahGVxdWlwTmFtZeWGs+Wumix0eXBl55qE5YC85bCx5piv6K+l57G75Z6L5ZyoZXF1aXBOYW1l5Lit55qE5L2N5qyh77yM5L6L5aaC6buY6K6k5oOF5Ya15LiLZXF1aXB0eXBl5Li6MOS7o+ihqOatpuWZqO+8jOWQjOaXtuWPquaciXR5cGXkuLow55qE6KOF5aSH55qEYW5pbWF0ZeWxnuaAp+eUn+aViFwiXHJcbiAgICBdXHJcbn0sXHJcblwiYWZ0ZXJPcGVuRG9vclwiOiB7XHJcbiAgICBcIjExLDEyXCI6IFtcclxuICAgICAgICBcIuS9oOW8gOS6huS4gOS4que7v+mXqO+8jOinpuWPkeS6huS4gOS4qmFmdGVyT3BlbkRvb3Lkuovku7ZcIlxyXG4gICAgXVxyXG59LFxyXG5cImNhbm5vdE1vdmVcIjoge30sXHJcblwiYmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJmZ21hcFwiOiBbXHJcblxyXG5dLFxyXG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMT1cclxue1xyXG5cImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXHJcblwidGl0bGVcIjogXCLmoLfmnb8gMSDlsYJcIixcclxuXCJuYW1lXCI6IFwiMVwiLFxyXG5cImNhbkZseVRvXCI6IHRydWUsXHJcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXHJcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyYXNzXCIsXHJcblwiaW1hZ2VzXCI6IFtcclxuICAgIFtcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgXCJiZy5qcGdcIixcclxuICAgICAgICAwXHJcbiAgICBdXHJcbl0sXHJcblwid2VhdGhlclwiOiBbXHJcbiAgICBcInNub3dcIixcclxuICAgIDZcclxuXSxcclxuXCJpdGVtX3JhdGlvXCI6IDEsXHJcblwibWFwXCI6IFtcclxuICAgIFsgIDcsMTMxLCAgOCwxNTIsICA5LDEzMCwgMTAsMTUyLDE2NiwxNjUsMTMyLDE2NSwxNjZdLFxyXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwxNTIsMTY1LDE2NCwgIDAsMTYyLDE2NV0sXHJcbiAgICBbMTUyLDE1MiwxNTIsMTUyLDEyMSwxNTIsMTUyLDE1MiwgIDAsICAwLDIyOSwgIDAsICAwXSxcclxuICAgIFsgNDMsIDMzLCA0NCwxNTEsICAwLCAgMCwgIDAsMTUyLDE2NSwxNjEsICAwLDE2MywxNjVdLFxyXG4gICAgWyAyMSwgMjIsIDIxLDE1MSwgIDAsICAwLCAgMCwxNTIsMTY2LDE2NSwgIDAsMTY1LDE2Nl0sXHJcbiAgICBbMTUxLDI0NSwxNTEsMTUxLCAgMCwgODcsICAwLDE1MiwxNTIsMTUyLCA4NSwxNTMsMTUzXSxcclxuICAgIFsgIDAsMjQ2LCAgMCwxNTEsICAwLCAgMCwgIDAsMTUyLDE1MiwyMjEsICAwLDIyMSwxNTNdLFxyXG4gICAgWzI0NiwgIDAsMjQ2LDE1MSwgIDAsICAwLCAgMCwxMjEsIDg1LCAgMCwgIDAsICAwLDE1M10sXHJcbiAgICBbMTUxLDI0NiwxNTEsMTUxLCAgMCwxNTMsMTUzLDE1MywxNTMsMTUzLDE1MywxNTMsMTUzXSxcclxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMTY0LCAgMCwgIDAsMTYzLCAgMCwgIDBdLFxyXG4gICAgWyAgMSwgIDEsICAxLCAgMSwgIDAsIDIwLCAgMCwgIDAsICAwLDE2MiwgIDAsMTYxLCAgMF0sXHJcbiAgICBbICAxLCAgMCwxMjMsICAxLCAgMCwgMjAsMTI0LCAgMCwxMjEsICAwLDEyMiwgIDAsMTI2XSxcclxuICAgIFsgIDEsICAwLCAgMCwgIDEsIDg4LCAyMCwgODYsICAwLCAgMCwgIDAsICAwLCAgMCwxMjJdXHJcbl0sXHJcblwiZmlyc3RBcnJpdmVcIjogW10sXHJcblwiZXZlbnRzXCI6IHtcclxuICAgIFwiNCwxMFwiOiBbXHJcbiAgICAgICAgXCJcXHRb5qC35p2/5o+Q56S6XeacrOWxgualvOWwhuS8muWvueWQhOexu+S6i+S7tui/m+ihjOS7i+e7jeOAglwiLFxyXG4gICAgICAgIFwi5bem6L655piv5LiA5Liq5Lu/NTDlsYLnmoTpmbfpmLHlgZrms5XvvIzkuIrmlrnmmK/llYblupfjgIHlv6vmjbfllYblupfnmoTkvb/nlKjmlrnms5XvvIzlj7PkuIrmmK/kuIDkuKrlhbjlnovnmoTmnYDmgKrlvIDpl6jnmoTkvovlrZDvvIzlj7PkuIvmmK/lkITnsbvlj6/og73nmoROUEPkuovku7bjgIJcIixcclxuICAgICAgICBcIuacrOagt+adv+ebruWJjeaUr+aMgeeahOS6i+S7tuWIl+ihqOWkp+iHtOacie+8mlxcbnRleHQ6IOaYvuekuuS4gOauteaWh+Wtl++8iOavlOWmguS9oOeOsOWcqOato+WcqOeci+WIsOeahO+8iVxcbnRpcDog5bem5LiK6KeS5pi+56S65o+Q56S6XFxuc2hvdzog5L2/5LiA5Liq5LqL5Lu25pyJ5pWI77yI5Y+v6KeB44CB5Y+v6KKr5Lqk5LqS77yJXFxuaGlkZTog5L2/5LiA5Liq5LqL5Lu25aSx5pWI77yI5LiN5Y+v6KeB44CB5LiN5Y+v6KKr5Lqk5LqS77yJXFxudHJpZ2dlcjog6Kem5Y+R5Y+m5LiA5Liq5Zyw54K555qE5LqL5Lu2XFxuYW5pbWF0ZTog5pi+56S65Yqo55S7XFxuYmF0dGxlOiDlvLrliLblkozmn5DmgKrnianmiJjmlpdcXG5vcGVuRG9vcjog5peg6ZyA6ZKl5YyZ5byA6Zeo77yI5L6L5aaC5py65YWz6Zeo44CB5pqX5aKZ77yJXCIsXHJcbiAgICAgICAgXCJvcGVuU2hvcDog5omT5byA5LiA5Liq5YWo5bGA5ZWG5bqXXFxuZGlzYWJsZVNob3A6IOemgeeUqOS4gOS4quWFqOWxgOWVhuW6l1xcbmNoYW5nZUZsb29yOiDkvKDpgIHli4flo6vliLDmn5DlsYLmn5DkvY3nva5cXG5jaGFuZ2VQb3M6IOS8oOmAgeWLh+Wjq+WIsOW9k+WxguafkOS9jee9ru+8m+i9rOWQkVxcbnNob3dJbWFnZTog5pi+56S65Zu+54mHXFxuc2V0Rmc6IOabtOaUueeUu+mdouiJsuiwg1xcbnNldFdlYXRoZXI6IOabtOaUueWkqeawlFxcbm1vdmU6IOenu+WKqOS6i+S7tuaViOaenFxcbm1vdmVIZXJvOiDnp7vliqjli4flo6vmlYjmnpxcXG5wbGF5QmdtOiDmkq3mlL7mn5DkuKrog4zmma/pn7PkuZBcXG5wYXVzZUJnbTog5pqC5YGc6IOM5pmv6Z+z5LmQXFxucmVzdW1lQmdtOiDmgaLlpI3og4zmma/pn7PkuZDnmoTmkq3mlL5cXG5wbGF5U291bmQ6IOaSreaUvuafkOS4qumfs+mikVwiLFxyXG4gICAgICAgIFwiaWY6IOadoeS7tuWIpOaWrVxcbmNob2ljZXM6IOaPkOS+m+mAiemhuVxcbnNldFZhbHVlOiDorr7nva7li4flo6vlsZ7mgKfpgZPlhbfvvIzmiJbmn5DkuKrlj5jph48vZmxhZ1xcbnVwZGF0ZTog5pu05paw54q25oCB5qCP5ZKM5Zyw5Zu+5pi+5LykXFxud2luOiDojrflvpfog5zliKnvvIjmuLjmiI/pgJrlhbPvvIlcXG5sb3NlOiDmuLjmiI/lpLHotKVcXG5zbGVlcDog562J5b6F5aSa5bCR5q+r56eSXFxuZXhpdDog56uL5Yi757uT5p2f5b2T5YmN5LqL5Lu2XFxucmV2aXNpdDog56uL5Yi757uT5p2f5LqL5Lu25bm26YeN5paw6Kem5Y+RXFxuZnVuY3Rpb246IOiHquWumuS5iUpT6ISa5pysXFxuXFxu5pu05aSa5pSv5oyB55qE5LqL5Lu26L+Y5Zyo57yW5YaZ5Lit77yM5qyi6L+O5oKo5a6d6LS155qE5oSP6KeB44CCXCIsXHJcbiAgICAgICAgXCLmnInlhbPlkITkuovku7bnmoTmoLfkvovvvIzlj6/lj4Lop4HmnKzlsYLkuIDkuptOUEPnmoTlhpnms5XjgIJcXG7miYDmnInkuovku7bmoLfkvovmnKzlsYLpg73mnInku4vnu43jgIJcXG5cXG7kuIDkuKroh6rlrprkuYnkuovku7blpITnkIblrozlkI7vvIzpnIDopoHosIPnlKh7XFxcInR5cGVcXFwiOiBcXFwiaGlkZVxcXCJ96K+l5LqL5Lu25omN5LiN5Lya5YaN5qyh5Ye6546w44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxLDVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiMSw2XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjAsN1wiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCIyLDdcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiMSw4XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjEsN1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W3JlZEtpbmdd5qyi6L+O5p2l5Yiw6a2U5aGU77yM5L2g5piv56ys5LiA55m+5L2N5oyR5oiY6ICF44CCXFxu6Iul5L2g6IO95omT6LSl5oiR5omA5pyJ55qE5omL5LiL77yM5oiR5bCx5LiO5L2g5LiA5a+55LiA55qE5Yaz5paX44CCXFxu546w5Zyo5L2g5b+F6aG75o6l5Y+X5oiR55qE5a6J5o6S44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13ku4DkuYjvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRhY2subXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmF0ay8xMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpkZWZcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czpkZWYvMTBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICAgIDhcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldEN1cnRhaW5cIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEyNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDcwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaGFuZ2VGbG9vclwiLFxyXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIyLDExXCI6IFtcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd5ZaC77yB6YaS6YaS77yB5b+r6YaS6YaS77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRDdXJ0YWluXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXemine+8jOaIkei/meaYr+WcqOS7gOS5iOWcsOaWue+8n1wiLFxyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3kvaDooqvprZTnjovmipPkuobotbfmnaXmiZTov5vkuobnm5Hni7HvvIzlkozmiJHlhbPlnKjkuobkuIDotbfvvIzkvYbmmK/lubjov5DnmoTmmK/miJHlnKjmmKjlpKnliJrliJrmjJblpb3kuIDmnaHotorni7HnmoTmmpfpgZPvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXHJcbiAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAzMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3miJHlhYjotbDkuobvvIznpZ3kvaDlpb3ov5DvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm1vdmVcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDc1MCxcclxuICAgICAgICAgICAgXCJzdGVwc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRvd25cIlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIuS4iumdouaYr+S4qm1vdmXkuovku7bvvIzlj6/ku6Xlr7lOUEPnrYnov5vooYznp7vliqjjgIJcXG7or6bop4HmoLfmnb/kuK3lsI/lgbfkuovku7bnmoTlhpnms5XjgIJcIixcclxuICAgICAgICBcIlxcdFtoZXJvXeaAjuS5iOi3keeahOi/meS5iOW/qy4uLlwiXHJcbiAgICBdLFxyXG4gICAgXCI0LDJcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5pys5aGU55qE5ZWG5bqX5pyJ5Lik57G777yM5YWo5bGA5ZWG5bqX5ZKM6Z2e5YWo5bGA5ZWG5bqX44CCXFxuXFxu5omA6LCT6Z2e5YWo5bGA5ZWG5bqX77yM5bCx57G75Ly85LqO5Y+z5LiL6KeS6YKj5Liq5Y2W6ZKl5YyZ55qE6ICB5Lq65LiA5qC377yM5LiA5a6a6KaB56Kw5Yiw5omN6IO96Kem5Y+R5LqL5Lu244CCXFxuXFxu6ICM5YWo5bGA5ZWG5bqX77yM5YiZ6IO95Zyo5b+r5o235ZWG5bqX5Lit55u05o6l5L2/55So44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3opoHms6jlhozkuIDkuKrlhajlsYDllYblupfvvIzkvaDpnIDopoHlnKggZGF0YS5qcyDkuK3vvIzmib7liLAgc2hvcHPvvIzlubblnKjlhoXmt7vliqDkvaDnmoTllYblupfkv6Hmga/jgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWVhuW6l+S/oeaBr+a3u+WKoOWQju+8jOWPr+S7peWcqOmcgOimgeeahOS6i+S7tuWkhOiwg+eUqHtcXFwidHlwZVxcXCI6IFxcXCJvcGVuU2hvcFxcXCJ95p2l5omT5byA5L2g5re75Yqg55qE5YWo5bGA5ZWG5bqX44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lnKjkuIrpnaLnmoTkvovlrZDph4zvvIzlt6bovrnmmK/kuIDkuKrku781MOWxgueahOmHkeW4geWVhuW6l++8jOWPs+i+ueaYr+S4gOS4quS7vzI05bGC55qE57uP6aqM5ZWG5bqX44CCXFxuXFxu5ZWG5bqX6KKr6K6/6Zeu5ZCO5Y2z5Y+v5Zyo5b+r5o235ZWG5bqX5Lit6L+b6KGM5L2/55So44CCXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lpoLmnpzkvaDpnIDopoHlnKjmn5DlsYLmmoLml7bnpoHnlKjlv6vmjbfllYblupfvvIzlj6/ku6XlnKhkYXRhLmpz5Lit6K6+572uY2Fubm90VXNlUXVpY2tTaG9w44CCXFxu5aaC5p6c6ZyA6KaB5rC45LmF56aB55So5ZWG5bqX77yM6K+35L2/55Soe1xcXCJ0eXBlXFxcIjpcXFwiZGlzYWJsZVNob3BcXFwifVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMSwwXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5TaG9wXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJtb25leVNob3AxXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI1LDBcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlblNob3BcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcImV4cFNob3AxXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI3LDdcIjogW1xyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d6L+Z5piv5LiA5Liq5YW45Z6L55qE5p2A5oCq5byA6Zeo44CB5by65Yi25oiY5paX5LqL5Lu244CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI4LDdcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiOSw3XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMCw0XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja0tpbmdd5L2g57uI5LqO6L+Y5piv5p2l5LqG44CCXCIsXHJcbiAgICAgICAgXCJcXHRbaGVyb13mlL7lvIDmiJHku6znmoTlhazkuLvvvIFcIixcclxuICAgICAgICBcIlxcdFtibGFja0tpbmdd5aaC5p6c5oiR5LiN5oS/5oSP5ZGi77yfXCIsXHJcbiAgICAgICAgXCJcXHRbaGVyb13ml6DpnIDlpJror7TvvIzmi5TliZHlkKfvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiYmxhY2tLaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja0tpbmdd5rKh5oOz5Yiw5L2g5bey57uP5Y+Y5b6X6L+Z5LmI5by65aSn5LqGLi4uIOeul+S9oOWOieWus+OAglxcbuWFrOS4u+WwseS6pOe7meS9oOS6hu+8jOivt+WlveWlveWvueWlueOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiMTAsMFwiOiBbXHJcbiAgICAgICAgXCJcXHRbaGVyb13lhazkuLvvvIzmiJHmnaXmlZHkvaDkuoZ+XCIsXHJcbiAgICAgICAgXCJcXHRb5YWs5Li7LHByaW5jZXNzXeW/q+aVkeaIkeWHuuWOu++8geaIkeWPl+Wkn+i/memHjOS6hu+8gVwiLFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5YWs5Li75Yir5oCV77yM5oiR5Lus6LWw5ZCnflwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwid2luXCIsXHJcbiAgICAgICAgICAgIFwicmVhc29uXCI6IFwi5pWR5Ye65YWs5Li7XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI2LDEyXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjYsMTFcIjogW1xyXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3pgJrov4fosIPnlKgge1xcXCJ0eXBlXFxcIjogXFxcInNob3dcXFwifSDlj6/ku6Xkvb/pmpDol4/nmoTkuovku7bmmL7npLrlh7rmnaXjgIJcXG7mr5TlpoLmiJHkuIvpnaLov5nkuKrmnLrlhbPpl6jjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDEyXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3pgJrov4fosIPnlKgge1xcXCJ0eXBlXFxcIjogXFxcIm9wZW5Eb29yXFxcIn0g5Y+v5Lul5peg6ZyA6ZKl5YyZ5omT5byA5LiA5omH6Zeo5oiW5pqX5aKZ44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgMTJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeWQjOaXtu+8jOS5n+WPr+S7peWvueWFtuWug+Wxgui/m+ihjOaTjeS9nO+8jOavlOWmgualvOS4i+eahOacuuWFs+mXqO+8jOeOsOWcqOW3sue7j+S4uuS9oOaJk+W8gOS6huOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgMTEsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3lpoLmnpwgc2hvdyDmiJYgaGlkZSDmjIflrprkuoYgdGltZSDlj4LmlbDvvIzliJnku6XliqjnlLvmlYjmnpzmmL7npLrvvIzmjIflrprnmoTlj4LmlbDkvZzkuLrmtojlpLHml7bpl7TvvIjmr6vnp5LvvInmnaXorqHnrpfjgIJcIixcclxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld546w5Zyo5Yiw5qW85LiL5p2l5om+5oiR5ZCnflwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAxMixcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI4LDExXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6bWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOm1hbl90aW1lcysxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5Zyo5paH5a2X5Lit5L2/55SoJHsnICR7ICd95ZKMIH0g5Y+v5Lul6K6h566X5bm25pi+56S65LiA5Liq6KGo6L6+5byP55qE57uT5p6c44CCXFxuXCIsXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3kvovlpoLvvJpcXG7kvaDnmoTlvZPliY3mlLvlh7vlipvmmK8ke3N0YXR1czphdGt977yM6Ziy5b6h5Yqb5pivJHtzdGF0dXM6ZGVmfeOAglxcbuaUu+mYsuWSjOeahOWNgeWAjeaYryR7MTAqKHN0YXR1czphdGsrc3RhdHVzOmRlZil977yM5pS76Ziy5LmL56ev5pivJHtzdGF0dXM6YXRrKnN0YXR1czpkZWZ944CCXFxu5L2g5pyJJHtpdGVtOnllbGxvd0tleX3miorpu4TpkqXljJnvvIwke2l0ZW06Ymx1ZUtleX3miorok53pkqXljJnvvIwke2l0ZW06cmVkS2V5feaKiue6oumSpeWMmeOAglxcbuS9oOaciSR7aXRlbTpwaWNrYXhlfeS4quegtO+8jCR7aXRlbTpib21ifeS4queCuO+8jCR7aXRlbTpjZW50ZXJGbHl95Liq6aOe44CCXFxu6L+Z5piv5L2g56ysJHtmbGFnOm1hbl90aW1lc33mrKHlkozmiJHlr7nor53jgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWQjOaXtu+8jOS9oOS5n+WPr+S7pemAmui/h3tcXFwidHlwZVxcXCI6IFxcXCJzZXRWYWx1ZVxcXCJ95p2l6K6+572u5LiA5Liq5YuH5aOr55qE5bGe5oCn44CB6YGT5YW377yM5oiW5p+Q5LiqRmxhZ+OAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5L6L5aaC77yaXFxu546w5Zyo5oiR5bCG6K6p5L2g55qE5pS76Ziy5o+Q5Y2HNTAl77yM5YaN5bCG5pS76Ziy5ZKM55qE5Y2B5YCN5Yqg5Yiw55Sf5ZG95YC85LiK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6YXRrKjEuNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpkZWZcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czpkZWYqMS41XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmhwXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6aHArMTAqKHN0YXR1czphdGsrc3RhdHVzOmRlZilcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lho3pgIHkvaA1MDDph5HluIHvvIwxMDAw57uP6aqM77yMMeegtDLngrgz6aOe77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leSs1MDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6ZXhwZXJpZW5jZVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmV4cGVyaWVuY2UrMTAwMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06cGlja2F4ZVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpwaWNrYXhlKzFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJvbWJcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Ym9tYisyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpjZW50ZXJGbHlcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Y2VudGVyRmx5KzNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl1zdGF0dXM6eHh4IOS7o+ihqOWLh+Wjq+eahOafkOS4quWxnuaAp+OAglxcbuWFtuS4rXh4eOWPr+WPlmhwLCBhdGssIGRlZiwgbWRlZiwgbW9uZXksZXhwZXJpZW5jZei/meWHoOmhueOAglxcblxcbml0ZW06eHh4IOS7o+ihqOWLh+Wjq+eahOafkOS4qumBk+WFt+eahOS4quaVsOOAglxcbnh4eOS4uumBk+WFt0lE77yM5YW35L2T5Y+v5Y+C6KeBaXRlbXMuanPkuK3nmoTlrprkuYnjgIJcXG5cXG5mbGFnOnh4eCDku6Pooajmn5DkuKroh6rlrprkuYlGbGFn5oiW5Y+Y6YeP44CCXFxueHh45Li6RmxhZy/lj5jph4/lkI3vvIzlj6/ku6Xoh6rooYzlrprkuYnvvIznlLHlrZfmr43jgIHmlbDlrZflkozkuIvliJLnur/nu4TmiJDjgIJcXG7mnKrlrprkuYnov4fogIznm7TmjqXlj5bnlKjnmoRGbGFn6buY6K6k5YC85Li6ZmFsc2XjgIJcIixcclxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS9oOeOsOWcqOWPr+S7pemHjeaWsOWSjOaIkei/m+ihjOWvueivne+8jOi/m+S4gOatpeeci+WIsOWxnuaAp+WAvOeahOaUueWPmOOAglwiXHJcbiAgICBdLFxyXG4gICAgXCIxMCwxMVwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6d29tYW5fdGltZXM9PTBcIixcclxuICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5nmmK/kuKrlvojlpI3mnYLnmoTkvovlrZDvvIzlroPlsIbmlZnkvJrkvaDlpoLkvZXkvb/nlKhpZiDor63lj6Xov5vooYzmnaHku7bliKTmlq3vvIzku6Xlj4ogY2hvaWNlcyDmj5DkvpvpgInpobnmnaXkvpvnlKjmiLfov5vooYzpgInmi6njgIJcIixcclxuICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3nrKzkuIDmrKHorr/pl67miJHlsIbmmL7npLrov5nmrrXmloflrZfvvJvku47nrKzkuozmrKHlvIDlp4vlsIbkvJrlkJHkvaDlh7rllK7pkqXljJnjgIJcXG7pkqXljJnku7fmoLzlsIbpmo/nnYDorr/pl67mrKHmlbDpgJLlop7jgIJcXG7lvZPlkIjorqHlh7rllK7kuobkuIPmiorpkqXljJnlkI7vvIzlsIbpgIHkvaDkuIDmiorlpKfpu4Tpl6jpkqXljJnvvIzlubbmtojlpLHkuI3lho3lh7rnjrDjgIJcIixcclxuICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5npg6jliIbnmoTpgLvovpHmr5TovoPplb/vvIzor7fnu4blv4PnnIvmoLfmnb/nmoTlhpnms5XvvIzmmK/lvojlrrnmmJPnnIvmh4LlubbnkIbop6PnmoTjgIJcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzp3b21hbl90aW1lcz09OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDotK3kubDnmoTpkqXljJnlt7Lnu4/lpJ/lpJrkuobvvIzlho3nu6fnu63ljZbnu5nkvaDnmoTor53miJHkvJrmnInljbHpmannmoTjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeeci+WcqOS9oOi0oeeMrue7meaIkei/meS5iOWkmumSseeahOS7veS4iu+8jOmAgeS9oOS4gOaKiuWkp+m7hOmXqOmSpeWMmeWQp++8jOW4jOacm+S9oOiDveWlveWlveeUqOWug+OAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpiaWdLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJpZ0tleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeaIkeWFiOi1sOS6hu+8jOaLnOaLnH5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNob2ljZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcdFvogIHkurosd29tYW5d5bCR5bm077yM5L2g6ZyA6KaB6ZKl5YyZ5ZCX77yfXFxu5oiR6L+Z6YeM5pyJ5aSn5oqK55qE77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob2ljZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6buE6ZKl5YyZ77yIJHs5K2ZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj05K2ZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSg5K2ZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93S2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTp5ZWxsb3dLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuiTnemSpeWMme+8iCR7MTgrMipmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MTgrMipmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMTgrMipmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJsdWVLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJsdWVLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIue6oumSpeWMme+8iCR7MzYrNCpmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MzYrNCpmbGFnOndvbWFuX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMzYrNCpmbGFnOndvbWFuX3RpbWVzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnJlZEtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06cmVkS2V5KzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnprvlvIBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6d29tYW5fdGltZXMrMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjEyLDExXCI6IFtcclxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3kvb/nlKgge1xcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSDlj6/ku6Xlhpnoh6rlrprkuYnnmoRKU+iEmuacrOOAglxcbuacrOWhlOaUr+aMgeeahOaJgOacieS4u+imgUFQSeS8muWcqGRvY+aWh+aho+WGhee7meWHuuOAglwiLFxyXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbk1hZ2ljaWFuXeS+i+Wmgui/meS4quS+i+WtkO+8muWNs+WwhuW8ueWHuuS4gOS4qui+k+WFpeeql+WPo++8jOeEtuWQjuS8muWwhuS9oOeahOi+k+WFpee7k+aenOebtOaOpeWKoOWIsOS9oOeahOaUu+WHu+WKm+S4iuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6K+36L6T5YWl5L2g6KaB5Yqg5pS75Ye75Yqb55qE5pWw5YC877yaXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcclxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOmlucHV0PjBcIixcclxuICAgICAgICAgICAgXCJ0cnVlXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmF0aytmbGFnOmlucHV0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5pON5L2c5oiQ5Yqf77yM5pS75Ye7KyR7ZmxhZzppbnB1dH1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwi5pON5L2c5oiQ5Yqf77yM5pS75Ye7KyR7ZmxhZzppbnB1dH1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZhbHNlXCI6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3lhbfkvZPlj6/lj4Lop4HmoLfmnb/kuK3mnKzkuovku7bnmoTlhpnms5XjgIJcIlxyXG4gICAgXSxcclxuICAgIFwiMTAsMTJcIjogbnVsbCxcclxuICAgIFwiMTIsMTJcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3dpdGNoXCIsXHJcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICBcImNhc2VMaXN0XCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d546w5Zyo5L2/55Soc3dpdGNo5pS55YaZ6L+Z5Liq5L6L5a2QXCJcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcIjhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDotK3kubDnmoTpkqXljJnlt7Lnu4/lpJ/lpJrkuobvvIzlho3nu6fnu63ljZbnu5nkvaDnmoTor53miJHkvJrmnInljbHpmannmoTjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeeci+WcqOS9oOi0oeeMrue7meaIkei/meS5iOWkmumSseeahOS7veS4iu+8jOmAgeS9oOS4gOaKiuWkp+m7hOmXqOmSpeWMmeWQp++8jOW4jOacm+S9oOiDveWlveWlveeUqOWug+OAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpiaWdLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJpZ0tleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeaIkeWFiOi1sOS6hu+8jOaLnOaLnH5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYXNlXCI6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5b2T5rKh5pyJ56ym5ZCI55qE5YC855qE5Zy65ZCI5omn6KGM5q2k5LqL5Lu2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hvaWNlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFx0W+iAgeS6uix3b21hbl3lsJHlubTvvIzkvaDpnIDopoHpkqXljJnlkJfvvJ9cXG7miJHov5nph4zmnInlpKfmiornmoTvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hvaWNlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLpu4TpkqXljJnvvIgkezkrZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTkrZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDkrZmxhZzp3b21hbl90aW1lcylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTp5ZWxsb3dLZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnllbGxvd0tleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6JOd6ZKl5YyZ77yIJHsxOCsyKmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0xOCsyKmZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgxOCsyKmZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Ymx1ZUtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Ymx1ZUtleSsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi57qi6ZKl5YyZ77yIJHszNis0KmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0zNis0KmZsYWc6d29tYW5fdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgzNis0KmZsYWc6d29tYW5fdGltZXMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06cmVkS2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpyZWRLZXkrMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuemu+W8gFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzp3b21hbl90aW1lcysxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59LFxyXG5cImNoYW5nZUZsb29yXCI6IHtcclxuICAgIFwiNCwxMlwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxyXG4gICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjUsNVwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJkb3duRmxvb3JcIixcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCJcclxuICAgIH0sXHJcbiAgICBcIjEwLDEyXCI6IG51bGxcclxufSxcclxuXCJhZnRlckJhdHRsZVwiOiB7XHJcbiAgICBcIjksNlwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOmRvb3JcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6ZG9vcisxXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCIxMSw2XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6ZG9vclwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzpkb29yKzFcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSxcclxuXCJhZnRlckdldEl0ZW1cIjoge30sXHJcblwiYWZ0ZXJPcGVuRG9vclwiOiB7fSxcclxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxyXG5cImJnbWFwXCI6IFtcclxuXHJcbl0sXHJcblwiZmdtYXBcIjogW1xyXG5cclxuXSxcclxuXCJhdXRvRXZlbnRcIjoge1xyXG4gICAgXCIxMCw1XCI6IHtcclxuICAgICAgICBcIjBcIjoge1xyXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6ZG9vcj09MlwiLFxyXG4gICAgICAgICAgICBcImN1cnJlbnRGbG9vclwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInByaW9yaXR5XCI6IDAsXHJcbiAgICAgICAgICAgIFwiZGVsYXlFeGVjdXRlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcIm11bHRpRXhlY3V0ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn0iLCJtYWluLmZsb29ycy5zYW1wbGUyPVxyXG57XHJcblwiZmxvb3JJZFwiOiBcInNhbXBsZTJcIixcclxuXCJ0aXRsZVwiOiBcIuagt+advyAyIOWxglwiLFxyXG5cIm5hbWVcIjogXCIyXCIsXHJcblwiY2FuRmx5VG9cIjogdHJ1ZSxcclxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcclxuXCJjYW5ub3RWaWV3TWFwXCI6IGZhbHNlLFxyXG5cImRlZmF1bHRHcm91bmRcIjogXCJncm91bmRcIixcclxuXCJpbWFnZXNcIjogW10sXHJcblwiaXRlbV9yYXRpb1wiOiAxLFxyXG5cIm1hcFwiOiBbXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsMTIxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsIDQ1LCAgMCwgIDEsICAwLDIwMiwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsIDg4LCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4NywgIDAsICAwLCAgMCwgIDAsMTIyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXHJcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF1cclxuXSxcclxuXCJ3aWR0aFwiOiAyNixcclxuXCJoZWlnaHRcIjogMjYsXHJcblwiZmlyc3RBcnJpdmVcIjogW10sXHJcblwiZXZlbnRzXCI6IHtcclxuICAgIFwiMywyXCI6IFtcclxuICAgICAgICBcIjEyM1wiXHJcbiAgICBdLFxyXG4gICAgXCIxMiwxMlwiOiBbXHJcbiAgICAgICAgXCIyMzRcIlxyXG4gICAgXVxyXG59LFxyXG5cImNoYW5nZUZsb29yXCI6IHtcclxuICAgIFwiNiwxMFwiOiB7XHJcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxyXG4gICAgICAgIFwic3RhaXJcIjogXCJ1cEZsb29yXCJcclxuICAgIH0sXHJcbiAgICBcIjcsMTJcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCJcclxuICAgIH1cclxufSxcclxuXCJhZnRlckJhdHRsZVwiOiB7fSxcclxuXCJhZnRlckdldEl0ZW1cIjoge30sXHJcblwiYWZ0ZXJPcGVuRG9vclwiOiB7fSxcclxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxyXG5cInVwRmxvb3JcIjogbnVsbCxcclxuXCJiZ21hcFwiOiBbXHJcblxyXG5dLFxyXG5cImZnbWFwXCI6IFtcclxuXHJcbl0sXHJcbn0iLCJtYWluLmZsb29ycy5zYW1wbGUzPVxyXG57XHJcblwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcclxuXCJ0aXRsZVwiOiBcIuS4u+WhlCA0MCDlsYJcIixcclxuXCJuYW1lXCI6IFwiNDBcIixcclxuXCJjYW5GbHlUb1wiOiBmYWxzZSxcclxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcclxuXCJkZWZhdWx0R3JvdW5kXCI6IFwic25vd0dyb3VuZFwiLFxyXG5cImltYWdlc1wiOiBbXSxcclxuXCJjb2xvclwiOiBbXHJcbiAgICAyNTUsXHJcbiAgICAwLFxyXG4gICAgMCxcclxuICAgIDAuM1xyXG5dLFxyXG5cIndlYXRoZXJcIjogW1xyXG4gICAgXCJyYWluXCIsXHJcbiAgICAxMFxyXG5dLFxyXG5cImJnbVwiOiBcImJnbS5tcDNcIixcclxuXCJpdGVtX3JhdGlvXCI6IDEsXHJcblwibWFwXCI6IFtcclxuICAgIFsgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgODcsICA1LCAgNSwgIDUsICA1LCAgNSwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDEsIDg1LCAgMSwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsMjQ3LCAgMSwyNDcsICAxLDI0NywgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDEsMjQ3LDI0NywyNDcsICAxLCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgMSwyNDcsIDMwLDI0NywgIDEsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsMjQ3LCAgMSwxMjQsICAxLDI0NywgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLDEyMywgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDEsICAwLCAgMSwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxyXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICA0LCAgMCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNV0sXHJcbiAgICBbICA1LCAgNCwgIDQsICA0LCAgNCwgIDQsIDg1LCAgNCwgIDQsICA0LCAgNCwgIDQsICA1XSxcclxuICAgIFsgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgODgsICA1LCAgNSwgIDUsICA1LCAgNSwgIDVdXHJcbl0sXHJcblwiZmlyc3RBcnJpdmVcIjogW1xyXG4gICAgXCJcXHRb5a6e5oiY77yBXeacrOalvOWwhuWwneivleWkjeWIu+OAiuWuv+WRveeahOaXi+W+i+OAizQwRuWJp+aDheOAglwiXHJcbl0sXHJcblwiZXZlbnRzXCI6IHtcclxuICAgIFwiNiwxMVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI2LDEwXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJkb29yLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIjYsN1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13mnbDlhYvvvIzkvaDnqbbnq5/mmK/ku4DkuYjkurrvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd4oCm4oCmXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13miJHku6zigKbigKbmmK/mnIvlj4vlr7nlkKfvvJ9cXG7mmK/mnIvlj4vlsLHlupTor6Xnm7jkupLkv6Hku7vlr7nlkKfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd4oCm4oCm5LqL5Yiw5aaC5LuK5Lmf5rKh5pyJ5LuA5LmI5aW96ZqQ556S55qE5LqG44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeayoemUme+8jOaIkeWwseaYr+i/meS4gOWIh+eahOiDjOWQjuS4u+iwi+OAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibW92ZVwiLFxyXG4gICAgICAgICAgICBcInN0ZXBzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHnmoTnnJ/lkI3kuLrigJTigJTpu5HmmpflpKfms5XluIjvvIznrKzlm5vljLrln5/nmoTlpLTnm67jgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeWRteWRte+8jOS4jeefpemBk+S4uuS7gOS5iO+8jOaIkeern+eEtuWvueS6i+aDhei1sOWIsOeOsOWcqOi/meS4gOatpeavq+S4jeaEn+inieaEj+WkluOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Lul5p2w5YWL55qE5ZCN5LmJ5Yip55So5LqG5L2g6L+Z5LmI5LmF77yM55yf5piv5oqx5q2J5ZWK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13nnJ/mraPnmoTmnbDlhYvnjrDlnKjlnKjlk6rph4zvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeebl+i0vOadsOWFi+i/meS4quS6uuexu+S7juacquWtmOWcqOi/h++8jOS7luWPquaYr+aIkeeUqOadpeaOpei/keS9oOeahOS4gOWJr+earuWbiuiAjOW3suOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm6L+Z5qC35ZWK77yM5ZG15ZG144CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuLrku4DkuYjkvaDnnIvkuIrljrvkuJ3mr6vkuI3nlJ/msJTvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeWkmuS6j+S6humsvOW4ne+8jOaIkeeOsOWcqOeahOiEvuawlOWlveW+l+i/nuaIkeiHquW3semDveWus+aAleOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6K+06LW35p2l5oiR6L+Y5b6X5aW95aW95oSf6LCi5L2g5ZGi77yM5aaC5p6c5rKh5pyJ5p2w5YWL4oCm4oCm5L2g55qE5biu5Yqp77yM5oiR5pep5bCx5q275Zyo56ys5LiA5Yy65Z+f5LqG44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13kuI3orrrkvaDnmoTnm67nmoTlpoLkvZXvvIzkvaDnmoTmiYDkvZzmiYDkuLrpg73mmK/lr7nmiJHmnInliKnnmoTjgILkuI3mmK/lkJfvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeiDveWkn+WmguatpOa3oeWumueahOmdouWvueiDjOWPm++8jOeci+adpei3n+S6lOW5tOWJjeebuOavlO+8jOS9oOehruWunuaIkOmVv+S6huW+iOWkmuWViuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5LqU5bm05YmN77yf4oCm4oCm6buR5pqX5aSn5rOV5biI77yM5Zyo6L+Z5LmL5YmN77yM5oiR5Lus5aW95YOP57Sg5pyq6LCL6Z2i5ZCn77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kupTlubTliY3pgqPlnLrlsaDln47kvaDlupTor6Xov5nkuIDnlJ/pg73kuI3kvJrlv5jorrDlkKfjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeW+iOS4jeW3p++8jOmCo+WcuuWxoOWfjueahOS4u+iwi++8jOS5n+aYr+aIkeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCmXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13ov5nkuYjor7TvvIzlh7vkuK3miJHlj4zkurLnmoTpgqPpgZPntKvoibLpl6rnlLXvvIzkuZ/lsLHmmK/kvaDph4rmlL7nmoTlkKfigKbigKZcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOeahOWPjOS6su+8n+i/meenjeS6i+aDheaIkeaAjuS5iOWPr+iDveS8muiusOW+l++8n1xcbuS9oOmavumBk+WcqOi4qeatu+iaguiageeahOaXtuWAmei/mOS8muS4gOWPquWPquiusOS4i+S7luS7rOeahOagt+WtkOWQl++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6ICBIOWtkCDopoEg5L2gIOeahCDlkb1cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOW6lOivpeWvueaIkeW/g+aAgOaEn+a/gOaJjeWvue+8jOWmguaenOS4jeaYr+mCo+aXtueahOaIkeeci+WHuuS6huS9oOmakOiXj+eahOeogOacieWLh+iAheS9k+i0qO+8jOS9oOe7neWvueS4jeWPr+iDvea0u+WIsOS7iuWkqeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Zyo5pqX5Lit5Yqo5omL6ISa6K6p5L2g6YCa6L+H5YuH6ICF6YCJ5ouU55qE5Lq65Lmf5piv5oiR77yM5oiR5LiA55u05LiA55u05Zyo5pqX5Lit5byV5a+85L2g6LWw5Yiw5LuK5aSp6L+Z5LiA5q2l44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mmK/miJHmlZHotY7kuobkuIDml6DmmK/lpITnmoTkvaDjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS4uuS7gOS5iOWPquacieaIkeS4gOS4quS6uua0u+S6huS4i+adpe+8ge+8ge+8ge+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5Li65LuA5LmI5YGP5YGP5piv5oiR77yB77yB77yB77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHliJrmiY3kuI3mmK/or7Tov4fkuoblkJfvvJ/lm6DkuLrmiJHnnIvlh7rkuobkvaDmnInnqIDmnInli4fogIXkvZPotKjllYrjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOWImuWImui3n+msvOW4neS6pOi/h+aJi++8jOW6lOivpeW3sue7j+W+iOa4healmui/meeogOacieWLh+iAheS9k+i0qOaEj+WRs+edgOS7gOS5iOS6huWQp++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5bCx5Zug5Li65oiR5pyJ6L+Z56eN5L2T6LSo77yM5bCx5LiN5b6X5LiN6IOM6LSf5aaC5q2k5q6L6YW355qE5a6/5ZG95ZCX77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mhJrooKLvvIHov5nmhI/lkbPnnYDlj6ropoHmiJHlr7nkvaDliqDku6XlvJXlr7zot5/ln7nlhbvvvIzkvaDlsLHog73miJDkuLrov5nkuJbpl7Tlrp7lipvmnIDlvLrnmoTlrZjlnKjvvIFcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuaJgOS7pe+8jOS9oOeptuern+aDs+WIqeeUqOaIkeW5suS7gOS5iO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5Yip55So5L2g5bmy55qE5LqL5oOF77yM5L2g5LiN5piv5bey57uP5a6M5oiQ5LqG5ZCX77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbkvaDor7Tku4DkuYjvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeefpeS4jeiniemXtO+8jOS9oOW3sue7j+WcqOaIkeeahOaMh+W8leS4i+i3n+msvOW4neato+mdouS6pOaJi+W5tuS4lOadgOaOieS6huS7luWViuOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5bCx6L+e5oiR6Lef6ay85bid55qE5a+55Yaz4oCm4oCm5Lmf5piv6KKr5L2g5a6J5o6S5aW95LqG55qE77yfXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDku6zkuKTkuKrkuIDkuKrmmK/kurrnsbvli4fogIXvvIzkuIDkuKrmmK/prZTnianli4fogIXvvIzov5/ml6nkvJrmnInkuqTmiYvnmoTkuIDlpKnjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWPquS4jei/h+aYr+aTjee6teS6huS4gOezu+WIl+eahOi/numUgeS6i+S7tuiuqei/meS4gOWkqeaPkOaXqeS6huaVsOWNgeW5tOWIsOadpeiAjOW3suOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6L+Z5qC35YGa5a+56LCB5pyJ5aW95aSE77yf5LuW5Y+v5piv5L2g5Lus6a2U54mp5LiW55WM55qE5pWR5LiW5Li75ZWK44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuIDkuKrmg6fmgJXlvoHmiJjvvIzniLHlpb3lkozlubPnmoTmh6blpKvvvIzkuZ/phY3lj6vmlZHkuJbkuLvvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeiOt+W+l+S6huWKm+mHj++8jOWNtOWPquS8muiiq+WKqOaMqOaJk+iAjOS4jeS4u+WKqOWQkeS6uuexu+S4lueVjOWHuuWHu++8jOm+n+e8qeWcqOesrOS6jOWMuuWfn+aDtuaDtuW6puaXpe+8jOS7luagueacrOWwseS4jemFjeaLpeacieeogOacieWLh+iAheS9k+i0qOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Li65LqG5LiN6K6p6L+Z56eN5Lq66Zy45Y2g552A56ev57Sv5aSa5bm055qE5bqe5aSn54G16a2C6IO96YeP5peg5L2c5Li677yM5oiR6K6+6K6h6K6p5L2g5p2A5o6J5LqG5LuW44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDmsqHmnInovpzotJ/miJHnmoTmnJ/lvoXvvIzmiJDlip/miJjog5zkuobpgqPkuKrlup/nianvvIznjrDlnKjkvaDkvZPlhoXntK/np6/nmoTngbXprYLog73ph4/igKbigKbkuZ/lsLHmmK/prZTlipvvvIzlt7Lnu4/ovr7liLDkuobog73ot5/prZTnjovljLnmlYznmoTlnLDmraXjgIJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuaYr+WQl++8n+eOsOWcqOeahOaIkeiDveS4jumtlOeOi+WMueaVjO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN5q2i5aaC5q2k77yM5L2g546w5Zyo55qE5Yqb6YeP5LmL5by65bCx566X5piv57uf5rK75LiW55WM5Lmf5piv57uw57uw5pyJ5L2Z77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mgI7kuYjmoLfvvJ/opoHkuI3opoHliqDlhaXmiJHnmoTpur7kuIvvvIzot5/pmo/miJHljrvlvoHmiJjkurrnsbvkuJbnlYzvvJ9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeiDveS4jumtlOeOi+WMueaVjOeahOivne+8jOS5n+WwseaYr+ivtOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d5oiRIOeOsCDlnKgg5a+5IOS7mCDkvaAg6L+ZIOenjSDmnYIg56KOIOS5nyDnu7Ag57uwIOaciSDkvZkg5ZCnIO+8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d4oCm4oCm5LuA5LmI77yf77yBXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3nrYnkuIDkuIvvvIHliKvlhrLliqjvvIHkvaDlhYjnrYnmiJHmiorov5nliKnlrrPlhbPns7vnkIbkuIDnkIbigJTigJRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeS9oOe7meiAgeWtkOmXreWYtOOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiXFx0W2hlcm9d6ICB5a2Q5LuA5LmI6YO95LiN5oOz5ZCs44CCXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJcXHRbaGVyb13ogIHlrZDnjrDlnKjmg7PlgZrnmoTkuovmg4Xlj6rmnInkuIDku7bigJTigJRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlxcdFtoZXJvXeWJgeaOieS9oOeahOWktO+8jOaKiuWug+aUvuWbnuaIkeWPjOS6sueahOWik+WJjeOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCI2LDRcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNSw0XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjcsNFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI1LDVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiNyw1XCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjYsM1wiOiB7XHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lkKzkuI3ov5vljrvkurror53nmoTooKLotKfvvIzlsLHopoHnlKjnlrznl5vmnaXnrqHmlZnvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhbmdlUG9zXCIsXHJcbiAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Ye65p2l5ZCn77yB56aB5b+M4oCU4oCU57Sr55S15Ye25p2A6Zi177yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaEn+WPl+e7neacm+WQp++8geWGpemhveS4jeWMlueahOigoui0p++8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRhY2subXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGh1bmRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogXCJoZXJvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13llJTigKbigKbvvIHvvIHvvIjlkJDooYDvvIlcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR55qE6a2U5Yqb5Y+v5piv5YWF6Laz55qE5b6I5ZWK77yB5oiR5Lya5LiA55u05oqY56Oo5Yiw5L2g5bGI5pyN5LqO5oiR5Li65q2i77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS6uuexu++8geWlveWlveaEn+WPl+WQp++8geW9k+WIneS9oOS7rOaWveWKoOS6juaIkeeahOeXm+iLpu+8geWmguS7iuaIkeimgeeZvuWAjeWliei/mO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA3MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiNCwzXCI6IHtcclxuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcclxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI4LDNcIjoge1xyXG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxyXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sXHJcbiAgICBcIjQsNlwiOiB7XHJcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSxcclxuICAgIFwiOCw2XCI6IHtcclxuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcclxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LFxyXG4gICAgXCI2LDZcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuWmlueyvuKApuWwj+WnkOKApuKApuaYr+S9oOWQl++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS4jeimgee7neacm++8jOS5n+S4jeimgeaCsuS8pOOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS9oOS7juadpemDveS4jeaYr+eLrOiHquS4gOS6uuWcqOWJjei/m+OAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWSseS4gOebtO+8jOS4gOebtOmDveWcqOazqOinhuedgOS9oOOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeiAjeWwj+iBquaYjueahOS9oOOAgeesqOesqOeahOS9oOWRhuWRhueahOS9oOOAgeiDhuWwj+eahOS9oOOAgeWLh+aVoueahOS9oOW4heawlOeahOS9oOKApuKApuWFqOmDqOWFqOmDqOmDveaYr+S9oOOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeaJgOS7peaUvuW/g+WQp++8jOaXoOiuuuWPkeeUn+S7gOS5iO+8jOWSsemDveS8mumZquS8tOWcqOS9oOi6q+i+ueeahOOAglwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWboOS4uuS9oOimgeaYr+emu+W8gOaIkeeahOivne+8jOeri+WIu+WwseS8muatu+aOieWQp++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKblhbblrp7kuIDnm7Tku6XmnaXvvIzmiJHpg73pnZ7luLjmhJ/mv4DkvaDigKbigKZcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nrKjom4vvvIHpg73ov5nnp43ml7blgJnkuoblsLHkuI3opoHkvZzlh7rlg4/mmK/kuLTnu4jpgZfoqIDnmoTlj5HoqIDkuobllYrvvIHvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lloLvvIHpgqPovrnnqb/ooaPlk4HlkbPlt67liLDmnoHngrnnmoTpu5HmmpflpKfms5XluIjvvIzliKvlt6bpob7lj7Pnm7zor7TnmoTlsLHmmK/kvaDvvIHkvaDlupTor6Xnn6XpgZPlkrHnmoTouqvku73lkKfvvJ9cXG7ov5jkuI3pgJ/pgJ/pgIDkuIvvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Y+v5oG24oCm5aSa566h6Zey5LqL55qE5aaW57K+5peP4oCm5piO5piO5Y+q6KaB5YaN6K6p5LuW5om/5Y+X5LiA54K555a855eb5p2l55Om6Kej5LuW55qE5oSP5b+X5Yqb77yM5oiR55qE6K6h5YiS5bCx5oiQ5Yqf5LqG77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZO85ZO85ZO8fuaKseatieWTpu+8jOi/meS4quesqOibi+eahOaEj+W/l+WKm+WPr+S4jeWDj+S9oOaDs+ixoeeahOmCo+S5iOiWhOW8seWTpu+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3nlJjlv4PvvIHmiJHkuI3nlJjlv4PvvIHlppbnsr7lhazkuLvlj4jlpoLkvZXvvIFcXG7lj6ropoHmmK/pmLvmjKHmiJHnmoTvvIzkuI3nrqHmmK/osIHmiJHpg73opoHpk7LpmaTvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nu4jkuo7pnLLlh7rni5Dni7jlsL7lt7TkuobvvIzlhbblrp7lkrHml6nlsLHnnIvlh7rkvaDmnInosIvlj43nmoTlv7XlpLTjgILkvaDnmoTorqHliJLlsLHmmK/mi4nmi6Lov5nlrrbkvJnlhaXkvJnnhLblkI7mjqjnv7vprZTnjovlr7nprZTloZTnmoTnu5/msrvlr7nlkKfvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZG15ZG15ZG14oCm4oCm6YKj5Liq5piP5bq455qE6a2U546L77yM5o6M5o+h552A6YKj5LmI5bqe5aSn55qE6a2U54mp5Yab6Zif5Y205Y+q55+l6YGT5Zu65a6I6a2U5aGU77yM6ICM5LiN5Li75Yqo5L6155Wl5Lq657G75LiW55WM5omp5byg6aKG5Zyf77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWunuWcqOaYr+eci+S4jei/h+ecvO+8jOaJgOS7peaIkeaJjeWGs+WumuaKiui/meS4quWFt+Wkh+eogOacieWLh+iAheS9k+i0qOeahOWutuS8meWfueWFu+aIkOaWsOS4gOS7u+mtlOeOi++8gVxcbuadpeiuqei/meS4quS4lueVjOeahOWKv+WKm+mHjeaWsOa0l+eJjO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS9oOinieW+l+S4gOS4qua7oeiEkeWtkOaDs+edgOWbnuWutuenjeeUsOeahOW6n+aftOWLh+iAheS8muaIkOS4uuaUueWPmOS4lueVjOeahOmtlOeOi++8n+S9oOaZg+aZg+iEkeiii+ivleivle+8jOaYr+S4jeaYr+iDveWQrOWIsOWkp+a1t+eahOWjsOmfs++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mgbzkurroh7PmnoHnmoTlppbnsr7ml4/vvIHlkbXlkbXlkbXigKbigKbmiJHlubLohIbkuIDkuI3lgZrkuozkuI3kvJHvvIzov57kvaDkuZ/kuIDlnZfmlLbmi77kuoblkKfvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3liKvlsI/nnqflkrHvvIHlkrHlpb3mrbnkuZ/mmK/lppbnsr7ml4/ph4zlrp7lipvmlbDkuIDmlbDkuoznmoTlrZjlnKjvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Y+q5Lya6ICN5Zi055qu5a2Q55qE5oG85Lq66IuN6J2H77yB5oiR5YCS6KaB55yL55yL5LiA5Z2X54Sm54Kt5Lya5LiN5Lya6K+06K+d77yBXFxu4oCU4oCU5oub6Zu35by577yB77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ5b25nY2hhbmdcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3liIfvvIzov5nngrnkvKTnl5vot5/ku5bliJrmiY3nu4/ljobnmoTouqvlv4PlnLDni7Hnm7jmr5TmoLnmnKzlsLHkuI3nrpfku4DkuYjjgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZO877yB57+F6IaA6YO96KKr54On54Sm5LqG6L+Y6KaB5Zi056Gs77yf5L2g6Zq+5LiN5oiQ55yf5Lul5Li65oiR5LiN5Lya5a+55L2g5Yqo55yf5qC877yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuKApuS9oOi/mea3t+ibi++8gee7meaIkeemu+Wluei/nOeCue+8ge+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5Xe+8geKApuS9oOeOsOWcqOWPl+S6huW+iOS4pemHjeeahOiHtOWRveS8pO+8jOS5seWKqOS7gOS5iO+8n1xcbuS5luOAguWIq+aAle+8jOi/memHjOacieWSsemhtuedgO+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWvueS6hu+8jOWSseWGjemXruS9oOS4gOmBje+8jOS9oOaYr+W+iOePjeaDnOiHquW3seaAp+WRveeahOWvueWQp++8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13vvIHigKbnrYnnrYnigKblppbnsr7lsI/lp5DvvIzkvaDkuI3kvJrmmK/igKbigKbvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lloLvvIzpu5HmmpflpKfms5XluIjvvIzkvaDkvZzkuLrprZTloZTph4zmnIDljZrlrablpJror4bnmoTooKLotKfvvIzlupTor6Xlr7nlkrHlppbnsr7ml4/nmoTnibnmrorog73lipvlho3muIXmpZrkuI3ov4flkKfvvJ9cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LuA5LmI77yf77yB6Zq+5LiN5oiQ5L2g5piv5oOz77yB77yB5LiN5Y+v6IO94oCm4oCmXFxu5bCx5Li65LqG5LiA5Liq5ri65bCP55qE5Lq657G777yM5LiN5Y+v55CG5Za777yB77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZO85ZO85ZO877yB5L2g5a6z5oCV55qE6KGo5oOF5Y+v55yf576O5ZGz77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5LiN6L+H5q+U6LW36L+Z5Liq77yM5ZKx5pu05pyf5b6F5L2g5ZCD5Yiw4oCc5aaW57K+6Ieq54Gt5Yay5Ye74oCd5LmL5ZCO55qE5q2754q25ZOm77yBflwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3vvIHvvIHkuI3lupTor6XmmK/ov5nmoLfnmoTvvIHmiJHlroznvo7nmoTorqHliJLnq5/nhLbkvJrooqvkuIDlj6rlsI/lsI/nmoTlppbnsr7noLTlnY/vvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5LiN6KaB77yB4oCm4oCm5Y2D5LiH5LiN6KaB77yB4oCm4oCm5Li65LqG5oiR6L+Z56eN5Lq64oCm4oCm5ZSU77yBXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld56yo6JuL77yM5Yqo6YO95Yqo5LiN5LqG5LqG5bCx5LiN6KaB5by65pKR552A56uZ6LW35p2l5LqG5ZWK44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld55yf5piv55qE77yM6YO95Yiw5pyA5ZCO5LiA5Yi75LqG77yM5L2g6L+Z5a625LyZ5aW95q255Lmf6K6p5ZKx55yB54K55b+D5ZCn44CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld6YKj5LmI77yM5YaN6KeB5LqG4oCm4oCm5oiR55qE5YuH6ICF5aSn5Lq644CCXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm1vdmVcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA3MDAsXHJcbiAgICAgICAgICAgICAgICBcInN0ZXBzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeWPr+iDve+8ge+8ge+8ge+8ge+8gVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhbmdlRmxvb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcclxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMTAwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuWmlueyvuKApuWwj+WnkOKApuKAplwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKblppbnsr7lsI/lp5DvvIFcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5piv5qKm5ZCX77yf4oCm4oCm5LiN5a+577yM5Li65LuA5LmI5oiR5Zyo5rWB5rOq77yfXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXei/memil+a8guS6rueahOWuneefs+aYr+KApuKApu+8n1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJcXHRbaGVyb13miJHlhajpg73mg7PotbfmnaXkuobigKbigKblppbnsr7lsI/lp5DkuLrkuobmiJHigKbigKZcXG7nibrnibLkuoboh6rlt7HnmoTmgKflkb3jgIJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5Zyo6L+Z6aKX5a6d55+z5LiK77yM5oiR6IO95oSf5Y+X5Yiw5L2g55qE5rip5bqm4oCm4oCmXFxu54af5oKJ6ICM5Y+I5Luk5Lq65a6J5b+D77yM6L+Z5bCx5piv5L2g5pyA5ZCO55WZ57uZ5oiR55qE5Lic6KW/5ZCX4oCm4oCmXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeWlvea4qeaaluKApuKAplwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTp5ZWxsb3dKZXdlbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuKAplwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIjYsNVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9XHJcbn0sXHJcblwiY2hhbmdlRmxvb3JcIjoge1xyXG4gICAgXCI2LDBcIjoge1xyXG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcclxuICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXHJcbiAgICB9LFxyXG4gICAgXCI2LDEyXCI6IHtcclxuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUyXCIsXHJcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxyXG4gICAgfVxyXG59LFxyXG5cImFmdGVyQmF0dGxlXCI6IHtcclxuICAgIFwiNiw0XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWkqeecn++8geS9oOS7peS4uui/meagt+WwseiDveaImOiDnOaIkeWQl++8n1wiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA3LFxyXG4gICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNyw1XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOaJk+i0peeahOS4jei/h+aYr+aIkeS8l+WkmuWIhui6q+S4reeahOWFtuS4reS4gOS4quiAjOW3suOAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNSw0XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOeahOi6q+S9k+W3sue7j+S8pOeXlee0r+e0r+S6hu+8jOWPr+aIkei/mOeVmeacieedgOS5neaIkOWkmueahOmtlOWKm+OAglwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNSw1XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXemhveWbuueahOWutuS8me+8geaUvuW8g+aKteaKl+WQp++8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA3LFxyXG4gICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiNyw0XCI6IFtcclxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWTiOWTiOWTiOWTiO+8geaIkeeahOeBtemtgui/nOavlOS9oOaDs+ixoeeahOW8uuWkp++8gVxcbuaIkeWNs+aYr+awuOaBku+8gVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxyXG4gICAgICAgICAgICBcImxvY1wiOiBbXHJcbiAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcclxuICAgICAgICAgICAgXCJsb2NcIjogW1xyXG4gICAgICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSxcclxuXCJhZnRlckdldEl0ZW1cIjoge30sXHJcblwiYWZ0ZXJPcGVuRG9vclwiOiB7fSxcclxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxyXG5cImJnbWFwXCI6IFtcclxuXHJcbl0sXHJcblwiZmdtYXBcIjogW1xyXG5cclxuXSxcclxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IEppbXAgPSByZXF1aXJlKCdqaW1wJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBtYXRlcmlhbHMgPSBbXG4gICdhbmltYXRlcycsXG4gICdlbmVteXMnLFxuICAnaGVybycsICdpdGVtcycsICducGNzJywgJ3RlcnJhaW5zJywgJ2VuZW15NDgnLCAnbnBjNDgnLFxuICAnYWlyd2FsbCcsXG4gICdpY29ucycsXG5dO1xuY29uc3QgaW1hZ2VzRGlyID0gcGF0aC5yZXNvbHZlKCcuLi9tb3RhLWpzL3Byb2plY3QvaW1hZ2VzJyk7XG5jb25zdCBhbmltYXRlc0RpciA9IHBhdGgucmVzb2x2ZSgnLi4vbW90YS1qcy9wcm9qZWN0L2FuaW1hdGVzJyk7XG5jb25zdCBhbmltYXRlc0RhdGEgPSB7fTtcbmNvbnN0IHJlYWRGaWxlID0gKHNyYykgPT4ge1xuICBjb25zdCB0ZW1wID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZzLnJlYWRGaWxlKHNyYywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICBlbHNlIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xuICB0ZW1wLmNhdGNoKChlcnIpID0+IHsgdGhyb3cgZXJyOyB9KTtcbiAgcmV0dXJuIHRlbXA7XG59O1xuY29uc3QgcmVhZEFuaW1hdGUgPSAobmFtZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBsZXQgcmVhbE5hbWUgPSBuYW1lO1xuICBpZiAobmFtZS5pbmRleE9mKCcuJykgPT09IC0xKSByZWFsTmFtZSA9IGAke25hbWV9LmFuaW1hdGVgO1xuICByZWFkRmlsZShwYXRoLnJlc29sdmUoYW5pbWF0ZXNEaXIsIHJlYWxOYW1lKSkudGhlbigocmF3KSA9PiB7XG4gICAgcmVzb2x2ZShyYXcpO1xuICB9LFxuICByZWplY3QpO1xufSk7XG5jb25zdCBhZGRJbWFnZSA9IChyb290RGlyLCBuYW1lKSA9PiB7XG4gIGxldCByZWFsTmFtZSA9IG5hbWU7XG4gIGlmIChuYW1lLmluZGV4T2YoJy4nKSA9PT0gLTEpIHJlYWxOYW1lID0gYCR7bmFtZX0ucG5nYDtcbiAgcmV0dXJuIEppbXAucmVhZChgJHtpbWFnZXNEaXJ9LyR7cmVhbE5hbWV9YCkudGhlbihpbWFnZSA9PiB7XG4gICAgcm9vdERpcltuYW1lXSA9IGltYWdlO1xuICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn07XG5jb25zdCBhZGRBbmltYXRlID0gKHJvb3REaXIsIG5hbWUpID0+IHtcbiAgcmV0dXJuIHJlYWRBbmltYXRlKG5hbWUpLnRoZW4oKHJhdykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgYW5pbWF0ZXNEYXRhW25hbWVdID0gZGF0YTtcbiAgICBjb25zdCBiaXRtYXBzRGF0YSA9IFtdO1xuICAgIGNvbnN0IHJlZ2V4ID0gL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLztcbiAgICBkYXRhLmJpdG1hcHMuZm9yRWFjaCgocmF3QmFzZSwgaSkgPT4ge1xuICAgICAgaWYgKHJhd0Jhc2UgPT09ICcnKSByZXR1cm4gYml0bWFwc0RhdGEucHVzaCgwKTtcbiAgICAgIGNvbnN0IGJhc2UgPSByYXdCYXNlLnJlcGxhY2UocmVnZXgsICcnKTtcbiAgICAgIGNvbnN0IGRhdGFCdWZmZXIgPSBCdWZmZXIuZnJvbShiYXNlLCAnYmFzZTY0Jyk7XG4gICAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9LSR7aX1gO1xuICAgICAgcm9vdERpcltfbmFtZV0gPSBkYXRhQnVmZmVyO1xuICAgICAgcmV0dXJuIGJpdG1hcHNEYXRhLnB1c2goMSk7XG4gICAgfSk7XG4gICAgZGF0YS5iaXRtYXBzID0gYml0bWFwc0RhdGE7XG4gIH0pO1xufTtcbmNvbnN0IHJlYWQgPSAobGlzdCwgcm9vdERpciwgbmFtZSwgYWRkRnVuYyA9IGFkZEltYWdlKSA9PiB7XG4gIGlmIChyb290RGlyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcm9vdERpci5mb3JFYWNoKGRhdGEgPT4gcmVhZChsaXN0LCAuLi5kYXRhKSk7XG4gIH1cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBuYW1lLmZvckVhY2goKF9uYW1lKSA9PiByZWFkKGxpc3QsIHJvb3REaXIsIF9uYW1lLCBhZGRGdW5jKSk7XG4gIH1cbiAgbGlzdC5wdXNoKGFkZEZ1bmMocm9vdERpciwgbmFtZSkpO1xuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCByZWFkQWxsID0gKGFycikgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIHJlYWQobGlzdCwgYXJyKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QpO1xufTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZXMoKSB7XG4gIGNvbnN0IHsgbWFpbiB9ID0gZ2xvYmFsO1xuICBjb25zdCBfcm9vdCA9IG1haW4uaW1hZ2VzO1xuICBtYWluLmltYWdlc0RpciA9IGltYWdlc0RpcjtcbiAgYXdhaXQgcmVhZEFsbChbXG4gICAgW19yb290LCBtYXRlcmlhbHNdLFxuICAgIFtfcm9vdC5hdXRvdGlsZSwgbWFpbi5hdXRvdGlsZXNdLFxuICAgIFtfcm9vdC50aWxlc2V0cywgbWFpbi50aWxlc2V0c10sXG4gICAgW19yb290LmV4dHJhSW1hZ2VzLCBtYWluLnJhd0ltYWdlc10sXG4gICAgW19yb290LmFuaW1hdGVzQnVmZmVyLCBtYWluLmFuaW1hdGVzLCBhZGRBbmltYXRlXSxcbiAgXSk7XG4gIGNvbnN0IHsgb3V0cHV0UGF0aCB9ID0gbWFpbjtcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGFuaW1hdGVzRGF0YSk7XG4gIGNvbnN0IG5hbWUgPSAnYW5pbWF0ZXMuanNvbic7XG4gIGZzLndyaXRlRmlsZShwYXRoLnJlc29sdmUob3V0cHV0UGF0aCwgbmFtZSksIGRhdGEsXG4gICAgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgY29uc29sZS5sb2coYOaWh+S7tiR7bmFtZX3kv53lrZjmiJDlip9gKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbWFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9