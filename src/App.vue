<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <!-- auto-open menu at 960px wide -->
      <v-ons-splitter-side swipeable collapse="(max-width: 959px)" width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <main-router></main-router>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
  import MainRouter from './components/MainRouter';
  import MenuPage from './components/MenuPage';

  export default {
    name: 'app',
    computed: {
      menuIsOpen: {
        get () {
          return this.$store.state.splitter.open;
        },
        set (newValue) {
          this.$store.commit('splitter/toggle', newValue);
        }
      }
    },
    components: {
      MainRouter,
      MenuPage
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ons-splitter-side[side=left][animation=overlay],
  ons-splitter-side[mode=split] {
    border-right: 1px solid #bbb;
  }
  /* shift the content when menu auto-expanded */
  @media (min-width: 960px) {
    ons-splitter-content {
      left: 250px;
    }
  }
</style>
