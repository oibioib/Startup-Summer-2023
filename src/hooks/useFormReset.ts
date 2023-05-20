import { useEffect } from 'react';

import { useStoreForms } from '@store';

import usePageParam from './usePageParam';

const useFormReset = (formResetCallback: () => void) => {
  const reset = useStoreForms((state) => state.reset);
  const clearReset = useStoreForms((state) => state.clearReset);
  const { clearPageParam } = usePageParam();

  useEffect(() => {
    if (reset) {
      formResetCallback();
      clearPageParam();
      clearReset();
    }
  });
};

export default useFormReset;
