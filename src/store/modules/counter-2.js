export default {
  namespaced: true,
  state: {
    counter: 50,
  },

  getters: {
    countTwo: (state) => state.counter,
  },

  actions: {
    addIt({ commit }) {
      commit("ADD_ONE");
    },
    minusIt({ commit }) {
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
