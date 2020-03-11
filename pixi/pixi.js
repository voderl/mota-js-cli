import * as $ from 'pixi.js-legacy';
import TWEEN from '@tweenjs/tween.js';
import Fresh from './libs/Fresh';

import loader from './TexLoader';
import weather from './weather';
import { app, scenes, game } from './scenes';
import event from './event';
import maps from './maps';
import utils from './utils';
import ui from './ui';

import nodes from './nodes';
import resize from './resize';

import Block from './libs/Block';

import './scenes/game';
import './scenes/changeFloor';
import './scenes/toolBar';
import './scenes/statusBar';
import './libs/Animate';
import './extend';
import './update';

window.$ = $;

app.ticker.add(() => {
  Fresh.update();
  TWEEN.update();
  nodes.update();
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
  canvasRenderer: new $.CanvasRenderer(),
  Easing: TWEEN.Easing.Quadratic.InOut,
  main: app.stage,
  ticker: app.ticker,
  textures: loader.textures,
};
document.body.appendChild(app.view);
window.pixi = pixi;
