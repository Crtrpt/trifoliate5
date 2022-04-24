import { TPage } from "../type/page";
import TNode from "../type/tnode";

export function initRelation(
  node: any,
  parent: any,
  level: number,
  hashIds: Map<string, any>
) {
  node.forEach((n: any) => {
    n.parent = parent;
    n.level = level;
    n.attr = new Map();
    hashIds.set(n.id, n);
    for (const key in n.slot) {
      var slot = n.slot[key];
      initRelation(slot, n, level + 1, hashIds);
    }
    n as TNode;
  });
}

export async function DocumentSave(page: TPage) {
  let fileHandle;
  const pickerOpts = {
    multiple: false,
  };
  fileHandle = await window.showSaveFilePicker(pickerOpts);

  const writable = await fileHandle.createWritable();
  console.log("TODO  save local");
  // TODO  save local
  //   await writable.write("111");
  // Close the file and write the contents to disk.
  //   await writable.close();
}
