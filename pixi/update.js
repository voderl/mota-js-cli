import event from './event';

event.setFresh('updateStatusBar', () => {
  // 更新状态栏
  console.log('update');
  if (core.status.floorId === null) return;
  const { flags, getStatus, status: { floorId, hero } } = core;
  // 检查等级
  core.events.checkLvUp();

  // 检查HP上限
  if (flags.enableHPMax) {
    core.setStatus('hp', Math.min(getStatus('hpmax'), getStatus('hp')));
  }

  // 设置楼层名
  if (floorId) {
    core.setStatusBarInnerHTML('floor', core.status.maps[floorId].name);
  }

  // 设置勇士名字和图标
  core.setStatusBarInnerHTML('name', getStatus('name'));
  // 设置等级名称
  core.setStatusBarInnerHTML('lv', core.getLvName());

  // 设置生命上限、生命值、攻防魔防金币和经验值
  const statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'experience'];
  statusList.forEach((item) => {
    // 向下取整
    hero[item] = Math.floor(hero[item]);
    // 大数据格式化
    core.setStatusBarInnerHTML(item, core.getRealStatus(item));
  });

  // 设置魔力值
  if (flags.enableMana) {
    // status:manamax 只有在非负时才生效。
    if (hero.manamax != null && core.getRealStatus('manamax') >= 0) {
      hero.mana = Math.min(hero.mana, core.getRealStatus('manamax'));
      core.setStatusBarInnerHTML('mana', `${hero.mana}/${core.getRealStatus('manamax')}`);
    } else {
      core.setStatusBarInnerHTML('mana', hero.mana);
    }
  }
  // 设置技能栏
  if (flags.enableSkill) {
    // 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
    core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));
  }

  // 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
  // if (core.hasFlag('halfAtk')) core.setStatusBarInnerHTML('atk', core.statusBar.atk.innerText + "+0.5");

  // 如果是自定义添加的状态栏，也需要在这里进行设置显示的数值

  // 进阶
  if (flags.enableLevelUp && hero.lv < core.firstData.levelUp.length) {
    const need = core.calValue(core.firstData.levelUp[hero.lv].need);
    if (flags.levelUpLeftMode) core.setStatusBarInnerHTML('up', core.formatBigNumber(need - getStatus('experience')) || '');
    else core.setStatusBarInnerHTML('up', core.formatBigNumber(need) || '');
  } else core.setStatusBarInnerHTML('up', '');

  // 钥匙
  const keys = ['yellowKey', 'blueKey', 'redKey'];
  keys.forEach((key) => {
    core.setStatusBarInnerHTML(key, core.setTwoDigits(core.itemCount(key)));
  });
  // 毒衰咒
  if (flags.enableDebuff) {
    core.setStatusBarInnerHTML('poison', core.hasFlag('poison') ? '毒' : '');
    core.setStatusBarInnerHTML('weak', core.hasFlag('weak') ? '衰' : '');
    core.setStatusBarInnerHTML('curse', core.hasFlag('curse') ? '咒' : '');
  }
  // 破炸飞
  if (flags.enablePZF) {
    core.setStatusBarInnerHTML('pickaxe', `破${core.itemCount('pickaxe')}`);
    core.setStatusBarInnerHTML('bomb', `炸${core.itemCount('bomb')}`);
    core.setStatusBarInnerHTML('fly', `飞${core.itemCount('centerFly')}`);
  }

  // 难度
  core.statusBar.hard.innerText = core.status.hard;
  // 自定义状态栏绘制
  core.drawStatusBar();

  // 更新阻激夹域的伤害值
  core.updateCheckBlock();
  // 更新全地图显伤
  core.updateDamage();
  const damage = pixi.game.getScene('damage');
  if (damage.active) {
    pixi.game.getScene('damage').emit('flash');
  }
});
