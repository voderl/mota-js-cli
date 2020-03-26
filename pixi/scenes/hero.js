import TWEEN from '@tweenjs/tween.js';
import utils from '../utils';
import resize from '../resize';
import { game } from '../scenes';
import loader from '../TexLoader';
import { Texture } from 'pixi.js-legacy';

const { style } = resize;
const Easing = TWEEN.Easing.Cubic.Out;
const bg = game.getScene('bg');
/**
 * 每四帧刷新一次
 */
const hero = {
  sprite: null,
  time: null,
  speed: 0,
  _dirty: false,
  playing: false,
  velocity: {
    x: 0,
    y: 0,
  },
  tween: null,
  setRoute(x, y, direction) {
    const { route } = loader.textures;
    bg.addNode('sprite', {
      texture: route[direction],
      data: {
        x: 32 * x + 16,
        y: 32 * y + 16,
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      init() {
        this.getTween({
          alpha: 0,
        }, 500)
          .onComplete(() => { this.remove(); })
          .delay(800).start();
      },
    });
  },
  setOffset(offsetX, offsetY) {
    const { container } = game;
    const [posX, posY] = container.zone;
    const ox = posX - offsetX;
    const oy = posY - offsetY;
    if (this.tween !== null) {
      this.tween.destroy();
      this.tween = null;
    }
    if (container.x !== ox || container.y !== oy) {
      if (this.playing) {
        this.velocity = {
          x: ox - container.x,
          y: oy - container.y,
        };
        container.position.set(ox, oy);
      } else {
        this.tween = new TWEEN.Tween(container).to({
          x: ox,
          y: oy,
        }, 300)
          .easing(Easing)
          .start();
      }
    } else {
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  },
  updateView() {
    const { gameWidth, gameHeight } = style;
    const { width, height } = core.bigmap;
    const dw = 32 * width - gameWidth;
    const dh = 32 * height - gameHeight;
    const { x, y, height: h } = this.sprite;
    const offsetX = dw <= 0 ? 0 : utils.clamp(x - gameWidth / 2, 0, dw);
    const offsetY = dh <= 0 ? 0 : utils.clamp(y - gameHeight / 2 + h / 2 - 16, 0, dh);
    core.bigmap.offsetX = offsetX;
    core.bigmap.offsetY = offsetY;
    this.setOffset(offsetX, offsetY);
  },
  /**
   * 目前的检测逻辑是50ms检测一次是否停止
   * 自动寻路 只有这一个触发，因此容易卡顿
   * 而自行按键，会在按键的时候持续触发检测
   */
  dirty() {
    if (this._dirty) return;
    if (this.playing) {
      this._dirty = true;
      return;
    }
    core.moveAction();
  },
  draw() {
    const { sprite } = this;
    if (!sprite) return null;
    const { loc } = core.status.hero;
    const x = 32 * loc.x + 16;
    const y = 32 * loc.y + 32 - sprite.height / 2;
    sprite.position.set(x, y);
    if (sprite.status !== loc.direction) sprite.change(loc.direction);
    this.updateView();
    return {
      direction: loc.direction,
      x: loc.x,
      y: loc.y,
    };
  },
  move(time, callback) {
    const { direction, x, y } = this.draw();
    this.setRoute(x, y, direction);
    this.moveOneStep(direction, time, callback);
  },
  stop() {
    this.sprite.gotoAndStop(0);
  },
  moveOneStep(direction, time = 100, callback) {
    const { sprite } = this;
    if (!sprite) return;
    if (time !== this.time) {
      this.time = time;
      this.speed = (1000 / time / 60) * 1;
      sprite.animationSpeed = this.speed;
      // sprite.onFrameChange = (i) => console.log(i);
    }
    if (sprite.status !== direction) sprite.change(direction);
    if (!sprite.playing) sprite.gotoAndPlay(1);
    this.playing = true;
    const { x, y } = sprite;
    const { x: dx, y: dy } = utils.scan[direction];
    sprite.changeTo({
      x: x + dx * 32,
      y: y + dy * 32,
    }, time, () => {
      if (typeof callback === 'function') callback();
      this.playing = false;
      if (this._dirty) {
        this._dirty = false;
        if (!core.status.heroStop) {
          core.moveAction();
          return;
        }
      }
      sprite.gotoAndStop(0);
    }).onUpdate(() => {
      this.updateView();
    });
  },
  moveOneStepFake(direction, time = 100, callback) {
    const { sprite } = this;
    if (!sprite) return;
    if (time !== this.time) {
      this.time = time;
      this.speed = (1000 / time / 60) * 4;
      sprite.animationSpeed = this.speed;
      // sprite.onFrameChange = (i) => {
      //   console.log(i);
      // };
    }
    if (sprite.status !== direction) sprite.change(direction);
    if (sprite.onFrameChange === null) {
      sprite.loop = false;
      sprite.onFrameChange = function (i) {
        if (!this.playing) return;
        const { x: dx, y: dy } = utils.scan[this.status];
        this.x += 8 * dx;
        this.y += 8 * dy;
        console.log(this.y);
      };
      sprite.onComplete = function () {
        this.gotoAndStop(0);
        if (this.callback instanceof Function) this.callback();
        delete this.callback;
      };
    }
    console.log('do');
    sprite.callback = callback;
    sprite.gotoAndPlay(0);
    // const { x, y } = sprite;
    // const { x: dx, y: dy } = utils.scan[direction];
    // sprite.changeTo({
    //   x: x + dx * 32,
    //   y: y + dy * 32,
    // }, time, () => {
    //   sprite.gotoAndStop(0);
    //   if (callback instanceof Function) callback();
    // });
  },
};
export default hero;
