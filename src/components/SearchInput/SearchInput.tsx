import { useEffect } from 'react';

import { SearchIcon } from '@assets';
import { APP_SETTINGS, DATA_ELEMS } from '@constants';
import { useFormReset, usePageParam } from '@hooks';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useStoreSearch } from '@store';
import { shallow } from 'zustand/shallow';

import useStyles from './SearchInput.styles';

type SearchForm = {
  formSearchValue: string;
};

const SearchInput = () => {
  const { classes } = useStyles();
  const { clearPageParam } = usePageParam();

  const { searchValue, setSearchValue } = useStoreSearch(
    (state) => ({
      searchValue: state.searchValue,
      setSearchValue: state.setSearchValue,
    }),
    shallow
  );

  const form = useForm<SearchForm>({
    initialValues: {
      formSearchValue: '',
    },
  });

  useFormReset(form.reset);

  useEffect(() => {
    form.setValues({
      formSearchValue: searchValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFormSubmitHandler = form.onSubmit((values) => {
    if (values.formSearchValue) {
      setSearchValue(values.formSearchValue);
      clearPageParam();
    }
  });

  return (
    <form onSubmit={onFormSubmitHandler}>
      <TextInput
        {...form.getInputProps('formSearchValue')}
        placeholder={APP_SETTINGS.FORM.INPUTS.SEARCH.PLACEHOLDER}
        className={classes.search}
        icon={<SearchIcon className={classes.icon} />}
        iconWidth={35}
        data-elem={DATA_ELEMS.SEARCH_INPUT}
        rightSection={
          <Button className={classes.button} type="submit" data-elem={DATA_ELEMS.DO_SEARCH}>
            {APP_SETTINGS.FORM.BUTTONS.SEARCH}
          </Button>
        }
        rightSectionWidth="auto"
      />
    </form>
  );
};

export default SearchInput;
