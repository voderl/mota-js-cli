import {
  scenes,
} from '../scenes';
import event from '../event';
import ui from '../ui';
import nodes from '../nodes';

const scene = scenes.getScene('ui');
const book = {
  close() {
    scene.flash();
  },
  open(floorId = core.status.floorId) {
    // draw Bg
    const { zone } = scene.container;
    const realZone = [0, 0, zone[2], zone[3]];
    // const enemys = core.enemys.getCurrentEnemys(floorId);
    const enemys = [];
    const bg = ui.fillRect(scene, ...realZone, {
      fillAlpha: 0.6,
    });
    if (enemys.length === 0) {
      // bg.addListener('pointertap', () => {
      //   console.log('tap');
      //   this.close();
      // });
      // window.bg = bg;
      // bg.interactive = true;
      scene.addNode('text', {
        text: '本层无怪物',
        style: ui.getTextStyle({
          fontWeight: 'bold',
          fontSize: '22px',
        }),
        init() {
          ui.fitZone(this, realZone, 'center', {
            maxRatio: 2,
          });
        },
        event: {
          pointertap() {
            console.log('taptext');
          },
        },
      });
    }
  },
};
export default book;
