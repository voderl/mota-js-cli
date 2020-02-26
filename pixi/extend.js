import TWEEN from '@tweenjs/tween.js';

// no-multi-assign
TWEEN.Tween.prototype.destroy = function () {
  if (this._isPlaying) this.stop();
  this._group = null;
  this._object = null;
  this._valuesStart = null;
  this._valuesEnd = null;
  this._easingFunction = null;
};
