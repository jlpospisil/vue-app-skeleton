import Vue from 'vue';
/* eslint-disable-next-line no-unused-vars */
import Popper from 'popper.js';
/* eslint-disable-next-line no-unused-vars */
import Bootstrap from 'bootstrap';
import router from './router';
import store from './vuex';
import Notifications from './plugins/toastr-notifications';

Vue.config.productionTip = false;

// Use toastr notifications
Vue.use(Notifications, {
  positionClass: 'toast-top-right mt-5',
});

// Create main application
new Vue({
  router,
  store,
}).$mount('#app');
