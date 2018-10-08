import Vue from 'vue';

const mutations = {
  SET_SIDE_NAV_OPEN(state, open) {
    Vue.set(state.side_nav, 'is_open', open);
  },
  UPDATE_LOADING_STATUS(state, loading) {
    Vue.set(state, 'loading', loading);
  },
};

export default mutations;
