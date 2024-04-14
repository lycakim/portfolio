import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue';
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: LandingPage,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = "Jeric Eduarte Portfolio"
})

export default router;
