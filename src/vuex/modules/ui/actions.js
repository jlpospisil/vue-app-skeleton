const actions = {
  disableLoading({ commit }) {
    commit('UPDATE_LOADING_STATUS', false);
  },

  enableLoading({ commit }) {
    commit('UPDATE_LOADING_STATUS', true);
  },

  toggleSideNav({ commit, state }, open = null) {
    if (typeof open === 'boolean') {
      commit('SET_SIDE_NAV_OPEN', open);
    } else {
      commit('SET_SIDE_NAV_OPEN', !state.side_nav.is_open);
    }
  },
};

export default actions;
