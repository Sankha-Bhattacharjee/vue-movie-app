<template>
  <v-app>
    <v-app-bar color="primary" class="pr-10 pl-10">
      <v-app-bar-title>Movies DB</v-app-bar-title>
      <template v-slot:append>
        <v-btn>Movies</v-btn>
        <v-btn>TV Shows</v-btn>

        <v-btn icon="mdi-magnify"></v-btn>
      </template>
    </v-app-bar>
    <search-bar/>
    <v-main>
      <vue-router />
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
export default {
  name: "App",
  components: {
    SearchBar
},

  data: () => ({
    //
  }),
};
</script>
