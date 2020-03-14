let id = 0;

const utils = {
  scan: {
    up: { x: 0, y: -1 },
    left: { x: -1, y: 0 },
    down: { x: 0, y: 1 },
    right: { x: 1, y: 0 },
  },
  clamp(x, a, b) {
    const min = Math.min(a, b); const max = Math.max(a, b);
    return Math.min(Math.max(x || 0, min), max);
  },
  getId() {
    id += 1;
    return id;
  },
  /**
   * deep clone a Object
   * @param {Object} obj  
   */
  cloneTo(to, from) {
    for (const key in from) {
      to[key] = this.clone(from[key]);
    }
  },
  cloneWith(obj, Cloner) {
    if (!(obj instanceof Object)) return obj;
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      const val = obj[key];
      const result = Cloner(val);
      if (result) {
        newObj[key] = result;
      } else {
        newObj[key] = val instanceof Object ? this.cloneWith(val, Cloner) : val;
      }
    }
    return newObj;
  },
  clone(obj) {
    if (!(obj instanceof Object)) return obj;
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      const val = obj[key];
      newObj[key] = val instanceof Object ? this.clone(val) : val;
    }
    return newObj;
  },
  isInterger(num) {
    return typeof num === 'number' && (num | 1) === 0;
  },
  tween(from, to, time, onUpdate, callback) {
    const changing = new TWEEN.Tween({
      n: from,
    }).to({ n: to }, time);
    if (onUpdate)changing.onUpdate((obj) => { onUpdate(obj.n); });
    if (callback)changing.onComplete(callback);
    changing.start();
  },
  getColor(str) {
    if (!str) return 0x0;
    if (arguments.length === 3) {
      return (arguments[0] << 16) + (arguments[1] << 8) + arguments[2];
    }
    if (Number.isInteger(str)) return str;
    if (str.startsWith('rgb')) {
      const rgb = str.split(',');
      const r = parseInt(rgb[0].split('(')[1]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2].split(')')[0]);
      console.log(r, g, b);
      return (r << 16) + (g << 8) + b;
    }
    if (str.startsWith('#')) {
      return parseInt(str.slice(1), 16);
    }
    return null;
  },
  debounce(fn, delay) {
    // 定时器，用来 setTimeout
    let timer; const context = this; const args = arguments;

    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {
      // 保存函数调用时的上下文和参数，传递给 fn
      // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
      clearTimeout(timer);

      // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
      // 再过 delay 毫秒就执行 fn
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  },
  parseName(name) {
    const index = name.lastIndexOf('.');
    if (index >= 0) {
      return [name.slice(0, index), name.slice(index + 1)];
    }
    return [name];
  },
  drawRoundRectPath(cxt, width, height, radius) {
    cxt.beginPath(0);
    // 从右下角顺时针绘制，弧度从0到1/2PI  
    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
    // 矩形下边线  
    cxt.lineTo(radius, height);
    // 左下角圆弧，弧度从1/2PI到PI  
    cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
    // 矩形左边线  
    cxt.lineTo(0, radius);
    // 左上角圆弧，弧度从PI到3/2PI  
    cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
    // 上边线  
    cxt.lineTo(width - radius, 0);
    // 右上角圆弧  
    cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
    // 右边线  
    cxt.lineTo(width, height - radius);
    cxt.closePath();
  },
  strokeRoundRectfunction(cxt, x, y, width, height, radius, lineWidth, strokeColor) {
    // 圆的直径必然要小于矩形的宽高          
    if (2 * radius > width || 2 * radius > height) {
      return false;
    }

    cxt.save();
    cxt.translate(x, y);
    // 绘制圆角矩形的各个边  
    this.drawRoundRectPath(cxt, width, height, radius);
    cxt.lineWidth = lineWidth || 2; // 若是给定了值就用给定的值否则给予默认值2  
    cxt.strokeStyle = strokeColor || '#000';
    cxt.stroke();
    cxt.restore();
    return true;
  },
  fillRoundRect(cxt, x, y, width, height, radius, /* optional */ fillColor) {
    // 圆的直径必然要小于矩形的宽高          
    if (2 * radius > width || 2 * radius > height) {
      return false;
    }
    cxt.save();
    cxt.translate(x, y);
    // 绘制圆角矩形的各个边  
    this.drawRoundRectPath(cxt, width, height, radius);
    cxt.fillStyle = fillColor || '#000'; // 若是给定了值就用给定的值否则给予默认值  
    cxt.fill();
    cxt.restore();
    return true;
  },
};
export default utils;
