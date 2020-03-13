
/**
 * 将某个置为dirty，对应函数立即执行，并只执行一次，直到刷新后才能继续执行
 * （用处：刷新地图时，每个autotile绘制都会发出刷新地图数组的指令，但只有第一次才会刷新）
 */
let dirty = [];
/**
 * 在notify一帧内的第一次请求 执行函数获得值，其余请求直接返回获得值
 */
class Notify {
  constructor(func) {
    if (func instanceof Function) this.func = func;
    else throw new Error('应该为function');
    this._dirty = false;
    this.data = 0;
  }

  dirty(...args) {
    if (!this._dirty) {
      this.args = args;
      this._dirty = true;
      this.data = this.func(...args);
      dirty.push(this);
    } else if (!this.args.every((a, i) => a === args[i])) {
      this.data = this.func(...args);
      this.args = args;
    }
    return this.data;
  }
}
/**
 * debounce 在一帧内的多次更新信号，最终在下一帧刷新时更新 且只更新一次
 */
class Debounce {
  constructor(func) {
    if (func instanceof Function) this.func = func;
    else throw new Error('应该为function');
    this._dirty = false;
    this.data = 0;
  }

  dirty(...args) {
    if (!this._dirty) {
      this._dirty = true;
      this.args = args;
      dirty.push(this);
    }
  }
}
const Fresh = {
  get(func, type = 'notify') {
    if (type === 'notify') return new Notify(func);
    if (type === 'debounce') return new Debounce(func);
    return null;
  },
  update() {
    if (dirty.length !== 0) {
      dirty.forEach(item => {
        item._dirty = false;
        if (item instanceof Debounce) {
          item.func(...item.args);
        }
        delete item.args;
      });
      dirty = [];
    }
  },
};
export default Fresh;
