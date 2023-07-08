<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="80vw"
  >
  <v-card-title class="titleText">Trending Today</v-card-title>
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in sliderMovieAndShowsList"
        :key="n"
      >
        <v-card
          color="grey-lighten-1"
          class="ma-4"
          height="250"
          width="300"
        >
        <img :src="'https://image.tmdb.org/t/p/w500'+n.poster_path" height="250" width="300"/>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    created(){
      this.$store.dispatch("fetchTrendingMoviesAndShows");
    },
    data() {
        return {
            model: null,
        }
    },
    computed:{
      sliderMovieAndShowsList(){
        return this.$store.getters.getLatestMovieAndShowsList;
      }
    }
  }
</script>

<style scoped>
.titleText{
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
}
</style>