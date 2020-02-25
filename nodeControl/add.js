//  使用node 来完成一些文件的处理，比如在project和libs加入export default
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
// 在libs文件前面加入export default
fs.readdir(dir.libs, (error, files) => {
  files.forEach((file) => {
    if (path.extname(file) === '.js') {
      // fs.appendFile(path.join(dir.libs,file),`\nexport default ${path.basename(file)};`,(err)=>{
      //   if(err)throw err;
      // })
      fs.readFile(path.join(dir.libs, file), 'utf8', (err, data) => {
        if (err) throw err;
        if (data.startsWith('export')) return;
        const start = `export default ${path.basename(file, '.js')};\n`;
        fs.writeFile(path.join(dir.libs, file), start + data, (_err) => {
          if (_err) throw _err;
        });
      });
    }
  });
});

fs.readdir(dir.project, (error, files) => {
  files.forEach((file) => {
    if (path.extname(file) === '.js') {
      fs.readFile(path.join(dir.project, file), 'utf8', (err, data) => {
        if (err) throw err;
        if (data.startsWith('export')) return;
        const start = 'export default';
        fs.writeFile(path.join(dir.project, file), start + data.slice(3), (_err) => {
          if (_err) throw _err;
        });
      });
    }
  });
});
