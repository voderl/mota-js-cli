import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import loader from './TexLoader';
import ui from './ui';
import event from './event';
import nodes from './nodes';
import resize from './resize';
import { app, scenes, game } from './scenes';
import maps from './maps';

import './extend';

window.$ = $;

app.ticker.add(() => {
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
  Easing: TWEEN.Easing.Quadratic.InOut,
  main: app.stage,
  ticker: app.ticker,
  textures: loader.textures,
};
document.body.appendChild(app.view);
window.pixi = pixi;
