<template>
    <div id="app-loading-overlay" :class="{'side-nav-open': side_nav.is_open }" v-show="loading">
        <loading-spinner></loading-spinner>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/variables';
    @import '~bootstrap/scss/bootstrap';

    #app-loading-overlay {
        z-index: 1100;
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: $loading-overlay-bg-color;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: $side-nav-width-collapsed;
        transition: padding $side-nav-animation-duration ease-in-out;
    }

    @include media-breakpoint-up(sm) {
        #app-loading-overlay {
            &.side-nav-open {
                padding-left: $side-nav-width-expanded;
            }
        }
    }
</style>

<script>
import { mapState } from 'vuex';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner,
  },
  props: {
    loading: { type: Boolean, default: false },
  },
  computed: {
    ...mapState('ui', ['side_nav']),
  },
};
</script>
