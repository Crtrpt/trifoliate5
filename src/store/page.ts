const page = {
  namespaced: true,
  state: () => {
    return {
      //   dom tree
      document: [],
      //当前选择的元素
      currentNode: null,
      //当前悬停的元素
      hoverNode: null,
      //页面上的id 到节点的映射
      hashIds: new Map(),
    };
  },
  getters: {
    getDocument: (state: any, getters: any) => {
      return state.document;
    },
    getCurrentNode: (state: any, getters: any) => {
      return state.currentNode;
    },
    getHoverNode: (state: any, getters: any) => {
      return state.hoverNode;
    },
    
  },
  mutations: {
    initDocument(state: any, payload: any) {
      state.document = payload.document;
      state.hashIds=payload.hashIds
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
