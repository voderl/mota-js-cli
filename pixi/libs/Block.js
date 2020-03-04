
import loader from '../TexLoader';
import nodes from '../nodes';

const { textures } = loader;
const idToNumber = textures._info;
const blockInfo = textures._maps;

const getNumberById = (id) => {
  const t = idToNumber[id];
  if (t instanceof Object) return t.num;
  else console.error('不存在此id的图块');
  return null;
};
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
class Block {
  constructor(id, x, y, _addInfo, eventFloor) {
    console.log(id);
    const num = Number.isInteger(id) ? id : getNumberById(id);
    this.destroyed = false;
    this.x = x;
    this.y = y;
    const info = blockInfo[num];
    if (!(info instanceof Object)) return console.error(`不存在数字id为${num}的图块`);
    this.texture = textures[info.id];
    this.event = info;
    this.event.number = num;
    if (_addInfo) addInfo(this.event);
    if (eventFloor) {
      this.addEvent((eventFloor.events || {})[`${x},${y}`]);
      const changeFloor = (eventFloor.changeFloor || {})[`${x},${y}`];
      if (changeFloor) this._addEvent(block, x, y, { trigger: 'changeFloor', data: changeFloor });
    }
    return this;
  }

  static getInfo(id) {
    return new Block(id).getInfo();
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
    const node = scene.addNode('sprite', {
      texture: this.texture,
    });
    node.position.set(x * 32 + 16 - node.width / 2, y * 32 + 32 - node.height);
  }

  addEvent(event) {
    const { x, y } = this;
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
        this[key] = core.clone(event[key]);
      }
    }
    // 给无trigger的增加trigger:action
    if (!this.trigger) {
      this.trigger = 'action';
    }
  }

  destroy() {
    this.texture = null;
    this.event = null;
    this.destroyed = true;
  }
}

export default Block;
