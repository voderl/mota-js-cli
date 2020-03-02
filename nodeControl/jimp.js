const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const animates = path.resolve('../mota-js/project/animates');
fs.readFile(path.resolve(animates, 'sword.animate'), (err, raw) => {
  if (err) throw err;
  const data = JSON.parse(raw);
  const regex = /^data:image\/\w+;base64,/;
  data.bitmaps.forEach((rawBase, i) => {
    if (!rawBase) return;
    const base = rawBase.replace(regex, '');
    const dataBuffer = Buffer.from(base, 'base64');
    Jimp.read(dataBuffer)
      .then(image => image.write(`./images/animate-${i}.png`));
  });
});
