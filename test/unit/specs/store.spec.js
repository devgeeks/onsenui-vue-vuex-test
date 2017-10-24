import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import HomePage from '@/components/HomePage';
import OtherPage from '@/components/OtherPage';

describe('store/navigator', () => {
  const Constructor = Vue.extend(App);
  let vm;

  before(() => {
    vm = new Constructor({ store }).$mount();
    vm.$store.commit('navigator/reset');
  });

  it('should push to the page stack', () => {
    // this would be a better test with a spy on push()
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    vm.$store.commit('navigator/push', HomePage);
    expect(vm.$store.state.navigator.stack.length).to.equal(2);
  });

  it('should pop from the page stack', () => {
    // this would be a better test with a spy on pop()
    expect(vm.$store.state.navigator.stack.length).to.equal(2);
    vm.$store.commit('navigator/pop');
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
  });

  it('should not pop past the end of the stack', () => {
    // attempting to pop past the end should be ignored
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
    vm.$store.commit('navigator/pop');
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
  });

  it('should replace wuthin the page stack', () => {
    // this would be a better test with spys on push() and pop()
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
    vm.$store.commit('navigator/replace', OtherPage);
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('other');
  });

  it('should reset the page stack', () => {
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('other');
    vm.$store.commit('navigator/reset', HomePage);
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
    vm.$store.commit('navigator/push', OtherPage);
    vm.$store.commit('navigator/reset');
    expect(vm.$store.state.navigator.stack.length).to.equal(1);
    expect(vm.$store.state.navigator.stack[0].name).to.equal('search');
  });

  it('should set the navigator options', () => {
    vm.$store.commit('navigator/options', {foo: 'bar'});
    expect(vm.$store.state.navigator.options.foo).to.equal('bar');
  });
});

describe('store/splitter', () => {
  const Constructor = Vue.extend(App);
  let vm;

  before(() => {
    vm = new Constructor({ store }).$mount();
    vm.$store.commit('navigator/reset');
  });

  it('should default to a closed menu state', () => {
    expect(vm.$store.state.splitter.open).to.equal(false);
  });

  it('should toggle the menu state when called without argument', () => {
    vm.$store.commit('splitter/toggle');
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.$store.commit('splitter/toggle');
    expect(vm.$store.state.splitter.open).to.equal(false);
  });

  it('should set the menu to the state provided by the argument', () => {
    expect(vm.$store.state.splitter.open).to.equal(false);
    vm.$store.commit('splitter/toggle', true);
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.$store.commit('splitter/toggle', true);
    expect(vm.$store.state.splitter.open).to.equal(true);
    vm.$store.commit('splitter/toggle', false);
    expect(vm.$store.state.splitter.open).to.equal(false);
  });
});
