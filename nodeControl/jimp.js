const Jimp = require('jimp');

Jimp.read('./images/autotile.png', (err, tile) => {
  if (err) throw err;
  tile.crop(0, 0, 50, 50).getBuffer(Jimp.MIME_PNG, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
