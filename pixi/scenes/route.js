import { Texture } from 'pixi.js-legacy';
import { scenes } from '../scenes';

console.log('route');
const show = scenes.getScene('show');

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
    texture: Texture.WHITE,
    init() {
      this.scale.set(0.6, 0.6);
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
    texture: Texture.WHITE,
    init() {
      this.removing = removing;
      this.loop({
        alpha: 0.3,
      }, {
        alpha: 0.8,
      }, 400).onUpdate(n => {
        n.scale.set(n.alpha * 3, n.alpha * 3);
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

const route = {
  fillPosWithPoint(pos) {
    points.push(drawPoint(pos.x, pos.y));
  },
  drawRoute,
  clear,
  clearAutomaticRouteNode,
};
export default route;
