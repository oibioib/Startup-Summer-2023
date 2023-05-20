import { Link } from 'react-router-dom';

import { Empty, Pagination, VacancyShort } from '@components';
import { APP_SETTINGS } from '@constants';
import { useFavorites } from '@hooks';
import { Button, Container, Stack } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import useStyles from './Favorites.styles';

const Favorites = () => {
  useDocumentTitle(APP_SETTINGS.PAGES.FAVORITES.TITLE);
  const { classes } = useStyles();
  const { favoritesToRender, totalPages } = useFavorites();

  if (favoritesToRender.length)
    return (
      <Container size="sm" className={classes.container}>
        <Stack className={classes.inner}>
          {favoritesToRender.map((vacancy) => (
            <VacancyShort key={vacancy.id} {...vacancy} />
          ))}
          <Pagination totalPages={totalPages} />
        </Stack>
      </Container>
    );

  return (
    <Empty>
      <Button
        size="md"
        variant="light"
        className={classes.button}
        component={Link}
        to={APP_SETTINGS.PAGES.VACANCIES.ROUTE}
      >
        {APP_SETTINGS.PAGES.VACANCIES.TITLE}
      </Button>
    </Empty>
  );
};

export default Favorites;
