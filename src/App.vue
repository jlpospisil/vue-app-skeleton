<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div style="margin-bottom: 50px;">
      <router-link to="/home" style="margin: 0 10px;">Home</router-link>
      <router-link to="/about" style="margin: 0 10px;">About</router-link>
      <router-link to="/other" style="margin: 0 10px;">Other</router-link>
    </div>

    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  #app {
    text-align: center;
  }
</style>

<script>
export default {
  name: 'app',
};
</script>
