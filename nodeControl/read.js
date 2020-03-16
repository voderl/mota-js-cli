const fs = require('fs');
const path = require('path');

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
export default read;
