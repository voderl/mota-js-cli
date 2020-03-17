
import * as $ from 'pixi.js-legacy';
import TWEEN from '@tweenjs/tween.js';

require('./extend');

import loader from './TexLoader';

import Fresh from './libs/Fresh';

import weather from './weather';
import { app, scenes, game, fps } from './scenes';
import event from './event';
import maps from './maps';
import utils from './utils';
import ui from './ui';

import nodes from './nodes';
import resize from './resize';
import hero from './scenes/hero';
import Block from './libs/Block';

require('./scenes/game');
require('./scenes/changeFloor');
require('./scenes/toolBar');
require('./scenes/statusBar');
require('./libs/Animate');
require('./update');

console.log('loadFirst');
window.$ = $;

app.ticker.add(function () {
  Fresh.update();
  TWEEN.update();
  nodes.update();
  fps.text = app.ticker.FPS;
});
const pixi = {
  TWEEN,
  app,
  loader,
  event,
  nodes,
  resize,
  game,
  scenes,
  maps,
  ui,
  Block,
  utils,
  weather,
  hero,
  interaction: app.renderer.plugins.interaction,
  canvasRenderer: new $.CanvasRenderer({
    transparent: true,
  }),
  Easing: TWEEN.Easing.Quadratic.InOut,
  main: app.stage,
  ticker: app.ticker,
  textures: loader.textures,
};
document.body.appendChild(app.view);
window.pixi = pixi;
