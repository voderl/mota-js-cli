import * as $ from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import TexLoader from './loader';

import './extend';

const pixi = {
  Easing: TWEEN.Easing.Quadratic.InOut,
  TWEEN,
  textures: {},
};
window.pixi = pixi;
