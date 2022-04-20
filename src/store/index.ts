import { createStore } from "vuex";
import view from "./view";
import page from "./page";
const store = createStore({
  modules: {
    view: view,
    page: page,
  },
});
 

export default store;