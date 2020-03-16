import { Texture } from 'pixi.js-legacy';
import { scenes, game } from '../scenes';

const show = game.getScene('event');

let points = [];

let nodes = [];

const clearAutomaticRouteNode = (x, y) => {
  if (nodes.length === 0) return;
  const node = nodes.shift();
  node.remove();
};

const clear = () => {
  points.forEach(node => node.remove());
  points = [];
  nodes.forEach(node => node.remove());
  nodes = [];
};

const removing = function (cb) {
  const { tweens } = this;
  if (tweens) {
    tweens.forEach((tween) => {
      tween.destroy();
    });
  }
  this.changeTo({
    alpha: 0,
  }, 500, cb);
};

const drawPoint = (x, y) => {
  const node = show.addNode('sprite', {
    texture: Texture.ROUNDWHITE,
    init() {
      this.scale.set(0.3, 0.3);
      this.alpha = 0.6;
    },
    data: {
      x: x * 32 + 16,
      y: y * 32 + 16,
      anchor: {
        x: 0.5,
        y: 0.5,
      },
    },
  });
  return node;
};
const drawEnd = (x, y) => {
  const node = show.addNode('sprite', {
    texture: Texture.ROUNDWHITE,
    init() {
      this.removing = removing;
      this.loop({
        alpha: 0.3,
      }, {
        alpha: 0.8,
      }, 400).onUpdate(n => {
        n.scale.set(n.alpha * 1.5, n.alpha * 1.5);
      });
    },
    data: {
      x: x * 32 + 16,
      y: y * 32 + 16,
      anchor: {
        x: 0.5,
        y: 0.5,
      },
    },
  });
  return node;
};
const drawRoute = (moveStep) => {
  const len = moveStep.length;
  moveStep.forEach((s, i) => {
    if (i === len - 1) {
      nodes.push(drawEnd(s.x, s.y));
    } else {
      nodes.push(drawPoint(s.x, s.y));
    }
  });
};
const wrong = (x, y) => {
  const node = drawPoint(x, y);
  node.texture = Texture.RED;
  node.scale.set(1, 1);
  node.removing = removing;
  node.remove();
};

const route = {
  fillPosWithPoint(pos) {
    const { offsetX, offsetY } = core.bigmap;
    const x = pos.x + offsetX / 32;
    const y = pos.y + offsetY / 32;
    points.push(drawPoint(x, y));
  },
  drawRoute,
  clear,
  clearAutomaticRouteNode,
  wrong,
};
export default route;
