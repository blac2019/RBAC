const state = {
  collapse: false
};

const mutations = {
  setCollapse(state, params) {
    state.collapse = params;
  }
};

export default {
  namespaced: true,

  state,
  mutations
};
