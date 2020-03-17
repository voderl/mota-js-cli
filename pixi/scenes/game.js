import { game } from '../scenes';
import maps from '../maps';
import ui from '../ui';

game.on('show', function show() {
  const { textures } = window.pixi;
  /** draw Border */
  ui.setMask(this);
});

game.getScene('bg').on('show', function (floorId = core.status.floorId) {
  maps.drawBg(this, floorId);
});
game.getScene('event').on('show', function (floorId = core.status.floorId) {
  const { blocks } = core.status.maps[floorId];
  maps.drawEvents(this, blocks, floorId);
  ui.setHero('hero', this);
});
game.getScene('fg').on('show', function (floorId = core.status.floorId) {
  maps.drawFg(this, floorId);
});

game.getScene('damage').on('show', function (floorId = core.status.floorId) {
  if (core.status.gameOver) return;
  // if (!core.hasItem('book')) return;
  // draw_Damage
  maps.drawDamage(this, floorId);
  maps.drawExtraDamage(this, floorId);
});
