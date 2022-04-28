import TNode from "../type/tnode";

export const initNode = (
  n: TNode,
  parent: any,
  hashIds: Map<string, any>,
  slotName: string,
  idx: Number
) => {
  n.parent = parent;
  n.level = (parent?.level || 0) + 1;
  n.attr = new Map();
  n.attr.set("eye", true);
  n.attr.set("lock", false);
  n.attr.set("trash", true);
  n.attr.set("index", idx);
  n.attr.set("slot", slotName);
  // console.log(node);
  hashIds.set(n.id!, n);

  return n;
};
