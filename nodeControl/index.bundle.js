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
  writeFile('_info.json', JSON.stringify(info)); // id to num
  writeFile('_maps.json', JSON.stringify(_maps)); // num to data
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
      padding: 1,
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
				"constants": {"book": 1},
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
		"startText": [],
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
	"140": {"cls":"autotile","id":"autotile4","noPass":true},
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
		"autotile3": 0,
		"autotile4": 0
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
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,140,140,140,140,140,140,140,  0,  0],
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
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "autoEvent": {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcHJvamVjdC9tYXBzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wcm9qZWN0L2ljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVDb250cm9sL3JlYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJlZS10ZXgtcGFja2VyLWNvcmVcIiIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcHJvamVjdC9mbG9vcnMgc3luYyBub25yZWN1cnNpdmUgXFwuanMkIiwid2VicGFjazovLy8uL2VkaXRvci9wcm9qZWN0L2Zsb29ycy9NVDAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3Byb2plY3QvZmxvb3JzL3NhbXBsZTMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZUNvbnRyb2wvbG9hZEltYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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O0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkQ7Ozs7OztBQy9aQTtBQUNBO0FBQ0EsT0FBTyxtREFBbUQ7QUFDMUQsT0FBTyxrREFBa0Q7QUFDekQsT0FBTyxpREFBaUQ7QUFDeEQsT0FBTywyQ0FBMkM7QUFDbEQsT0FBTywyQ0FBMkM7QUFDbEQsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyxzQ0FBc0M7QUFDN0MsT0FBTyx1Q0FBdUM7QUFDOUMsT0FBTyxzQ0FBc0M7QUFDN0MsUUFBUSx1Q0FBdUM7QUFDL0MsUUFBUSxtRUFBbUU7QUFDM0UsUUFBUSxxRUFBcUU7QUFDN0UsUUFBUSxtRUFBbUU7QUFDM0UsUUFBUSxvRUFBb0U7QUFDNUUsUUFBUSxnREFBZ0Q7QUFDeEQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxrQ0FBa0M7QUFDMUMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSw0QkFBNEI7QUFDcEMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSw2QkFBNkI7QUFDckMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwrQkFBK0I7QUFDdkMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSxpQ0FBaUM7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RDs7Ozs7OztBQ2pSQTtBQUFBLFdBQVcsbUJBQU8sQ0FBQyxDQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFDQUFxQyxJQUFJLEdBQUcsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSxHQUFHLFlBQVk7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsbUVBQUksRUFBQzs7Ozs7OztBQzVCcEIsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLG1CQUFtQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNBLHFGQUFxRix5QkFBeUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7QUM1K0JBO0FBQUEsV0FBVyxtQkFBTyxDQUFDLENBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLENBQU07QUFDM0IsYUFBYSxtQkFBTyxDQUFDLENBQU07O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsdUJBQXVCLFdBQVcsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25ELHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSztBQUNuRCxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLLEdBQUcsRUFBRTtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QixLQUFLO0FBQ0w7QUFDZSx5RUFBVSxFQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXItbW9yYW4vamltcFxuaW1wb3J0IEppbXAgZnJvbSAnamltcCc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4uL2VkaXRvci9wcm9qZWN0L2RhdGEnO1xuaW1wb3J0IG1hcHMgZnJvbSAnLi4vZWRpdG9yL3Byb2plY3QvbWFwcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vZWRpdG9yL3Byb2plY3QvaWNvbnMnO1xuaW1wb3J0IHJlYWQgZnJvbSAnLi9yZWFkJztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8vIOaJk+WMheW3peWFtyBodHRwczovL2dpdGh1Yi5jb20vb2RyaWNrL2ZyZWUtdGV4LXBhY2tlci1jb3JlXG5jb25zdCB0ZXh0dXJlUGFja2VyID0gcmVxdWlyZSgnZnJlZS10ZXgtcGFja2VyLWNvcmUnKTtcblxuY29uc3QgbWFpbiA9IHsgZmxvb3JzOiB7IH0gfTtcbmdsb2JhbC5tYWluID0gbWFpbjtcbmdsb2JhbC53aW5kb3cgPSB7fTtcbm1haW4ub3V0cHV0UGF0aCA9IHBhdGgucmVzb2x2ZSgnLi9kYXRhJyk7XG5tYWluLnRpbGVzZXRzID0gZGF0YS5tYWluLnRpbGVzZXRzO1xubWFpbi5hdXRvdGlsZXMgPSBPYmplY3Qua2V5cyhpY29ucy5hdXRvdGlsZSk7XG5tYWluLmljb25zID0ge1xuICBmbG9vcjogMCxcbiAgbHY6IDEsXG4gIGhwbWF4OiAyLFxuICBocDogMyxcbiAgYXRrOiA0LFxuICBkZWY6IDUsXG4gIG1kZWY6IDYsXG4gIG1vbmV5OiA3LFxuICBleHBlcmllbmNlOiA4LFxuICB1cDogOSxcbiAgYm9vazogMTAsXG4gIGZseTogMTEsXG4gIHRvb2xib3g6IDEyLFxuICBrZXlib2FyZDogMTMsXG4gIHNob3A6IDE0LFxuICBzYXZlOiAxNSxcbiAgbG9hZDogMTYsXG4gIHNldHRpbmdzOiAxNyxcbiAgcGxheTogMTgsXG4gIHBhdXNlOiAxOSxcbiAgc3RvcDogMjAsXG4gIHNwZWVkRG93bjogMjEsXG4gIHNwZWVkVXA6IDIyLFxuICByZXdpbmQ6IDIzLFxuICBlcXVpcGJveDogMjQsXG4gIG1hbmE6IDI1LFxuICBza2lsbDogMjYsXG4gIHBhaW50OiAyNyxcbiAgZXJhc2U6IDI4LFxuICBlbXB0eTogMjksXG4gIGV4aXQ6IDMwLFxuICBidG4xOiAzMSxcbiAgYnRuMjogMzIsXG4gIGJ0bjM6IDMzLFxuICBidG40OiAzNCxcbiAgYnRuNTogMzUsXG4gIGJ0bjY6IDM2LFxuICBidG43OiAzNyxcbiAgYnRuODogMzgsXG59O1xubWFpbi5pbWFnZXMgPSB7XG4gIHRpbGVzZXRzOiB7fSxcbiAgYXV0b3RpbGU6IHt9LFxuICBleHRyYUltYWdlczoge30sXG4gIGFuaW1hdGVzQnVmZmVyOiB7fSxcbn07XG5jb25zdCBmbG9vcnMgPSByZXF1aXJlLmNvbnRleHQoJy4uL2VkaXRvci9wcm9qZWN0L2Zsb29ycy8nLCBmYWxzZSwgL1xcLmpzJC8pO1xuY29uc3QgZXh0cmFJbWFnZXNMaXN0ID0gcmVhZC5yZWFkZGlyKCcuLi9lZGl0b3IvcHJvamVjdC9leHRyYUltYWdlcy8nLCBmYWxzZSwgL1xcLihwbmd8anBnfGdpZnxpY28pJC8pO1xuY29uc3QgeyBmbG9vcklkcywgaW1hZ2VzOiByYXdJbWFnZXMgfSA9IGRhdGEubWFpbjtcbm1haW4uYW5pbWF0ZXMgPSBkYXRhLm1haW4uYW5pbWF0ZXM7XG5tYWluLmV4dHJhSW1hZ2VzTGlzdCA9IGV4dHJhSW1hZ2VzTGlzdDtcbmNvbnN0IGJsb2NrSWRzID0ge307XG4vLyDliqDovb3lh7rlnLDlm77mlbDnu4TkuK3miYDkvb/nlKjnmoRibG9jayDnmoRudW1cbihmdW5jdGlvbiBsb2FkRmxvb3JzKCkge1xuICBjb25zdCBpbml0QmxvY2sgPSBudW0gPT4ge1xuICAgIGlmIChibG9ja0lkc1tudW1dKSByZXR1cm47XG4gICAgYmxvY2tJZHNbbnVtXSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IHRyYXZlcnNhbEFycmF5ID0gKGFyciwgZnVuYykgPT4ge1xuICAgIGlmIChhcnIgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGFyci5mb3JFYWNoKG4gPT4gdHJhdmVyc2FsQXJyYXkobiwgZnVuYykpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG5cbiAgZmxvb3JJZHMuZm9yRWFjaCgoZmxvb3JJZCkgPT4gZmxvb3JzKGAuLyR7Zmxvb3JJZH0uanNgKSk7XG5cbiAgZmxvb3JJZHMuZm9yRWFjaCgoZmxvb3JJZCkgPT4ge1xuICAgIGNvbnN0IGZsb29yID0gbWFpbi5mbG9vcnNbZmxvb3JJZF07XG4gICAgdHJhdmVyc2FsQXJyYXkoW2Zsb29yLm1hcCwgZmxvb3IuZmdtYXAsIGZsb29yLmJnbWFwXSwgaW5pdEJsb2NrKTtcbiAgfSk7XG59KCkpO1xuXG5jb25zdCBnZXRUaWxlc2V0T2Zmc2V0ID0gKG51bSkgPT4ge1xuICBpZiAodHlwZW9mIG51bSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgc3RhcnRPZmZzZXQgPSAxMDAwMDtcbiAgaWYgKG51bSA8IHN0YXJ0T2Zmc2V0KSByZXR1cm4gbnVsbDtcbiAgZm9yIChjb25zdCBpIGluIG1haW4udGlsZXNldHMpIHtcbiAgICBjb25zdCB0aWxlc2V0SWQgPSBtYWluLnRpbGVzZXRzW2ldO1xuICAgIGNvbnN0IGltZ05hbWUgPSB0aWxlc2V0SWQ7XG4gICAgY29uc3QgaW1nID0gbWFpbi5pbWFnZXMudGlsZXNldHNbaW1nTmFtZV07XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmZsb29yKGltZy5iaXRtYXAud2lkdGggLyAzMik7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5mbG9vcihpbWcuYml0bWFwLmhlaWdodCAvIDMyKTtcbiAgICBpZiAobnVtID49IHN0YXJ0T2Zmc2V0ICYmIG51bSA8IHN0YXJ0T2Zmc2V0ICsgd2lkdGggKiBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IHggPSAobnVtIC0gc3RhcnRPZmZzZXQpICUgd2lkdGg7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoKG51bSAtIHN0YXJ0T2Zmc2V0KSAvIHdpZHRoLCAxMCk7XG4gICAgICByZXR1cm4geyBpbWFnZTogaW1nLCB4LCB5IH07XG4gICAgfVxuICAgIHN0YXJ0T2Zmc2V0ICs9IHN0YXJ0T2Zmc2V0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldEFuaW1hdGVGcmFtZXMgPSBmdW5jdGlvbiAoY2xzLCB1c2VPcmlnaW5WYWx1ZSkge1xuICBpZiAoY2xzID09PSAnZW5lbXlzJyB8fCBjbHMgPT09ICducGNzJykge1xuICAgIHJldHVybiAyO1xuICB9XG4gIGlmIChjbHMgPT09ICdhbmltYXRlcycgfHwgY2xzID09PSAnZW5lbXk0OCcpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBpZiAoY2xzID09PSAnbnBjNDgnKSB7XG4gICAgcmV0dXJuIHVzZU9yaWdpblZhbHVlID8gNCA6IDE7XG4gIH1cbiAgcmV0dXJuIDE7XG59O1xuY29uc3QgZ2V0QmxvY2sgPSAobnVtKSA9PiB7XG4gIGxldCBibG9jaztcbiAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIC8vIGFsb25lIOaMh+S4gOS4quWbvueJh+WvueW6lOS4gOS4qmJsb2NrXG4gIGlmIChudW0gPT09IDE3KSB7IC8vIGFpcndhbGxcbiAgICBibG9jayA9IHtcbiAgICAgIGNsczogJ3RlcnJhaW5zJyxcbiAgICAgIGlkOiAnYWlyd2FsbCcsXG4gICAgICBpbWFnZTogbWFpbi5pbWFnZXMuYWlyd2FsbCxcbiAgICAgIGFsb25lOiB0cnVlLFxuICAgIH07XG4gIH0gZWxzZSBpZiAobWFwc1tudW1dKSB7XG4gICAgYmxvY2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1hcHNbbnVtXSkpO1xuICAgIGNvbnN0IHsgaWQsIGNscyB9ID0gYmxvY2s7XG4gICAgaWYgKGNscyA9PT0gJ2F1dG90aWxlJykge1xuICAgICAgYmxvY2suaW1hZ2UgPSBtYWluLmltYWdlcy5hdXRvdGlsZVtpZF07XG4gICAgICBibG9jay5hbmltYXRlID0gTWF0aC5jZWlsKG1haW4uaW1hZ2VzLmF1dG90aWxlW2lkXS5iaXRtYXAud2lkdGggLyA5Nik7XG4gICAgICBibG9jay5hbG9uZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrLmltYWdlID0gbWFpbi5pbWFnZXNbY2xzXTtcbiAgICAgIGJsb2NrLnBvc1kgPSBpY29uc1tjbHNdW2lkXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGlsZXNldE9mZnNldCA9IGdldFRpbGVzZXRPZmZzZXQobnVtKTtcbiAgICBpZiAodGlsZXNldE9mZnNldCkge1xuICAgICAgYmxvY2sgPSB7XG4gICAgICAgIGNsczogJ3RpbGVzZXQnLFxuICAgICAgICBpZDogYFgke251bX1gLFxuICAgICAgICBwb3NYOiB0aWxlc2V0T2Zmc2V0LngsXG4gICAgICAgIHBvc1k6IHRpbGVzZXRPZmZzZXQueSxcbiAgICAgICAgaW1hZ2U6IHRpbGVzZXRPZmZzZXQuaW1hZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWJsb2NrLmFuaW1hdGUpIHtcbiAgICBibG9jay5hbmltYXRlID0gZ2V0QW5pbWF0ZUZyYW1lcyhibG9jay5jbHMsIHRydWUpO1xuICB9XG4gIGJsb2NrLmhlaWdodCA9IDMyO1xuICBpZiAoYmxvY2suY2xzID09PSAnZW5lbXk0OCcgfHwgYmxvY2suY2xzID09PSAnbnBjNDgnKSBibG9jay5oZWlnaHQgPSA0ODtcbiAgYmxvY2sucG9zWCA9IGJsb2NrLnBvc1ggfHwgMDtcbiAgYmxvY2sucG9zWSA9IGJsb2NrLnBvc1kgfHwgMDtcbiAgcmV0dXJuIGJsb2NrO1xufTtcbmNvbnN0IGxvYWRJbWFnZXMgPSByZXF1aXJlKCcuL2xvYWRJbWFnZXMnKS5kZWZhdWx0O1xuXG5sb2FkSW1hZ2VzKCkudGhlbigoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCfotYTmupDliqDovb3lrozmiJAnKTtcbiAgY29uc3QgYmxvY2tzQnVmZmVyID0ge307XG4gIC8vIOWKoOi9vWJsb2Nrc1xuICBjb25zdCBpbmZvID0geyB9O1xuICBjb25zdCBfbWFwcyA9IHsgfTtcbiAgY29uc3Qgd3JpdGVGaWxlID0gKG5hbWUsIGRhdGEpID0+IHtcbiAgICBmcy53cml0ZUZpbGUoYCR7bWFpbi5vdXRwdXRQYXRofS8ke25hbWV9YCwgZGF0YSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZyhg5YaZ5YWlJHtuYW1lfeaIkOWKn2ApO1xuICAgICAgfSk7XG4gIH07XG4gIC8vIOWKoOi9vemineWklmltYWdlc1xuICAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgZXh0cmFJbWFnZXMgfSA9IG1haW4uaW1hZ2VzO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGV4dHJhSW1hZ2VzKSk7XG4gICAgT2JqZWN0LmtleXMoZXh0cmFJbWFnZXMpLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3QgeyBbaWRdOiBpbWFnZSB9ID0gZXh0cmFJbWFnZXM7XG4gICAgICAvLyDovoPlpKfnmoTlm77niYcg5Y+v6IO96KKramltcCDlpITnkIblkI7kvZPnp6/lop7lpKcg5aaCYmcuanBnIOWboOatpOi+g+Wkp+WbvueJh+WNleeLrOWkhOeQhlxuICAgICAgLy8g5Zug5q2k5Zyo5q2k6YeN5paw6K+75Y+W5paH5Lu26YeN5paw5YaZ5YWlXG4gICAgICBpZiAoaW1hZ2UuYml0bWFwLndpZHRoICogaW1hZ2UuYml0bWFwLmhlaWdodCA+PSAxNjAwMDApIHtcbiAgICAgICAgZnMucmVhZEZpbGUoYCR7cGF0aC5yZXNvbHZlKG1haW4uZXh0cmFJbWFnZXNEaXIsIGlkKX1gLFxuICAgICAgICAgIChlcnIsIGltZykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGAke3BhdGgucmVzb2x2ZSgnLi9kYXRhJywgaWQpfWAsIGltZyxcbiAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5YaZ5YWlJHtpZH3miJDlip9gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGltYWdlLmdldEJ1ZmZlcihKaW1wLk1JTUVfUE5HLCAoZXJyLCBpbWFnZUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGxldCBiYXNlbmFtZSA9IGlkO1xuICAgICAgICBpZiAoaWQubGFzdEluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBiYXNlbmFtZSA9IGlkLnN1YnN0cmluZygwLCBpZC5sYXN0SW5kZXhPZignLicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2tzQnVmZmVyW2Jhc2VuYW1lXSkgY29uc29sZS5sb2coYOmineWkluWbvueJh+mHjOaciemHjeWQjWlkJHtiYXNlbmFtZX1gKTtcbiAgICAgICAgYmxvY2tzQnVmZmVyW2Jhc2VuYW1lXSA9IGltYWdlQnVmZmVyO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0oKSk7XG4gIE9iamVjdC5rZXlzKGJsb2NrSWRzKS5mb3JFYWNoKChudW1JZCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KG51bUlkLCAxMCk7XG4gICAgY29uc3QgYmxvY2sgPSBnZXRCbG9jayhudW0pO1xuICAgIGlmICghYmxvY2spIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBpbWFnZSwgcG9zWCwgcG9zWSwgYW5pbWF0ZSwgYWxvbmUsIGlkLCBoZWlnaHQsXG4gICAgfSA9IGJsb2NrO1xuICAgIGlmICghaW1hZ2UpIHJldHVybjtcbiAgICBpZiAoYmxvY2tzQnVmZmVyW2lkXSkge1xuICAgICAgaW5mb1tpZF0gPSB7IG51bSwgYW5pbWF0ZTogMSB9O1xuICAgICAgX21hcHNbbnVtSWRdID0gYmxvY2s7XG4gICAgICBkZWxldGUgYmxvY2suaW1hZ2U7XG4gICAgICBkZWxldGUgYmxvY2suYWxvbmU7XG4gICAgICBkZWxldGUgYmxvY2sucG9zWDtcbiAgICAgIGRlbGV0ZSBibG9jay5oZWlnaHQ7XG4gICAgICBkZWxldGUgYmxvY2sucG9zWTtcbiAgICAgIGRlbGV0ZSBibG9jay5hbmltYXRlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbmZvW2lkXSA9IHsgbnVtLCBhbmltYXRlIH07XG4gICAgX21hcHNbbnVtSWRdID0gYmxvY2s7XG4gICAgZGVsZXRlIGJsb2NrLmltYWdlO1xuICAgIGRlbGV0ZSBibG9jay5hbG9uZTtcbiAgICBkZWxldGUgYmxvY2sucG9zWDtcbiAgICBkZWxldGUgYmxvY2suaGVpZ2h0O1xuICAgIGRlbGV0ZSBibG9jay5wb3NZO1xuICAgIGRlbGV0ZSBibG9jay5hbmltYXRlO1xuICAgIGlmIChhbG9uZSkge1xuICAgICAgaW1hZ2UuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGltYWdlQnVmZmVyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGltYWdlQnVmZmVyO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxvYWQgcHJvbWlzZSDliqDlhaXmlbDnu4RcbiAgICBjb25zdCB0ZW1wID0gbmV3IEppbXAoMzIgKiBhbmltYXRlLCBoZWlnaHQsIChlcnIsIGltZykgPT4ge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgaW1nLmJsaXQoaW1hZ2UsIDAsIDAsIHBvc1ggKiAzMiwgcG9zWSAqIGhlaWdodCwgMzIgKiBhbmltYXRlLCBoZWlnaHQpXG4gICAgICAgIC5nZXRCdWZmZXIoSmltcC5NSU1FX1BORywgKGVyciwgYnVmZmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgIGlmIChibG9ja3NCdWZmZXJbaWRdKSBjb25zb2xlLmxvZyhg6aKd5aSW5Zu+54mH6YeM5pyJ6YeN5ZCNaWRcIiR7aWR9XCJgKTtcbiAgICAgICAgICBibG9ja3NCdWZmZXJbaWRdID0gYnVmZmVyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vIHdyaXRlIGluZm9cbiAgd3JpdGVGaWxlKCdfaW5mby5qc29uJywgSlNPTi5zdHJpbmdpZnkoaW5mbykpOyAvLyBpZCB0byBudW1cbiAgd3JpdGVGaWxlKCdfbWFwcy5qc29uJywgSlNPTi5zdHJpbmdpZnkoX21hcHMpKTsgLy8gbnVtIHRvIGRhdGFcbiAgLy8g5Yqg6L29aWNvbnNcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpY29uc0RhdGEgPSBtYWluLmljb25zO1xuICAgIGNvbnN0IGljb25zSW1nID0gbWFpbi5pbWFnZXMuaWNvbnM7XG4gICAgT2JqZWN0LmtleXMoaWNvbnNEYXRhKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHRlbXAgPSBuZXcgSmltcCgzMiwgMzIsIChlcnIsIGltZykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGltZy5ibGl0KGljb25zSW1nLCAwLCAwLCAwLCBpY29uc0RhdGFbaWRdICogMzIsIDMyLCAzMilcbiAgICAgICAgICAuZ2V0QnVmZmVyKEppbXAuTUlNRV9QTkcsIChlcnIsIGJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgYmxvY2tzQnVmZmVyW2lkXSA9IGJ1ZmZlcjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KCkpO1xuICBcbiAgLy8g5Yqg6L29YW5pbWF0ZSDmmK/lkKblrZjlnKjlhbbkvZnmlofku7ZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGVzQnVmZmVyIH0gPSBtYWluLmltYWdlcztcbiAgICBPYmplY3Qua2V5cyhhbmltYXRlc0J1ZmZlcikuZm9yRWFjaChpZCA9PiB7XG4gICAgICBibG9ja3NCdWZmZXJbaWRdID0gYW5pbWF0ZXNCdWZmZXJbaWRdO1xuICAgIH0pO1xuICB9KCkpO1xuICAvLyBuZXcgSmltcCDmmK/lvILmraXnmoTvvIzkvYbmmK/msqHmnInov5Tlm55Qcm9taXNlIOWboOatpOeUqHNldFRpbWVvdXRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gW107XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRleHR1cmVOYW1lOiAncGFja2VyJyxcbiAgICAgIGFsbG93Um90YXRpb246IHRydWUsXG4gICAgICBleHBvcnRlcjogJ1BpeGknLFxuICAgICAgZGV0ZWN0SWRlbnRpY2FsOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIHBhZGRpbmc6IDEsXG4gICAgfTtcbiAgICBjb25zdCB7IG91dHB1dFBhdGggfSA9IG1haW47XG4gICAgT2JqZWN0LmtleXMoYmxvY2tzQnVmZmVyKS5mb3JFYWNoKChpZCkgPT4gaW1hZ2VzLnB1c2goe1xuICAgICAgcGF0aDogaWQsXG4gICAgICBjb250ZW50czogYmxvY2tzQnVmZmVyW2lkXSxcbiAgICB9KSk7XG4gICAgdGV4dHVyZVBhY2tlcihpbWFnZXMsIG9wdGlvbnMsIChmaWxlcywgZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdQYWNrYWdpbmcgZmFpbGVkJywgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoLnJlc29sdmUob3V0cHV0UGF0aCwgaXRlbS5uYW1lKSwgaXRlbS5idWZmZXIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l0ZW0ubmFtZX3lhpnlhaXmiJDlip9gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqaW1wXCIpOyIsInZhciBkYXRhX2ExZTJmYjRhX2U5ODZfNDUyNF9iMGRhXzliN2JhN2MwODc0ZCA9IFxue1xuXHRcIm1haW5cIjoge1xuXHRcdFwiZmxvb3JJZHNcIjogW1xuXHRcdFx0XCJzYW1wbGUwXCIsXG5cdFx0XHRcInNhbXBsZTFcIixcblx0XHRcdFwic2FtcGxlMlwiLFxuXHRcdFx0XCJzYW1wbGUzXCIsXG5cdFx0XHRcIk1UMFwiXG5cdFx0XSxcblx0XHRcImltYWdlc1wiOiBbXG5cdFx0XHRcImJnLmpwZ1wiLFxuXHRcdFx0XCJ3aW5za2luLnBuZ1wiXG5cdFx0XSxcblx0XHRcInRpbGVzZXRzXCI6IFtcblx0XHRcdFwibWFnaWN0b3dlci5wbmdcIlxuXHRcdF0sXG5cdFx0XCJhbmltYXRlc1wiOiBbXG5cdFx0XHRcImhhbmRcIixcblx0XHRcdFwic3dvcmRcIixcblx0XHRcdFwiem9uZVwiXG5cdFx0XSxcblx0XHRcImJnbXNcIjogW1xuXHRcdFx0XCJiZ20ubXAzXCJcblx0XHRdLFxuXHRcdFwic291bmRzXCI6IFtcblx0XHRcdFwiZmxvb3IubXAzXCIsXG5cdFx0XHRcImF0dGFjay5tcDNcIixcblx0XHRcdFwiZG9vci5tcDNcIixcblx0XHRcdFwiaXRlbS5tcDNcIixcblx0XHRcdFwiZXF1aXAubXAzXCIsXG5cdFx0XHRcInpvbmUubXAzXCIsXG5cdFx0XHRcImp1bXAubXAzXCIsXG5cdFx0XHRcInBpY2theGUubXAzXCIsXG5cdFx0XHRcImJvbWIubXAzXCIsXG5cdFx0XHRcImNlbnRlckZseS5tcDNcIlxuXHRcdF0sXG5cdFx0XCJuYW1lTWFwXCI6IHtcblx0XHRcdFwi6IOM5pmv5Zu+LmpwZ1wiOiBcImJnLmpwZ1wiLFxuXHRcdFx0XCLog4zmma/pn7PkuZAubXAzXCI6IFwiYmdtLm1wM1wiXG5cdFx0fSxcblx0XHRcInN0YXJ0QmFja2dyb3VuZFwiOiBcImJnLmpwZ1wiLFxuXHRcdFwic3RhcnRMb2dvU3R5bGVcIjogXCJjb2xvcjogYmxhY2tcIixcblx0XHRcImxldmVsQ2hvb3NlXCI6IFtcblx0XHRcdFtcblx0XHRcdFx0XCLnroDljZVcIixcblx0XHRcdFx0XCJFYXN5XCJcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdFwi5pmu6YCaXCIsXG5cdFx0XHRcdFwiTm9ybWFsXCJcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdFwi5Zuw6Zq+XCIsXG5cdFx0XHRcdFwiSGFyZFwiXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHRcIuWZqeaiplwiLFxuXHRcdFx0XHRcIkhlbGxcIlxuXHRcdFx0XVxuXHRcdF0sXG5cdFx0XCJlcXVpcE5hbWVcIjogW1xuXHRcdFx0XCLmrablmahcIixcblx0XHRcdFwi55u+54mMXCJcblx0XHRdLFxuXHRcdFwic3RhcnRCZ21cIjogbnVsbCxcblx0XHRcInN0YXR1c0xlZnRCYWNrZ3JvdW5kXCI6IG51bGwsXG5cdFx0XCJzdGF0dXNUb3BCYWNrZ3JvdW5kXCI6IFwidXJsKHByb2plY3QvaW1hZ2VzL2dyb3VuZC5wbmcpIHJlcGVhdFwiLFxuXHRcdFwidG9vbHNCYWNrZ3JvdW5kXCI6IFwidXJsKHByb2plY3QvaW1hZ2VzL2dyb3VuZC5wbmcpIHJlcGVhdFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjQ0NDQ0NDXCIsXG5cdFx0XCJzdGF0dXNCYXJDb2xvclwiOiBcIndoaXRlXCIsXG5cdFx0XCJoYXJkTGFiZWxDb2xvclwiOiBcInJlZFwiLFxuXHRcdFwiZmxvb3JDaGFuZ2luZ0JhY2tncm91bmRcIjogXCJibGFja1wiLFxuXHRcdFwiZmxvb3JDaGFuZ2luZ1RleHRDb2xvclwiOiBcIndoaXRlXCIsXG5cdFx0XCJmb250XCI6IFwiVmVyZGFuYVwiLFxuXHRcdFwic3RhcnRCdXR0b25zU3R5bGVcIjogXCJiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzNjlGOyBvcGFjaXR5OiAwLjg1OyBjb2xvcjogI0ZGRkZGRjsgYm9yZGVyOiAjRkZGRkZGIDJweCBzb2xpZDsgY2FyZXQtY29sb3I6ICNGRkQ3MDA7XCJcblx0fSxcblx0XCJmaXJzdERhdGFcIjoge1xuXHRcdFwidGl0bGVcIjogXCLprZTloZTmoLfmnb9cIixcblx0XHRcIm5hbWVcIjogXCJ0ZW1wbGF0ZVwiLFxuXHRcdFwidmVyc2lvblwiOiBcIlZlciAyLjYuNlwiLFxuXHRcdFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcblx0XHRcImhlcm9cIjoge1xuXHRcdFx0XCJuYW1lXCI6IFwi6Ziz5YWJXCIsXG5cdFx0XHRcImx2XCI6IDEsXG5cdFx0XHRcImhwbWF4XCI6IDk5OTksXG5cdFx0XHRcImhwXCI6IDEwMDAsXG5cdFx0XHRcIm1hbmFtYXhcIjogLTEsXG5cdFx0XHRcIm1hbmFcIjogMCxcblx0XHRcdFwiYXRrXCI6IDEwMCxcblx0XHRcdFwiZGVmXCI6IDEwMCxcblx0XHRcdFwibWRlZlwiOiAwLFxuXHRcdFx0XCJtb25leVwiOiAwLFxuXHRcdFx0XCJleHBlcmllbmNlXCI6IDAsXG5cdFx0XHRcImVxdWlwbWVudFwiOiBbXSxcblx0XHRcdFwiaXRlbXNcIjoge1xuXHRcdFx0XHRcImtleXNcIjoge1xuXHRcdFx0XHRcdFwieWVsbG93S2V5XCI6IDAsXG5cdFx0XHRcdFx0XCJibHVlS2V5XCI6IDAsXG5cdFx0XHRcdFx0XCJyZWRLZXlcIjogMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImNvbnN0YW50c1wiOiB7XCJib29rXCI6IDF9LFxuXHRcdFx0XHRcInRvb2xzXCI6IHt9LFxuXHRcdFx0XHRcImVxdWlwc1wiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwibG9jXCI6IHtcblx0XHRcdFx0XCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxuXHRcdFx0XHRcInhcIjogNixcblx0XHRcdFx0XCJ5XCI6IDEwXG5cdFx0XHR9LFxuXHRcdFx0XCJmbGFnc1wiOiB7fSxcblx0XHRcdFwic3RlcHNcIjogMFxuXHRcdH0sXG5cdFx0XCJzdGFydENhbnZhc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Zyo6L+Z6YeM5Y+v5Lul55So5LqL5Lu25p2l6Ieq5a6a5LmJ57uY5Yi25qCH6aKY55WM6Z2i55qE6IOM5pmv5Zu+562JXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul55u05o6l5YiH5o2i5Yiw5YW25LuW5qW85bGC77yI5q+U5aaC5p+Q5Liq5byA5aeL5Ymn5oOF5qW85bGC77yJ6L+b6KGM5pON5L2c44CCXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcInNob3dJbWFnZVwiLFxuXHRcdFx0XHRcImNvZGVcIjogMSxcblx0XHRcdFx0XCJpbWFnZVwiOiBcImJnLmpwZ1wiLFxuXHRcdFx0XHRcImxvY1wiOiBbXG5cdFx0XHRcdFx0MCxcblx0XHRcdFx0XHQwXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZHdcIjogMTAwLFxuXHRcdFx0XHRcImRoXCI6IDEwMCxcblx0XHRcdFx0XCJvcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFwidGltZVwiOiAwXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInR5cGVcIjogXCJ3aGlsZVwiLFxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcIjFcIixcblx0XHRcdFx0XCJkYXRhXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnu5nnlKjmiLfmj5DkvpvpgInmi6npobnvvIzov5nph4znroDljZXnmoTkvb/nlKjkuoZjaG9pY2Vz5LqL5Lu2XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuS5n+WPr+S7pei0tOaMiemSruWbvueEtuWQjuS9v+eUqOetieW+heaTjeS9nOadpeWujOaIkFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjaG9pY2VzXCIsXG5cdFx0XHRcdFx0XHRcImNob2ljZXNcIjogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5byA5aeL5ri45oiPXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuajgOafpWJnbeeKtuaAge+8jOS4i+WQjFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaWZcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb25kaXRpb25cIjogXCJjb3JlLmZsYWdzLnN0YXJ0RGlyZWN0bHlcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0cnVlXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLnm7TmjqXlvIDlp4vmuLjmiI/vvIzorr7nva7liJ3lp4vljJbmlbDmja5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuZXZlbnRzLnNldEluaXREYXRhKCcnKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Yqo5oCB55Sf5oiQ6Zq+5bqm6YCJ5oup6aG5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG52YXIgY2hvaWNlcyA9IFtdO1xcbm1haW4ubGV2ZWxDaG9vc2UuZm9yRWFjaChmdW5jdGlvbiAob25lKSB7XFxuXFx0Y2hvaWNlcy5wdXNoKHtcXFwidGV4dFxcXCI6IG9uZVswXSwgXFxcImFjdGlvblxcXCI6IFtcXG5cXHRcXHR7XFxcInR5cGVcXFwiOiBcXFwiZnVuY3Rpb25cXFwiLCBcXFwiZnVuY3Rpb25cXFwiOiBcXFwiZnVuY3Rpb24oKSB7IGNvcmUuc3RhdHVzLmhhcmQgPSAnXFxcIitvbmVbMV0rXFxcIic7IGNvcmUuZXZlbnRzLnNldEluaXREYXRhKCdcXFwiK29uZVsxXStcXFwiJyk7IH1cXFwifVxcblxcdF19KTtcXG59KVxcbmNvcmUuaW5zZXJ0QWN0aW9uKHtcXFwidHlwZVxcXCI6IFxcXCJjaG9pY2VzXFxcIiwgXFxcImNob2ljZXNcXFwiOiBjaG9pY2VzfSk7XFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJoaWRlSW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb2RlXCI6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGltZVwiOiAwXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaIkOWKn+mAieaLqemavuW6plwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJicmVha1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6K+75Y+W5a2Y5qGjXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLnroDljZXnmoTkvb/nlKjigJzlkbzlh7ror7vmoaPnlYzpnaLigJ3mnaXlpITnkIZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY2FsbExvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuWbnuaUvuW9leWDj1wiLFxuXHRcdFx0XHRcdFx0XHRcdFwiYWN0aW9uXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxuY29yZS5jb250cm9sLmNoZWNrQmdtKClcXG59XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6L+Z5q615Luj56CB5Lya5by55qGG6YCJ5oup5b2V5YOP5paH5Lu2XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImlmXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiIWNvcmUuaXNSZXBsYXlpbmcoKVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRydWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNob29zZVJlcGxheUZpbGUoKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLmjqXkuIvmnaXkvJrmiafooYxzdGFydFRleHTkuK3nmoTkuovku7ZcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJzdGFydFRleHRcIjogW10sXG5cdFx0XCJzaG9wc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogXCJtb25leVNob3AxXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIui0quWpquS5i+elnlwiLFxuXHRcdFx0XHRcImljb25cIjogXCJibHVlU2hvcFwiLFxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCIxRumHkeW4geWVhuW6l1wiLFxuXHRcdFx0XHRcImNvbW1vblRpbWVzXCI6IGZhbHNlLFxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwidXNlXCI6IFwibW9uZXlcIixcblx0XHRcdFx0XCJuZWVkXCI6IFwiMjArMTAqdGltZXMqKHRpbWVzKzEpXCIsXG5cdFx0XHRcdFwidGV4dFwiOiBcIuWLh+aVoueahOatpuWjq+WViu+8jOe7meaIkSR7bmVlZH3ph5HluIHlsLHlj6/ku6XvvJpcIixcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnlJ/lkb0rODAwXCIsXG5cdFx0XHRcdFx0XHRcImVmZmVjdFwiOiBcInN0YXR1czpocCs9ODAwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogXCJleHBTaG9wMVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCLnu4/pqozkuYvnpZ5cIixcblx0XHRcdFx0XCJpY29uXCI6IFwicGlua1Nob3BcIixcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwiMUbnu4/pqozllYblupdcIixcblx0XHRcdFx0XCJjb21tb25UaW1lc1wiOiBmYWxzZSxcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcInVzZVwiOiBcImV4cGVyaWVuY2VcIixcblx0XHRcdFx0XCJuZWVkXCI6IFwiLTFcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5YuH5pWi55qE5q2m5aOr5ZWK77yM57uZ5oiR6Iul5bmy57uP6aqM5bCx5Y+v5Lul77yaXCIsXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi562J57qnKzFcIixcblx0XHRcdFx0XHRcdFwibmVlZFwiOiBcIjEwMFwiLFxuXHRcdFx0XHRcdFx0XCJlZmZlY3RcIjogXCJzdGF0dXM6aHArPTEwMDBcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiBcIml0ZW1TaG9wXCIsXG5cdFx0XHRcdFwiaXRlbVwiOiB0cnVlLFxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCLpgZPlhbfllYblupdcIixcblx0XHRcdFx0XCJtdXN0RW5hYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaWRcIjogXCJ5ZWxsb3dLZXlcIixcblx0XHRcdFx0XHRcdFwibnVtYmVyXCI6IDEwLFxuXHRcdFx0XHRcdFx0XCJtb25leVwiOiAxMFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiBcImtleVNob3AxXCIsXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIuWbnuaUtumSpeWMmeWVhuW6l1wiLFxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwiY29tbW9uRXZlbnRcIjogXCLlm57mlLbpkqXljJnllYblupdcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJsZXZlbFVwXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJuZWVkXCI6IFwiMFwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLmraTlpITmmK/liJ3lp4vnrYnnuqfvvIzlj6rpnIDloavlhpnnp7Dlj7dcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuZWVkXCI6IFwiMjBcIixcblx0XHRcdFx0XCJ0aXRsZVwiOiBcIuesrOS6jOe6p1wiLFxuXHRcdFx0XHRcImFjdGlvblwiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdGF0dXM6YXRrKzEwXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RhdHVzOmRlZisxMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5lZWRcIjogXCI0MFwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJ0aXBcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaBreWWnOWNh+e6p1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHRcInZhbHVlc1wiOiB7XG5cdFx0XCJsYXZhRGFtYWdlXCI6IDEwMCxcblx0XHRcInBvaXNvbkRhbWFnZVwiOiAxMCxcblx0XHRcIndlYWtWYWx1ZVwiOiAyMCxcblx0XHRcInJlZEpld2VsXCI6IDMsXG5cdFx0XCJibHVlSmV3ZWxcIjogMyxcblx0XHRcImdyZWVuSmV3ZWxcIjogNSxcblx0XHRcInJlZFBvdGlvblwiOiAxMDAsXG5cdFx0XCJibHVlUG90aW9uXCI6IDI1MCxcblx0XHRcInllbGxvd1BvdGlvblwiOiA1MDAsXG5cdFx0XCJncmVlblBvdGlvblwiOiA4MDAsXG5cdFx0XCJicmVha0FybW9yXCI6IDAuOSxcblx0XHRcImNvdW50ZXJBdHRhY2tcIjogMC4xLFxuXHRcdFwicHVyaWZ5XCI6IDMsXG5cdFx0XCJoYXRyZWRcIjogMixcblx0XHRcIm1vdmVTcGVlZFwiOiAxMDAsXG5cdFx0XCJhbmltYXRlU3BlZWRcIjogNDAwLFxuXHRcdFwiZmxvb3JDaGFuZ2VUaW1lXCI6IDgwMFxuXHR9LFxuXHRcImZsYWdzXCI6IHtcblx0XHRcImVuYWJsZUZsb29yXCI6IHRydWUsXG5cdFx0XCJlbmFibGVOYW1lXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTHZcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVIUE1heFwiOiBmYWxzZSxcblx0XHRcImVuYWJsZU1hbmFcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVNRGVmXCI6IHRydWUsXG5cdFx0XCJlbmFibGVNb25leVwiOiB0cnVlLFxuXHRcdFwiZW5hYmxlRXhwZXJpZW5jZVwiOiBmYWxzZSxcblx0XHRcImVuYWJsZUxldmVsVXBcIjogZmFsc2UsXG5cdFx0XCJsZXZlbFVwTGVmdE1vZGVcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVLZXlzXCI6IHRydWUsXG5cdFx0XCJlbmFibGVQWkZcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVEZWJ1ZmZcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVTa2lsbFwiOiBmYWxzZSxcblx0XHRcImZseU5lYXJTdGFpclwiOiB0cnVlLFxuXHRcdFwiZmx5UmVjb3JkUG9zaXRpb25cIjogZmFsc2UsXG5cdFx0XCJwaWNrYXhlRm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXG5cdFx0XCJib21iRm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXG5cdFx0XCJzbm93Rm91ckRpcmVjdGlvbnNcIjogZmFsc2UsXG5cdFx0XCJiaWdLZXlJc0JveFwiOiBmYWxzZSxcblx0XHRcInN0ZWVsRG9vcldpdGhvdXRLZXlcIjogZmFsc2UsXG5cdFx0XCJpdGVtRmlyc3RUZXh0XCI6IGZhbHNlLFxuXHRcdFwiZXF1aXBtZW50XCI6IGZhbHNlLFxuXHRcdFwiZXF1aXBib3hCdXR0b25cIjogZmFsc2UsXG5cdFx0XCJpY29uSW5FcXVpcGJveFwiOiBmYWxzZSxcblx0XHRcImVuYWJsZUFkZFBvaW50XCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTmVnYXRpdmVEYW1hZ2VcIjogZmFsc2UsXG5cdFx0XCJoYXRyZWREZWNyZWFzZVwiOiB0cnVlLFxuXHRcdFwiYmV0d2VlbkF0dGFja0NlaWxcIjogZmFsc2UsXG5cdFx0XCJiZXR3ZWVuQXR0YWNrTWF4XCI6IGZhbHNlLFxuXHRcdFwidXNlTG9vcFwiOiBmYWxzZSxcblx0XHRcInN0YXJ0VXNpbmdDYW52YXNcIjogZmFsc2UsXG5cdFx0XCJzdGFydERpcmVjdGx5XCI6IGZhbHNlLFxuXHRcdFwic3RhdHVzQ2FudmFzXCI6IGZhbHNlLFxuXHRcdFwic3RhdHVzQ2FudmFzUm93c09uTW9iaWxlXCI6IDMsXG5cdFx0XCJkaXNwbGF5RW5lbXlEYW1hZ2VcIjogdHJ1ZSxcblx0XHRcImRpc3BsYXlDcml0aWNhbFwiOiB0cnVlLFxuXHRcdFwiZGlzcGxheUV4dHJhRGFtYWdlXCI6IHRydWUsXG5cdFx0XCJlbmFibGVHZW50bGVDbGlja1wiOiB0cnVlLFxuXHRcdFwicG90aW9uV2hpbGVSb3V0aW5nXCI6IGZhbHNlLFxuXHRcdFwiaWdub3JlQ2hhbmdlRmxvb3JcIjogdHJ1ZSxcblx0XHRcImNhbkdvRGVhZFpvbmVcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVNb3ZlRGlyZWN0bHlcIjogdHJ1ZSxcblx0XHRcImVuYWJsZURpc2FibGVkU2hvcFwiOiB0cnVlLFxuXHRcdFwiZGlzYWJsZVNob3BPbkRhbWFnZVwiOiBmYWxzZSxcblx0XHRcImJsdXJGZ1wiOiBmYWxzZSxcblx0XHRcImNoZWNrQ29uc29sZVwiOiBmYWxzZVxuXHR9XG59XG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbm1vZHVsZS5leHBvcnRzID0gZGF0YV9hMWUyZmI0YV9lOTg2XzQ1MjRfYjBkYV85YjdiYTdjMDg3NGQ7IiwidmFyIG1hcHNfOTBmMzY3NTJfODgxNV80YmU4X2IzMmJfZDdmYWQxZDA1NDJlID0gXG57XG5cdFwiMVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwieWVsbG93V2FsbFwiLFwiY2FuQnJlYWtcIjp0cnVlfSxcblx0XCIyXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJ3aGl0ZVdhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXG5cdFwiM1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVdhbGxcIixcImNhbkJyZWFrXCI6dHJ1ZX0sXG5cdFwiNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwic3RhclwiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiNVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwibGF2YVwiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiNlwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiaWNlXCJ9LFxuXHRcIjdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJsdWVTaG9wLWxlZnRcIn0sXG5cdFwiOFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYmx1ZVNob3AtcmlnaHRcIn0sXG5cdFwiOVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwicGlua1Nob3AtbGVmdFwifSxcblx0XCIxMFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwicGlua1Nob3AtcmlnaHRcIn0sXG5cdFwiMTFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxhdmFOZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcblx0XCIxMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwicG9pc29uTmV0XCIsXCJub1Bhc3NcIjpmYWxzZSxcInRyaWdnZXJcIjpcInBhc3NOZXRcIn0sXG5cdFwiMTNcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcIndlYWtOZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcblx0XCIxNFwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3Vyc2VOZXRcIixcIm5vUGFzc1wiOmZhbHNlLFwidHJpZ2dlclwiOlwicGFzc05ldFwifSxcblx0XCIxNVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiYmx1ZVdhdGVyXCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxNlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwid2F0ZXJcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjIwXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZVwiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiMjFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInllbGxvd0tleVwifSxcblx0XCIyMlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYmx1ZUtleVwifSxcblx0XCIyM1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkS2V5XCJ9LFxuXHRcIjI0XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJncmVlbktleVwifSxcblx0XCIyNVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3RlZWxLZXlcIn0sXG5cdFwiMjZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJpZ0tleVwifSxcblx0XCIyN1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicmVkSmV3ZWxcIn0sXG5cdFwiMjhcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJsdWVKZXdlbFwifSxcblx0XCIyOVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5KZXdlbFwifSxcblx0XCIzMFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwieWVsbG93SmV3ZWxcIn0sXG5cdFwiMzFcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInJlZFBvdGlvblwifSxcblx0XCIzMlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYmx1ZVBvdGlvblwifSxcblx0XCIzM1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZ3JlZW5Qb3Rpb25cIn0sXG5cdFwiMzRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInllbGxvd1BvdGlvblwifSxcblx0XCIzNVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQxXCJ9LFxuXHRcIjM2XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQxXCJ9LFxuXHRcIjM3XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzd29yZDJcIn0sXG5cdFwiMzhcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDJcIn0sXG5cdFwiMzlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN3b3JkM1wifSxcblx0XCI0MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2hpZWxkM1wifSxcblx0XCI0MVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQ0XCJ9LFxuXHRcIjQyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQ0XCJ9LFxuXHRcIjQzXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzd29yZDVcIn0sXG5cdFwiNDRcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInNoaWVsZDVcIn0sXG5cdFwiNDVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImJvb2tcIn0sXG5cdFwiNDZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImZseVwifSxcblx0XCI0N1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwicGlja2F4ZVwifSxcblx0XCI0OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiaWNlUGlja2F4ZVwifSxcblx0XCI0OVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiYm9tYlwifSxcblx0XCI1MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY2VudGVyRmx5XCJ9LFxuXHRcIjUxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ1cEZseVwifSxcblx0XCI1MlwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiZG93bkZseVwifSxcblx0XCI1M1wiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY29pblwifSxcblx0XCI1NFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic25vd1wifSxcblx0XCI1NVwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY3Jvc3NcIn0sXG5cdFwiNTZcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcInN1cGVyUG90aW9uXCJ9LFxuXHRcIjU3XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJlYXJ0aHF1YWtlXCJ9LFxuXHRcIjU4XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJwb2lzb25XaW5lXCJ9LFxuXHRcIjU5XCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJ3ZWFrV2luZVwifSxcblx0XCI2MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwiY3Vyc2VXaW5lXCJ9LFxuXHRcIjYxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzdXBlcldpbmVcIn0sXG5cdFwiNjJcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImtuaWZlXCJ9LFxuXHRcIjYzXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJtb25leVBvY2tldFwifSxcblx0XCI2NFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic2hvZXNcIn0sXG5cdFwiNjVcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImhhbW1lclwifSxcblx0XCI2OFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwibGlmZVdhbmRcIn0sXG5cdFwiNjlcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcImp1bXBTaG9lc1wifSxcblx0XCI3MFwiOiB7XCJjbHNcIjpcIml0ZW1zXCIsXCJpZFwiOlwic3dvcmQwXCJ9LFxuXHRcIjcxXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJzaGllbGQwXCJ9LFxuXHRcIjcyXCI6IHtcImNsc1wiOlwiaXRlbXNcIixcImlkXCI6XCJza2lsbDFcIn0sXG5cdFwiNzNcIjoge1wiY2xzXCI6XCJpdGVtc1wiLFwiaWRcIjpcIndhbmRcIn0sXG5cdFwiODFcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInllbGxvd0Rvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjgyXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJibHVlRG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXG5cdFwiODNcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInJlZERvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjg0XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJncmVlbkRvb3JcIixcInRyaWdnZXJcIjpcIm9wZW5Eb29yXCJ9LFxuXHRcIjg1XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJzcGVjaWFsRG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXG5cdFwiODZcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInN0ZWVsRG9vclwiLFwidHJpZ2dlclwiOlwib3BlbkRvb3JcIn0sXG5cdFwiODdcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcInVwRmxvb3JcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCI4OFwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiZG93bkZsb29yXCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiODlcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjkwXCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzdGFyUG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiOTFcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcInVwUG9ydGFsXCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiOTJcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImxlZnRQb3J0YWxcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCI5M1wiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiZG93blBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjk0XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJyaWdodFBvcnRhbFwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjEwMVwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3J5c3RhbFVwXCJ9LFxuXHRcIjEwMlwiOiB7XCJjbHNcIjpcImFuaW1hdGVzXCIsXCJpZFwiOlwiY3J5c3RhbEJvdHRvbVwifSxcblx0XCIxMDNcIjoge1wiY2xzXCI6XCJhbmltYXRlc1wiLFwiaWRcIjpcImZpcmVcIn0sXG5cdFwiMTA0XCI6IHtcImNsc1wiOlwiYW5pbWF0ZXNcIixcImlkXCI6XCJzd2l0Y2hcIn0sXG5cdFwiMTIxXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm1hblwifSxcblx0XCIxMjJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid29tYW5cIn0sXG5cdFwiMTIzXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInRoaWVmXCJ9LFxuXHRcIjEyNFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJmYWlyeVwifSxcblx0XCIxMjVcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwibWFnaWNpYW5cIn0sXG5cdFwiMTI2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvbWFuTWFnaWNpYW5cIn0sXG5cdFwiMTI3XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIm9sZE1hblwifSxcblx0XCIxMjhcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiY2hpbGRcIn0sXG5cdFwiMTI5XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndvb2RcIn0sXG5cdFwiMTMwXCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcInBpbmtTaG9wXCJ9LFxuXHRcIjEzMVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJibHVlU2hvcFwifSxcblx0XCIxMzJcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwicHJpbmNlc3NcIn0sXG5cdFwiMTMzXCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMwXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcblx0XCIxMzRcIjoge1wiY2xzXCI6XCJucGM0OFwiLFwiaWRcIjpcIm5wYzFcIixcImZhY2VJZHNcIjp7XCJkb3duXCI6XCJucGMwXCIsXCJsZWZ0XCI6XCJucGMxXCIsXCJyaWdodFwiOlwibnBjMlwiLFwidXBcIjpcIm5wYzNcIn19LFxuXHRcIjEzNVwiOiB7XCJjbHNcIjpcIm5wYzQ4XCIsXCJpZFwiOlwibnBjMlwiLFwiZmFjZUlkc1wiOntcImRvd25cIjpcIm5wYzBcIixcImxlZnRcIjpcIm5wYzFcIixcInJpZ2h0XCI6XCJucGMyXCIsXCJ1cFwiOlwibnBjM1wifX0sXG5cdFwiMTM2XCI6IHtcImNsc1wiOlwibnBjNDhcIixcImlkXCI6XCJucGMzXCIsXCJmYWNlSWRzXCI6e1wiZG93blwiOlwibnBjMFwiLFwibGVmdFwiOlwibnBjMVwiLFwicmlnaHRcIjpcIm5wYzJcIixcInVwXCI6XCJucGMzXCJ9fSxcblx0XCIxNDBcIjoge1wiY2xzXCI6XCJhdXRvdGlsZVwiLFwiaWRcIjpcImF1dG90aWxlNFwiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiMTUxXCI6IHtcImNsc1wiOlwiYXV0b3RpbGVcIixcImlkXCI6XCJhdXRvdGlsZTFcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjE1MlwiOiB7XCJjbHNcIjpcImF1dG90aWxlXCIsXCJpZFwiOlwiYXV0b3RpbGUyXCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxNTNcIjoge1wiY2xzXCI6XCJhdXRvdGlsZVwiLFwiaWRcIjpcImF1dG90aWxlM1wiLFwibm9QYXNzXCI6dHJ1ZX0sXG5cdFwiMTYxXCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJhcnJvd1VwXCIsXCJub1Bhc3NcIjpmYWxzZSxcImNhbm5vdE91dFwiOltcImxlZnRcIixcInJpZ2h0XCIsXCJkb3duXCJdLFwiY2Fubm90SW5cIjpbXCJkb3duXCJdfSxcblx0XCIxNjJcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93RG93blwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwidXBcIl0sXCJjYW5ub3RJblwiOltcInVwXCJdfSxcblx0XCIxNjNcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93TGVmdFwiLFwibm9QYXNzXCI6ZmFsc2UsXCJjYW5ub3RPdXRcIjpbXCJ1cFwiLFwiZG93blwiLFwicmlnaHRcIl0sXCJjYW5ub3RJblwiOltcInJpZ2h0XCJdfSxcblx0XCIxNjRcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImFycm93UmlnaHRcIixcIm5vUGFzc1wiOmZhbHNlLFwiY2Fubm90T3V0XCI6W1widXBcIixcImRvd25cIixcImxlZnRcIl0sXCJjYW5ub3RJblwiOltcImxlZnRcIl19LFxuXHRcIjE2NVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwibGlnaHRcIixcInRyaWdnZXJcIjpcImNoYW5nZUxpZ2h0XCIsXCJub1Bhc3NcIjpmYWxzZX0sXG5cdFwiMTY2XCI6IHtcImNsc1wiOlwidGVycmFpbnNcIixcImlkXCI6XCJkYXJrTGlnaHRcIixcIm5vUGFzc1wiOnRydWV9LFxuXHRcIjE2N1wiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwic2tpXCIsXCJ0cmlnZ2VyXCI6XCJza2lcIixcIm5vUGFzc1wiOmZhbHNlfSxcblx0XCIxNjhcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImZsb3dlclwiLFwibm9QYXNzXCI6ZmFsc2V9LFxuXHRcIjE2OVwiOiB7XCJjbHNcIjpcInRlcnJhaW5zXCIsXCJpZFwiOlwiYm94XCIsXCJ0cmlnZ2VyXCI6XCJwdXNoQm94XCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxNzBcIjoge1wiY2xzXCI6XCJ0ZXJyYWluc1wiLFwiaWRcIjpcImJveGVkXCIsXCJ0cmlnZ2VyXCI6XCJwdXNoQm94XCIsXCJub1Bhc3NcIjp0cnVlfSxcblx0XCIxODFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2x0XCJ9LFxuXHRcIjE4MlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3dFwifSxcblx0XCIxODNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid3J0XCJ9LFxuXHRcIjE4NFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bFwifSxcblx0XCIxODVcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwid2NcIn0sXG5cdFwiMTg2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndyXCJ9LFxuXHRcIjE4N1wiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJ3bGJcIn0sXG5cdFwiMTg4XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcIndyYlwifSxcblx0XCIxODlcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGx0XCJ9LFxuXHRcIjE5MFwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkdFwifSxcblx0XCIxOTFcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZHJ0XCJ9LFxuXHRcIjE5MlwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbFwifSxcblx0XCIxOTNcIjoge1wiY2xzXCI6XCJucGNzXCIsXCJpZFwiOlwiZGNcIn0sXG5cdFwiMTk0XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyXCJ9LFxuXHRcIjE5NVwiOiB7XCJjbHNcIjpcIm5wY3NcIixcImlkXCI6XCJkbGJcIn0sXG5cdFwiMTk2XCI6IHtcImNsc1wiOlwibnBjc1wiLFwiaWRcIjpcImRyYlwifSxcblx0XCIyMDFcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJncmVlblNsaW1lXCJ9LFxuXHRcIjIwMlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFNsaW1lXCJ9LFxuXHRcIjIwM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrU2xpbWVcIn0sXG5cdFwiMjA0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2xpbWVsb3JkXCJ9LFxuXHRcIjIwNVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhdFwifSxcblx0XCIyMDZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJiaWdCYXRcIn0sXG5cdFwiMjA3XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkQmF0XCJ9LFxuXHRcIjIwOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInZhbXBpcmVcIn0sXG5cdFwiMjA5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25cIn0sXG5cdFwiMjEwXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2tlbGV0b25Tb2lsZGVyXCJ9LFxuXHRcIjIxMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uQ2FwdGFpblwifSxcblx0XCIyMTJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnaG9zdFNrZWxldG9uXCJ9LFxuXHRcIjIxM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInpvbWJpZVwifSxcblx0XCIyMTRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ6b21iaWVLbmlnaHRcIn0sXG5cdFwiMjE1XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicm9ja1wifSxcblx0XCIyMTZcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzbGltZU1hblwifSxcblx0XCIyMTdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlUHJpZXN0XCJ9LFxuXHRcIjIxOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZFByaWVzdFwifSxcblx0XCIyMTlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJicm93bldpemFyZFwifSxcblx0XCIyMjBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRXaXphcmRcIn0sXG5cdFwiMjIxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwieWVsbG93R3VhcmRcIn0sXG5cdFwiMjIyXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmx1ZUd1YXJkXCJ9LFxuXHRcIjIyM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEd1YXJkXCJ9LFxuXHRcIjIyNFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInN3b3Jkc21hblwifSxcblx0XCIyMjVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJzb2xkaWVyXCJ9LFxuXHRcIjIyNlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInllbGxvd0tuaWdodFwifSxcblx0XCIyMjdcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRLbmlnaHRcIn0sXG5cdFwiMjI4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGFya0tuaWdodFwifSxcblx0XCIyMjlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ0cmVlMVwifSxcblx0XCIyMzBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJ5ZWxsb3dLaW5nXCJ9LFxuXHRcIjIzMVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS2luZ1wifSxcblx0XCIyMzJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJibHVlS25pZ2h0XCJ9LFxuXHRcIjIzM1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdvbGRTbGltZVwifSxcblx0XCIyMzRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25Ta2VsZXRvblwifSxcblx0XCIyMzVcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJwb2lzb25CYXRcIn0sXG5cdFwiMjM2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3RlZWxSb2NrXCJ9LFxuXHRcIjIzN1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uUHJpZXN0XCJ9LFxuXHRcIjIzOFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInNrZWxldG9uS2luZ1wifSxcblx0XCIyMzlcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJza2VsZXRvbldpemFyZFwifSxcblx0XCIyNDBcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJyZWRTa2VsZXRvbkNhcHRpb25cIn0sXG5cdFwiMjQxXCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiYmFkSGVyb1wifSxcblx0XCIyNDJcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblwifSxcblx0XCIyNDNcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJkZW1vblByaWVzdFwifSxcblx0XCIyNDRcIjoge1wiY2xzXCI6XCJlbmVteXNcIixcImlkXCI6XCJnb2xkSG9yblNsaW1lXCJ9LFxuXHRcIjI0NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcInJlZEtpbmdcIn0sXG5cdFwiMjQ2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwid2hpdGVLaW5nXCJ9LFxuXHRcIjI0N1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJsYWNrTWFnaWNpYW5cIn0sXG5cdFwiMjQ4XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic2lsdmVyU2xpbWVcIn0sXG5cdFwiMjQ5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwic3dvcmRFbXBlcm9yXCJ9LFxuXHRcIjI1MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlSG9yblNsaW1lXCJ9LFxuXHRcIjI1MVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZFByaW5jZXNzXCJ9LFxuXHRcIjI1MlwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImJhZEZhaXJ5XCJ9LFxuXHRcIjI1M1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyYXlQcmllc3RcIn0sXG5cdFwiMjU0XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicmVkU3dvcmRzbWFuXCJ9LFxuXHRcIjI1NVwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIndoaXRlR2hvc3RcIn0sXG5cdFwiMjU2XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwicG9pc29uWm9tYmllXCJ9LFxuXHRcIjI1N1wiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm1hZ2ljRHJhZ29uXCJ9LFxuXHRcIjI1OFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcIm9jdG9wdXNcIn0sXG5cdFwiMjU5XCI6IHtcImNsc1wiOlwiZW5lbXlzXCIsXCJpZFwiOlwiZGFya0ZhaXJ5XCJ9LFxuXHRcIjI2MFwiOiB7XCJjbHNcIjpcImVuZW15c1wiLFwiaWRcIjpcImdyZWVuS25pZ2h0XCJ9LFxuXHRcIjI2MVwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJhbmdlbFwifSxcblx0XCIyNjJcIjoge1wiY2xzXCI6XCJlbmVteTQ4XCIsXCJpZFwiOlwiZWxlbWVudGFsXCJ9LFxuXHRcIjI2M1wiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJzdGVlbEd1YXJkXCJ9LFxuXHRcIjI2NFwiOiB7XCJjbHNcIjpcImVuZW15NDhcIixcImlkXCI6XCJldmlsQmF0XCJ9XG59XG5cbi8qKiogRVhQT1JUUyBGUk9NIGV4cG9ydHMtbG9hZGVyICoqKi9cbm1vZHVsZS5leHBvcnRzID0gbWFwc185MGYzNjc1Ml84ODE1XzRiZThfYjMyYl9kN2ZhZDFkMDU0MmU7IiwidmFyIGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMSA9IFxue1xuXHRcImhlcm9cIjoge1xuXHRcdFwiZG93blwiOiB7XG5cdFx0XHRcImxvY1wiOiAwLFxuXHRcdFx0XCJzdG9wXCI6IDAsXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXG5cdFx0fSxcblx0XHRcImxlZnRcIjoge1xuXHRcdFx0XCJsb2NcIjogMSxcblx0XHRcdFwic3RvcFwiOiAwLFxuXHRcdFx0XCJsZWZ0Rm9vdFwiOiAxLFxuXHRcdFx0XCJyaWdodEZvb3RcIjogM1xuXHRcdH0sXG5cdFx0XCJyaWdodFwiOiB7XG5cdFx0XHRcImxvY1wiOiAyLFxuXHRcdFx0XCJzdG9wXCI6IDAsXG5cdFx0XHRcImxlZnRGb290XCI6IDEsXG5cdFx0XHRcInJpZ2h0Rm9vdFwiOiAzXG5cdFx0fSxcblx0XHRcInVwXCI6IHtcblx0XHRcdFwibG9jXCI6IDMsXG5cdFx0XHRcInN0b3BcIjogMCxcblx0XHRcdFwibGVmdEZvb3RcIjogMSxcblx0XHRcdFwicmlnaHRGb290XCI6IDNcblx0XHR9LFxuXHRcdFwid2lkdGhcIjogMzIsXG5cdFx0XCJoZWlnaHRcIjogNDhcblx0fSxcblx0XCJ0ZXJyYWluc1wiOiB7XG5cdFx0XCJncm91bmRcIjogMCxcblx0XHRcImdyYXNzXCI6IDEsXG5cdFx0XCJncmFzczJcIjogMixcblx0XHRcInllbGxvd1dhbGxcIjogMyxcblx0XHRcIndoaXRlV2FsbFwiOiA0LFxuXHRcdFwiYmx1ZVdhbGxcIjogNSxcblx0XHRcInNub3dHcm91bmRcIjogNixcblx0XHRcImdyb3VuZDJcIjogNyxcblx0XHRcImdyb3VuZDNcIjogOCxcblx0XHRcImdyb3VuZDRcIjogOSxcblx0XHRcInNhbmRcIjogMTAsXG5cdFx0XCJncm91bmQ1XCI6IDExLFxuXHRcdFwieWVsbG93V2FsbDJcIjogMTIsXG5cdFx0XCJ3aGl0ZVdhbGwyXCI6IDEzLFxuXHRcdFwiYmx1ZVdhbGwyXCI6IDE0LFxuXHRcdFwiYmxvY2tXYWxsXCI6IDE1LFxuXHRcdFwiZ3JheVdhbGxcIjogMTYsXG5cdFx0XCJ3aGl0ZVwiOiAxNyxcblx0XHRcImdyb3VuZDZcIjogMTgsXG5cdFx0XCJzb2lsXCI6IDE5LFxuXHRcdFwiZ3JvdW5kN1wiOiAyMCxcblx0XHRcImdyb3VuZDhcIjogMjEsXG5cdFx0XCJpY2VcIjogMjIsXG5cdFx0XCJkb3duRmxvb3JcIjogMjMsXG5cdFx0XCJ1cEZsb29yXCI6IDI0LFxuXHRcdFwieWVsbG93RG9vclwiOiAyNSxcblx0XHRcImJsdWVEb29yXCI6IDI2LFxuXHRcdFwicmVkRG9vclwiOiAyNyxcblx0XHRcImdyZWVuRG9vclwiOiAyOCxcblx0XHRcInNwZWNpYWxEb29yXCI6IDI5LFxuXHRcdFwic3RlZWxEb29yXCI6IDMwLFxuXHRcdFwiYmx1ZVNob3AtbGVmdFwiOiAzMSxcblx0XHRcImJsdWVTaG9wLXJpZ2h0XCI6IDMyLFxuXHRcdFwicGlua1Nob3AtbGVmdFwiOiAzMyxcblx0XHRcInBpbmtTaG9wLXJpZ2h0XCI6IDM0LFxuXHRcdFwiYXJyb3dVcFwiOiAzNSxcblx0XHRcImFycm93RG93blwiOiAzNixcblx0XHRcImFycm93TGVmdFwiOiAzNyxcblx0XHRcImFycm93UmlnaHRcIjogMzgsXG5cdFx0XCJsaWdodFwiOiAzOSxcblx0XHRcImRhcmtMaWdodFwiOiA0MCxcblx0XHRcInNraVwiOiA0MSxcblx0XHRcImZsb3dlclwiOiA0Mixcblx0XHRcImJveFwiOiA0Myxcblx0XHRcImJveGVkXCI6IDQ0XG5cdH0sXG5cdFwiYW5pbWF0ZXNcIjoge1xuXHRcdFwic3RhclwiOiAwLFxuXHRcdFwibGF2YVwiOiAxLFxuXHRcdFwiYmx1ZVdhdGVyXCI6IDIsXG5cdFx0XCJ3YXRlclwiOiAzLFxuXHRcdFwieWVsbG93RG9vclwiOiA0LFxuXHRcdFwiYmx1ZURvb3JcIjogNSxcblx0XHRcInJlZERvb3JcIjogNixcblx0XHRcImdyZWVuRG9vclwiOiA3LFxuXHRcdFwic3BlY2lhbERvb3JcIjogOCxcblx0XHRcInN0ZWVsRG9vclwiOiA5LFxuXHRcdFwieWVsbG93V2FsbFwiOiAxMCxcblx0XHRcIndoaXRlV2FsbFwiOiAxMSxcblx0XHRcImJsdWVXYWxsXCI6IDEyLFxuXHRcdFwiY3J5c3RhbFVwXCI6IDEzLFxuXHRcdFwiY3J5c3RhbEJvdHRvbVwiOiAxNCxcblx0XHRcInN0YXJQb3J0YWxcIjogMTUsXG5cdFx0XCJmaXJlXCI6IDE2LFxuXHRcdFwicG9ydGFsXCI6IDE3LFxuXHRcdFwic3dpdGNoXCI6IDE4LFxuXHRcdFwibGF2YU5ldFwiOiAxOSxcblx0XHRcInBvaXNvbk5ldFwiOiAyMCxcblx0XHRcIndlYWtOZXRcIjogMjEsXG5cdFx0XCJjdXJzZU5ldFwiOiAyMixcblx0XHRcImRvd25Qb3J0YWxcIjogMjMsXG5cdFx0XCJsZWZ0UG9ydGFsXCI6IDI0LFxuXHRcdFwicmlnaHRQb3J0YWxcIjogMjUsXG5cdFx0XCJ1cFBvcnRhbFwiOiAyNlxuXHR9LFxuXHRcIm5wY3NcIjoge1xuXHRcdFwibWFuXCI6IDAsXG5cdFx0XCJ3b21hblwiOiAxLFxuXHRcdFwidGhpZWZcIjogMixcblx0XHRcImZhaXJ5XCI6IDMsXG5cdFx0XCJtYWdpY2lhblwiOiA0LFxuXHRcdFwid29tYW5NYWdpY2lhblwiOiA1LFxuXHRcdFwib2xkTWFuXCI6IDYsXG5cdFx0XCJjaGlsZFwiOiA3LFxuXHRcdFwid29vZFwiOiA4LFxuXHRcdFwicGlua1Nob3BcIjogOSxcblx0XHRcImJsdWVTaG9wXCI6IDEwLFxuXHRcdFwicHJpbmNlc3NcIjogMTEsXG5cdFx0XCJ3bHRcIjogMTIsXG5cdFx0XCJ3dFwiOiAxMyxcblx0XHRcIndydFwiOiAxNCxcblx0XHRcIndsXCI6IDE1LFxuXHRcdFwid2NcIjogMTYsXG5cdFx0XCJ3clwiOiAxNyxcblx0XHRcIndsYlwiOiAxOCxcblx0XHRcIndyYlwiOiAxOSxcblx0XHRcImRsdFwiOiAyMCxcblx0XHRcImR0XCI6IDIxLFxuXHRcdFwiZHJ0XCI6IDIyLFxuXHRcdFwiZGxcIjogMjMsXG5cdFx0XCJkY1wiOiAyNCxcblx0XHRcImRyXCI6IDI1LFxuXHRcdFwiZGxiXCI6IDI2LFxuXHRcdFwiZHJiXCI6IDI3XG5cdH0sXG5cdFwibnBjNDhcIjoge1xuXHRcdFwibnBjMFwiOiAwLFxuXHRcdFwibnBjMVwiOiAxLFxuXHRcdFwibnBjMlwiOiAyLFxuXHRcdFwibnBjM1wiOiAzXG5cdH0sXG5cdFwiZW5lbXlzXCI6IHtcblx0XHRcInJlZFNsaW1lXCI6IDEsXG5cdFx0XCJibGFja1NsaW1lXCI6IDIsXG5cdFx0XCJzbGltZWxvcmRcIjogMyxcblx0XHRcImJhdFwiOiA0LFxuXHRcdFwiYmlnQmF0XCI6IDUsXG5cdFx0XCJyZWRCYXRcIjogNixcblx0XHRcInZhbXBpcmVcIjogNyxcblx0XHRcInNrZWxldG9uXCI6IDgsXG5cdFx0XCJza2VsZXRvblNvaWxkZXJcIjogOSxcblx0XHRcInNrZWxldG9uQ2FwdGFpblwiOiAxMCxcblx0XHRcImdob3N0U2tlbGV0b25cIjogMTEsXG5cdFx0XCJ6b21iaWVcIjogMTIsXG5cdFx0XCJ6b21iaWVLbmlnaHRcIjogMTMsXG5cdFx0XCJyb2NrXCI6IDE0LFxuXHRcdFwic2xpbWVNYW5cIjogMTUsXG5cdFx0XCJibHVlUHJpZXN0XCI6IDE2LFxuXHRcdFwicmVkUHJpZXN0XCI6IDE3LFxuXHRcdFwiYnJvd25XaXphcmRcIjogMTgsXG5cdFx0XCJyZWRXaXphcmRcIjogMTksXG5cdFx0XCJ5ZWxsb3dHdWFyZFwiOiAyMCxcblx0XHRcImJsdWVHdWFyZFwiOiAyMSxcblx0XHRcInJlZEd1YXJkXCI6IDIyLFxuXHRcdFwic3dvcmRzbWFuXCI6IDIzLFxuXHRcdFwic29sZGllclwiOiAyNCxcblx0XHRcInllbGxvd0tuaWdodFwiOiAyNSxcblx0XHRcInJlZEtuaWdodFwiOiAyNixcblx0XHRcImRhcmtLbmlnaHRcIjogMjcsXG5cdFx0XCJ5ZWxsb3dLaW5nXCI6IDI5LFxuXHRcdFwiZ3JlZW5LaW5nXCI6IDMwLFxuXHRcdFwiYmx1ZUtuaWdodFwiOiAzMSxcblx0XHRcImdvbGRTbGltZVwiOiAzMixcblx0XHRcInBvaXNvblNrZWxldG9uXCI6IDMzLFxuXHRcdFwicG9pc29uQmF0XCI6IDM0LFxuXHRcdFwic3RlZWxSb2NrXCI6IDM1LFxuXHRcdFwic2tlbGV0b25Qcmllc3RcIjogMzYsXG5cdFx0XCJza2VsZXRvbktpbmdcIjogMzcsXG5cdFx0XCJza2VsZXRvbldpemFyZFwiOiAzOCxcblx0XHRcInJlZFNrZWxldG9uQ2FwdGlvblwiOiAzOSxcblx0XHRcImJhZEhlcm9cIjogNDAsXG5cdFx0XCJkZW1vblwiOiA0MSxcblx0XHRcImRlbW9uUHJpZXN0XCI6IDQyLFxuXHRcdFwiZ29sZEhvcm5TbGltZVwiOiA0Myxcblx0XHRcInJlZEtpbmdcIjogNDQsXG5cdFx0XCJ3aGl0ZUtpbmdcIjogNDUsXG5cdFx0XCJibGFja01hZ2ljaWFuXCI6IDQ2LFxuXHRcdFwic2lsdmVyU2xpbWVcIjogNDcsXG5cdFx0XCJzd29yZEVtcGVyb3JcIjogNDgsXG5cdFx0XCJ3aGl0ZUhvcm5TbGltZVwiOiA0OSxcblx0XHRcImJhZFByaW5jZXNzXCI6IDUwLFxuXHRcdFwiYmFkRmFpcnlcIjogNTEsXG5cdFx0XCJncmF5UHJpZXN0XCI6IDUyLFxuXHRcdFwicmVkU3dvcmRzbWFuXCI6IDUzLFxuXHRcdFwid2hpdGVHaG9zdFwiOiA1NCxcblx0XHRcInBvaXNvblpvbWJpZVwiOiA1NSxcblx0XHRcIm1hZ2ljRHJhZ29uXCI6IDU2LFxuXHRcdFwib2N0b3B1c1wiOiA1Nyxcblx0XHRcImRhcmtGYWlyeVwiOiA1OCxcblx0XHRcImdyZWVuS25pZ2h0XCI6IDU5LFxuXHRcdFwiZ3JlZW5TbGltZVwiOiAwLFxuXHRcdFwidHJlZTFcIjogMjhcblx0fSxcblx0XCJlbmVteTQ4XCI6IHtcblx0XHRcImFuZ2VsXCI6IDAsXG5cdFx0XCJlbGVtZW50YWxcIjogMSxcblx0XHRcInN0ZWVsR3VhcmRcIjogMixcblx0XHRcImV2aWxCYXRcIjogM1xuXHR9LFxuXHRcIml0ZW1zXCI6IHtcblx0XHRcInllbGxvd0tleVwiOiAwLFxuXHRcdFwiYmx1ZUtleVwiOiAxLFxuXHRcdFwicmVkS2V5XCI6IDIsXG5cdFx0XCJncmVlbktleVwiOiAzLFxuXHRcdFwic3RlZWxLZXlcIjogNCxcblx0XHRcImJpZ0tleVwiOiA2LFxuXHRcdFwicmVkSmV3ZWxcIjogMTYsXG5cdFx0XCJibHVlSmV3ZWxcIjogMTcsXG5cdFx0XCJncmVlbkpld2VsXCI6IDE4LFxuXHRcdFwieWVsbG93SmV3ZWxcIjogMTksXG5cdFx0XCJyZWRQb3Rpb25cIjogMjAsXG5cdFx0XCJibHVlUG90aW9uXCI6IDIxLFxuXHRcdFwiZ3JlZW5Qb3Rpb25cIjogMjIsXG5cdFx0XCJ5ZWxsb3dQb3Rpb25cIjogMjMsXG5cdFx0XCJsaWZlV2FuZFwiOiAzMyxcblx0XHRcInN3b3JkMFwiOiA2MCxcblx0XHRcInN3b3JkMVwiOiA1MCxcblx0XHRcInN3b3JkMlwiOiA1MSxcblx0XHRcInN3b3JkM1wiOiA1Mixcblx0XHRcInN3b3JkNFwiOiA1Myxcblx0XHRcInN3b3JkNVwiOiA1NCxcblx0XHRcInNoaWVsZDBcIjogNjEsXG5cdFx0XCJzaGllbGQxXCI6IDU1LFxuXHRcdFwic2hpZWxkMlwiOiA1Nixcblx0XHRcInNoaWVsZDNcIjogNTcsXG5cdFx0XCJzaGllbGQ0XCI6IDU4LFxuXHRcdFwic2hpZWxkNVwiOiA1OSxcblx0XHRcImJvb2tcIjogOSxcblx0XHRcImZseVwiOiAxMixcblx0XHRcInBpY2theGVcIjogNDUsXG5cdFx0XCJpY2VQaWNrYXhlXCI6IDQ0LFxuXHRcdFwiYm9tYlwiOiA0Myxcblx0XHRcImNlbnRlckZseVwiOiAxMyxcblx0XHRcInVwRmx5XCI6IDE1LFxuXHRcdFwiZG93bkZseVwiOiAxNCxcblx0XHRcImNvaW5cIjogMTEsXG5cdFx0XCJzbm93XCI6IDQxLFxuXHRcdFwiY3Jvc3NcIjogNDAsXG5cdFx0XCJzdXBlclBvdGlvblwiOiAyOSxcblx0XHRcImVhcnRocXVha2VcIjogOCxcblx0XHRcInBvaXNvbldpbmVcIjogMjQsXG5cdFx0XCJ3ZWFrV2luZVwiOiAyNSxcblx0XHRcImN1cnNlV2luZVwiOiAyNyxcblx0XHRcInN1cGVyV2luZVwiOiAyOCxcblx0XHRcImtuaWZlXCI6IDQyLFxuXHRcdFwibW9uZXlQb2NrZXRcIjogNDYsXG5cdFx0XCJzaG9lc1wiOiA0Nyxcblx0XHRcImhhbW1lclwiOiA0OCxcblx0XHRcImp1bXBTaG9lc1wiOiA0OSxcblx0XHRcInNraWxsMVwiOiAzMCxcblx0XHRcIndhbmRcIjogMTBcblx0fSxcblx0XCJhdXRvdGlsZVwiOiB7XG5cdFx0XCJhdXRvdGlsZVwiOiAwLFxuXHRcdFwiYXV0b3RpbGUxXCI6IDAsXG5cdFx0XCJhdXRvdGlsZTJcIjogMCxcblx0XHRcImF1dG90aWxlM1wiOiAwLFxuXHRcdFwiYXV0b3RpbGU0XCI6IDBcblx0fVxufVxuXG4vKioqIEVYUE9SVFMgRlJPTSBleHBvcnRzLWxvYWRlciAqKiovXG5tb2R1bGUuZXhwb3J0cyA9IGljb25zXzQ2NjVlZTEyXzNhMWZfNDRhNF9iZWEzXzBmY2NiYTYzNGRjMTsiLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCByZWFkZGlyID0gKGRpciwgdHJhdmVyc2FsLCByZWdleCkgPT4ge1xuICBjb25zdCBhbGwgPSBbXTtcbiAgY29uc3Qgcm9vdCA9IHBhdGgucmVzb2x2ZShkaXIpO1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuICBxdWV1ZS51bnNoaWZ0KCcuJyk7XG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBzcmMgPSBxdWV1ZS5zaGlmdCgpO1xuICAgIGNvbnN0IGxpc3QgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4ocm9vdCwgc3JjKSwge1xuICAgICAgd2l0aEZpbGVUeXBlczogdHJ1ZSxcbiAgICB9KTtcbiAgICBsaXN0LmZvckVhY2goKGRpcmVudCkgPT4ge1xuICAgICAgaWYgKGRpcmVudC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIGlmICh0cmF2ZXJzYWwpIHF1ZXVlLnB1c2goYCR7c3JjfS8ke2RpcmVudC5uYW1lfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ2V4LnRlc3QoZGlyZW50Lm5hbWUpKSB8fCAhcmVnZXgpIHtcbiAgICAgICAgYWxsLnB1c2goYCR7c3JjfS8ke2RpcmVudC5uYW1lfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBhbGw7XG59O1xuY29uc3QgcmVhZCA9IHtcbiAgcmVhZGRpcixcbn07XG5leHBvcnQgZGVmYXVsdCByZWFkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmVlLXRleC1wYWNrZXItY29yZVwiKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vTVQwLmpzXCI6IDEwLFxuXHRcIi4vc2FtcGxlMC5qc1wiOiAxMSxcblx0XCIuL3NhbXBsZTEuanNcIjogMTIsXG5cdFwiLi9zYW1wbGUyLmpzXCI6IDEzLFxuXHRcIi4vc2FtcGxlMy5qc1wiOiAxNFxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDk7IiwibWFpbi5mbG9vcnMuTVQwPVxue1xuXCJmbG9vcklkXCI6IFwiTVQwXCIsXG5cInRpdGxlXCI6IFwi5Li75aGUIDAg5bGCXCIsXG5cIm5hbWVcIjogXCIwXCIsXG5cImNhbkZseVRvXCI6IHRydWUsXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxuXCJjYW5ub3RWaWV3TWFwXCI6IGZhbHNlLFxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3JvdW5kXCIsXG5cImltYWdlc1wiOiBbXSxcblwiaXRlbV9yYXRpb1wiOiAxLFxuXCJtYXBcIjogW1xuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXG5dLFxuXCJmaXJzdEFycml2ZVwiOiBbXSxcblwicGFyYWxsZWxEb1wiOiBcIlwiLFxuXCJldmVudHNcIjoge30sXG5cImNoYW5nZUZsb29yXCI6IHt9LFxuXCJhZnRlckJhdHRsZVwiOiB7fSxcblwiYWZ0ZXJHZXRJdGVtXCI6IHt9LFxuXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxuXCJjYW5ub3RNb3ZlXCI6IHt9LFxuXCJiZ21hcFwiOiBbXG5cbl0sXG5cImZnbWFwXCI6IFtcblxuXSxcbn0iLCJtYWluLmZsb29ycy5zYW1wbGUwPVxue1xuICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICBcInRpdGxlXCI6IFwi5qC35p2/IDAg5bGCXCIsXG4gICAgXCJuYW1lXCI6IFwiMFwiLFxuICAgIFwiY2FuRmx5VG9cIjogdHJ1ZSxcbiAgICBcImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxuICAgIFwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxuICAgIFwiaW1hZ2VzXCI6IFtdLFxuICAgIFwiYmdtXCI6IFwiYmdtLm1wM1wiLFxuICAgIFwiaXRlbV9yYXRpb1wiOiAxLFxuICAgIFwibWFwXCI6IFtcbiAgICBbICAwLCAgMCwyMjAsICAwLCAgMCwgMjAsIDg3LCAgMywgNjUsIDY0LCA0NCwgNDMsIDQyXSxcbiAgICBbICAwLDI0NiwgIDAsMjQ2LCAgMCwgMjAsICAwLCAgMywgNTgsIDU5LCA2MCwgNjEsIDQxXSxcbiAgICBbMjE5LCAgMCwgIDAsICAwLDIxOSwgMjAsICAwLCAgMywgNTcsIDI2LCA2MiwgNjMsIDQwXSxcbiAgICBbIDIwLCAyMCwxMjUsIDIwLCAyMCwgMjAsICAwLCAgMywgNTMsIDU0LCA1NSwgNTYsIDM5XSxcbiAgICBbMjE2LDI0NywyNjMsMjM1LDI0OCwgIDYsICAwLCAgMywgNDksIDUwLCA1MSwgNTIsIDM4XSxcbiAgICBbICA2LCAgNiwxMjUsICA2LCAgNiwgIDYsICAwLDIyOSwgNDUsIDQ2LCA0NywgNDgsIDM3XSxcbiAgICBbMjI0LDI1NCwyMTIsMjYyLDIwNCwgIDUsICAwLCAgMSwgMzEsIDMyLCAzNCwgMzMsIDM2XSxcbiAgICBbMjAxLDI2MSwyMTcsMjY0LDIwNywgIDUsICAwLCAgMSwgMjcsIDI4LCAyOSwgMzAsIDM1XSxcbiAgICBbICA1LCAgNSwxMjUsICA1LCAgNSwgIDUsICAwLCAgMSwgMjEsIDIyLCAyMywgMjQsIDI1XSxcbiAgICBbICAwLCAgMCwyMzcsICAwLCAgMCwgIDAsIDQ1LCAgMSwgIDEsICAxLDEyMSwgIDEsICAxXSxcbiAgICBbICA0LCAgNCwxMzMsICA0LCAgNCwgIDQsICAwLCAgMCwgIDAsICAwLCAgMCwgODUsMTI0XSxcbiAgICBbIDg3LCAxMSwgMTIsIDEzLCAxNCwgIDQsICA0LCAgMiwgIDIsICAyLDEyMiwgIDIsICAyXSxcbiAgICBbIDg4LCA4OSwgOTAsIDkxLCA5MiwgOTMsIDk0LCAgMiwgODEsIDgyLCA4MywgODQsIDg2XVxuXSxcbiAgICBcImZpcnN0QXJyaXZlXCI6IFtcbiAgICAgICAgXCJcXHRb5qC35p2/5o+Q56S6XemmluasoeWIsOi+vuafkOWxguWPr+S7peinpuWPkSBmaXJzdEFycml2ZSDkuovku7bvvIzor6Xkuovku7blj6/nsbvkvLzkuo5STVhQ5Lit55qE4oCc6Ieq5Yqo5omn6KGM6ISa5pys4oCd44CCXFxuXFxu5pys5LqL5Lu25pSv5oyB5LiA5YiH55qE5LqL5Lu257G75Z6L77yM5bi45bi455So5p2l6Kem5Y+R5a+56K+d77yM5L6L5aaC77yaXCIsXG4gICAgICAgIFwi5pys5bGC5Li76KaB5a+56YGT5YW344CB6Zeo44CB5oCq54mp562J6L+b6KGM5LuL57uN77yM5pyJ5YWz5LqL5Lu255qE5ZCE56eN5L+h5oGv5Zyo5LiL5LiA5bGC5Lya5pyJ5pu05Li66K+m57uG55qE6K+05piO44CCXCJcbiAgICBdLFxuICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCIxMCw5XCI6IFtcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYW5d6L+Z5Lqb5piv5pys5qC35p2/5pSv5oyB55qE5omA5pyJ55qE6YGT5YW344CCXFxuXFxu6YGT5YW35YiG5Li65Zub57G777yaaXRlbXMsIGNvbnN0YW50cywgdG9vbHPvvIxlcXVpcHPjgIJcXG5pdGVtcyDkuLrljbPmjaHljbPnlKjnsbvpgZPlhbfvvIzkvovlpoLlrp3nn7PjgIHooYDnk7bjgIHliZHnm77nrYnjgIJcXG5jb25zdGFudHMg5Li65rC45LmF6YGT5YW377yM5L6L5aaC5oCq54mp5omL5YaM44CB5qW85bGC5Lyg6YCB5Zmo44CB5bm46L+Q6YeR5biB562J44CCXFxudG9vbHMg5Li65raI6ICX57G76YGT5YW377yM5L6L5aaC56C05aKZ6ZWQ44CB54K45by544CB5Lit5b+D5a+556ew6aOe6KGM5Zmo562J44CCXFxuZXF1aXBzIOS4uuijheWkh++8jOS+i+WmguWJkeebvuetieOAglwiLFxuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl1cXGJbdXBd5pyJ5YWz6YGT5YW35pWI5p6c77yM5a6a5LmJ5ZyoaXRlbXMuanPkuK3jgIJcXG7nm67liY3lpKflpJrmlbDpgZPlhbflt7LmnInpu5jorqTooYzkuLrvvIzlpoLmnInoh6rlrprkuYnnmoTpnIDmsYLliJnpnIDlnKhpdGVtcy5qc+S4reS/ruaUueS7o+eggeOAglwiLFxuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hbl1cXGJbdXBd5ou+5Y+W6YGT5YW357uT5p2f5ZCO5Y+v6Kem5Y+RIGFmdGVyR2V0SXRlbSDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIjEwLDExXCI6IFtcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5nkupvmmK/pl6jvvIzpnIDopoHlr7nlupTnmoTpkqXljJnmiZPlvIDjgIJcXG7mnLrlhbPpl6jlv4Xpobvkvb/nlKjnibnmrornmoTlvIDms5XjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3lvIDpl6jlkI7lj6/op6blj5EgYWZ0ZXJPcGVuRG9vciDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIjIsMTBcIjogW1xuICAgICAgICAgICAgXCJcXHRb5bCR5aWzLG5wYzBd6L+Z5Lqb5piv6Lev6Zqc44CB5qW85qKv44CB5Lyg6YCB6Zeo44CCXCIsXG4gICAgICAgICAgICBcIlxcdFvlsJHlpbMsbnBjMF3ooYDnvZHnmoTkvKTlrrPmlbDlgLzjgIHkuK3mr5LlkI7mr4/mraXkvKTlrrPmlbDlgLzjgIHoobDlvLHml7bmlLvpmLLkuIvpmY3nmoTmlbDlgLzvvIzpg73lnKggZGF0YS5qcyDlhoXlrprkuYnjgIJcXG5cXG7ot6/pmpzlkIzmoLfkvJrlsL3ph4/ooqvoh6rliqjlr7vot6/nu5Xov4fjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+WwkeWlsyxucGMwXealvOair+WSjOS8oOmAgemXqOmcgOimgeWcqGNoYW5nZUZsb29y5Lit5a6a5LmJ55uu5qCH5qW85bGC5ZKM5L2N572u77yM5Y+v5Y+C6KeB5qC35p2/6YeM5bey5pyJ55qE55qE5YaZ5rOV44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCIyLDhcIjogW1xuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXei/meS6m+mDveaYr+WQhOenjeWQhOagt+eahOaAqueJqe+8jOaJgOacieaAqueJqeeahOaVsOaNrumDveWcqGVuZW15cy5qc+S4reiuvue9ruOAglwiLFxuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXei/meaJueaAqueJqeWIhuWIq+S4uu+8muaZrumAmuOAgeWFiOaUu+OAgemtlOaUu+OAgeWdmuWbuuOAgTLov57lh7vjgIEz6L+e5Ye744CBNOi/nuWHu+OAgeegtOeUsuOAgeWPjeWHu+OAgeWHgOWMluOAglwiLFxuICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LG1hZ2ljaWFuXeaJk+i0peaAqueJqeWQjuWPr+inpuWPkSBhZnRlckJhdHRsZSDkuovku7bjgIJcXG5cXG7mnInlhbPkuovku7bnmoTlkITnp43kv6Hmga/lnKjkuIvkuIDlsYLkvJrmnInmm7TkuLror6bnu4bnmoTor7TmmI7jgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIjIsNVwiOiBbXG4gICAgICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d5qih5Lu/44CB5ZC46KGA44CB5Lit5q+S44CB6KGw5byx44CB6K+F5ZKS44CCXFxuXFxu6K+35rOo5oSP5ZC46KGA5oCq6ZyA6KaB6K6+572udmFsdWXkuLrlkLjooYDmlbDlgLzvvIzlj6/lj4Lop4HmoLfmnb/kuK3pu5HmmpflpKfms5XluIjnmoTlhpnms5XjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIjIsM1wiOiBbXG4gICAgICAgICAgICBcIlxcdFvogIHkurosbWFnaWNpYW5d6aKG5Z+f44CB5aS55Ye744CCXFxu6K+35rOo5oSP6aKG5Z+f5oCq6ZyA6KaB6K6+572udmFsdWXkuLrkvKTlrrPmlbDlgLzvvIzlj6/lj4Lop4HmoLfmnb/kuK3liJ3nuqflt6vluIjnmoTlhpnms5XjgIJcIixcbiAgICAgICAgICAgIFwiXFx0W+iAgeS6uixtYWdpY2lhbl3lpLnlh7vlkozpoobln5/lkIzml7blj5HnlJ/ml7blhYjorqHnrpfpoobln5/vvIzlho3lpLnlh7vjgIJcXG7oh6rliqjlr7vot6/lkIzmoLfkvJrlsL3ph4/nu5Xov4fkvaDorr7nva7nmoTov5nkupvngrnjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIjEyLDEwXCI6IHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5Y+q5pyJ5qW85LiK5ZCv55So5LqL5Lu25ZCO77yM5omN6IO955yL5Yiw5oiR5bm25Y+v5Lul5ZKM5oiR5a+56K+d5p2l6Kem5Y+R5LqL5Lu244CCXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiY2hhbmdlRmxvb3JcIjoge1xuICAgICAgICBcIjYsMFwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXG4gICAgICAgICAgICBcInN0YWlyXCI6IFwiZG93bkZsb29yXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIwLDExXCI6IHtcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDEyXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiMCwxMlwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMSwxMlwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAxMlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIjIsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCIzLDEyXCI6IHtcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCI0LDEyXCI6IHtcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiNSwxMlwiOiB7XG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUwXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiAwLFxuICAgICAgICAgICAgXCJwb3J0YWxXaXRob3V0VHJpZ2dlclwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcIjYsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImFmdGVyQmF0dGxlXCI6IHtcbiAgICAgICAgXCIyLDZcIjogW1xuICAgICAgICAgICAgXCJcXHRbZ2hvc3RTa2VsZXRvbl3kuI3lj6/og73vvIzkvaDmgI7kuYjlj6/og73miZPotKXmiJHvvIFcXG7vvIjkuIDkuKrmiZPotKXmgKrnianop6blj5HnmoTkuovku7bvvIlcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcImFmdGVyR2V0SXRlbVwiOiB7XG4gICAgICAgIFwiMTEsOFwiOiBbXG4gICAgICAgICAgICBcIueUseS6jueKtuaAgeagj+aUvuS4jeS4i++8jOe7v+mSpeWMmeWSjOmTgemXqOmSpeWMmeWdh+inhuS4unRvb2xz77yM5pS+5YWl5bel5YW35qCP5Lit44CCXFxu56Kw5Yiw57u/6Zeo5ZKM6ZOB6Zeo5LuN54S25Lya6Ieq5Yqo5L2/55So5byA6Zeo44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCI4LDZcIjogW1xuICAgICAgICAgICAgXCLnlLHkuo7lkLjooYDlkozlpLnlh7vnrYnnmoTlrZjlnKjvvIzooYDnk7bpu5jorqToh6rliqjooqvnu5Xot6/jgIJcXG7kvaDlj6/ku6Xkv67mlLlkYXRhLmpz5Lit55qE57O757ufRmxhZ+adpeiuvue9rui/meS4gOmhueOAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiOCw3XCI6IFtcbiAgICAgICAgICAgIFwi5aaC6ZyA5L+u5pS55raI6ICX5ZOB55qE5pWI5p6c77yM6K+35YmN5b6AIGRhdGEuanMg77yM5om+5Yiw5bm25L+u5pS5dmFsdWVz5YaF5a+55bqU55qE5YW35L2T5pWw5YC85Y2z5Y+v44CCXFxu5aaC5p6c5pyJ5pu06auY57qn55qE6ZyA5rGC77yI5aaC5q+P5Liq5Yy65Z+f5a6d55+z5pWw5YC85Y+Y5YyW77yJ77yM6K+m6KeBZG9j5paH5qGj5YaF55qE5YGa5rOV6K+05piO44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCI5LDVcIjogW1xuICAgICAgICAgICAgXCLmr4/lsYLmpbznmoQgY2FuRmx5VG8g5Yaz5a6a5LqG6K+l5qW85bGC6IO95ZCm6KKr6aOe5Yiw44CCXFxuXFxu5LiN6IO96KKr6aOe5Yiw55qE5qW85bGC5Lmf5peg5rOV5L2/55So5qW85bGC5Lyg6YCB5Zmo44CCXCIsXG4gICAgICAgICAgICBcIumjnuihjOeahOalvOWxgumhuuW6j+eUsSBtYWluLmpzIOS4rSBmbG9vcklkcyDliqDovb3pobrluo/miYDlhrPlrprjgIJcXG5cXG7mmK/lkKblv4XpobvlnKjmpbzmoq/ovrnkvb/nlKjmpbzkvKDlmajnlLEgZGF0YS5qcyDkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMCw1XCI6IFtcbiAgICAgICAgICAgIFwi56C05aKZ6ZWQ5piv56C06Z2i5YmN55qE5aKZ5aOB6L+Y5piv5Zub5Liq5pa55ZCR55qE5aKZ5aOB77yM55SxZGF0YS5qc+S4reeahOezu+e7n0ZsYWfmiYDlhrPlrprjgIJcIlxuICAgICAgICBdLFxuICAgICAgICBcIjgsNFwiOiBbXG4gICAgICAgICAgICBcIueCuOW8ueaYr+WPquiDveeCuOmdouWJjeeahOaAqueJqei/mOaYr+Wbm+S4quaWueWQkeeahOaAqueJqe+8jOeUsWRhdGEuanPkuK3nmoTns7vnu59GbGFn5omA5Yaz5a6a44CCXFxu5aaC5Y+q6IO954K45YmN5pa55oCq54mp5YiZ5ZKM5LiK6Z2i55qE5Zyj6ZSk562J5Lu344CCXFxu5LiN6IO96KKr54K455qE5oCq54mp5ZyoZW5lbXlz5Lit5Y+v5Lul5a6a5LmJ77yM5Y+v5Y+C6KeB5qC35p2/6YeM6buR6KGj6a2U546L5ZKM6buR5pqX5aSn5rOV5biI55qE5YaZ5rOV44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMCw0XCI6IFtcbiAgICAgICAgICAgIFwi4oCc5LiK5qW84oCd5ZKM4oCc5LiL5qW84oCd55qE55uu5qCH5bGC55SxIG1haW4uanMg55qEIGZsb29ySWRz6aG65bqP5omA5Yaz5a6a44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCI5LDJcIjogW1xuICAgICAgICAgICAgXCLor6XpgZPlhbfpu5jorqTmmK/lpKfpu4Tpl6jpkqXljJnvvIzlpoLpnIDmlLnkuLrpkqXljJnnm5Lnm7TmjqXkv67mlLkgZGF0YS5qcyDkuK3nmoTns7vnu59GbGFn5Y2z5Y+v44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMCwyXCI6IFtcbiAgICAgICAgICAgIFwi5bGg6b6Z5YyV6aaW55uu5YmN5pyq6KKr5a6a5LmJ77yM5Y+v6IO96ZyA6KaB6Ieq6KGM5a6e546w5Yqf6IO944CCXFxu5pyJ5YWz5aaC5L2V5a6e546w5LiA5Liq6YGT5YW35Yqf6IO95Y+C6KeBZG9j5paH5qGj44CCXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMiw3XCI6IFtcbiAgICAgICAgICAgIFwi5ZyoIGRhdGEuanMg55qE57O757ufRmxhZ+S4reiuvue9ruaYr+WQpuWQr+eUqOijheWkh+agj+OAglxcbuWmguaenOS4jeWQr+eUqOWImeijheWkh+S8muebtOaOpeWinuWKoOWxnuaAp+OAglwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiMTIsNlwiOiBbXG4gICAgICAgICAgICBcIuWcqCBkYXRhLmpzIOeahOezu+e7n0ZsYWfkuK3orr7nva7mmK/lkKblkK/nlKjoo4XlpIfmoI/mjInpkq7jgIJcXG7lpoLmnpzlkK/nlKjliJnoo4XlpIfmoI/mjInpkq7kvJrmm7/ku6PmpbzkvKDmjInpkq7jgIJcIlxuICAgICAgICBdLFxuICAgICAgICBcIjEyLDVcIjogW1xuICAgICAgICAgICAgXCLoo4XlpIfnmoTnp43nsbvnlLHlhajloZTlsZ7mgKfkuK3nmoRlcXVpcE5hbWXlhrPlrposdHlwZeeahOWAvOWwseaYr+ivpeexu+Wei+WcqGVxdWlwTmFtZeS4reeahOS9jeasoe+8jOS+i+Wmgum7mOiupOaDheWGteS4i2VxdWlwdHlwZeS4ujDku6PooajmrablmajvvIzlkIzml7blj6rmnIl0eXBl5Li6MOeahOijheWkh+eahGFuaW1hdGXlsZ7mgKfnlJ/mlYhcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcImFmdGVyT3BlbkRvb3JcIjoge1xuICAgICAgICBcIjExLDEyXCI6IFtcbiAgICAgICAgICAgIFwi5L2g5byA5LqG5LiA5Liq57u/6Zeo77yM6Kem5Y+R5LqG5LiA5LiqYWZ0ZXJPcGVuRG9vcuS6i+S7tlwiXG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiY2Fubm90TW92ZVwiOiB7fSxcbiAgICBcImJnbWFwXCI6IFtcbiAgICBbMTAxODgsMTAxODksMTAxOTMsMTAxOTQsMTAxOTUsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWzEwMTk2LDEwMTk3LDEwMTg1LCAgMCwgIDAsICAwLDEwMTg1LDEwMTg2LDEwMTg3LCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF1cbl0sXG4gICAgXCJmZ21hcFwiOiBbXG5cbl0sXG4gICAgXCJ3aWR0aFwiOiAxMyxcbiAgICBcImhlaWdodFwiOiAxMyxcbiAgICBcImF1dG9FdmVudFwiOiB7fVxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTE9XG57XG5cImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXG5cInRpdGxlXCI6IFwi5qC35p2/IDEg5bGCXCIsXG5cIm5hbWVcIjogXCIxXCIsXG5cImNhbkZseVRvXCI6IHRydWUsXG5cImNhblVzZVF1aWNrU2hvcFwiOiB0cnVlLFxuXCJkZWZhdWx0R3JvdW5kXCI6IFwiZ3Jhc3NcIixcblwiaW1hZ2VzXCI6IFtcbiAgICBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIFwiYmcuanBnXCIsXG4gICAgICAgIDBcbiAgICBdXG5dLFxuXCJ3ZWF0aGVyXCI6IFtcbiAgICBcInNub3dcIixcbiAgICA2XG5dLFxuXCJpdGVtX3JhdGlvXCI6IDEsXG5cIm1hcFwiOiBbXG4gICAgWyAgNywxMzEsICA4LDE1MiwgIDksMTMwLCAxMCwxNTIsMTY2LDE2NSwxMzIsMTY1LDE2Nl0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwxNTIsMTY1LDE2NCwgIDAsMTYyLDE2NV0sXG4gICAgWzE1MiwxNTIsMTUyLDE1MiwxMjEsMTUyLDE1MiwxNTIsICAwLCAgMCwyMjksICAwLCAgMF0sXG4gICAgWyA0MywgMzMsIDQ0LDE1MSwgIDAsICAwLCAgMCwxNTIsMTY1LDE2MSwgIDAsMTYzLDE2NV0sXG4gICAgWyAyMSwgMjIsIDIxLDE1MSwgIDAsICAwLCAgMCwxNTIsMTY2LDE2NSwgIDAsMTY1LDE2Nl0sXG4gICAgWzE1MSwyNDUsMTUxLDE1MSwgIDAsIDg3LCAgMCwxNTIsMTUyLDE1MiwgODUsMTUzLDE1M10sXG4gICAgWyAgMCwyNDYsICAwLDE1MSwgIDAsICAwLCAgMCwxNTIsMTUyLDIyMSwgIDAsMjIxLDE1M10sXG4gICAgWzI0NiwgIDAsMjQ2LDE1MSwgIDAsICAwLCAgMCwxMjEsIDg1LCAgMCwgIDAsICAwLDE1M10sXG4gICAgWzE1MSwyNDYsMTUxLDE1MSwgIDAsMTUzLDE1MywxNTMsMTUzLDE1MywxNTMsMTUzLDE1M10sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwxNjQsICAwLCAgMCwxNjMsICAwLCAgMF0sXG4gICAgWyAgMSwgIDEsICAxLCAgMSwgIDAsIDIwLCAgMCwgIDAsICAwLDE2MiwgIDAsMTYxLCAgMF0sXG4gICAgWyAgMSwgIDAsMTIzLCAgMSwgIDAsIDIwLDEyNCwgIDAsMTIxLCAgMCwxMjIsICAwLDEyNl0sXG4gICAgWyAgMSwgIDAsICAwLCAgMSwgODgsIDIwLCA4NiwgIDAsICAwLCAgMCwgIDAsICAwLDEyMl1cbl0sXG5cImZpcnN0QXJyaXZlXCI6IFtdLFxuXCJldmVudHNcIjoge1xuICAgIFwiNCwxMFwiOiBbXG4gICAgICAgIFwiXFx0W+agt+adv+aPkOekul3mnKzlsYLmpbzlsIbkvJrlr7nlkITnsbvkuovku7bov5vooYzku4vnu43jgIJcIixcbiAgICAgICAgXCLlt6bovrnmmK/kuIDkuKrku781MOWxgueahOmZt+mYseWBmuazle+8jOS4iuaWueaYr+WVhuW6l+OAgeW/q+aNt+WVhuW6l+eahOS9v+eUqOaWueazle+8jOWPs+S4iuaYr+S4gOS4quWFuOWei+eahOadgOaAquW8gOmXqOeahOS+i+WtkO+8jOWPs+S4i+aYr+WQhOexu+WPr+iDveeahE5QQ+S6i+S7tuOAglwiLFxuICAgICAgICBcIuacrOagt+adv+ebruWJjeaUr+aMgeeahOS6i+S7tuWIl+ihqOWkp+iHtOacie+8mlxcbnRleHQ6IOaYvuekuuS4gOauteaWh+Wtl++8iOavlOWmguS9oOeOsOWcqOato+WcqOeci+WIsOeahO+8iVxcbnRpcDog5bem5LiK6KeS5pi+56S65o+Q56S6XFxuc2hvdzog5L2/5LiA5Liq5LqL5Lu25pyJ5pWI77yI5Y+v6KeB44CB5Y+v6KKr5Lqk5LqS77yJXFxuaGlkZTog5L2/5LiA5Liq5LqL5Lu25aSx5pWI77yI5LiN5Y+v6KeB44CB5LiN5Y+v6KKr5Lqk5LqS77yJXFxudHJpZ2dlcjog6Kem5Y+R5Y+m5LiA5Liq5Zyw54K555qE5LqL5Lu2XFxuYW5pbWF0ZTog5pi+56S65Yqo55S7XFxuYmF0dGxlOiDlvLrliLblkozmn5DmgKrnianmiJjmlpdcXG5vcGVuRG9vcjog5peg6ZyA6ZKl5YyZ5byA6Zeo77yI5L6L5aaC5py65YWz6Zeo44CB5pqX5aKZ77yJXCIsXG4gICAgICAgIFwib3BlblNob3A6IOaJk+W8gOS4gOS4quWFqOWxgOWVhuW6l1xcbmRpc2FibGVTaG9wOiDnpoHnlKjkuIDkuKrlhajlsYDllYblupdcXG5jaGFuZ2VGbG9vcjog5Lyg6YCB5YuH5aOr5Yiw5p+Q5bGC5p+Q5L2N572uXFxuY2hhbmdlUG9zOiDkvKDpgIHli4flo6vliLDlvZPlsYLmn5DkvY3nva7vvJvovazlkJFcXG5zaG93SW1hZ2U6IOaYvuekuuWbvueJh1xcbnNldEZnOiDmm7TmlLnnlLvpnaLoibLosINcXG5zZXRXZWF0aGVyOiDmm7TmlLnlpKnmsJRcXG5tb3ZlOiDnp7vliqjkuovku7bmlYjmnpxcXG5tb3ZlSGVybzog56e75Yqo5YuH5aOr5pWI5p6cXFxucGxheUJnbTog5pKt5pS+5p+Q5Liq6IOM5pmv6Z+z5LmQXFxucGF1c2VCZ206IOaaguWBnOiDjOaZr+mfs+S5kFxcbnJlc3VtZUJnbTog5oGi5aSN6IOM5pmv6Z+z5LmQ55qE5pKt5pS+XFxucGxheVNvdW5kOiDmkq3mlL7mn5DkuKrpn7PpopFcIixcbiAgICAgICAgXCJpZjog5p2h5Lu25Yik5patXFxuY2hvaWNlczog5o+Q5L6b6YCJ6aG5XFxuc2V0VmFsdWU6IOiuvue9ruWLh+Wjq+WxnuaAp+mBk+WFt++8jOaIluafkOS4quWPmOmHjy9mbGFnXFxudXBkYXRlOiDmm7TmlrDnirbmgIHmoI/lkozlnLDlm77mmL7kvKRcXG53aW46IOiOt+W+l+iDnOWIqe+8iOa4uOaIj+mAmuWFs++8iVxcbmxvc2U6IOa4uOaIj+Wksei0pVxcbnNsZWVwOiDnrYnlvoXlpJrlsJHmr6vnp5JcXG5leGl0OiDnq4vliLvnu5PmnZ/lvZPliY3kuovku7ZcXG5yZXZpc2l0OiDnq4vliLvnu5PmnZ/kuovku7blubbph43mlrDop6blj5FcXG5mdW5jdGlvbjog6Ieq5a6a5LmJSlPohJrmnKxcXG5cXG7mm7TlpJrmlK/mjIHnmoTkuovku7bov5jlnKjnvJblhpnkuK3vvIzmrKLov47mgqjlrp3otLXnmoTmhI/op4HjgIJcIixcbiAgICAgICAgXCLmnInlhbPlkITkuovku7bnmoTmoLfkvovvvIzlj6/lj4Lop4HmnKzlsYLkuIDkuptOUEPnmoTlhpnms5XjgIJcXG7miYDmnInkuovku7bmoLfkvovmnKzlsYLpg73mnInku4vnu43jgIJcXG5cXG7kuIDkuKroh6rlrprkuYnkuovku7blpITnkIblrozlkI7vvIzpnIDopoHosIPnlKh7XFxcInR5cGVcXFwiOiBcXFwiaGlkZVxcXCJ96K+l5LqL5Lu25omN5LiN5Lya5YaN5qyh5Ye6546w44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjEsNVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiMSw2XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCIwLDdcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjIsN1wiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiMSw4XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCIxLDdcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDE1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbcmVkS2luZ13mrKLov47mnaXliLDprZTloZTvvIzkvaDmmK/nrKzkuIDnmb7kvY3mjJHmiJjogIXjgIJcXG7oi6XkvaDog73miZPotKXmiJHmiYDmnInnmoTmiYvkuIvvvIzmiJHlsLHkuI7kvaDkuIDlr7nkuIDnmoTlhrPmlpfjgIJcXG7njrDlnKjkvaDlv4XpobvmjqXlj5fmiJHnmoTlronmjpLjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5LuA5LmI77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6YXRrXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmF0ay8xMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6ZGVmXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOmRlZi8xMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRDdXJ0YWluXCIsXG4gICAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiAxMjUwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogNzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNoYW5nZUZsb29yXCIsXG4gICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUxXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRyaWdnZXJcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiMiwxMVwiOiBbXG4gICAgICAgIFwiXFx0W+adsOWFiyx0aGllZl3lloLvvIHphpLphpLvvIHlv6vphpLphpLvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0Q3VydGFpblwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDE1MDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13pop3vvIzmiJHov5nmmK/lnKjku4DkuYjlnLDmlrnvvJ9cIixcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeS9oOiiq+mtlOeOi+aKk+S6hui1t+adpeaJlOi/m+S6huebkeeLse+8jOWSjOaIkeWFs+WcqOS6huS4gOi1t++8jOS9huaYr+W5uOi/kOeahOaYr+aIkeWcqOaYqOWkqeWImuWImuaMluWlveS4gOadoei2iueLseeahOaal+mBk++8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgIFwidGltZVwiOiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeaIkeWFiOi1sOS6hu+8jOelneS9oOWlvei/kO+8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogNzUwLFxuICAgICAgICAgICAgXCJzdGVwc1wiOiBbXG4gICAgICAgICAgICAgICAgXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImRvd25cIlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIuS4iumdouaYr+S4qm1vdmXkuovku7bvvIzlj6/ku6Xlr7lOUEPnrYnov5vooYznp7vliqjjgIJcXG7or6bop4HmoLfmnb/kuK3lsI/lgbfkuovku7bnmoTlhpnms5XjgIJcIixcbiAgICAgICAgXCJcXHRbaGVyb13mgI7kuYjot5HnmoTov5nkuYjlv6suLi5cIlxuICAgIF0sXG4gICAgXCI0LDJcIjogW1xuICAgICAgICBcIlxcdFvogIHkurosbWFuXeacrOWhlOeahOWVhuW6l+acieS4pOexu++8jOWFqOWxgOWVhuW6l+WSjOmdnuWFqOWxgOWVhuW6l+OAglxcblxcbuaJgOiwk+mdnuWFqOWxgOWVhuW6l++8jOWwseexu+S8vOS6juWPs+S4i+inkumCo+S4quWNlumSpeWMmeeahOiAgeS6uuS4gOagt++8jOS4gOWumuimgeeisOWIsOaJjeiDveinpuWPkeS6i+S7tuOAglxcblxcbuiAjOWFqOWxgOWVhuW6l++8jOWImeiDveWcqOW/q+aNt+WVhuW6l+S4reebtOaOpeS9v+eUqOOAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeimgeazqOWGjOS4gOS4quWFqOWxgOWVhuW6l++8jOS9oOmcgOimgeWcqCBkYXRhLmpzIOS4re+8jOaJvuWIsCBzaG9wc++8jOW5tuWcqOWGhea3u+WKoOS9oOeahOWVhuW6l+S/oeaBr+OAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWVhuW6l+S/oeaBr+a3u+WKoOWQju+8jOWPr+S7peWcqOmcgOimgeeahOS6i+S7tuWkhOiwg+eUqHtcXFwidHlwZVxcXCI6IFxcXCJvcGVuU2hvcFxcXCJ95p2l5omT5byA5L2g5re75Yqg55qE5YWo5bGA5ZWG5bqX44CCXCIsXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5Zyo5LiK6Z2i55qE5L6L5a2Q6YeM77yM5bem6L655piv5LiA5Liq5Lu/NTDlsYLnmoTph5HluIHllYblupfvvIzlj7PovrnmmK/kuIDkuKrku78yNOWxgueahOe7j+mqjOWVhuW6l+OAglxcblxcbuWVhuW6l+iiq+iuv+mXruWQjuWNs+WPr+WcqOW/q+aNt+WVhuW6l+S4rei/m+ihjOS9v+eUqOOAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWmguaenOS9oOmcgOimgeWcqOafkOWxguaaguaXtuemgeeUqOW/q+aNt+WVhuW6l++8jOWPr+S7peWcqGRhdGEuanPkuK3orr7nva5jYW5ub3RVc2VRdWlja1Nob3DjgIJcXG7lpoLmnpzpnIDopoHmsLjkuYXnpoHnlKjllYblupfvvIzor7fkvb/nlKh7XFxcInR5cGVcXFwiOlxcXCJkaXNhYmxlU2hvcFxcXCJ9XCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCIxLDBcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuU2hvcFwiLFxuICAgICAgICAgICAgXCJpZFwiOiBcIm1vbmV5U2hvcDFcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjUsMFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5TaG9wXCIsXG4gICAgICAgICAgICBcImlkXCI6IFwiZXhwU2hvcDFcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjcsN1wiOiBbXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d6L+Z5piv5LiA5Liq5YW45Z6L55qE5p2A5oCq5byA6Zeo44CB5by65Yi25oiY5paX5LqL5Lu244CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjgsN1wiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiOSw3XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCIxMCw0XCI6IFtcbiAgICAgICAgXCJcXHRbYmxhY2tLaW5nXeS9oOe7iOS6jui/mOaYr+adpeS6huOAglwiLFxuICAgICAgICBcIlxcdFtoZXJvXeaUvuW8gOaIkeS7rOeahOWFrOS4u++8gVwiLFxuICAgICAgICBcIlxcdFtibGFja0tpbmdd5aaC5p6c5oiR5LiN5oS/5oSP5ZGi77yfXCIsXG4gICAgICAgIFwiXFx0W2hlcm9d5peg6ZyA5aSa6K+077yM5ouU5YmR5ZCn77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJhdHRsZVwiLFxuICAgICAgICAgICAgXCJpZFwiOiBcImJsYWNrS2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrS2luZ13msqHmg7PliLDkvaDlt7Lnu4/lj5jlvpfov5nkuYjlvLrlpKfkuoYuLi4g566X5L2g5Y6J5a6z44CCXFxu5YWs5Li75bCx5Lqk57uZ5L2g5LqG77yM6K+35aW95aW95a+55aW544CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjEwLDBcIjogW1xuICAgICAgICBcIlxcdFtoZXJvXeWFrOS4u++8jOaIkeadpeaVkeS9oOS6hn5cIixcbiAgICAgICAgXCJcXHRb5YWs5Li7LHByaW5jZXNzXeW/q+aVkeaIkeWHuuWOu++8geaIkeWPl+Wkn+i/memHjOS6hu+8gVwiLFxuICAgICAgICBcIlxcdFtoZXJvXeWFrOS4u+WIq+aAle+8jOaIkeS7rOi1sOWQp35cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwid2luXCIsXG4gICAgICAgICAgICBcInJlYXNvblwiOiBcIuaVkeWHuuWFrOS4u1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNiwxMlwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNiwxMVwiOiBbXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3pgJrov4fosIPnlKgge1xcXCJ0eXBlXFxcIjogXFxcInNob3dcXFwifSDlj6/ku6Xkvb/pmpDol4/nmoTkuovku7bmmL7npLrlh7rmnaXjgIJcXG7mr5TlpoLmiJHkuIvpnaLov5nkuKrmnLrlhbPpl6jjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5LuZ5a2QLGZhaXJ5XemAmui/h+iwg+eUqCB7XFxcInR5cGVcXFwiOiBcXFwib3BlbkRvb3JcXFwifSDlj6/ku6Xml6DpnIDpkqXljJnmiZPlvIDkuIDmiYfpl6jmiJbmmpflopnjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIDEyXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3lkIzml7bvvIzkuZ/lj6/ku6Xlr7nlhbblroPlsYLov5vooYzmk43kvZzvvIzmr5TlpoLmpbzkuIvnmoTmnLrlhbPpl6jvvIznjrDlnKjlt7Lnu4/kuLrkvaDmiZPlvIDkuobjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAxMSxcbiAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvku5nlrZAsZmFpcnld5aaC5p6cIHNob3cg5oiWIGhpZGUg5oyH5a6a5LqGIHRpbWUg5Y+C5pWw77yM5YiZ5Lul5Yqo55S75pWI5p6c5pi+56S677yM5oyH5a6a55qE5Y+C5pWw5L2c5Li65raI5aSx5pe26Ze077yI5q+r56eS77yJ5p2l6K6h566X44CCXCIsXG4gICAgICAgIFwiXFx0W+S7meWtkCxmYWlyeV3njrDlnKjliLDmpbzkuIvmnaXmib7miJHlkKd+XCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAxMixcbiAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJoaWRlXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiOCwxMVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOm1hbl90aW1lc1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6bWFuX3RpbWVzKzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWcqOaWh+Wtl+S4reS9v+eUqCR7JyAkeyAnfeWSjCB9IOWPr+S7peiuoeeul+W5tuaYvuekuuS4gOS4quihqOi+vuW8j+eahOe7k+aenOOAglxcblwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS+i+Wmgu+8mlxcbuS9oOeahOW9k+WJjeaUu+WHu+WKm+aYryR7c3RhdHVzOmF0a33vvIzpmLLlvqHlipvmmK8ke3N0YXR1czpkZWZ944CCXFxu5pS76Ziy5ZKM55qE5Y2B5YCN5pivJHsxMCooc3RhdHVzOmF0aytzdGF0dXM6ZGVmKX3vvIzmlLvpmLLkuYvnp6/mmK8ke3N0YXR1czphdGsqc3RhdHVzOmRlZn3jgIJcXG7kvaDmnIkke2l0ZW06eWVsbG93S2V5feaKium7hOmSpeWMme+8jCR7aXRlbTpibHVlS2V5feaKiuiTnemSpeWMme+8jCR7aXRlbTpyZWRLZXl95oqK57qi6ZKl5YyZ44CCXFxu5L2g5pyJJHtpdGVtOnBpY2theGV95Liq56C077yMJHtpdGVtOmJvbWJ95Liq54K477yMJHtpdGVtOmNlbnRlckZseX3kuKrpo57jgIJcXG7ov5nmmK/kvaDnrKwke2ZsYWc6bWFuX3RpbWVzfeasoeWSjOaIkeWvueivneOAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWQjOaXtu+8jOS9oOS5n+WPr+S7pemAmui/h3tcXFwidHlwZVxcXCI6IFxcXCJzZXRWYWx1ZVxcXCJ95p2l6K6+572u5LiA5Liq5YuH5aOr55qE5bGe5oCn44CB6YGT5YW377yM5oiW5p+Q5LiqRmxhZ+OAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeS+i+Wmgu+8mlxcbueOsOWcqOaIkeWwhuiuqeS9oOeahOaUu+mYsuaPkOWNhzUwJe+8jOWGjeWwhuaUu+mYsuWSjOeahOWNgeWAjeWKoOWIsOeUn+WRveWAvOS4iuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsqMS41XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czpkZWZcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6ZGVmKjEuNVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6aHBcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6aHArMTAqKHN0YXR1czphdGsrc3RhdHVzOmRlZilcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvogIHkurosbWFuXeWGjemAgeS9oDUwMOmHkeW4ge+8jDEwMDDnu4/pqozvvIwx56C0MueCuDPpo57vvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leSs1MDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOmV4cGVyaWVuY2VcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6ZXhwZXJpZW5jZSsxMDAwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06cGlja2F4ZVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06cGlja2F4ZSsxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Ym9tYlwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06Ym9tYisyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Y2VudGVyRmx5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpjZW50ZXJGbHkrM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5dc3RhdHVzOnh4eCDku6Pooajli4flo6vnmoTmn5DkuKrlsZ7mgKfjgIJcXG7lhbbkuK14eHjlj6/lj5ZocCwgYXRrLCBkZWYsIG1kZWYsIG1vbmV5LGV4cGVyaWVuY2Xov5nlh6DpobnjgIJcXG5cXG5pdGVtOnh4eCDku6Pooajli4flo6vnmoTmn5DkuKrpgZPlhbfnmoTkuKrmlbDjgIJcXG54eHjkuLrpgZPlhbdJRO+8jOWFt+S9k+WPr+WPguingWl0ZW1zLmpz5Lit55qE5a6a5LmJ44CCXFxuXFxuZmxhZzp4eHgg5Luj6KGo5p+Q5Liq6Ieq5a6a5LmJRmxhZ+aIluWPmOmHj+OAglxcbnh4eOS4ukZsYWcv5Y+Y6YeP5ZCN77yM5Y+v5Lul6Ieq6KGM5a6a5LmJ77yM55Sx5a2X5q+N44CB5pWw5a2X5ZKM5LiL5YiS57q/57uE5oiQ44CCXFxu5pyq5a6a5LmJ6L+H6ICM55u05o6l5Y+W55So55qERmxhZ+m7mOiupOWAvOS4umZhbHNl44CCXCIsXG4gICAgICAgIFwiXFx0W+iAgeS6uixtYW5d5L2g546w5Zyo5Y+v5Lul6YeN5paw5ZKM5oiR6L+b6KGM5a+56K+d77yM6L+b5LiA5q2l55yL5Yiw5bGe5oCn5YC855qE5pS55Y+Y44CCXCJcbiAgICBdLFxuICAgIFwiMTAsMTFcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzPT0wXCIsXG4gICAgICAgICAgICBcInRydWVcIjogW1xuICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3ov5nmmK/kuKrlvojlpI3mnYLnmoTkvovlrZDvvIzlroPlsIbmlZnkvJrkvaDlpoLkvZXkvb/nlKhpZiDor63lj6Xov5vooYzmnaHku7bliKTmlq3vvIzku6Xlj4ogY2hvaWNlcyDmj5DkvpvpgInpobnmnaXkvpvnlKjmiLfov5vooYzpgInmi6njgIJcIixcbiAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d56ys5LiA5qyh6K6/6Zeu5oiR5bCG5pi+56S66L+Z5q615paH5a2X77yb5LuO56ys5LqM5qyh5byA5aeL5bCG5Lya5ZCR5L2g5Ye65ZSu6ZKl5YyZ44CCXFxu6ZKl5YyZ5Lu35qC85bCG6ZqP552A6K6/6Zeu5qyh5pWw6YCS5aKe44CCXFxu5b2T5ZCI6K6h5Ye65ZSu5LqG5LiD5oqK6ZKl5YyZ5ZCO77yM5bCG6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ77yM5bm25raI5aSx5LiN5YaN5Ye6546w44CCXCIsXG4gICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXei/memDqOWIhueahOmAu+i+keavlOi+g+mVv++8jOivt+e7huW/g+eci+agt+adv+eahOWGmeazle+8jOaYr+W+iOWuueaYk+eci+aHguW5tueQhuino+eahOOAglwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmYWxzZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6d29tYW5fdGltZXM9PThcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDotK3kubDnmoTpkqXljJnlt7Lnu4/lpJ/lpJrkuobvvIzlho3nu6fnu63ljZbnu5nkvaDnmoTor53miJHkvJrmnInljbHpmannmoTjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3nnIvlnKjkvaDotKHnjK7nu5nmiJHov5nkuYjlpJrpkrHnmoTku73kuIrvvIzpgIHkvaDkuIDmiorlpKfpu4Tpl6jpkqXljJnlkKfvvIzluIzmnJvkvaDog73lpb3lpb3nlKjlroPjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06YmlnS2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06YmlnS2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3miJHlhYjotbDkuobvvIzmi5zmi5x+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNob2ljZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXHRb6ICB5Lq6LHdvbWFuXeWwkeW5tO+8jOS9oOmcgOimgemSpeWMmeWQl++8n1xcbuaIkei/memHjOacieWkp+aKiueahO+8gVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIum7hOmSpeWMme+8iCR7OStmbGFnOndvbWFuX3RpbWVzfemHkeW4ge+8iVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJzdGF0dXM6bW9uZXk+PTkrZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdHVzOm1vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czptb25leS0oOStmbGFnOndvbWFuX3RpbWVzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbTp5ZWxsb3dLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTp5ZWxsb3dLZXkrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLok53pkqXljJnvvIgkezE4KzIqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0xOCsyKmZsYWc6d29tYW5fdGltZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDE4KzIqZmxhZzp3b21hbl90aW1lcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06Ymx1ZUtleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJsdWVLZXkrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeS9oOeahOmHkemSseS4jei2s++8gVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnuqLpkqXljJnvvIgkezM2KzQqZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj0zNis0KmZsYWc6d29tYW5fdGltZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDM2KzQqZmxhZzp3b21hbl90aW1lcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06cmVkS2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06cmVkS2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi56a75byAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJleGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZmxhZzp3b21hbl90aW1lcysxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiMTIsMTFcIjogW1xuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3kvb/nlKgge1xcXCJ0eXBlXFxcIjpcXFwiZnVuY3Rpb25cXFwifSDlj6/ku6Xlhpnoh6rlrprkuYnnmoRKU+iEmuacrOOAglxcbuacrOWhlOaUr+aMgeeahOaJgOacieS4u+imgUFQSeS8muWcqGRvY+aWh+aho+WGhee7meWHuuOAglwiLFxuICAgICAgICBcIlxcdFvogIHkurosd29tYW5NYWdpY2lhbl3kvovlpoLov5nkuKrkvovlrZDvvJrljbPlsIblvLnlh7rkuIDkuKrovpPlhaXnqpflj6PvvIznhLblkI7kvJrlsIbkvaDnmoTovpPlhaXnu5Pmnpznm7TmjqXliqDliLDkvaDnmoTmlLvlh7vlipvkuIrjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuivt+i+k+WFpeS9oOimgeWKoOaUu+WHu+WKm+eahOaVsOWAvO+8mlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6aW5wdXQ+MFwiLFxuICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czphdGtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0YXR1czphdGsrZmxhZzppbnB1dFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRpcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLmk43kvZzmiJDlip/vvIzmlLvlh7srJHtmbGFnOmlucHV0fVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIuaTjeS9nOaIkOWKn++8jOaUu+WHuyske2ZsYWc6aW5wdXR9XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZhbHNlXCI6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W+iAgeS6uix3b21hbk1hZ2ljaWFuXeWFt+S9k+WPr+WPguingeagt+adv+S4reacrOS6i+S7tueahOWGmeazleOAglwiXG4gICAgXSxcbiAgICBcIjEwLDEyXCI6IG51bGwsXG4gICAgXCIxMiwxMlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN3aXRjaFwiLFxuICAgICAgICAgICAgXCJjb25kaXRpb25cIjogXCJmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICBcImNhc2VMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHRb6ICB5Lq6LHdvbWFuXeeOsOWcqOS9v+eUqHN3aXRjaOaUueWGmei/meS4quS+i+WtkFwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjYXNlXCI6IFwiOFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g6LSt5Lmw55qE6ZKl5YyZ5bey57uP5aSf5aSa5LqG77yM5YaN57un57ut5Y2W57uZ5L2g55qE6K+d5oiR5Lya5pyJ5Y2x6Zmp55qE44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d55yL5Zyo5L2g6LSh54yu57uZ5oiR6L+Z5LmI5aSa6ZKx55qE5Lu95LiK77yM6YCB5L2g5LiA5oqK5aSn6buE6Zeo6ZKl5YyZ5ZCn77yM5biM5pyb5L2g6IO95aW95aW955So5a6D44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJpZ0tleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOmJpZ0tleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5oiR5YWI6LWw5LqG77yM5ouc5oucflwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImV4aXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLlvZPmsqHmnInnrKblkIjnmoTlgLznmoTlnLrlkIjmiafooYzmraTkuovku7ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaG9pY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFx0W+iAgeS6uix3b21hbl3lsJHlubTvvIzkvaDpnIDopoHpkqXljJnlkJfvvJ9cXG7miJHov5nph4zmnInlpKfmiornmoTvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob2ljZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLpu4TpkqXljJnvvIgkezkrZmxhZzp3b21hbl90aW1lc33ph5HluIHvvIlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IFwic3RhdHVzOm1vbmV5Pj05K2ZsYWc6d29tYW5fdGltZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXR1czptb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdGF0dXM6bW9uZXktKDkrZmxhZzp3b21hbl90aW1lcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93S2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW06eWVsbG93S2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6JOd6ZKl5YyZ77yIJHsxOCsyKmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MTgrMipmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgxOCsyKmZsYWc6d29tYW5fdGltZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOmJsdWVLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbTpibHVlS2V5KzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx0W+iAgeS6uix3b21hbl3kvaDnmoTph5HpkrHkuI3otrPvvIFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZXZpc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi57qi6ZKl5YyZ77yIJHszNis0KmZsYWc6d29tYW5fdGltZXN96YeR5biB77yJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcInN0YXR1czptb25leT49MzYrNCpmbGFnOndvbWFuX3RpbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0dXM6bW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RhdHVzOm1vbmV5LSgzNis0KmZsYWc6d29tYW5fdGltZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtOnJlZEtleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtOnJlZEtleSsxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFvogIHkurosd29tYW5d5L2g55qE6YeR6ZKx5LiN6Laz77yBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmV2aXNpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuemu+W8gFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXhpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmxhZzp3b21hbl90aW1lc1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImZsYWc6d29tYW5fdGltZXMrMVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInJldmlzaXRcIlxuICAgICAgICB9XG4gICAgXVxufSxcblwiY2hhbmdlRmxvb3JcIjoge1xuICAgIFwiNCwxMlwiOiB7XG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTBcIixcbiAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgNixcbiAgICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCI1LDVcIjoge1xuICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUyXCIsXG4gICAgICAgIFwic3RhaXJcIjogXCJkb3duRmxvb3JcIixcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXG4gICAgfSxcbiAgICBcIjEwLDEyXCI6IG51bGxcbn0sXG5cImFmdGVyQmF0dGxlXCI6IHtcbiAgICBcIjksNlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOmRvb3JcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOmRvb3IrMVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiMTEsNlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmbGFnOmRvb3JcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJmbGFnOmRvb3IrMVwiXG4gICAgICAgIH1cbiAgICBdXG59LFxuXCJhZnRlckdldEl0ZW1cIjoge30sXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXG5cImNhbm5vdE1vdmVcIjoge30sXG5cImJnbWFwXCI6IFtcblxuXSxcblwiZmdtYXBcIjogW1xuXG5dLFxuXCJhdXRvRXZlbnRcIjoge1xuICAgIFwiMTAsNVwiOiB7XG4gICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICBcImNvbmRpdGlvblwiOiBcImZsYWc6ZG9vcj09MlwiLFxuICAgICAgICAgICAgXCJjdXJyZW50Rmxvb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogMCxcbiAgICAgICAgICAgIFwiZGVsYXlFeGVjdXRlXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtdWx0aUV4ZWN1dGVcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3BlbkRvb3JcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxufSIsIm1haW4uZmxvb3JzLnNhbXBsZTI9XG57XG4gICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxuICAgIFwidGl0bGVcIjogXCLmoLfmnb8gMiDlsYJcIixcbiAgICBcIm5hbWVcIjogXCIyXCIsXG4gICAgXCJjYW5GbHlUb1wiOiB0cnVlLFxuICAgIFwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXG4gICAgXCJjYW5ub3RWaWV3TWFwXCI6IGZhbHNlLFxuICAgIFwiZGVmYXVsdEdyb3VuZFwiOiBcImdyb3VuZFwiLFxuICAgIFwiaW1hZ2VzXCI6IFtdLFxuICAgIFwiaXRlbV9yYXRpb1wiOiAxLFxuICAgIFwibWFwXCI6IFtcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwxMjEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAxLCAgMSwgNDUsICAwLCAgMSwgIDAsMjAyLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAxLCAgMSwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4OCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCA4NywgIDAsICAwLCAgMCwgIDAsMTIyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAwLDIwMiwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAxLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDEsICAwLDIwMiwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAxLCAgMCwyMDIsMjAyLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMSwgIDEsICAwLCAgMCwgIDAsICAxLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAxLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDEsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwyMDIsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsMjAyLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXG5dLFxuICAgIFwid2lkdGhcIjogMjYsXG4gICAgXCJoZWlnaHRcIjogMjYsXG4gICAgXCJmaXJzdEFycml2ZVwiOiBbXSxcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiMywyXCI6IFtcbiAgICAgICAgICAgIFwiMTIzXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCIxMiwxMlwiOiBbXG4gICAgICAgICAgICBcIjIzNFwiXG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiY2hhbmdlRmxvb3JcIjoge1xuICAgICAgICBcIjYsMTBcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMVwiLFxuICAgICAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxuICAgICAgICB9LFxuICAgICAgICBcIjcsMTJcIjoge1xuICAgICAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlM1wiLFxuICAgICAgICAgICAgXCJzdGFpclwiOiBcImRvd25GbG9vclwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYWZ0ZXJCYXR0bGVcIjoge30sXG4gICAgXCJhZnRlckdldEl0ZW1cIjoge30sXG4gICAgXCJhZnRlck9wZW5Eb29yXCI6IHt9LFxuICAgIFwiY2Fubm90TW92ZVwiOiB7fSxcbiAgICBcInVwRmxvb3JcIjogbnVsbCxcbiAgICBcImJnbWFwXCI6IFtcbiAgICBbMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWzE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWzE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWzE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLDE0MCwxNDAsMTQwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdLFxuICAgIFsgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwXSxcbiAgICBbICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMF0sXG4gICAgWyAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgIDBdXG5dLFxuICAgIFwiZmdtYXBcIjogW1xuXG5dLFxuICAgIFwiYXV0b0V2ZW50XCI6IHt9XG59IiwibWFpbi5mbG9vcnMuc2FtcGxlMz1cbntcblwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcblwidGl0bGVcIjogXCLkuLvloZQgNDAg5bGCXCIsXG5cIm5hbWVcIjogXCI0MFwiLFxuXCJjYW5GbHlUb1wiOiBmYWxzZSxcblwiY2FuVXNlUXVpY2tTaG9wXCI6IHRydWUsXG5cImRlZmF1bHRHcm91bmRcIjogXCJzbm93R3JvdW5kXCIsXG5cImltYWdlc1wiOiBbXSxcblwiY29sb3JcIjogW1xuICAgIDI1NSxcbiAgICAwLFxuICAgIDAsXG4gICAgMC4zXG5dLFxuXCJ3ZWF0aGVyXCI6IFtcbiAgICBcInJhaW5cIixcbiAgICAxMFxuXSxcblwiYmdtXCI6IFwiYmdtLm1wM1wiLFxuXCJpdGVtX3JhdGlvXCI6IDEsXG5cIm1hcFwiOiBbXG4gICAgWyAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCA4NywgIDUsICA1LCAgNSwgIDUsICA1LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCA4NSwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwyNDcsICAxLDI0NywgIDEsMjQ3LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDEsMjQ3LDI0NywyNDcsICAxLCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDEsMjQ3LCAzMCwyNDcsICAxLCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwyNDcsICAxLDEyNCwgIDEsMjQ3LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLDEyMywgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICAxLCAgMCwgIDEsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICA0LCAgMCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDQsICA0LCAgNCwgIDQsICA0LCA4NSwgIDQsICA0LCAgNCwgIDQsICA0LCAgNV0sXG4gICAgWyAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCA4OCwgIDUsICA1LCAgNSwgIDUsICA1LCAgNV1cbl0sXG5cImZpcnN0QXJyaXZlXCI6IFtcbiAgICBcIlxcdFvlrp7miJjvvIFd5pys5qW85bCG5bCd6K+V5aSN5Yi744CK5a6/5ZG955qE5peL5b6L44CLNDBG5Ymn5oOF44CCXCJcbl0sXG5cImV2ZW50c1wiOiB7XG4gICAgXCI2LDExXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI2LDEwXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJkb29yLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNiw3XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5p2w5YWL77yM5L2g56m256uf5piv5LuA5LmI5Lq677yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFvmnbDlhYssdGhpZWZd4oCm4oCmXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeaIkeS7rOKApuKApuaYr+aci+WPi+WvueWQp++8n1xcbuaYr+aci+WPi+WwseW6lOivpeebuOS6kuS/oeS7u+WvueWQp++8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeKApuKApuS6i+WIsOWmguS7iuS5n+ayoeacieS7gOS5iOWlvemakOeekueahOS6huOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRb5p2w5YWLLHRoaWVmXeayoemUme+8jOaIkeWwseaYr+i/meS4gOWIh+eahOiDjOWQjuS4u+iwi+OAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICBcInN0ZXBzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwidXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHnmoTnnJ/lkI3kuLrigJTigJTpu5HmmpflpKfms5XluIjvvIznrKzlm5vljLrln5/nmoTlpLTnm67jgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5ZG15ZG177yM5LiN55+l6YGT5Li65LuA5LmI77yM5oiR56uf54S25a+55LqL5oOF6LWw5Yiw546w5Zyo6L+Z5LiA5q2l5q+r5LiN5oSf6KeJ5oSP5aSW44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS7peadsOWFi+eahOWQjeS5ieWIqeeUqOS6huS9oOi/meS5iOS5he+8jOecn+aYr+aKseatieWViuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13nnJ/mraPnmoTmnbDlhYvnjrDlnKjlnKjlk6rph4zvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d55uX6LS85p2w5YWL6L+Z5Liq5Lq657G75LuO5pyq5a2Y5Zyo6L+H77yM5LuW5Y+q5piv5oiR55So5p2l5o6l6L+R5L2g55qE5LiA5Ymv55qu5ZuK6ICM5bey44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApui/meagt+WViu+8jOWRteWRteOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuLrku4DkuYjkvaDnnIvkuIrljrvkuJ3mr6vkuI3nlJ/msJTvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5aSa5LqP5LqG6ay85bid77yM5oiR546w5Zyo55qE6IS+5rCU5aW95b6X6L+e5oiR6Ieq5bex6YO95a6z5oCV44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeivtOi1t+adpeaIkei/mOW+l+WlveWlveaEn+iwouS9oOWRou+8jOWmguaenOayoeacieadsOWFi+KApuKApuS9oOeahOW4ruWKqe+8jOaIkeaXqeWwseatu+WcqOesrOS4gOWMuuWfn+S6huOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13kuI3orrrkvaDnmoTnm67nmoTlpoLkvZXvvIzkvaDnmoTmiYDkvZzmiYDkuLrpg73mmK/lr7nmiJHmnInliKnnmoTjgILkuI3mmK/lkJfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d6IO95aSf5aaC5q2k5reh5a6a55qE6Z2i5a+56IOM5Y+b77yM55yL5p2l6Lef5LqU5bm05YmN55u45q+U77yM5L2g56Gu5a6e5oiQ6ZW/5LqG5b6I5aSa5ZWK44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeS6lOW5tOWJje+8n+KApuKApum7keaal+Wkp+azleW4iO+8jOWcqOi/meS5i+WJje+8jOaIkeS7rOWlveWDj+e0oOacquiwi+mdouWQp++8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kupTlubTliY3pgqPlnLrlsaDln47kvaDlupTor6Xov5nkuIDnlJ/pg73kuI3kvJrlv5jorrDlkKfjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5b6I5LiN5ben77yM6YKj5Zy65bGg5Z+O55qE5Li76LCL77yM5Lmf5piv5oiR44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeKApuKAplwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13ov5nkuYjor7TvvIzlh7vkuK3miJHlj4zkurLnmoTpgqPpgZPntKvoibLpl6rnlLXvvIzkuZ/lsLHmmK/kvaDph4rmlL7nmoTlkKfigKbigKZcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g55qE5Y+M5Lqy77yf6L+Z56eN5LqL5oOF5oiR5oCO5LmI5Y+v6IO95Lya6K6w5b6X77yfXFxu5L2g6Zq+6YGT5Zyo6Lip5q276JqC6JqB55qE5pe25YCZ6L+Y5Lya5LiA5Y+q5Y+q6K6w5LiL5LuW5Lus55qE5qC35a2Q5ZCX77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeiAgSDlrZAg6KaBIOS9oCDnmoQg5ZG9XCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOW6lOivpeWvueaIkeW/g+aAgOaEn+a/gOaJjeWvue+8jOWmguaenOS4jeaYr+mCo+aXtueahOaIkeeci+WHuuS6huS9oOmakOiXj+eahOeogOacieWLh+iAheS9k+i0qO+8jOS9oOe7neWvueS4jeWPr+iDvea0u+WIsOS7iuWkqeOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lnKjmmpfkuK3liqjmiYvohJrorqnkvaDpgJrov4fli4fogIXpgInmi5TnmoTkurrkuZ/mmK/miJHvvIzmiJHkuIDnm7TkuIDnm7TlnKjmmpfkuK3lvJXlr7zkvaDotbDliLDku4rlpKnov5nkuIDmraXjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5piv5oiR5pWR6LWO5LqG5LiA5peg5piv5aSE55qE5L2g44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeS4uuS7gOS5iOWPquacieaIkeS4gOS4quS6uua0u+S6huS4i+adpe+8ge+8ge+8ge+8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13kuLrku4DkuYjlgY/lgY/mmK/miJHvvIHvvIHvvIHvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oiR5Yia5omN5LiN5piv6K+06L+H5LqG5ZCX77yf5Zug5Li65oiR55yL5Ye65LqG5L2g5pyJ56iA5pyJ5YuH6ICF5L2T6LSo5ZWK44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOWImuWImui3n+msvOW4neS6pOi/h+aJi++8jOW6lOivpeW3sue7j+W+iOa4healmui/meeogOacieWLh+iAheS9k+i0qOaEj+WRs+edgOS7gOS5iOS6huWQp++8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKblsLHlm6DkuLrmiJHmnInov5nnp43kvZPotKjvvIzlsLHkuI3lvpfkuI3og4zotJ/lpoLmraTmrovphbfnmoTlrr/lkb3lkJfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oSa6KCi77yB6L+Z5oSP5ZGz552A5Y+q6KaB5oiR5a+55L2g5Yqg5Lul5byV5a+86Lef5Z+55YW777yM5L2g5bCx6IO95oiQ5Li66L+Z5LiW6Ze05a6e5Yqb5pyA5by655qE5a2Y5Zyo77yBXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuaJgOS7pe+8jOS9oOeptuern+aDs+WIqeeUqOaIkeW5suS7gOS5iO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHliKnnlKjkvaDlubLnmoTkuovmg4XvvIzkvaDkuI3mmK/lt7Lnu4/lrozmiJDkuoblkJfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d4oCm4oCm5L2g6K+05LuA5LmI77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4jeefpeS4jeiniemXtO+8jOS9oOW3sue7j+WcqOaIkeeahOaMh+W8leS4i+i3n+msvOW4neato+mdouS6pOaJi+W5tuS4lOadgOaOieS6huS7luWViuOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13lsLHov57miJHot5/prLzluJ3nmoTlr7nlhrPigKbigKbkuZ/mmK/ooqvkvaDlronmjpLlpb3kuobnmoTvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5Lus5Lik5Liq5LiA5Liq5piv5Lq657G75YuH6ICF77yM5LiA5Liq5piv6a2U54mp5YuH6ICF77yM6L+f5pep5Lya5pyJ5Lqk5omL55qE5LiA5aSp44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWPquS4jei/h+aYr+aTjee6teS6huS4gOezu+WIl+eahOi/numUgeS6i+S7tuiuqei/meS4gOWkqeaPkOaXqeS6huaVsOWNgeW5tOWIsOadpeiAjOW3suOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13igKbigKbkvaDov5nmoLflgZrlr7nosIHmnInlpb3lpITvvJ/ku5blj6/mmK/kvaDku6zprZTniankuJbnlYznmoTmlZHkuJbkuLvllYrjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiA5Liq5oOn5oCV5b6B5oiY77yM54ix5aW95ZKM5bmz55qE5oem5aSr77yM5Lmf6YWN5Y+r5pWR5LiW5Li777yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeiOt+W+l+S6huWKm+mHj++8jOWNtOWPquS8muiiq+WKqOaMqOaJk+iAjOS4jeS4u+WKqOWQkeS6uuexu+S4lueVjOWHuuWHu++8jOm+n+e8qeWcqOesrOS6jOWMuuWfn+aDtuaDtuW6puaXpe+8jOS7luagueacrOWwseS4jemFjeaLpeacieeogOacieWLh+iAheS9k+i0qOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuLrkuobkuI3orqnov5nnp43kurrpnLjljaDnnYDnp6/ntK/lpJrlubTnmoTlup7lpKfngbXprYLog73ph4/ml6DkvZzkuLrvvIzmiJHorr7orqHorqnkvaDmnYDmjonkuobku5bjgIJcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g5rKh5pyJ6L6c6LSf5oiR55qE5pyf5b6F77yM5oiQ5Yqf5oiY6IOc5LqG6YKj5Liq5bqf54mp77yM546w5Zyo5L2g5L2T5YaF57Sv56ev55qE54G16a2C6IO96YeP4oCm4oCm5Lmf5bCx5piv6a2U5Yqb77yM5bey57uP6L6+5Yiw5LqG6IO96Lef6a2U546L5Yy55pWM55qE5Zyw5q2l44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeKApuKApuaYr+WQl++8n+eOsOWcqOeahOaIkeiDveS4jumtlOeOi+WMueaVjO+8n1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3mraLlpoLmraTvvIzkvaDnjrDlnKjnmoTlipvph4/kuYvlvLrlsLHnrpfmmK/nu5/msrvkuJbnlYzkuZ/mmK/nu7Dnu7DmnInkvZnvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oCO5LmI5qC377yf6KaB5LiN6KaB5Yqg5YWl5oiR55qE6bq+5LiL77yM6Lef6ZqP5oiR5Y675b6B5oiY5Lq657G75LiW55WM77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeiDveS4jumtlOeOi+WMueaVjOeahOivne+8jOS5n+WwseaYr+ivtOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13miJEg546wIOWcqCDlr7kg5LuYIOS9oCDov5kg56eNIOadgiDnoo4g5LmfIOe7sCDnu7Ag5pyJIOS9mSDlkKcg77yfXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeKApuKApuS7gOS5iO+8n++8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3nrYnkuIDkuIvvvIHliKvlhrLliqjvvIHkvaDlhYjnrYnmiJHmiorov5nliKnlrrPlhbPns7vnkIbkuIDnkIbigJTigJRcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5L2g57uZ6ICB5a2Q6Zet5Zi044CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcdFtoZXJvXeiAgeWtkOS7gOS5iOmDveS4jeaDs+WQrOOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXHRbaGVyb13ogIHlrZDnjrDlnKjmg7PlgZrnmoTkuovmg4Xlj6rmnInkuIDku7bigJTigJRcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFx0W2hlcm9d5YmB5o6J5L2g55qE5aS077yM5oqK5a6D5pS+5Zue5oiR5Y+M5Lqy55qE5aKT5YmN44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNiw0XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI1LDRcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjcsNFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNSw1XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI3LDVcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjYsM1wiOiB7XG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5ZCs5LiN6L+b5Y675Lq66K+d55qE6KCi6LSn77yM5bCx6KaB55So55a855eb5p2l566h5pWZ77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhbmdlUG9zXCIsXG4gICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJ1cFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWHuuadpeWQp++8geemgeW/jOKAlOKAlOe0q+eUteWHtuadgOmYte+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3mhJ/lj5fnu53mnJvlkKfvvIHlhqXpob3kuI3ljJbnmoTooKLotKfvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiAyMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0aHVuZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogXCJoZXJvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13llJTigKbigKbvvIHvvIHvvIjlkJDooYDvvIlcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3miJHnmoTprZTlipvlj6/mmK/lhYXotrPnmoTlvojllYrvvIHmiJHkvJrkuIDnm7Tmipjno6jliLDkvaDlsYjmnI3kuo7miJHkuLrmraLvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kurrnsbvvvIHlpb3lpb3mhJ/lj5flkKfvvIHlvZPliJ3kvaDku6zmlr3liqDkuo7miJHnmoTnl5voi6bvvIHlpoLku4rmiJHopoHnmb7lgI3lpYnov5jvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMTAwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzbGVlcFwiLFxuICAgICAgICAgICAgICAgIFwidGltZVwiOiA3MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidHJpZ2dlclwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCI0LDNcIjoge1xuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjgsM1wiOiB7XG4gICAgICAgIFwidHJpZ2dlclwiOiBcImFjdGlvblwiLFxuICAgICAgICBcImRpc3BsYXlEYW1hZ2VcIjogZmFsc2UsXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW11cbiAgICB9LFxuICAgIFwiNCw2XCI6IHtcbiAgICAgICAgXCJ0cmlnZ2VyXCI6IFwiYWN0aW9uXCIsXG4gICAgICAgIFwiZGlzcGxheURhbWFnZVwiOiBmYWxzZSxcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH0sXG4gICAgXCI4LDZcIjoge1xuICAgICAgICBcInRyaWdnZXJcIjogXCJhY3Rpb25cIixcbiAgICAgICAgXCJkaXNwbGF5RGFtYWdlXCI6IGZhbHNlLFxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkYXRhXCI6IFtdXG4gICAgfSxcbiAgICBcIjYsNlwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuWmlueyvuKApuWwj+WnkOKApuKApuaYr+S9oOWQl++8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5LiN6KaB57ud5pyb77yM5Lmf5LiN6KaB5oKy5Lyk44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3kvaDku47mnaXpg73kuI3mmK/ni6zoh6rkuIDkurrlnKjliY3ov5vjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWSseS4gOebtO+8jOS4gOebtOmDveWcqOazqOinhuedgOS9oOOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld6ICN5bCP6IGq5piO55qE5L2g44CB56yo56yo55qE5L2g5ZGG5ZGG55qE5L2g44CB6IOG5bCP55qE5L2g44CB5YuH5pWi55qE5L2g5biF5rCU55qE5L2g4oCm4oCm5YWo6YOo5YWo6YOo6YO95piv5L2g44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3miYDku6XmlL7lv4PlkKfvvIzml6Dorrrlj5HnlJ/ku4DkuYjvvIzlkrHpg73kvJrpmarkvLTlnKjkvaDouqvovrnnmoTjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWboOS4uuS9oOimgeaYr+emu+W8gOaIkeeahOivne+8jOeri+WIu+WwseS8muatu+aOieWQp++8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuWmlueyvuKApuWwj+WnkOKApuKApuWFtuWunuS4gOebtOS7peadpe+8jOaIkemDvemdnuW4uOaEn+a/gOS9oOKApuKAplwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld56yo6JuL77yB6YO96L+Z56eN5pe25YCZ5LqG5bCx5LiN6KaB5L2c5Ye65YOP5piv5Li057uI6YGX6KiA55qE5Y+R6KiA5LqG5ZWK77yB77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lloLvvIHpgqPovrnnqb/ooaPlk4HlkbPlt67liLDmnoHngrnnmoTpu5HmmpflpKfms5XluIjvvIzliKvlt6bpob7lj7Pnm7zor7TnmoTlsLHmmK/kvaDvvIHkvaDlupTor6Xnn6XpgZPlkrHnmoTouqvku73lkKfvvJ9cXG7ov5jkuI3pgJ/pgJ/pgIDkuIvvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lj6/mgbbigKblpJrnrqHpl7LkuovnmoTlppbnsr7ml4/igKbmmI7mmI7lj6ropoHlho3orqnku5bmib/lj5fkuIDngrnnlrznl5vmnaXnk6bop6Pku5bnmoTmhI/lv5flipvvvIzmiJHnmoTorqHliJLlsLHmiJDlip/kuobvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWTvOWTvOWTvH7mirHmrYnlk6bvvIzov5nkuKrnrKjom4vnmoTmhI/lv5flipvlj6/kuI3lg4/kvaDmg7PosaHnmoTpgqPkuYjoloTlvLHlk6bvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3kuI3nlJjlv4PvvIHmiJHkuI3nlJjlv4PvvIHlppbnsr7lhazkuLvlj4jlpoLkvZXvvIFcXG7lj6ropoHmmK/pmLvmjKHmiJHnmoTvvIzkuI3nrqHmmK/osIHmiJHpg73opoHpk7LpmaTvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5Xee7iOS6jumcsuWHuueLkOeLuOWwvuW3tOS6hu+8jOWFtuWunuWSseaXqeWwseeci+WHuuS9oOacieiwi+WPjeeahOW/teWktOOAguS9oOeahOiuoeWIkuWwseaYr+aLieaLoui/meWutuS8meWFpeS8meeEtuWQjuaOqOe/u+mtlOeOi+WvuemtlOWhlOeahOe7n+ayu+WvueWQp++8n1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWRteWRteWRteKApuKApumCo+S4quaYj+W6uOeahOmtlOeOi++8jOaOjOaPoeedgOmCo+S5iOW6nuWkp+eahOmtlOeJqeWGm+mYn+WNtOWPquefpemBk+WbuuWuiOmtlOWhlO+8jOiAjOS4jeS4u+WKqOS+teeVpeS6uuexu+S4lueVjOaJqeW8oOmihuWcn++8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeaIkeWunuWcqOaYr+eci+S4jei/h+ecvO+8jOaJgOS7peaIkeaJjeWGs+WumuaKiui/meS4quWFt+Wkh+eogOacieWLh+iAheS9k+i0qOeahOWutuS8meWfueWFu+aIkOaWsOS4gOS7u+mtlOeOi++8gVxcbuadpeiuqei/meS4quS4lueVjOeahOWKv+WKm+mHjeaWsOa0l+eJjO+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5L2g6KeJ5b6X5LiA5Liq5ruh6ISR5a2Q5oOz552A5Zue5a6256eN55Sw55qE5bqf5p+05YuH6ICF5Lya5oiQ5Li65pS55Y+Y5LiW55WM55qE6a2U546L77yf5L2g5pmD5pmD6ISR6KKL6K+V6K+V77yM5piv5LiN5piv6IO95ZCs5Yiw5aSn5rW355qE5aOw6Z+z77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5oG85Lq66Iez5p6B55qE5aaW57K+5peP77yB5ZG15ZG15ZG14oCm4oCm5oiR5bmy6ISG5LiA5LiN5YGa5LqM5LiN5LyR77yM6L+e5L2g5Lmf5LiA5Z2X5pS25ou+5LqG5ZCn77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3liKvlsI/nnqflkrHvvIHlkrHlpb3mrbnkuZ/mmK/lppbnsr7ml4/ph4zlrp7lipvmlbDkuIDmlbDkuoznmoTlrZjlnKjvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lj6rkvJrogI3lmLTnmq7lrZDnmoTmgbzkurroi43onYfvvIHmiJHlgJLopoHnnIvnnIvkuIDlnZfnhKbngq3kvJrkuI3kvJror7Tor53vvIFcXG7igJTigJTmi5vpm7flvLnvvIHvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwieW9uZ2NoYW5nXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRhY2subXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRodW5kZXJcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3liIfvvIzov5nngrnkvKTnl5vot5/ku5bliJrmiY3nu4/ljobnmoTouqvlv4PlnLDni7Hnm7jmr5TmoLnmnKzlsLHkuI3nrpfku4DkuYjjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lk7zvvIHnv4XohoDpg73ooqvng6fnhKbkuobov5jopoHlmLTnoazvvJ/kvaDpmr7kuI3miJDnnJ/ku6XkuLrmiJHkuI3kvJrlr7nkvaDliqjnnJ/moLzvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKbkvaDov5nmt7fom4vvvIHnu5nmiJHnprvlpbnov5zngrnvvIHvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5Xe+8geKApuS9oOeOsOWcqOWPl+S6huW+iOS4pemHjeeahOiHtOWRveS8pO+8jOS5seWKqOS7gOS5iO+8n1xcbuS5luOAguWIq+aAle+8jOi/memHjOacieWSsemhtuedgO+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5a+55LqG77yM5ZKx5YaN6Zeu5L2g5LiA6YGN77yM5L2g5piv5b6I54+N5oOc6Ieq5bex5oCn5ZG955qE5a+55ZCn77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2hlcm9d77yB4oCm562J562J4oCm5aaW57K+5bCP5aeQ77yM5L2g5LiN5Lya5piv4oCm4oCm77yfXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3lloLvvIzpu5HmmpflpKfms5XluIjvvIzkvaDkvZzkuLrprZTloZTph4zmnIDljZrlrablpJror4bnmoTooKLotKfvvIzlupTor6Xlr7nlkrHlppbnsr7ml4/nmoTnibnmrorog73lipvlho3muIXmpZrkuI3ov4flkKfvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3ku4DkuYjvvJ/vvIHpmr7kuI3miJDkvaDmmK/mg7PvvIHvvIHkuI3lj6/og73igKbigKZcXG7lsLHkuLrkuobkuIDkuKrmuLrlsI/nmoTkurrnsbvvvIzkuI3lj6/nkIbllrvvvIHvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XeWTvOWTvOWTvO+8geS9oOWus+aAleeahOihqOaDheWPr+ecn+e+juWRs++8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld5LiN6L+H5q+U6LW36L+Z5Liq77yM5ZKx5pu05pyf5b6F5L2g5ZCD5Yiw4oCc5aaW57K+6Ieq54Gt5Yay5Ye74oCd5LmL5ZCO55qE5q2754q25ZOm77yBflwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS4je+8ge+8geS4jeW6lOivpeaYr+i/meagt+eahO+8geaIkeWujOe+jueahOiuoeWIkuern+eEtuS8muiiq+S4gOWPquWwj+Wwj+eahOWmlueyvuegtOWdj++8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeS4jeimge+8geKApuKApuWNg+S4h+S4jeimge+8geKApuKApuS4uuS6huaIkei/meenjeS6uuKApuKApuWUlO+8gVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFvlsI/lppbnsr4sZmFpcnld56yo6JuL77yM5Yqo6YO95Yqo5LiN5LqG5LqG5bCx5LiN6KaB5by65pKR552A56uZ6LW35p2l5LqG5ZWK44CCXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaXRlbS5tcDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W+Wwj+WmlueyvixmYWlyeV3nnJ/mmK/nmoTvvIzpg73liLDmnIDlkI7kuIDliLvkuobvvIzkvaDov5nlrrbkvJnlpb3mrbnkuZ/orqnlkrHnnIHngrnlv4PlkKfjgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRb5bCP5aaW57K+LGZhaXJ5XemCo+S5iO+8jOWGjeingeS6huKApuKApuaIkeeahOWLh+iAheWkp+S6uuOAglwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogNzAwLFxuICAgICAgICAgICAgICAgIFwic3RlcHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheVNvdW5kXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0YWNrLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsZWVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDIwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5LiN5Y+v6IO977yB77yB77yB77yB77yBXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2hhbmdlRmxvb3JcIixcbiAgICAgICAgICAgICAgICBcImZsb29ySWRcIjogXCJzYW1wbGUzXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInVwXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IDEwMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2xlZXBcIixcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogMjAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKblppbnsr7igKblsI/lp5DigKbigKZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13igKbigKblppbnsr7lsI/lp5DvvIFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13mmK/moqblkJfvvJ/igKbigKbkuI3lr7nvvIzkuLrku4DkuYjmiJHlnKjmtYHms6rvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13ov5npopfmvILkuq7nmoTlrp3nn7PmmK/igKbigKbvvJ9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13miJHlhajpg73mg7PotbfmnaXkuobigKbigKblppbnsr7lsI/lp5DkuLrkuobmiJHigKbigKZcXG7nibrnibLkuoboh6rlt7HnmoTmgKflkb3jgIJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13lnKjov5npopflrp3nn7PkuIrvvIzmiJHog73mhJ/lj5fliLDkvaDnmoTmuKnluqbigKbigKZcXG7nhp/mgonogIzlj4jku6Tkurrlronlv4PvvIzov5nlsLHmmK/kvaDmnIDlkI7nlZnnu5nmiJHnmoTkuJzopb/lkJfigKbigKZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5U291bmRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpdGVtLm1wM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJcXHRbaGVyb13lpb3muKnmmpbigKbigKZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW06eWVsbG93SmV3ZWxcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXlTb3VuZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIml0ZW0ubXAzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlxcdFtoZXJvXeKApuKAplwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wZW5Eb29yXCIsXG4gICAgICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcGVuRG9vclwiLFxuICAgICAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiNiw1XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YVwiOiBbXVxuICAgIH1cbn0sXG5cImNoYW5nZUZsb29yXCI6IHtcbiAgICBcIjYsMFwiOiB7XG4gICAgICAgIFwiZmxvb3JJZFwiOiBcInNhbXBsZTNcIixcbiAgICAgICAgXCJzdGFpclwiOiBcInVwRmxvb3JcIlxuICAgIH0sXG4gICAgXCI2LDEyXCI6IHtcbiAgICAgICAgXCJmbG9vcklkXCI6IFwic2FtcGxlMlwiLFxuICAgICAgICBcInN0YWlyXCI6IFwidXBGbG9vclwiXG4gICAgfVxufSxcblwiYWZ0ZXJCYXR0bGVcIjoge1xuICAgIFwiNiw0XCI6IFtcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3lpKnnnJ/vvIHkvaDku6XkuLrov5nmoLflsLHog73miJjog5zmiJHlkJfvvJ9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDcsXG4gICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI3LDVcIjogW1xuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeS9oOaJk+i0peeahOS4jei/h+aYr+aIkeS8l+WkmuWIhui6q+S4reeahOWFtuS4reS4gOS4quiAjOW3suOAglwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1cGRhdGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIjUsNFwiOiBbXG4gICAgICAgIFwiXFx0W2JsYWNrTWFnaWNpYW5d5L2g55qE6Lqr5L2T5bey57uP5Lyk55eV57Sv57Sv5LqG77yM5Y+v5oiR6L+Y55WZ5pyJ552A5Lmd5oiQ5aSa55qE6a2U5Yqb44CCXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNob3dcIixcbiAgICAgICAgICAgIFwibG9jXCI6IFtcbiAgICAgICAgICAgICAgICA1LFxuICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpbWVcIjogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiNSw1XCI6IFtcbiAgICAgICAgXCJcXHRbYmxhY2tNYWdpY2lhbl3pob3lm7rnmoTlrrbkvJnvvIHmlL7lvIPmirXmipflkKfvvIFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvd1wiLFxuICAgICAgICAgICAgXCJsb2NcIjogW1xuICAgICAgICAgICAgICAgIDcsXG4gICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidGltZVwiOiA1MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidXBkYXRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCI3LDRcIjogW1xuICAgICAgICBcIlxcdFtibGFja01hZ2ljaWFuXeWTiOWTiOWTiOWTiO+8geaIkeeahOeBtemtgui/nOavlOS9oOaDs+ixoeeahOW8uuWkp++8gVxcbuaIkeWNs+aYr+awuOaBku+8gVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJzaG93XCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IDUwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlnZ2VyXCIsXG4gICAgICAgICAgICBcImxvY1wiOiBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59LFxuXCJhZnRlckdldEl0ZW1cIjoge30sXG5cImFmdGVyT3BlbkRvb3JcIjoge30sXG5cImNhbm5vdE1vdmVcIjoge30sXG5cImJnbWFwXCI6IFtcblxuXSxcblwiZmdtYXBcIjogW1xuXG5dLFxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IEppbXAgPSByZXF1aXJlKCdqaW1wJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBtYXRlcmlhbHMgPSBbXG4gICdhbmltYXRlcycsXG4gICdlbmVteXMnLFxuICAnaXRlbXMnLCAnbnBjcycsICd0ZXJyYWlucycsICdlbmVteTQ4JywgJ25wYzQ4JyxcbiAgJ2ljb25zJyxcbl07XG5jb25zdCBpbWFnZXNEaXIgPSBwYXRoLnJlc29sdmUoJy4uL2VkaXRvci9wcm9qZWN0L2ltYWdlcy8nKTtcbmNvbnN0IGV4dHJhSW1hZ2VzRGlyID0gcGF0aC5yZXNvbHZlKCcuLi9lZGl0b3IvcHJvamVjdC9leHRyYUltYWdlcy8nKTtcbmNvbnN0IGFuaW1hdGVzRGlyID0gcGF0aC5yZXNvbHZlKCcuLi9lZGl0b3IvcHJvamVjdC9hbmltYXRlcycpO1xuY29uc3QgYW5pbWF0ZXNEYXRhID0ge307XG5jb25zdCByZWFkRmlsZSA9IChzcmMpID0+IHtcbiAgY29uc3QgdGVtcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmcy5yZWFkRmlsZShzcmMsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgZWxzZSByZXNvbHZlKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbiAgdGVtcC5jYXRjaCgoZXJyKSA9PiB7IHRocm93IGVycjsgfSk7XG4gIHJldHVybiB0ZW1wO1xufTtcbmNvbnN0IHJlYWRBbmltYXRlID0gKG5hbWUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgbGV0IHJlYWxOYW1lID0gbmFtZTtcbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID09PSAtMSkgcmVhbE5hbWUgPSBgJHtuYW1lfS5hbmltYXRlYDtcbiAgcmVhZEZpbGUocGF0aC5yZXNvbHZlKGFuaW1hdGVzRGlyLCByZWFsTmFtZSkpLnRoZW4oKHJhdykgPT4ge1xuICAgIHJlc29sdmUocmF3KTtcbiAgfSxcbiAgcmVqZWN0KTtcbn0pO1xuY29uc3QgYWRkSW1hZ2UgPSAocm9vdERpciwgbmFtZSkgPT4ge1xuICBsZXQgcmVhbE5hbWUgPSBuYW1lO1xuICBpZiAobmFtZS5pbmRleE9mKCcuJykgPT09IC0xKSByZWFsTmFtZSA9IGAke25hbWV9LnBuZ2A7XG4gIHJldHVybiBKaW1wLnJlYWQoYCR7cGF0aC5yZXNvbHZlKGltYWdlc0RpciwgcmVhbE5hbWUpfWApLnRoZW4oaW1hZ2UgPT4ge1xuICAgIHJvb3REaXJbbmFtZV0gPSBpbWFnZTtcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59O1xuY29uc3QgYWRkRXh0cmFJbWFnZSA9IChyb290RGlyLCBuYW1lKSA9PiB7XG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoJy4vJykpIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuICBsZXQgcmVhbE5hbWUgPSBuYW1lO1xuICBpZiAobmFtZS5pbmRleE9mKCcuJykgPT09IC0xKSByZWFsTmFtZSA9IGAke25hbWV9LnBuZ2A7XG4gIHJldHVybiBKaW1wLnJlYWQoYCR7cGF0aC5yZXNvbHZlKGV4dHJhSW1hZ2VzRGlyLCByZWFsTmFtZSl9YCkudGhlbihpbWFnZSA9PiB7XG4gICAgcm9vdERpcltuYW1lXSA9IGltYWdlO1xuICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn07XG5jb25zdCBhZGRBbmltYXRlID0gKHJvb3REaXIsIG5hbWUpID0+IHtcbiAgcmV0dXJuIHJlYWRBbmltYXRlKG5hbWUpLnRoZW4oKHJhdykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgYW5pbWF0ZXNEYXRhW25hbWVdID0gZGF0YTtcbiAgICBjb25zdCBiaXRtYXBzRGF0YSA9IFtdO1xuICAgIGNvbnN0IHJlZ2V4ID0gL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLztcbiAgICBkYXRhLmJpdG1hcHMuZm9yRWFjaCgocmF3QmFzZSwgaSkgPT4ge1xuICAgICAgaWYgKHJhd0Jhc2UgPT09ICcnKSByZXR1cm4gYml0bWFwc0RhdGEucHVzaCgwKTtcbiAgICAgIGNvbnN0IGJhc2UgPSByYXdCYXNlLnJlcGxhY2UocmVnZXgsICcnKTtcbiAgICAgIGNvbnN0IGRhdGFCdWZmZXIgPSBCdWZmZXIuZnJvbShiYXNlLCAnYmFzZTY0Jyk7XG4gICAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9LSR7aX1gO1xuICAgICAgcm9vdERpcltfbmFtZV0gPSBkYXRhQnVmZmVyO1xuICAgICAgcmV0dXJuIGJpdG1hcHNEYXRhLnB1c2goMSk7XG4gICAgfSk7XG4gICAgZGF0YS5iaXRtYXBzID0gYml0bWFwc0RhdGE7XG4gIH0pO1xufTtcbmNvbnN0IHJlYWQgPSAobGlzdCwgcm9vdERpciwgbmFtZSwgYWRkRnVuYyA9IGFkZEltYWdlKSA9PiB7XG4gIGlmIChyb290RGlyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcm9vdERpci5mb3JFYWNoKGRhdGEgPT4gcmVhZChsaXN0LCAuLi5kYXRhKSk7XG4gIH1cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBuYW1lLmZvckVhY2goKF9uYW1lKSA9PiByZWFkKGxpc3QsIHJvb3REaXIsIF9uYW1lLCBhZGRGdW5jKSk7XG4gIH1cbiAgbGlzdC5wdXNoKGFkZEZ1bmMocm9vdERpciwgbmFtZSkpO1xuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCByZWFkQWxsID0gKGFycikgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIHJlYWQobGlzdCwgYXJyKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QpO1xufTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZXMoKSB7XG4gIGNvbnN0IHsgbWFpbiB9ID0gZ2xvYmFsO1xuICBjb25zdCBfcm9vdCA9IG1haW4uaW1hZ2VzO1xuICBtYWluLmltYWdlc0RpciA9IGltYWdlc0RpcjtcbiAgbWFpbi5leHRyYUltYWdlc0RpciA9IGV4dHJhSW1hZ2VzRGlyO1xuICAvLyBtYWluLnJhd0ltYWdlcy5wdXNoKCdoZXJvLnBuZycsICdncm91bmQucG5nJyk7XG4gIGF3YWl0IHJlYWRBbGwoW1xuICAgIFtfcm9vdCwgbWF0ZXJpYWxzXSxcbiAgICBbX3Jvb3QuYXV0b3RpbGUsIG1haW4uYXV0b3RpbGVzXSxcbiAgICBbX3Jvb3QudGlsZXNldHMsIG1haW4udGlsZXNldHNdLFxuICAgIC8vIGxvYWQgRXh0cmFJbWFnZXNcbiAgICBbX3Jvb3QuZXh0cmFJbWFnZXMsIG1haW4uZXh0cmFJbWFnZXNMaXN0LCBhZGRFeHRyYUltYWdlXSxcbiAgICBbX3Jvb3QuYW5pbWF0ZXNCdWZmZXIsIG1haW4uYW5pbWF0ZXMsIGFkZEFuaW1hdGVdLFxuICBdKTtcbiAgY29uc3QgeyBvdXRwdXRQYXRoIH0gPSBtYWluO1xuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYW5pbWF0ZXNEYXRhKTtcbiAgY29uc3QgbmFtZSA9ICdhbmltYXRlcy5qc29uJztcbiAgZnMud3JpdGVGaWxlKHBhdGgucmVzb2x2ZShvdXRwdXRQYXRoLCBuYW1lKSwgZGF0YSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICBjb25zb2xlLmxvZyhg5paH5Lu2JHtuYW1lfeS/neWtmOaIkOWKn2ApO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZEltYWdlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=