import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

// Documentation
import Basics from './routes/basics'
import Singles from './routes/singles'
import Plugins from './routes/plugins'

// Animation
import Transitions from './routes/transitions'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Singles,
  ...Basics,
  ...Plugins,
  ...Transitions
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
