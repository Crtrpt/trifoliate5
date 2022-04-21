import { TPage } from "../type/page";
import TNode from "../type/tnode";

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
  },
};

export default page;
