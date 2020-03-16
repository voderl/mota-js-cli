import { utils } from 'pixi.js-legacy';
import Fresh from './libs/Fresh';

class Event extends utils.EventEmitter {
  constructor() {
    super();
    this.freshList = {};
  }

  setFresh(key, ...args) {
    this.freshList[key] = Fresh.get(...args);
    return this.freshList[key];
  }

  fresh(key, ...args) {
    if (this.freshList[key] instanceof Object) {
      return this.freshList[key].dirty(...args);
    }
    return null;
  }
}
const event = new Event();

/**
 * 一些挂载的事件
 * changeFloor - 楼层触发改变时，此时还没有改变
 * startGame - 开始游戏，changeFloor之后
 * resetGame - 读档或开始游戏，数据设置完成后
 * loadComplete - 素材的加载和处理完成后 - once
 * easingEnd - 素材加载进度条完成之后（由于缓动效果与上述不同步，稍慢）- once
 * drawMap - 楼层改变实际，绘制楼层地图时触发
 */
export default event;
