import { utils } from 'pixi.js';
import Fresh from './libs/Fresh';

class Event extends utils.EventEmitter {
  constructor() {
    super();
    this.freshList = {};
  }

  setFresh(key, func) {
    this.freshList[key] = Fresh.get(func);
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
export default event;
