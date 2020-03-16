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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./project/project/data.js":
/*!*********************************!*\
  !*** ./project/project/data.js ***!
  \*********************************/
/*! no static exports found */
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

/***/ }),

/***/ "./test/main.js":
/*!**********************!*\
  !*** ./test/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(/*! ../project/project/data.js */ "./project/project/data.js");


window.a = a;
// import Dexie from 'dexie';

// /**
//  * 新建一个数据库
//  */
// const db = new Dexie('testDatabase');
// window.db = db;
// db.version(1).stores({
//   test: '++id,data',
// });
// db.version(2).stores({
//   test: 'id',
// });
/**
 * 一个塔建立一个数据库不太可靠
 * 只有一个数据库，每次更改数据也不能全都读出来 ？
 * 目的是一个数组或者对象，只读取或更改一部分
 * 即store可以嵌套，先读塔，再读对应存档，只读一部分
 */
//
// Manipulate and Query Database
//
// db.friends.add({ name: 'Josephine', age: 21 }).then(() => 


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9wcm9qZWN0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxlQUFlLGdCQUFnQiwyQkFBMkIsc0JBQXNCO0FBQ2xJLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osY0FBYztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CLDJDQUEyQyxrQkFBa0Isc0NBQXNDLG9EQUFvRCxtQ0FBbUMseUNBQXlDLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxzQkFBc0IsNENBQTRDLEVBQUUsR0FBRztBQUNqWDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNoYUEsVUFBVSxtQkFBTyxDQUFDLDZEQUE0Qjs7O0FBRzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9tYWluLmpzXCIpO1xuIiwidmFyIGRhdGFfYTFlMmZiNGFfZTk4Nl80NTI0X2IwZGFfOWI3YmE3YzA4NzRkID0gXG57XG5cdFwibWFpblwiOiB7XG5cdFx0XCJmbG9vcklkc1wiOiBbXG5cdFx0XHRcInNhbXBsZTBcIixcblx0XHRcdFwic2FtcGxlMVwiLFxuXHRcdFx0XCJzYW1wbGUyXCIsXG5cdFx0XHRcInNhbXBsZTNcIixcblx0XHRcdFwiTVQwXCJcblx0XHRdLFxuXHRcdFwiaW1hZ2VzXCI6IFtcblx0XHRcdFwiYmcuanBnXCIsXG5cdFx0XHRcIndpbnNraW4ucG5nXCJcblx0XHRdLFxuXHRcdFwidGlsZXNldHNcIjogW1xuXHRcdFx0XCJtYWdpY3Rvd2VyLnBuZ1wiXG5cdFx0XSxcblx0XHRcImFuaW1hdGVzXCI6IFtcblx0XHRcdFwiaGFuZFwiLFxuXHRcdFx0XCJzd29yZFwiLFxuXHRcdFx0XCJ6b25lXCJcblx0XHRdLFxuXHRcdFwiYmdtc1wiOiBbXG5cdFx0XHRcImJnbS5tcDNcIlxuXHRcdF0sXG5cdFx0XCJzb3VuZHNcIjogW1xuXHRcdFx0XCJmbG9vci5tcDNcIixcblx0XHRcdFwiYXR0YWNrLm1wM1wiLFxuXHRcdFx0XCJkb29yLm1wM1wiLFxuXHRcdFx0XCJpdGVtLm1wM1wiLFxuXHRcdFx0XCJlcXVpcC5tcDNcIixcblx0XHRcdFwiem9uZS5tcDNcIixcblx0XHRcdFwianVtcC5tcDNcIixcblx0XHRcdFwicGlja2F4ZS5tcDNcIixcblx0XHRcdFwiYm9tYi5tcDNcIixcblx0XHRcdFwiY2VudGVyRmx5Lm1wM1wiXG5cdFx0XSxcblx0XHRcIm5hbWVNYXBcIjoge1xuXHRcdFx0XCLog4zmma/lm74uanBnXCI6IFwiYmcuanBnXCIsXG5cdFx0XHRcIuiDjOaZr+mfs+S5kC5tcDNcIjogXCJiZ20ubXAzXCJcblx0XHR9LFxuXHRcdFwic3RhcnRCYWNrZ3JvdW5kXCI6IFwiYmcuanBnXCIsXG5cdFx0XCJzdGFydExvZ29TdHlsZVwiOiBcImNvbG9yOiBibGFja1wiLFxuXHRcdFwibGV2ZWxDaG9vc2VcIjogW1xuXHRcdFx0W1xuXHRcdFx0XHRcIueugOWNlVwiLFxuXHRcdFx0XHRcIkVhc3lcIlxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0XCLmma7pgJpcIixcblx0XHRcdFx0XCJOb3JtYWxcIlxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0XCLlm7Dpmr5cIixcblx0XHRcdFx0XCJIYXJkXCJcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdFwi5Zmp5qKmXCIsXG5cdFx0XHRcdFwiSGVsbFwiXG5cdFx0XHRdXG5cdFx0XSxcblx0XHRcImVxdWlwTmFtZVwiOiBbXG5cdFx0XHRcIuatpuWZqFwiLFxuXHRcdFx0XCLnm77niYxcIlxuXHRcdF0sXG5cdFx0XCJzdGFydEJnbVwiOiBudWxsLFxuXHRcdFwic3RhdHVzTGVmdEJhY2tncm91bmRcIjogbnVsbCxcblx0XHRcInN0YXR1c1RvcEJhY2tncm91bmRcIjogXCJ1cmwocHJvamVjdC9pbWFnZXMvZ3JvdW5kLnBuZykgcmVwZWF0XCIsXG5cdFx0XCJ0b29sc0JhY2tncm91bmRcIjogXCJ1cmwocHJvamVjdC9pbWFnZXMvZ3JvdW5kLnBuZykgcmVwZWF0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNDQ0NDQ0NcIixcblx0XHRcInN0YXR1c0JhckNvbG9yXCI6IFwid2hpdGVcIixcblx0XHRcImhhcmRMYWJlbENvbG9yXCI6IFwicmVkXCIsXG5cdFx0XCJmbG9vckNoYW5naW5nQmFja2dyb3VuZFwiOiBcImJsYWNrXCIsXG5cdFx0XCJmbG9vckNoYW5naW5nVGV4dENvbG9yXCI6IFwid2hpdGVcIixcblx0XHRcImZvbnRcIjogXCJWZXJkYW5hXCIsXG5cdFx0XCJzdGFydEJ1dHRvbnNTdHlsZVwiOiBcImJhY2tncm91bmQtY29sb3I6ICMzMjM2OUY7IG9wYWNpdHk6IDAuODU7IGNvbG9yOiAjRkZGRkZGOyBib3JkZXI6ICNGRkZGRkYgMnB4IHNvbGlkOyBjYXJldC1jb2xvcjogI0ZGRDcwMDtcIlxuXHR9LFxuXHRcImZpcnN0RGF0YVwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIumtlOWhlOagt+adv1wiLFxuXHRcdFwibmFtZVwiOiBcInRlbXBsYXRlXCIsXG5cdFx0XCJ2ZXJzaW9uXCI6IFwiVmVyIDIuNi42XCIsXG5cdFx0XCJmbG9vcklkXCI6IFwic2FtcGxlMFwiLFxuXHRcdFwiaGVyb1wiOiB7XG5cdFx0XHRcIm5hbWVcIjogXCLpmLPlhYlcIixcblx0XHRcdFwibHZcIjogMSxcblx0XHRcdFwiaHBtYXhcIjogOTk5OSxcblx0XHRcdFwiaHBcIjogMTAwMCxcblx0XHRcdFwibWFuYW1heFwiOiAtMSxcblx0XHRcdFwibWFuYVwiOiAwLFxuXHRcdFx0XCJhdGtcIjogMTAwLFxuXHRcdFx0XCJkZWZcIjogMTAwLFxuXHRcdFx0XCJtZGVmXCI6IDAsXG5cdFx0XHRcIm1vbmV5XCI6IDAsXG5cdFx0XHRcImV4cGVyaWVuY2VcIjogMCxcblx0XHRcdFwiZXF1aXBtZW50XCI6IFtdLFxuXHRcdFx0XCJpdGVtc1wiOiB7XG5cdFx0XHRcdFwia2V5c1wiOiB7XG5cdFx0XHRcdFx0XCJ5ZWxsb3dLZXlcIjogMCxcblx0XHRcdFx0XHRcImJsdWVLZXlcIjogMCxcblx0XHRcdFx0XHRcInJlZEtleVwiOiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiY29uc3RhbnRzXCI6IHt9LFxuXHRcdFx0XHRcInRvb2xzXCI6IHt9LFxuXHRcdFx0XHRcImVxdWlwc1wiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwibG9jXCI6IHtcblx0XHRcdFx0XCJkaXJlY3Rpb25cIjogXCJ1cFwiLFxuXHRcdFx0XHRcInhcIjogNixcblx0XHRcdFx0XCJ5XCI6IDEwXG5cdFx0XHR9LFxuXHRcdFx0XCJmbGFnc1wiOiB7fSxcblx0XHRcdFwic3RlcHNcIjogMFxuXHRcdH0sXG5cdFx0XCJzdGFydENhbnZhc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Zyo6L+Z6YeM5Y+v5Lul55So5LqL5Lu25p2l6Ieq5a6a5LmJ57uY5Yi25qCH6aKY55WM6Z2i55qE6IOM5pmv5Zu+562JXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Lmf5Y+v5Lul55u05o6l5YiH5o2i5Yiw5YW25LuW5qW85bGC77yI5q+U5aaC5p+Q5Liq5byA5aeL5Ymn5oOF5qW85bGC77yJ6L+b6KGM5pON5L2c44CCXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidHlwZVwiOiBcInNob3dJbWFnZVwiLFxuXHRcdFx0XHRcImNvZGVcIjogMSxcblx0XHRcdFx0XCJpbWFnZVwiOiBcImJnLmpwZ1wiLFxuXHRcdFx0XHRcImxvY1wiOiBbXG5cdFx0XHRcdFx0MCxcblx0XHRcdFx0XHQwXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZHdcIjogMTAwLFxuXHRcdFx0XHRcImRoXCI6IDEwMCxcblx0XHRcdFx0XCJvcGFjaXR5XCI6IDEsXG5cdFx0XHRcdFwidGltZVwiOiAwXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInR5cGVcIjogXCJ3aGlsZVwiLFxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcIjFcIixcblx0XHRcdFx0XCJkYXRhXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnu5nnlKjmiLfmj5DkvpvpgInmi6npobnvvIzov5nph4znroDljZXnmoTkvb/nlKjkuoZjaG9pY2Vz5LqL5Lu2XCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuS5n+WPr+S7pei0tOaMiemSruWbvueEtuWQjuS9v+eUqOetieW+heaTjeS9nOadpeWujOaIkFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjaG9pY2VzXCIsXG5cdFx0XHRcdFx0XHRcImNob2ljZXNcIjogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5byA5aeL5ri45oiPXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuajgOafpWJnbeeKtuaAge+8jOS4i+WQjFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiaWZcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb25kaXRpb25cIjogXCJjb3JlLmZsYWdzLnN0YXJ0RGlyZWN0bHlcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0cnVlXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLnm7TmjqXlvIDlp4vmuLjmiI/vvIzorr7nva7liJ3lp4vljJbmlbDmja5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIjogXCJmdW5jdGlvbigpe1xcbmNvcmUuZXZlbnRzLnNldEluaXREYXRhKCcnKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5Yqo5oCB55Sf5oiQ6Zq+5bqm6YCJ5oup6aG5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG52YXIgY2hvaWNlcyA9IFtdO1xcbm1haW4ubGV2ZWxDaG9vc2UuZm9yRWFjaChmdW5jdGlvbiAob25lKSB7XFxuXFx0Y2hvaWNlcy5wdXNoKHtcXFwidGV4dFxcXCI6IG9uZVswXSwgXFxcImFjdGlvblxcXCI6IFtcXG5cXHRcXHR7XFxcInR5cGVcXFwiOiBcXFwiZnVuY3Rpb25cXFwiLCBcXFwiZnVuY3Rpb25cXFwiOiBcXFwiZnVuY3Rpb24oKSB7IGNvcmUuc3RhdHVzLmhhcmQgPSAnXFxcIitvbmVbMV0rXFxcIic7IGNvcmUuZXZlbnRzLnNldEluaXREYXRhKCdcXFwiK29uZVsxXStcXFwiJyk7IH1cXFwifVxcblxcdF19KTtcXG59KVxcbmNvcmUuaW5zZXJ0QWN0aW9uKHtcXFwidHlwZVxcXCI6IFxcXCJjaG9pY2VzXFxcIiwgXFxcImNob2ljZXNcXFwiOiBjaG9pY2VzfSk7XFxufVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJoaWRlSW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjb2RlXCI6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGltZVwiOiAwXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJjb21tZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuaIkOWKn+mAieaLqemavuW6plwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJicmVha1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6K+75Y+W5a2Y5qGjXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNvbnRyb2wuY2hlY2tCZ20oKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCLnroDljZXnmoTkvb/nlKjigJzlkbzlh7ror7vmoaPnlYzpnaLigJ3mnaXlpITnkIZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiY2FsbExvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuWbnuaUvuW9leWDj1wiLFxuXHRcdFx0XHRcdFx0XHRcdFwiYWN0aW9uXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiOiBcImZ1bmN0aW9uKCl7XFxuY29yZS5jb250cm9sLmNoZWNrQmdtKClcXG59XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi6L+Z5q615Luj56CB5Lya5by55qGG6YCJ5oup5b2V5YOP5paH5Lu2XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImlmXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiIWNvcmUuaXNSZXBsYXlpbmcoKVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInRydWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCI6IFwiZnVuY3Rpb24oKXtcXG5jb3JlLmNob29zZVJlcGxheUZpbGUoKVxcbn1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmYWxzZVwiOiBbXVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiY29tbWVudFwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLmjqXkuIvmnaXkvJrmiafooYxzdGFydFRleHTkuK3nmoTkuovku7ZcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJzdGFydFRleHRcIjogW1xuXHRcdFx0XCJIae+8jOasoui/juadpeWIsCBIVE1MNSDprZTloZTmoLfmnb/vvIFcXG5cXG7mnKzmoLfmnb/nlLHoib7kuYvokbXliLbkvZzvvIzlj6/ku6XorqnkvaDlnKjkuI3kvJrlhpnku7vkvZXku6PnoIFcXG7nmoTmg4XlhrXkuIvkuZ/og73lgZrlh7rlsZ7kuo7oh6rlt7HnmoRINemtlOWhlO+8gVwiLFxuXHRcdFx0XCLov5nph4zmuLjmiI/lvIDlp4vml7bnmoTliafmg4XjgIJcXG7lrprkuYnlnKhkYXRhLmpz55qEc3RhcnRUZXh05aSE44CCXFxuXFxu5L2g5Y+v5Lul5Zyo6L+Z6YeM5YaZ5LiK6Ieq5bex55qE5YaF5a6544CCXCIsXG5cdFx0XHRcIui1tuW/q+adpeivleS4gOivleWQp++8gVwiXG5cdFx0XSxcblx0XHRcInNob3BzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiBcIm1vbmV5U2hvcDFcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwi6LSq5amq5LmL56WeXCIsXG5cdFx0XHRcdFwiaWNvblwiOiBcImJsdWVTaG9wXCIsXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIjFG6YeR5biB5ZWG5bqXXCIsXG5cdFx0XHRcdFwiY29tbW9uVGltZXNcIjogZmFsc2UsXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJ1c2VcIjogXCJtb25leVwiLFxuXHRcdFx0XHRcIm5lZWRcIjogXCIyMCsxMCp0aW1lcyoodGltZXMrMSlcIixcblx0XHRcdFx0XCJ0ZXh0XCI6IFwi5YuH5pWi55qE5q2m5aOr5ZWK77yM57uZ5oiRJHtuZWVkfemHkeW4geWwseWPr+S7pe+8mlwiLFxuXHRcdFx0XHRcImNob2ljZXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIueUn+WRvSs4MDBcIixcblx0XHRcdFx0XHRcdFwiZWZmZWN0XCI6IFwic3RhdHVzOmhwKz04MDBcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiBcImV4cFNob3AxXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIue7j+mqjOS5i+elnlwiLFxuXHRcdFx0XHRcImljb25cIjogXCJwaW5rU2hvcFwiLFxuXHRcdFx0XHRcInRleHRJbkxpc3RcIjogXCIxRue7j+mqjOWVhuW6l1wiLFxuXHRcdFx0XHRcImNvbW1vblRpbWVzXCI6IGZhbHNlLFxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwidXNlXCI6IFwiZXhwZXJpZW5jZVwiLFxuXHRcdFx0XHRcIm5lZWRcIjogXCItMVwiLFxuXHRcdFx0XHRcInRleHRcIjogXCLli4fmlaLnmoTmrablo6vllYrvvIznu5nmiJHoi6XlubLnu4/pqozlsLHlj6/ku6XvvJpcIixcblx0XHRcdFx0XCJjaG9pY2VzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInRleHRcIjogXCLnrYnnuqcrMVwiLFxuXHRcdFx0XHRcdFx0XCJuZWVkXCI6IFwiMTAwXCIsXG5cdFx0XHRcdFx0XHRcImVmZmVjdFwiOiBcInN0YXR1czpocCs9MTAwMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IFwiaXRlbVNob3BcIixcblx0XHRcdFx0XCJpdGVtXCI6IHRydWUsXG5cdFx0XHRcdFwidGV4dEluTGlzdFwiOiBcIumBk+WFt+WVhuW6l1wiLFxuXHRcdFx0XHRcIm11c3RFbmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwiY2hvaWNlc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJpZFwiOiBcInllbGxvd0tleVwiLFxuXHRcdFx0XHRcdFx0XCJudW1iZXJcIjogMTAsXG5cdFx0XHRcdFx0XHRcIm1vbmV5XCI6IDEwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IFwia2V5U2hvcDFcIixcblx0XHRcdFx0XCJ0ZXh0SW5MaXN0XCI6IFwi5Zue5pS26ZKl5YyZ5ZWG5bqXXCIsXG5cdFx0XHRcdFwibXVzdEVuYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJjb21tb25FdmVudFwiOiBcIuWbnuaUtumSpeWMmeWVhuW6l1wiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcImxldmVsVXBcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5lZWRcIjogXCIwXCIsXG5cdFx0XHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImNvbW1lbnRcIixcblx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIuatpOWkhOaYr+WIneWni+etiee6p++8jOWPqumcgOWhq+WGmeensOWPt1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5lZWRcIjogXCIyMFwiLFxuXHRcdFx0XHRcInRpdGxlXCI6IFwi56ys5LqM57qnXCIsXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzZXRWYWx1ZVwiLFxuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhdHVzOmF0a1wiLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0YXR1czphdGsrMTBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic2V0VmFsdWVcIixcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXR1czpkZWZcIixcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdGF0dXM6ZGVmKzEwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmVlZFwiOiBcIjQwXCIsXG5cdFx0XHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcdFx0XCJhY3Rpb25cIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInRpcFwiLFxuXHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwi5oGt5Zac5Y2H57qnXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdFwidmFsdWVzXCI6IHtcblx0XHRcImxhdmFEYW1hZ2VcIjogMTAwLFxuXHRcdFwicG9pc29uRGFtYWdlXCI6IDEwLFxuXHRcdFwid2Vha1ZhbHVlXCI6IDIwLFxuXHRcdFwicmVkSmV3ZWxcIjogMyxcblx0XHRcImJsdWVKZXdlbFwiOiAzLFxuXHRcdFwiZ3JlZW5KZXdlbFwiOiA1LFxuXHRcdFwicmVkUG90aW9uXCI6IDEwMCxcblx0XHRcImJsdWVQb3Rpb25cIjogMjUwLFxuXHRcdFwieWVsbG93UG90aW9uXCI6IDUwMCxcblx0XHRcImdyZWVuUG90aW9uXCI6IDgwMCxcblx0XHRcImJyZWFrQXJtb3JcIjogMC45LFxuXHRcdFwiY291bnRlckF0dGFja1wiOiAwLjEsXG5cdFx0XCJwdXJpZnlcIjogMyxcblx0XHRcImhhdHJlZFwiOiAyLFxuXHRcdFwibW92ZVNwZWVkXCI6IDEwMCxcblx0XHRcImFuaW1hdGVTcGVlZFwiOiA0MDAsXG5cdFx0XCJmbG9vckNoYW5nZVRpbWVcIjogODAwXG5cdH0sXG5cdFwiZmxhZ3NcIjoge1xuXHRcdFwiZW5hYmxlRmxvb3JcIjogdHJ1ZSxcblx0XHRcImVuYWJsZU5hbWVcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVMdlwiOiBmYWxzZSxcblx0XHRcImVuYWJsZUhQTWF4XCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTWFuYVwiOiBmYWxzZSxcblx0XHRcImVuYWJsZU1EZWZcIjogdHJ1ZSxcblx0XHRcImVuYWJsZU1vbmV5XCI6IHRydWUsXG5cdFx0XCJlbmFibGVFeHBlcmllbmNlXCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlTGV2ZWxVcFwiOiBmYWxzZSxcblx0XHRcImxldmVsVXBMZWZ0TW9kZVwiOiBmYWxzZSxcblx0XHRcImVuYWJsZUtleXNcIjogdHJ1ZSxcblx0XHRcImVuYWJsZVBaRlwiOiBmYWxzZSxcblx0XHRcImVuYWJsZURlYnVmZlwiOiBmYWxzZSxcblx0XHRcImVuYWJsZVNraWxsXCI6IGZhbHNlLFxuXHRcdFwiZmx5TmVhclN0YWlyXCI6IHRydWUsXG5cdFx0XCJmbHlSZWNvcmRQb3NpdGlvblwiOiBmYWxzZSxcblx0XHRcInBpY2theGVGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcblx0XHRcImJvbWJGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcblx0XHRcInNub3dGb3VyRGlyZWN0aW9uc1wiOiBmYWxzZSxcblx0XHRcImJpZ0tleUlzQm94XCI6IGZhbHNlLFxuXHRcdFwic3RlZWxEb29yV2l0aG91dEtleVwiOiBmYWxzZSxcblx0XHRcIml0ZW1GaXJzdFRleHRcIjogZmFsc2UsXG5cdFx0XCJlcXVpcG1lbnRcIjogZmFsc2UsXG5cdFx0XCJlcXVpcGJveEJ1dHRvblwiOiBmYWxzZSxcblx0XHRcImljb25JbkVxdWlwYm94XCI6IGZhbHNlLFxuXHRcdFwiZW5hYmxlQWRkUG9pbnRcIjogZmFsc2UsXG5cdFx0XCJlbmFibGVOZWdhdGl2ZURhbWFnZVwiOiBmYWxzZSxcblx0XHRcImhhdHJlZERlY3JlYXNlXCI6IHRydWUsXG5cdFx0XCJiZXR3ZWVuQXR0YWNrQ2VpbFwiOiBmYWxzZSxcblx0XHRcImJldHdlZW5BdHRhY2tNYXhcIjogZmFsc2UsXG5cdFx0XCJ1c2VMb29wXCI6IGZhbHNlLFxuXHRcdFwic3RhcnRVc2luZ0NhbnZhc1wiOiBmYWxzZSxcblx0XHRcInN0YXJ0RGlyZWN0bHlcIjogZmFsc2UsXG5cdFx0XCJzdGF0dXNDYW52YXNcIjogZmFsc2UsXG5cdFx0XCJzdGF0dXNDYW52YXNSb3dzT25Nb2JpbGVcIjogMyxcblx0XHRcImRpc3BsYXlFbmVteURhbWFnZVwiOiB0cnVlLFxuXHRcdFwiZGlzcGxheUNyaXRpY2FsXCI6IHRydWUsXG5cdFx0XCJkaXNwbGF5RXh0cmFEYW1hZ2VcIjogdHJ1ZSxcblx0XHRcImVuYWJsZUdlbnRsZUNsaWNrXCI6IHRydWUsXG5cdFx0XCJwb3Rpb25XaGlsZVJvdXRpbmdcIjogZmFsc2UsXG5cdFx0XCJpZ25vcmVDaGFuZ2VGbG9vclwiOiB0cnVlLFxuXHRcdFwiY2FuR29EZWFkWm9uZVwiOiBmYWxzZSxcblx0XHRcImVuYWJsZU1vdmVEaXJlY3RseVwiOiB0cnVlLFxuXHRcdFwiZW5hYmxlRGlzYWJsZWRTaG9wXCI6IHRydWUsXG5cdFx0XCJkaXNhYmxlU2hvcE9uRGFtYWdlXCI6IGZhbHNlLFxuXHRcdFwiYmx1ckZnXCI6IGZhbHNlLFxuXHRcdFwiY2hlY2tDb25zb2xlXCI6IGZhbHNlXG5cdH1cbn0iLCJjb25zdCBhID0gcmVxdWlyZSgnLi4vcHJvamVjdC9wcm9qZWN0L2RhdGEuanMnKTtcblxuXG53aW5kb3cuYSA9IGE7XG4vLyBpbXBvcnQgRGV4aWUgZnJvbSAnZGV4aWUnO1xuXG4vLyAvKipcbi8vICAqIOaWsOW7uuS4gOS4quaVsOaNruW6k1xuLy8gICovXG4vLyBjb25zdCBkYiA9IG5ldyBEZXhpZSgndGVzdERhdGFiYXNlJyk7XG4vLyB3aW5kb3cuZGIgPSBkYjtcbi8vIGRiLnZlcnNpb24oMSkuc3RvcmVzKHtcbi8vICAgdGVzdDogJysraWQsZGF0YScsXG4vLyB9KTtcbi8vIGRiLnZlcnNpb24oMikuc3RvcmVzKHtcbi8vICAgdGVzdDogJ2lkJyxcbi8vIH0pO1xuLyoqXG4gKiDkuIDkuKrloZTlu7rnq4vkuIDkuKrmlbDmja7lupPkuI3lpKrlj6/pnaBcbiAqIOWPquacieS4gOS4quaVsOaNruW6k++8jOavj+asoeabtOaUueaVsOaNruS5n+S4jeiDveWFqOmDveivu+WHuuadpSDvvJ9cbiAqIOebrueahOaYr+S4gOS4quaVsOe7hOaIluiAheWvueixoe+8jOWPquivu+WPluaIluabtOaUueS4gOmDqOWIhlxuICog5Y2zc3RvcmXlj6/ku6XltYzlpZfvvIzlhYjor7vloZTvvIzlho3or7vlr7nlupTlrZjmoaPvvIzlj6ror7vkuIDpg6jliIZcbiAqL1xuLy9cbi8vIE1hbmlwdWxhdGUgYW5kIFF1ZXJ5IERhdGFiYXNlXG4vL1xuLy8gZGIuZnJpZW5kcy5hZGQoeyBuYW1lOiAnSm9zZXBoaW5lJywgYWdlOiAyMSB9KS50aGVuKCgpID0+IFxuIl0sInNvdXJjZVJvb3QiOiIifQ==