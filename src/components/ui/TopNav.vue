<template>
    <nav id="app-nav" class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary">
        <!--<div class="container">-->
        <span id="side-nav-toggle"
              class="mr-2 text-white"
              :class="{ 'menu-open': side_nav.is_open, 'menu-closed': !side_nav.is_open }"
              @click="toggleSideNav"
        >
            <icon name="fa-close" :size="1.5" v-if="side_nav.is_open" />
            <icon name="fa-bars" :size="1.5" v-else />
        </span>

        <router-link to="/" class="navbar-brand mr-auto">
            <strong>Nav Brand</strong>
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="link in links.main" :key="link.to">
                    <router-link class="nav-link" :class="{ active: link.to === $route.path }" :to="link.to">
                        <icon :name="link.icon" v-if="link.icon"></icon>
                        {{ link.label }}
                    </router-link>
                </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        User Name
                        <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right bg-primary" aria-labelledby="navbarDropdown">
                        <router-link to="/" class="dropdown-item text-white">
                            <icon name="fa-cog" class="mr-2" />
                            Settings
                        </router-link>

                        <a class="dropdown-item text-white" href="/logout">
                            <icon name="fa-sign-out" class="mr-2" />
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <!--</div>-->
    </nav>
</template>

<style lang="scss">
    #side-nav-toggle {
        transition: 0.9s;

        &.menu-open {
            transform: rotateY(180deg);
        }

        &.menu-closed {
            transform: rotateY(-180deg);
        }
    }
</style>

<script>
  import { mapState, mapActions } from 'vuex';
  import { Icon } from '../generic';

  export default {
    components: {
      Icon,
    },
    data () {
      return {
        links: {
          main: [
            { label: 'Home', to: '/home', icon: 'fa-home' },
            { label: 'About', to: '/about', icon: 'fa-info' },
            { label: 'Other', to: '/other', icon: 'fa-motorcycle' },
          ]
        }
      }
    },
    computed: {
      ...mapState('ui', ['side_nav']),
    },
    methods: {
      ...mapActions('ui', ['toggleSideNav']),
    }
  }
</script>