import nodes from "../pixi/nodes";
import event from '../pixi/event';
import { Texture } from "pixi.js-legacy";

/**
 * 绘制图块时进行的操作
 * 参数里的node为 默认应该绘制的图块
 */
let animateDoor = {};
const draw = {
  // book
  book(node) {
    nodes.setNode(node, {
      update() {
        this.angle += 1;
      }
    })
    return node;
  },
  fly(node) {
    nodes.setNode(node, {
      update() {
        this.angle += 1;
      }
    })
    return node;
  },
}

export default draw;
