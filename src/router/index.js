import { createRouter, createWebHistory } from 'vue-router'
import MoviePage from '../components/MoviePage.vue'
import DisplayGrid from '../components/DisplayGrid.vue'
import ShowsPage from '../components/ShowsPage.vue'
const routes = [
  {
    path: '/',
    name: 'display-grid',
    component: DisplayGrid
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviePage
  },
  {
    path: '/shows',
    name: 'shows',
    component: ShowsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
