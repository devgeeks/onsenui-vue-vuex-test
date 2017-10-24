import Vue from 'vue';
import MenuPage from '@/components/MenuPage';

describe('MenuPage.vue', () => {
  const Constructor = Vue.extend(MenuPage);
  let vm;

  before(() => {
    vm = new Constructor().$mount();
  });

  it('should contain some list items', () => {
    expect(vm.$el.querySelector('ons-list-item').textContent)
      .to.equal('Home');
  });
});
