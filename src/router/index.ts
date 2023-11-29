// Composables
import { createRouter, createWebHistory } from 'vue-router'

import RecipeList from '../components/RecipeList.vue'
import CreateRecipe from '../components/CreateRecipe.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/recipes',
    component: RecipeList
  },
  {
    path: '/create-recipe',
    component: CreateRecipe
  },
  {
    path: '/login', name: 'Login', component: Login
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
