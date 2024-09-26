import Axios from './requestManager';
import accountService from '@/services/account';

const header = 'Bearer ' + accountService.getToken();

const getRecipes = () => Axios.get('/recipes');
const postRecipe = (data: any) => Axios.post('/recipes', data, { headers: { 'Authorization' : header}});


export default {
    getRecipes,
    postRecipe,
  };
  