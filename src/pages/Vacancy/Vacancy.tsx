import { getVacancy } from '@api/superjob';
import { Point, PointIcon } from '@assets';
import { AddToFavoritesButton, ErrorMessage, Loader, VacancyRichText } from '@components';
import { API_SETTINGS, APP_SETTINGS } from '@constants';
import { getPaymentInfo } from '@helpers';
import { useVacancyId } from '@hooks';
import { Container, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';

import useStyles from './Vacancy.styles';

const Vacancy = () => {
  const id = useVacancyId();
  const { classes } = useStyles();

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: [API_SETTINGS.API_QUERY_KEYS.VACANCY, id],
    queryFn: () => getVacancy(id as string),
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: APP_SETTINGS.DATA_STALE_TIME_MS,
  });

  useDocumentTitle(data ? data.profession : APP_SETTINGS.PAGES.VACANCY.TITLE);

  if (isLoading || isFetching) return <Loader />;

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (data) {
    const { profession, vacancyRichText, type_of_work, payment_from, payment_to, currency, town } =
      data;

    const payment = getPaymentInfo(payment_from, payment_to, currency);

    return (
      <Container size="sm" className={classes.container}>
        <Stack className={classes.inner}>
          <Paper className={classes.block}>
            <Grid>
              <Grid.Col span="auto">
                <Stack className={classes.short_description}>
                  <Title order={1}>{profession}</Title>
                  <Group className={classes.payment}>
                    <Text component="span" className={classes.payment_text}>
                      {payment}
                    </Text>
                    <Point />
                    {type_of_work.title}
                  </Group>
                  <Group className={classes.location}>
                    <PointIcon />
                    {town.title}
                  </Group>
                </Stack>
              </Grid.Col>
              <Grid.Col span="content">
                <AddToFavoritesButton vacancy={data} />
              </Grid.Col>
            </Grid>
          </Paper>
          <Paper className={classes.block}>
            <VacancyRichText vacancyRichText={vacancyRichText} />
          </Paper>
        </Stack>
      </Container>
    );
  }

  return null;
};

export default Vacancy;
