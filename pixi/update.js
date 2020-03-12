import event from './event';
import { statusBar } from './scenes';

event.setFresh('updateStatusBar', () => {
  // 更新状态栏
  console.log('update');

  if (core.status.floorId == null) return;
  statusBar.update();
  // 难度
  // core.statusBar.hard.innerText = core.status.hard;
  // 自定义状态栏绘制
  // core.drawStatusBar();

  // 更新阻激夹域的伤害值
  core.updateCheckBlock();
  // 更新全地图显伤
  core.updateDamage();
  const damage = pixi.game.getScene('damage');
  if (damage.active) {
    pixi.game.getScene('damage').emit('flash');
  }
}, 'debounce');
