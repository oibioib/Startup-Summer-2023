import { useLayoutEffect } from 'react';

import { APP_SETTINGS } from '@constants';
import { isNumber } from '@helpers';

import useFavoritesStorage from './useFavoritesStorage';
import usePageParam from './usePageParam';

const useFavorites = () => {
  const { favorites } = useFavoritesStorage();
  const { activePage, setPageParam } = usePageParam();
  const { RESULTS_PER_PAGE } = APP_SETTINGS;

  const totalPages = Math.ceil(favorites.length / RESULTS_PER_PAGE);
  const pageIndex = activePage && isNumber(activePage) ? +activePage - 1 : 0;
  const favoritesFromIndex = pageIndex * RESULTS_PER_PAGE;
  const favoritesToIndex = favoritesFromIndex + RESULTS_PER_PAGE;
  const favoritesOnActivePage = favorites.slice(favoritesFromIndex, favoritesToIndex);
  const page = pageIndex + 1;

  useLayoutEffect(() => {
    if (!favoritesOnActivePage.length && page > 1) {
      setPageParam(page - 1);
    }
  });

  return {
    totalPages,
    favoritesToRender: favoritesOnActivePage,
  };
};

export default useFavorites;
