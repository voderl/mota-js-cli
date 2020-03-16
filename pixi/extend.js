/*
  * 一些给某些原型加入的拓展方法
*/
import TWEEN from '@tweenjs/tween.js';
import { BaseTexture, resources, Texture } from 'pixi.js-legacy';
import utils from './utils';

/** 拓展TWEEN的destroy方法，在node（节点sprite）destroy时tween也destroy */
TWEEN.Tween.prototype.destroy = function () {
  if (this._isPlaying) this.stop();
  this._group = null;
  this._object = null;
  this._valuesStart = null;
  this._onUpdateCallback = null;
  this._onCompleteCallback = null;
  this._valuesEnd = null;
  this._easingFunction = null;
};
console.log('extend');
/**
 * Black Texture
 */
function createTexture(color) {
  const canvas = document.createElement('canvas');

  canvas.width = 32;
  canvas.height = 32;

  const context = canvas.getContext('2d');

  // context.fillStyle = color;
  // context.fillRect(0, 0, 16, 16);
  utils.fillRoundRect(context, 0, 0, 32, 32, 8, color);
  return new Texture(new BaseTexture(new resources.CanvasResource(canvas)));
}
Texture.ROUNDWHITE = createTexture('white');
Texture.BLACK = createTexture('black');
Texture.RED = createTexture('red');
// BaseTexture.prototype.getDrawableSource = function getDrawableSource() {
//   const { resource } = this;

//   return resource ? (resource.bitmap || resource.source) : this.source;
// };
