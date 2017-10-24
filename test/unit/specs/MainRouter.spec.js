import Vue from 'vue';
import MainRouter from '@/components/MainRouter';
import OtherPage from '@/components/OtherPage';
import store from '@/store';

describe('MainRouter.vue', () => {
  const Constructor = Vue.extend(MainRouter);
  let vm;

  before(() => {
    vm = new Constructor({ store }).$mount();
    vm.$store.commit('navigator/reset');
  });

  it('should have a reset pageStack', () => {
    expect(vm.pageStack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
  });

  it('should pop a page from the stack when popPage() is called', () => {
    vm.$store.commit('navigator/push', OtherPage);
    expect(vm.pageStack.length).to.equal(2);
    vm.popPage();
    expect(vm.pageStack.length).to.equal(1);
  });

  it('should toggle the menu when toggleMenu() is called', () => {
    expect(vm.$store.state.splitter.open).to.equal(false);
    vm.toggleMenu();
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.toggleMenu();
    expect(vm.$store.state.splitter.open).to.equal(false);
  });
});

