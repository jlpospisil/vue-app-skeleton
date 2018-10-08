import Vue from 'vue';
import router from './router';
import store from './vuex';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
}).$mount('#app');
