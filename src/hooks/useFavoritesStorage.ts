import { getData } from '@api/storage';
import { STORAGE_SETTINGS } from '@constants';
import { useLocalStorage } from '@mantine/hooks';

const { KEYS } = STORAGE_SETTINGS;

const useFavoritesStorage = () => {
  const [favorites, setFavorites] = useLocalStorage<VacancyData[]>({
    key: KEYS.FAVORITES,
    defaultValue: getData<VacancyData[]>(KEYS.FAVORITES) || [],
  });

  const isFavorite = (jobId: number) => {
    return !!favorites.filter(({ id }) => jobId === id).length;
  };

  const addFavorite = (vacancy: VacancyData) => {
    if (isFavorite(vacancy.id)) return;
    setFavorites([...favorites, vacancy]);
  };

  const removeFavorite = (vacancy: VacancyData) => {
    if (!isFavorite(vacancy.id)) return;

    const arr = favorites.filter(({ id }) => id !== vacancy.id);
    setFavorites(arr);
  };

  const toggleFavorite = (vacancy: VacancyData) => {
    if (isFavorite(vacancy.id)) removeFavorite(vacancy);
    if (!isFavorite(vacancy.id)) addFavorite(vacancy);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
};

export default useFavoritesStorage;
