import { useEffect } from 'react';

import { getData } from '@api/storage';
import { getAuthentificationData, refreshAuthentificationData } from '@api/superjob';
import { STORAGE_SETTINGS } from '@constants';
import { isAuthentificationTokenExpired } from '@helpers';
import { useLocalStorage } from '@mantine/hooks';

const { KEYS } = STORAGE_SETTINGS;

const useAuthentification = () => {
  const [authentificationData, setAuthentificationData] =
    useLocalStorage<AuthentificationData | null>({
      key: KEYS.AUTHENTIFICATION,
      defaultValue: getData<AuthentificationData>(KEYS.AUTHENTIFICATION),
    });

  useEffect(() => {
    (async () => {
      if (authentificationData === null) {
        const data = await getAuthentificationData();
        setAuthentificationData(data);
      }
    })();
  });

  useEffect(() => {
    (async () => {
      if (isAuthentificationTokenExpired()) {
        const data = await refreshAuthentificationData();
        setAuthentificationData(data);
      }
    })();
  });
};

export default useAuthentification;
