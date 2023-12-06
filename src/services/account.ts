import Axios from './requestManager';

const login = (credentials: any) => Axios.post('/api/login', credentials);

const logout = () => {
  localStorage.removeItem('token');
};

const getToken = () => localStorage.getItem('token');

const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

const isLogged = () => {
  const token = localStorage.getItem('token');

  return !!token;
};

export default {
  login,
  logout,
  saveToken,
  getToken,
  isLogged,
};
