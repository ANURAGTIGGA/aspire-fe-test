import { createWebHistory, createRouter } from 'vue-router'
import CardsView from './views/Cards.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/cards', name: "Cards", component: CardsView },
  // Fallback 404 route
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router