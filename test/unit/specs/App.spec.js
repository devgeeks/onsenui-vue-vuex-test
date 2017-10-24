import Vue from 'vue';
import App from '@/App';
import store from '@/store';

describe('App.vue', () => {
  const Constructor = Vue.extend(App);
  let vm;

  before(() => {
    vm = new Constructor({ store }).$mount();
  });

  it('provides a closed menu by default', () => {
    expect(vm.menuIsOpen)
      .to.equal(false);
  });

  it('toggles the menu state in Veux when menuIsOpen is set', () => {
    expect(vm.$store.state.splitter.open).to.equal(false);
    vm.menuIsOpen = true;
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.menuIsOpen = false;
    expect(vm.$store.state.splitter.open).to.equal(false);
  });
});
