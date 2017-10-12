<template>
  <v-ons-page :infinite-scroll="infiniteScroll">
    <v-ons-toolbar class="another-toolbar">
      <div class="left">
        <v-ons-back-button>Home</v-ons-back-button>
      </div>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-list>
        <v-ons-list-header>Searching: {{ header }}</v-ons-list-header>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'another',
    data () {
      return {
        title: 'Another',
        searchTerm: ''
      };
    },
    methods: {
      infiniteScroll () {
        console.log('scroll');
      }
    },
    computed: {
      header () {
        // @TODO dynamic based on results
        // Starts with "Loading..." then changes to
        // `n results for ${searchTerm}`
        return this.searchTerm;
      }
    }
  };
</script>

