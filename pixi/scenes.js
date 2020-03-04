import { Application } from 'pixi.js';
import Scene from './Scene';

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
game.addScene(['bg', 'event', 'fg']);

export {
  app,
  scenes,
  game,
};
