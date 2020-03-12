import { TextStyle } from 'pixi.js-legacy';
import { scenes } from '../scenes';
import ui from '../ui';
import resize from '../resize';


const toolBar = scenes.getScene('toolBar');
toolBar.useButton = false;
const style = {
  width: 40,
  fontStyle: ui.TextStyle.toolBar,
};
const events = {
  book(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.triggerReplay();
      return;
    }

    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.setPaintMode('paint');
      return;
    }

    if (main.core.isPlaying()) main.core.openBook(true);
  },
  fly(e) {
    e.stopPropagation();

    // 播放录像时
    if (core.isReplaying()) {
      core.stopReplay();
      return;
    }

    // 绘图模式
    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.setPaintMode('erase');
      return;
    }

    if (main.core.isPlaying()) {
      if (!main.core.flags.equipboxButton) {
        main.core.useFly(true);
      } else {
        main.core.openEquipbox(true);
      }
    }
  },
  // //// 点击状态栏中的工具箱时 //////

  toolbox(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.rewindReplay();
      return;
    }

    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.clearPaint();
      return;
    }

    if (main.core.isPlaying()) {
      main.core.openToolbox(core.status.event.id != 'equipbox');
    }
  },
  // //// 双击状态栏中的工具箱时 //////
  // toolbox(e) {
  //   e.stopPropagation();

  //   if (core.isReplaying()) {
  //     return;
  //   }

  //   if (main.core.isPlaying()) main.core.openEquipbox(true);
  // },
  // //// 点击状态栏中的虚拟键盘时 //////

  keyboard(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.bookReplay();
      return;
    }

    if (main.core.isPlaying()) main.core.openKeyBoard(true);
  },
  // //// 点击状态栏中的快捷商店键盘时 //////

  shop(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.viewMapReplay();
      return;
    }

    if (main.core.isPlaying()) main.core.openQuickShop(true);
  },
  // //// 点击金币时也可以开启虚拟键盘 //////

  money(e) {
    e.stopPropagation();

    if (main.core.isPlaying()) main.core.openQuickShop(true);
  },
  // //// 点击状态栏中的存档按钮时 //////

  save(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.speedDownReplay();
      return;
    }

    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.savePaint();
      return;
    }

    if (main.core.isPlaying()) main.core.save(true);
  },
  // //// 点击状态栏中的读档按钮时 //////

  load(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.speedUpReplay();
      return;
    }

    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.loadPaint();
      return;
    }

    if (main.core.isPlaying()) main.core.load(true);
  },
  // //// 点击状态栏中的系统菜单时 //////

  settings(e) {
    e.stopPropagation();

    if (core.isReplaying()) {
      core.saveReplay();
      return;
    }

    if (main.core.isPlaying() && (core.status.event || {}).id == 'paint') {
      core.actions.exitPaint();
      return;
    }

    if (main.core.isPlaying()) main.core.openSettings(true);
  },
  // //// 点击工具栏时 //////
  hard() {
    if (core.isReplaying()) return;
    toolBar.useButton = !toolBar.useButton;
    // main.core.control.setToolbarButton(!core.domStyle.toolbarBtn);
    toolBar.flash();
  },
  btn1(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 49,
    });
  },

  btn2(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 50,
    });
  },

  btn3(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 51,
    });
  },

  btn4(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 52,
    });
  },

  btn5(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 53,
    });
  },

  btn6(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 54,
    });
  },

  btn7(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 55,
    });
  },

  btn8(e) {
    e.stopPropagation();
    main.core.onkeyUp({
      keyCode: 56,
    });
  },

};

const getData = function (index) {
  return {
    x: style.width * index + 20,
    y: resize.style.toolBarHeight / 2,
    anchor: {
      x: 0.5,
      y: 0.5,
    },
  };
};
const nodesList = {};
toolBar.on('show', function () {
  const { useButton } = toolBar;
  const { icons } = core.statusBar;
  const { zone } = this.container;
  let arr;
  if (useButton) {
    arr = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8'];
  } else if (resize.style.isVertical) arr = ['book', 'fly', 'toolbox', 'keyboard', 'shop', 'save', 'load', 'settings'];
  else arr = ['book', 'fly', 'toolbox', 'save', 'load', 'settings'];
  // TODO:
  // hard 字样占两个
  const len = arr.length + 2;
  const col = resize.style.isVertical ? len : 3;
  const row = Math.ceil(len / col);

  const width = resize.style.toolBar[2] / col;
  const height = resize.style.toolBar[3] / row;
  const anchor = { x: 0.5, y: 0.5 };
  let x = 0;
  let y = - height / 2;
  arr.forEach((t, i) => {
    x += width;
    if (i % col === 0) {
      x = width / 2;
      y += height;
    }
    nodesList[t] = toolBar.addNode('sprite', {
      texture: icons[t],
      data: {
        x,
        y,
        anchor,
      },
      event: {
        pointerdown: events[t],
      },
    });
  });
  x += width / 2;
  y -= height / 2;
  if (x + 2 * width > col * width) {
    x = width / 2;
    y += height;
  }
  window.text = toolBar.addNode('text', {
    text: core.status.hard,
    style: style.fontStyle,
    start() {
      ui.center(this, x, y, 2 * width, height, {
        maxRatio: 1,
      });
    },
    event: {
      pointerdown: events.hard,
    },
  });
});

toolBar.update = function () {
  nodesList.book.alpha = core.hasItem('book') ? 1 : 0.3;
  nodesList.fly.alpha = core.hasItem('fly') ? 1 : 0.3;
};
