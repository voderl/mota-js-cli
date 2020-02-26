const fs = require('fs');
const path = require('path');

/* function add(src) {
  fs.readFile(src, 'utf8', (err, data) => {
    if (err) return console.error(err);
    fs.writeFile(src, 'export default');
  });
} */
const dir = {
  libs: path.resolve('../mota-js/libs'),
  project: path.resolve('../mota-js/project'),
};
let string = '';
let init = '';
// 在libs文件前面加入export default
fs.readdir(dir.libs, (error, files) => {
  if (files === undefined) return;
  console.log(files);
  files.forEach((file) => {
    if (path.extname(file) === '.js') {
      const name = path.basename(file, '.js');
      string += `import ${name} from './libs/${file}'\n`;
      if (file.startsWith('core')) return;
      init += `core.${name} = new ${name}();\n`;
    }
  });
  console.log(string);
  console.log(init);
});
