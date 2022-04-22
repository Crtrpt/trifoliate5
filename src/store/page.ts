import { TPage } from "../type/page";
import TNode from "../type/tnode";
import { DocumentSave, initRelation } from "../utils/JsonToDoc";

const page = {
  namespaced: true,
  state: () => {
    return new TPage();
  },
  getters: {
    getDocument: (state: any, getters: any): TNode[] => {
      return state.document;
    },
    getCurrentNode: (state: any, getters: any): TNode => {
      return state.currentNode;
    },
    getHoverNode: (state: any, getters: any): TNode => {
      return state.hoverNode;
    },
  },
  mutations: {
    initDocument(state: any, payload: any) {
      state.document = payload.document;
      state.hashIds = payload.hashIds;
    },
    hoverNode(state: any, payload: any) {
      state.hoverNode = state.hashIds.get(payload.id);
    },
    selectNode(state: any, payload: any) {
      state.currentNode = state.hashIds.get(payload.id);
    },
    bindEl(state: any, payload: any) {
      state.hashIds.set(payload.id, payload);
    },
    cancelSelectNode(state: any, payload: any) {
      //取消选择
      state.currentNode = null;
    },
    setCurrentProp(state: any, payload: any) {
      state.currentNode.props[payload.name] = payload.value;
    },
    save(state: any, payload: any) {
      DocumentSave(state);
    },
  },
  actions: {
    initDocument: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("initDocument", payload);
      },
    },
    selectNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("selectNode", payload);
      },
    },
    hoverNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("hoverNode", payload);
      },
    },
    bindEl: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("bindEl", payload);
      },
    },
    cancelSelectNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("cancelSelectNode", payload);
      },
    },
    setCurrentProp: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("setCurrentProp", payload);
      },
    },

    redo: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        console.log("重做");
      },
    },

    undo: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        console.log("撤销");
      },
    },
    open: {
      root: false,
      async handler(namespacedContext: any, payload: any) {
        const pickerOpts = {
          types: [
            {
              accept: {
                "application/*": [".tp"],
              },
            },
          ],
          excludeAcceptAllOption: true,
          multiple: false,
        };
        let fileHandle;

        [fileHandle] = await window.showOpenFilePicker(pickerOpts);

        const fileData = await fileHandle.getFile();
        const contents = await fileData.text();

        var payload = JSON.parse(contents);
        var hashIds = new Map();
        initRelation(payload, null, 1, hashIds);
        namespacedContext.commit("initDocument", {
          document: payload,
          hashIds: hashIds,
        });
      },
    },
    save: {
      root: false,
      async handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("save", {});
      },
    },
  },
};

export default page;
