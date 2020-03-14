import { game } from '../scenes';
import maps from '../maps';
import ui from '../ui';
import hero from './hero';

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
  hero.sprite = this.addNode('hero', {
    texture: pixi.textures.hero,
    data: {
      anchor: {
        x: 0.5,
        y: 0.5,
      },
    },
  });
  if (hero.speed) hero.sprite.animationSpeed = hero.speed;
  core.drawHero();
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
