import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const initialState = {
  loading: false,
  side_nav: {
    is_open: true,
  },
};

export default {
  namespaced: true,
  state: JSON.parse(JSON.stringify(initialState)),
  getters,
  actions,
  mutations,
};
