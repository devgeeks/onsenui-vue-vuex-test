<template>
  <v-ons-page>
    <v-ons-toolbar class="other-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-list>
        <v-ons-list-header>More Links</v-ons-list-header>
        <v-ons-list-item
          tappable
          modifier="chevron"
          @click="navToAnotherPage"
        >
          Another page
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
  import YetAnotherPage from './YetAnotherPage';

  export default {
    name: 'other',
    data () {
      return {
        title: 'Other'
      };
    },
    methods: {
      navToAnotherPage () {
        this.$store.commit('navigator/push', YetAnotherPage);
      }
    }
  };
</script>

<style scoped>
  /* hide the menu button when menu auto-expanded */
  @media (min-width: 960px) {
    .left ons-toolbar-button {
      display: none;
    }
  }
</style>
