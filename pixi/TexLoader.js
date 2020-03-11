import * as $ from 'pixi.js-legacy';
import TWEEN from '@tweenjs/tween.js';
import event from './event';
import loading from './scenes/loading';
import ui from './ui';

// 加载过程中的进度条缓动特效
class TexLoader {
  constructor(packer) {
    this.trash = {};
    this._progress = 0;
    this.progressWord = '';
    this.length = 0;
    this.textures = {};
    this._tweens = null;
    this.callback = null;
    this.packer = packer;
    this.fontStyle = new $.TextStyle({
      fontStyle: 'bold',
      fill: 'white',
      fontSize: '40px',
      align: 'center',
      stroke: 'blue',
      strokeThickness: 2,
    });
  }

  get progress() {
    return `${this._progress.toString(10).slice(0, 4)}%`;
  }

  start() {
    this.loadPacker(this.packer);
    loading.show(this);
  }

  static parseName(name) {
    const index = name.lastIndexOf('.');
    if (index === -1) return [name, ''];
    return [name.slice(0, index), name.slice(index + 1)];
  }

  // 进度条 应有一个提前假装加载的进程 时间是 10倍 最大进度是单个图片的2/3
  emitChange(value, time = 300, emitMask = true) {
    if (this._tweens !== null) {
      this._tweens.destroy();
      this._tweens = null;
    }
    if (!value) {
      value = this._progress + 200 / this.length / 3;
      time *= 5;
    }
    console.log(value, time);
    this._tweens = new TWEEN.Tween(this)
      .to({
        _progress: value,
      }, time)
      .onUpdate((obj) => {
        // console.log(obj.progress);
      })
      .easing(TWEEN.Easing.Linear.None)
      .start();
    // 如果触发结束 说明下一个还没有加载出来，那就给一个假装加载的速度上去
    if (emitMask && value < 100) {
      this._tweens.onComplete((obj) => {
        this.emitChange(null, time, false);
      });
    } else if (value >= 100) {
      this._tweens.onComplete((obj) => {
        console.log('Easing end');
        event.emit('easingEnd');
      });
    }
    return this._tweens;
  }

  loadPacker(packer) {
    const { textures } = this;
    const list = {};
    packer.keys().forEach((name) => {
      // name startsWith './'
      const fullName = name.slice(2);
      const [id, ext] = TexLoader.parseName(fullName);
      if (!list[id]) list[id] = {};
      const item = list[id];
      if (['png', 'jpg', 'ico', 'gif'].includes(ext.toLowerCase())) item.image = packer(name).default;
      else if (ext.toLowerCase() === 'json') item.data = packer(name);
    });
    const { Spritesheet, Loader } = $;
    const loader = new Loader();
    const arr = Object.keys(list);
    this.length = arr.length;
    arr.forEach((id) => {
      const item = list[id];
      if (item.data && !item.image) {
        // load 动画json
        textures[id] = item.data;
        return;
      }
      loader.add(item.image, (resource) => {
        const { texture: { baseTexture } } = resource;
        if (!item.data) {
          textures[id] = baseTexture;
          return;
        }
        const sheet = new Spritesheet(baseTexture, item.data);
        sheet.parse((_textures) => {
          Object.assign(textures, _textures);
        });
      });
    });
    loader.onProgress.add((loader) => {
      this.emitChange(loader.progress);
    });
    loader.onComplete.add(() => {
      TexLoader.handleTextures(textures);
      event.emit('loadComplete', textures);
    });
    loader.load();
    this.emitChange();
    return loader;
  }

  // 如果有动画，将textures分割成数组, 同时处理hero成易处理的格式
  static handleTextures(textures) {
    const { _info: info } = textures;
    if (!(info instanceof Object)) return;
    const list = Object.keys(info);
    list.forEach(id => {
      const { animate } = info[id];
      if (animate === 1) return;
      const texture = textures[id];
      [textures[id]] = ui.splitTexture(texture, 1, animate);
    });
    textures.hero = this.handleHero(textures.hero);
  }

  static handleHero(hero) {
    return ui.splitTexture(hero, ['down', 'left', 'right', 'up'], 4);
  }
}
const mainPacker = require.context('./../nodeControl/data/', false, /(png|json|jpg|ico|gif|svg)$/);
const loader = new TexLoader(mainPacker);

loader.start();
export default loader;
