import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Treatments from '../views/Treatments.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/treatments', name: 'Treatments', component: Treatments },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If using browser back/forward buttons
    if (savedPosition) {
      return savedPosition
    }

    // Always scroll to top on new navigation
    return { top: 0 }
  },
})

export default router
