const TestItem = {
  template: '<div>{{ item }}</div>',
  props: {
    item: { type: String, default: 'item' },
  },
};

export default [
  { path: '/home', component: TestItem, props: { item: 'Home' } },
  { path: '/about', component: TestItem, props: { item: 'About' } },
  { path: '/other', component: TestItem, props: { item: 'Other' } },
];
