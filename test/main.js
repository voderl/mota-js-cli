// 对 工程的处理

// import { icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1 as icons } from '../mota-js/project/icons';
// import { maps_90f36752_8815_4be8_b32b_d7fad1d0542e as maps } from '../mota-js/project/maps';
// import data from '../editor/project/data';
// import maps from '../editor/project/maps';
// import icons from '../editor/project/icons';


require('./data/first');
require('./data/second');

console.log('third');
// Test 
// var n = 100000000;
// var a = function(){};
// console.time();
// for (let i = 0; i < n; i++){
//     if(typeof a === 'function'){};
// } 
// console.timeEnd();
// console.time();
// for (let i = 0; i < n; i++){
//     if(a){};
// } 
// console.timeEnd();
// console.time();
// for (let i = 0; i < n; i++){
//     if(a instanceof Function){};
// } 
// console.timeEnd();

const time = (func, times = 1000000) => {
  const name = func.name || null;
  console.time(name);
  for (let i = 0; i < times; i++) {
    func();
  }
  console.timeEnd(name);
};

const a = {};
Object.defineProperty(a, 'value', {
  configurable: true,
  get() {
    console.log(1);
    const value = 2;
    Object.defineProperty(a, 'value', {
      value,
    });
    return value;
  },
});
const setLazyValue = (obj, prop, func) => {
  if (typeof func !== 'function') console.log(`func需为function类型`);
  Object.defineProperty(obj, prop, {
    configurable: true,
    get () {
      const value = func();
      Object.defineProperty(this, prop, {
        value,
        writable: true,
      });
      return value;
    },
  });
};
var a = {};
setValue(a, 'value', () => {console.log('d'); return 2})
class c {
  get value() {
    window.args = arguments;
    console.log(this, arguments);
    const value = 2;
    Object.defineProperty(this, 'value', {
      value,
    });
    return value;
  }
}
const d = new c();
console.log(d.value, d.value);
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
