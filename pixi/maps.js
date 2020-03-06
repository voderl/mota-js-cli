import { Texture, Rectangle } from 'pixi.js';
import event from './event';
import nodes from './nodes';
import { getBlock, BaseBlock } from './libs/Block';
import ui from './ui';

// 在block里维护一系列数组，只有改变时才重新计算，
// bg改变背景 bg fg没有图块
// 怎么计入存档
const maps = {
  getTexture(name) {
    const { textures } = window.pixi;
    const texture = name instanceof Texture ? name : (textures[name] || textures.error);
    return texture;
  },
  addBlock(scene, block, options) {
    if (!(block instanceof BaseBlock)) {
      block = getBlock(block, 0, 0);
    }
    const { texture, cls } = block;
    const node = block.drawTo(scene);
    if (node instanceof Array) {
      node.forEach(_node => Object.assign(node, options));
    }
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
    const arr = event.fresh(name, floorId);
    let eventArr = null;
    if (name === 'fg' && this.shouldBlurFg) {
      eventArr = event.fresh('event', floorId);
    }
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (arr[y][x] !== 0) {
          const block = getBlock(arr[y][x], x, y);
          block.name = name;
          // --- 前景虚化
          if (eventArr != null && eventArr[y][x] !== 0) {
            this.addBlock(scene, block, { alpha: 0.6 });
          } else this.addBlock(scene, block);
        }
      }
    }
  },
  drawDamage(scene, style, floorId = core.status.floorId) {
    console.log(style);
    core.status.maps[floorId].blocks.forEach((block) => {
      if (!block.disable && block.event.cls.indexOf('enemy') === 0 && block.event.displayDamage !== false) {
        const { x, y } = block;
        if (core.flags.displayEnemyDamage) {
          const damageString = core.enemys.getDamageString(block.event.id, x, y, floorId);
          const { damage } = damageString;
          const { color } = damageString;
          ui.drawText(scene, damage, ui.getTextStyle(style, {
            fill: color,
          }), 32 * x + 1, 32 * (y + 1) - 1, {
            align: 'left',
          });
          // core.fillBoldText(ctx, damage, 32 * x + 1, 32 * (y + 1) - 1, color);
        }
        if (core.flags.displayCritical) {
          let critical = core.enemys.nextCriticals(block.event.id, 1, x, y, floorId);
          critical = core.formatBigNumber((critical[0] || [])[0], true);
          if (critical === '???') critical = '?';
          ui.drawText(scene, critical, style, 32 * x + 1, 32 * (y + 1) - 11, {
            align: 'left',
          });
          // core.fillBoldText(ctx, critical, 32 * x + 1, 32 * (y + 1) - 11, '#FFFFFF');
        }
      }
    });
  },
  drawExtraDamage(scene, style, floorId = core.status.floorId) {
    if (core.flags.displayExtraDamage) {
      const { width, height } = core.floors[floorId];
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let damage = core.status.checkBlock.damage[`${x},${y}`] || 0;
          if (damage > 0) { // 该点伤害
            damage = core.formatBigNumber(damage, true);
            ui.drawText(scene, damage, ui.getTextStyle(style, {
              fill: '#FF7F00',
            }), 32 * x + 16, 32 * (y + 1) - 14, {
              align: 'center',
            });
          } else if (core.status.checkBlock.ambush[`${x},${y}`]) { // 检查捕捉
            ui.drawText(scene, '!', ui.getTextStyle(style, {
              fill: '#FF7F00',
            }), 32 * x + 16, 32 * (y + 1) - 14, {
              align: 'center',
            });
          }
        }
      }
    }
  },
  clearMap() {

  },
  clearOneMap() {

  },
};

export default maps;
