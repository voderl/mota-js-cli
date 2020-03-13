import event from '../event';
import Autotile from './Autotile';
import BaseBlock from './BaseBlock';
import loader from '../TexLoader';
import utils from '../utils';

const { textures } = loader;
const idToNumber = textures._info;
const numberToInfo = textures._maps;

event.setFresh('bg', (floorId = core.status.floorId) => {
  console.log(floorId);
  return core.maps._getBgFgMapArray('bg', floorId, true);
});
event.setFresh('fg', (floorId = core.status.floorId) => core.maps._getBgFgMapArray('fg', floorId, true));

event.setFresh('event', (floorId = core.status.floorId, blocks) => {
  blocks = blocks || core.status.maps[floorId].blocks;
  const { width, height } = core.floors[floorId];
  return core.maps._getMapArrayFromBlocks(blocks, width, height);
});


// function getNumberById(id) {
//   const t = idToNumber[id];
//   if (t instanceof Object) return t.num;
//   console.error('不存在此id的图块');
//   return null;
// }
const Block = {};
Block.get = function (id, x, y, _addInfo, eventFloor) {
  let num;
  let disable = null;
  if (Number.isInteger(id)) num = id;
  else {
    if (!id) return null;
    if (id.endsWith(':f')) disable = true;
    else if (id.endsWith(':t')) disable = false;
    num = parseInt(id, 10);
    if (Number.isNaN(num)) num = (idToNumber[id] || {}).num;
  }
  const info = numberToInfo[num];
  /** 这个地方因为没有浅复制导致出现bug，找了一个半小时，心态爆炸 */
  const _tempInfo = info instanceof Object ? { ...info } : {
    cls: 'terrains',
    id: 'none',
    noPass: false,
  };
  _tempInfo.number = num;
  const block = _tempInfo.cls === 'autotile'
    ? new Autotile(_tempInfo, x, y, _addInfo, eventFloor)
    : new BaseBlock(_tempInfo, x, y, _addInfo, eventFloor);
  block._disable = disable;
  return block;
};

Block.getInfo = function (id) {
  if (id instanceof BaseBlock) return id.getInfo();
  const block = this.get(id);
  if (!block) return {};
  return block.getInfo();
};

Block.isBlock = (block) => {
  return block instanceof BaseBlock;
};

export default Block;
