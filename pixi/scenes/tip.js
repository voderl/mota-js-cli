import { Texture, DisplayObject, Sprite } from 'pixi.js-legacy';
import { scenes } from '../scenes';
import ui from '../ui';
import nodes from '../nodes';

const show = scenes.getScene('show');
const TextStyle = ui.TextStyle.tip;
const style = {
  offsetX: 5,
  offsetY: 5,
  padding: ui.getPadding([8, 10]),
};

const tip = {
  draw(text, id) {
    let { width, height } = ui.calText(text, TextStyle);
    const [top, right, bottom, left] = style.padding;
    let node = null;
    if (id != null) {
      node = ui.getBlockNode(id);
      node.anchor.set(0.5, 0.5);
      width += node.width;
    }
    const tempStyle = {
      node,
      text,
      x: style.offsetX,
      y: style.offsetY,
      width: width + left + right,
      height: height + top + bottom,
      zone: [left, top, width, height],
      textStyle: TextStyle,
      opacity: 0.7,
    };
    return this.drawOne(tempStyle);
  },
  drawOne(tempStyle) {
    const {
      x, y, width, height, zone, textStyle, opacity, node, text,
    } = tempStyle;
    const bg = ui.fillRect(show, x, y, width, height, {
      radius: 0.2,
      fillAlpha: opacity,
    });
    const [
      dx, dy, w, h,
    ] = zone;
    let textX = dx;
    if (node) {
      bg.addNode(node);
      node.position.set(dx + node.width / 2, dy + h / 2);
      textX += node.width;
    }
    bg.addNode('text', {
      text,
      style: textStyle,
      data: {
        x: textX,
        y: dy,
      },
    });
    return nodes.setNode(bg, {
      init() {
        this.changeTo({
          alpha: 0,
        }, {
          alpha: 1,
        }, 500, () => {
          this.getTween({
            alpha: 0,
          }, 500, () => { this.remove(); }).delay(800).start();
        });
      },
    });
  },
};

export default tip;
