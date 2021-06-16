import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
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
  ...Basics,
  ...Plugins,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
