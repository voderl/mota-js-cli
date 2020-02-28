import * as $ from 'pixi.js';
import data from '../nodeControl/data/packer.json';
import image from '../nodeControl/data/packer.png';

window.$ = $;
const app = new $.Application({
  width: 400,
  height: 400,
  antialias: true,
  transparent: false,
  resolution: 1,
});
window.app = app;
document.body.appendChild(app.view);
const textures = {};
window.textures = textures;
const _packer = require.context('./../nodeControl/data/', false, /^.\/packer.*\./);
const loadPacker = (packer) => {
  const list = { };
  packer.keys().forEach((name) => {
    // name startsWith './'
    const fullName = name.slice(2);
    const [id, ext] = fullName.split('.');
    if (!list[id]) list[id] = {};
    const item = list[id];
    if (ext.toLowerCase() === 'png') item.image = packer(name).default;
    else if (ext.toLowerCase() === 'json') item.data = packer(name);
  });
  const loader = new $.Loader();
  const { Spritesheet } = $;
  Object.values(list).forEach((item) => {
    loader.add(item.image, (resource) => {
      const { texture } = resource;
      const sheet = new Spritesheet(texture.baseTexture, item.data);
      sheet.parse((_textures) => {
        Object.assign(textures, _textures);
      });
    });
  });
  loader.load();
};
loadPacker(_packer);

window.getSprite = function (id) {
  const _texture = textures[id];
  if (_texture) return new $.Sprite(_texture);
  return null;
};
