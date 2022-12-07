export default {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    setCount(state, payload) {
      // `state` is the local module state
      state.count += payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {
    increment({ state, commit, rootState, dispatch }) {
      // dispatch action, commit mutation
      commit('setCount', 1);
    },
    decrement({ state, commit, rootState, dispatch }) {
      if (state.count <= -10) {
        commit('reset');
        return;
      }
      commit('setCount', -1);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
};
