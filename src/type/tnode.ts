class TNode {
  name?: string;
  id?: string;
  parent?: TNode;
  level?: number;
  style?: Object;
  props?: Object;
  slot?: Map<string, TNode[]>;
  attr?: Map<string, Object>;
}

export default TNode;
