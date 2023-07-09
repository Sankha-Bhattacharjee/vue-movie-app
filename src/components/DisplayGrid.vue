<template>
  <v-item-group selected-class="bg-primary">
    <div v-if="routeName === 'display-grid'">
    <base-grid-panel title-text="Trending Movies" :grid-content="createTrendingMoviesList"/>
    <base-grid-panel title-text="Trending TV Shows" :grid-content="createTrendingShowsList"/>
    </div>
    <div v-if="routeName === 'movies'">
    <base-grid-panel title-text="Top Rated Movies" :grid-content="createTopRatedList"/>
    <base-grid-panel title-text="Upcoming Movies" :grid-content="createUpcomingList"/>
    </div>
    <div v-if="routeName === 'shows'">
    <base-grid-panel title-text="Top Rated Series" :grid-content="createTopRatedList"/>
    <base-grid-panel title-text="Upcoming Shows" :grid-content="createUpcomingList"/>
    </div>
    
  </v-item-group>
</template>

<script>
import BaseGridPanel from "./BaseGridPanel.vue";

export default {
    data(){
        return{
            routeName:''
        }
    },
    components:{
        BaseGridPanel
    },
    created() {
        this.routeName = this.$route.name;
        if(this.routeName === "display-grid"){
            this.$store.dispatch("fetchTrendingMoviesOrShows", "movie");
            this.$store.dispatch("fetchTrendingMoviesOrShows", "tv");
        }else{
            if(this.routeName === "movies"){
                this.$store.dispatch("fetchTopRatedMoviesOrShows", "movie");
                this.$store.dispatch("fetchUpcomingMoviesOrShows", {type:"movie", upcoming:"upcoming"});
            }else if(this.routeName === "shows"){
                this.$store.dispatch("fetchTopRatedMoviesOrShows", "tv");
                this.$store.dispatch("fetchUpcomingMoviesOrShows", {type:"tv", upcoming:"on_the_air"});
            }
            
        }
    },
    computed:{
        createTrendingMoviesList(){
            return this.$store.getters.getTrendingMoviesList;
        },
        createTrendingShowsList(){
            return this.$store.getters.getTrendingShowsList;
        },
        createTopRatedList(){
            return this.$store.getters.getTopRatedList;
        },
        createUpcomingList(){
            return this.$store.getters.getUpcomingList;
        }
    }
}
</script>
