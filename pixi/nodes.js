// 节点系统 相当于sprite的拓展
import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import utils from './utils';
// tween 请求一个公用的tween request 如果有请求就开始  如何判断 是否结束
function _nodes() {
  this.activeNodes = [];
  this.types = {};
  this.Renders = {};
}
_nodes.prototype.update = function () {
  const node = this.activeNodes;
  for (let i = 0; i < node.length; i++) {
    if (node[i]._destroyed) {
      node.splice(i, 1);
      i -= 1;
    } else node[i]._update();
  }
};
// 将这些方法放入原型链
_nodes.prototype.default = {
  changeTo(from, to, time, callback) {
    this.tweens = this.tweens || [];
    // 参数为两个  to time
    // 3个  to time callback  ||  from to time
    // 4个  from to time callback
    const { length } = arguments;
    if (length <= 2 || (length === 3 && time instanceof Function)) {
      callback = time;
      time = to;
      to = from;
    } else Object.assign(this, from);
    const changing = new TWEEN.Tween(this)
      .to(to, time);
    if (callback)changing.onComplete(callback);
    changing.start();
    this.tweens.push(changing);
  },
  loop(from, to, time) {
    this.tweens = this.tweens || [];
    Object.assign(this, from);
    const changing = new TWEEN.Tween(this)
      .to(to, time).repeat(Infinity).yoyo(true);
    changing.start();
    this.tweens.push(changing);
  },
  _update() {

  },
  // 删除过程参数 可被更改与自定义
  removing(callback) {
    return callback();
  },
  remove() {
    this.removing(() => {
      this._remove();
    });
  },
  // 实际上的删除
  _remove() {
    this.parent.removeChild(this);
    if (this.tweens) {
      this.tweens.forEach((tween) => {
        tween.destroy();
      });
      this.tweens = null;
    }
    this.destroy(this.destroyOptions);
  },
  destroyOptions: {
    children: false,
    texture: false,
    baseTexture: false,
  },
};
_nodes.prototype.register = function (name, obj) {
  // 参数 放入原型链 ？ 不太能吧 ？ 因为不确定原型链
  this.types[name] = obj;
};
_nodes.prototype.registerRender = function (name, proto, add) {
  if (name instanceof Array) return name.forEach(_name => this.registerRender(_name));
  let data = Object.create(this.default);
  if (add instanceof Object)data = Object.assign(data, add);
  proto = proto instanceof Object ? proto : ($[proto] ? $[proto] : $[name]);
  const Render = this.getRender(proto);
  for (const n in data) {
    if (Render.prototype[n]) console.warn(`${name}在注册Render时已有同名属性${n}`);
    else Render.prototype[n] = data[n];
  }
  this.Renders[name] = Render;
  return null;
};

_nodes.prototype.getRender = function (RenderPrototype) {
  if (RenderPrototype.prototype)RenderPrototype = RenderPrototype.prototype;
  function node(...args) {
    RenderPrototype.constructor.apply(this, args);
  }
  node.prototype = Object.create(RenderPrototype);
  node.prototype.constructor = node;
  return node;
};

_nodes.prototype.getNode = function (type, options = {}) {
  let node;
  let added = false;
  const typeData = this.types[type];
  // 生成函数
  if (typeData.Render instanceof Function) {
    node = typeData.Render(this.Renders, options);
  } else node = new this.Renders[typeData.Render]();

  // 如果有更新加入更新队列  加入不到原型里  分解开来？ 多个原型？
  // update 是 一组 还是 一个  加入到原型 ？
  if (typeData.update instanceof Function) {
    node._update = typeData.update;
    added = true;
  }
  // destroy 参数
  // init 是对node的处理  以下为默认处理  如果有handle的话则只执行handle
  // node 的 update ？ 如果有update 则在node的active node里加入
  // register里就注册的  不是options
  // node.scene=options.scene;
  if (typeData.init.call(node, options) || options.disable === true) return node;

  const {
    start, event, data, update, destroy, init,
  } = options;

  if (destroy) node.destroyOptions = destroy;

  if (init instanceof Function) init.apply(node);

  // 添加start
  if (start instanceof Function) {
    node.addListener('added', start);
  }
  // 添加update 如果 有
  if (update instanceof Function) {
    node._update = update;
    if (!added) this.activeNodes.push(node);
  }
  if (event instanceof Object) {
    node.interactive = true;
    Object.keys(event).forEach((name) => {
      node.addListener(name, event[name]);
    });
  }
  if (data instanceof Object) {
    for (const n in data) {
      if (data[n] instanceof Object && node[n])Object.assign(node[n], data[n]);
      else node[n] = data[n];
    }
  }
  return node;
};
// 节点的生成参数：

// 在加入的时候就生成了一个该节点的proto，在show的时候new 一个
// 加入一种节点类型   提供一些参数，输入参数即可生成一个不一样的节点
// 注册节点类型
const nodes = new _nodes();
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
    return new Renders.Text(text, style);
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
    }
  },
  // 比如hero节点 一直不变就不删除了
});
nodes.register('hero', {
  Render(Renders, { textures }) {
    return new Renders.StateSprite(Object.values(textures)[0]);
  },
  init({
    textures,
    time = 100,
  }) {
    this._frames = textures;
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
      const {
        x, y, w, h,
      } = zone;
      if (fillColor && !Number.isInteger(fillColor))fillColor = utils.getColor(fillColor);
      if (!Number.isInteger(lineColor))lineColor = utils.getColor(lineColor);
      this.beginFill(fillColor, fillAlpha);
      this.lineStyle(lineWidth, lineColor, lineAlpha, alignment);
      if (radius) {
        if (!Number.isInteger(radius)) radius *= Math.min(w, h);
        this.drawRoundedRect(0, 0, w, h, radius);
      } else this.drawRect(0, 0, w, h);
      this.endFill();
      this.x = x;
      this.y = y;
    });
  },
});
