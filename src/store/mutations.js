export default {
    setTrendingMovieandShowsList(state, payload) {
        state.latestMovieAndShowsList = payload;
    },
    setTrendingMoviesList(state, payload) {
        state.trendingMoviesList = payload;
    },
    setTrendingShowsList(state, payload) {
        state.trendingShowsList = payload;
    },
    setTopratedMovieList(state, payload) {
        state.topRatedList = payload;
    },
    setUpcomingMovieList(state, payload) {
        state.upcomingList = payload;
    }
}