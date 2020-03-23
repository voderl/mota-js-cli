/**
 * 用于加载动画文件，和动画的播放
 * 为了所有动画参数的统一，在此具体使用Animation来播放，效率可能有不足
 */
import { Texture } from 'pixi.js-legacy';
import nodes from '../nodes';
import Scene from '../Scene';
import event from '../event';
import Animation from './Animation';

const getTextures = (name, bitmaps) => bitmaps.slice(0, bitmaps.lastIndexOf(1) + 1).map(
  (value, i) => {
    if (value) {
      const id = `${name}-${i}`;
      const result = pixi.textures[id];
      if (result) {
        delete pixi.textures[id];
        return result;
      }
      return Texture.EMPTY;
    }
    return Texture.EMPTY;
  },
);
const parseFrames = (frames, ratio = 1) => {
  const result = [];
  frames.forEach((t2) => {
    const info = [];
    t2.forEach((t3) => {
      info.push({
        index: t3[0],
        x: t3[1],
        y: t3[2],
        zoom: t3[3] * ratio,
        opacity: t3[4],
        mirror: t3[5] || 0,
        angle: t3[6] || 0,
      });
    });
    result.push(info);
  });
  return result;
};
const setNode = (node, value) => {
  if (!(value instanceof Object)) return;
  const {
    x, y, zoom, opacity, mirror, angle,
  } = value;
  node.x = node.defaultX + x;
  node.y = node.defaultY + y;
  const ratio = zoom / 100;
  if (mirror) node.scale.set(-ratio, ratio);
  else node.scale.set(ratio, ratio);
  node.alpha = opacity / 255;
  node.angle = angle;
};
class Animate {
  constructor(name) {
    const content = pixi.textures.animates[name];
    if (!(content instanceof Object)) return null;
    const {
      bitmaps, frame_max: max, frames, ratio,
    } = content;
    this.ratio = ratio;
    this.textures = getTextures(name, bitmaps);
    this.frame = max;
    this.frames = parseFrames(frames, ratio);
    // this.texturesArr = this.getTexturesArr();
    this.animations = this.getTexturesArr().map(arr => new Animation(arr));
  }

  getTexturesArr() {
    const { EMPTY } = Texture;
    const list = [];
    const { frame, frames, textures } = this;
    frames.forEach((data, i) => {
      data.forEach((value, j) => {
        if (!(list[j] instanceof Array)) list[j] = new Array(frame).fill(EMPTY);
        list[j][i] = textures[value.index];
      });
    });
    return list;
  }

  play(scene, x, y, options = {}) {
    options.time = options.time || 50;
    const { EMPTY } = Texture;
    const { frames, frame } = this;
    const len = this.animations.length;
    this.animations.forEach((a, i) => {
      const _options = {
        ...options,
        init() {
          this.defaultX = x;
          this.defaultY = y;
          if (options.init instanceof Function) options.init.apply(this);
        },
        onFrameChange(j) {
          if (this.texture === EMPTY) return;
          setNode(this, frames[j % frame][i]);
          if (options.onFrameChange instanceof Function) options.onFrameChange.apply(this, j);
        },
      };
      if (i === len - 1 && options.onComplete instanceof Function) {
        _options.onComplete = function () {
          if (options.onComplete instanceof Function) options.onComplete.apply(this);
        };
      }
      const node = a.play(scene, x, y, _options);
    });
  }

  getSprites() {
    const { EMPTY } = Texture;
    const { frames } = this;
    const sprites = this.texturesArr.map((arr, i) => {
      const node = nodes.getNode('sprite', {
        texture: arr,
        time: 50,
        /**
         * @this node
         */
        init() {
          this.stop();
          this.loop = false;
          this.anchor.set(0.5, 0.5);
          this.defaultX = 0;
          this.defaultY = 0;
          this.onFrameChange = (j) => {
            if (this.texture === EMPTY) return;
            setNode(this, frames[j][i]);
            if (this.frameChangeUpdate instanceof Function) this.frameChangeUpdate(this, j);
          };
          this.onComplete = () => {
            this.remove();
            if (this.completeCallback instanceof Function) this.completeCallback();
            this.frameChangeUpdate = null;
            this.completeCallback = null;
          };
        },
      });
      return node;
    });
    return sprites;
  }

  play2(scene, x = 0, y = 0, update, cb) {
    if (!(scene instanceof Scene)) {
      scene = pixi.game.getScene(scene);
      if (!(scene instanceof Scene)) return false;
    }
    const sprites = this.getSprites();
    const len = sprites.length;
    sprites.forEach((sprite, i) => {
      sprite.x = x;
      sprite.y = y;
      sprite.defaultX = x;
      sprite.defaultY = y;
      if (update instanceof Function) {
        sprite.frameChangeUpdate = (node, j) => {
          update(node, j);
        };
      }
      if (i === len - 1 && cb instanceof Function) {
        sprite.completeCallback = cb;
      }
      scene.addNode(sprite);
      sprite.gotoAndPlay(0);
    });
    return true;
  }
}
export default Animate;
