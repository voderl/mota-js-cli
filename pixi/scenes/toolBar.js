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
  if (useButton) {
    ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8'].forEach((t, i) => {
      nodesList[t] = toolBar.addNode('sprite', {
        texture: icons[t],
        data: getData(i),
        event: {
          pointerdown: events[t],
        },
      });
    });
  } else {
    let arr;
    if (resize.style.isVertical) arr = ['book', 'fly', 'toolbox', 'keyboard', 'shop', 'save', 'load', 'settings'];
    else arr = ['book', 'fly', 'toolbox', 'shop', 'save', 'load', 'settings'];
    arr.forEach((t, i) => {
      nodesList[t] = toolBar.addNode('sprite', {
        texture: icons[t],
        data: getData(i),
        event: {
          pointerdown: events[t],
        },
      });
    });
  }
  const left = style.width * 8;
  window.text = toolBar.addNode('text', {
    text: core.status.hard,
    style: style.fontStyle,
    start() {
      ui.center(this, left, 0, zone[2] - left, zone[3], {
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
