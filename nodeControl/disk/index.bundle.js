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
/* harmony import */ var _mota_js_project_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


console.log(_mota_js_project_icons__WEBPACK_IMPORTED_MODULE_0__["icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1"]);
console.log('hello');
console.log('yes');
console.log('yes');

/***/ }),
/* 1 */
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


/***/ })
/******/ ]);