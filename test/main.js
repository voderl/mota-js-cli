import Dexie from 'dexie';

/**
 * 新建一个数据库
 */
const db = new Dexie('testDatabase');
window.db = db;
db.version(1).stores({
  test: '++id,data',
});
db.version(2).stores({
  test: 'id',
});
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