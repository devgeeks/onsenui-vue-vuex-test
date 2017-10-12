<template>
  <v-ons-page>
    <v-ons-toolbar class="search-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="toggleMenu">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-list>
        <v-ons-list-header>
          Search for Stock images by keyword
        </v-ons-list-header>
        <v-ons-list-item>
          <div class="center">
            <v-ons-input ref="searchInput" placeholder="Image search" float></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-button
            :ripple="$ons.platform.isAndroid()"
            modifier="large--cta"
            @click="submitSearch"
          >
            Call to action
          </v-ons-button>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
  import YetAnotherPage from './YetAnotherPage';

  export default {
    name: 'search',
    data () {
      return {
        title: 'Search'
      };
    },
    methods: {
      toggleMenu () {
        this.$store.commit('splitter/toggle');
      },
      submitSearch () {
        // @TODO replace with actual results page
        const { value } = this.$refs.searchInput.$el;
        this.$store.commit('navigator/push', {
          name: 'YetAnotherPage',
          extends: YetAnotherPage,
          data () {
            return {
              searchTerm: value
            };
          }
        });
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
  ons-input {
    width: 100%;
  }
  ons-button {
    margin-right: 8px;
  }
  ons-list-header {
    padding: 16px;
  }
</style>
