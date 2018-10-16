<template>
    <transition-group
            name="fade"
            tag="ul"
            id="app-side-nav"
            class="navbar-nav navbar-sidenav navbar-dark side-nav-bg h-100 d-flex flex-column"
            :class="{ open: side_nav.is_open }"
    >
        <!-- Item 1 -->
        <li class="nav-item" key="item1">
            <router-link to="/item1" class="nav-link" side-nav-tooltip data-placement="right" data-original-title="Item 1">
                <icon name="fa-ambulance" />
                <span class="nav-link-label">Item 1</span>
            </router-link>
        </li>

        <!-- Item 2 -->
        <li class="nav-item position-relative" key="item2">
            <a class="nav-link nav-link-dropdown-toggle collapsed" href="#app-side-nav-item2"
               data-toggle="collapse" aria-expanded="false" aria-controls="app-side-nav-item2"
               side-nav-tooltip data-placement="right" data-original-title="Item 2"
            >
                <icon name="fa-archive" />
                <span class="nav-link-label">Item 2</span>
            </a>
            <ul class="collapse list-unstyled nav-link-dropdown side-nav-bg" id="app-side-nav-item2">
                <li class="nav-item" side-nav-tooltip data-placement="right" data-original-title="Create item 2">
                    <router-link to="/item2/create" class="nav-link">
                        <icon name="fa-plus" />
                        <span class="nav-link-label">Create</span>
                    </router-link>
                </li>
                <li class="nav-item" side-nav-tooltip data-placement="right" data-original-title="Search item 2">
                    <router-link to="/item2/search" class="nav-link">
                        <icon name="fa-search" />
                        <span class="nav-link-label">Search</span>
                    </router-link>
                </li>
            </ul>
        </li>

        <!-- Item 3 -->
        <li class="nav-item" key="item3">
            <router-link to="/item3" class="nav-link" side-nav-tooltip data-placement="right" data-original-title="Item 3">
                <icon name="fa-bicycle" />
                <span class="nav-link-label">Item 3</span>
            </router-link>
        </li>

        <!-- Spacer -->
        <li class="flex-fill" key="spacer"></li>

        <!-- Menu toggler -->
        <li class="nav-item side-nav-toggle" key="copyright" side-nav-tooltip data-placement="right" data-original-title="Copyright here...">
            <span class="nav-link">
                <icon name="fa-copyright" />
                <span class="nav-link-label">Copyright here...</span>
            </span>
        </li>
    </transition-group>
</template>

<style lang="scss" scoped>
    @import '../../scss/variables';

    $border-color: darken($side-nav-bg-color, 15%);

    .side-nav-bg {
        background-color: $side-nav-bg-color;
    }

    #app-side-nav {
        position: absolute;
        top: 0;
        left: 0;
        padding: $top-nav-height 0 0 0;
        font-size: 16px;

        &.open {
            .nav-item {
                width: $side-nav-width-expanded;

                .nav-item {
                    padding-left: 2rem;
                }

                .nav-link {
                    &.nav-link-dropdown-toggle {
                        &:after {
                            position: absolute;
                            right: 1rem;
                            font-family: 'FontAwesome';
                            animation-name: fade-in;
                            animation-duration: $side-nav-animation-duration;
                        }

                        &.collapsed:after {
                            content: '\f105';
                        }

                        &:not(.collapsed):after {
                            content: '\f107';
                        }
                    }

                    i.fa {
                        margin-right: 5px;
                    }
                }
            }
        }

        &:not(.open) {
            .nav-item {
                width: $side-nav-width-collapsed;

                .nav-link {
                    &[aria-expanded="true"] {
                        border-top-color: $border-color;
                        border-bottom-color: $border-color;
                    }
                }
            }

            .nav-link-label {
                display: none;
            }

            .nav-link-dropdown {
                &.show,&.collapsing {
                    position: absolute;
                    top: 0;
                    left: $side-nav-width-collapsed;

                    .nav-item {
                        border-right: 1px solid $border-color;

                        &:first-child {
                            border-top: 1px solid $border-color;

                            .nav-link {
                                border-top: none;
                                border-bottom: none;
                            }
                        }

                        &:not(:first-child) {
                            border-left: 1px solid $border-color;
                        }

                        &:last-child {
                            border-bottom: 1px solid $border-color;
                        }
                    }
                }
            }
        }

        .nav-item {
            transition: width $side-nav-animation-duration ease-in-out;
            white-space: nowrap;
            overflow-x: hidden;

            .nav-link {
                color: $side-nav-font-color;
                border-top: 1px solid transparent;
                border-bottom: 1px solid transparent;
                padding: 5px 15px;

                &:hover, &:focus {
                    color: lighten($side-nav-font-color, 10%);
                }
            }
        }
    }
</style>

<script>
  import {mapState} from 'vuex';
  import { Icon } from '../generic';
  import jQuery from 'jquery';

  const $ = jQuery;

  export default {
    components: {
      Icon
    },
    data () {
      return {
        navigation: null,
        tooltips: null,
        dropdown_toggles: null
      }
    },
    computed: {
      ...mapState('ui', ['side_nav'])
    },
    watch: {
      'side_nav.is_open' () {
        this.adjustTooltips();

        if (!this.side_nav.is_open) {
          this.dropdown_toggles.filter('[aria-expanded="true"]').click()
        }
      }
    },
    methods: {
      adjustTooltips () {
        // Disable tooltips when nav is expanded
        if (this.side_nav.is_open) {
          this.tooltips.tooltip('disable');
        }
        else {
          this.tooltips.tooltip('enable');
        }
      },

      navLinkClicked (event) {
        const el = $(event.target);

        // If nav is expanded, only have 1 open dropdown at a time
        // If it is collapsed, close all dropdowns when an option is selected
        if (el.is('.nav-link-dropdown-toggle') || !this.side_nav.is_open) {
          this.dropdown_toggles.not(el).filter('[aria-expanded="true"]').click();
        }

        // Manually hide tooltips to accommodate touch screens
        this.tooltips.tooltip('hide');
      }
    },
    mounted () {
      this.navigation = $('#app-side-nav');
      this.tooltips = this.navigation.find('[side-nav-tooltip]');
      this.tooltips.tooltip({ trigger : 'hover' });
      this.dropdown_toggles = this.navigation.find('.nav-link-dropdown-toggle');

      // General setup
      this.adjustTooltips();
    }
  }
</script>