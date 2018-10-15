<template>
  <div>
    <Loading :loading="loading"></Loading>

    <top-nav></top-nav>

    <div id="app-content" :class="{'side-nav-open': side_nav.is_open }">
      <img alt="Vue logo" src="./assets/logo.png">

      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import './scss/main.scss';

  #app-content {
    padding-top: $top-nav-height;
    padding-left: $side-nav-width-collapsed;
  }
  @include media-breakpoint-up(sm) {
    #app-content {
      &.side-nav-open {
        padding-left: $side-nav-width-expanded;
      }
    }
  }
</style>

<script>
import {mapState, mapActions} from 'vuex';
import { Loading, TopNav } from './components/ui';

export default {
  name: 'app',
  components: {
    Loading,
    TopNav,
  },
  computed: {
    ...mapState('ui', ['loading', 'side_nav']),
  },
  watch: {  // TODO: this is only here to demo toastr alerts and loading spinner
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
