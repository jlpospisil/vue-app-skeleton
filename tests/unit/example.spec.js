import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';
  const component = shallowMount(HelloWorld, {
    propsData: { msg },
  });

  it('Is a vue component', () => {
    expect(component.isVueInstance()).toBeTruthy();
  });

  it('renders props.msg when passed', () => {
    expect(component.text()).toMatch(msg);
  });
});
