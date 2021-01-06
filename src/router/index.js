import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Vue3Features from './routes/vue3-features'
import Basics from './routes/basics'
import Singles from './routes/singles'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Singles,
  ...Vue3Features,
  ...Basics,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// move navigation to vuex
// router.beforeEach(() => {
//   let el = document.getElementById('navigation')

//   if (el) {
//     el.classList.remove('open')
//   }
// })

export default router
