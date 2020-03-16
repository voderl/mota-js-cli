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
/* harmony import */ var _editor_project_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _editor_project_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_project_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_project_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _editor_project_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_project_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_project_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _editor_project_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_project_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
// https://github.com/oliver-moran/jimp







const fs = __webpack_require__(6);
const path = __webpack_require__(7);
// 打包工具 https://github.com/odrick/free-tex-packer-core
const texturePacker = __webpack_require__(8);

const main = { floors: { } };
global.main = main;
global.window = {};
main.outputPath = path.resolve('./data');
main.tilesets = _editor_project_data__WEBPACK_IMPORTED_MODULE_1___default.a.main.tilesets;
main.autotiles = Object.keys(_editor_project_icons__WEBPACK_IMPORTED_MODULE_3___default.a.autotile);
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
const floors = __webpack_require__(9);
const extraImagesList = _read__WEBPACK_IMPORTED_MODULE_4__["default"].readdir('../editor/project/extraImages/', false, /\.(png|jpg|gif|ico)$/);
const { floorIds, images: rawImages } = _editor_project_data__WEBPACK_IMPORTED_MODULE_1___default.a.main;
main.animates = _editor_project_data__WEBPACK_IMPORTED_MODULE_1___default.a.main.animates;
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
  } else if (_editor_project_maps__WEBPACK_IMPORTED_MODULE_2___default.a[num]) {
    block = JSON.parse(JSON.stringify(_editor_project_maps__WEBPACK_IMPORTED_MODULE_2___default.a[num]));
    const { id, cls } = block;
    if (cls === 'autotile') {
      block.image = main.images.autotile[id];
      block.animate = Math.ceil(main.images.autotile[id].bitmap.width / 96);
      block.alone = true;
    } else {
      block.image = main.images[cls];
      block.posY = _editor_project_icons__WEBPACK_IMPORTED_MODULE_3___default.a[cls][id];
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
const loadImages = __webpack_require__(15).default;

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
      image.getBuffer(jimp__WEBPACK_IMPORTED_MODULE_0___default.a.MIME_PNG, (err, imageBuffer) => {
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
/***/ (function(module, exports) {

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

/*** EXPORTS FROM exports-loader ***/
module.exports = data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
	"229": {"cls":"enemys","id":"tree1"},
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

/*** EXPORTS FROM exports-loader ***/
module.exports = maps_90f36752_8815_4be8_b32b_d7fad1d0542e;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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
		"greenKnight": 59,
		"greenSlime": 0,
		"tree1": 28
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

/*** EXPORTS FROM exports-loader ***/
module.exports = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fs = __webpack_require__(6);
const path = __webpack_require__(7);

const readdir = (dir, traversal, regex) => {
  const all = [];
  const root = path.resolve(dir);
  const queue = [];
  queue.unshift('.');
  while (queue.length !== 0) {
    const src = queue.shift();
    const list = fs.readdirSync(path.join(root, src), {
      withFileTypes: true,
    });
    list.forEach((dirent) => {
      if (dirent.isDirectory()) {
        if (traversal) queue.push(`${src}/${dirent.name}`);
        return;
      }
      if ((regex instanceof RegExp && regex.test(dirent.name)) || !regex) {
        all.push(`${src}/${dirent.name}`);
      }
    });
  }
  return all;
};
const read = {
  readdir,
};
/* harmony default export */ __webpack_exports__["default"] = (read);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("free-tex-packer-core");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MT0.js": 10,
	"./sample0.js": 11,
	"./sample1.js": 12,
	"./sample2.js": 13,
	"./sample3.js": 14
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
webpackContext.id = 9;

/***/ }),
/* 10 */
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
/* 11 */
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
    [  6,  6,125,  6,  6,  6,  0,229, 45, 46, 47, 48, 37],
    [224,254,212,262,204,  5,  0,  1, 31, 32, 34, 33, 36],
    [201,261,217,264,207,  5,  0,  1, 27, 28, 29, 30, 35],
    [  5,  5,125,  5,  5,  5,  0,  1, 21, 22, 23, 24, 25],
    [  0,  0,237,  0,  0,  0, 45,  1,  1,  1,121,  1,  1],
    [  4,  4,133,  4,  4,  4,  0,  0,  0,  0,  0, 85,124],
    [ 87, 11, 12, 13, 14,  4,  4,  2,  2,  2,122,  2,  2],
    [ 88, 89, 90, 91, 92, 93, 94,  2, 81, 82, 83, 84, 86]
],
    "firstArrive": [
        "\t[样板提示]首次到达某层可以触发 firstArrive 事件，该事件可类似于RMXP中的“自动执行脚本”。\n\n本事件支持一切的事件类型，常常用来触发对话，例如：",
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
    [10188,10189,10193,10194,10195,  0,  0,  0,  0,  0,  0,  0,  0],
    [10196,10197,10185,  0,  0,  0,10185,10186,10187,  0,  0,  0,  0],
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
    "fgmap": [

],
    "width": 13,
    "height": 13,
    "autoEvent": {}
}

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fs = __webpack_require__(6);
const Jimp = __webpack_require__(1);
const path = __webpack_require__(7);

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
/* harmony default export */ __webpack_exports__["default"] = (loadImages);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcHJvamVjdC9tYXBzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wcm9qZWN0L2ljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVDb250cm9sL3JlYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJlZS10ZXgtcGFja2VyLWNvcmVcIiIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcHJvamVjdC9mbG9vcnMgc3luYyBub25yZWN1cnNpdmUgXFwuanMkIiwid2VicGFjazovLy8uL2VkaXRvci9wcm9qZWN0L2Zsb29ycy9NVDAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbG9hZEltYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3dCOztBQUVrQjtBQUNBO0FBQ0U7QUFDbEI7O0FBRTFCLFdBQVcsbUJBQU8sQ0FBQyxDQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNO0FBQzNCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsQ0FBc0I7O0FBRXBELGNBQWMsVUFBVSxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBSTtBQUNwQiw2QkFBNkIsNERBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCO0FBQ0EsZUFBZSxzQkFBNEQ7QUFDM0Usd0JBQXdCLDZDQUFJO0FBQzVCLE9BQU8sOEJBQThCLEdBQUcsMkRBQUk7QUFDNUMsZ0JBQWdCLDJEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsUUFBUTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVUsMkRBQUk7QUFDakIsc0NBQXNDLDJEQUFJO0FBQzFDLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiw0REFBSztBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsRUFBYzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0Esb0JBQW9CLGdCQUFnQixHQUFHLEtBQUs7QUFDNUM7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFJO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUk7QUFDdkI7QUFDQSwwREFBMEQsR0FBRztBQUM3RDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUk7QUFDM0I7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBSTtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdEO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQSxpQ0FBaUMsR0FBRztBQUNwQyxlQUFlO0FBQ2YsV0FBVztBQUNYO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxTQUFTO0FBQ3RFO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQyxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOzs7Ozs7O0FDN1NELGlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxlQUFlLGdCQUFnQiwyQkFBMkIsc0JBQXNCO0FBQ2xJLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osY0FBYztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CLDJDQUEyQyxrQkFBa0Isc0NBQXNDLG9EQUFvRCxtQ0FBbUMseUNBQXlDLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxzQkFBc0IsNENBQTRDLEVBQUUsR0FBRztBQUNqWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRDs7Ozs7O0FDbmFBO0FBQ0E7QUFDQSxPQUFPLG1EQUFtRDtBQUMxRCxPQUFPLGtEQUFrRDtBQUN6RCxPQUFPLGlEQUFpRDtBQUN4RCxPQUFPLDJDQUEyQztBQUNsRCxPQUFPLDJDQUEyQztBQUNsRCxPQUFPLDRCQUE0QjtBQUNuQyxPQUFPLHNDQUFzQztBQUM3QyxPQUFPLHVDQUF1QztBQUM5QyxPQUFPLHNDQUFzQztBQUM3QyxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLG1FQUFtRTtBQUMzRSxRQUFRLHFFQUFxRTtBQUM3RSxRQUFRLG1FQUFtRTtBQUMzRSxRQUFRLG9FQUFvRTtBQUM1RSxRQUFRLGdEQUFnRDtBQUN4RCxRQUFRLDRDQUE0QztBQUNwRCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLGtDQUFrQztBQUMxQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLGlDQUFpQztBQUN6QyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDhCQUE4QjtBQUN0QyxRQUFRLCtCQUErQjtBQUN2QyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHdEQUF3RDtBQUNoRSxRQUFRLHNEQUFzRDtBQUM5RCxRQUFRLHFEQUFxRDtBQUM3RCxRQUFRLHVEQUF1RDtBQUMvRCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLHVEQUF1RDtBQUMvRCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLGlEQUFpRDtBQUN6RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLGtEQUFrRDtBQUMxRCxRQUFRLGdEQUFnRDtBQUN4RCxRQUFRLGtEQUFrRDtBQUMxRCxRQUFRLGtEQUFrRDtBQUMxRCxRQUFRLG1EQUFtRDtBQUMzRCxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLCtCQUErQjtBQUN4QyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHlCQUF5QjtBQUNsQyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLHFDQUFxQyx3REFBd0Q7QUFDdEcsU0FBUyxxQ0FBcUMsd0RBQXdEO0FBQ3RHLFNBQVMscUNBQXFDLHdEQUF3RDtBQUN0RyxTQUFTLHFDQUFxQyx3REFBd0Q7QUFDdEcsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUyx1R0FBdUc7QUFDaEgsU0FBUyxxR0FBcUc7QUFDOUcsU0FBUyx3R0FBd0c7QUFDakgsU0FBUyx1R0FBdUc7QUFDaEgsU0FBUyxxRUFBcUU7QUFDOUUsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUywyREFBMkQ7QUFDcEUsU0FBUyw4Q0FBOEM7QUFDdkQsU0FBUyw4REFBOEQ7QUFDdkUsU0FBUyxnRUFBZ0U7QUFDekUsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyxvQ0FBb0M7QUFDN0MsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUywyQkFBMkI7QUFDcEMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyx5Q0FBeUM7QUFDbEQsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxvQ0FBb0M7QUFDN0MsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxvQ0FBb0M7QUFDN0MsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUywrQkFBK0I7QUFDeEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxtQ0FBbUM7QUFDNUMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyw4QkFBOEI7QUFDdkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxpQ0FBaUM7QUFDMUMsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkQ7Ozs7OztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RDs7Ozs7OztBQ2hSQTtBQUFBLFdBQVcsbUJBQU8sQ0FBQyxDQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFDQUFxQyxJQUFJLEdBQUcsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSxHQUFHLFlBQVk7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsbUVBQUksRUFBQzs7Ozs7OztBQzVCcEIsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLG1CQUFtQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNBLHFGQUFxRix5QkFBeUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCLElBQUksR0FBRyxHQUFHO0FBQ3JDLGtDQUFrQyxXQUFXLE9BQU8sV0FBVyxZQUFZLDJCQUEyQixRQUFRLHNCQUFzQixPQUFPLGVBQWUsT0FBTyxhQUFhLE9BQU8sWUFBWSxXQUFXLGFBQWEsS0FBSyxVQUFVLEtBQUssZUFBZSxXQUFXLGVBQWU7QUFDdFIsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxtQkFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxtREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRCxpQkFBaUI7QUFDakIsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUJBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUM5dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7O0FDNStCQTtBQUFBLFdBQVcsbUJBQU8sQ0FBQyxDQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHVCQUF1QixXQUFXLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSztBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSztBQUNuRCxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQsc0JBQXNCLHVDQUF1QztBQUM3RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSyxHQUFHLEVBQUU7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsYUFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUs7QUFDNUIsS0FBSztBQUNMO0FBQ2UseUVBQVUsRUFBQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vb2xpdmVyLW1vcmFuL2ppbXBcbmltcG9ydCBKaW1wIGZyb20gJ2ppbXAnO1xuXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lZGl0b3IvcHJvamVjdC9kYXRhJztcbmltcG9ydCBtYXBzIGZyb20gJy4uL2VkaXRvci9wcm9qZWN0L21hcHMnO1xuaW1wb3J0IGljb25zIGZyb20gJy4uL2VkaXRvci9wcm9qZWN0L2ljb25zJztcbmltcG9ydCByZWFkIGZyb20gJy4vcmVhZCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4vLyDmiZPljIXlt6XlhbcgaHR0cHM6Ly9naXRodWIuY29tL29kcmljay9mcmVlLXRleC1wYWNrZXItY29yZVxuY29uc3QgdGV4dHVyZVBhY2tlciA9IHJlcXVpcmUoJ2ZyZWUtdGV4LXBhY2tlci1jb3JlJyk7XG5cbmNvbnN0IG1haW4gPSB7IGZsb29yczogeyB9IH07XG5nbG9iYWwubWFpbiA9IG1haW47XG5nbG9iYWwud2luZG93ID0ge307XG5tYWluLm91dHB1dFBhdGggPSBwYXRoLnJlc29sdmUoJy4vZGF0YScpO1xubWFpbi50aWxlc2V0cyA9IGRhdGEubWFpbi50aWxlc2V0cztcbm1haW4uYXV0b3RpbGVzID0gT2JqZWN0LmtleXMoaWNvbnMuYXV0b3RpbGUpO1xubWFpbi5pY29ucyA9IHtcbiAgZmxvb3I6IDAsXG4gIGx2OiAxLFxuICBocG1heDogMixcbiAgaHA6IDMsXG4gIGF0azogNCxcbiAgZGVmOiA1LFxuICBtZGVmOiA2LFxuICBtb25leTogNyxcbiAgZXhwZXJpZW5jZTogOCxcbiAgdXA6IDksXG4gIGJvb2s6IDEwLFxuICBmbHk6IDExLFxuICB0b29sYm94OiAxMixcbiAga2V5Ym9hcmQ6IDEzLFxuICBzaG9wOiAxNCxcbiAgc2F2ZTogMTUsXG4gIGxvYWQ6IDE2LFxuICBzZXR0aW5nczogMTcsXG4gIHBsYXk6IDE4LFxuICBwYXVzZTogMTksXG4gIHN0b3A6IDIwLFxuICBzcGVlZERvd246IDIxLFxuICBzcGVlZFVwOiAyMixcbiAgcmV3aW5kOiAyMyxcbiAgZXF1aXBib3g6IDI0LFxuICBtYW5hOiAyNSxcbiAgc2tpbGw6IDI2LFxuICBwYWludDogMjcsXG4gIGVyYXNlOiAyOCxcbiAgZW1wdHk6IDI5LFxuICBleGl0OiAzMCxcbiAgYnRuMTogMzEsXG4gIGJ0bjI6IDMyLFxuICBidG4zOiAzMyxcbiAgYnRuNDogMzQsXG4gIGJ0bjU6IDM1LFxuICBidG42OiAzNixcbiAgYnRuNzogMzcsXG4gIGJ0bjg6IDM4LFxufTtcbm1haW4uaW1hZ2VzID0ge1xuICB0aWxlc2V0czoge30sXG4gIGF1dG90aWxlOiB7fSxcbiAgZXh0cmFJbWFnZXM6IHt9LFxuICBhbmltYXRlc0J1ZmZlcjoge30sXG59O1xuY29uc3QgZmxvb3JzID0gcmVxdWlyZS5jb250ZXh0KCcuLi9lZGl0b3IvcHJvamVjdC9mbG9vcnMvJywgZmFsc2UsIC9cXC5qcyQvKTtcbmNvbnN0IGV4dHJhSW1hZ2VzTGlzdCA9IHJlYWQucmVhZGRpcignLi4vZWRpdG9yL3Byb2plY3QvZXh0cmFJbWFnZXMvJywgZmFsc2UsIC9cXC4ocG5nfGpwZ3xnaWZ8aWNvKSQvKTtcbmNvbnN0IHsgZmxvb3JJZHMsIGltYWdlczogcmF3SW1hZ2VzIH0gPSBkYXRhLm1haW47XG5tYWluLmFuaW1hdGVzID0gZGF0YS5tYWluLmFuaW1hdGVzO1xubWFpbi5leHRyYUltYWdlc0xpc3QgPSBleHRyYUltYWdlc0xpc3Q7XG5jb25zdCBibG9ja0lkcyA9IHt9O1xuLy8g5Yqg6L295Ye65Zyw5Zu+5pWw57uE5Lit5omA5L2/55So55qEYmxvY2sg55qEbnVtXG4oZnVuY3Rpb24gbG9hZEZsb29ycygpIHtcbiAgY29uc3QgaW5pdEJsb2NrID0gbnVtID0+IHtcbiAgICBpZiAoYmxvY2tJZHNbbnVtXSkgcmV0dXJuO1xuICAgIGJsb2NrSWRzW251bV0gPSB0cnVlO1xuICB9O1xuICBjb25zdCB0cmF2ZXJzYWxBcnJheSA9IChhcnIsIGZ1bmMpID0+IHtcbiAgICBpZiAoYXJyIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBhcnIuZm9yRWFjaChuID0+IHRyYXZlcnNhbEFycmF5KG4sIGZ1bmMpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IGZsb29ycyhgLi8ke2Zsb29ySWR9LmpzYCkpO1xuXG4gIGZsb29ySWRzLmZvckVhY2goKGZsb29ySWQpID0+IHtcbiAgICBjb25zdCBmbG9vciA9IG1haW4uZmxvb3JzW2Zsb29ySWRdO1xuICAgIHRyYXZlcnNhbEFycmF5KFtmbG9vci5tYXAsIGZsb29yLmZnbWFwLCBmbG9vci5iZ21hcF0sIGluaXRCbG9jayk7XG4gIH0pO1xufSgpKTtcblxuY29uc3QgZ2V0VGlsZXNldE9mZnNldCA9IChudW0pID0+IHtcbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gMTAwMDA7XG4gIGlmIChudW0gPCBzdGFydE9mZnNldCkgcmV0dXJuIG51bGw7XG4gIGZvciAoY29uc3QgaSBpbiBtYWluLnRpbGVzZXRzKSB7XG4gICAgY29uc3QgdGlsZXNldElkID0gbWFpbi50aWxlc2V0c1tpXTtcbiAgICBjb25zdCBpbWdOYW1lID0gdGlsZXNldElkO1xuICAgIGNvbnN0IGltZyA9IG1haW4uaW1hZ2VzLnRpbGVzZXRzW2ltZ05hbWVdO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5mbG9vcihpbWcuYml0bWFwLndpZHRoIC8gMzIpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1nLmJpdG1hcC5oZWlnaHQgLyAzMik7XG4gICAgaWYgKG51bSA+PSBzdGFydE9mZnNldCAmJiBudW0gPCBzdGFydE9mZnNldCArIHdpZHRoICogaGVpZ2h0KSB7XG4gICAgICBjb25zdCB4ID0gKG51bSAtIHN0YXJ0T2Zmc2V0KSAlIHdpZHRoO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KChudW0gLSBzdGFydE9mZnNldCkgLyB3aWR0aCwgMTApO1xuICAgICAgcmV0dXJuIHsgaW1hZ2U6IGltZywgeCwgeSB9O1xuICAgIH1cbiAgICBzdGFydE9mZnNldCArPSBzdGFydE9mZnNldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRBbmltYXRlRnJhbWVzID0gZnVuY3Rpb24gKGNscywgdXNlT3JpZ2luVmFsdWUpIHtcbiAgaWYgKGNscyA9PT0gJ2VuZW15cycgfHwgY2xzID09PSAnbnBjcycpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBpZiAoY2xzID09PSAnYW5pbWF0ZXMnIHx8IGNscyA9PT0gJ2VuZW15NDgnKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgaWYgKGNscyA9PT0gJ25wYzQ4Jykge1xuICAgIHJldHVybiB1c2VPcmlnaW5WYWx1ZSA/IDQgOiAxO1xuICB9XG4gIHJldHVybiAxO1xufTtcbmNvbnN0IGdldEJsb2NrID0gKG51bSkgPT4ge1xuICBsZXQgYmxvY2s7XG4gIGlmIChudW0gPT09IDApIHJldHVybiBudWxsO1xuICAvLyBhbG9uZSDmjIfkuIDkuKrlm77niYflr7nlupTkuIDkuKpibG9ja1xuICBpZiAobnVtID09PSAxNykgeyAvLyBhaXJ3YWxsXG4gICAgYmxvY2sgPSB7XG4gICAgICBjbHM6ICd0ZXJyYWlucycsXG4gICAgICBpZDogJ2FpcndhbGwnLFxuICAgICAgaW1hZ2U6IG1haW4uaW1hZ2VzLmFpcndhbGwsXG4gICAgICBhbG9uZTogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1hcHNbbnVtXSkge1xuICAgIGJsb2NrID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYXBzW251bV0pKTtcbiAgICBjb25zdCB7IGlkLCBjbHMgfSA9IGJsb2NrO1xuICAgIGlmIChjbHMgPT09ICdhdXRvdGlsZScpIHtcbiAgICAgIGJsb2NrLmltYWdlID0gbWFpbi5pbWFnZXMuYXV0b3RpbGVbaWRdO1xuICAgICAgYmxvY2suYW5pbWF0ZSA9IE1hdGguY2VpbChtYWluLmltYWdlcy5hdXRvdGlsZVtpZF0uYml0bWFwLndpZHRoIC8gOTYpO1xuICAgICAgYmxvY2suYWxvbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibG9jay5pbWFnZSA9IG1haW4uaW1hZ2VzW2Nsc107XG4gICAgICBibG9jay5wb3NZID0gaWNvbnNbY2xzXVtpZF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRpbGVzZXRPZmZzZXQgPSBnZXRUaWxlc2V0T2Zmc2V0KG51bSk7XG4gICAgaWYgKHRpbGVzZXRPZmZzZXQpIHtcbiAgICAgIGJsb2NrID0ge1xuICAgICAgICBjbHM6ICd0aWxlc2V0JyxcbiAgICAgICAgaWQ6IGBYJHtudW19YCxcbiAgICAgICAgcG9zWDogdGlsZXNldE9mZnNldC54LFxuICAgICAgICBwb3NZOiB0aWxlc2V0T2Zmc2V0LnksXG4gICAgICAgIGltYWdlOiB0aWxlc2V0T2Zmc2V0LmltYWdlLFxuICAgICAgfTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFibG9jay5hbmltYXRlKSB7XG4gICAgYmxvY2suYW5pbWF0ZSA9IGdldEFuaW1hdGVGcmFtZXMoYmxvY2suY2xzLCB0cnVlKTtcbiAgfVxuICBibG9jay5oZWlnaHQgPSAzMjtcbiAgaWYgKGJsb2NrLmNscyA9PT0gJ2VuZW15NDgnIHx8IGJsb2NrLmNscyA9PT0gJ25wYzQ4JykgYmxvY2suaGVpZ2h0ID0gNDg7XG4gIGJsb2NrLnBvc1ggPSBibG9jay5wb3NYIHx8IDA7XG4gIGJsb2NrLnBvc1kgPSBibG9jay5wb3NZIHx8IDA7XG4gIHJldHVybiBibG9jaztcbn07XG5jb25zdCBsb2FkSW1hZ2VzID0gcmVxdWlyZSgnLi9sb2FkSW1hZ2VzJykuZGVmYXVsdDtcblxubG9hZEltYWdlcygpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygn6LWE5rqQ5Yqg6L295a6M5oiQJyk7XG4gIGNvbnN0IGJsb2Nrc0J1ZmZlciA9IHt9O1xuICAvLyDliqDovb1ibG9ja3NcbiAgY29uc3QgaW5mbyA9IHsgfTtcbiAgY29uc3QgX21hcHMgPSB7IH07XG4gIGNvbnN0IHdyaXRlRmlsZSA9IChuYW1lLCBkYXRhKSA9PiB7XG4gICAgZnMud3JpdGVGaWxlKGAke21haW4ub3V0cHV0UGF0aH0vJHtuYW1lfWAsIGRhdGEsXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coYOWGmeWFpSR7bmFtZX3miJDlip9gKTtcbiAgICAgIH0pO1xuICB9O1xuICBPYmplY3Qua2V5cyhibG9ja0lkcykuZm9yRWFjaCgobnVtSWQpID0+IHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUludChudW1JZCwgMTApO1xuICAgIGNvbnN0IGJsb2NrID0gZ2V0QmxvY2sobnVtKTtcbiAgICBpZiAoIWJsb2NrKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgaW1hZ2UsIHBvc1gsIHBvc1ksIGFuaW1hdGUsIGFsb25lLCBpZCwgaGVpZ2h0LFxuICAgIH0gPSBibG9jaztcbiAgICBpZiAoIWltYWdlKSByZXR1cm47XG4gICAgaW5mb1tpZF0gPSB7IG51bSwgYW5pbWF0ZSB9O1xuICAgIF9tYXBzW251bUlkXSA9IGJsb2NrO1xuICAgIGRlbGV0ZSBibG9jay5pbWFnZTtcbiAgICBkZWxldGUgYmxvY2suYWxvbmU7XG4gICAgZGVsZXRlIGJsb2NrLnBvc1g7XG4gICAgZGVsZXRlIGJsb2NrLmhlaWdodDtcbiAgICBkZWxldGUgYmxvY2sucG9zWTtcbiAgICBkZWxldGUgYmxvY2suYW5pbWF0ZTtcbiAgICBpZiAoYWxvbmUpIHtcbiAgICAgIGltYWdlLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBpbWFnZUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGJsb2Nrc0J1ZmZlcltpZF0gPSBpbWFnZUJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBsb2FkIHByb21pc2Ug5Yqg5YWl5pWw57uEXG4gICAgY29uc3QgdGVtcCA9IG5ldyBKaW1wKDMyICogYW5pbWF0ZSwgaGVpZ2h0LCAoZXJyLCBpbWcpID0+IHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgIGltZy5ibGl0KGltYWdlLCAwLCAwLCBwb3NYICogMzIsIHBvc1kgKiBoZWlnaHQsIDMyICogYW5pbWF0ZSwgaGVpZ2h0KVxuICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICBpZiAoYmxvY2tzQnVmZmVyW2lkXSkgY29uc29sZS5sb2coYOmineWkluWbvueJh+mHjOaciemHjeWQjWlkXCIke2lkfVwiYCk7XG4gICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvLyB3cml0ZSBpbmZvXG4gIHdyaXRlRmlsZSgnX2luZm8uanNvbicsIEpTT04uc3RyaW5naWZ5KGluZm8pKTtcbiAgd3JpdGVGaWxlKCdfbWFwcy5qc29uJywgSlNPTi5zdHJpbmdpZnkoX21hcHMpKTtcbiAgLy8g5Yqg6L29aWNvbnNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpY29uc0RhdGEgPSBtYWluLmljb25zO1xuICAgIGNvbnN0IGljb25zSW1nID0gbWFpbi5pbWFnZXMuaWNvbnM7XG4gICAgT2JqZWN0LmtleXMoaWNvbnNEYXRhKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXcgSmltcCgzMiwgMzIsIChlcnIsIGltZykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGltZy5ibGl0KGljb25zSW1nLCAwLCAwLCAwLCBpY29uc0RhdGFbaWRdICogMzIsIDMyLCAzMilcbiAgICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyDliqDovb3pop3lpJZpbWFnZXNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGV4dHJhSW1hZ2VzIH0gPSBtYWluLmltYWdlcztcbiAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhleHRyYUltYWdlcykpO1xuICAgIE9iamVjdC5rZXlzKGV4dHJhSW1hZ2VzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHsgW2lkXTogaW1hZ2UgfSA9IGV4dHJhSW1hZ2VzO1xuICAgICAgLy8g6L6D5aSn55qE5Zu+54mHIOWPr+iDveiiq2ppbXAg5aSE55CG5ZCO5L2T56ev5aKe5aSnIOWmgmJnLmpwZyDlm6DmraTovoPlpKflm77niYfljZXni6zlpITnkIZcbiAgICAgIC8vIOWboOatpOWcqOatpOmHjeaWsOivu+WPluaWh+S7tumHjeaWsOWGmeWFpVxuICAgICAgaWYgKGltYWdlLmJpdG1hcC53aWR0aCAqIGltYWdlLmJpdG1hcC5oZWlnaHQgPj0gMTYwMDAwKSB7XG4gICAgICAgIGZzLnJlYWRGaWxlKGAke3BhdGgucmVzb2x2ZShtYWluLmV4dHJhSW1hZ2VzRGlyLCBpZCl9YCxcbiAgICAgICAgICAoZXJyLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShgJHtwYXRoLnJlc29sdmUoJy4vZGF0YScsIGlkKX1gLCBpbWcsXG4gICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOWGmeWFpSR7aWR95oiQ5YqfYCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbWFnZS5nZXRCdWZmZXIoSmltcC5NSU1FX1BORywgKGVyciwgaW1hZ2VCdWZmZXIpID0+IHtcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBsZXQgYmFzZW5hbWUgPSBpZDtcbiAgICAgICAgaWYgKGlkLmxhc3RJbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgYmFzZW5hbWUgPSBpZC5zdWJzdHJpbmcoMCwgaWQubGFzdEluZGV4T2YoJy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2Nrc0J1ZmZlcltiYXNlbmFtZV0pIGNvbnNvbGUubG9nKGDpop3lpJblm77niYfph4zmnInph43lkI1pZCR7YmFzZW5hbWV9YCk7XG4gICAgICAgIGJsb2Nrc0J1ZmZlcltiYXNlbmFtZV0gPSBpbWFnZUJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyDliqDovb1hbmltYXRlIOaYr+WQpuWtmOWcqOWFtuS9meaWh+S7tlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0ZXNCdWZmZXIgfSA9IG1haW4uaW1hZ2VzO1xuICAgIE9iamVjdC5rZXlzKGFuaW1hdGVzQnVmZmVyKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGJsb2Nrc0J1ZmZlcltpZF0gPSBhbmltYXRlc0J1ZmZlcltpZF07XG4gICAgfSk7XG4gIH0oKSk7XG4gIC8vIG5ldyBKaW1wIOaYr+W8guatpeeahO+8jOS9huaYr+ayoeaciei/lOWbnlByb21pc2Ug5Zug5q2k55Soc2V0VGltZW91dFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdGV4dHVyZU5hbWU6ICdwYWNrZXInLFxuICAgICAgYWxsb3dSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIGV4cG9ydGVyOiAnUGl4aScsXG4gICAgICBkZXRlY3RJZGVudGljYWw6IGZhbHNlLFxuICAgICAgd2lkdGg6IDUxMixcbiAgICAgIGhlaWdodDogNTEyLFxuICAgIH07XG4gICAgY29uc3QgeyBvdXRwdXRQYXRoIH0gPSBtYWluO1xuICAgIE9iamVjdC5rZXlzKGJsb2Nrc0J1ZmZlcikuZm9yRWFjaCgoaWQpID0+IGltYWdlcy5wdXNoKHtcbiAgICAgIHBhdGg6IGlkLFxuICAgICAgY29udGVudHM6IGJsb2Nrc0J1ZmZlcltpZF0sXG4gICAgfSkpO1xuICAgIHRleHR1cmVQYWNrZXIoaW1hZ2VzLCBvcHRpb25zLCAoZmlsZXMsIGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUGFja2FnaW5nIGZhaWxlZCcsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aC5yZXNvbHZlKG91dHB1dFBhdGgsIGl0ZW0ubmFtZSksIGl0ZW0uYnVmZmVyLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpdGVtLm5hbWV95YaZ5YWl5oiQ5YqfYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamltcFwiKTsiLCJ2YXIgZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQgPSBcbntcblx0XCJtYWluXCI6IHtcblx0XHRcImZsb29ySWRzXCI6IFtcblx0XHRcdFwic2FtcGxlMFwiLFxuXHRcdFx0XCJzYW1wbGUxXCIsXG5cdFx0XHRcInNhbXBsZTJcIixcblx0XHRcdFwic2FtcGxlM1wiLFxuXHRcdFx0XCJNVDBcIlxuXHRcdF0sXG5cdFx0XCJpbWFnZXNcIjogW1xuXHRcdFx0XCJiZy5qcGdcIixcblx0XHRcdFwid2luc2tpbi5wbmdcIlxuXHRcdF0sXG5cdFx0XCJ0aWxlc2V0c1wiOiBbXG5cdFx0XHRcIm1hZ2ljdG93ZXIucG5nXCJcblx0XHRdLFxuXHRcdFwiYW5pbWF0ZXNcIjogW1xuXHRcdFx0XCJoYW5kXCIsXG5cdFx0XHRcInN3b3JkXCIsXG5cdFx0XHRcInpvbmVcIlxuXHRcdF0sXG5cdFx0XCJiZ21zXCI6IFtcblx0XHRcdFwiYmdtLm1wM1wiXG5cdFx0XSxcblx0XHRcInNvdW5kc1wiOiBbXG5cdFx0XHRcImZsb29yLm1wM1wiLFxuXHRcdFx0XCJhdHRhY2subXAzXCIsXG5cdFx0XHRcImRvb3IubXAzXCIsXG5cdFx0XHRcIml0ZW0ubXAzXCIsXG5cdFx0XHRcImVxdWlwLm1wM1wiLFxuXHRcdFx0XCJ6b25lLm1wM1wiLFxuXHRcdFx0XCJqdW1wLm1wM1wiLFxuXHRcdFx0XCJwaWNrYXhlLm1wM1wiLFxuXHRcdFx0XCJib21iLm1wM1wiLFxuXHRcdFx0XCJjZW50ZXJGbHkubXAzXCJcblx0XHRdLFxuXHRcdFwibmFtZU1hcFwiOiB7XG5cdFx0XHRcIuiDjOaZr+Wbvi5qcGdcIjogXCJiZy5qcGdcIixcblx0XHRcdFwi6IOM5pmv6Z+z5LmQLm1wM1wiOiBcImJnbS5tcDNcIlxuXHRcdH0sXG5cdFx0XCJzdGFydEJhY2tncm91bmRcIjogXCJiZy5qcGdcIixcblx0XHRcInN0YXJ0TG9nb1N0eWxlXCI6IFwiY29sb3I6IGJsYWNrXCIsXG5cdFx0XCJsZXZlbENob29zZVwiOiBbXG5cdFx0XHRbXG5cdFx0XHRcdFwi566A5Y2VXCIsXG5cdFx0XHRcdFwiRWFzeVwiXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHRcIuaZrumAmlwiLFxuXHRcdFx0XHRcIk5vcm1hbFwiXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHRcIuWbsOmavlwiLFxuXHRcdFx0XHRcIkhhcmRcIlxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0XCLlmanmoqZcIixcblx0XHRcdFx0XCJIZWxsXCJcblx0XHRcdF1cblx0XHRdLFxuXHRcdFwiZXF1aXBOYW1lXCI6IFtcblx0XHRcdFwi5q2m5ZmoXCIsXG5cdFx0XHRcIuebvueJjFwiXG5cdFx0XSxcblx0XHRcInN0YXJ0QmdtXCI6IG51bGwsXG5cdFx0XCJzdGF0dXNMZWZ0QmFja2dyb3VuZFwiOiBudWxsLFxuXHRcdFwic3RhdHVzVG9wQmFja2dyb3VuZFwiOiBcInVybChwcm9qZWN0L2ltYWdlcy9ncm91bmQucG5nKSByZXBlYXRcIixcblx0XHRcInRvb2xzQmFja2dyb3VuZFwiOiBcInVybChwcm9qZWN0L2ltYWdlcy9ncm91bmQucG5nKSByZXBlYXRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuXHRcdFwic3RhdHVzQmFyQ29sb3JcIjogXCJ3aGl0ZVwiLFxuXHRcdFwiaGFyZExhYmVsQ29sb3JcIjogXCJyZWRcIixcblx0XHRcImZsb29yQ2hhbmdpbmdCYWNrZ3JvdW5kXCI6IFwiYmxhY2tcIixcblx0XHRcImZsb29yQ2hhbmdpbmdUZXh0Q29sb3JcIjogXCJ3aGl0ZVwiLFxuXHRcdFwiZm9udFwiOiBcIlZlcmRhbmFcIixcblx0XHRcInN0YXJ0QnV0dG9uc1N0eWxlXCI6IFwiYmFja2dyb3VuZC1jb2xvcjogIzMyMzY5Rjsgb3BhY2l0eTogMC44NTsgY29sb3I6ICNGRkZGRkY7IGJvcmRlcjogI0ZGRkZGRiAycHggc29saWQ7IGNhcmV0LWNvbG9yOiAjRkZENzAwO1wiXG5cdH0sXG5cdFwiZmlyc3REYXRhXCI6IHtcblx0XHRcInRpdGxlXCI6IFwi6a2U5aGU5qC35p2/XCIsXG5cdFx0XCJuYW1lXCI6IFwidGVtcGxhdGVcIixcblx0XHRcInZlcnNpb25cIjogXCJWZXIgMi42LjZcIixcblx0XHRcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG5cdFx0XCJoZXJvXCI6IHtcblx0XHRcdFwibmFtZVwiOiBcIumYs+WFiVwiLFxuXHRcdFx0XCJsdlwiOiAxLFxuXHRcdFx0XCJocG1heFwiOiA5OTk5LFxuXHRcdFx0XCJocFwiOiAxMDAwLFxuXHRcdFx0XCJtYW5hbWF4XCI6IC0xLFxuXHRcdFx0XCJtYW5hXCI6IDAsXG5cdFx0XHRcImF0a1wiOiAxMDAsXG5cdFx0XHRcImRlZlwiOiAxMDAsXG5cdFx0XHRcIm1kZWZcIjogMCxcblx0XHRcdFwibW9uZXlcIjogMCxcblx0XHRcdFwiZXhwZXJpZW5jZVwiOiAwLFxuXHRcdFx0XCJlcXVpcG1lbnRcIjogW10sXG5cdFx0XHRcIml0ZW1zXCI6IHtcblx0XHRcdFx0XCJrZXlzXCI6IHtcblx0XHRcdFx0XHRcInllbGxvd0tleVwiOiAwLFxuXHRcdFx0XHRcdFwiYmx1ZUtleVwiOiAwLFxuXHRcdFx0XHRcdFwicmVkS2V5XCI6IDBcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjb25zdGFudHNcIjoge30sXG5cdFx0XHRcdFwidG9vbHNcIjoge30sXG5cdFx0XHRcdFwiZXF1aXBzXCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NcIjoge1xuXHRcdFx0XHRcImRpcmVjdGlvblwiOiBcInVwXCIsXG5cdFx0XHRcdFwieFwiOiA2LFxuXHRcdFx0XHRcInlcIjogMTBcblx0XHRcdH0sXG5cdFx0XHRcImZsYWdzXCI6IHt9LFxuXHRcdFx0XCJzdGVwc1wiOiAwXG5cdFx0fSxcblx0XHRcInN0YXJ0Q2FudmFzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLlnKjov5nph4zlj6/ku6XnlKjkuovku7bmnaXoh6rlrprkuYnnu5jliLbmoIfpopjnlYzpnaLnmoTog4zmma/lm77nrYlcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLkuZ/lj6/ku6Xnm7TmjqXliIfmjaLliLDlhbbku5bmpbzlsYLvvIjmr5TlpoLmn5DkuKrlvIDlp4vliafmg4XmpbzlsYLvvInov5vooYzmk43kvZzjgIJcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic2hvd0ltYWdlXCIsXG5cdFx0XHRcdFwiY29kZVwiOiAxLFxuXHRcdFx0XHRcImltYWdlXCI6IFwiYmcuanBnXCIsXG5cdFx0XHRcdFwibG9jXCI6IFtcblx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdDBcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJkd1wiOiAxMDAsXG5cdFx0XHRcdFwiZGhcIjogMTAwLFxuXHRcdFx0XHRcIm9wYWNpdHlcIjogMSxcblx0XHRcdFx0XCJ0aW1lXCI6IDBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcIndoaWxlXCIsXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiMVwiLFxuXHRcdFx0XHRcImRhdGFcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIue7meeUqOaIt+aPkOS+m+mAieaLqemhue+8jOi/memHjOeugOWNleeahOS9v+eUqOS6hmNob2ljZXPkuovku7ZcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul6LS05oyJ6ZKu5Zu+54S25ZCO5L2/55So562J5b6F5pON5L2c5p2l5a6M5oiQXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNob2ljZXNcIixcblx0XHRcdFx0XHRcdFwiY2hvaWNlc1wiOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLlvIDlp4vmuLjmiI9cIixcblx0XHRcdFx0XHRcdFx0XHRcImFjdGlvblwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5qOA5p+lYmdt54q25oCB77yM5LiL5ZCMXCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY29udHJvbC5jaGVja0JnbSgpXFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJpZlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImNvcmUuZmxhZ3Muc3RhcnREaXJlY3RseVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRydWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuebtOaOpeW8gOWni+a4uOaIj++8jOiuvue9ruWIneWni+WMluaVsOaNrlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxuY29yZS5ldmVudHMuc2V0SW5pdERhdGEoJycpXFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZhbHNlXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLliqjmgIHnlJ/miJDpmr7luqbpgInmi6npoblcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbnZhciBjaG9pY2VzID0gW107XFxubWFpbi5sZXZlbENob29zZS5mb3JFYWNoKGZ1bmN0aW9uIChvbmUpIHtcXG5cXHRjaG9pY2VzLnB1c2goe1xcXCJ0ZXh0XFxcIjogb25lWzBdLCBcXFwiYWN0aW9uXFxcIjogW1xcblxcdFxcdHtcXFwidHlwZVxcXCI6IFxcXCJmdW5jdGlvblxcXCIsIFxcXCJmdW5jdGlvblxcXCI6IFxcXCJmdW5jdGlvbigpIHsgY29yZS5zdGF0dXMuaGFyZCA9ICdcXFwiK29uZVsxXStcXFwiJzsgY29yZS5ldmVudHMuc2V0SW5pdERhdGEoJ1xcXCIrb25lWzFdK1xcXCInKTsgfVxcXCJ9XFxuXFx0XX0pO1xcbn0pXFxuY29yZS5pbnNlcnRBY3Rpb24oe1xcXCJ0eXBlXFxcIjogXFxcImNob2ljZXNcXFwiLCBcXFwiY2hvaWNlc1xcXCI6IGNob2ljZXN9KTtcXG59XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImhpZGVJbWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImNvZGVcIjogMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0aW1lXCI6IDBcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5oiQ5Yqf6YCJ5oup6Zq+5bqmXCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImJyZWFrXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLor7vlj5blrZjmoaNcIixcblx0XHRcdFx0XHRcdFx0XHRcImFjdGlvblwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY29udHJvbC5jaGVja0JnbSgpXFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIueugOWNleeahOS9v+eUqOKAnOWRvOWHuuivu+aho+eVjOmdouKAneadpeWkhOeQhlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjYWxsTG9hZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Zue5pS+5b2V5YOPXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLov5nmrrXku6PnoIHkvJrlvLnmoYbpgInmi6nlvZXlg4/mlofku7ZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaWZcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb25kaXRpb25cIjogXCIhY29yZS5pc1JlcGxheWluZygpXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHJ1ZVwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuY2hvb3NlUmVwbGF5RmlsZSgpXFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZhbHNlXCI6IFtdXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFwidGV4dFwiOiBcIuaOpeS4i+adpeS8muaJp+ihjHN0YXJ0VGV4dOS4reeahOS6i+S7tlwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcInN0YXJ0VGV4dFwiOiBbXG5cdFx0XHRcIkhp77yM5qyi6L+O5p2l5YiwIEhUTUw1IOmtlOWhlOagt+adv++8gVxcblxcbuacrOagt+adv+eUseiJvuS5i+iRteWItuS9nO+8jOWPr+S7peiuqeS9oOWcqOS4jeS8muWGmeS7u+S9leS7o+eggVxcbueahOaDheWGteS4i+S5n+iDveWBmuWHuuWxnuS6juiHquW3seeahEg16a2U5aGU77yBXCIsXG5cdFx0XHRcIui/memHjOa4uOaIj+W8gOWni+aXtueahOWJp+aDheOAglxcbuWumuS5ieWcqGRhdGEuanPnmoRzdGFydFRleHTlpITjgIJcXG5cXG7kvaDlj6/ku6XlnKjov5nph4zlhpnkuIroh6rlt7HnmoTlhoXlrrnjgIJcIixcblx0XHRcdFwi6LW25b+r5p2l6K+V5LiA6K+V5ZCn77yBXCJcblx0XHRdLFxuXHRcdFwic2hvcHNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IFwibW9uZXlTaG9wMVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCLotKrlqarkuYvnpZ5cIixcblx0XHRcdFx0XCJpY29uXCI6IFwiYmx1ZVNob3BcIixcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwiMUbph5HluIHllYblupdcIixcblx0XHRcdFx0XCJjb21tb25UaW1lc1wiOiBmYWxzZSxcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcInVzZVwiOiBcIm1vbmV5XCIsXG5cdFx0XHRcdFwibmVlZFwiOiBcIjIwKzEwKnRpbWVzKih0aW1lcysxKVwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLli4fmlaLnmoTmrablo6vllYrvvIznu5nmiJEke25lZWR96YeR5biB5bCx5Y+v5Lul77yaXCIsXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi55Sf5ZG9KzgwMFwiLFxuXHRcdFx0XHRcdFx0XCJlZmZlY3RcIjogXCJzdGF0dXM6aHArPTgwMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IFwiZXhwU2hvcDFcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwi57uP6aqM5LmL56WeXCIsXG5cdFx0XHRcdFwiaWNvblwiOiBcInBpbmtTaG9wXCIsXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIjFG57uP6aqM5ZWG5bqXXCIsXG5cdFx0XHRcdFwiY29tbW9uVGltZXNcIjogZmFsc2UsXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJ1c2VcIjogXCJleHBlcmllbmNlXCIsXG5cdFx0XHRcdFwibmVlZFwiOiBcIi0xXCIsXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWLh+aVoueahOatpuWjq+WViu+8jOe7meaIkeiLpeW5sue7j+mqjOWwseWPr+S7pe+8mlwiLFxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuetiee6pysxXCIsXG5cdFx0XHRcdFx0XHRcIm5lZWRcIjogXCIxMDBcIixcblx0XHRcdFx0XHRcdFwiZWZmZWN0XCI6IFwic3RhdHVzOmhwKz0xMDAwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogXCJpdGVtU2hvcFwiLFxuXHRcdFx0XHRcIml0ZW1cIjogdHJ1ZSxcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwi6YGT5YW35ZWG5bqXXCIsXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImlkXCI6IFwieWVsbG93S2V5XCIsXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiOiAxMCxcblx0XHRcdFx0XHRcdFwibW9uZXlcIjogMTBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogXCJrZXlTaG9wMVwiLFxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCLlm57mlLbpkqXljJnllYblupdcIixcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcImNvbW1vbkV2ZW50XCI6IFwi5Zue5pS26ZKl5YyZ5ZWG5bqXXCJcblx0XHRcdH1cblx0XHRdLFxuXHRcdFwibGV2ZWxVcFwiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwibmVlZFwiOiBcIjBcIixcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFx0XHRcImFjdGlvblwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5q2k5aSE5piv5Yid5aeL562J57qn77yM5Y+q6ZyA5aGr5YaZ56ew5Y+3XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmVlZFwiOiBcIjIwXCIsXG5cdFx0XHRcdFwidGl0bGVcIjogXCLnrKzkuoznuqdcIixcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RhdHVzOmF0aysxMFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhdHVzOmRlZlwiLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0YXR1czpkZWYrMTBcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuZWVkXCI6IFwiNDBcIixcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFx0XHRcImFjdGlvblwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwidGlwXCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLmga3llpzljYfnuqdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0XCJ2YWx1ZXNcIjoge1xuXHRcdFwibGF2YURhbWFnZVwiOiAxMDAsXG5cdFx0XCJwb2lzb25EYW1hZ2VcIjogMTAsXG5cdFx0XCJ3ZWFrVmFsdWVcIjogMjAsXG5cdFx0XCJyZWRKZXdlbFwiOiAzLFxuXHRcdFwiYmx1ZUpld2VsXCI6IDMsXG5cdFx0XCJncmVlbkpld2VsXCI6IDUsXG5cdFx0XCJyZWRQb3Rpb25cIjogMTAwLFxuXHRcdFwiYmx1ZVBvdGlvblwiOiAyNTAsXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogNTAwLFxuXHRcdFwiZ3JlZW5Qb3Rpb25cIjogODAwLFxuXHRcdFwiYnJlYWtBcm1vclwiOiAwLjksXG5cdFx0XCJjb3VudGVyQXR0YWNrXCI6IDAuMSxcblx0XHRcInB1cmlmeVwiOiAzLFxuXHRcdFwiaGF0cmVkXCI6IDIsXG5cdFx0XCJtb3ZlU3BlZWRcIjogMTAwLFxuXHRcdFwiYW5pbWF0ZVNwZWVkXCI6IDQwMCxcblx0XHRcImZsb29yQ2hhbmdlVGltZVwiOiA4MDBcblx0fSxcblx0XCJmbGFnc1wiOiB7XG5cdFx0XCJlbmFibGVGbG9vclwiOiB0cnVlLFxuXHRcdFwiZW5hYmxlTmFtZVwiOiBmYWxzZSxcblx0XHRcImVuYWJsZUx2XCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlSFBNYXhcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVNYW5hXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTURlZlwiOiB0cnVlLFxuXHRcdFwiZW5hYmxlTW9uZXlcIjogdHJ1ZSxcblx0XHRcImVuYWJsZUV4cGVyaWVuY2VcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVMZXZlbFVwXCI6IGZhbHNlLFxuXHRcdFwibGV2ZWxVcExlZnRNb2RlXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlS2V5c1wiOiB0cnVlLFxuXHRcdFwiZW5hYmxlUFpGXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlRGVidWZmXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlU2tpbGxcIjogZmFsc2UsXG5cdFx0XCJmbHlOZWFyU3RhaXJcIjogdHJ1ZSxcblx0XHRcImZseVJlY29yZFBvc2l0aW9uXCI6IGZhbHNlLFxuXHRcdFwicGlja2F4ZUZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxuXHRcdFwiYm9tYkZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxuXHRcdFwic25vd0ZvdXJEaXJlY3Rpb25zXCI6IGZhbHNlLFxuXHRcdFwiYmlnS2V5SXNCb3hcIjogZmFsc2UsXG5cdFx0XCJzdGVlbERvb3JXaXRob3V0S2V5XCI6IGZhbHNlLFxuXHRcdFwiaXRlbUZpcnN0VGV4dFwiOiBmYWxzZSxcblx0XHRcImVxdWlwbWVudFwiOiBmYWxzZSxcblx0XHRcImVxdWlwYm94QnV0dG9uXCI6IGZhbHNlLFxuXHRcdFwiaWNvbkluRXF1aXBib3hcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVBZGRQb2ludFwiOiBmYWxzZSxcblx0XHRcImVuYWJsZU5lZ2F0aXZlRGFtYWdlXCI6IGZhbHNlLFxuXHRcdFwiaGF0cmVkRGVjcmVhc2VcIjogdHJ1ZSxcblx0XHRcImJldHdlZW5BdHRhY2tDZWlsXCI6IGZhbHNlLFxuXHRcdFwiYmV0d2VlbkF0dGFja01heFwiOiBmYWxzZSxcblx0XHRcInVzZUxvb3BcIjogZmFsc2UsXG5cdFx0XCJzdGFydFVzaW5nQ2FudmFzXCI6IGZhbHNlLFxuXHRcdFwic3RhcnREaXJlY3RseVwiOiBmYWxzZSxcblx0XHRcInN0YXR1c0NhbnZhc1wiOiBmYWxzZSxcblx0XHRcInN0YXR1c0NhbnZhc1Jvd3NPbk1vYmlsZVwiOiAzLFxuXHRcdFwiZGlzcGxheUVuZW15RGFtYWdlXCI6IHRydWUsXG5cdFx0XCJkaXNwbGF5Q3JpdGljYWxcIjogdHJ1ZSxcblx0XHRcImRpc3BsYXlFeHRyYURhbWFnZVwiOiB0cnVlLFxuXHRcdFwiZW5hYmxlR2VudGxlQ2xpY2tcIjogdHJ1ZSxcblx0XHRcInBvdGlvbldoaWxlUm91dGluZ1wiOiBmYWxzZSxcblx0XHRcImlnbm9yZUNoYW5nZUZsb29yXCI6IHRydWUsXG5cdFx0XCJjYW5Hb0RlYWRab25lXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTW92ZURpcmVjdGx5XCI6IHRydWUsXG5cdFx0XCJlbmFibGVEaXNhYmxlZFNob3BcIjogdHJ1ZSxcblx0XHRcImRpc2FibGVTaG9wT25EYW1hZ2VcIjogZmFsc2UsXG5cdFx0XCJibHVyRmdcIjogZmFsc2UsXG5cdFx0XCJjaGVja0NvbnNvbGVcIjogZmFsc2Vcblx0fVxufVxuXG4vKioqIEVYUE9SVFMgRlJPTSBleHBvcnRzLWxvYWRlciAqKiovXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGFfYTFlMmZiNGFfZTk4Nl80NTI0X2IwZGFfOWI3YmE3YzA4NzRkOyIsInZhciBtYXBzXzkwZjM2NzUyXzg4MTVfNGJlOF9iMzJiX2Q3ZmFkMWQwNTQyZSA9IFxue1xuXHRcIjFcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInllbGxvd1dhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXG5cdFwiMlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwid2hpdGVXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxuXHRcIjNcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVXYWxsXCIsXCJjYW5CcmVha1wiOnRydWV9LFxuXHRcIjRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInN0YXJcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjVcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxhdmFcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjZcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImljZVwifSxcblx0XCI3XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJibHVlU2hvcC1sZWZ0XCJ9LFxuXHRcIjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVTaG9wLXJpZ2h0XCJ9LFxuXHRcIjlcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInBpbmtTaG9wLWxlZnRcIn0sXG5cdFwiMTBcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInBpbmtTaG9wLXJpZ2h0XCJ9LFxuXHRcIjExXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsYXZhTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXG5cdFwiMTJcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInBvaXNvbk5ldFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJ0cmlnZ2VyXCI6XCJwYXNzTmV0XCJ9LFxuXHRcIjEzXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ3ZWFrTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXG5cdFwiMTRcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImN1cnNlTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXG5cdFwiMTVcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImJsdWVXYXRlclwiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiMTZcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcIndhdGVyXCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIyMFwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGVcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjIxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ5ZWxsb3dLZXlcIn0sXG5cdFwiMjJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVLZXlcIn0sXG5cdFwiMjNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInJlZEtleVwifSxcblx0XCIyNFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5LZXlcIn0sXG5cdFwiMjVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN0ZWVsS2V5XCJ9LFxuXHRcIjI2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJiaWdLZXlcIn0sXG5cdFwiMjdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInJlZEpld2VsXCJ9LFxuXHRcIjI4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJibHVlSmV3ZWxcIn0sXG5cdFwiMjlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImdyZWVuSmV3ZWxcIn0sXG5cdFwiMzBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInllbGxvd0pld2VsXCJ9LFxuXHRcIjMxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJyZWRQb3Rpb25cIn0sXG5cdFwiMzJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVQb3Rpb25cIn0sXG5cdFwiMzNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImdyZWVuUG90aW9uXCJ9LFxuXHRcIjM0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ5ZWxsb3dQb3Rpb25cIn0sXG5cdFwiMzVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMVwifSxcblx0XCIzNlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2hpZWxkMVwifSxcblx0XCIzN1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQyXCJ9LFxuXHRcIjM4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQyXCJ9LFxuXHRcIjM5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzd29yZDNcIn0sXG5cdFwiNDBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDNcIn0sXG5cdFwiNDFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkNFwifSxcblx0XCI0MlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2hpZWxkNFwifSxcblx0XCI0M1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQ1XCJ9LFxuXHRcIjQ0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ1XCJ9LFxuXHRcIjQ1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJib29rXCJ9LFxuXHRcIjQ2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJmbHlcIn0sXG5cdFwiNDdcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInBpY2theGVcIn0sXG5cdFwiNDhcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImljZVBpY2theGVcIn0sXG5cdFwiNDlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJvbWJcIn0sXG5cdFwiNTBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNlbnRlckZseVwifSxcblx0XCI1MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwidXBGbHlcIn0sXG5cdFwiNTJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImRvd25GbHlcIn0sXG5cdFwiNTNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNvaW5cIn0sXG5cdFwiNTRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNub3dcIn0sXG5cdFwiNTVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImNyb3NzXCJ9LFxuXHRcIjU2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdXBlclBvdGlvblwifSxcblx0XCI1N1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZWFydGhxdWFrZVwifSxcblx0XCI1OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicG9pc29uV2luZVwifSxcblx0XCI1OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwid2Vha1dpbmVcIn0sXG5cdFwiNjBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImN1cnNlV2luZVwifSxcblx0XCI2MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3VwZXJXaW5lXCJ9LFxuXHRcIjYyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJrbmlmZVwifSxcblx0XCI2M1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwibW9uZXlQb2NrZXRcIn0sXG5cdFwiNjRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNob2VzXCJ9LFxuXHRcIjY1XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJoYW1tZXJcIn0sXG5cdFwiNjhcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImxpZmVXYW5kXCJ9LFxuXHRcIjY5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJqdW1wU2hvZXNcIn0sXG5cdFwiNzBcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkMFwifSxcblx0XCI3MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2hpZWxkMFwifSxcblx0XCI3MlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2tpbGwxXCJ9LFxuXHRcIjczXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ3YW5kXCJ9LFxuXHRcIjgxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ5ZWxsb3dEb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcblx0XCI4MlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZURvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjgzXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJyZWREb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcblx0XCI4NFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiZ3JlZW5Eb29yXCIsXCJ0cmlnZ2VyXCI6XCJvcGVuRG9vclwifSxcblx0XCI4NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwic3BlY2lhbERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjg2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJzdGVlbERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjg3XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ1cEZsb29yXCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiODhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImRvd25GbG9vclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjg5XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJwb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCI5MFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwic3RhclBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjkxXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJ1cFBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjkyXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJsZWZ0UG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiOTNcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImRvd25Qb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCI5NFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwicmlnaHRQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCIxMDFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImNyeXN0YWxVcFwifSxcblx0XCIxMDJcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImNyeXN0YWxCb3R0b21cIn0sXG5cdFwiMTAzXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJmaXJlXCJ9LFxuXHRcIjEwNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwic3dpdGNoXCJ9LFxuXHRcIjEyMVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJtYW5cIn0sXG5cdFwiMTIyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvbWFuXCJ9LFxuXHRcIjEyM1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ0aGllZlwifSxcblx0XCIxMjRcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZmFpcnlcIn0sXG5cdFwiMTI1XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm1hZ2ljaWFuXCJ9LFxuXHRcIjEyNlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b21hbk1hZ2ljaWFuXCJ9LFxuXHRcIjEyN1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJvbGRNYW5cIn0sXG5cdFwiMTI4XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImNoaWxkXCJ9LFxuXHRcIjEyOVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3b29kXCJ9LFxuXHRcIjEzMFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJwaW5rU2hvcFwifSxcblx0XCIxMzFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiYmx1ZVNob3BcIn0sXG5cdFwiMTMyXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInByaW5jZXNzXCJ9LFxuXHRcIjEzM1wiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjMFwiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXG5cdFwiMTM0XCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMxXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcblx0XCIxMzVcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzJcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxuXHRcIjEzNlwiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjM1wiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXG5cdFwiMTUxXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZTFcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjE1MlwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUyXCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxNTNcIjoge1wiY2xzXCI6XCJhdXRvdGlsZVwiLFwiaWRcIjpcImF1dG90aWxlM1wiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiMTYxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd1VwXCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcImxlZnRcIixcInJpZ2h0XCIsXCJkb3duXCJdLFwiY2Fubm90SW5cIjpbXCJkb3duXCJdfSxcblx0XCIxNjJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93RG93blwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwidXBcIl0sXCJjYW5ub3RJblwiOltcInVwXCJdfSxcblx0XCIxNjNcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93TGVmdFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJ1cFwiLFwiZG93blwiLFwicmlnaHRcIl0sXCJjYW5ub3RJblwiOltcInJpZ2h0XCJdfSxcblx0XCIxNjRcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93UmlnaHRcIixcIm5vUGFzc1wiOmZhbHNlLFwiY2Fubm90T3V0XCI6W1widXBcIixcImRvd25cIixcImxlZnRcIl0sXCJjYW5ub3RJblwiOltcImxlZnRcIl19LFxuXHRcIjE2NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwibGlnaHRcIixcInRyaWdnZXJcIjpcImNoYW5nZUxpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiMTY2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJkYXJrTGlnaHRcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjE2N1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwic2tpXCIsXCJ0cmlnZ2VyXCI6XCJza2lcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCIxNjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImZsb3dlclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjE2OVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYm94XCIsXCJ0cmlnZ2VyXCI6XCJwdXNoQm94XCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxNzBcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJveGVkXCIsXCJ0cmlnZ2VyXCI6XCJwdXNoQm94XCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxODFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2x0XCJ9LFxuXHRcIjE4MlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3dFwifSxcblx0XCIxODNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3J0XCJ9LFxuXHRcIjE4NFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bFwifSxcblx0XCIxODVcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2NcIn0sXG5cdFwiMTg2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndyXCJ9LFxuXHRcIjE4N1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bGJcIn0sXG5cdFwiMTg4XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndyYlwifSxcblx0XCIxODlcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGx0XCJ9LFxuXHRcIjE5MFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkdFwifSxcblx0XCIxOTFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZHJ0XCJ9LFxuXHRcIjE5MlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbFwifSxcblx0XCIxOTNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGNcIn0sXG5cdFwiMTk0XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyXCJ9LFxuXHRcIjE5NVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbGJcIn0sXG5cdFwiMTk2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyYlwifSxcblx0XCIyMDFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJncmVlblNsaW1lXCJ9LFxuXHRcIjIwMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFNsaW1lXCJ9LFxuXHRcIjIwM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrU2xpbWVcIn0sXG5cdFwiMjA0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2xpbWVsb3JkXCJ9LFxuXHRcIjIwNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhdFwifSxcblx0XCIyMDZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiaWdCYXRcIn0sXG5cdFwiMjA3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkQmF0XCJ9LFxuXHRcIjIwOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInZhbXBpcmVcIn0sXG5cdFwiMjA5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25cIn0sXG5cdFwiMjEwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25Tb2lsZGVyXCJ9LFxuXHRcIjIxMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uQ2FwdGFpblwifSxcblx0XCIyMTJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnaG9zdFNrZWxldG9uXCJ9LFxuXHRcIjIxM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInpvbWJpZVwifSxcblx0XCIyMTRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ6b21iaWVLbmlnaHRcIn0sXG5cdFwiMjE1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicm9ja1wifSxcblx0XCIyMTZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzbGltZU1hblwifSxcblx0XCIyMTdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlUHJpZXN0XCJ9LFxuXHRcIjIxOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFByaWVzdFwifSxcblx0XCIyMTlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJicm93bldpemFyZFwifSxcblx0XCIyMjBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRXaXphcmRcIn0sXG5cdFwiMjIxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93R3VhcmRcIn0sXG5cdFwiMjIyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmx1ZUd1YXJkXCJ9LFxuXHRcIjIyM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEd1YXJkXCJ9LFxuXHRcIjIyNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN3b3Jkc21hblwifSxcblx0XCIyMjVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzb2xkaWVyXCJ9LFxuXHRcIjIyNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInllbGxvd0tuaWdodFwifSxcblx0XCIyMjdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLbmlnaHRcIn0sXG5cdFwiMjI4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGFya0tuaWdodFwifSxcblx0XCIyMjlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ0cmVlMVwifSxcblx0XCIyMzBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dLaW5nXCJ9LFxuXHRcIjIzMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS2luZ1wifSxcblx0XCIyMzJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlS25pZ2h0XCJ9LFxuXHRcIjIzM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdvbGRTbGltZVwifSxcblx0XCIyMzRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25Ta2VsZXRvblwifSxcblx0XCIyMzVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25CYXRcIn0sXG5cdFwiMjM2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3RlZWxSb2NrXCJ9LFxuXHRcIjIzN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uUHJpZXN0XCJ9LFxuXHRcIjIzOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uS2luZ1wifSxcblx0XCIyMzlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbldpemFyZFwifSxcblx0XCIyNDBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTa2VsZXRvbkNhcHRpb25cIn0sXG5cdFwiMjQxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmFkSGVyb1wifSxcblx0XCIyNDJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblwifSxcblx0XCIyNDNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblByaWVzdFwifSxcblx0XCIyNDRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnb2xkSG9yblNsaW1lXCJ9LFxuXHRcIjI0NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEtpbmdcIn0sXG5cdFwiMjQ2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVLaW5nXCJ9LFxuXHRcIjI0N1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrTWFnaWNpYW5cIn0sXG5cdFwiMjQ4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2lsdmVyU2xpbWVcIn0sXG5cdFwiMjQ5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3dvcmRFbXBlcm9yXCJ9LFxuXHRcIjI1MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlSG9yblNsaW1lXCJ9LFxuXHRcIjI1MVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZFByaW5jZXNzXCJ9LFxuXHRcIjI1MlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZEZhaXJ5XCJ9LFxuXHRcIjI1M1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyYXlQcmllc3RcIn0sXG5cdFwiMjU0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkU3dvcmRzbWFuXCJ9LFxuXHRcIjI1NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlR2hvc3RcIn0sXG5cdFwiMjU2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicG9pc29uWm9tYmllXCJ9LFxuXHRcIjI1N1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm1hZ2ljRHJhZ29uXCJ9LFxuXHRcIjI1OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm9jdG9wdXNcIn0sXG5cdFwiMjU5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGFya0ZhaXJ5XCJ9LFxuXHRcIjI2MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS25pZ2h0XCJ9LFxuXHRcIjI2MVwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJhbmdlbFwifSxcblx0XCIyNjJcIjoge1wiY2xzXCI6XCJlbmVteTQ4XCIsXCJpZFwiOlwiZWxlbWVudGFsXCJ9LFxuXHRcIjI2M1wiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJzdGVlbEd1YXJkXCJ9LFxuXHRcIjI2NFwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJldmlsQmF0XCJ9XG59XG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbm1vZHVsZS5leHBvcnRzID0gbWFwc185MGYzNjc1Ml84ODE1XzRiZThfYjMyYl9kN2ZhZDFkMDU0MmU7IiwidmFyIGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSA9IFxue1xuXHRcImhlcm9cIjoge1xuXHRcdFwiZG93blwiOiB7XG5cdFx0XHRcImxvY1wiOiAwLFxuXHRcdFx0XCJzdG9wXCI6IDAsXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXG5cdFx0fSxcblx0XHRcImxlZnRcIjoge1xuXHRcdFx0XCJsb2NcIjogMSxcblx0XHRcdFwic3RvcFwiOiAwLFxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxuXHRcdFx0XCJyaWdodEZvb3RcIjogM1xuXHRcdH0sXG5cdFx0XCJyaWdodFwiOiB7XG5cdFx0XHRcImxvY1wiOiAyLFxuXHRcdFx0XCJzdG9wXCI6IDAsXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXG5cdFx0fSxcblx0XHRcInVwXCI6IHtcblx0XHRcdFwibG9jXCI6IDMsXG5cdFx0XHRcInN0b3BcIjogMCxcblx0XHRcdFwibGVmdEZvb3RcIjogMSxcblx0XHRcdFwicmlnaHRGb290XCI6IDNcblx0XHR9LFxuXHRcdFwid2lkdGhcIjogMzIsXG5cdFx0XCJoZWlnaHRcIjogNDhcblx0fSxcblx0XCJ0ZXJyYWluc1wiOiB7XG5cdFx0XCJncm91bmRcIjogMCxcblx0XHRcImdyYXNzXCI6IDEsXG5cdFx0XCJncmFzczJcIjogMixcblx0XHRcInllbGxvd1dhbGxcIjogMyxcblx0XHRcIndoaXRlV2FsbFwiOiA0LFxuXHRcdFwiYmx1ZVdhbGxcIjogNSxcblx0XHRcInNub3dHcm91bmRcIjogNixcblx0XHRcImdyb3VuZDJcIjogNyxcblx0XHRcImdyb3VuZDNcIjogOCxcblx0XHRcImdyb3VuZDRcIjogOSxcblx0XHRcInNhbmRcIjogMTAsXG5cdFx0XCJncm91bmQ1XCI6IDExLFxuXHRcdFwieWVsbG93V2FsbDJcIjogMTIsXG5cdFx0XCJ3aGl0ZVdhbGwyXCI6IDEzLFxuXHRcdFwiYmx1ZVdhbGwyXCI6IDE0LFxuXHRcdFwiYmxvY2tXYWxsXCI6IDE1LFxuXHRcdFwiZ3JheVdhbGxcIjogMTYsXG5cdFx0XCJ3aGl0ZVwiOiAxNyxcblx0XHRcImdyb3VuZDZcIjogMTgsXG5cdFx0XCJzb2lsXCI6IDE5LFxuXHRcdFwiZ3JvdW5kN1wiOiAyMCxcblx0XHRcImdyb3VuZDhcIjogMjEsXG5cdFx0XCJpY2VcIjogMjIsXG5cdFx0XCJkb3duRmxvb3JcIjogMjMsXG5cdFx0XCJ1cEZsb29yXCI6IDI0LFxuXHRcdFwieWVsbG93RG9vclwiOiAyNSxcblx0XHRcImJsdWVEb29yXCI6IDI2LFxuXHRcdFwicmVkRG9vclwiOiAyNyxcblx0XHRcImdyZWVuRG9vclwiOiAyOCxcblx0XHRcInNwZWNpYWxEb29yXCI6IDI5LFxuXHRcdFwic3RlZWxEb29yXCI6IDMwLFxuXHRcdFwiYmx1ZVNob3AtbGVmdFwiOiAzMSxcblx0XHRcImJsdWVTaG9wLXJpZ2h0XCI6IDMyLFxuXHRcdFwicGlua1Nob3AtbGVmdFwiOiAzMyxcblx0XHRcInBpbmtTaG9wLXJpZ2h0XCI6IDM0LFxuXHRcdFwiYXJyb3dVcFwiOiAzNSxcblx0XHRcImFycm93RG93blwiOiAzNixcblx0XHRcImFycm93TGVmdFwiOiAzNyxcblx0XHRcImFycm93UmlnaHRcIjogMzgsXG5cdFx0XCJsaWdodFwiOiAzOSxcblx0XHRcImRhcmtMaWdodFwiOiA0MCxcblx0XHRcInNraVwiOiA0MSxcblx0XHRcImZsb3dlclwiOiA0Mixcblx0XHRcImJveFwiOiA0Myxcblx0XHRcImJveGVkXCI6IDQ0XG5cdH0sXG5cdFwiYW5pbWF0ZXNcIjoge1xuXHRcdFwic3RhclwiOiAwLFxuXHRcdFwibGF2YVwiOiAxLFxuXHRcdFwiYmx1ZVdhdGVyXCI6IDIsXG5cdFx0XCJ3YXRlclwiOiAzLFxuXHRcdFwieWVsbG93RG9vclwiOiA0LFxuXHRcdFwiYmx1ZURvb3JcIjogNSxcblx0XHRcInJlZERvb3JcIjogNixcblx0XHRcImdyZWVuRG9vclwiOiA3LFxuXHRcdFwic3BlY2lhbERvb3JcIjogOCxcblx0XHRcInN0ZWVsRG9vclwiOiA5LFxuXHRcdFwieWVsbG93V2FsbFwiOiAxMCxcblx0XHRcIndoaXRlV2FsbFwiOiAxMSxcblx0XHRcImJsdWVXYWxsXCI6IDEyLFxuXHRcdFwiY3J5c3RhbFVwXCI6IDEzLFxuXHRcdFwiY3J5c3RhbEJvdHRvbVwiOiAxNCxcblx0XHRcInN0YXJQb3J0YWxcIjogMTUsXG5cdFx0XCJmaXJlXCI6IDE2LFxuXHRcdFwicG9ydGFsXCI6IDE3LFxuXHRcdFwic3dpdGNoXCI6IDE4LFxuXHRcdFwibGF2YU5ldFwiOiAxOSxcblx0XHRcInBvaXNvbk5ldFwiOiAyMCxcblx0XHRcIndlYWtOZXRcIjogMjEsXG5cdFx0XCJjdXJzZU5ldFwiOiAyMixcblx0XHRcImRvd25Qb3J0YWxcIjogMjMsXG5cdFx0XCJsZWZ0UG9ydGFsXCI6IDI0LFxuXHRcdFwicmlnaHRQb3J0YWxcIjogMjUsXG5cdFx0XCJ1cFBvcnRhbFwiOiAyNlxuXHR9LFxuXHRcIm5wY3NcIjoge1xuXHRcdFwibWFuXCI6IDAsXG5cdFx0XCJ3b21hblwiOiAxLFxuXHRcdFwidGhpZWZcIjogMixcblx0XHRcImZhaXJ5XCI6IDMsXG5cdFx0XCJtYWdpY2lhblwiOiA0LFxuXHRcdFwid29tYW5NYWdpY2lhblwiOiA1LFxuXHRcdFwib2xkTWFuXCI6IDYsXG5cdFx0XCJjaGlsZFwiOiA3LFxuXHRcdFwid29vZFwiOiA4LFxuXHRcdFwicGlua1Nob3BcIjogOSxcblx0XHRcImJsdWVTaG9wXCI6IDEwLFxuXHRcdFwicHJpbmNlc3NcIjogMTEsXG5cdFx0XCJ3bHRcIjogMTIsXG5cdFx0XCJ3dFwiOiAxMyxcblx0XHRcIndydFwiOiAxNCxcblx0XHRcIndsXCI6IDE1LFxuXHRcdFwid2NcIjogMTYsXG5cdFx0XCJ3clwiOiAxNyxcblx0XHRcIndsYlwiOiAxOCxcblx0XHRcIndyYlwiOiAxOSxcblx0XHRcImRsdFwiOiAyMCxcblx0XHRcImR0XCI6IDIxLFxuXHRcdFwiZHJ0XCI6IDIyLFxuXHRcdFwiZGxcIjogMjMsXG5cdFx0XCJkY1wiOiAyNCxcblx0XHRcImRyXCI6IDI1LFxuXHRcdFwiZGxiXCI6IDI2LFxuXHRcdFwiZHJiXCI6IDI3XG5cdH0sXG5cdFwibnBjNDhcIjoge1xuXHRcdFwibnBjMFwiOiAwLFxuXHRcdFwibnBjMVwiOiAxLFxuXHRcdFwibnBjMlwiOiAyLFxuXHRcdFwibnBjM1wiOiAzXG5cdH0sXG5cdFwiZW5lbXlzXCI6IHtcblx0XHRcInJlZFNsaW1lXCI6IDEsXG5cdFx0XCJibGFja1NsaW1lXCI6IDIsXG5cdFx0XCJzbGltZWxvcmRcIjogMyxcblx0XHRcImJhdFwiOiA0LFxuXHRcdFwiYmlnQmF0XCI6IDUsXG5cdFx0XCJyZWRCYXRcIjogNixcblx0XHRcInZhbXBpcmVcIjogNyxcblx0XHRcInNrZWxldG9uXCI6IDgsXG5cdFx0XCJza2VsZXRvblNvaWxkZXJcIjogOSxcblx0XHRcInNrZWxldG9uQ2FwdGFpblwiOiAxMCxcblx0XHRcImdob3N0U2tlbGV0b25cIjogMTEsXG5cdFx0XCJ6b21iaWVcIjogMTIsXG5cdFx0XCJ6b21iaWVLbmlnaHRcIjogMTMsXG5cdFx0XCJyb2NrXCI6IDE0LFxuXHRcdFwic2xpbWVNYW5cIjogMTUsXG5cdFx0XCJibHVlUHJpZXN0XCI6IDE2LFxuXHRcdFwicmVkUHJpZXN0XCI6IDE3LFxuXHRcdFwiYnJvd25XaXphcmRcIjogMTgsXG5cdFx0XCJyZWRXaXphcmRcIjogMTksXG5cdFx0XCJ5ZWxsb3dHdWFyZFwiOiAyMCxcblx0XHRcImJsdWVHdWFyZFwiOiAyMSxcblx0XHRcInJlZEd1YXJkXCI6IDIyLFxuXHRcdFwic3dvcmRzbWFuXCI6IDIzLFxuXHRcdFwic29sZGllclwiOiAyNCxcblx0XHRcInllbGxvd0tuaWdodFwiOiAyNSxcblx0XHRcInJlZEtuaWdodFwiOiAyNixcblx0XHRcImRhcmtLbmlnaHRcIjogMjcsXG5cdFx0XCJ5ZWxsb3dLaW5nXCI6IDI5LFxuXHRcdFwiZ3JlZW5LaW5nXCI6IDMwLFxuXHRcdFwiYmx1ZUtuaWdodFwiOiAzMSxcblx0XHRcImdvbGRTbGltZVwiOiAzMixcblx0XHRcInBvaXNvblNrZWxldG9uXCI6IDMzLFxuXHRcdFwicG9pc29uQmF0XCI6IDM0LFxuXHRcdFwic3RlZWxSb2NrXCI6IDM1LFxuXHRcdFwic2tlbGV0b25Qcmllc3RcIjogMzYsXG5cdFx0XCJza2VsZXRvbktpbmdcIjogMzcsXG5cdFx0XCJza2VsZXRvbldpemFyZFwiOiAzOCxcblx0XHRcInJlZFNrZWxldG9uQ2FwdGlvblwiOiAzOSxcblx0XHRcImJhZEhlcm9cIjogNDAsXG5cdFx0XCJkZW1vblwiOiA0MSxcblx0XHRcImRlbW9uUHJpZXN0XCI6IDQyLFxuXHRcdFwiZ29sZEhvcm5TbGltZVwiOiA0Myxcblx0XHRcInJlZEtpbmdcIjogNDQsXG5cdFx0XCJ3aGl0ZUtpbmdcIjogNDUsXG5cdFx0XCJibGFja01hZ2ljaWFuXCI6IDQ2LFxuXHRcdFwic2lsdmVyU2xpbWVcIjogNDcsXG5cdFx0XCJzd29yZEVtcGVyb3JcIjogNDgsXG5cdFx0XCJ3aGl0ZUhvcm5TbGltZVwiOiA0OSxcblx0XHRcImJhZFByaW5jZXNzXCI6IDUwLFxuXHRcdFwiYmFkRmFpcnlcIjogNTEsXG5cdFx0XCJncmF5UHJpZXN0XCI6IDUyLFxuXHRcdFwicmVkU3dvcmRzbWFuXCI6IDUzLFxuXHRcdFwid2hpdGVHaG9zdFwiOiA1NCxcblx0XHRcInBvaXNvblpvbWJpZVwiOiA1NSxcblx0XHRcIm1hZ2ljRHJhZ29uXCI6IDU2LFxuXHRcdFwib2N0b3B1c1wiOiA1Nyxcblx0XHRcImRhcmtGYWlyeVwiOiA1OCxcblx0XHRcImdyZWVuS25pZ2h0XCI6IDU5LFxuXHRcdFwiZ3JlZW5TbGltZVwiOiAwLFxuXHRcdFwidHJlZTFcIjogMjhcblx0fSxcblx0XCJlbmVteTQ4XCI6IHtcblx0XHRcImFuZ2VsXCI6IDAsXG5cdFx0XCJlbGVtZW50YWxcIjogMSxcblx0XHRcInN0ZWVsR3VhcmRcIjogMixcblx0XHRcImV2aWxCYXRcIjogM1xuXHR9LFxuXHRcIml0ZW1zXCI6IHtcblx0XHRcInllbGxvd0tleVwiOiAwLFxuXHRcdFwiYmx1ZUtleVwiOiAxLFxuXHRcdFwicmVkS2V5XCI6IDIsXG5cdFx0XCJncmVlbktleVwiOiAzLFxuXHRcdFwic3RlZWxLZXlcIjogNCxcblx0XHRcImJpZ0tleVwiOiA2LFxuXHRcdFwicmVkSmV3ZWxcIjogMTYsXG5cdFx0XCJibHVlSmV3ZWxcIjogMTcsXG5cdFx0XCJncmVlbkpld2VsXCI6IDE4LFxuXHRcdFwieWVsbG93SmV3ZWxcIjogMTksXG5cdFx0XCJyZWRQb3Rpb25cIjogMjAsXG5cdFx0XCJibHVlUG90aW9uXCI6IDIxLFxuXHRcdFwiZ3JlZW5Qb3Rpb25cIjogMjIsXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogMjMsXG5cdFx0XCJsaWZlV2FuZFwiOiAzMyxcblx0XHRcInN3b3JkMFwiOiA2MCxcblx0XHRcInN3b3JkMVwiOiA1MCxcblx0XHRcInN3b3JkMlwiOiA1MSxcblx0XHRcInN3b3JkM1wiOiA1Mixcblx0XHRcInN3b3JkNFwiOiA1Myxcblx0XHRcInN3b3JkNVwiOiA1NCxcblx0XHRcInNoaWVsZDBcIjogNjEsXG5cdFx0XCJzaGllbGQxXCI6IDU1LFxuXHRcdFwic2hpZWxkMlwiOiA1Nixcblx0XHRcInNoaWVsZDNcIjogNTcsXG5cdFx0XCJzaGllbGQ0XCI6IDU4LFxuXHRcdFwic2hpZWxkNVwiOiA1OSxcblx0XHRcImJvb2tcIjogOSxcblx0XHRcImZseVwiOiAxMixcblx0XHRcInBpY2theGVcIjogNDUsXG5cdFx0XCJpY2VQaWNrYXhlXCI6IDQ0LFxuXHRcdFwiYm9tYlwiOiA0Myxcblx0XHRcImNlbnRlckZseVwiOiAxMyxcblx0XHRcInVwRmx5XCI6IDE1LFxuXHRcdFwiZG93bkZseVwiOiAxNCxcblx0XHRcImNvaW5cIjogMTEsXG5cdFx0XCJzbm93XCI6IDQxLFxuXHRcdFwiY3Jvc3NcIjogNDAsXG5cdFx0XCJzdXBlclBvdGlvblwiOiAyOSxcblx0XHRcImVhcnRocXVha2VcIjogOCxcblx0XHRcInBvaXNvbldpbmVcIjogMjQsXG5cdFx0XCJ3ZWFrV2luZVwiOiAyNSxcblx0XHRcImN1cnNlV2luZVwiOiAyNyxcblx0XHRcInN1cGVyV2luZVwiOiAyOCxcblx0XHRcImtuaWZlXCI6IDQyLFxuXHRcdFwibW9uZXlQb2NrZXRcIjogNDYsXG5cdFx0XCJzaG9lc1wiOiA0Nyxcblx0XHRcImhhbW1lclwiOiA0OCxcblx0XHRcImp1bXBTaG9lc1wiOiA0OSxcblx0XHRcInNraWxsMVwiOiAzMCxcblx0XHRcIndhbmRcIjogMTBcblx0fSxcblx0XCJhdXRvdGlsZVwiOiB7XG5cdFx0XCJhdXRvdGlsZVwiOiAwLFxuXHRcdFwiYXV0b3RpbGUxXCI6IDAsXG5cdFx0XCJhdXRvdGlsZTJcIjogMCxcblx0XHRcImF1dG90aWxlM1wiOiAwXG5cdH1cbn1cblxuLyoqKiBFWFBPUlRTIEZST00gZXhwb3J0cy1sb2FkZXIgKioqL1xubW9kdWxlLmV4cG9ydHMgPSBpY29uc180NjY1ZWUxMl8zYTFmXzQ0YTRfYmVhM18wZmNjYmE2MzRkYzE7IiwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgcmVhZGRpciA9IChkaXIsIHRyYXZlcnNhbCwgcmVnZXgpID0+IHtcbiAgY29uc3QgYWxsID0gW107XG4gIGNvbnN0IHJvb3QgPSBwYXRoLnJlc29sdmUoZGlyKTtcbiAgY29uc3QgcXVldWUgPSBbXTtcbiAgcXVldWUudW5zaGlmdCgnLicpO1xuICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc3JjID0gcXVldWUuc2hpZnQoKTtcbiAgICBjb25zdCBsaXN0ID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHJvb3QsIHNyYyksIHtcbiAgICAgIHdpdGhGaWxlVHlwZXM6IHRydWUsXG4gICAgfSk7XG4gICAgbGlzdC5mb3JFYWNoKChkaXJlbnQpID0+IHtcbiAgICAgIGlmIChkaXJlbnQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICBpZiAodHJhdmVyc2FsKSBxdWV1ZS5wdXNoKGAke3NyY30vJHtkaXJlbnQubmFtZX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdleC50ZXN0KGRpcmVudC5uYW1lKSkgfHwgIXJlZ2V4KSB7XG4gICAgICAgIGFsbC5wdXNoKGAke3NyY30vJHtkaXJlbnQubmFtZX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYWxsO1xufTtcbmNvbnN0IHJlYWQgPSB7XG4gIHJlYWRkaXIsXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVhZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJlZS10ZXgtcGFja2VyLWNvcmVcIik7IiwidmFyIG1hcCA9IHtcblx0XCIuL01UMC5qc1wiOiAxMCxcblx0XCIuL3NhbXBsZTAuanNcIjogMTEsXG5cdFwiLi9zYW1wbGUxLmpzXCI6IDEyLFxuXHRcIi4vc2FtcGxlMi5qc1wiOiAxMyxcblx0XCIuL3NhbXBsZTMuanNcIjogMTRcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA5OyIsIm1haW4uZmxvb3JzLk1UMD1cbntcblwiZmxvb3JJZFwiOiBcIk1UMFwiLFxuXCJ0aXRsZVwiOiBcIuS4u+WhlCAwIOWxglwiLFxuXCJuYW1lXCI6IFwiMFwiLFxuXCJjYW5GbHlUb1wiOiB0cnVlLFxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcblwiY2Fubm90Vmlld01hcFwiOiBmYWxzZSxcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxuXCJpbWFnZXNcIjogW10sXG5cIml0ZW1fcmF0aW9cIjogMSxcblwibWFwXCI6IFtcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXVxuXSxcblwiZmlyc3RBcnJpdmVcIjogW10sXG5cInBhcmFsbGVsRG9cIjogXCJcIixcblwiZXZlbnRzXCI6IHt9LFxuXCJjaGFuZ2VGbG9vclwiOiB7fSxcblwiYWZ0ZXJCYXR0bGVcIjoge30sXG5cImFmdGVyR2V0SXRlbVwiOiB7fSxcblwiYWZ0ZXJPcGVuRG9vclwiOiB7fSxcblwiY2Fubm90TW92ZVwiOiB7fSxcblwiYmdtYXBcIjogW1xuXG5dLFxuXCJmZ21hcFwiOiBbXG5cbl0sXG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMD1cbntcbiAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgXCJ0aXRsZVwiOiBcIuagt+advyAwIOWxglwiLFxuICAgIFwibmFtZVwiOiBcIjBcIixcbiAgICBcImNhbkZseVRvXCI6IHRydWUsXG4gICAgXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcbiAgICBcImRlZmF1bHRHcm91bmRcIjogXCJncm91bmRcIixcbiAgICBcImltYWdlc1wiOiBbXSxcbiAgICBcImJnbVwiOiBcImJnbS5tcDNcIixcbiAgICBcIml0ZW1fcmF0aW9cIjogMSxcbiAgICBcIm1hcFwiOiBbXG4gICAgWyAgMCwgIDAsMjIwLCAgMCwgIDAsIDIwLCA4NywgIDMsIDY1LCA2NCwgNDQsIDQzLCA0Ml0sXG4gICAgWyAgMCwyNDYsICAwLDI0NiwgIDAsIDIwLCAgMCwgIDMsIDU4LCA1OSwgNjAsIDYxLCA0MV0sXG4gICAgWzIxOSwgIDAsICAwLCAgMCwyMTksIDIwLCAgMCwgIDMsIDU3LCAyNiwgNjIsIDYzLCA0MF0sXG4gICAgWyAyMCwgMjAsMTI1LCAyMCwgMjAsIDIwLCAgMCwgIDMsIDUzLCA1NCwgNTUsIDU2LCAzOV0sXG4gICAgWzIxNiwyNDcsMjYzLDIzNSwyNDgsICA2LCAgMCwgIDMsIDQ5LCA1MCwgNTEsIDUyLCAzOF0sXG4gICAgWyAgNiwgIDYsMTI1LCAgNiwgIDYsICA2LCAgMCwyMjksIDQ1LCA0NiwgNDcsIDQ4LCAzN10sXG4gICAgWzIyNCwyNTQsMjEyLDI2MiwyMDQsICA1LCAgMCwgIDEsIDMxLCAzMiwgMzQsIDMzLCAzNl0sXG4gICAgWzIwMSwyNjEsMjE3LDI2NCwyMDcsICA1LCAgMCwgIDEsIDI3LCAyOCwgMjksIDMwLCAzNV0sXG4gICAgWyAgNSwgIDUsMTI1LCAgNSwgIDUsICA1LCAgMCwgIDEsIDIxLCAyMiwgMjMsIDI0LCAyNV0sXG4gICAgWyAgMCwgIDAsMjM3LCAgMCwgIDAsICAwLCA0NSwgIDEsICAxLCAgMSwxMjEsICAxLCAgMV0sXG4gICAgWyAgNCwgIDQsMTMzLCAgNCwgIDQsICA0LCAgMCwgIDAsICAwLCAgMCwgIDAsIDg1LDEyNF0sXG4gICAgWyA4NywgMTEsIDEyLCAxMywgMTQsICA0LCAgNCwgIDIsICAyLCAgMiwxMjIsICAyLCAgMl0sXG4gICAgWyA4OCwgODksIDkwLCA5MSwgOTIsIDkzLCA5NCwgIDIsIDgxLCA4MiwgODMsIDg0LCA4Nl1cbl0sXG4gICAgXCJmaXJzdEFycml2ZVwiOiBbXG4gICAgICAgIFwiXFx0W+agt+adv+aPkOekul3pppbmrKHliLDovr7mn5DlsYLlj6/ku6Xop6blj5EgZmlyc3RBcnJpdmUg5LqL5Lu277yM6K+l5LqL5Lu25Y+v57G75Ly85LqOUk1YUOS4reeahOKAnOiHquWKqOaJp+ihjOiEmuacrOKAneOAglxcblxcbuacrOS6i+S7tuaUr+aMgeS4gOWIh+eahOS6i+S7tuexu+Wei++8jOW4uOW4uOeUqOadpeinpuWPkeWvueivne+8jOS+i+Wmgu+8mlwiLFxuICAgICAgICBcIuacrOWxguS4u+imgeWvuemBk+WFt+OAgemXqOOAgeaAqueJqeetiei/m+ihjOS7i+e7je+8jOacieWFs+S6i+S7tueahOWQhOenjeS/oeaBr+WcqOS4i+S4gOWxguS8muacieabtOS4uuivpue7hueahOivtOaYjuOAglwiXG4gICAgXSxcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiMTAsOVwiOiBbXG4gICAgICAgICAgICBcIlxcdFvogIHkurosbWFuXei/meS6m+aYr+acrOagt+adv+aUr+aMgeeahOaJgOacieeahOmBk+WFt+OAglxcblxcbumBk+WFt+WIhuS4uuWbm+exu++8mml0ZW1zLCBjb25zdGFudHMsIHRvb2xz77yMZXF1aXBz44CCXFxuaXRlbXMg5Li65Y2z5o2h5Y2z55So57G76YGT5YW377yM5L6L5aaC5a6d55+z44CB6KGA55O244CB5YmR55u+562J44CCXFxuY29uc3RhbnRzIOS4uuawuOS5hemBk+WFt++8jOS+i+WmguaAqueJqeaJi+WGjOOAgealvOWxguS8oOmAgeWZqOOAgeW5uOi/kOmHkeW4geetieOAglxcbnRvb2xzIOS4uua2iOiAl+exu+mBk+WFt++8jOS+i+WmguegtOWimemVkOOAgeeCuOW8ueOAgeS4reW/g+WvueensOmjnuihjOWZqOetieOAglxcbmVxdWlwcyDkuLroo4XlpIfvvIzkvovlpoLliZHnm77nrYnjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYW5dXFxiW3VwXeacieWFs+mBk+WFt+aViOaenO+8jOWumuS5ieWcqGl0ZW1zLmpz5Lit44CCXFxu55uu5YmN5aSn5aSa5pWw6YGT5YW35bey5pyJ6buY6K6k6KGM5Li677yM5aaC5pyJ6Ieq5a6a5LmJ55qE6ZyA5rGC5YiZ6ZyA5ZyoaXRlbXMuanPkuK3kv67mlLnku6PnoIHjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYW5dXFxiW3VwXeaLvuWPlumBk+WFt+e7k+adn+WQjuWPr+inpuWPkSBhZnRlckdldEl0ZW0g5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIxMCwxMVwiOiBbXG4gICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d6L+Z5Lqb5piv6Zeo77yM6ZyA6KaB5a+55bqU55qE6ZKl5YyZ5omT5byA44CCXFxu5py65YWz6Zeo5b+F6aG75L2/55So54m55q6K55qE5byA5rOV44CCXCIsXG4gICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5byA6Zeo5ZCO5Y+v6Kem5Y+RIGFmdGVyT3BlbkRvb3Ig5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIyLDEwXCI6IFtcbiAgICAgICAgICAgIFwiXFx0W+WwkeWlsyxucGMwXei/meS6m+aYr+i3r+manOOAgealvOair+OAgeS8oOmAgemXqOOAglwiLFxuICAgICAgICAgICAgXCJcXHRb5bCR5aWzLG5wYzBd6KGA572R55qE5Lyk5a6z5pWw5YC844CB5Lit5q+S5ZCO5q+P5q2l5Lyk5a6z5pWw5YC844CB6KGw5byx5pe25pS76Ziy5LiL6ZmN55qE5pWw5YC877yM6YO95ZyoIGRhdGEuanMg5YaF5a6a5LmJ44CCXFxuXFxu6Lev6Zqc5ZCM5qC35Lya5bC96YeP6KKr6Ieq5Yqo5a+76Lev57uV6L+H44CCXCIsXG4gICAgICAgICAgICBcIlxcdFvlsJHlpbMsbnBjMF3mpbzmoq/lkozkvKDpgIHpl6jpnIDopoHlnKhjaGFuZ2VGbG9vcuS4reWumuS5ieebruagh+alvOWxguWSjOS9jee9ru+8jOWPr+WPguingeagt+adv+mHjOW3suacieeahOeahOWGmeazleOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiMiw4XCI6IFtcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3ov5nkupvpg73mmK/lkITnp43lkITmoLfnmoTmgKrnianvvIzmiYDmnInmgKrniannmoTmlbDmja7pg73lnKhlbmVteXMuanPkuK3orr7nva7jgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3ov5nmibnmgKrnianliIbliKvkuLrvvJrmma7pgJrjgIHlhYjmlLvjgIHprZTmlLvjgIHlnZrlm7rjgIEy6L+e5Ye744CBM+i/nuWHu+OAgTTov57lh7vjgIHnoLTnlLLjgIHlj43lh7vjgIHlh4DljJbjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3miZPotKXmgKrnianlkI7lj6/op6blj5EgYWZ0ZXJCYXR0bGUg5LqL5Lu244CCXFxuXFxu5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIyLDVcIjogW1xuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXeaooeS7v+OAgeWQuOihgOOAgeS4reavkuOAgeihsOW8seOAgeivheWSkuOAglxcblxcbuivt+azqOaEj+WQuOihgOaAqumcgOimgeiuvue9rnZhbHVl5Li65ZC46KGA5pWw5YC877yM5Y+v5Y+C6KeB5qC35p2/5Lit6buR5pqX5aSn5rOV5biI55qE5YaZ5rOV44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIyLDNcIjogW1xuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXemihuWfn+OAgeWkueWHu+OAglxcbuivt+azqOaEj+mihuWfn+aAqumcgOimgeiuvue9rnZhbHVl5Li65Lyk5a6z5pWw5YC877yM5Y+v5Y+C6KeB5qC35p2/5Lit5Yid57qn5ber5biI55qE5YaZ5rOV44CCXCIsXG4gICAgICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d5aS55Ye75ZKM6aKG5Z+f5ZCM5pe25Y+R55Sf5pe25YWI6K6h566X6aKG5Z+f77yM5YaN5aS55Ye744CCXFxu6Ieq5Yqo5a+76Lev5ZCM5qC35Lya5bC96YeP57uV6L+H5L2g6K6+572u55qE6L+Z5Lqb54K544CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIxMiwxMFwiOiB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeWPquaciealvOS4iuWQr+eUqOS6i+S7tuWQju+8jOaJjeiDveeci+WIsOaIkeW5tuWPr+S7peWSjOaIkeWvueivneadpeinpuWPkeS6i+S7tuOAglwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImNoYW5nZUZsb29yXCI6IHtcbiAgICAgICAgXCI2LDBcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxuICAgICAgICAgICAgXCJzdGFpclwiOiBcImRvd25GbG9vclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMCwxMVwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAxMlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIjAsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuICAgICAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyLDEyXCI6IHtcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIDEyXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiMywxMlwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiNCwxMlwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICB9LFxuICAgICAgICBcIjUsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogMCxcbiAgICAgICAgICAgIFwicG9ydGFsV2l0aG91dFRyaWdnZXJcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCI2LDEyXCI6IHtcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJhZnRlckJhdHRsZVwiOiB7XG4gICAgICAgIFwiMiw2XCI6IFtcbiAgICAgICAgICAgIFwiXFx0W2dob3N0U2tlbGV0b25d5LiN5Y+v6IO977yM5L2g5oCO5LmI5Y+v6IO95omT6LSl5oiR77yBXFxu77yI5LiA5Liq5omT6LSl5oCq54mp6Kem5Y+R55qE5LqL5Lu277yJXCJcbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJhZnRlckdldEl0ZW1cIjoge1xuICAgICAgICBcIjExLDhcIjogW1xuICAgICAgICAgICAgXCLnlLHkuo7nirbmgIHmoI/mlL7kuI3kuIvvvIznu7/pkqXljJnlkozpk4Hpl6jpkqXljJnlnYfop4bkuLp0b29sc++8jOaUvuWFpeW3peWFt+agj+S4reOAglxcbueisOWIsOe7v+mXqOWSjOmTgemXqOS7jeeEtuS8muiHquWKqOS9v+eUqOW8gOmXqOOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiOCw2XCI6IFtcbiAgICAgICAgICAgIFwi55Sx5LqO5ZC46KGA5ZKM5aS55Ye7562J55qE5a2Y5Zyo77yM6KGA55O26buY6K6k6Ieq5Yqo6KKr57uV6Lev44CCXFxu5L2g5Y+v5Lul5L+u5pS5ZGF0YS5qc+S4reeahOezu+e7n0ZsYWfmnaXorr7nva7ov5nkuIDpobnjgIJcIlxuICAgICAgICBdLFxuICAgICAgICBcIjgsN1wiOiBbXG4gICAgICAgICAgICBcIuWmgumcgOS/ruaUuea2iOiAl+WTgeeahOaViOaenO+8jOivt+WJjeW+gCBkYXRhLmpzIO+8jOaJvuWIsOW5tuS/ruaUuXZhbHVlc+WGheWvueW6lOeahOWFt+S9k+aVsOWAvOWNs+WPr+OAglxcbuWmguaenOacieabtOmrmOe6p+eahOmcgOaxgu+8iOWmguavj+S4quWMuuWfn+Wuneefs+aVsOWAvOWPmOWMlu+8ie+8jOivpuingWRvY+aWh+aho+WGheeahOWBmuazleivtOaYjuOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiOSw1XCI6IFtcbiAgICAgICAgICAgIFwi5q+P5bGC5qW855qEIGNhbkZseVRvIOWGs+WumuS6huivpealvOWxguiDveWQpuiiq+mjnuWIsOOAglxcblxcbuS4jeiDveiiq+mjnuWIsOeahOalvOWxguS5n+aXoOazleS9v+eUqOalvOWxguS8oOmAgeWZqOOAglwiLFxuICAgICAgICAgICAgXCLpo57ooYznmoTmpbzlsYLpobrluo/nlLEgbWFpbi5qcyDkuK0gZmxvb3JJZHMg5Yqg6L296aG65bqP5omA5Yaz5a6a44CCXFxuXFxu5piv5ZCm5b+F6aG75Zyo5qW85qKv6L655L2/55So5qW85Lyg5Zmo55SxIGRhdGEuanMg5Lit55qE57O757ufRmxhZ+aJgOWGs+WumuOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiMTAsNVwiOiBbXG4gICAgICAgICAgICBcIuegtOWimemVkOaYr+egtOmdouWJjeeahOWimeWjgei/mOaYr+Wbm+S4quaWueWQkeeahOWimeWjge+8jOeUsWRhdGEuanPkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCI4LDRcIjogW1xuICAgICAgICAgICAgXCLngrjlvLnmmK/lj6rog73ngrjpnaLliY3nmoTmgKrnianov5jmmK/lm5vkuKrmlrnlkJHnmoTmgKrnianvvIznlLFkYXRhLmpz5Lit55qE57O757ufRmxhZ+aJgOWGs+WumuOAglxcbuWmguWPquiDveeCuOWJjeaWueaAqueJqeWImeWSjOS4iumdoueahOWco+mUpOetieS7t+OAglxcbuS4jeiDveiiq+eCuOeahOaAqueJqeWcqGVuZW15c+S4reWPr+S7peWumuS5ie+8jOWPr+WPguingeagt+adv+mHjOm7keiho+mtlOeOi+WSjOm7keaal+Wkp+azleW4iOeahOWGmeazleOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiMTAsNFwiOiBbXG4gICAgICAgICAgICBcIuKAnOS4iualvOKAneWSjOKAnOS4i+alvOKAneeahOebruagh+WxgueUsSBtYWluLmpzIOeahCBmbG9vcklkc+mhuuW6j+aJgOWGs+WumuOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiOSwyXCI6IFtcbiAgICAgICAgICAgIFwi6K+l6YGT5YW36buY6K6k5piv5aSn6buE6Zeo6ZKl5YyZ77yM5aaC6ZyA5pS55Li66ZKl5YyZ55uS55u05o6l5L+u5pS5IGRhdGEuanMg5Lit55qE57O757ufRmxhZ+WNs+WPr+OAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiMTAsMlwiOiBbXG4gICAgICAgICAgICBcIuWxoOm+meWMlemmluebruWJjeacquiiq+WumuS5ie+8jOWPr+iDvemcgOimgeiHquihjOWunueOsOWKn+iDveOAglxcbuacieWFs+WmguS9leWunueOsOS4gOS4qumBk+WFt+WKn+iDveWPguingWRvY+aWh+aho+OAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiMTIsN1wiOiBbXG4gICAgICAgICAgICBcIuWcqCBkYXRhLmpzIOeahOezu+e7n0ZsYWfkuK3orr7nva7mmK/lkKblkK/nlKjoo4XlpIfmoI/jgIJcXG7lpoLmnpzkuI3lkK/nlKjliJnoo4XlpIfkvJrnm7TmjqXlop7liqDlsZ7mgKfjgIJcIlxuICAgICAgICBdLFxuICAgICAgICBcIjEyLDZcIjogW1xuICAgICAgICAgICAgXCLlnKggZGF0YS5qcyDnmoTns7vnu59GbGFn5Lit6K6+572u5piv5ZCm5ZCv55So6KOF5aSH5qCP5oyJ6ZKu44CCXFxu5aaC5p6c5ZCv55So5YiZ6KOF5aSH5qCP5oyJ6ZKu5Lya5pu/5Luj5qW85Lyg5oyJ6ZKu44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMiw1XCI6IFtcbiAgICAgICAgICAgIFwi6KOF5aSH55qE56eN57G755Sx5YWo5aGU5bGe5oCn5Lit55qEZXF1aXBOYW1l5Yaz5a6aLHR5cGXnmoTlgLzlsLHmmK/or6XnsbvlnovlnKhlcXVpcE5hbWXkuK3nmoTkvY3mrKHvvIzkvovlpoLpu5jorqTmg4XlhrXkuItlcXVpcHR5cGXkuLow5Luj6KGo5q2m5Zmo77yM5ZCM5pe25Y+q5pyJdHlwZeS4ujDnmoToo4XlpIfnmoRhbmltYXRl5bGe5oCn55Sf5pWIXCJcbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJhZnRlck9wZW5Eb29yXCI6IHtcbiAgICAgICAgXCIxMSwxMlwiOiBbXG4gICAgICAgICAgICBcIuS9oOW8gOS6huS4gOS4que7v+mXqO+8jOinpuWPkeS6huS4gOS4qmFmdGVyT3BlbkRvb3Lkuovku7ZcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcImNhbm5vdE1vdmVcIjoge30sXG4gICAgXCJiZ21hcFwiOiBbXG4gICAgWzEwMTg4LDEwMTg5LDEwMTkzLDEwMTk0LDEwMTk1LCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsxMDE5NiwxMDE5NywxMDE4NSwgIDAsICAwLCAgMCwxMDE4NSwxMDE4NiwxMDE4NywgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXG5dLFxuICAgIFwiZmdtYXBcIjogW1xuXG5dLFxuICAgIFwid2lkdGhcIjogMTMsXG4gICAgXCJoZWlnaHRcIjogMTMsXG4gICAgXCJhdXRvRXZlbnRcIjoge31cbn0iLCJtYWluLmZsb29ycy5zYW1wbGUxPVxue1xuXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxuXCJ0aXRsZVwiOiBcIuagt+advyAxIOWxglwiLFxuXCJuYW1lXCI6IFwiMVwiLFxuXCJjYW5GbHlUb1wiOiB0cnVlLFxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyYXNzXCIsXG5cImltYWdlc1wiOiBbXG4gICAgW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBcImJnLmpwZ1wiLFxuICAgICAgICAwXG4gICAgXVxuXSxcblwid2VhdGhlclwiOiBbXG4gICAgXCJzbm93XCIsXG4gICAgNlxuXSxcblwiaXRlbV9yYXRpb1wiOiAxLFxuXCJtYXBcIjogW1xuICAgIFsgIDcsMTMxLCAgOCwxNTIsICA5LDEzMCwgMTAsMTUyLDE2NiwxNjUsMTMyLDE2NSwxNjZdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMTUyLDE2NSwxNjQsICAwLDE2MiwxNjVdLFxuICAgIFsxNTIsMTUyLDE1MiwxNTIsMTIxLDE1MiwxNTIsMTUyLCAgMCwgIDAsMjI5LCAgMCwgIDBdLFxuICAgIFsgNDMsIDMzLCA0NCwxNTEsICAwLCAgMCwgIDAsMTUyLDE2NSwxNjEsICAwLDE2MywxNjVdLFxuICAgIFsgMjEsIDIyLCAyMSwxNTEsICAwLCAgMCwgIDAsMTUyLDE2NiwxNjUsICAwLDE2NSwxNjZdLFxuICAgIFsxNTEsMjQ1LDE1MSwxNTEsICAwLCA4NywgIDAsMTUyLDE1MiwxNTIsIDg1LDE1MywxNTNdLFxuICAgIFsgIDAsMjQ2LCAgMCwxNTEsICAwLCAgMCwgIDAsMTUyLDE1MiwyMjEsICAwLDIyMSwxNTNdLFxuICAgIFsyNDYsICAwLDI0NiwxNTEsICAwLCAgMCwgIDAsMTIxLCA4NSwgIDAsICAwLCAgMCwxNTNdLFxuICAgIFsxNTEsMjQ2LDE1MSwxNTEsICAwLDE1MywxNTMsMTUzLDE1MywxNTMsMTUzLDE1MywxNTNdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMTY0LCAgMCwgIDAsMTYzLCAgMCwgIDBdLFxuICAgIFsgIDEsICAxLCAgMSwgIDEsICAwLCAyMCwgIDAsICAwLCAgMCwxNjIsICAwLDE2MSwgIDBdLFxuICAgIFsgIDEsICAwLDEyMywgIDEsICAwLCAyMCwxMjQsICAwLDEyMSwgIDAsMTIyLCAgMCwxMjZdLFxuICAgIFsgIDEsICAwLCAgMCwgIDEsIDg4LCAyMCwgODYsICAwLCAgMCwgIDAsICAwLCAgMCwxMjJdXG5dLFxuXCJmaXJzdEFycml2ZVwiOiBbXSxcblwiZXZlbnRzXCI6IHtcbiAgICBcIjQsMTBcIjogW1xuICAgICAgICBcIlxcdFvmoLfmnb/mj5DnpLpd5pys5bGC5qW85bCG5Lya5a+55ZCE57G75LqL5Lu26L+b6KGM5LuL57uN44CCXCIsXG4gICAgICAgIFwi5bem6L655piv5LiA5Liq5Lu/NTDlsYLnmoTpmbfpmLHlgZrms5XvvIzkuIrmlrnmmK/llYblupfjgIHlv6vmjbfllYblupfnmoTkvb/nlKjmlrnms5XvvIzlj7PkuIrmmK/kuIDkuKrlhbjlnovnmoTmnYDmgKrlvIDpl6jnmoTkvovlrZDvvIzlj7PkuIvmmK/lkITnsbvlj6/og73nmoROUEPkuovku7bjgIJcIixcbiAgICAgICAgXCLmnKzmoLfmnb/nm67liY3mlK/mjIHnmoTkuovku7bliJfooajlpKfoh7TmnInvvJpcXG50ZXh0OiDmmL7npLrkuIDmrrXmloflrZfvvIjmr5TlpoLkvaDnjrDlnKjmraPlnKjnnIvliLDnmoTvvIlcXG50aXA6IOW3puS4iuinkuaYvuekuuaPkOekulxcbnNob3c6IOS9v+S4gOS4quS6i+S7tuacieaViO+8iOWPr+ingeOAgeWPr+iiq+S6pOS6ku+8iVxcbmhpZGU6IOS9v+S4gOS4quS6i+S7tuWkseaViO+8iOS4jeWPr+ingeOAgeS4jeWPr+iiq+S6pOS6ku+8iVxcbnRyaWdnZXI6IOinpuWPkeWPpuS4gOS4quWcsOeCueeahOS6i+S7tlxcbmFuaW1hdGU6IOaYvuekuuWKqOeUu1xcbmJhdHRsZTog5by65Yi25ZKM5p+Q5oCq54mp5oiY5paXXFxub3BlbkRvb3I6IOaXoOmcgOmSpeWMmeW8gOmXqO+8iOS+i+WmguacuuWFs+mXqOOAgeaal+Wime+8iVwiLFxuICAgICAgICBcIm9wZW5TaG9wOiDmiZPlvIDkuIDkuKrlhajlsYDllYblupdcXG5kaXNhYmxlU2hvcDog56aB55So5LiA5Liq5YWo5bGA5ZWG5bqXXFxuY2hhbmdlRmxvb3I6IOS8oOmAgeWLh+Wjq+WIsOafkOWxguafkOS9jee9rlxcbmNoYW5nZVBvczog5Lyg6YCB5YuH5aOr5Yiw5b2T5bGC5p+Q5L2N572u77yb6L2s5ZCRXFxuc2hvd0ltYWdlOiDmmL7npLrlm77niYdcXG5zZXRGZzog5pu05pS555S76Z2i6Imy6LCDXFxuc2V0V2VhdGhlcjog5pu05pS55aSp5rCUXFxubW92ZTog56e75Yqo5LqL5Lu25pWI5p6cXFxubW92ZUhlcm86IOenu+WKqOWLh+Wjq+aViOaenFxcbnBsYXlCZ206IOaSreaUvuafkOS4quiDjOaZr+mfs+S5kFxcbnBhdXNlQmdtOiDmmoLlgZzog4zmma/pn7PkuZBcXG5yZXN1bWVCZ206IOaBouWkjeiDjOaZr+mfs+S5kOeahOaSreaUvlxcbnBsYXlTb3VuZDog5pKt5pS+5p+Q5Liq6Z+z6aKRXCIsXG4gICAgICAgIFwiaWY6IOadoeS7tuWIpOaWrVxcbmNob2ljZXM6IOaPkOS+m+mAiemhuVxcbnNldFZhbHVlOiDorr7nva7li4flo6vlsZ7mgKfpgZPlhbfvvIzmiJbmn5DkuKrlj5jph48vZmxhZ1xcbnVwZGF0ZTog5pu05paw54q25oCB5qCP5ZKM5Zyw5Zu+5pi+5LykXFxud2luOiDojrflvpfog5zliKnvvIjmuLjmiI/pgJrlhbPvvIlcXG5sb3NlOiDmuLjmiI/lpLHotKVcXG5zbGVlcDog562J5b6F5aSa5bCR5q+r56eSXFxuZXhpdDog56uL5Yi757uT5p2f5b2T5YmN5LqL5Lu2XFxucmV2aXNpdDog56uL5Yi757uT5p2f5LqL5Lu25bm26YeN5paw6Kem5Y+RXFxuZnVuY3Rpb246IOiHquWumuS5iUpT6ISa5pysXFxuXFxu5pu05aSa5pSv5oyB55qE5LqL5Lu26L+Y5Zyo57yW5YaZ5Lit77yM5qyi6L+O5oKo5a6d6LS155qE5oSP6KeB44CCXCIsXG4gICAgICAgIFwi5pyJ5YWz5ZCE5LqL5Lu255qE5qC35L6L77yM5Y+v5Y+C6KeB5pys5bGC5LiA5LqbTlBD55qE5YaZ5rOV44CCXFxu5omA5pyJ5LqL5Lu25qC35L6L5pys5bGC6YO95pyJ5LuL57uN44CCXFxuXFxu5LiA5Liq6Ieq5a6a5LmJ5LqL5Lu25aSE55CG5a6M5ZCO77yM6ZyA6KaB6LCD55Soe1xcXCJ0eXBlXFxcIjogXFxcImhpZGVcXFwifeivpeS6i+S7tuaJjeS4jeS8muWGjeasoeWHuueOsOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCIxLDVcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjEsNlwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiMCw3XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCIyLDdcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjEsOFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiMSw3XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiAxNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W3JlZEtpbmdd5qyi6L+O5p2l5Yiw6a2U5aGU77yM5L2g5piv56ys5LiA55m+5L2N5oyR5oiY6ICF44CCXFxu6Iul5L2g6IO95omT6LSl5oiR5omA5pyJ55qE5omL5LiL77yM5oiR5bCx5LiO5L2g5LiA5a+55LiA55qE5Yaz5paX44CCXFxu546w5Zyo5L2g5b+F6aG75o6l5Y+X5oiR55qE5a6J5o6S44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeS7gOS5iO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsvMTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmRlZlwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czpkZWYvMTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0Q3VydGFpblwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogMTI1MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDcwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJjaGFuZ2VGbG9vclwiLFxuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjIsMTFcIjogW1xuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd5ZaC77yB6YaS6YaS77yB5b+r6YaS6YaS77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldEN1cnRhaW5cIixcbiAgICAgICAgICAgIFwidGltZVwiOiAxNTAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d6aKd77yM5oiR6L+Z5piv5Zyo5LuA5LmI5Zyw5pa577yfXCIsXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3kvaDooqvprZTnjovmipPkuobotbfmnaXmiZTov5vkuobnm5Hni7HvvIzlkozmiJHlhbPlnKjkuobkuIDotbfvvIzkvYbmmK/lubjov5DnmoTmmK/miJHlnKjmmKjlpKnliJrliJrmjJblpb3kuIDmnaHotorni7HnmoTmmpfpgZPvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3miJHlhYjotbDkuobvvIznpZ3kvaDlpb3ov5DvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDc1MCxcbiAgICAgICAgICAgIFwic3RlcHNcIjogW1xuICAgICAgICAgICAgICAgIFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJkb3duXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCLkuIrpnaLmmK/kuKptb3Zl5LqL5Lu277yM5Y+v5Lul5a+5TlBD562J6L+b6KGM56e75Yqo44CCXFxu6K+m6KeB5qC35p2/5Lit5bCP5YG35LqL5Lu255qE5YaZ5rOV44CCXCIsXG4gICAgICAgIFwiXFx0W2hlcm9d5oCO5LmI6LeR55qE6L+Z5LmI5b+rLi4uXCJcbiAgICBdLFxuICAgIFwiNCwyXCI6IFtcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3mnKzloZTnmoTllYblupfmnInkuKTnsbvvvIzlhajlsYDllYblupflkozpnZ7lhajlsYDllYblupfjgIJcXG5cXG7miYDosJPpnZ7lhajlsYDllYblupfvvIzlsLHnsbvkvLzkuo7lj7PkuIvop5LpgqPkuKrljZbpkqXljJnnmoTogIHkurrkuIDmoLfvvIzkuIDlrpropoHnorDliLDmiY3og73op6blj5Hkuovku7bjgIJcXG5cXG7ogIzlhajlsYDllYblupfvvIzliJnog73lnKjlv6vmjbfllYblupfkuK3nm7TmjqXkvb/nlKjjgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3opoHms6jlhozkuIDkuKrlhajlsYDllYblupfvvIzkvaDpnIDopoHlnKggZGF0YS5qcyDkuK3vvIzmib7liLAgc2hvcHPvvIzlubblnKjlhoXmt7vliqDkvaDnmoTllYblupfkv6Hmga/jgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3llYblupfkv6Hmga/mt7vliqDlkI7vvIzlj6/ku6XlnKjpnIDopoHnmoTkuovku7blpITosIPnlKh7XFxcInR5cGVcXFwiOiBcXFwib3BlblNob3BcXFwifeadpeaJk+W8gOS9oOa3u+WKoOeahOWFqOWxgOWVhuW6l+OAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWcqOS4iumdoueahOS+i+WtkOmHjO+8jOW3pui+ueaYr+S4gOS4quS7vzUw5bGC55qE6YeR5biB5ZWG5bqX77yM5Y+z6L655piv5LiA5Liq5Lu/MjTlsYLnmoTnu4/pqozllYblupfjgIJcXG5cXG7llYblupfooqvorr/pl67lkI7ljbPlj6/lnKjlv6vmjbfllYblupfkuK3ov5vooYzkvb/nlKjjgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lpoLmnpzkvaDpnIDopoHlnKjmn5DlsYLmmoLml7bnpoHnlKjlv6vmjbfllYblupfvvIzlj6/ku6XlnKhkYXRhLmpz5Lit6K6+572uY2Fubm90VXNlUXVpY2tTaG9w44CCXFxu5aaC5p6c6ZyA6KaB5rC45LmF56aB55So5ZWG5bqX77yM6K+35L2/55Soe1xcXCJ0eXBlXFxcIjpcXFwiZGlzYWJsZVNob3BcXFwifVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiMSwwXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlblNob3BcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJtb25leVNob3AxXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI1LDBcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuU2hvcFwiLFxuICAgICAgICAgICAgXCJpZFwiOiBcImV4cFNob3AxXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI3LDdcIjogW1xuICAgICAgICBcIlxcdFvogIHkurosbWFuXei/meaYr+S4gOS4quWFuOWei+eahOadgOaAquW8gOmXqOOAgeW8uuWItuaImOaWl+S6i+S7tuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI4LDdcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjksN1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgIDdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiMTAsNFwiOiBbXG4gICAgICAgIFwiXFx0W2JsYWNrS2luZ13kvaDnu4jkuo7ov5jmmK/mnaXkuobjgIJcIixcbiAgICAgICAgXCJcXHRbaGVyb13mlL7lvIDmiJHku6znmoTlhazkuLvvvIFcIixcbiAgICAgICAgXCJcXHRbYmxhY2tLaW5nXeWmguaenOaIkeS4jeaEv+aEj+WRou+8n1wiLFxuICAgICAgICBcIlxcdFtoZXJvXeaXoOmcgOWkmuivtO+8jOaLlOWJkeWQp++8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJiYXR0bGVcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJibGFja0tpbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja0tpbmdd5rKh5oOz5Yiw5L2g5bey57uP5Y+Y5b6X6L+Z5LmI5by65aSn5LqGLi4uIOeul+S9oOWOieWus+OAglxcbuWFrOS4u+WwseS6pOe7meS9oOS6hu+8jOivt+WlveWlveWvueWlueOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCIxMCwwXCI6IFtcbiAgICAgICAgXCJcXHRbaGVyb13lhazkuLvvvIzmiJHmnaXmlZHkvaDkuoZ+XCIsXG4gICAgICAgIFwiXFx0W+WFrOS4uyxwcmluY2Vzc13lv6vmlZHmiJHlh7rljrvvvIHmiJHlj5flpJ/ov5nph4zkuobvvIFcIixcbiAgICAgICAgXCJcXHRbaGVyb13lhazkuLvliKvmgJXvvIzmiJHku6zotbDlkKd+XCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIndpblwiLFxuICAgICAgICAgICAgXCJyZWFzb25cIjogXCLmlZHlh7rlhazkuLtcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjYsMTJcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjYsMTFcIjogW1xuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld6YCa6L+H6LCD55SoIHtcXFwidHlwZVxcXCI6IFxcXCJzaG93XFxcIn0g5Y+v5Lul5L2/6ZqQ6JeP55qE5LqL5Lu25pi+56S65Ye65p2l44CCXFxu5q+U5aaC5oiR5LiL6Z2i6L+Z5Liq5py65YWz6Zeo44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIDEyXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3pgJrov4fosIPnlKgge1xcXCJ0eXBlXFxcIjogXFxcIm9wZW5Eb29yXFxcIn0g5Y+v5Lul5peg6ZyA6ZKl5YyZ5omT5byA5LiA5omH6Zeo5oiW5pqX5aKZ44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAxMlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5ZCM5pe277yM5Lmf5Y+v5Lul5a+55YW25a6D5bGC6L+b6KGM5pON5L2c77yM5q+U5aaC5qW85LiL55qE5py65YWz6Zeo77yM546w5Zyo5bey57uP5Li65L2g5omT5byA5LqG44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMTEsXG4gICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XeWmguaenCBzaG93IOaIliBoaWRlIOaMh+WumuS6hiB0aW1lIOWPguaVsO+8jOWImeS7peWKqOeUu+aViOaenOaYvuekuu+8jOaMh+WumueahOWPguaVsOS9nOS4uua2iOWkseaXtumXtO+8iOavq+enku+8ieadpeiuoeeul+OAglwiLFxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld546w5Zyo5Yiw5qW85LiL5p2l5om+5oiR5ZCnflwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjgsMTFcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzptYW5fdGltZXNcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOm1hbl90aW1lcysxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lnKjmloflrZfkuK3kvb/nlKgkeycgJHsgJ33lkowgfSDlj6/ku6XorqHnrpflubbmmL7npLrkuIDkuKrooajovr7lvI/nmoTnu5PmnpzjgIJcXG5cIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3kvovlpoLvvJpcXG7kvaDnmoTlvZPliY3mlLvlh7vlipvmmK8ke3N0YXR1czphdGt977yM6Ziy5b6h5Yqb5pivJHtzdGF0dXM6ZGVmfeOAglxcbuaUu+mYsuWSjOeahOWNgeWAjeaYryR7MTAqKHN0YXR1czphdGsrc3RhdHVzOmRlZil977yM5pS76Ziy5LmL56ev5pivJHtzdGF0dXM6YXRrKnN0YXR1czpkZWZ944CCXFxu5L2g5pyJJHtpdGVtOnllbGxvd0tleX3miorpu4TpkqXljJnvvIwke2l0ZW06Ymx1ZUtleX3miorok53pkqXljJnvvIwke2l0ZW06cmVkS2V5feaKiue6oumSpeWMmeOAglxcbuS9oOaciSR7aXRlbTpwaWNrYXhlfeS4quegtO+8jCR7aXRlbTpib21ifeS4queCuO+8jCR7aXRlbTpjZW50ZXJGbHl95Liq6aOe44CCXFxu6L+Z5piv5L2g56ysJHtmbGFnOm1hbl90aW1lc33mrKHlkozmiJHlr7nor53jgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lkIzml7bvvIzkvaDkuZ/lj6/ku6XpgJrov4d7XFxcInR5cGVcXFwiOiBcXFwic2V0VmFsdWVcXFwifeadpeiuvue9ruS4gOS4quWLh+Wjq+eahOWxnuaAp+OAgemBk+WFt++8jOaIluafkOS4qkZsYWfjgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3kvovlpoLvvJpcXG7njrDlnKjmiJHlsIborqnkvaDnmoTmlLvpmLLmj5DljYc1MCXvvIzlho3lsIbmlLvpmLLlkoznmoTljYHlgI3liqDliLDnlJ/lkb3lgLzkuIrjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6YXRrKjEuNVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmRlZioxLjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmhwXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmhwKzEwKihzdGF0dXM6YXRrK3N0YXR1czpkZWYpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl3lho3pgIHkvaA1MDDph5HluIHvvIwxMDAw57uP6aqM77yMMeegtDLngrgz6aOe77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXkrNTAwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpleHBlcmllbmNlXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmV4cGVyaWVuY2UrMTAwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnBpY2theGVcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnBpY2theGUrMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJvbWJcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJvbWIrMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmNlbnRlckZseVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Y2VudGVyRmx5KzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXXN0YXR1czp4eHgg5Luj6KGo5YuH5aOr55qE5p+Q5Liq5bGe5oCn44CCXFxu5YW25LiteHh45Y+v5Y+WaHAsIGF0aywgZGVmLCBtZGVmLCBtb25leSxleHBlcmllbmNl6L+Z5Yeg6aG544CCXFxuXFxuaXRlbTp4eHgg5Luj6KGo5YuH5aOr55qE5p+Q5Liq6YGT5YW355qE5Liq5pWw44CCXFxueHh45Li66YGT5YW3SUTvvIzlhbfkvZPlj6/lj4Lop4FpdGVtcy5qc+S4reeahOWumuS5ieOAglxcblxcbmZsYWc6eHh4IOS7o+ihqOafkOS4quiHquWumuS5iUZsYWfmiJblj5jph4/jgIJcXG54eHjkuLpGbGFnL+WPmOmHj+WQje+8jOWPr+S7peiHquihjOWumuS5ie+8jOeUseWtl+avjeOAgeaVsOWtl+WSjOS4i+WIkue6v+e7hOaIkOOAglxcbuacquWumuS5iei/h+iAjOebtOaOpeWPlueUqOeahEZsYWfpu5jorqTlgLzkuLpmYWxzZeOAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS9oOeOsOWcqOWPr+S7pemHjeaWsOWSjOaIkei/m+ihjOWvueivne+8jOi/m+S4gOatpeeci+WIsOWxnuaAp+WAvOeahOaUueWPmOOAglwiXG4gICAgXSxcbiAgICBcIjEwLDExXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzp3b21hbl90aW1lcz09MFwiLFxuICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d6L+Z5piv5Liq5b6I5aSN5p2C55qE5L6L5a2Q77yM5a6D5bCG5pWZ5Lya5L2g5aaC5L2V5L2/55SoaWYg6K+t5Y+l6L+b6KGM5p2h5Lu25Yik5pat77yM5Lul5Y+KIGNob2ljZXMg5o+Q5L6b6YCJ6aG55p2l5L6b55So5oi36L+b6KGM6YCJ5oup44CCXCIsXG4gICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeesrOS4gOasoeiuv+mXruaIkeWwhuaYvuekuui/meauteaWh+Wtl++8m+S7juesrOS6jOasoeW8gOWni+WwhuS8muWQkeS9oOWHuuWUrumSpeWMmeOAglxcbumSpeWMmeS7t+agvOWwhumaj+edgOiuv+mXruasoeaVsOmAkuWinuOAglxcbuW9k+WQiOiuoeWHuuWUruS6huS4g+aKiumSpeWMmeWQju+8jOWwhumAgeS9oOS4gOaKiuWkp+m7hOmXqOmSpeWMme+8jOW5tua2iOWkseS4jeWGjeWHuueOsOOAglwiLFxuICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5npg6jliIbnmoTpgLvovpHmr5TovoPplb/vvIzor7fnu4blv4PnnIvmoLfmnb/nmoTlhpnms5XvvIzmmK/lvojlrrnmmJPnnIvmh4LlubbnkIbop6PnmoTjgIJcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFsc2VcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzPT04XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g6LSt5Lmw55qE6ZKl5YyZ5bey57uP5aSf5aSa5LqG77yM5YaN57un57ut5Y2W57uZ5L2g55qE6K+d5oiR5Lya5pyJ5Y2x6Zmp55qE44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d55yL5Zyo5L2g6LSh54yu57uZ5oiR6L+Z5LmI5aSa6ZKx55qE5Lu95LiK77yM6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ5ZCn77yM5biM5pyb5L2g6IO95aW95aW955So5a6D44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJpZ0tleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJpZ0tleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5oiR5YWI6LWw5LqG77yM5ouc5oucflwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaG9pY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFx0W+iAgeS6uix3b21hbl3lsJHlubTvvIzkvaDpnIDopoHpkqXljJnlkJfvvJ9cXG7miJHov5nph4zmnInlpKfmiornmoTvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob2ljZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLpu4TpkqXljJnvvIgkezkrZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj05K2ZsYWc6d29tYW5fdGltZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDkrZmxhZzp3b21hbl90aW1lcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93S2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06eWVsbG93S2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6JOd6ZKl5YyZ77yIJHsxOCsyKmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MTgrMipmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgxOCsyKmZsYWc6d29tYW5fdGltZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJsdWVLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpibHVlS2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi57qi6ZKl5YyZ77yIJHszNis0KmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MzYrNCpmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgzNis0KmZsYWc6d29tYW5fdGltZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnJlZEtleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnJlZEtleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuemu+W8gFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6d29tYW5fdGltZXMrMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjEyLDExXCI6IFtcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuTWFnaWNpYW5d5L2/55SoIHtcXFwidHlwZVxcXCI6XFxcImZ1bmN0aW9uXFxcIn0g5Y+v5Lul5YaZ6Ieq5a6a5LmJ55qESlPohJrmnKzjgIJcXG7mnKzloZTmlK/mjIHnmoTmiYDmnInkuLvopoFBUEnkvJrlnKhkb2PmlofmoaPlhoXnu5nlh7rjgIJcIixcbiAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuTWFnaWNpYW5d5L6L5aaC6L+Z5Liq5L6L5a2Q77ya5Y2z5bCG5by55Ye65LiA5Liq6L6T5YWl56qX5Y+j77yM54S25ZCO5Lya5bCG5L2g55qE6L6T5YWl57uT5p6c55u05o6l5Yqg5Yiw5L2g55qE5pS75Ye75Yqb5LiK44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLor7fovpPlhaXkvaDopoHliqDmlLvlh7vlipvnmoTmlbDlgLzvvJpcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOmlucHV0PjBcIixcbiAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6YXRrK2ZsYWc6aW5wdXRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5pON5L2c5oiQ5Yqf77yM5pS75Ye7KyR7ZmxhZzppbnB1dH1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCLmk43kvZzmiJDlip/vvIzmlLvlh7srJHtmbGFnOmlucHV0fVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmYWxzZVwiOiBbXVxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3lhbfkvZPlj6/lj4Lop4HmoLfmnb/kuK3mnKzkuovku7bnmoTlhpnms5XjgIJcIlxuICAgIF0sXG4gICAgXCIxMCwxMlwiOiBudWxsLFxuICAgIFwiMTIsMTJcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzd2l0Y2hcIixcbiAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgXCJjYXNlTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3njrDlnKjkvb/nlKhzd2l0Y2jmlLnlhpnov5nkuKrkvovlrZBcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcIjhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOi0reS5sOeahOmSpeWMmeW3sue7j+Wkn+WkmuS6hu+8jOWGjee7p+e7reWNlue7meS9oOeahOivneaIkeS8muacieWNsemZqeeahOOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeeci+WcqOS9oOi0oeeMrue7meaIkei/meS5iOWkmumSseeahOS7veS4iu+8jOmAgeS9oOS4gOaKiuWkp+m7hOmXqOmSpeWMmeWQp++8jOW4jOacm+S9oOiDveWlveWlveeUqOWug+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpiaWdLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpiaWdLZXkrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeaIkeWFiOi1sOS6hu+8jOaLnOaLnH5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNhc2VcIjogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi5b2T5rKh5pyJ56ym5ZCI55qE5YC855qE5Zy65ZCI5omn6KGM5q2k5LqL5Lu2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hvaWNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcdFvogIHkurosd29tYW5d5bCR5bm077yM5L2g6ZyA6KaB6ZKl5YyZ5ZCX77yfXFxu5oiR6L+Z6YeM5pyJ5aSn5oqK55qE77yBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6buE6ZKl5YyZ77yIJHs5K2ZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49OStmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSg5K2ZsYWc6d29tYW5fdGltZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnllbGxvd0tleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnllbGxvd0tleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuiTnemSpeWMme+8iCR7MTgrMipmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTE4KzIqZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMTgrMipmbGFnOndvbWFuX3RpbWVzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpibHVlS2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Ymx1ZUtleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIue6oumSpeWMme+8iCR7MzYrNCpmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTM2KzQqZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oMzYrNCpmbGFnOndvbWFuX3RpbWVzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTpyZWRLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpyZWRLZXkrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnprvlvIBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZsYWc6d29tYW5fdGltZXNcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOndvbWFuX3RpbWVzKzFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgfVxuICAgIF1cbn0sXG5cImNoYW5nZUZsb29yXCI6IHtcbiAgICBcIjQsMTJcIjoge1xuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiNSw1XCI6IHtcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxuICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCIsXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIlxuICAgIH0sXG4gICAgXCIxMCwxMlwiOiBudWxsXG59LFxuXCJhZnRlckJhdHRsZVwiOiB7XG4gICAgXCI5LDZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzpkb29yXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzpkb29yKzFcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjExLDZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzpkb29yXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzpkb29yKzFcIlxuICAgICAgICB9XG4gICAgXVxufSxcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxuXCJiZ21hcFwiOiBbXG5cbl0sXG5cImZnbWFwXCI6IFtcblxuXSxcblwiYXV0b0V2ZW50XCI6IHtcbiAgICBcIjEwLDVcIjoge1xuICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOmRvb3I9PTJcIixcbiAgICAgICAgICAgIFwiY3VycmVudEZsb29yXCI6IHRydWUsXG4gICAgICAgICAgICBcInByaW9yaXR5XCI6IDAsXG4gICAgICAgICAgICBcImRlbGF5RXhlY3V0ZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibXVsdGlFeGVjdXRlXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbn0iLCJtYWluLmZsb29ycy5zYW1wbGUyPVxue1xuXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxuXCJ0aXRsZVwiOiBcIuagt+advyAyIOWxglwiLFxuXCJuYW1lXCI6IFwiMlwiLFxuXCJjYW5GbHlUb1wiOiB0cnVlLFxuXCJjYW5Vc2VRdWlja1Nob3BcIjogdHJ1ZSxcblwiY2Fubm90Vmlld01hcFwiOiBmYWxzZSxcblwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxuXCJpbWFnZXNcIjogW10sXG5cIml0ZW1fcmF0aW9cIjogMSxcblwibWFwXCI6IFtcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwxMjEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgNDUsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4OCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4NywgIDAsICAwLCAgMCwgIDAsMTIyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXG5dLFxuXCJ3aWR0aFwiOiAyNixcblwiaGVpZ2h0XCI6IDI2LFxuXCJmaXJzdEFycml2ZVwiOiBbXSxcblwiZXZlbnRzXCI6IHtcbiAgICBcIjMsMlwiOiBbXG4gICAgICAgIFwiMTIzXCJcbiAgICBdLFxuICAgIFwiMTIsMTJcIjogW1xuICAgICAgICBcIjIzNFwiXG4gICAgXVxufSxcblwiY2hhbmdlRmxvb3JcIjoge1xuICAgIFwiNiwxMFwiOiB7XG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTFcIixcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxuICAgIH0sXG4gICAgXCI3LDEyXCI6IHtcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxuICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCJcbiAgICB9XG59LFxuXCJhZnRlckJhdHRsZVwiOiB7fSxcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxuXCJ1cEZsb29yXCI6IG51bGwsXG5cImJnbWFwXCI6IFtcblxuXSxcblwiZmdtYXBcIjogW1xuXG5dLFxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTM9XG57XG5cImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXG5cInRpdGxlXCI6IFwi5Li75aGUIDQwIOWxglwiLFxuXCJuYW1lXCI6IFwiNDBcIixcblwiY2FuRmx5VG9cIjogZmFsc2UsXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxuXCJkZWZhdWx0R3JvdW5kXCI6IFwic25vd0dyb3VuZFwiLFxuXCJpbWFnZXNcIjogW10sXG5cImNvbG9yXCI6IFtcbiAgICAyNTUsXG4gICAgMCxcbiAgICAwLFxuICAgIDAuM1xuXSxcblwid2VhdGhlclwiOiBbXG4gICAgXCJyYWluXCIsXG4gICAgMTBcbl0sXG5cImJnbVwiOiBcImJnbS5tcDNcIixcblwiaXRlbV9yYXRpb1wiOiAxLFxuXCJtYXBcIjogW1xuICAgIFsgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgODcsICA1LCAgNSwgIDUsICA1LCAgNSwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgODUsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsMjQ3LCAgMSwyNDcsICAxLDI0NywgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICAxLDI0NywyNDcsMjQ3LCAgMSwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICAxLDI0NywgMzAsMjQ3LCAgMSwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsMjQ3LCAgMSwxMjQsICAxLDI0NywgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwxMjMsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgMSwgIDAsICAxLCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgNCwgIDAsICA0LCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA0LCAgNCwgIDQsICA0LCAgNCwgODUsICA0LCAgNCwgIDQsICA0LCAgNCwgIDVdLFxuICAgIFsgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgODgsICA1LCAgNSwgIDUsICA1LCAgNSwgIDVdXG5dLFxuXCJmaXJzdEFycml2ZVwiOiBbXG4gICAgXCJcXHRb5a6e5oiY77yBXeacrOalvOWwhuWwneivleWkjeWIu+OAiuWuv+WRveeahOaXi+W+i+OAizQwRuWJp+aDheOAglwiXG5dLFxuXCJldmVudHNcIjoge1xuICAgIFwiNiwxMVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNiwxMFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZG9vci5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjYsN1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeadsOWFi++8jOS9oOeptuern+aYr+S7gOS5iOS6uu+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeKApuKAplwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13miJHku6zigKbigKbmmK/mnIvlj4vlr7nlkKfvvJ9cXG7mmK/mnIvlj4vlsLHlupTor6Xnm7jkupLkv6Hku7vlr7nlkKfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3igKbigKbkuovliLDlpoLku4rkuZ/msqHmnInku4DkuYjlpb3pmpDnnpLnmoTkuobjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3msqHplJnvvIzmiJHlsLHmmK/ov5nkuIDliIfnmoTog4zlkI7kuLvosIvjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgXCJzdGVwc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR55qE55yf5ZCN5Li64oCU4oCU6buR5pqX5aSn5rOV5biI77yM56ys5Zub5Yy65Z+f55qE5aS055uu44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeWRteWRte+8jOS4jeefpemBk+S4uuS7gOS5iO+8jOaIkeern+eEtuWvueS6i+aDhei1sOWIsOeOsOWcqOi/meS4gOatpeavq+S4jeaEn+inieaEj+WkluOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ku6XmnbDlhYvnmoTlkI3kuYnliKnnlKjkuobkvaDov5nkuYjkuYXvvIznnJ/mmK/mirHmrYnllYrjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d55yf5q2j55qE5p2w5YWL546w5Zyo5Zyo5ZOq6YeM77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeebl+i0vOadsOWFi+i/meS4quS6uuexu+S7juacquWtmOWcqOi/h++8jOS7luWPquaYr+aIkeeUqOadpeaOpei/keS9oOeahOS4gOWJr+earuWbiuiAjOW3suOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbov5nmoLfllYrvvIzlkbXlkbXjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Li65LuA5LmI5L2g55yL5LiK5Y675Lid5q+r5LiN55Sf5rCU77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeWkmuS6j+S6humsvOW4ne+8jOaIkeeOsOWcqOeahOiEvuawlOWlveW+l+i/nuaIkeiHquW3semDveWus+aAleOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13or7TotbfmnaXmiJHov5jlvpflpb3lpb3mhJ/osKLkvaDlkaLvvIzlpoLmnpzmsqHmnInmnbDlhYvigKbigKbkvaDnmoTluK7liqnvvIzmiJHml6nlsLHmrbvlnKjnrKzkuIDljLrln5/kuobjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5LiN6K665L2g55qE55uu55qE5aaC5L2V77yM5L2g55qE5omA5L2c5omA5Li66YO95piv5a+55oiR5pyJ5Yip55qE44CC5LiN5piv5ZCX77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeiDveWkn+WmguatpOa3oeWumueahOmdouWvueiDjOWPm++8jOeci+adpei3n+S6lOW5tOWJjeebuOavlO+8jOS9oOehruWunuaIkOmVv+S6huW+iOWkmuWViuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13kupTlubTliY3vvJ/igKbigKbpu5HmmpflpKfms5XluIjvvIzlnKjov5nkuYvliY3vvIzmiJHku6zlpb3lg4/ntKDmnKrosIvpnaLlkKfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LqU5bm05YmN6YKj5Zy65bGg5Z+O5L2g5bqU6K+l6L+Z5LiA55Sf6YO95LiN5Lya5b+Y6K6w5ZCn44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeW+iOS4jeW3p++8jOmCo+WcuuWxoOWfjueahOS4u+iwi++8jOS5n+aYr+aIkeOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKZcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d6L+Z5LmI6K+077yM5Ye75Lit5oiR5Y+M5Lqy55qE6YKj6YGT57Sr6Imy6Zeq55S177yM5Lmf5bCx5piv5L2g6YeK5pS+55qE5ZCn4oCm4oCmXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOeahOWPjOS6su+8n+i/meenjeS6i+aDheaIkeaAjuS5iOWPr+iDveS8muiusOW+l++8n1xcbuS9oOmavumBk+WcqOi4qeatu+iaguiageeahOaXtuWAmei/mOS8muS4gOWPquWPquiusOS4i+S7luS7rOeahOagt+WtkOWQl++8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13ogIEg5a2QIOimgSDkvaAg55qEIOWRvVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDlupTor6Xlr7nmiJHlv4PmgIDmhJ/mv4DmiY3lr7nvvIzlpoLmnpzkuI3mmK/pgqPml7bnmoTmiJHnnIvlh7rkuobkvaDpmpDol4/nmoTnqIDmnInli4fogIXkvZPotKjvvIzkvaDnu53lr7nkuI3lj6/og73mtLvliLDku4rlpKnjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Zyo5pqX5Lit5Yqo5omL6ISa6K6p5L2g6YCa6L+H5YuH6ICF6YCJ5ouU55qE5Lq65Lmf5piv5oiR77yM5oiR5LiA55u05LiA55u05Zyo5pqX5Lit5byV5a+85L2g6LWw5Yiw5LuK5aSp6L+Z5LiA5q2l44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaYr+aIkeaVkei1juS6huS4gOaXoOaYr+WkhOeahOS9oOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13kuLrku4DkuYjlj6rmnInmiJHkuIDkuKrkurrmtLvkuobkuIvmnaXvvIHvvIHvvIHvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5Li65LuA5LmI5YGP5YGP5piv5oiR77yB77yB77yB77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWImuaJjeS4jeaYr+ivtOi/h+S6huWQl++8n+WboOS4uuaIkeeci+WHuuS6huS9oOacieeogOacieWLh+iAheS9k+i0qOWViuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDliJrliJrot5/prLzluJ3kuqTov4fmiYvvvIzlupTor6Xlt7Lnu4/lvojmuIXmpZrov5nnqIDmnInli4fogIXkvZPotKjmhI/lkbPnnYDku4DkuYjkuoblkKfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5bCx5Zug5Li65oiR5pyJ6L+Z56eN5L2T6LSo77yM5bCx5LiN5b6X5LiN6IOM6LSf5aaC5q2k5q6L6YW355qE5a6/5ZG95ZCX77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaEmuigou+8gei/meaEj+WRs+edgOWPquimgeaIkeWvueS9oOWKoOS7peW8leWvvOi3n+WfueWFu++8jOS9oOWwseiDveaIkOS4uui/meS4lumXtOWunuWKm+acgOW8uueahOWtmOWcqO+8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbmiYDku6XvvIzkvaDnqbbnq5/mg7PliKnnlKjmiJHlubLku4DkuYjvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5Yip55So5L2g5bmy55qE5LqL5oOF77yM5L2g5LiN5piv5bey57uP5a6M5oiQ5LqG5ZCX77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuS9oOivtOS7gOS5iO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3nn6XkuI3op4npl7TvvIzkvaDlt7Lnu4/lnKjmiJHnmoTmjIflvJXkuIvot5/prLzluJ3mraPpnaLkuqTmiYvlubbkuJTmnYDmjonkuobku5bllYrjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5bCx6L+e5oiR6Lef6ay85bid55qE5a+55Yaz4oCm4oCm5Lmf5piv6KKr5L2g5a6J5o6S5aW95LqG55qE77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOS7rOS4pOS4quS4gOS4quaYr+S6uuexu+WLh+iAhe+8jOS4gOS4quaYr+mtlOeJqeWLh+iAhe+8jOi/n+aXqeS8muacieS6pOaJi+eahOS4gOWkqeOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHlj6rkuI3ov4fmmK/mk43nurXkuobkuIDns7vliJfnmoTov57plIHkuovku7borqnov5nkuIDlpKnmj5Dml6nkuobmlbDljYHlubTliLDmnaXogIzlt7LjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6L+Z5qC35YGa5a+56LCB5pyJ5aW95aSE77yf5LuW5Y+v5piv5L2g5Lus6a2U54mp5LiW55WM55qE5pWR5LiW5Li75ZWK44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4gOS4quaDp+aAleW+geaImO+8jOeIseWlveWSjOW5s+eahOaHpuWkq++8jOS5n+mFjeWPq+aVkeS4luS4u++8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ojrflvpfkuoblipvph4/vvIzljbTlj6rkvJrooqvliqjmjKjmiZPogIzkuI3kuLvliqjlkJHkurrnsbvkuJbnlYzlh7rlh7vvvIzpvp/nvKnlnKjnrKzkuozljLrln5/mg7bmg7bluqbml6XvvIzku5bmoLnmnKzlsLHkuI3phY3mi6XmnInnqIDmnInli4fogIXkvZPotKjjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Li65LqG5LiN6K6p6L+Z56eN5Lq66Zy45Y2g552A56ev57Sv5aSa5bm055qE5bqe5aSn54G16a2C6IO96YeP5peg5L2c5Li677yM5oiR6K6+6K6h6K6p5L2g5p2A5o6J5LqG5LuW44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOayoeaciei+nOi0n+aIkeeahOacn+W+he+8jOaIkOWKn+aImOiDnOS6humCo+S4quW6n+eJqe+8jOeOsOWcqOS9oOS9k+WGhee0r+enr+eahOeBtemtguiDvemHj+KApuKApuS5n+WwseaYr+mtlOWKm++8jOW3sue7j+i+vuWIsOS6huiDvei3n+mtlOeOi+WMueaVjOeahOWcsOatpeOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbmmK/lkJfvvJ/njrDlnKjnmoTmiJHog73kuI7prZTnjovljLnmlYzvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN5q2i5aaC5q2k77yM5L2g546w5Zyo55qE5Yqb6YeP5LmL5by65bCx566X5piv57uf5rK75LiW55WM5Lmf5piv57uw57uw5pyJ5L2Z77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaAjuS5iOagt++8n+imgeS4jeimgeWKoOWFpeaIkeeahOm6vuS4i++8jOi3n+maj+aIkeWOu+W+geaImOS6uuexu+S4lueVjO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13og73kuI7prZTnjovljLnmlYznmoTor53vvIzkuZ/lsLHmmK/or7TjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5oiRIOeOsCDlnKgg5a+5IOS7mCDkvaAg6L+ZIOenjSDmnYIg56KOIOS5nyDnu7Ag57uwIOaciSDkvZkg5ZCnIO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3igKbigKbku4DkuYjvvJ/vvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d562J5LiA5LiL77yB5Yir5Yay5Yqo77yB5L2g5YWI562J5oiR5oqK6L+Z5Yip5a6z5YWz57O755CG5LiA55CG4oCU4oCUXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeS9oOe7meiAgeWtkOmXreWYtOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13ogIHlrZDku4DkuYjpg73kuI3mg7PlkKzjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d6ICB5a2Q546w5Zyo5oOz5YGa55qE5LqL5oOF5Y+q5pyJ5LiA5Lu24oCU4oCUXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeWJgeaOieS9oOeahOWktO+8jOaKiuWug+aUvuWbnuaIkeWPjOS6sueahOWik+WJjeOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjYsNFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNSw0XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI3LDRcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjUsNVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNyw1XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI2LDNcIjoge1xuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWQrOS4jei/m+WOu+S6uuivneeahOigoui0p++8jOWwseimgeeUqOeWvOeXm+adpeeuoeaVme+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZVBvc1wiLFxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lh7rmnaXlkKfvvIHnpoHlv4zigJTigJTntKvnlLXlh7bmnYDpmLXvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oSf5Y+X57ud5pyb5ZCn77yB5Yal6aG95LiN5YyW55qE6KCi6LSn77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGh1bmRlclwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFwiaGVyb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5ZSU4oCm4oCm77yB77yB77yI5ZCQ6KGA77yJXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR55qE6a2U5Yqb5Y+v5piv5YWF6Laz55qE5b6I5ZWK77yB5oiR5Lya5LiA55u05oqY56Oo5Yiw5L2g5bGI5pyN5LqO5oiR5Li65q2i77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Lq657G777yB5aW95aW95oSf5Y+X5ZCn77yB5b2T5Yid5L2g5Lus5pa95Yqg5LqO5oiR55qE55eb6Ium77yB5aaC5LuK5oiR6KaB55m+5YCN5aWJ6L+Y77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNzAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiNCwzXCI6IHtcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI4LDNcIjoge1xuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjQsNlwiOiB7XG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiOCw2XCI6IHtcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI2LDZcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKbmmK/kvaDlkJfvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS4jeimgee7neacm++8jOS5n+S4jeimgeaCsuS8pOOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5L2g5LuO5p2l6YO95LiN5piv54us6Ieq5LiA5Lq65Zyo5YmN6L+b44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lkrHkuIDnm7TvvIzkuIDnm7Tpg73lnKjms6jop4bnnYDkvaDjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeiAjeWwj+iBquaYjueahOS9oOOAgeesqOesqOeahOS9oOWRhuWRhueahOS9oOOAgeiDhuWwj+eahOS9oOOAgeWLh+aVoueahOS9oOW4heawlOeahOS9oOKApuKApuWFqOmDqOWFqOmDqOmDveaYr+S9oOOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5omA5Lul5pS+5b+D5ZCn77yM5peg6K665Y+R55Sf5LuA5LmI77yM5ZKx6YO95Lya6Zmq5Ly05Zyo5L2g6Lqr6L6555qE44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lm6DkuLrkvaDopoHmmK/nprvlvIDmiJHnmoTor53vvIznq4vliLvlsLHkvJrmrbvmjonlkKfvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKblhbblrp7kuIDnm7Tku6XmnaXvvIzmiJHpg73pnZ7luLjmhJ/mv4DkvaDigKbigKZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeesqOibi++8gemDvei/meenjeaXtuWAmeS6huWwseS4jeimgeS9nOWHuuWDj+aYr+S4tOe7iOmBl+iogOeahOWPkeiogOS6huWViu+8ge+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZaC77yB6YKj6L6556m/6KGj5ZOB5ZGz5beu5Yiw5p6B54K555qE6buR5pqX5aSn5rOV5biI77yM5Yir5bem6aG+5Y+z55u86K+055qE5bCx5piv5L2g77yB5L2g5bqU6K+l55+l6YGT5ZKx55qE6Lqr5Lu95ZCn77yfXFxu6L+Y5LiN6YCf6YCf6YCA5LiL77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Y+v5oG24oCm5aSa566h6Zey5LqL55qE5aaW57K+5peP4oCm5piO5piO5Y+q6KaB5YaN6K6p5LuW5om/5Y+X5LiA54K555a855eb5p2l55Om6Kej5LuW55qE5oSP5b+X5Yqb77yM5oiR55qE6K6h5YiS5bCx5oiQ5Yqf5LqG77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lk7zlk7zlk7x+5oqx5q2J5ZOm77yM6L+Z5Liq56yo6JuL55qE5oSP5b+X5Yqb5Y+v5LiN5YOP5L2g5oOz6LGh55qE6YKj5LmI6JaE5byx5ZOm77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN55SY5b+D77yB5oiR5LiN55SY5b+D77yB5aaW57K+5YWs5Li75Y+I5aaC5L2V77yBXFxu5Y+q6KaB5piv6Zi75oyh5oiR55qE77yM5LiN566h5piv6LCB5oiR6YO96KaB6ZOy6Zmk77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nu4jkuo7pnLLlh7rni5Dni7jlsL7lt7TkuobvvIzlhbblrp7lkrHml6nlsLHnnIvlh7rkvaDmnInosIvlj43nmoTlv7XlpLTjgILkvaDnmoTorqHliJLlsLHmmK/mi4nmi6Lov5nlrrbkvJnlhaXkvJnnhLblkI7mjqjnv7vprZTnjovlr7nprZTloZTnmoTnu5/msrvlr7nlkKfvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lkbXlkbXlkbXigKbigKbpgqPkuKrmmI/lurjnmoTprZTnjovvvIzmjozmj6HnnYDpgqPkuYjlup7lpKfnmoTprZTnianlhpvpmJ/ljbTlj6rnn6XpgZPlm7rlrojprZTloZTvvIzogIzkuI3kuLvliqjkvrXnlaXkurrnsbvkuJbnlYzmianlvKDpooblnJ/vvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHlrp7lnKjmmK/nnIvkuI3ov4fnnLzvvIzmiYDku6XmiJHmiY3lhrPlrprmiorov5nkuKrlhbflpIfnqIDmnInli4fogIXkvZPotKjnmoTlrrbkvJnln7nlhbvmiJDmlrDkuIDku7vprZTnjovvvIFcXG7mnaXorqnov5nkuKrkuJbnlYznmoTlir/lipvph43mlrDmtJfniYzvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS9oOinieW+l+S4gOS4qua7oeiEkeWtkOaDs+edgOWbnuWutuenjeeUsOeahOW6n+aftOWLh+iAheS8muaIkOS4uuaUueWPmOS4lueVjOeahOmtlOeOi++8n+S9oOaZg+aZg+iEkeiii+ivleivle+8jOaYr+S4jeaYr+iDveWQrOWIsOWkp+a1t+eahOWjsOmfs++8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaBvOS6uuiHs+aegeeahOWmlueyvuaXj++8geWRteWRteWRteKApuKApuaIkeW5suiEhuS4gOS4jeWBmuS6jOS4jeS8ke+8jOi/nuS9oOS5n+S4gOWdl+aUtuaLvuS6huWQp++8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5Yir5bCP556n5ZKx77yB5ZKx5aW95q255Lmf5piv5aaW57K+5peP6YeM5a6e5Yqb5pWw5LiA5pWw5LqM55qE5a2Y5Zyo77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5Y+q5Lya6ICN5Zi055qu5a2Q55qE5oG85Lq66IuN6J2H77yB5oiR5YCS6KaB55yL55yL5LiA5Z2X54Sm54Kt5Lya5LiN5Lya6K+06K+d77yBXFxu4oCU4oCU5oub6Zu35by577yB77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInlvbmdjaGFuZ1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0aHVuZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5YiH77yM6L+Z54K55Lyk55eb6Lef5LuW5Yia5omN57uP5Y6G55qE6Lqr5b+D5Zyw54ux55u45q+U5qC55pys5bCx5LiN566X5LuA5LmI44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZO877yB57+F6IaA6YO96KKr54On54Sm5LqG6L+Y6KaB5Zi056Gs77yf5L2g6Zq+5LiN5oiQ55yf5Lul5Li65oiR5LiN5Lya5a+55L2g5Yqo55yf5qC877yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6L+Z5re36JuL77yB57uZ5oiR56a75aW56L+c54K577yB77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3vvIHigKbkvaDnjrDlnKjlj5fkuoblvojkuKXph43nmoToh7Tlkb3kvKTvvIzkubHliqjku4DkuYjvvJ9cXG7kuZbjgILliKvmgJXvvIzov5nph4zmnInlkrHpobbnnYDvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWvueS6hu+8jOWSseWGjemXruS9oOS4gOmBje+8jOS9oOaYr+W+iOePjeaDnOiHquW3seaAp+WRveeahOWvueWQp++8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtoZXJvXe+8geKApuetieetieKApuWmlueyvuWwj+WnkO+8jOS9oOS4jeS8muaYr+KApuKApu+8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5ZaC77yM6buR5pqX5aSn5rOV5biI77yM5L2g5L2c5Li66a2U5aGU6YeM5pyA5Y2a5a2m5aSa6K+G55qE6KCi6LSn77yM5bqU6K+l5a+55ZKx5aaW57K+5peP55qE54m55q6K6IO95Yqb5YaN5riF5qWa5LiN6L+H5ZCn77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LuA5LmI77yf77yB6Zq+5LiN5oiQ5L2g5piv5oOz77yB77yB5LiN5Y+v6IO94oCm4oCmXFxu5bCx5Li65LqG5LiA5Liq5ri65bCP55qE5Lq657G777yM5LiN5Y+v55CG5Za777yB77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lk7zlk7zlk7zvvIHkvaDlrrPmgJXnmoTooajmg4Xlj6/nnJ/nvo7lkbPvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeS4jei/h+avlOi1t+i/meS4qu+8jOWSseabtOacn+W+heS9oOWQg+WIsOKAnOWmlueyvuiHqueBreWGsuWHu+KAneS5i+WQjueahOatu+eKtuWTpu+8gX5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3vvIHvvIHkuI3lupTor6XmmK/ov5nmoLfnmoTvvIHmiJHlroznvo7nmoTorqHliJLnq5/nhLbkvJrooqvkuIDlj6rlsI/lsI/nmoTlppbnsr7noLTlnY/vvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13kuI3opoHvvIHigKbigKbljYPkuIfkuI3opoHvvIHigKbigKbkuLrkuobmiJHov5nnp43kurrigKbigKbllJTvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeesqOibi++8jOWKqOmDveWKqOS4jeS6huS6huWwseS4jeimgeW8uuaSkeedgOermei1t+adpeS6huWViuOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld55yf5piv55qE77yM6YO95Yiw5pyA5ZCO5LiA5Yi75LqG77yM5L2g6L+Z5a625LyZ5aW95q255Lmf6K6p5ZKx55yB54K55b+D5ZCn44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3pgqPkuYjvvIzlho3op4HkuobigKbigKbmiJHnmoTli4fogIXlpKfkurrjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDcwMCxcbiAgICAgICAgICAgICAgICBcInN0ZXBzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dGFjay5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeWPr+iDve+8ge+8ge+8ge+8ge+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZUZsb29yXCIsXG4gICAgICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm5aaW57K+4oCm5bCP5aeQ4oCm4oCmXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5aaW57K+5bCP5aeQ77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5piv5qKm5ZCX77yf4oCm4oCm5LiN5a+577yM5Li65LuA5LmI5oiR5Zyo5rWB5rOq77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d6L+Z6aKX5ryC5Lqu55qE5a6d55+z5piv4oCm4oCm77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5oiR5YWo6YO95oOz6LW35p2l5LqG4oCm4oCm5aaW57K+5bCP5aeQ5Li65LqG5oiR4oCm4oCmXFxu54m654my5LqG6Ieq5bex55qE5oCn5ZG944CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5Zyo6L+Z6aKX5a6d55+z5LiK77yM5oiR6IO95oSf5Y+X5Yiw5L2g55qE5rip5bqm4oCm4oCmXFxu54af5oKJ6ICM5Y+I5Luk5Lq65a6J5b+D77yM6L+Z5bCx5piv5L2g5pyA5ZCO55WZ57uZ5oiR55qE5Lic6KW/5ZCX4oCm4oCmXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d5aW95rip5pqW4oCm4oCmXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnllbGxvd0pld2VsXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICBcIjYsNVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9XG59LFxuXCJjaGFuZ2VGbG9vclwiOiB7XG4gICAgXCI2LDBcIjoge1xuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXG4gICAgICAgIFwic3RhaXJcIjogXCJ1cEZsb29yXCJcbiAgICB9LFxuICAgIFwiNiwxMlwiOiB7XG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTJcIixcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxuICAgIH1cbn0sXG5cImFmdGVyQmF0dGxlXCI6IHtcbiAgICBcIjYsNFwiOiBbXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5aSp55yf77yB5L2g5Lul5Li66L+Z5qC35bCx6IO95oiY6IOc5oiR5ZCX77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNyw1XCI6IFtcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kvaDmiZPotKXnmoTkuI3ov4fmmK/miJHkvJflpJrliIbouqvkuK3nmoTlhbbkuK3kuIDkuKrogIzlt7LjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDUsXG4gICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI1LDRcIjogW1xuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOeahOi6q+S9k+W3sue7j+S8pOeXlee0r+e0r+S6hu+8jOWPr+aIkei/mOeVmeacieedgOS5neaIkOWkmueahOmtlOWKm+OAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjUsNVwiOiBbXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d6aG95Zu655qE5a625LyZ77yB5pS+5byD5oq15oqX5ZCn77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNyw0XCI6IFtcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lk4jlk4jlk4jlk4jvvIHmiJHnmoTngbXprYLov5zmr5TkvaDmg7PosaHnmoTlvLrlpKfvvIFcXG7miJHljbPmmK/msLjmgZLvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufSxcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxuXCJiZ21hcFwiOiBbXG5cbl0sXG5cImZnbWFwXCI6IFtcblxuXSxcbn0iLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBKaW1wID0gcmVxdWlyZSgnamltcCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgbWF0ZXJpYWxzID0gW1xuICAnYW5pbWF0ZXMnLFxuICAnZW5lbXlzJyxcbiAgJ2l0ZW1zJywgJ25wY3MnLCAndGVycmFpbnMnLCAnZW5lbXk0OCcsICducGM0OCcsXG4gICdpY29ucycsXG5dO1xuY29uc3QgaW1hZ2VzRGlyID0gcGF0aC5yZXNvbHZlKCcuLi9lZGl0b3IvcHJvamVjdC9pbWFnZXMvJyk7XG5jb25zdCBleHRyYUltYWdlc0RpciA9IHBhdGgucmVzb2x2ZSgnLi4vZWRpdG9yL3Byb2plY3QvZXh0cmFJbWFnZXMvJyk7XG5jb25zdCBhbmltYXRlc0RpciA9IHBhdGgucmVzb2x2ZSgnLi4vZWRpdG9yL3Byb2plY3QvYW5pbWF0ZXMnKTtcbmNvbnN0IGFuaW1hdGVzRGF0YSA9IHt9O1xuY29uc3QgcmVhZEZpbGUgPSAoc3JjKSA9PiB7XG4gIGNvbnN0IHRlbXAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnMucmVhZEZpbGUoc3JjLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgIGVsc2UgcmVzb2x2ZShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRlbXAuY2F0Y2goKGVycikgPT4geyB0aHJvdyBlcnI7IH0pO1xuICByZXR1cm4gdGVtcDtcbn07XG5jb25zdCByZWFkQW5pbWF0ZSA9IChuYW1lKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGxldCByZWFsTmFtZSA9IG5hbWU7XG4gIGlmIChuYW1lLmluZGV4T2YoJy4nKSA9PT0gLTEpIHJlYWxOYW1lID0gYCR7bmFtZX0uYW5pbWF0ZWA7XG4gIHJlYWRGaWxlKHBhdGgucmVzb2x2ZShhbmltYXRlc0RpciwgcmVhbE5hbWUpKS50aGVuKChyYXcpID0+IHtcbiAgICByZXNvbHZlKHJhdyk7XG4gIH0sXG4gIHJlamVjdCk7XG59KTtcbmNvbnN0IGFkZEltYWdlID0gKHJvb3REaXIsIG5hbWUpID0+IHtcbiAgbGV0IHJlYWxOYW1lID0gbmFtZTtcbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID09PSAtMSkgcmVhbE5hbWUgPSBgJHtuYW1lfS5wbmdgO1xuICByZXR1cm4gSmltcC5yZWFkKGAke3BhdGgucmVzb2x2ZShpbWFnZXNEaXIsIHJlYWxOYW1lKX1gKS50aGVuKGltYWdlID0+IHtcbiAgICByb290RGlyW25hbWVdID0gaW1hZ2U7XG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xufTtcbmNvbnN0IGFkZEV4dHJhSW1hZ2UgPSAocm9vdERpciwgbmFtZSkgPT4ge1xuICBpZiAobmFtZS5zdGFydHNXaXRoKCcuLycpKSBuYW1lID0gbmFtZS5zbGljZSgyKTtcbiAgbGV0IHJlYWxOYW1lID0gbmFtZTtcbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID09PSAtMSkgcmVhbE5hbWUgPSBgJHtuYW1lfS5wbmdgO1xuICByZXR1cm4gSmltcC5yZWFkKGAke3BhdGgucmVzb2x2ZShleHRyYUltYWdlc0RpciwgcmVhbE5hbWUpfWApLnRoZW4oaW1hZ2UgPT4ge1xuICAgIHJvb3REaXJbbmFtZV0gPSBpbWFnZTtcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59O1xuY29uc3QgYWRkQW5pbWF0ZSA9IChyb290RGlyLCBuYW1lKSA9PiB7XG4gIHJldHVybiByZWFkQW5pbWF0ZShuYW1lKS50aGVuKChyYXcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXcpO1xuICAgIGFuaW1hdGVzRGF0YVtuYW1lXSA9IGRhdGE7XG4gICAgY29uc3QgYml0bWFwc0RhdGEgPSBbXTtcbiAgICBjb25zdCByZWdleCA9IC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC87XG4gICAgZGF0YS5iaXRtYXBzLmZvckVhY2goKHJhd0Jhc2UsIGkpID0+IHtcbiAgICAgIGlmIChyYXdCYXNlID09PSAnJykgcmV0dXJuIGJpdG1hcHNEYXRhLnB1c2goMCk7XG4gICAgICBjb25zdCBiYXNlID0gcmF3QmFzZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG4gICAgICBjb25zdCBkYXRhQnVmZmVyID0gQnVmZmVyLmZyb20oYmFzZSwgJ2Jhc2U2NCcpO1xuICAgICAgY29uc3QgX25hbWUgPSBgJHtuYW1lfS0ke2l9YDtcbiAgICAgIHJvb3REaXJbX25hbWVdID0gZGF0YUJ1ZmZlcjtcbiAgICAgIHJldHVybiBiaXRtYXBzRGF0YS5wdXNoKDEpO1xuICAgIH0pO1xuICAgIGRhdGEuYml0bWFwcyA9IGJpdG1hcHNEYXRhO1xuICB9KTtcbn07XG5jb25zdCByZWFkID0gKGxpc3QsIHJvb3REaXIsIG5hbWUsIGFkZEZ1bmMgPSBhZGRJbWFnZSkgPT4ge1xuICBpZiAocm9vdERpciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHJvb3REaXIuZm9yRWFjaChkYXRhID0+IHJlYWQobGlzdCwgLi4uZGF0YSkpO1xuICB9XG4gIGlmIChuYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gbmFtZS5mb3JFYWNoKChfbmFtZSkgPT4gcmVhZChsaXN0LCByb290RGlyLCBfbmFtZSwgYWRkRnVuYykpO1xuICB9XG4gIGxpc3QucHVzaChhZGRGdW5jKHJvb3REaXIsIG5hbWUpKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgcmVhZEFsbCA9IChhcnIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICByZWFkKGxpc3QsIGFycik7XG4gIHJldHVybiBQcm9taXNlLmFsbChsaXN0KTtcbn07XG5hc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICBjb25zdCB7IG1haW4gfSA9IGdsb2JhbDtcbiAgY29uc3QgX3Jvb3QgPSBtYWluLmltYWdlcztcbiAgbWFpbi5pbWFnZXNEaXIgPSBpbWFnZXNEaXI7XG4gIG1haW4uZXh0cmFJbWFnZXNEaXIgPSBleHRyYUltYWdlc0RpcjtcbiAgLy8gbWFpbi5yYXdJbWFnZXMucHVzaCgnaGVyby5wbmcnLCAnZ3JvdW5kLnBuZycpO1xuICBhd2FpdCByZWFkQWxsKFtcbiAgICBbX3Jvb3QsIG1hdGVyaWFsc10sXG4gICAgW19yb290LmF1dG90aWxlLCBtYWluLmF1dG90aWxlc10sXG4gICAgW19yb290LnRpbGVzZXRzLCBtYWluLnRpbGVzZXRzXSxcbiAgICAvLyBsb2FkIEV4dHJhSW1hZ2VzXG4gICAgW19yb290LmV4dHJhSW1hZ2VzLCBtYWluLmV4dHJhSW1hZ2VzTGlzdCwgYWRkRXh0cmFJbWFnZV0sXG4gICAgW19yb290LmFuaW1hdGVzQnVmZmVyLCBtYWluLmFuaW1hdGVzLCBhZGRBbmltYXRlXSxcbiAgXSk7XG4gIGNvbnN0IHsgb3V0cHV0UGF0aCB9ID0gbWFpbjtcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGFuaW1hdGVzRGF0YSk7XG4gIGNvbnN0IG5hbWUgPSAnYW5pbWF0ZXMuanNvbic7XG4gIGZzLndyaXRlRmlsZShwYXRoLnJlc29sdmUob3V0cHV0UGF0aCwgbmFtZSksIGRhdGEsXG4gICAgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgY29uc29sZS5sb2coYOaWh+S7tiR7bmFtZX3kv53lrZjmiJDlip9gKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbWFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9