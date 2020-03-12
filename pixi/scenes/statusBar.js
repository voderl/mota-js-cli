import { TextStyle } from 'pixi.js-legacy';
import { scenes } from '../scenes';
import ui from '../ui';
import resize from '../resize';

// 直接生成  node    scene 对所有node都进行的处理
const statusBar = scenes.getScene('statusBar');
// 记录一些数据的sprite，便于在数据改变时更新
const nodes = {};
const shouldDisplay = (id) => {
  switch (id) {
    case 'floor': return core.flags.enableFloor;
    case 'name': return core.flags.enableName;
    case 'lv': return core.flags.enableLv;
    case 'hpmax': return core.flags.enableHPMax;
    case 'mana': return core.flags.enableMana;
    case 'mdef': return core.flags.enableMDef;
    case 'money': return core.flags.enableMoney;
    case 'experience': return core.flags.enableExperience && !core.flags.levelUpLeftMode;
    case 'up': return core.flags.enableLevelUp;
    case 'skill': return core.flags.enableSkill;
    case 'key': return core.flags.enableKeys;
    case 'pzf': return core.flags.enablePZF;
    case 'debuff': return core.flags.enableDebuff;
    default: return true;
  }
};
const getDisplayList = () => {
  const all = [];
  const test = ['floor', 'name', 'lv', 'hpmax', 'hp', 'atk', 'def', 'mana', 'mdef', 'money',
    'experience', 'up', 'skill', 'key', 'pzf', 'debuff'];
  test.forEach((id) => {
    if (shouldDisplay(id)) all.push(id);
  });
  return all;
};
const config = {
  col: 3,
};
// 在显示开始时，此时还没有生成节点
// hero发出信号  装备改变  钥匙改变
const fontStyle = ui.TextStyle.statusBar;

statusBar.on('show', () => {
  const data = getDisplayList();
  const w = resize.style.statusBar[2];
  const h = resize.style.statusBar[3];
  const col = resize.style.isVertical ? config.col : 1;
  const row = Math.ceil(data.length / col);
  const style = {};
  style.w = w;
  style.h = h;
  style.row = row;
  style.col = col;
  style.lineHeight = style.isVertical ? h / row : 36;
  style.barWidth = w / col;
  const { icons } = core.statusBar;
  let x = 0; let y = 0;
  const color = ['rgb(255,204,170)', 'rgb(170,170,221)', 'rgb(255,136,136)'];
  data.forEach((id, index) => {
    if (id === 'key') {
      ['yellowKey', 'blueKey', 'redKey'].forEach((n, i) => {
        const t = statusBar.addNode('sprite', {
          texture: ui.getTexture(n),
          start() {
            ui.fitZone(this, [x, y, style.barWidth / 3, style.lineHeight], 'left', {
              padding: [5, 0],
              maxRatio: 1,
            });
          },
        });
        nodes[n] = statusBar.addNode('text', {
          text: '0',
          style: ui.getTextStyle(fontStyle, {
            fill: color[i],
            stroke: 'black',
            fontWeight: 'bold',
          }),
          start() {
            ui.center(this, x + t.width + 3 , y, 0, style.lineHeight, {
              padding: [10, 0],
              minRatio: 0.8,
              maxRatio: 1,
            });
          },
        });
        x += style.barWidth / 3;
      });
      return;
    }
    statusBar.addNode('sprite', {
      texture: icons[id],
      start() {
        ui.center(this, x, y, style.lineHeight, style.lineHeight, {
          padding: [5, 0],
          minRatio: 0.5,
          maxRatio: 1,
        });
      },
    });
    x += style.lineHeight;
    nodes[id] = statusBar.addNode('text', {
      id,
      text: '0',
      style: fontStyle,
      start() {
        ui.center(this, x, y, style.barWidth - style.lineHeight, style.lineHeight,
          {
            padding: [5, 0],
            minRatio: 0.6,
            maxRatio: 1,
          });
      },
    });
    x += style.barWidth - style.lineHeight;
    if (x >= style.w) {
      x = 0;
      y += style.lineHeight;
    }
  });
  // statusBar.addNode('border');
  // // 重新定型之后需要重新确定数据的值
  // // core.status.hero.trigger();
  // pixi.Listener.trigger(core.status.hero);
});
const flash = (type, newValue) => {
  const node = nodes[type];
  if (!node) return;
  const oldValue = node.text || '0';
  const newStr = newValue.toString();
  if (oldValue === newStr) return;
  node.text = newStr;
  data[type] = newStr;
};
statusBar.update = function () {
  const { flags, getStatus, status: { floorId, hero } } = core;
  // 检查等级
  core.events.checkLvUp();

  // 检查HP上限
  if (flags.enableHPMax) {
    flash('hp', Math.min(getStatus('hpmax'), getStatus('hp')));
  }

  // 设置楼层名
  if (floorId) {
    flash('floor', core.status.maps[floorId].name);
  }

  // 设置勇士名字和图标
  flash('name', getStatus('name'));
  // 设置等级名称
  flash('lv', core.getLvName());

  // 设置生命上限、生命值、攻防魔防金币和经验值
  const statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'experience'];
  statusList.forEach((item) => {
    // 向下取整
    hero[item] = Math.floor(hero[item]);
    // 大数据格式化
    flash(item, core.getRealStatus(item));
  });

  // 设置魔力值
  if (flags.enableMana) {
    // status:manamax 只有在非负时才生效。
    if (hero.manamax != null && core.getRealStatus('manamax') >= 0) {
      hero.mana = Math.min(hero.mana, core.getRealStatus('manamax'));
      flash('mana', `${hero.mana}/${core.getRealStatus('manamax')}`);
    } else {
      flash('mana', hero.mana);
    }
  }
  // 设置技能栏
  if (flags.enableSkill) {
    // 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
    flash('skill', core.getFlag('skillName', '无'));
  }

  // 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
  // if (core.hasFlag('halfAtk')) flash('atk', core.statusBar.atk.innerText + "+0.5");

  // 如果是自定义添加的状态栏，也需要在这里进行设置显示的数值

  // 进阶
  if (flags.enableLevelUp && hero.lv < core.firstData.levelUp.length) {
    const need = core.calValue(core.firstData.levelUp[hero.lv].need);
    if (flags.levelUpLeftMode) flash('up', core.formatBigNumber(need - getStatus('experience')) || '');
    else flash('up', core.formatBigNumber(need) || '');
  } else flash('up', '');

  // 钥匙
  const keys = ['yellowKey', 'blueKey', 'redKey'];
  keys.forEach((key) => {
    flash(key, core.setTwoDigits(core.itemCount(key)));
  });
  // 毒衰咒
  if (flags.enableDebuff) {
    flash('poison', core.hasFlag('poison') ? '毒' : '');
    flash('weak', core.hasFlag('weak') ? '衰' : '');
    flash('curse', core.hasFlag('curse') ? '咒' : '');
  }
  // 破炸飞
  if (flags.enablePZF) {
    flash('pickaxe', `破${core.itemCount('pickaxe')}`);
    flash('bomb', `炸${core.itemCount('bomb')}`);
    flash('fly', `飞${core.itemCount('centerFly')}`);
  }
};

