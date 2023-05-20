export const API_CREDENTIALS = {
  API_LOGIN: import.meta.env.VITE_API_LOGIN,
  API_PASSWORD: import.meta.env.VITE_API_PASSWORD,
  API_CLIENT_ID: import.meta.env.VITE_API_CLIENT_ID,
  API_CLIENT_SECRET: import.meta.env.VITE_API_CLIENT_SECRET,
  API_HR: import.meta.env.VITE_API_HR,
  PROXY_X_SECRET_KEY: import.meta.env.VITE_PROXY_X_SECRET_KEY,
};

export const API_BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0';

export const API_ENDPOINTS = {
  PASSWORD: '/oauth2/password',
  REFRESH_TOKEN: '/oauth2/refresh_token',
  VACANCIES: '/vacancies',
  CATALOGUES: '/catalogues',
};

export const API_QUERY_KEYS = {
  VACANCIES: 'vacancies',
  VACANCY: 'vacancy',
  CATALOGS: 'catalogs',
};

export const API_QUERY_RETRY = {
  DEFAULT: 1,
};

export const API_PARAMS = {
  PUBLISHED: '1',
  NO_AGREEMENT: '1',
};
