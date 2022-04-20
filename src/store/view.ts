const view = {
  namespaced: true,
  state: () => {
    return {};
  },
  mutations: {
    test(state: any) {
      state.count++;
    },
  },
};

export default view;
