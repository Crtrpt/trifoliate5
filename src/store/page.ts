const page = {
  namespaced: true,
  state: () => {
      return {
        //页面上的id 到节点的映射
        idHash:new Map()
    };
  },
  mutations: {
    test(state: any) {
      state.count++;
    },
  },
};

export default page;
