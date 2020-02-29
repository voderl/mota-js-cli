import * as $ from 'pixi.js';

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
const _packer = require.context('./../nodeControl/data/', false, /(png|json|jpg|ico|gif|svg)$/);
const loadPacker = (packer) => {
  const list = { };
  packer.keys().forEach((name) => {
    // name startsWith './'
    const fullName = name.slice(2);
    const [id, ext] = fullName.split('.');
    if (!list[id]) list[id] = {};
    const item = list[id];
    if (['png', 'jpg', 'ico', 'gif'].includes(ext.toLowerCase())) item.image = packer(name).default;
    else if (ext.toLowerCase() === 'json') item.data = packer(name);
  });
  const loader = new $.Loader();
  const { Spritesheet } = $;
  Object.keys(list).forEach((id) => {
    const item = list[id];
    loader.add(item.image, (resource) => {
      const { texture: { baseTexture } } = resource;
      if (!item.data) {
        textures[id] = baseTexture;
        return;
      }
      const sheet = new Spritesheet(baseTexture, item.data);
      sheet.parse((_textures) => {
        Object.assign(textures, _textures);
      });
    });
  });
  loader.load();
  loader.onProgress.add((loader) => {console.log(loader.progress)});
  return loader;
};
loadPacker(_packer);

window.getSprite = function (id) {
  const _texture = textures[id];
  if (_texture) return new $.Sprite(_texture);
  return null;
};
