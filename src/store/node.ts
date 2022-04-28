const nodeList = {
  namespaced: true,
  state: () => {
    return {
      nodeList: [
        {
          name: "base",
          expland: true,
          list: [
            {
              name: "Node",
              type: "Text",
              id: "1",
              style: {},
              props: {
                content: "node",
              },
              slot: {
                default: [],
              },
            },
            {
              name: "Container",
              type: "Container",
              id: "2",
              style: {
                height: "100px",
              },
              props: {},
              slot: {
                default: [],
              },
            },
            {
              name: "NameSlot",
              id: "3",
            },
            {
              name: "Tab",
              id: "4",
            },
          ],
        },
        {
          name: "test",
          expland: true,
          list: [
            {
              name: "text",
              id: "5",
            },
          ],
        },
      ],
      curNode: null,
    };
  },
  getters: {
    getNodeList: (state: any, getters: any) => {
      console.log("获取nodelist");
      return state.nodeList;
    },
    getCurNode: (state: any, getters: any) => {
      console.log("获取nodelist");
      return state.curNode;
    },
  },
  actions: {
    setCurNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("setCurNode", payload);
      },
    },
  },
  mutations: {
    setCurNode(state: any, payload: any) {
      state.curNode = payload;
    },
  },
};

export default nodeList;
