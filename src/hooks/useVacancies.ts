import { useMemo } from 'react';

import { getVacancies } from '@api/superjob';
import { API_SETTINGS, APP_SETTINGS } from '@constants';
import { isNumber } from '@helpers';
import { useStoreFilter, useStoreForms, useStoreSearch } from '@store';
import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

import usePageParam from './usePageParam';

const useVacancies = () => {
  const { searchValue, resetSearchValue } = useStoreSearch(
    (state) => ({
      searchValue: state.searchValue,
      resetSearchValue: state.resetSearchValue,
    }),
    shallow
  );

  const { catalogues, paymentFrom, paymentTo, resetFiltersValue } = useStoreFilter(
    (state) => ({
      catalogues: state.filters.catalogues,
      paymentFrom: state.filters.paymentFrom,
      paymentTo: state.filters.paymentTo,
      resetFiltersValue: state.resetFiltersValue,
    }),
    shallow
  );

  const setReset = useStoreForms((state) => state.setReset);

  const { activePage } = usePageParam();

  const queryParams = [searchValue, catalogues, paymentFrom, paymentTo, activePage].filter(
    (value) => !!value
  );

  const queryPage = useMemo(() => {
    if (activePage) {
      return isNumber(activePage) ? (+activePage - 1).toString() : undefined;
    }
  }, [activePage]);

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: [API_SETTINGS.API_QUERY_KEYS.VACANCIES, ...queryParams],
    queryFn: () =>
      getVacancies({
        keyword: searchValue || undefined,
        catalogues: catalogues || undefined,
        payment_from: paymentFrom || undefined,
        payment_to: paymentTo || undefined,
        page: queryPage,
      }),
    refetchOnWindowFocus: false,
    retry: API_SETTINGS.API_QUERY_RETRY.DEFAULT,
    staleTime: APP_SETTINGS.DATA_STALE_TIME_MS,
  });

  const isDataLoading = useMemo(
    () => !data && (isLoading || isFetching),
    [data, isLoading, isFetching]
  );

  const totalPages = useMemo(() => {
    if (data && data.total) {
      const apiMaxPages = Math.ceil(
        APP_SETTINGS.MAX_RESULTS_FROM_API / APP_SETTINGS.RESULTS_PER_PAGE
      );
      const currentMaxPages = Math.ceil(data.total / APP_SETTINGS.RESULTS_PER_PAGE);
      return Math.min(apiMaxPages, currentMaxPages);
    }

    return 1;
  }, [data]);

  const resetSearchAndFilters = () => {
    resetSearchValue();
    resetFiltersValue();
    setReset();
  };

  return {
    data,
    isDataLoading,
    isLoading,
    isFetching,
    isError,
    error,
    resetSearchAndFilters,
    totalPages,
  };
};

export default useVacancies;
