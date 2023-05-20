import { API_SETTINGS, APP_SETTINGS } from '@constants';
import { getApiHeaders } from '@helpers';
import { getRefreshToken } from '@helpers/helpers';
import axios from 'axios';

const {
  API_BASE_URL,
  API_ENDPOINTS,
  API_CREDENTIALS: {
    API_LOGIN,
    API_PASSWORD,
    API_CLIENT_ID,
    API_CLIENT_SECRET,
    API_HR,
    PROXY_X_SECRET_KEY,
  },
  API_PARAMS: { PUBLISHED, NO_AGREEMENT },
} = API_SETTINGS;

const { RESULTS_PER_PAGE } = APP_SETTINGS;

const getAuthentificationData = async () => {
  const response = await axios<AuthentificationData>({
    method: 'GET',
    url: `${API_BASE_URL}${API_ENDPOINTS.PASSWORD}/`,
    params: {
      login: API_LOGIN,
      password: API_PASSWORD,
      client_id: API_CLIENT_ID,
      client_secret: API_CLIENT_SECRET,
      hr: API_HR,
    },
    headers: {
      'x-secret-key': PROXY_X_SECRET_KEY,
    },
  });

  return response.data;
};
const refreshAuthentificationData = async () => {
  const response = await axios<AuthentificationData>({
    method: 'GET',
    url: `${API_BASE_URL}${API_ENDPOINTS.REFRESH_TOKEN}/`,
    params: {
      refresh_token: getRefreshToken(),
      client_id: API_CLIENT_ID,
      client_secret: API_CLIENT_SECRET,
    },
    headers: {
      'x-secret-key': PROXY_X_SECRET_KEY,
    },
  });

  return response.data;
};

const getVacancies = async (params?: GetVacanciesParams) => {
  const response = await axios<VacanciesData>({
    method: 'GET',
    url: `${API_BASE_URL}${API_ENDPOINTS.VACANCIES}/`,
    params: {
      published: PUBLISHED,
      count: params?.count || RESULTS_PER_PAGE,
      page: params?.page,
      keyword: params?.keyword,
      payment_from: params?.payment_from,
      payment_to: params?.payment_to,
      catalogues: params?.catalogues,
      no_agreement: (params?.payment_from || params?.payment_to) && NO_AGREEMENT,
    },
    headers: getApiHeaders(),
  });

  return response.data;
};

const getVacancy = async (id: string) => {
  const response = await axios<VacancyData>({
    method: 'GET',
    url: `${API_BASE_URL}${API_ENDPOINTS.VACANCIES}/${id}/`,
    headers: getApiHeaders(),
  });

  return response.data;
};

const getCatalogs = async () => {
  const response = await axios<CatalogData[]>({
    method: 'GET',
    url: `${API_BASE_URL}${API_ENDPOINTS.CATALOGUES}/`,
    headers: getApiHeaders(),
  });

  return response.data;
};

export {
  getAuthentificationData,
  refreshAuthentificationData,
  getVacancies,
  getVacancy,
  getCatalogs,
};
