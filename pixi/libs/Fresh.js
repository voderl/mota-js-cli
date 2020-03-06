
/**
 * 将某个置为dirty，对应函数立即执行，并只执行一次，直到刷新后才能继续执行
 * （用处：刷新地图时，每个autotile绘制都会发出刷新地图数组的指令，但只有第一次才会刷新）
 */
let dirty = [];

class Data {
  constructor(func) {
    if (func instanceof Function) this.func = func;
    else throw new Error('应该为function');
    this._dirty = false;
    this.data = 0;
  }

  dirty(...args) {
    if (!this._dirty) {
      this._dirty = true;
      this.data = this.func(...args);
      dirty.push(this);
    }
    return this.data;
  }
}
const Fresh = {
  get(func) {
    return new Data(func);
  },
  update() {
    if (dirty.length !== 0) {
      dirty.forEach(item => {
        item._dirty = false;
      });
      dirty = [];
    }
  },
};
export default Fresh;
