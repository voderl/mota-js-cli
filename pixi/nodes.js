/**
 * extend Sprite to Node
 * 拓展pixi的基础sprite,text等 增加原型方法
 * 删除 应该就直接删除，如果要控制触发删除时比如淡出效果，应零设一个函数 触发删除
 * 设置一个属性easingFunction ？ 如果有属性则淡出，没有属性直接删除
 * EventEmitter 删除  总体事件 
 */
import * as $ from 'pixi.js-legacy';
import TWEEN from '@tweenjs/tween.js';
import utils from './utils';

// tween 请求一个公用的tween request 如果有请求就开始  如何判断 是否结束
/**
 * 
 */
/**
 * nodes 系统，需要更新的node加入activeNodes中
 */
const nodes = {
  activeNodes: [],
  types: [],
  Renders: [],
  /**
   * 加入原型链中的方法
   */
  default: {
    /**
     * 获取一个Tween，此tween并未直接开始，用于使用一些delay
     * @param {*} time - 转换时间
     * @param {*} callback - 回调函数
     * @param {Object} [data = this] - 要转换的对象，默认为本身，如果要改scale，就设置为node.scale
     */
    getTween(to, time, data = this) {
      if (!this.tweens) this.tweens = [];
      const changing = new TWEEN.Tween(data)
        .to(to, time);
      this.tweens.push(changing);
      return changing;
    },
    /**
     * 参数为两个  to time
     * 3个  to time callback  ||  from to time
     * 4个  from to time callback
     */
    changeTo(from, to, time, callback) {
      this.tweens = this.tweens || [];

      const { length } = arguments;
      if (typeof length <= 2 || (length === 3 && time === 'function')) {
        callback = time;
        time = to;
        to = from;
      } else Object.assign(this, from);
      const changing = new TWEEN.Tween(this)
        .to(to, time);
      if (callback)changing.onComplete(callback);
      changing.start();
      this.tweens.push(changing);
      return changing;
    },
    loop(from, to, time, repeat = Infinity) {
      this.tweens = this.tweens || [];
      Object.assign(this, from);
      const changing = new TWEEN.Tween(this)
        .to(to, time).repeat(repeat).yoyo(true);
      changing.start();
      this.tweens.push(changing);
      return changing;
    },
    // 删除过程参数 可被更改与自定义
    removing(callback) {
      return callback();
    },
    remove(easing, cb) {
      if (this._removing) return null;
      this._removing = true;
      if (typeof easing === 'function') {
        return easing(() => {
          this._remove(cb);
        });
      }
      return this._remove();
    },
    // 实际上的删除
    _remove(cb) {
      const {
        parent, tweens, destroyOptions, children,
      } = this;
      if (children.length !== 0) {
        const oldChildren = this.removeChildren(0, children.length);
        for (let i = 0; i < oldChildren.length; ++i) {
          oldChildren[i].remove();
        }
      }
      if (parent) parent.removeChild(this);
      if (typeof cb === 'function') cb();
      if (tweens) {
        tweens.forEach((tween) => {
          tween.destroy();
        });
        this.tweens = null;
      }
      this.destroy(destroyOptions);
    },
    addNode(type, options) {
      const node = type instanceof $.Sprite ? type : pixi.nodes.getNode(type, options);
      if (node.zIndex !== 0 && !this.sortableChildren) this.sortableChildren = true;
      this.addChild(node);
      return node;
    },
    destroyOptions: {
      children: true,
      texture: false,
      baseTexture: false,
    },
  },
  update() {
    const node = this.activeNodes;
    if (node.length === 0) return;
    let temp;
    for (let i = 0; i < node.length; i++) {
      temp = node[i];
      if (temp._destroyed) {
        node.splice(i, 1);
        i -= 1;
      } else if (temp.parent !== null) {
        temp._update();
      }
    }
  },
  /**
   * 注册一个类型， obj为该类型执行的参数
   * @param {string} name - name
   * @param {Object} obj - 参数
   */
  register(name, obj) {
    this.types[name] = obj;
  },
  /**
   * 注册一个constructor，该function原型由给定原型和 default里的函数 和附加的一些函数组成
   * @param {string} name - 注册constructor的名字
   * @param {string|Object} proto - 注册原型的prototype 或者 在pixi中的名字
   * @param {Object} add - 附加的函数 
   */
  registerRender(name, proto, add) {
    if (name instanceof Array) return name.forEach(_name => this.registerRender(_name));
    let data = Object.create(this.default);
    if (typeof add === 'object') data = Object.assign(data, add);
    if (typeof proto !== 'function') proto = $[proto] || $[name];
    const Render = this.getRender(proto);
    for (const n in data) {
      if (Render.prototype[n]) console.warn(`${name}在注册Render时已有同名属性${n}`);
      else Render.prototype[n] = data[n];
    }
    this.Renders[name] = Render;
    return Render;
  },
  /**
 * 生成constructor, 是否 直接生成一个node顺利一点? 
 * @constructor
 */
  getRender(RenderPrototype) {
    if (RenderPrototype.prototype)RenderPrototype = RenderPrototype.prototype;
    function node(...args) {
      RenderPrototype.constructor.call(this, ...args);
    }
    node.prototype = Object.create(RenderPrototype);
    node.prototype.constructor = node;
    return node;
  },
  setNode(node, options = {}) {
    const {
      start, event, data, update, destroy, init,
    } = options;

    if (destroy) node.destroyOptions = destroy;

    if (typeof init === 'function') init.apply(node);

    // 添加start
    if (typeof start === 'function') {
      if (node.parent) start.init(node);
      else node.addListener('added', start);
    }
    // 添加update 如果 有
    if (typeof update === 'function') {
      node._update = update;
      this.activeNodes.push(node);
    }
    if (typeof event === 'object') {
      node.interactive = true;
      Object.keys(event).forEach((name) => {
        node.addListener(name, event[name]);
      });
    }
    if (typeof data === 'object') {
      for (const n in data) {
        if (typeof data[n] === 'object' && node[n])Object.assign(node[n], data[n]);
        else node[n] = data[n];
      }
    }
    options = null;
    return node;
  },
  getNode(type, options = {}) {
    let node;
    const typeData = this.types[type];
    // 生成函数
    if (typeof typeData.Render === 'function') {
      node = typeData.Render(this.Renders, options);
    } else node = new this.Renders[typeData.Render]();

    if ((typeData.init && typeData.init.call(node, options))) return node;
    if (!(options instanceof Object) || options.disable) return node;
    // destroy 参数
    // 如果有更新加入更新队列  加入不到原型里  分解开来？ 多个原型？
    // update 是 一组 还是 一个  加入到原型 ？
    if (typeof typeData.update === 'function') {
      options.update = typeData.update;
    }

    // init 是对node的处理  以下为默认处理  如果有handle的话则只执行handle
    // node 的 update ？ 如果有update 则在node的active node里加入
    // register里就注册的  不是options
    // node.scene=options.scene;
    return this.setNode(node, options);
  },
};


