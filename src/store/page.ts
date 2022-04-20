const page = {
  namespaced: true,
  state: () => {
    return {
      //   dom tree
      document: [
        {
          type: "Text",
          props: {
            content: "文本1",
          },
        },
        {
          type: "Text",
          props: {
            content: "文本2",
          },
        },
        {
          type: "Container",
          slot: {
            default: [
              {
                type: "Text",
                props: {
                  content: "文本3",
                },
              },
              {
                type: "Text",
                props: {
                  content: "文本4",
                },
              },
            ],
          },
        },
        {
          type: "NameSlot",
          slot: {
            header: [
              {
                type: "Text",
                props: {
                  content: "header slot",
                },
              },
            ],
            default: [
              {
                type: "Text",
                props: {
                  content: "default slot1",
                },
              },
              {
                type: "Text",
                props: {
                  content: "default slot2",
                },
              },
            ],
          },
        },
      ],
      //页面上的id 到节点的映射
      idHash: new Map(),
    };
  },
  getters: {
    getDocument: (state: any, getters: any) => {
      return state.document;
    },
  },
  mutations: {
    test(state: any) {
      state.count++;
    },
  },
};

export default page;
