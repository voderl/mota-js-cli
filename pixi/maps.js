import { Texture, Rectangle } from 'pixi.js';
import event from './event';
import { game } from './scenes';
import nodes from './nodes';
import Block from './libs/Block';

window.Block = Block;
const maps = {
  getTexture(name) {
    const { textures } = window.pixi;
    const texture = name instanceof Texture ? name : (textures[name] || textures.error);
    return texture;
  },
  addBlock(scene, block, options) {
    const { texture } = block;
    const node = scene.addNode('sprite', {
      texture,
    });
    node.position.set(block.x * 32 + 16 - node.width / 2,
      block.y * 32 + 32 - node.height);

    Object.assign(node, options);
    return node;
  },
  drawImage(scene, name, dx, dy, dw, dh, x, y, w, h) {
    const texture = this.getTexture(name);
    if (arguments.length > 5) {
      let temp;
      const rect = new Rectangle(dx, dy, dw, dh);
      if (texture instanceof Array) {
        temp = [];
        texture.forEach(t => temp.push(new $.Texture(t, rect)));
      } else temp = new Texture(texture, rect);
      node = nodes.addNode('block', {
        texture: temp,
        x,
        y,
        w,
        h,
      });
      temp = null;
      node.destroyOptions = { texture: true };
      return node;
    }
    node = nodes.addNode('block', {
      texture,
      x: dx,
      y: dy,
      w: dw,
      h: dh,
    });
    return node;
  },
  get shouldBlurFg() {
    return main.mode === 'editor' || core.flags.blurFg;
  },
  drawBgFgMap(scene, floorId = core.status.floorId, name) {
    const { width, height } = core.floors[floorId];
    const _maps = core.maps;
    const arr = _maps._getBgFgMapArray(name, floorId, true);
    console.log(arr);
    let eventArr = null;
    if (name === 'fg' && this.shouldBlurFg) {
      eventArr = _maps.getMapArray(floorId);
    }
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (arr[y][x] !== 0) {
          const block = new Block(arr[y][x], x, y);
          console.log(block);
          block.name = name;
          // --- 前景虚化
          if (eventArr != null && eventArr[y][x] !== 0) {
            this.addBlock(scene, block, { alpha: 0.6 });
          } else this.addBlock(scene, block);
        }
      }
    }
  },
  clearMap() {

  },
  clearOneMap() {

  },
};
game.on('show', function show() {
  const { textures } = window.pixi;
  /** draw Border */
  this.addNode('border');
});

game.getScene('bg').on('show', function (floorId = core.status.floorId) {
  const { textures } = window.pixi;
  const { width } = core.floors[floorId];
  const { height } = core.floors[floorId];
  const groundId = (core.status.maps || core.floors)[floorId].defaultGround || 'ground';
  // add Bg
  const texture = textures[groundId];
  this.addNode('tilingSprite', {
    texture: texture || textures.ground,
  });
  // draw Floor Images
  // draw Blocks
  maps.drawBgFgMap(this, floorId, 'bg');
});

event.on('start', () => {
  game.flash();
});
export default maps;
