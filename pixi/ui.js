const ui = {
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
