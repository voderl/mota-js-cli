import event from '../event';
import Autotile from './Autotile';
import BaseBlock from './BaseBlock';
import loader from '../TexLoader';
import utils from '../utils';

const { textures } = loader;
const idToNumber = textures._info;
const numberToInfo = textures._maps;

event.setFresh('bg', (floorId = core.status.floorId) => core.maps._getBgFgMapArray('bg', floorId, true));
event.setFresh('fg', (floorId = core.status.floorId) => core.maps._getBgFgMapArray('fg', floorId, true));

event.setFresh('event', (floorId = core.status.floorId) => {
  const { width, height } = core.floors[floorId];
  const { blocks } = core.status.maps[floorId];
  return core.maps._getMapArrayFromBlocks(blocks, width, height);
});


// function getNumberById(id) {
//   const t = idToNumber[id];
//   if (t instanceof Object) return t.num;
//   console.error('不存在此id的图块');
//   return null;
// }
function getBlock(id, x, y, _addInfo, eventFloor) {
  let num;
  if (Number.isInteger(id)) num = id;
  else {
    if (!id) return this;
    if (id.endsWith(':f')) this.disable = true;
    else if (id.endsWith(':t')) this.disable = false;
    num = parseInt(id, 10);
  }
  const info = numberToInfo[num];

  const _tempInfo = info instanceof Object ? info : {
    cls: 'terrains',
    id: 'none',
    noPass: false,
  };
  _tempInfo.number = num;
  const block = _tempInfo.cls === 'autotile'
    ? new Autotile(_tempInfo, x, y, _addInfo, eventFloor)
    : new BaseBlock(_tempInfo, x, y, _addInfo, eventFloor);
  return block;
}

function getInfo(id) {
  return getBlock(id).getInfo();
}

export {
  getBlock,
  getInfo,
  BaseBlock,
};
