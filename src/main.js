import Vue from 'vue';
import router from './router';
import store from './vuex';
import Notifications from './plugins/toastr-notifications';
import Popper from 'popper.js';
import Bootstrap from 'bootstrap';

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