// return value
// const defaultFormat = n => n;
// const numberFormat = n => core.utils.formatBigNumber(Math.floor(n));
// function listen(obj, id, format, useTween = false) {
//   if (data[id]) {
//     if (typeof obj[id] === 'number') {
//       format = format || numberFormat;
//       pixi.Listener.listen(obj, id, (v, o) => {
//         const buff = core.getBuff(id);
//         if (v != o && useTween) {
//           o = o || 0;
//           pixi.utils.tween(o, v, 500, (n) => {
//             data[id].text = format(n * buff);
//           });
//         } else {
//           data[id].text = format(v * buff);
//         }
//       });
//     } else {
//       format = format || defaultFormat;
//       pixi.Listener.listen(obj, id, (v, o) => {
//         data[id].text = format(v);
//       });
//     }
//   } else {
//     console.error(`${id}不存在`);
//   }
// }
// // 维护一系列数值
// statusBar.reset = function (hero) {
//   // 重启游戏之后 需要重新监听数据的变化
//   hero = hero || core.status.hero;
//   const listenHero = (name, obj) => listen(hero, name, obj, true);
//   listenHero('name');
//   const statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'experience'];
//   statusList.forEach((item) => {
//     listenHero(item);
//   });
//   // 设置魔力值
//   if (core.flags.enableMana) {
//     // status:manamax 只有在非负时才生效。
//     if (core.status.hero.manamax != null && core.getRealStatus('manamax') >= 0) {
//       listenHero('mana', (v) => `${v}/${core.getRealStatus('manamax')}`);
//       listenHero('manamax', v => `${core.status.hero.mana}/${v}`);
//     } else {
//       listenHero('mana');
//     }
//   }
//   // 监听 钥匙
//   const keyFormat = core.utils.setTwoDigits;
//   listen(hero.items.keys, 'yellowKey', keyFormat);
//   listen(hero.items.keys, 'blueKey', keyFormat);
//   listen(hero.items.keys, 'redKey', keyFormat);
//   listen(hero.items.tools, 'greenKey', keyFormat);
// };


// // 更新属性的值   而不是位置
// statusBar.update = function () {
//   // 增加各自更新的方法   当满足条件时 某个东西更新，
//   // 比如转换楼层   楼层id更新

//   // 一个Observer 检测hero的属性是否变化  
//   // 比如增加一个对hero.x hero.y 的Observer 当坐标变化时更新某个怪物的伤害


//   // //只更新显示的属性
//   // if(core.status.floorId){
//   //   set('floor',core.status.maps[core.status.floorId].name);
//   // };
//   // set('name',core.getStatus('name'))
//   // set('lv',core.getLvName());

// };
