export default{
    getLatestMovieAndShowsList(state){
        return state.latestMovieAndShowsList;
    },
    getTrendingMoviesList(state){
        return state.trendingMoviesList;
    },
    getTrendingShowsList(state){
        return state.trendingShowsList;
    },
    getTopRatedList(state){
        return state.topRatedList;
    },
    getUpcomingList(state){
        return state.upcomingList;
    }
}