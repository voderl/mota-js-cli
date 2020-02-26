import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';

const pixi = {
  Easing: TWEEN.Easing.Quadratic.InOut,
  TWEEN,
};
window.pixi = pixi;
