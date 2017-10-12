<template>
  <v-ons-navigator
    @toggleMenu="toggleMenu"
    swipeable
    :options="options"
    :pop-page="popPage"
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>

<script>
  import HomePage from './HomePage';

  export default {
    props: ['currentPage'],
    beforeCreate () {
      this.$store.commit('navigator/push', HomePage);
    },
    computed: {
      pageStack () {
        return this.$store.state.navigator.stack;
      },
      options () {
        return this.$store.state.navigator.options;
      }
    },
    methods: {
      popPage () {
        this.$store.commit('navigator/pop');
      },
      toggleMenu () {
        this.$store.commit('splitter/toggle');
      }
    }
  };
</script>

