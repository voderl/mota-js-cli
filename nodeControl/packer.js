const fs = require('fs');
const texturePacker = require('free-tex-packer-core');

const images = [];
const options = {
  textureName: 'textures',
  allowRotation: true,
  exporter: 'Pixi',
};
images.push({ path: 'img1.png', contents: fs.readFileSync('./images/airwall.png') });
images.push({ path: 'img2.png', contents: fs.readFileSync('./images/autotile.png') });
images.push({ path: 'img3.png', contents: fs.readFileSync('./images/autotile1.png') });

texturePacker(images, options, (files, error) => {
  if (error) {
    console.error('Packaging failed', error);
  } else {
    files.forEach((item) => {
      console.log(item.name, item.buffer);
      fs.writeFile(item.name, item.buffer, (err) => {
        if (err) throw err;
        console.log(`${item.name}写入成功`);
      });
    });
  }
});
