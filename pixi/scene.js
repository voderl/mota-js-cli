import { Container, Sprite, utils } from 'pixi.js';
import nodes from './nodes';
import resize from './resize';

const methods = {
  /** @this Container */
  checkLength() {
    if (this.children.length === 0 && !this.scene.flashing) {
      if (this.parent) this.parent.removeChild(this);
      if (this.scene.hideCallback instanceof Function) this.scene.hideCallback();
    }
  },
  /** @this Scene */
  show() {
    const { container } = this;
    if (container.parent) return;
    const { parent } = this;
    if (parent !== null) parent.container.addChild(this.container);
    console.log(`show ${this.id}`);
  },
  flash() {
    this.flashing = true;
    this.emit('hide');
    this.emit('show');
    console.log(`flash ${this.id}`);
    this.flashing = false;
  },
  /** @this Scene */
  hide(callback) {
    this.hideCallback = callback;
    console.log(`hide ${this.id}`);
    this.nodes.forEach(node => node.remove());
    this.nodes = [];
  },
  destroy() {
    delete this.container.scene;
    this.container.destroy();
    delete this.container;
    this.hideCallback = null;
    const parentScene = this.parent;
    if (parentScene) parentScene.removeScene(this);
    delete this.parent;
    this.removeAllListeners();
    console.log(`destroy ${this.id}`);
  },
  /**
   * 什么时候reLoc？重新resize后会resize，而show时不会resize
   * 但是某些resize需要重绘，某些不需要重绘，resize尺寸不变时如果在激活
   * 先resize得到尺寸 再在生成scene时按照尺寸resize 再在resize时 更新尺寸
   * 再子Scene的继承  resizetype 应该是一个数组
   * @this Scene */
  reLoc() {
    // 取消resizeType 只有position
    const { container } = this;
    const { style } = resize;
    const globalZone = style[this.resizeType];
    const zone = [...globalZone];
    if (!this.inRoot) { zone[0] = 0; zone[1] = 0; }
    if (this.position instanceof Array) {
      zone[0] += this.position[0];
      zone[1] += this.position[1];
      if (this.position[2])zone[2] = this.position[2];
      if (this.position[3])zone[3] = this.position[3];
    }
    if (!(container.zone instanceof Array)) {
      container.zone = zone;
      container.position.set(zone[0], zone[1]);
      return;
    }
    const {
      x, y, w, h,
    } = container.zone;
    if (x !== zone[0]
      || y !== zone[1]) {
      container.position.set(zone[0], zone[1]);
    }
    container.zone = zone;
    if (this.active && (w !== zone[2] || h !== zone[3])) {
      this.emit('flash');
    }
  },
  combinePosition(zone1, zone2) {
    if (!(zone1 instanceof Array) && !(zone2 instanceof Array)) return undefined;
    if (!(zone1 instanceof Array)) return zone2;
    if (!(zone2 instanceof Array)) return zone1;
    const {
      x1, y1, w1, h1,
    } = zone1;
    const {
      x2, y2, w2, h2,
    } = zone2;
    return [x1 + x2, y1 + y2, w2 || w1, h2 || h1];
  },
};
/**
 * 生成Scene 来代替Container，内部children为nodes代替Sprite
 * @constructor
 * @param {string} id - Scene's id name.
 * @param {string} resizeType - one of [main, statusBar, toolBar, game] to resize this Scene
*/
export default class Scene extends utils.EventEmitter {
  constructor(id, resizeType, {
    container,
    parent = null,
    position,
    zIndex,
  } = { }) {
    super();
    this.id = id;
    this.disable = false;
    this.stopPropagation = false;
    this.flashing = false;
    this.resizeType = resizeType;
    this.position = position;
    this.container = container || new Container();
    this.container.scene = this;
    this.parent = parent;
    this.nodes = [];
    this.children = [];
    this.addListener('show', methods.show);
    this.addListener('hide', methods.hide);
    this.addListener('flash', methods.flash);
    this.addListener('reLoc', methods.reLoc);
    this.container.addListener('childRemoved', methods.checkLength);
    if (zIndex) {
      this.container.sortableChildren = true;
      this.container.zIndex = zIndex;
    }
    this.emit('reLoc');
  }

  get active() {
    if (this.inRoot) return true;
    return this.container.parent !== null;
  }

  get inRoot() {
    return (this.parent) && this.parent.parent === null;
  }

  addScene(id, resizeType, position) {
    if (id instanceof Array) return id.forEach(_id => this.addScene(_id));
    position = methods.combinePosition(this.position, position);
    const temp = new Scene(id, resizeType || this.resizeType, {
      position,
      parent: this,
    });
    this.children.push(temp);
    return temp;
  }

  removeScene(scene) {
    const index = this.children.indexOf(scene);
    if (index > -1) this.children.splice(index, 1);
  }

  addNode(type, options) {
    if (type instanceof Array) return type.forEach((item) => { this.addNode(item[0], item[1]); });
    const node = nodes.getNode(type, options);
    const { container } = this;
    if (node.zIndex !== 0 && !container.sortableChildren)container.sortableChildren = true;
    container.addChild(node);
    this.nodes.push(node);
    return node;
  }

  getScene(id) {
    if (this.id === id) return this;
    const { children } = this;
    const len = children.length;
    let temp;
    for (let i = 0; i < len; i++) {
      temp = children[i].getScene(id);
      if (temp instanceof Scene) return temp;
    }
    return false;
  }

  doFunc(Func) {
    if (this.disable) return;
    Func.apply(this);
    if (this.stopPropagation) return;
    this.children.forEach(s => s.doFunc(Func));
  }

  doEmit(type, ...args) {
    if (this.disable) return;
    this.emit(type, ...args);
    if (this.stopPropagation) return;
    this.children.forEach(s => s.doEmit(type, ...args));
  }

  show(...args) {
    this.disable = false;
    return this.doEmit('show', ...args);
  }

  hide(...args) {
    return this.doEmit('hide', ...args);
  }

  flash(...args) {
    return this.doEmit('flash', ...args);
  }

  reLoc(...args) {
    return this.doEmit('reLoc', ...args);
  }

  destroy() {
    this.hide(methods.destroy);
  }
}
