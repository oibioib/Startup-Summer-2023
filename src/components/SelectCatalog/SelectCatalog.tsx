import { getCatalogs } from '@api/superjob';
import { ChevronDownIcon } from '@assets';
import { SelectOption } from '@components';
import { useFormContext } from '@components/FilterForm/FilterForm';
import { API_SETTINGS, APP_SETTINGS } from '@constants';
import { Box, Select } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import useStyles from './SelectCatalog.styles';

const SelectCatalog = ({ dataElem }: { dataElem: string }) => {
  const { classes } = useStyles();

  const { data } = useQuery({
    queryKey: [API_SETTINGS.API_QUERY_KEYS.CATALOGS],
    queryFn: () => getCatalogs(),
    refetchOnWindowFocus: false,
    retry: API_SETTINGS.API_QUERY_RETRY.DEFAULT,
    staleTime: Infinity,
  });

  const form = useFormContext();

  if (data && data.length) {
    const selectValues = data.map(({ key, title }) => ({ value: key.toString(), label: title }));

    return (
      <Box className={classes.container}>
        <Select
          {...form.getInputProps('formCatalogues')}
          size="md"
          classNames={{ dropdown: classes.dropdown, rightSection: classes.right_section }}
          allowDeselect
          label={APP_SETTINGS.FORM.INPUTS.CATALOG.LABEL}
          placeholder={APP_SETTINGS.FORM.INPUTS.CATALOG.PLACEHOLDER}
          rightSection={<ChevronDownIcon />}
          data={selectValues}
          itemComponent={SelectOption}
          data-elem={dataElem}
        />
      </Box>
    );
  }

  return null;
};

export default SelectCatalog;
