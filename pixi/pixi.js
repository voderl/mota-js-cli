import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import TexLoader from './TexLoader';

import './extend';

const mainPacker = require.context('./../nodeControl/data/', false, /(png|json|jpg|ico|gif|svg)$/);
const app = new $.Application({
  width: 100,
  height: 100,
  antialias: true,
  transparent: false,
  resolution: 1,
});
app.ticker.add(() => {
  TWEEN.update();
});
const loader = new TexLoader(mainPacker);
const pixi = {
  TWEEN,
  app,
  loader,
  Easing: TWEEN.Easing.Quadratic.InOut,
  main: app.stage,
  ticker: app.ticker,
  textures: loader.textures,
};
window.pixi = pixi;
