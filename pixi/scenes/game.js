import { game } from '../scenes';
import maps from '../maps';
import ui from '../ui';

game.on('show', function show() {
  const { textures } = window.pixi;
  /** draw Border */
  ui.setMask(this);
});

game.getScene('bg').on('show', function (floorId = core.status.floorId) {
  const { textures } = window.pixi;
  const { width, height } = core.bigmap;
  const groundId = (core.status.maps || core.floors)[floorId].defaultGround || 'ground';
  // add Bg
  const texture = textures[groundId];
  this.addNode('tilingSprite', {
    texture: texture || textures.ground,
    width: 32 * width,
    height: 32 * height,
  });
  // draw Floor Images
  // draw Blocks
  maps.drawBgFgMap(this, floorId, 'bg');
});
game.getScene('event').on('show', function (floorId = core.status.floorId) {
  const { blocks } = core.status.maps[floorId];
  blocks.forEach((block) => {
    if (block.event && !block.disable) {
      maps.addBlock(this, block);
    }
  });
  core.status.heroSprite = this.addNode('hero', {
    texture: pixi.textures.hero,
  });
  core.drawHero();
});
game.getScene('fg').on('show', function (floorId = core.status.floorId) {
  maps.drawBgFgMap(this, floorId, 'fg');
});

game.getScene('damage').on('show', function (floorId = core.status.floorId) {
  if (core.status.gameOver) return;
  // if (!core.hasItem('book')) return;
  // draw_Damage
  maps.drawDamage(this, floorId);
  maps.drawExtraDamage(this, floorId);
});
