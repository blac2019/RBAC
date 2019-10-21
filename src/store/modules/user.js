const state = {
  info: {}
};

const mutations = {
  setCollapse(state, params) {
    state.info = params;
  }
};

export default {
  namespaced: true,

  state,
  mutations
};
