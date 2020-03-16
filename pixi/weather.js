/**
 * weather为了效率，尽量采用ParticleContainer
 * 即 一种场景只有一种texture
 */
import { ParticleContainer, Container } from 'pixi.js-legacy';
import nodes from './nodes';
import ui from './ui';
import event from './event';
import resize from './resize';
import hero from './scenes/hero';

const { style } = resize;
// choose 函数 choose([2,2,3],[10,5,5])得到结果可能为2  2 3 概率分布为10：5：5 
const choose = (arr, rank) => {
  let choose;
  if (!rank) {
    choose = parseInt(Math.random() * arr.length, 10);
    return arr[choose];
  }
  if (arr.length !== rank.length) return console.error(arr, rank, 'array and rank length not same');
  const all = rank.reduce((acc, cur) => acc + cur, 0);
  choose = Math.random() * all;
  for (let px = 0; px < arr.length; px++) {
    if (choose <= rank[px]) return arr[px];
    choose -= rank[px];
  }
  throw new Error('反正不该出错的，大概是写错了= =');
};
const random = (min, max) => {
  if (min instanceof Array) return parseInt(Math.random() * (min[1] - min[0]) + min[0], 10);
  return Math.random() * (max - min) + min;
};
const weather = {
  types: {

  },
  register(type, options) {
    // 提高效率，尽可能少node的自定义
    // 创建一个新的render ？
    if (this.types[type]) throw new Error(`已登记${type}`);
    const {
      particleContainer, update, Render, init, args,
    } = options;
    delete options.particleContainer;
    delete options.update;
    delete options.Render;
    delete options.init;
    delete options.args;
    if (update instanceof Function) {
      options._update = function() {
        update.apply(this);
        const { velocity: { x, y }, playing } = pixi.hero;
        if (playing) {
          this.x += x;
          // this.y += y;
        }
      };
    }
    const _Render = nodes.registerRender(type, Render, options);
    const data = {
      particleContainer,
      Render: _Render,
      args: args instanceof Array ? args : [args],
      init,
    };
    this.types[type] = data;
  },
  getScene(type, options) {
    const scene = pixi.scenes.getScene(`weather-${type}`, 1);
    if (scene) return scene;
    const data = options || this.types[type];
    if (!data) throw new Error(`找不到${type}`);
    const s = pixi.scenes.addScene(`weather-${type}`, 'main', {
      container: data.particleContainer ? new ParticleContainer(undefined, {
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
      })
        : new Container(),
      zIndex: 50,
    });
    return s;
  },
  add(type, num) {
    const scene = this.getScene(type);
    if (!scene.active) scene.emit('show');
    const data = this.types[type];
    const active = nodes.activeNodes;
    if (!(data instanceof Object)) return null;
    const { args, init } = data;
    for (let i = 0; i < num; i++) {
      const node = new data.Render(...args);
      init.apply(node, [i]);
      scene.addNode(node);
      active.push(node);
    }
    return scene;
  },
  hide(type) {
    if (!type) {
      pixi.scenes.children.forEach(scene => {
        if (scene.id.startsWith('weather-'))scene.hide();
      });
      return true;
    }
    const scene = pixi.scenes.getScene(`weather-${type}`, 1);
    if (!scene) return false;
    scene.hide();
    return true;
  },
  remove(type) {
    if (!type) {
      pixi.scenes.children.forEach(scene => {
        if (scene.id.startsWith('weather-'))scene.destroy();
      });
      return false;
    }
    const scene = pixi.scenes.getScene(`weather-${type}`, 1);
    if (!scene) return false;
    scene.destroy();
    return true;
  },
};
event.once('loadComplete', () => {
  weather.register('snow', {
    Render: 'Sprite',
    particleContainer: true,
    args: ui.getTexture('snowNode'),
    // nodes 逐个生成加入  的函数  怎么按照
    init() {
      this.resize();
      this.y = random(0, style.H);
      this.alpha = 0;
      this.changeTo({
        alpha: this.maxAlpha,
      }, 1000);
    },
    resize() {
      this.x = random(0, style.W);
      this.y = 0;
      this.dy = random(0.5, 1.5);
      this.maxAlpha = random(0.4, 0.8);
      const scale = random(0.1, 0.2);
      this.angleSpeed = random(0, 0.6);
      this.scale.set(scale, scale);
      this.anchor.set(0.5, 0.5);
    },
    update() {
      this.y += this.dy;
      this.angle += this.angleSpeed;
      if (this.y > style.H) {
        this.resize();
      } else if (this.x < 0) this.x = style.W;
      else if (this.x > style.W) this.x = 0;
    },
    removing(callback) {
      this.changeTo({
        alpha: 0,
      }, 1000, callback);
    },
  });
});
export default weather;
