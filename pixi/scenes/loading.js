import { scenes } from '../scenes';
import event from '../event';
import ui from '../ui';

const loading = scenes.addScene('loading', 'main');
event.once('easingEnd', () => {
  loading.destroy();
});
loading.on('show', function (loader) {
  this.addNode('zone');
  this.addNode('text', {
    text: '0.00',
    style: loader.fontStyle,
    update() {
      this.text = loader.progress;
    },
    start() {
      ui.setLoc(this, 0.5, 0.5, 0.5, 0.5);
      this.removing = (cb) => {
        this.changeTo({
          alpha: 0,
        }, 500, cb);
      };
    },
  });
  this.addNode('graphics', {
    start() {
      this.lineStyle(4, 0xffffff);
      ui.setLoc(this, 0.5, 0.5, 0.5, 0.6);
      this.moveTo(-100, 0);
      this.lineTo(100, 0);
    },
    update() {
      this.width = 3 * loader._progress;
    },
  });
});

export default loading;
