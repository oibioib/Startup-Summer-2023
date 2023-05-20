import { useRouteError } from 'react-router-dom';

import { ErrorImage } from '@assets';
import { ErrorMessage } from '@components';
import { APP_SETTINGS } from '@constants';
import { Center, Container, Stack } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import useStyles from './ErrorPage.styles';

const ErrorPage = () => {
  useDocumentTitle(APP_SETTINGS.PAGES.ERROR.TITLE);
  const { classes } = useStyles();
  const errorFromRouter = useRouteError();

  const error =
    errorFromRouter instanceof Error ? errorFromRouter : new Error(APP_SETTINGS.ERRORS.NOT_FOUND);

  return (
    <Container h="100vh">
      <Center h="100%">
        <Stack className={classes.container}>
          <ErrorImage className={classes.image} />
          <ErrorMessage error={error} />
        </Stack>
      </Center>
    </Container>
  );
};

export default ErrorPage;
