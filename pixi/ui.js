import { Texture, Rectangle, TextStyle, Text } from 'pixi.js';

const ui = {
  fontStyle: {
    default: new TextStyle({
      fontStyle: 'normal',
      fill: '#ffffff',
      stroke: 'blue',
      fontFamily: 'sans-serif',
      strokeThickness: '2',
      breakWords: 'true',
    }),
  },
  getTexture(name) {
    const { textures } = window.pixi;
    const texture = name instanceof Texture ? name : (textures[name] || textures.error);
    return texture;
  },
  /**
   * 将一个texture分割成对象或数组
   * @param {*} texture
   * @param {(number|Object)} row - 分割成的行，如果是数字，则得到数组，对象得到对象
   * @param {(number|Object)} col - 由分割行得到行之后再次按列分割
   */
  splitTexture(texture, row, col) {
    if (!(texture instanceof Texture)) return null;
    const { orig: { width: w, height: h } } = texture;
    return this._splitTexture(h, row,
      (dy, y) => this._splitTexture(w, col,
        (dx, x) => this.split(texture, x * dx, y * dy, dx, dy)));
  },
  /**
   * 分割Texture 由于trim的存在，因此较为复杂
   * @param {Texture} texture
   * @param {number} dx
   * @param {number} dy
   * @param {number} dw
   * @param {number} dh
   */
  split(texture, dx, dy, dw, dh) {
    if (texture instanceof Array) {
      const temp = [];
      texture.forEach(t => temp.push(this.split(t, dx, dy, dw, dh)));
      return temp;
    }
    const {
      _frame, orig, trim, _rotate,
    } = texture;
    if (!trim) {
      return new Texture(
        texture,
        _rotate
          ? new Rectangle(
            _frame.x + orig.height - dy - dh, _frame.y + dx, dh, dw,
          )
          : new Rectangle(_frame.x + dx, _frame.y + dy, dw, dh),
        new Rectangle(0, 0, dw, dh),
        null,
        _rotate,
      );
    }
    // 获得新图片的相对剪切位置
    const newtrim = new Rectangle(dx, dy, dw, dh).fit(trim);
    // 新frame 相对于原frame 的offset
    const offsetX = newtrim.x - trim.x;
    const offsetY = newtrim.y - trim.y;
    newtrim.x -= dx;
    newtrim.y -= dy;
    // 获得新frame的相对位置，旋转的变换画图可知
    const newframe = _rotate ? new Rectangle(
      _frame.x + (trim.height - offsetY - newtrim.height),
      _frame.y + offsetX,
      newtrim.height,
      newtrim.width,
    ) : new Rectangle(
      _frame.x + offsetX,
      _frame.y + offsetY,
      newtrim.width,
      newtrim.height,
    );
    const neworig = new Rectangle(0, 0, dw, dh);
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
  drawImage(scene, texture, dx, dy, dw, dh, x, y, w, h) {
    if (typeof texture === 'string') texture = this.getTexture(texture);
    if (arguments.length > 5) {
      const node = scene.addNode('sprite', {
        texture: this.split(texture, dx, dy, dw, dh),
        disable: true,
      });
      node.position.set(x, y);
      if (w && node.width !== w) node.width = w;
      if (h && node.height !== h) node.height = h;
      node.destroyOptions = { texture: true };
      return node;
    }
    const _node = scene.addNode('sprite', {
      texture,
      disable: true,
    });
    _node.position.set(dx, dy);
    if (dw && _node.width !== dw) _node.width = dw;
    if (dh && _node.height !== dh) _node.height = dh;
    return _node;
  },
  getTextStyle(style, options) {
    if (!options) {
      if (style instanceof TextStyle) return style;
      const newStyle = this.fontStyle.default.clone();
      if (style instanceof Object) {
        Object.keys(style).forEach(id => {
          newStyle[`_${id}`] = style[id];
        });
      }
      return newStyle;
    }
    if (!(style instanceof TextStyle)) return null;
    const _newStyle = style.clone();
    if (options instanceof Object) {
      Object.keys(options).forEach(id => {
        _newStyle[`_${id}`] = options[id];
      });
    }
    return _newStyle;
  },
  drawText(scene, text, style, x, y, options = {}) {
    const newStyle = this.getTextStyle(style);
    const node = scene.addNode('text', {
      text,
      style: newStyle,
      disable: true,
    });
    const { align } = options;
    if (align) {
      if (align === 'center') node.anchor.set(0.5, 0.5);
      else if (align === 'left') node.anchor.set(0, 0.5);
    }
    node.position.set(x, y);
    return node;
  },
  moveHero(hero) {
    hero;
  },
  getHeroDrawObj() {
    const heroIconArr = core.material.icons.hero;
    const drawObjs = [];
    const hero = core.status.hero;
    let index = 0;
    drawObjs.push({
      sprite: this.getTexture('hero'),
      heroIcon: heroIconArr[direction],
      direction: hero.loc.direction,
      x: hero.loc.x,
      y: hero.loc.y,
      index: index++,
    });
    (core.status.hero.followers || []).forEach((t) => {
      drawObjs.push({
        texture: this.getTexture(t.name),
        heroIcon: heroIconArr[t.direction],
        direction: t.direction,
        x: t.x,
        y: t.y,
        index: index++,
      });
    });
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

      if (arr.length === 1) {
        left = right = bottom = top = arr[0];
      } else if (arr.length === 2) {
        bottom = top = arr[0];
        left = right = arr[1];
      } else if (arr.length === 3) {
        top = arr[0];
        left = right = arr[1], bottom = arr[2];
      } else if (arr.length === 4) {
        [top, right, bottom, left] = arr;
      } else return false;
      return [top, right, bottom, left];
    }
    return [0, 0, 0, 0];
  },
};
export default ui;
