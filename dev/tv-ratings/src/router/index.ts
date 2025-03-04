import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowDetails from '../views/ShowDetails.vue'

const router = createRouter({
  history: createWebHashHistory('/dev/tv-ratings/'),
  routes: [
    { path: '/', component: Home },
    { path: '/show/:id', component: ShowDetails, props: true },
  ],
})

export default router
