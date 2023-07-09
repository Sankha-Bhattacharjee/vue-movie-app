<template>
  <v-app>
    <v-app-bar color="primary" class="pr-10 pl-10">
      <v-app-bar-title>
        <v-btn><router-link to="/">Movies DB</router-link></v-btn>
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn><router-link to="/movies">Movies</router-link></v-btn>
        <v-btn><router-link to="/shows">TV Shows</router-link></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>
      </template>
    </v-app-bar>

    <search-bar />
    <movie-slider />
    <v-main>
      <router-view>
        
      </router-view>
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import MovieSlider from "./components/MovieSlider.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    SearchBar,
    MovieSlider,
    FooterBar
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  text-decoration-color: none;
  color: white;
}
</style>