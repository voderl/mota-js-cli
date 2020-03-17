import loader from '../TexLoader';
import utils from '../utils';
import Scene from '../Scene';
import nodes from '../nodes';
import draw from '../../project/draw';

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
      if (changeFloor instanceof Object) {
        this.addEvent({ trigger: 'changeFloor', data: changeFloor });
      }
    }
  }

  get disable() {
    return this._disable;
  }

  set disable(value) {
    this._disable = value;
    if (value) this.hide();
    else this.show('event');
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
    const info = {
      number: this.event.number,
      name: this.name,
      id: this.event.id,
      cls: this.event.cls,
      texture: this.texture,
      faceIds: this.event.faceIds || {},
    };
    const { id, cls } = info;
    if (cls.startsWith('enemy')) {
      if (core.material.enemys[id]) {
        info.name = core.material.enemys[id].name;
      }
    } else if (cls.startsWith('item')) {
      if (core.material.items[id]) {
        info.name = core.material.items[id].name;
      }
    }
    if (this.texture) {
      info.height = this.texture instanceof Array ? this.texture[0].height : this.texture.height;
    }
    return info;
  }

  getNode() {
    const node = nodes.getNode('sprite', {
      texture: this.texture,
      disable: true,
    });
    node.anchor.set(0.5, 0.5);
    const { id } = this.event;
    if (draw[id] instanceof Function) return draw[id].call(this, node);
    return node;
  }

  drawTo(scene) {
    // 默认不给绘制方法以自定义, 如需可单独设置
    const { x, y, id } = this;
    if (!(scene instanceof Scene)) {
      scene = pixi.game.getScene(scene);
    }
    const node = this.getNode();
    node.position.set(x * 32 + 16, y * 32 + 32 - node.height / 2);
    if (scene instanceof Scene) this.sprite = node;
    scene.addNode(node);
    return node;
  }

  show(scene) {
    if (typeof scene === 'string') scene = pixi.game.getScene(scene);
    if (scene instanceof Object) {
      this.drawTo(this.scene);
    }
  }

  hide() {
    if (this.sprite) this.sprite.remove();
    delete this.sprite;
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
    delete this.sprite;
    this.event = null;
    this.destroyed = true;
  }
}

export default BaseBlock;
