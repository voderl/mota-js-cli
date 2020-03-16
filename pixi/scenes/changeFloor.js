import { Texture } from 'pixi.js-legacy';
import {
  scenes,
} from '../scenes';
import event from '../event';
import weather from '../weather';
import Fresh from '../libs/Fresh';


// 100个node，每个node都会触发此remove，但最终只执行一次
const remove = Fresh.get((scene) => {
  scene.hide();
}, 'debounce');

const renderNode = (scene, col, row, callback) => {
  console.log('node');
  const [x, y, w, h] = scene.container.zone;
  const dw = w / col;
  const dh = h / row;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      const left = i * dw;
      const top = j * dh;
      const n = scene.addNode('sprite', {
        texture: Texture.BLACK,
        init() {
          this.position.set(left + dw / 2, top + dh / 2);
          this.anchor.set(0.5, 0.5);
          this.loop({
            alpha: 0,
          }, {
            alpha: 0.9,
            angle: 90,
          }, 500, 1).onUpdate((n) => {
            n.scale.set(1.5 * n.alpha, 1.5 * n.alpha);
          }).onComplete(() => {
            this.remove();
          });
        },
      });
    }
  }
  setTimeout(callback, 500);
};
const beforeChange = (info, callback) => {
  if (info.time === 0) return callback();
  const changeFloor = weather.getScene('changeFloor', {
    particleContainer: true,
  });
  renderNode(changeFloor, 10, 10, callback);
};

const afterChange = (info, callback) => {
  if (info.time === 0) return callback();
  callback();
};

const isChanging = (info, callback) => {
  core.changingFloor(info.floorId, info.heroLoc, info.fromLoad);
};
event.on('changeFloor', (info, callback) => {
  console.log('changeFloor');
  core.playSound('floor.mp3');
  beforeChange(info, () => {
    isChanging(info);
    afterChange(info, () => {
      core.events._changeFloor_afterChange(info, callback);
    });
  });
});