// 节点的生成参数：

// 在加入的时候就生成了一个该节点的proto，在show的时候new 一个
// 加入一种节点类型   提供一些参数，输入参数即可生成一个不一样的节点
// 注册节点类型
nodes.registerRender(['Sprite', 'Text', 'AnimatedSprite', 'Graphics',
  'TilingSprite']);
/* proto       ： 最基本原型链
protoFunc   ： 放入原型链的方法
最终生成函数的原型链 由proto protoFunc default（node的默认方法） 三部分的方法构成

在reigister时 生成 构造函数 以后获取node时 通过type和options获取
options包含{
  init：  在创建时进行的初始操作 如果return true 则不进行后续操作
  start： 在加入Container进行显示时进行的操作
  event：有event视为可交互，具体事项见//http://pixijs.download/release/docs/Sprite.html#event:added
  data：数值赋予 {
    x:0,
    y:0,
    anchor:{
      x:0,
      y:0
    }
  }
  以及在注册时 对options 的其他选项进行的处理
} */

// 不完善的地方  可能为多个proto时   比如block
// 初始参数不完善
// 先传递参数 再 生成！
// 对于同一参数的node  应该有优化吧
// 自己写render proto
// 先生成所有render
nodes.register('text', {
  Render(Renders, {
    text,
    style,
  }) {
    const node = new Renders.Text(text, style);
    node.resolution = 2;
    return node;
  },
});
nodes.register('sprite', {
  Render(Renders, { texture }) {
    if (texture instanceof Array) return new Renders.AnimatedSprite(texture);
    return new Renders.Sprite(texture);
  },
  init({
    texture,
    time,
  }) {
    if (texture instanceof Array) {
      time = time || 500;
      this.animationSpeed = 1000 / time / 60;
      this.play();
    }
  },
});
nodes.register('block', {
  Render(Renders, options) {
    return nodes.getNode('sprite', { disable: true });
  },
  init({
    x,
    y,
    w,
    h,
  }) {
    this.position.set(x, y);
    if (w && this.width !== w) this.width = w;
    if (h && this.height !== h) this.height = h;
    return true;
  },
});
// 注册一个节点渲染器
nodes.registerRender('StateSprite', $.AnimatedSprite, {
  change(name) {
    const frames = this._frames;
    if (!frames) return;
    if (!frames[name]) throw new Error(`${name}不存在`);
    const data = frames[name];
    if (data instanceof Array) {
      this.textures = data;
      this.status = name;
    }
  },
  // 比如hero节点 一直不变就不删除了
});
nodes.register('hero', {
  Render(Renders, { texture }) {
    return new Renders.StateSprite(Object.values(texture)[0]);
  },
  init({
    texture,
    time = 100,
  }) {
    this._frames = texture;
    this.animationSpeed = 1000 / time / 60;
  },
});


