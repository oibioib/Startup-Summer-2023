import { useParams } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { isNumber } from '@helpers';

const useVacancyId = () => {
  const { id } = useParams();
  if (id && !isNumber(id)) throw new Error(APP_SETTINGS.ERRORS.NO_VACANCY_ID);
  return id;
};

export default useVacancyId;
