import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Vue3Features from './routes/vue3-features'
import Basics from './routes/basics'
import Singles from './routes/singles'
import Plugins from './routes/plugins'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Singles,
  ...Vue3Features,
  ...Basics,
  ...Plugins,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
