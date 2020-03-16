import {
  scenes,
} from '../scenes';
import event from '../event';
import ui from '../ui';
import nodes from '../nodes';

const scene = scenes.getScene('ui');
const book = {
  open(floorId = core.status.floorId) {
    // draw Bg
    const { zone } = scene.container;
    // const enemys = core.enemys.getCurrentEnemys(floorId);
    const enemys = [];
    ui.fillRect(scene, ...zone, {
      fillAlpha: 0.6,
    });
    if (enemys.length === 0) {
      scene.addNode('text', {
        text: '本层无怪物',
        style: ui.getTextStyle({
          fontWeight: 'bold',
          fontSize: '22px',
        }),
        init() {
          ui.fitZone(this, zone, 'center', {
            maxRatio: 2,
          });
        },
      });
    }
  },
};
export default book;
