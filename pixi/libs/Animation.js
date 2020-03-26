/**
 * @module Animation
 */
import { Texture } from 'pixi.js-legacy';
import Scene from '../Scene';
/**
 * 动画，比如开关门动画，直接由一个数组的texture生成
 */
/**
 * 使用defineProtery，只有在第一次用到的时候才会执行函数获取
 * @param {Object} obj - 对象
 * @param {string} prop - 属性名称
 * @param {*} func - 获取属性的方法
 */
const setLazyValue = (obj, prop, func) => {
  if (typeof func !== 'function') return console.log('func需为function类型');
  Object.defineProperty(obj, prop, {
    configurable: true,
    get() {
      const value = func();
      Object.defineProperty(this, prop, {
        value,
        writable: true,
      });
      return value;
    },
  });
  return obj;
};
class Animation {
  /**
   * create Animation from Texture Array
   * @param {Texture[]} arr 
   */
  constructor(arr) {
    if (arr instanceof Array && arr[0] instanceof Texture) {
      this.textures = arr;
      setLazyValue(this, 'reverse', () => {
        return [...this.textures].reverse();
      });
      setLazyValue(this, 'yoyo', () => {
        return [...this.textures, ...this.reverse];
      });
    } else console.warn('动画参数应为Texture的数组');
  }

  getTexture(reverse, yoyo) {
    if (yoyo) return this.yoyo;
    if (reverse) return this.reverse;
    return this.textures;
  }

  /**
   * 
   * @param {*} scene 
   * @param {number} x 
   * @param {number} y 
   * @param {Object} options 
   */
  play(scene, x, y, {
    time = 100,
    init,
    onComplete,
    onFrameChange,
    update,
    reverse = false,
    yoyo = false,
    loop = false,
  } = {}) {
    if (!(scene instanceof Scene)) {
      scene = pixi.game.getScene(scene);
    }
    const sprite = scene.addNode('sprite', {
      texture: this.getTexture(reverse, yoyo),
      time,
      update,
      animate: true,
      init() {
        this.anchor.set(0.5, 0.5);
        this.position.set(x, y);
        this.onComplete = function () {
          if (typeof onComplete === 'function') onComplete.apply(this);
          this.remove();
        };
        if (typeof onFrameChange === 'function') this.onFrameChange = onFrameChange;
        if (loop) {
          this.loop = true;
          if (loop !== true) {
            let num = parseInt(loop, 10) || Infinity;
            this.onLoop = () => {
              num -= 1;
              if (num === 0) this.loop = false;
            };
          }
        } else this.loop = false;
        if (typeof init === 'function') init.apply(this);
        this.gotoAndPlay(0);
      },
    });
    return sprite;
  }
}
/**
 * test
core.material.animates.yellowDoor.play(
  pixi.scenes, 
  100, 
  100, 
  {
    yoyo: true,
    loop: 9,
    onFrameChange(i){
      console.log(i)
    }, 
    onComplete(){
      console.log('complete')
    }
  }
);
 */
export default Animation;
