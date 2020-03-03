import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import TexLoader from './TexLoader';
import Scene from './scene';
import event from './event';
import nodes from './nodes';
import resize from './resize';

import './extend';

window.$ = $;
const mainPacker = require.context('./../nodeControl/data/', false, /(png|json|jpg|ico|gif|svg)$/);
const app = new $.Application({
  width: 100,
  height: 100,
  antialias: true,
  transparent: false,
  resolution: 1,
});
document.body.appendChild(app.view);
app.ticker.add(() => {
  TWEEN.update();
  nodes.update();
});
const loader = new TexLoader(mainPacker);
const pixi = {
  TWEEN,
  app,
  loader,
  Scene,
  event,
  nodes,
  resize,
  Easing: TWEEN.Easing.Quadratic.InOut,
  main: app.stage,
  ticker: app.ticker,
  textures: loader.textures,
};
pixi.scenes = new Scene('main', 'main', {
  container: app.stage,
});
pixi.scenes.addScene('statuBar', 'statusBar');
pixi.scenes.addScene('toolBar', 'toolBar');
pixi.scenes.addScene('game', 'game');
window.pixi = pixi;
