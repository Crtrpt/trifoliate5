import TNode from "./tnode";

export class TPage {
  document?: TNode[];
  currentNode?: TNode;
  hoverNode?: TNode;
  dragoverNode?: TNode;
  hashIds?: Map<string, TNode>;
}
