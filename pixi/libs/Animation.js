import { Texture } from 'pixi.js-legacy';
import Scene from '../Scene';
import Cache from './Cache';

/**
 * 动画，比如开关门动画，直接由一个数组的texture生成
 */
class Animation extends Cache {
  constructor(arr) {
    super();
    if (arr instanceof Array && arr[0] instanceof Texture) {
      this.textures = arr;
      this.setCache('reverse', () => {
        return [...this.textures].reverse();
      });
      this.setCache('yoyo', () => {
        return [...this.textures, ...this.getCache('reverse')];
      });
    } else console.warn('动画参数应为Texture的数组');
  }

  getTexture(reverse, yoyo) {
    if (yoyo) return this.getCache('yoyo');
    if (reverse) return this.getCache('reverse');
    return this.textures;
  }

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
    // if (async === true) {
    //   return ui.setAsyncAnimate((cb) => {
    //     this.play(scene, x, y, {
    //       onComplete() {
    //         if (onComplete instanceof Function) onComplete.apply(this);
    //         cb();
    //       },
    //       init,
    //       time,
    //       onFrameChange,
    //       reverse,
    //       update,
    //       yoyo,
    //       loop,
    //     });
    //   });
    // }
    if (!(scene instanceof Scene)) {
      scene = pixi.game.getScene(scene);
    }
    const sprite = scene.addNode('sprite', {
      texture: this.getTexture(reverse, yoyo),
      time,
      update,
      init() {
        this.anchor.set(0.5, 0.5);
        this.position.set(x, y);
        this.onComplete = function () {
          if (onComplete instanceof Function) onComplete.apply(this);
          this.remove();
        };
        if (onFrameChange instanceof Function) this.onFrameChange = onFrameChange;
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
        if (init instanceof Function) init.apply(this);
        this.gotoAndPlay(0);
      },
    });
    return sprite;
  }
}

export default Animation;
