import Vue from 'vue';
import HomePage from '@/components/HomePage';
import store from '@/store';

describe('HomePage.vue', () => {
  const Constructor = Vue.extend(HomePage);
  const vm = new Constructor({ store }).$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('ons-toolbar .center').textContent)
      .to.equal('Search');
  });

  it('should be able to toggle the menu', () => {
    // starts closed
    vm.toggleMenu();
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.toggleMenu();
    expect(vm.$store.state.splitter.open).to.equal(false);
  });
});

