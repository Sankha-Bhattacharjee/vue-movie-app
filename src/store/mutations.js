export default {
    setTrendingMovieAndShowsList(state, payload) {
        state.latestMovieAndShowsList = payload;
    },
    setTrendingMoviesList(state, payload) {
        state.trendingMoviesList = payload;
    },
    setTrendingShowsList(state, payload) {
        state.trendingShowsList = payload;
    },
    setTopratedList(state, payload) {
        state.topRatedList = payload;
    },
    setUpcomingMovieList(state, payload) {
        state.upcomingList = payload;
    }
}