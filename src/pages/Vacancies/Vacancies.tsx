import {
  DisableOverlay,
  ErrorMessage,
  FilterForm,
  FilterHeader,
  Loader,
  Pagination,
  SearchInput,
  VacanciesList,
} from '@components';
import { APP_SETTINGS } from '@constants';
import { useVacancies } from '@hooks';
import { Box, Center, Grid, Paper, Stack } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import useStyles from './Vacancies.styles';

const Vacancies = () => {
  useDocumentTitle(APP_SETTINGS.PAGES.VACANCIES.TITLE);
  const { classes } = useStyles();
  const { data, isDataLoading, isError, error, resetSearchAndFilters, totalPages } = useVacancies();

  return (
    <Grid gutterSm="sm" gutterMd="md" gutterLg="lg" gutterXl={28}>
      <Grid.Col sm="content" className={classes.column}>
        <Paper className={classes.filter}>
          {isDataLoading && <DisableOverlay />}
          <FilterHeader reset={resetSearchAndFilters} />
          <FilterForm />
        </Paper>
      </Grid.Col>
      <Grid.Col sm="auto">
        <Stack className={classes.results}>
          <Box className={classes.search}>
            {isDataLoading && <DisableOverlay />}
            <SearchInput />
          </Box>

          {data && (
            <>
              <VacanciesList objects={data.objects} reset={resetSearchAndFilters} />
              <Pagination totalPages={totalPages} />
            </>
          )}

          {isDataLoading && (
            <Center className={classes.loading}>
              <Loader />
            </Center>
          )}

          {isError && <ErrorMessage error={error} />}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Vacancies;
