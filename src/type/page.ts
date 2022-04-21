import TNode from "./tnode";

export class TPage {
  document?: TNode[];
  currentNode?: TNode;
  hoverNode?: TNode;
  hashIds?: Map<string, TNode>;
}
