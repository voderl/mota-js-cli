const utils = {
  cloneObj(obj) {
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      const val = obj[key];
      newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
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
    return false;
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
};
export default utils;
