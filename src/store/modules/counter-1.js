export default {
  state: {
    counter: 40,
  },

  getters: {
    count: (state) => state.counter,
  },

  actions: {
    addOne({ commit }) {
      commit("ADD_ONE");
    },
    minusOne({ commit }) {
      commit("MINUS_ONE");
    },
  },

  mutations: {
    ADD_ONE: (state) => {
      state.counter++;
    },
    MINUS_ONE: (state) => {
      state.counter--;
    },
  },
};
