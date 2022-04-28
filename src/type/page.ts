import TNode from "./tnode";
import TWorkspace from "./tworkspace";

export class TPage {
  name?: String;
  document?: TNode[];
  currentNode?: TNode;
  hoverNode?: TNode;
  dragoverNode?: TNode;
  hashIds?: Map<string, TNode>;
  workspace?: TWorkspace;
  maxId: number = 0;
  getMaxId() {
    this.maxId = this.maxId + 1;
    return this.maxId;
  }
}
