<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
    <div class="content">
      <v-ons-list-title>Links</v-ons-list-title>
      <v-ons-list>
        <v-ons-list-item modifier="chevron" tappable @click="onClick('home')">
          <div>Home</div>
        </v-ons-list-item>
        <v-ons-list-item modifier="chevron" tappable @click="onClick('other')">
          <div>Other</div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>

</template>

<script>
  import HomePage from './HomePage';
  import OtherPage from './OtherPage';

  export default {
    name: 'menu',
    data () {
      return {
      };
    },
    methods: {
      onClick (arg) {
        // close the menu
        this.$store.commit('splitter/toggle');
        // set the animation to 'none'
        this.$store.commit('navigator/options', {
          animation: 'none',
          // Resets default animation options
          callback: () => this.$store.commit('navigator/options', {})
        });
        // commit a 'replace' with the new page
        if (arg === 'home') {
          this.$store.commit('navigator/reset', HomePage);
        } else {
          this.$store.commit('navigator/reset', OtherPage);
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ons-list-item {
    cursor: pointer;
  }
</style>
