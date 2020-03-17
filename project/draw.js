import nodes from "../pixi/nodes";
import { Texture } from "pixi.js-legacy";


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
  }
}
export default draw;
