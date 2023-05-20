import { useEffect } from 'react';

import { PaymentInput, SelectCatalog } from '@components';
import { APP_SETTINGS, DATA_ELEMS } from '@constants';
import { useFormReset, usePageParam } from '@hooks';
import { Button, Stack } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { useStoreFilter } from '@store';
import { shallow } from 'zustand/shallow';

export interface FilterFormData {
  formCatalogues: string;
  formPaymentFrom: string;
  formPaymentTo: string;
}

export const [FormProvider, useFormContext, useForm] = createFormContext<FilterFormData>();

const FilterForm = () => {
  const { catalogues, paymentFrom, paymentTo, setFiltersValue } = useStoreFilter(
    (state) => ({
      catalogues: state.filters.catalogues,
      paymentFrom: state.filters.paymentFrom,
      paymentTo: state.filters.paymentTo,
      setFiltersValue: state.setFiltersValue,
    }),
    shallow
  );

  const { clearPageParam } = usePageParam();

  const form = useForm({
    initialValues: {
      formCatalogues: '',
      formPaymentFrom: '',
      formPaymentTo: '',
    },
  });

  const formSubmitHandler = form.onSubmit((values) => {
    setFiltersValue({
      catalogues: values.formCatalogues,
      paymentFrom: values.formPaymentFrom,
      paymentTo: values.formPaymentTo,
    });

    clearPageParam();
  });

  useEffect(() => {
    form.setValues({
      formCatalogues: catalogues,
      formPaymentFrom: paymentFrom,
      formPaymentTo: paymentTo,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFormReset(form.reset);

  return (
    <FormProvider form={form}>
      <form onSubmit={formSubmitHandler}>
        <Stack spacing={18}>
          <SelectCatalog dataElem={DATA_ELEMS.INDUSTRY_SELECT} />
          <Stack spacing={8}>
            <PaymentInput
              inputProp="formPaymentFrom"
              placeholder={APP_SETTINGS.FORM.INPUTS.SALARY_FROM.PLACEHOLDER}
              label={APP_SETTINGS.FORM.INPUTS.SALARY_FROM.LABEL}
              dataElem={DATA_ELEMS.SALARY_FROM}
            />
            <PaymentInput
              inputProp="formPaymentTo"
              placeholder={APP_SETTINGS.FORM.INPUTS.SALARY_TO.PLACEHOLDER}
              dataElem={DATA_ELEMS.SALARY_TO}
            />
          </Stack>
          <Button
            type="submit"
            size="md"
            sx={(theme) => ({ fontSize: theme.fontSizes.sm })}
            data-elem={DATA_ELEMS.DO_SEARCH}
          >
            {APP_SETTINGS.FORM.BUTTONS.APPLY}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default FilterForm;
