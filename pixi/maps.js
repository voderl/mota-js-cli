import { Texture, Rectangle } from 'pixi.js-legacy';
import event from './event';
import nodes from './nodes';
import Block from './libs/Block';
import ui from './ui';
import utils from './utils';

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
    if (!Block.isBlock(block)) {
      block = Block.get(block, 0, 0);
    }
    const { texture, cls } = block;
    const node = block.drawTo(scene);
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
    const arr = event.fresh(name, floorId);
    let eventArr = null;
    if (name === 'fg' && this.shouldBlurFg) {
      eventArr = event.fresh('event', floorId);
    }
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (arr[y][x] !== 0) {
          const block = Block.get(arr[y][x], x, y);
          block.name = name;
          // --- 前景虚化
          if (eventArr != null && eventArr[y][x] !== 0) {
            this.addBlock(scene, block, { alpha: 0.6 });
          } else this.addBlock(scene, block);
        }
      }
    }
  },
  drawBg(scene, floorId) {
    const { textures } = window.pixi;
    const { width, height } = core.floors[floorId];
    const groundId = (core.status.maps || core.floors)[floorId].defaultGround || 'ground';
    // add Bg
    const texture = textures[groundId];
    scene.addNode('tilingSprite', {
      texture: texture || textures.ground,
      width: 32 * width,
      height: 32 * height,
    });
    // draw Floor Images
    // draw Blocks
    this.drawBgFgMap(scene, floorId, 'bg');
  },
  drawEvents(scene, blocks, floorId) {
    blocks.forEach((block) => {
      if (block.event && !block.disable) {
        this.addBlock(scene, block);
      }
    });
  },
  drawFg(scene, floorId) {
    this.drawBgFgMap(scene, floorId, 'fg');
  },
  drawOneDamage(scene, id, x, y, style = ui.TextStyle.damage, floorId = core.status.floorId) {
    const anchor = { x: 0, y: 0.5 };
    const node = scene.addNode('sprite');
    if (core.flags.displayEnemyDamage) {
      const { damage, color, stroke } = core.enemys.getDamageString(id, x, y, floorId);
      ui.drawText(node, damage, ui.getTextStyle(style, {
        fill: color,
        stroke,
      }), 1, 31, {
        anchor,
      });
    }
    if (core.flags.displayCritical) {
      let critical = core.enemys.nextCriticals(id, 1, x, y, floorId);
      critical = core.formatBigNumber((critical[0] || [])[0], true);
      if (critical === '???') critical = '?';
      ui.drawText(node, critical, style, 1, 21, {
        anchor,
      });
    }
    node.position.set(32 * x, 32 * y);
    return node;
  },
  drawDamage(scene, floorId = core.status.floorId) {
    const style = ui.TextStyle.damage;
    core.status.maps[floorId].blocks.forEach((block) => {
      if (!block.disable && block.event.cls.indexOf('enemy') === 0 && block.event.displayDamage !== false) {
        const { x, y, event: { id } } = block;
        this.drawOneDamage(scene, id, x, y, style, floorId);
      }
    });
  },
  drawExtraDamage(scene, floorId = core.status.floorId) {
    const style = ui.getTextStyle(ui.TextStyle.damage, {
      fill: '#FFaF00',
    });
    const anchor = { x: 0.5, y: 0.5 };
    if (core.flags.displayExtraDamage) {
      const { width, height } = core.floors[floorId];
      const { checkBlock } = core.status;
      checkBlock.damage = checkBlock.damage || {};
      checkBlock.ambush = checkBlock.ambush || {};
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let damage = core.status.checkBlock.damage[`${x},${y}`] || 0;
          if (damage > 0) { // 该点伤害
            damage = core.formatBigNumber(damage, true);
            ui.drawText(scene, damage, style, 32 * x + 16, 32 * (y + 1) - 14, {
              anchor,
            });
          } else if (core.status.checkBlock.ambush[`${x},${y}`]) { // 检查捕捉
            ui.drawText(scene, '!', style, 32 * x + 16, 32 * (y + 1) - 14, {
              anchor,
            });
          }
        }
      }
    }
  },
  moveBlock(block, moveSteps, time, keep, callback) {
    const scene = pixi.game.getScene('event');
    const node = this.addBlock(scene, block);
    window.node = node;
    node.removing = keep
      ? function (cb) {
        const { x, y } = block;
        core.setBlock(block.id, x, y);
        core.showBlock(x, y);
        cb();
      }
      : function (cb) {
        this.changeTo({
          alpha: 0,
        }, 500, cb);
      };
    return this.moveBlockOneStep(block, node, moveSteps, time, callback);
  },
  moveBlockOneStep(block, node, moveSteps, time, callback) {
    const dir = moveSteps.shift();
    if (!dir) {
      node.remove(node.removing);
      if (callback instanceof Function) callback();
      return;
    }
    const scan = utils.scan[dir];
    const obj = {};
    obj.x = node.x + 32 * scan.x;
    obj.y = node.y + 32 * scan.y;
    block.x += scan.x;
    block.y += scan.y;
    node.changeTo(obj, time, () => {
      this.moveBlockOneStep(block, node, moveSteps, time, callback);
    });
  },
  clearMap() {

  },
  clearOneMap() {

  },
};

export default maps;
