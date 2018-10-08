<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="mt-2 mb-5">
      <router-link to="/home" class="btn btn-primary mx-3">Home</router-link>
      <router-link to="/about" class="btn btn-secondary mx-3">About</router-link>
      <router-link to="/other" class="btn btn-info mx-3">Other</router-link>
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
export default {
  name: 'app',
  watch: {
    $route() {
      const types = ['warning', 'info', 'success', 'error'];
      const type = types[Math.floor(Math.random() * types.length)];
      const { path } = this.$route;
      this.$toast[type](`Route changed to ${path}`, `Example ${type} alert`);
    },
  },
};
</script>
