/**
 * 一个Cache
 */
class Cache {
  constructor() {
    this._cache = {};
  }

  setCache(id, func) {
    if (!(func instanceof Function)) return null;
    const all = this._cache;
    all[id] = { func };
    return all[id];
  }

  freshCache(id, func) {
    const all = this._cache;
    const data = all[id];
    if (!data) return null;
    data.value = data.func();
    return data.value;
  }

  getCache(id) {
    const all = this._cache;
    const data = all[id];
    if (!data) return null;
    if (!data.value) data.value = data.func();
    return data.value;
  }
}

export default Cache;
