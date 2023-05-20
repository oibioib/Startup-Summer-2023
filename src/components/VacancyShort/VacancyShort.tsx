import { useNavigate } from 'react-router-dom';

import { Point, PointIcon } from '@assets';
import { AddToFavoritesButton } from '@components';
import { APP_SETTINGS, DATA_ELEMS } from '@constants';
import { getPaymentInfo } from '@helpers';
import { Grid, Group, Paper, Stack, Text } from '@mantine/core';

import useStyles from './VacancyShort.styles';

const VacancyShort = (vacancy: VacancyData) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { id, profession, payment_from, payment_to, currency, town, type_of_work } = vacancy;
  const payment = getPaymentInfo(payment_from, payment_to, currency);

  const onVacancyClickHandler = () => {
    navigate(`${APP_SETTINGS.PAGES.VACANCIES.ROUTE}/${id}`);
  };

  return (
    <Paper
      className={classes.container}
      onClick={onVacancyClickHandler}
      data-elem={DATA_ELEMS.VACANCY.replace(DATA_ELEMS.VACANCY_ID_TEMPLATE, id.toString())}
    >
      <Grid>
        <Grid.Col span="auto">
          <Stack className={classes.inner}>
            <h2 className={classes.title}>{profession}</h2>
            <Group className={classes.description}>
              <Text component="span" className={classes.payment}>
                {payment}
              </Text>
              <Point />
              {type_of_work.title}
            </Group>
            <Group className={classes.city}>
              <PointIcon />
              {town.title}
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span="content">
          <AddToFavoritesButton vacancy={vacancy} />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default VacancyShort;
