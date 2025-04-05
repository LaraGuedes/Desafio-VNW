import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-2-full-stack-vnw.onrender.com',
});

export default api;
