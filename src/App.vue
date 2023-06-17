<template>
  <v-app>
    <v-app-bar color="primary" class="pr-10 pl-10">
      <v-app-bar-title><v-btn>Movies DB</v-btn></v-app-bar-title>
      <template v-slot:append>
        <v-btn>Movies</v-btn>
        <v-btn>TV Shows</v-btn>

        <v-btn icon="mdi-magnify"></v-btn>
      </template>
    </v-app-bar>
    <search-bar/>
    <movie-slider />
    <v-main>
      <vue-router />
    </v-main>
    <footer-bar/>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import MovieSlider from './components/MovieSlider.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: "App",
  components: {
    SearchBar, MovieSlider, FooterBar
},
};
</script>
