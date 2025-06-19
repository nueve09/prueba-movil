import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

api.interceptors.request.use(config => {
  return config;
});

api.interceptors.response.use(
  response => response,
  err => {
    throw new Error(`Fallo la llamada a ${err.config.url}: ${err.message}`);
  },
);
