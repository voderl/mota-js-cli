import ui from "../pixi/ui";

/**
 * 素材处理方式
 */
let textures = {};
const handleHero = (id) => {
  if (id instanceof Array) return id.forEach(_id => handleHero(_id));
  const data = textures[id];
  if (!data) return;
  textures[id] = ui.splitTexture(data, ['down', 'left', 'right', 'up'], 4);
}
const handle = (_textures) => {
  textures = _textures;
  handleHero(['hero', 'route']);
  textures = null;
}
export default handle;
