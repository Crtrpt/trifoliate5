import { nextTick } from "vue";
import { TPage } from "../type/page";
import TNode from "../type/tnode";
import { initNode } from "../utils/initNode";
import { DocumentSave, initRelation } from "../utils/JsonToDoc";

const page = {
  namespaced: true,
  state: () => {
    return new TPage();
  },
  getters: {
    getWorkspace: (state: any, getters: any): TNode[] => {
      return state.workspace;
    },
    getDocument: (state: any, getters: any): TNode[] => {
      return state.document;
    },
    getCurrentNode: (state: any, getters: any): TNode => {
      return state.currentNode;
    },
    getHoverNode: (state: any, getters: any): TNode => {
      return state.hoverNode;
    },
    getDragoverNode: (state: any, getters: any): TNode => {
      return state.dragoverNode;
    },
  },
  mutations: {
    initDocument(state: any, payload: any) {
      state.document = payload.document;
      state.hashIds = payload.hashIds;
      state.workspace = payload.workspace;
      state.maxId = payload.maxId;
    },
    dragoverNode(state: any, payload: any) {
      state.dragoverNode = state.hashIds.get(payload?.id);
    },
    cancelDragoverNode(state: any, payload: any) {
      //取消放置
      state.dragoverNode = null;
    },
    setAttrToggle(state: any, payload: any) {
      var node = state.hashIds.get(payload.data.id);
      var oldVal = node.attr.get(payload.attrName);
      console.log(oldVal);
      node.attr.set(payload.attrName, !oldVal);
    },
    //增加节点
    addNode(state: any, payload: any) {
      if (payload.action == "add") {
        var node = new TNode(payload.node);
        node.id = state.getMaxId();
        node.parent = payload.parent;
        node.level = (node?.parent?.level || 0) + 1;
        node.attr!.set(
          "index",
          payload.index || payload?.parent?.length || state.document.length || 0
        );
        state.hashIds.set(node.id!, node);
        if (payload.parent == null) {
          state.document.push(node);
        } else {
          payload.parent.slot["default"].push(node);
        }
      }
      return state;
    },
    copyNode(state: any, payload: any) {
      console.log(payload);
      var node = new TNode(payload);
      node.parent = payload.parent;
      node.id = state.getMaxId();
      state.hashIds.set(node.id!, node);
      if (payload.parent == null) {
        state.document.push(node);
      } else {
        payload.parent.slot["default"].push(node);
      }
    },
    //删除节点
    removeNode(state: TPage, payload: any) {
      console.log("remove" + payload.id);
      if (state?.hoverNode?.id == payload.id) {
        state.hoverNode = undefined;
      }
      if (state?.currentNode?.id == payload.id) {
        state.currentNode = undefined;
      }
      var idx = payload.attr.get("index");
      var parentList = [];
      if (payload.parent == null) {
        parentList = state!.document!;
        parentList = [
          ...parentList?.slice(0, idx),
          ...parentList?.slice(idx + 1, parentList.length),
        ];
        state.document = parentList;
      } else {
        var slot = payload.attr.get("slot");
        parentList = payload.parent.slot[slot];

        parentList = [
          ...parentList.slice(0, idx),
          ...parentList.slice(idx + 1, parentList.length),
        ];
        payload.parent.slot[slot] = parentList;
      }

      state.hashIds?.delete(payload.id);
    },
    hoverNode(state: any, payload: any) {
      state.hoverNode = state.hashIds.get(payload.id);
    },
    cancelHoverNode(state: any, payload: any) {
      //取消悬停
      state.hoverNode = null;
    },
    selectNode(state: any, payload: any) {
      state.currentNode = state.hashIds.get(payload.id || state.maxId);
    },
    bindEl(state: any, payload: any) {
      state.hashIds.set(payload.id, payload);
    },
    cancelSelectNode(state: any, payload: any) {
      //取消选择
      state.currentNode = null;
    },
    changeSelectStyle(state: any, payload: any) {
      //取消选择
      state.currentNode.style = {
        ...state.currentNode.style,
        ...payload,
      };
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
    setAttrToggle: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("setAttrToggle", payload);
      },
    },
    addNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        console.log(namespacedContext.rootGetters);
        var node = namespacedContext.rootGetters["nodeList/getCurNode"];
        console.log(node);
        namespacedContext.commit("addNode", {
          ...payload,
          node: node,
        });
      },
    },
    removeNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("removeNode", payload);
      },
    },
    copyNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("copyNode", payload);
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
    cancelHoverNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("cancelHoverNode", payload);
      },
    },
    dragoverNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("dragoverNode", payload);
      },
    },
    cancelDragoverNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("cancelDragoverNode", payload);
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
    changeSelectStyle: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("changeSelectStyle", payload);
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
        var maxId = 0;
        initRelation(payload, null, 1, hashIds, maxId);
        namespacedContext.commit("initDocument", {
          document: payload,
          hashIds: hashIds,
          maxId: maxId,
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
