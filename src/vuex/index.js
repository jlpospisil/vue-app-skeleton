import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import uiModule from './modules/ui';

Vue.use(Vuex);

/**
 *  Use a reducer function to only persist items that are a result of user interaction
 *  Things that will be retrieved by the app should not be persisted
 */
const reducer = (state) => {
  const { ui } = state;
  return {
    ui: {
      side_nav: ui.side_nav,
    },
  };
};

// Create vuex store
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'appName',
      reducer,
    }),
  ],
  modules: {
    ui: uiModule,
  },
});
