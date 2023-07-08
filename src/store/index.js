import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    latestMovieAndShowsList: [],
    trendingMoviesList:[],
    trendingShowsList:[],
    topRatedList:[],
    upcomingList: [],
  },
  getters,
  mutations,
  actions
})
