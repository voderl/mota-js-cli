import { Texture, Rectangle } from 'pixi.js';

const ui = {
  splitTexture(texture, row, col) {
    if (!(texture instanceof Texture)) return null;
    const { orig: { width: w, height: h } } = texture;
    return this._splitTexture(h, row,
      (dy, y) => this._splitTexture(w, col,
        (dx, x) => this.split(texture, [x * dx, y * dy, dx, dy])));
  },
  getRealZone(texture, zone) {
    const { orig, _rotate } = texture;
    if (_rotate) {
      const [x, y, w, h] = zone;
      return [
        orig.height - y - h,
        x,
        h,
        w,
      ];
    }
    return zone;
  },
  split(texture, zone) {
    const { _frame, trim, orig, _rotate } = texture;
    if (_rotate) return null;
    const [x, y, w, h] = this.getRealZone(texture, zone);
    const _trim = trim || orig;
    const left = _frame.x - _trim.x;
    const top = _frame.y + _trim.y;
    // console.log(x,y,w,h);
    const newtrim = new Rectangle(...zone).fit(_trim);
    newtrim.x -= zone[0];
    newtrim.y -= zone[1];
    const newframe = new Rectangle(
      left + x + newtrim.x,
      top + y + newtrim.y,
      newtrim.width,
      newtrim.height,
    );
    const neworig = new Rectangle(0, 0, zone[2], zone[3]);
    return new Texture(
      texture,
      newframe,
      neworig,
      newtrim,
      _rotate,
    );
  },
  _splitTexture(len, data, func) {
    let result;
    if (data instanceof Array) {
      result = {};
      const d = len / data.length;
      data.forEach((n, i) => {
        result[n] = func(d, i);
      });
    } else {
      result = [];
      const d = len / data;
      for (let i = 0; i < data; i++) {
        result[i] = func(d, i);
      }
    }
    return result;
  },
  setLoc(node, dx, dy, x, y, zone) {
    if (!node.parent) return;
    zone = zone || node.parent.zone;
    if (node.anchor)node.anchor.set(0, 0);
    if (!Number.isInteger(dx))dx *= node.width;
    if (!Number.isInteger(dy))dy *= node.height;
    if (!Number.isInteger(x))x *= zone[2];
    if (!Number.isInteger(y))y *= zone[3];
    node.x = x - dx;
    node.y = y - dy;
  },
  getPadding(arr) {
    if (arr instanceof Array) {
      let left; let right; let bottom; let top;

      if (arr.length == 1) {
        left = right = bottom = top = arr[0];
      } else if (arr.length == 2) {
        bottom = top = arr[0];
        left = right = arr[1];
      } else if (arr.length == 3) {
        top = arr[0];
        left = right = arr[1], bottom = arr[2];
      } else if (arr.length == 4) {
        [top, right, bottom, left] = arr;
      } else return false;
      return [top, right, bottom, left];
    }
    return [0, 0, 0, 0];
  },
};
export default ui;
