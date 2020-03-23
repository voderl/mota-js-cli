import {
  Texture, Rectangle, TextStyle, Text, Graphics,
} from 'pixi.js-legacy';
import utils from './utils';
import nodes from './nodes';

const font = {
  default: new TextStyle({
    fontStyle: 'normal',
    fill: '#ffffff',
    stroke: 'blue',
    fontFamily: 'sans-serif',
    strokeThickness: 1,
    breakWords: true,
  }),
  calText(text, style, options) {
    const realStyle = this.getTextStyle(style, options);
    const node = new Text(text, realStyle);
    const { width, height } = node;
    node.destroy();
    return { width, height };
  },
  getTextStyle(style, options) {
    if (!options) {
      if (style instanceof TextStyle) return style;
      const newStyle = this.default.clone();
      if (style instanceof Object) {
        Object.keys(style).forEach(id => {
          newStyle[`_${id}`] = style[id];
        });
      }
      return newStyle;
    }
    if (!(style instanceof TextStyle)) return this.default.clone();
    const _newStyle = style.clone();
    if (options instanceof Object) {
      Object.keys(options).forEach(id => {
        _newStyle[`_${id}`] = options[id];
      });
    }
    return _newStyle;
  },
};


const ui = {
  TextStyle: {
    default: font.defaultTextStyle,
    damage: font.getTextStyle({
      fontWeight: 'bold',
      fontSize: '11px',
      textBaseline: 'alphabetic',
      strokeThickness: 2,
    }),
    tip: font.getTextStyle({
      fontWeight: 'normal',
      fontSize: '17px',
      textBaseline: 'alphabetic',
      strokeThickness: 0,
    }),
    main: font.getTextStyle({
      fill: 'white',
      strokeThickness: 0,
    }),
    statusBar: font.getTextStyle({
      fontSize: '20px',
      textBaseline: 'alphabetic',
    }),
    toolBar: font.getTextStyle(),
  },
  // TODO: drawTip
  calText(...args) {
    return font.calText(...args);
  },
  getTextStyle(style, options) {
    return font.getTextStyle(style, options);
  },
  getTexture(name) {
    const { textures } = window.pixi;
    const texture = name instanceof Texture ? name : (textures[name] || textures.error);
    return texture;
  },
  getBlockNode(block) {
    const { Block } = pixi;
    if (!Block.isBlock(block)) {
      block = Block.get(block, 0, 0);
    }
    return block.getNode();
  },
  getTextureHeight(texture) {
    if (texture instanceof Texture) return texture.height;
    if (texture instanceof Array && texture[0] instanceof Texture) {
      return texture[0].height;
    }
    return null;
  },
  resizeTo(from, to, arr) {
    if (!(from instanceof Object)) return;
    if (!(to instanceof Object)) return;
    if (from._destroyed || to._destroyed) return;
    let x; let y;
    if (to.anchor) {
      x = to.x - to.anchor.x * to.width,
      y = to.y - to.anchor.y * to.height;
    } else {
      x = to.x, y = to.y;
    }
    if (from.anchor) {
      from.anchor.set(0, 0);
    }
    const [top, right, bottom, left] = this.getPadding(arr);
    from.x = x - left;
    from.y = y - top;
    from.width = to.width + left + right, from.height = to.height + bottom + top;
  },
  drawConfirmBox(text, yesCallback, noCallback) {
    core.lockControl();
    text = core.replaceText(text || '');

    // 处理自定义事件
    if (core.status.event.id != 'action') {
      core.status.event.id = 'confirmBox';
      core.status.event.ui = text;
      core.status.event.data = { yes: yesCallback, no: noCallback };
    }
    if (core.status.event.selection != 0) core.status.event.selection = 1;
    const ui = pixi.scenes.getScene('ui');
    const contents = text.split('\n');
    const rect = core.ui._drawConfirmBox_getRect(contents);
    pixi.ui.fillRect(ui, rect.left, rect.top, rect.width, rect.height, {
      fillAlpha: 0.6,
      radius: 0.2,
    });
    const textStyle = pixi.ui.getTextStyle({

    });
    const len = core.calWidth('ui', '确定');
    const border = ui.addNode('border', {
      radius: 0.2,
      zone: [0, 0, 60, 30],
      lineColor: 'rgb(255, 215, 0)',
      init() {
        this.loop({
          alpha: 0.3,
        }, {
          alpha: 1,
        }, 500);
      },
    });
    for (const i in contents) {
      ui.addNode('text', {
        text: contents[i],
        style: textStyle,
        data: {
          x: core.ui.HPIXEL,
          y: rect.top + 50 + i * 30,
          anchor: {
            x: 0.5,
            y: 0.5,
          },
        },
      });
    }
    const yes = ui.addNode('text', {
      text: '确定',
      style: textStyle,
      data: {
        x: core.ui.HPIXEL - 38,
        y: rect.bottom - 35,
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      event: {
        pointertap() {
          pixi.ui.resizeTo(border, this);
          console.log('you Click ok');
        },
      },
    });
    window.yes = yes;
    const no = ui.addNode('text', {
      text: '取消',
      style: textStyle,
      data: {
        x: core.ui.HPIXEL + 38,
        y: rect.bottom - 35,
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      event: {
        pointertap() {
          pixi.ui.resizeTo(border, this);
          console.log('you Click no');
        },
      },
    });
    const select = core.status.event.selection ? yes : no;
    this.resizeTo(border, select);
    // var strokeLeft = core.ui.HPIXEL + (76*core.status.event.selection-38) - parseInt(len/2) - 5;

    // if (isWindowSkin)
    //     this.drawWindowSelector(core.status.textAttribute.background, strokeLeft, rect.bottom-35-20, len+10, 28);
    // else
    //     core.strokeRect('ui', strokeLeft, rect.bottom-35-20, len+10, 28, "#FFD700", 2);
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
   * 按列切割
   */
  splitTextureByCol(texture, col, row) {
    if (!(texture instanceof Texture)) return null;
    const { orig: { width: w, height: h } } = texture;
    return this._splitTexture(w, col,
      (dx, x) => this._splitTexture(h, row,
        (dy, y) => this.split(texture, x * dx, y * dy, dx, dy)));
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
    if (!(texture instanceof Texture)) return null;
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
  getHeroTexture(fullName, direction = 'down') {
    const [name, ext] = utils.parseName(fullName);
    const hero = this.getTexture(name);
    // console.log(hero);
    if (hero instanceof Texture) {
      const temp = this.splitTexture(hero, ['down', 'left', 'right', 'up'], 4);
      pixi.textures[name] = temp;
      return temp[direction][0];
    }
    return hero[direction][0];
  },
  setHero(id, scene = pixi.game.getScene('event')) {
    const { hero } = pixi;
    if (hero.sprite) hero.sprite.remove();
    const _texture = this.getTexture(id);
    if (_texture instanceof Texture) {
      const temp = this.splitTexture(_texture, ['down', 'left', 'right', 'up'], 4);
      pixi.textures[id] = temp;
      return this.setHero(id);
    }
    hero.sprite = scene.addNode('hero', {
      texture: _texture,
      data: {
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
    });
    if (hero.speed) hero.sprite.animationSpeed = hero.speed;
    core.drawHero();
    return null;
  },
  getNode(texture, dx, dy, dw, dh) {
    const node = nodes.getNode('sprite', {
      texture: this.split(texture, dx, dy, dw, dh),
      disable: true,
    });
    node.destroyOptions = { texture: true };
    return node;
  },
  drawImage(scene, texture, dx, dy, dw, dh, x, y, w, h) {
    if (typeof texture === 'string') texture = this.getTexture(texture);
    let node;
    if (arguments.length > 6) {
      node = this.getNode(texture, dx, dy, dw, dh);
    } else {
      node = nodes.getNode('sprite', {
        texture,
        disable: true,
      });
      x = dx;
      y = dy;
      w = dw;
      h = dh;
    }
    scene.addNode(node);
    node.position.set(x, y);
    if (w && node.width !== w) node.width = w;
    if (h && node.height !== h) node.height = h;
    return node;
  },
  fillRect(scene, x, y, width, height, {
    radius = 0,
    fillAlpha = 1,
    fillColor = 0x0,
  } = {}) {
    return scene.addNode('graphics', {
      init() {
        if (fillColor && !Number.isInteger(fillColor)) fillColor = utils.getColor(fillColor);
        this.beginFill(fillColor, fillAlpha);
        if (radius) {
          if (!Number.isInteger(radius)) radius *= Math.min(width, height);
          this.drawRoundedRect(0, 0, width, height, radius);
        } else this.drawRect(0, 0, width, height);
        this.endFill();
        this.position.set(x, y);
        return true;
      },
    });
  },
  drawText(scene, text, style, x, y, options = {}) {
    const newStyle = this.getTextStyle(style);
    const node = scene.addNode('text', {
      text,
      style: newStyle,
      disable: true,
    });
    const { anchor } = options;
    if (anchor) {
      node.anchor.set(anchor.x, anchor.y);
    }
    node.position.set(x, y);
    return node;
  },
  drawRoute(steps) {
    console.log(steps);
  },
  drawTip() {

  },
  setMask(scene, style, zone = scene.container.zone) {
    const graphics = new Graphics();
    graphics.beginFill(utils.getColor(style));
    graphics.drawRect(...zone);
    graphics.endFill();
    scene.container.mask = graphics;
  },
  drawAnimate(animate, scene, x, y, options) {
    if (!(animate instanceof Object)) {
      animate = core.material.animates[animate];
    }
    if (!(scene instanceof Object)) {
      scene = pixi.scenes.getScene(scene);
    }
    if (options.async) {
      this.setAsyncAnimate((cb) => {
        animate.play(scene, x, y, {
          ...options,
          onComplete() {
            if (options.onComplete instanceof Function) options.onComplete.apply(this);
            cb();
          },
        });
      });
      return;
    }
    animate.play(scene, x, y, options);
  },
  setAsyncAnimate(func) {
    const id = utils.getId();
    core.animateFrame.asyncId[id] = true;
    func(() => {
      delete core.animateFrame.asyncId[id];
    });
  },
  getHeroDrawObj() {
    const heroIconArr = core.material.icons.hero;
    const drawObjs = [];
    const { hero } = core.status;
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
    if (!zone) {
      if (!node.parent) return;
      zone = zone || node.parent.zone;
    }
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
  fitZone(node, zone, type = 'center', options = {}) {
    let [x, y, w, h] = zone;
    if (options.padding) {
      const [top, right, bottom, left] = this.getPadding(options.padding);
      x += left;
      y += top;
      w -= left + right;
      h -= top + bottom;
    }
    let ratio = Math.min(h / node.height, w / node.width);
    if (options.maxRatio)ratio = Math.min(ratio, options.maxRatio);
    if (options.minRatio) {
      ratio = Math.max(ratio, options.minRatio);
    }
    node.scale.set(ratio, ratio);
    if (type instanceof Array) {
      return this.setPosition(node, [x, y, w, h], ...type);
    }
    const value = {
      center: [0.5, 0.5],
      left: [0, 0.5],
      right: [1, 0.5],
      top: [0.5, 0],
      bottom: [0.5, 1],
    };
    const arr = value[type];
    if (!arr) throw new Error('应填数组或center、left、right、top、bottom');
    return this.setPosition(node, [x, y, w, h], ...arr);
  },
  setPosition(node, zone, anchorX, anchorY, dw = anchorX, dh = anchorY) {
    const [x, y, w, h] = zone;
    node.anchor.set(anchorX, anchorY);
    node.position.set(x + w * dw, y + h * dh);
  },
  center(node, x, y, width, height, options = {}) {
    const [top, right, bottom, left] = this.getPadding(options.padding);
    x += left, y += top, width = width - left - right, height = height - top - bottom;
    let ratio = Math.min(height / node.height, width / node.width);
    if (options.maxRatio)ratio = Math.min(ratio, options.maxRatio);
    if (options.minRatio) {
      ratio = Math.max(ratio, options.minRatio);
    }
    node.scale.set(ratio, ratio);
    if (node.anchor) {
      node.anchor.set(0.5, 0.5);
      node.position.set(x + width / 2, y + height / 2);
      return;
    }
    node.x = x + width / 2 - node.width / 2;
    node.y = y + height / 2 - node.height / 2;
  },
};
export default ui;
