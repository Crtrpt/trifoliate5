var maxId = 0;
const page = {
  namespaced: true,
  state: () => {
    return {
      //   dom tree
      document: [
        {
          type: "Text",
          id: maxId++,
          props: {
            content: "文本1",
          },
        },
        {
          type: "Text",
          id: maxId++,
          props: {
            content: "文本2",
          },
        },
        {
          type: "Container",
          id: maxId++,
          slot: {
            default: [
              {
                type: "Text",
                id: maxId++,
                props: {
                  content: "文本3",
                },
              },
              {
                type: "Text",
                id: maxId++,
                props: {
                  content: "文本4",
                },
              },
            ],
          },
        },
        {
          type: "NameSlot",
          id: maxId++,
          slot: {
            header: [
              {
                type: "Text",
                id: maxId++,
                props: {
                  content: "header slot",
                },
              },
            ],
            default: [
              {
                type: "Text",
                id: maxId++,
                props: {
                  content: "default slot1",
                },
              },
              {
                type: "Text",
                id: maxId++,
                props: {
                  content: "default slot2",
                },
              },
            ],
          },
        },
      ],
      //当前选择的元素
      currentNode: null,
      //页面上的id 到节点的映射
      idHash: new Map(),
    };
  },
  getters: {
    getDocument: (state: any, getters: any) => {
      return state.document;
    },
    getCurrentNode: (state: any, getters: any) => {
      return state.currentNode;
    },
  },
  mutations: {
    selectNode(state: any, payload: any) {
      state.currentNode = payload;
    },
    setCurrentProp(state: any, payload: any) {
      state.currentNode.props[payload.name] = payload.value;
    },
  },
  actions: {
    selectNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("selectNode", payload);
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
