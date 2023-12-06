// Composables
import { createRouter, createWebHistory } from 'vue-router';

import CreateRecipe from '../components/CreateRecipe.vue';
import RecipeList from '../components/RecipeList.vue';
import TheHome from '../views/TheHome.vue';
import TheLogin from '../views/TheLogin.vue';

const routes = [
  {
    path: '/',
    component: TheHome,
  },
  {
    path: '/recipes',
    component: RecipeList,
  },
  {
    path: '/create-recipe',
    component: CreateRecipe,
  },
  {
    path: '/login', name: 'Login', component: TheLogin,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
