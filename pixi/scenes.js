import { Application } from 'pixi.js';
import Scene from './Scene';
import maps from './maps';
import event from './event';
import loader from './TexLoader';
import ui from './ui';

const app = new Application({
  width: 100,
  height: 100,
  antialias: true,
  transparent: false,
  resolution: 1,
});

const scenes = new Scene('main', 'main', {
  container: app.stage,
});
scenes.addScene('statuBar', 'statusBar');
scenes.addScene('toolBar', 'toolBar');
const game = scenes.addScene('game', 'game');
game.addScene(['bg', 'event', 'fg', 'damage']);

const loading = scenes.addScene('loading', 'main');
event.once('easingEnd', () => {
  loading.destroy();
});
loading.on('show', function () {
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
loading.show();

game.on('show', function show() {
  const { textures } = window.pixi;
  /** draw Border */
  this.addNode('border');
});

game.getScene('bg').on('show', function (floorId = core.status.floorId) {
  const { textures } = window.pixi;
  const { width, height } = core.floors[floorId];
  const groundId = (core.status.maps || core.floors)[floorId].defaultGround || 'ground';
  // add Bg
  const texture = textures[groundId];
  this.addNode('tilingSprite', {
    texture: texture || textures.ground,
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
});
game.getScene('fg').on('show', function (floorId = core.status.floorId) {
  maps.drawBgFgMap(this, floorId, 'fg');
});
game.getScene('damage').on('show', function (floorId = core.status.floorId) {
  if (core.status.gameOver) return;
  // if (!core.hasItem('book')) return;
  const style = ui.getTextStyle({
    fontWeight: 'bold',
    fontSize: '11px',
    textBaseline: 'alphabetic',
    strokeThickness: 2,
  });
  // draw_Damage
  maps.drawDamage(this, style, floorId);
  maps.drawExtraDamage(this, style, floorId);
});

event.on('start', () => {
  game.flash();
});
export {
  app,
  scenes,
  game,
};
