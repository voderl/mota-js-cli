import loader from '../TexLoader';
import utils from '../utils';

const { textures } = loader;

const addInfo = (event) => {
  if (event.cls.indexOf('enemy') === 0 && !event.trigger) {
    event.trigger = 'battle';
  }
  if (event.cls === 'items' && !event.trigger) {
    event.trigger = 'getItem';
  }
  if (event.noPass == null) {
    if (event.cls !== 'items') {
      event.noPass = true;
    }
  }
};
/**
 * 获取地图数组信息，因为绘制autotile的时候用得到
 */
class BaseBlock {
  constructor(info, x, y, _addInfo, eventFloor) {
    if (!info) return null;
    this.id = info.number;
    this.x = x;
    this.y = y;
    this.event = info;
    // 防止被遍历到从而在复制时死循环
    Object.defineProperty(this, 'texture', {
      enumerable: false,
      configurable: true,
      value: textures[info.id],
    });
    if (_addInfo) addInfo(this.event);
    if (eventFloor) {
      this.addEvent((eventFloor.events || {})[`${x},${y}`]);
      const changeFloor = (eventFloor.changeFloor || {})[`${x},${y}`];
      if (changeFloor) this.addEvent({ trigger: 'changeFloor', data: changeFloor });
    }
    return this;
  }

  clone() {
    const block = new this.constructor();
    utils.cloneTo(block, this);
    if (this.texture) {
      Object.defineProperty(block, 'texture', {
        enumerable: false,
        configurable: true,
        value: this.texture,
      });
    }
    return block;
  }

  getInfo() {
    return {
      number: this.event.number,
      id: this.event.id,
      cls: this.event.cls,
      texture: this.texture,
      faceIds: this.event.faceIds || {},
    };
  }

  drawTo(scene) {
    // 默认不给绘制方法以自定义, 如需可单独设置
    const { x, y } = this;
    const node = scene.addNode('sprite', {
      texture: this.texture,
      disable: true,
    });
    node.position.set(x * 32 + 16 - node.width / 2, y * 32 + 32 - node.height);
    return node;
  }

  addEvent(event) {
    if (!event) return;
    if (typeof event === 'string') {
      event = { data: [event] };
    } else if (event instanceof Array) {
      event = { data: event };
    }
    event.data = event.data || [];

    // 覆盖enable
    if (this.disable == null && event.enable != null) {
      this.disable = !event.enable;
    }
    // 覆盖animate
    if (event.animate === false) {
      this.animate = 1;
    }
    // 覆盖所有属性
    for (const key in event) {
      if (key !== 'enable' && key !== 'animate' && event[key] != null) {
        this.event[key] = core.clone(event[key]);
      }
    }
    // 给无trigger的增加trigger:action
    if (!this.event.trigger) {
      this.event.trigger = 'action';
    }
  }

  destroy() {
    delete this.texture;
    this.event = null;
    this.destroyed = true;
  }
}

export default BaseBlock;
