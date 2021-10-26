import { createStore } from "vuex";
import CounterOne from "./modules/counter-1";
import CounterTwo from "./modules/counter-2";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CounterOne,
    CounterTwo,
  },
});
