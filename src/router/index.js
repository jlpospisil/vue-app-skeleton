import Vue from 'vue';
import VueRouter from 'vue-router';
import Application from '../App.vue';
import testRoutes from './test-routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Application,
    children: [
      ...testRoutes,
    ],
  },
  { path: '*', redirect: '/' },
];

export default new VueRouter({
  routes,
  mode: 'history',
});
