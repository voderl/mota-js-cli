import ui from "../pixi/ui";
import Animate from "../pixi/libs/Animate";
import Animation from "../pixi/libs/Animation";

/**
 * 素材处理方式
 */
let textures = {};
const split = (id, func) => {
  if (id instanceof Array) return id.forEach(_id => split(_id, func));
  const data = textures[id];
  if (!data) return console.warn(`未发现id为${id}的图片`);
  textures[id] = func(data);
}
const handle = (_textures) => {
  textures = _textures;
  const animate = {};
  split(['hero', 'route'], (data) => {
    return ui.splitTexture(data, ['down', 'left', 'right', 'up'], 4)
  });
  split(['animateDoor'], (data) => {
    let result = ui.splitTextureByCol(data, ['yellowDoor', 'blueDoor', 'redDoor', 'specialDoor'], 4);
    Object.keys(result).forEach(id => {
      animate[id] = new Animation(result[id]);
    })
    return result;
  });
  // 加载animate
  const { animates } = _textures;
  Object.keys(animates).forEach(id => {
    animate[id] = new Animate(id);
  });
  core.material.animates = animate;
  textures = null;
}
export default handle;
