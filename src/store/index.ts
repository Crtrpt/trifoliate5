import { createStore } from "vuex";
import view from "./view";
import page from "./page";
import nodeList from "./node";
const store = createStore({
  modules: {
    view: view,
    page: page,
    nodeList: nodeList,
  },
});

export default store;
