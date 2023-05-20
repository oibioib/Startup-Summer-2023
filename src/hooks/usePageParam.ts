import { useSearchParams } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { isNumber } from '@helpers';

const usePageParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageParam = searchParams.get(APP_SETTINGS.URL_PARAMS.PAGE) || undefined;
  const activePage = activePageParam && isNumber(activePageParam) ? activePageParam : undefined;

  const clearPageParam = () => {
    searchParams.delete(APP_SETTINGS.URL_PARAMS.PAGE);
    setSearchParams(searchParams);
  };

  const setPageParam = (page: number) => {
    searchParams.set(APP_SETTINGS.URL_PARAMS.PAGE, page.toString());
    setSearchParams(searchParams);
  };

  return {
    activePage,
    clearPageParam,
    setPageParam,
  };
};

export default usePageParam;
