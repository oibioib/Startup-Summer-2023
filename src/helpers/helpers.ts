import { getData } from '@api/storage';
import { API_SETTINGS, APP_SETTINGS, STORAGE_SETTINGS } from '@constants';

const { API_CLIENT_SECRET, PROXY_X_SECRET_KEY } = API_SETTINGS.API_CREDENTIALS;
const { KEYS } = STORAGE_SETTINGS;

const getAuthentificationData = () => {
  const authentificationData = getData<AuthentificationData>(KEYS.AUTHENTIFICATION);

  if (!authentificationData) {
    throw new Error('No authentification data');
  }

  return authentificationData;
};

const getAuthentificationToken = () => {
  const authentificationData = getAuthentificationData();
  return `${authentificationData.token_type} ${authentificationData.access_token}`;
};

const isAuthentificationTokenExpired = () => {
  const authentificationData = getAuthentificationData();
  return Date.now() > authentificationData.ttl * 1000;
};

const getRefreshToken = () => {
  const authentificationData = getAuthentificationData();
  return authentificationData.refresh_token;
};

const getApiHeaders = () => ({
  'x-secret-key': PROXY_X_SECRET_KEY,
  'X-Api-App-Id': API_CLIENT_SECRET,
  Authorization: getAuthentificationToken(),
});

export { getAuthentificationToken, getApiHeaders, getRefreshToken, isAuthentificationTokenExpired };
