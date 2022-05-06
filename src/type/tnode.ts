import { nameGen } from "../utils/nameGen";

class TNode {
  name?: string;
  id?: string;
  parent?: TNode;
  // data: Object;
  level?: number;
  style?: Object;
  props?: {};
  slot?: Map<string, TNode[]>;
  attr?: Map<string, Object>;
  type: String;
  constructor(tempNode: any) {
    console.log(tempNode);
    this.name = nameGen(tempNode.name);

    this.type = tempNode.type;
    this.props = JSON.parse(JSON.stringify(tempNode?.props || {}));
    this.style = JSON.parse(JSON.stringify(tempNode?.style || {}));
    // this.data = JSON.parse(JSON.stringify(tempNode?.data));
    //TODO deep node copy
    this.slot = JSON.parse(JSON.stringify(tempNode?.slot || { default: [] }));
    this.attr = new Map();
    this.attr.set("eye", true);
    this.attr.set("lock", false);
    this.attr.set("trash", true);
  }
}

export default TNode;