nodes.register('tilingSprite', {
  Render(Renders, { texture }) {
    return new Renders.TilingSprite(texture);
  },
  init({
    width,
    height,
  }) {
    if (!width && !height) {
      this.addListener('added', () => {
        const [x, y, w, h] = this.parent.zone;
        this.width = w;
        this.height = h;
      });
      return;
    }
    this.width = width;
    this.height = height;
  },
});
// 比如说 listen x，y改变后 更新某个怪物的伤害
// listen atk 改变后 更新所有怪物的伤害
// 默认 更新atk def mdef 更新所有
// 像吸血这样的属性  就需要提前  依赖 hp，仅仅在hp改变的时候更新伤害

// change
// 伤害计算   依赖刷新   绘制（多图层）需要灵活的多图层  比如有附加zIndex 直接新建 显示
//  hero    依赖刷新  block 直接zIndex

nodes.register('border', {
  Render: 'Graphics',
  init({
    radius,
    fillColor,
    fillAlpha = 0,
    zone,
    lineWidth = 3,
    lineColor,
    lineAlpha = 1,
    alignment = 1,
  }) {
    this.addListener('added', () => {
      if (!zone) {
        const globalZone = this.parent.zone;
        zone = [0, 0, globalZone[2], globalZone[3]];
      }
      const [
        x, y, w, h,
      ] = zone;
      console.log(zone);
      if (fillColor && !Number.isInteger(fillColor))fillColor = utils.getColor(fillColor);
      if (!Number.isInteger(lineColor))lineColor = utils.getColor(lineColor || main.borderColor);
      this.beginFill(fillColor, fillAlpha);
      this.lineStyle(lineWidth, lineColor, lineAlpha, alignment);
      if (radius) {
        if (!Number.isInteger(radius)) radius *= Math.min(w, h);
        this.drawRoundedRect(0, 0, w, h, radius);
      } else this.drawRect(0, 0, w, h);
      this.endFill();
      this.position.set(x - lineWidth, y - lineWidth);
    });
    return true;
  },
});
nodes.register('zone', {
  Render: 'Graphics',
  init({
    zone,
    color = 0x0,
    alpha = 0,
  }) {
    this.addListener('added', () => {
      this.beginFill(utils.getColor(color), alpha);
      if (!(zone instanceof Array)) {
        const t = this.parent.zone;
        console.log(this.parent);
        zone = [0, 0, t[2], t[3]];
      }
      this.drawRect(...zone);
      this.endFill();
    });
  },
});
nodes.register('graphics', {
  Render: 'Graphics',
});
export default nodes;
