import { Application, ParticleContainer } from 'pixi.js-legacy';
import Scene from './Scene';
import event from './event';
import ui from './ui';

const app = new Application({
  width: 100,
  height: 100,
  antialias: true,
  transparent: false,
  resolution: 1,
});
app.view.style.position = 'absolute';
const scenes = new Scene('main', 'main', {
  container: app.stage,
  constant: true,
});
const statusBar = scenes.addScene('statusBar', 'statusBar', {
  constant: true,
});


const toolBar = scenes.addScene('toolBar', 'toolBar', {
  constant: true,
});

const game = scenes.addScene('game', 'game', {
  constant: true,
});
game.addScene(['bg', 'event', 'fg', 'damage', 'ui'], undefined, {
  constant: true,
});
const show = scenes.addScene('show', 'game', {
  constant: true,
});
// 确定基础结构
scenes.show();

// 设置背景 border
statusBar.on('show', function () {
  const { game, statusBar, toolBar } = pixi.resize.style;
  const { style } = pixi.resize;
  const { borderWidth } = style;
  const node = this.addNode('sprite', {
  });
  node.interactiveChildren = false;
  node.addNode('border', {
    zone: game,
  });
  node.addNode('border', {
    zone: statusBar,
  });
  node.addNode('border', {
    zone: toolBar,
  });
  const ground = ui.getTexture('ground');
  node.addNode('tilingSprite', {
    texture: ground,
    width: style.statusBar[2],
    height: style.statusBar[3],
    data: {
      x: style.statusBar[0] - borderWidth,
      y: style.statusBar[1] - borderWidth,
    },
  });
  node.addNode('tilingSprite', {
    texture: ground,
    width: style.toolBar[2],
    height: style.toolBar[3],
    data: {
      x: style.toolBar[0] - borderWidth,
      y: style.toolBar[1] - borderWidth,
    },
  });
});
event.on('resetGame', () => {
  statusBar.flash();
  toolBar.flash();
});
event.on('drawMap', () => {
  console.log('flash');
  game.flash();
});
export {
  app,
  scenes,
  game,
  statusBar,
  toolBar,
};
