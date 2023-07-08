<template>
  <v-item-group selected-class="bg-primary">
    <base-grid-panel title-text="Trending Movies" :grid-content="createTrendingMoviesList"/>
    <base-grid-panel title-text="Trending TV Shows" :grid-content="createTrendingShowsList"/>
  </v-item-group>
</template>

<script>
import BaseGridPanel from "./BaseGridPanel.vue";

export default {
    components:{
        BaseGridPanel
    },
    created() {
        this.$store.dispatch("fetchTrendingMovies");
        this.$store.dispatch("fetchUpcomingMovies");
    },
    computed:{
        createTrendingMoviesList(){
            return this.$store.getters.getTrendingMoviesList;
        },
        createTrendingShowsList(){
            return this.$store.getters.getTrendingShowsList;
        }
    }
}
</script>
