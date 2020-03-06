import BaseBlock from './BaseBlock';
import event from '../event';
import ui from '../ui';

let tempData = [];
const draw = {
  _drawAutotile(scene, mapArr, block, size = 32, left = 0, top = 0) {
    const { x: xx, y: yy, texture: autotile } = block;
    const status = 0;
    const done = {};
    const isGrass = (x, y) => {
      if (this._drawAutotile_getAutotileAroundId(mapArr[yy][xx], x, y, mapArr)) {
        return 1;
      }
      return 0;
    };
    const iG = [];
    [-1, 0, 1].forEach((_x) => {
      iG[_x] = [];
      [-1, 0, 1].forEach((_y) => {
        iG[_x][_y] = isGrass(xx + _x, yy + _y);
      });
    });
    if (iG[-1][-1] + iG[0][-1] + iG[0][0] + iG[-1][0] == 3 && !iG[-1][-1]) {
      this._drawAutotile_render(scene, xx * size + left, yy * size + top, size, autotile, status, 16);
      done[0] = true;
    }
    if (iG[0][-1] + iG[1][-1] + iG[1][0] + iG[0][0] == 3 && !iG[1][-1]) {
      this._drawAutotile_render(scene, xx * size + left + size / 2, yy * size + top, size, autotile, status, 17);
      done[1] = true;
    }
    if (iG[0][0] + iG[1][0] + iG[1][1] + iG[0][1] == 3 && !iG[1][1]) {
      this._drawAutotile_render(scene, xx * size + left + size / 2, yy * size + top + size / 2, size, autotile, status, 18);
      done[3] = true;
    }
    if (iG[0 - 1][0] + iG[0][0] + iG[0][1] + iG[-1][1] == 3 && !iG[-1][1]) {
      this._drawAutotile_render(scene, xx * size + left, yy * size + top + size / 2, size, autotile, status, 19);
      done[2] = true;
    }
    const _id = iG[0][-1] + 2 * iG[-1][0] + 4 * iG[0][1] + 8 * iG[1][0];
    this._drawAutotile_render(scene, xx * size, yy * size, size, autotile, status, _id, done);
  },
  _drawAutotile_getAutotileAroundId(currId, x, y, mapArr) {
    if (x < 0 || y < 0 || x >= mapArr[0].length || y >= mapArr.length) return 1;
    return core.material.autotileEdges[currId].indexOf(mapArr[y][x]) >= 0;
  },
  _drawAutotile_render(scene, x, y, size, autotile, status, index, done) {
    const indexData = [[[96 * status, 0, 32, 32, x, y, size, size]],
      [[96 * status, 3 * 32, 16, 32, x, y, size / 2, size], [96 * status + 2 * 32 + 16, 3 * 32, 16, 32, x + size / 2, y, size / 2, size]],
      [[96 * status + 2 * 32, 32, 32, 16, x, y, size, size / 2], [96 * status + 2 * 32, 3 * 32 + 16, 32, 16, x, y + size / 2, size, size / 2]],
      [[96 * status + 2 * 32, 3 * 32, 32, 32, x, y, size, size]],
      [[96 * status, 32, 16, 32, x, y, size / 2, size], [96 * status + 2 * 32 + 16, 32, 16, 32, x + size / 2, y, size / 2, size]],
      [[96 * status, 2 * 32, 16, 32, x, y, size / 2, size], [96 * status + 2 * 32 + 16, 2 * 32, 16, 32, x + size / 2, y, size / 2, size]],
      [[96 * status + 2 * 32, 32, 32, 32, x, y, size, size]],
      [[96 * status + 2 * 32, 2 * 32, 32, 32, x, y, size, size]],
      [[96 * status, 32, 32, 16, x, y, size, size / 2], [96 * status, 3 * 32 + 16, 32, 16, x, y + size / 2, size, size / 2]],
      [[96 * status, 3 * 32, 32, 32, x, y, size, size]],
      [[96 * status + 32, 32, 32, 16, x, y, size, size / 2], [96 * status + 32, 3 * 32 + 16, 32, 16, x, y + size / 2, size, size / 2]],
      [[96 * status + 32, 3 * 32, 32, 32, x, y, size, size]],
      [[96 * status, 32, 32, 32, x, y, size, size]],
      [[96 * status, 2 * 32, 32, 32, x, y, size, size]],
      [[96 * status + 32, 32, 32, 32, x, y, size, size]],
      [[96 * status + 32, 2 * 32, 32, 32, x, y, size, size]],
      [[96 * status + 2 * 32, 0, 16, 16, x, y, size / 2, size / 2]],
      [[96 * status + 2 * 32 + 16, 0, 16, 16, x, y, size / 2, size / 2]],
      [[96 * status + 2 * 32 + 16, 16, 16, 16, x, y, size / 2, size / 2]],
      [[96 * status + 2 * 32, 16, 16, 16, x, y, size / 2, size / 2]],
    ];
    const data = indexData[index];
    if (index >= 16) { // 拐角直接绘制
      tempData.push(
        ui.drawImage(scene, autotile,
          data[0][0], data[0][1], data[0][2], data[0][3],
          data[0][4], data[0][5], size / 2, size / 2),
      );
    } else { // 非拐角要根据是否已经绘制进行切分后绘制
      this._drawAutotile_renderCut(scene, autotile, x, y, size, data, done);
    }
  },
  _drawAutotile_renderCut(scene, autotile, x, y, size, data, done) {
    const drawData = [];
    done = done || {};
    if (data.length == 2) {
      let idx = 0;
      let cut = 0;
      for (var i in data) {
        if (data[i][2] % 32) { // 是否纵切
          cut = 0;
        } else if (data[i][3] % 32) { // 是否横切
          cut = 1;
        }
        if (data[i][0] % 32 || data[i][1] % 32) { // right down
          idx = 1;
        } else { // left top
          idx = 0;
        }
        if (cut) {
          idx *= 2;
          if (!done[idx])drawData[idx] = [data[i][0], data[i][1]];
          if (!done[idx + 1])drawData[idx + 1] = [parseInt(data[i][0]) + 16, data[i][1]];
        } else {
          if (!done[idx])drawData[idx] = [data[i][0], data[i][1]];
          if (!done[idx + 2])drawData[idx + 2] = [data[i][0], parseInt(data[i][1]) + 16];
        }
      }
    } else {
      if (!done[0])drawData[0] = [data[0][0], data[0][1]];
      if (!done[1])drawData[1] = [data[0][0] + 16, data[0][1]];
      if (!done[2])drawData[2] = [data[0][0], data[0][1] + 16];
      if (!done[3])drawData[3] = [data[0][0] + 16, data[0][1] + 16];
    }
    for (var i = 0; i < 4; i++) {
      const dt = drawData[i]; if (!dt) continue;
      tempData.push(
        ui.drawImage(scene, autotile, dt[0], dt[1], 16, 16, x + (i % 2) * size / 2, y + parseInt(i / 2) * size / 2, size / 2, size / 2),
      );
    }
  },
};

class Autotile extends BaseBlock {
  drawTo(scene) {
    tempData = [];
    const arr = event.fresh(scene.id);
    draw._drawAutotile(scene, arr, this);
    return tempData;
  }
}
export default Autotile;
