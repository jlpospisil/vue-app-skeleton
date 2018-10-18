import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import router from '@/router';
import TopNav from '@/components/ui/TopNav.vue';
import { initialState } from '@/vuex/modules/ui';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TopNav.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      toggleSideNav: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        ui: {
          namespaced: true,
          state: initialState,
          actions,
        },
      },
    });
  });

  const createComponent = () => shallowMount(TopNav, {
    store,
    router,
    localVue,
  });

  it('is a vue component', () => {
    const component = createComponent();
    expect(component.isVueInstance()).toBeTruthy();
  });

  it('toggles side nav when #side-nav-toggle is clicked', () => {
    const component = createComponent();
    const toggle = component.find('#side-nav-toggle');
    toggle.trigger('click');
    expect(actions.toggleSideNav).toHaveBeenCalled();
  });
});
