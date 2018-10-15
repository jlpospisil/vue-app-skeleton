<template>
  <div>
    <Loading :loading="loading"></Loading>

    <img alt="Vue logo" src="./assets/logo.png">

    <div class="mt-2 mb-5">
      <router-link to="/home" class="btn btn-primary mx-3">
        <i class="fa fa-fw fa-futbol-o"></i>
        Home
      </router-link>

      <router-link to="/about" class="btn btn-secondary mx-3">
        <i class="fa fa-fw fa-empire"></i>
        About
      </router-link>

      <router-link to="/other" class="btn btn-info mx-3">
        <i class="fa fa-fw fa-shekel"></i>
        Other
        </router-link>
    </div>

    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
  @import './scss/main.scss';
</style>

<script>
import {mapState, mapActions} from 'vuex';
import Loading from './components/ui/Loading.vue';

export default {
  name: 'app',
  components: {
    Loading,
  },
  computed: {
    ...mapState('ui', ['loading']),
  },
  watch: {  // TODO: this is only here to demo toastr alerts
    $route() {
      const types = ['warning', 'info', 'success', 'error'];
      const type = types[Math.floor(Math.random() * types.length)];
      const { path } = this.$route;
      const { disableLoading, enableLoading } = this;

      enableLoading();
      setTimeout(() => {
        disableLoading();
        this.$toast[type](`Route changed to ${path}`, `Example ${type} alert`);
      }, 1500);
    },
  },
  methods: {
    ...mapActions('ui', ['disableLoading', 'enableLoading']),
  },
};
</script>
