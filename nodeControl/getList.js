const fs = require('fs');
const path = require('path');

const mota = path.resolve('../mota-js');
const dir = {
  libs: path.resolve(mota, 'libs'),
  project: path.resolve(mota, 'project'),
  images: path.resolve(mota, 'project', 'images'),
  floors: path.resolve(mota, 'project', 'floors'),
};
const readFile = (src) => new Promise((resolve, reject) => {
  fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      throw err;
    }
    return resolve(data);
  });
});
// 应该是使用block时，在这里直接加入，再进行重组
const parseData = (data) => {
  return JSON.parse(data.slice(data.indexOf('=') + 1));
};
// load JSON
const config = {
  data: readFile(path.resolve(dir.project, 'data.js')).then(parseData),
  icons: readFile(path.resolve(dir.project, 'icons.js')).then(parseData),
  maps: readFile(path.resolve(dir.project, 'maps.js')).then(parseData),
};
Promise.all(Object.values(config)).then((values) => {
  const list = [];
  const data = values[0];
  data.main.floorIds.forEach((id) => list.push(
    readFile(path.resolve(dir.floors, `${id}.js`)).then(parseData),
  ));
  const blockIds = {};
  const initBlock = num => {
    if (blockIds[num]) return;
    blockIds[num] = true;
  };
  const traversalArray = (arr, func) => {
    if (arr instanceof Array) return arr.forEach(n => traversalArray(n, func));
    return func(arr);
  };
  return Promise.all(list).then((floors) => {
    floors.forEach(floor => {
      traversalArray([floor.map, floor.bgmap, floor.fgmap], initBlock);
    });
    console.log(blockIds);
  });
});
