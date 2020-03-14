import utils from '../utils';
import resize from '../resize';

const { style } = resize;

const hero = {
  sprite: null,
  time: null,
  speed: 0,
  updateView() {
    const { gameWidth, gameHeight } = style;
    const { width, height } = core.bigmap;
    const { x, y, height: h } = this.sprite;
    const offsetX = utils.clamp(x - gameWidth / 2, 0, 32 * width - gameWidth);
    const offsetY = utils.clamp(y - gameHeight / 2 - h / 2, 0, 32 * height - gameHeight);
    core.bigmap.offsetX = offsetX;
    core.bigmap.offsetY = offsetY;
    const { container } = pixi.game;
    const [posX, posY] = container.zone;
    const ox = posX - offsetX;
    const oy = posY - offsetY;
    if (container.x !== ox || container.y !== oy) {
      container.position.set(ox, oy);
    }
  },
  draw() {
    const { sprite } = this;
    if (!sprite) return null;
    const { loc } = core.status.hero;
    const x = 32 * loc.x + 16;
    const y = 32 * loc.y + 32 - sprite.height / 2;
    sprite.position.set(x, y);
    if (sprite.status !== loc.direction) sprite.change(loc.direction);
    this.updateView();
    return loc.direction;
  },
  move(time, callback) {
    const direction = this.draw();
    this.moveOneStep(direction, time, callback);
  },
  moveOneStep(direction, time = 100, callback) {
    const { sprite } = this;
    if (!sprite) return;
    if (time !== this.time) {
      this.time = time;
      this.speed = (1000 / time / 60) * 4;
      sprite.animationSpeed = this.speed;
    }
    if (sprite.status !== direction) sprite.change(direction);
    sprite.play();
    const { x, y } = sprite;
    const { x: dx, y: dy } = utils.scan[direction];
    sprite.changeTo({
      x: x + dx * 32,
      y: y + dy * 32,
    }, time, () => {
      sprite.gotoAndStop(0);
      if (callback instanceof Function) callback();
    }).onUpdate(() => {
      this.updateView();
    });
  },
  moveOneStepFake(direction, time = 100, callback) {
    const { sprite } = this;
    if (!sprite) return;
    if (time !== this.time) {
      this.time = time;
      this.speed = (1000 / time / 60) * 4;
      sprite.animationSpeed = this.speed;
      // sprite.onFrameChange = (i) => {
      //   console.log(i);
      // };
    }
    if (sprite.status !== direction) sprite.change(direction);
    if (sprite.onFrameChange === null) {
      sprite.loop = false;
      sprite.onFrameChange = function (i) {
        if (!this.playing) return;
        const { x: dx, y: dy } = utils.scan[this.status];
        this.x += 8 * dx;
        this.y += 8 * dy;
        console.log(this.y);
      };
      sprite.onComplete = function () {
        this.gotoAndStop(0);
        if (this.callback instanceof Function) this.callback();
        delete this.callback;
      };
    }
    console.log('do');
    sprite.callback = callback;
    sprite.gotoAndPlay(0);
    // const { x, y } = sprite;
    // const { x: dx, y: dy } = utils.scan[direction];
    // sprite.changeTo({
    //   x: x + dx * 32,
    //   y: y + dy * 32,
    // }, time, () => {
    //   sprite.gotoAndStop(0);
    //   if (callback instanceof Function) callback();
    // });
  },
};
export default hero;
