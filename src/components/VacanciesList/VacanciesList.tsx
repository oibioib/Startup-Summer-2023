import { Empty, VacancyShort } from '@components';
import { APP_SETTINGS } from '@constants';
import { Button, Center } from '@mantine/core';

import useStyles from './VacanciesList.styles';

type VacanciesListType = {
  objects: VacancyData[];
  reset: () => void;
};

const VacanciesList = ({ objects: vacancies, reset }: VacanciesListType) => {
  const { classes } = useStyles();

  return (
    <>
      {vacancies.length ? (
        vacancies.map((vacancy) => <VacancyShort key={vacancy.id} {...vacancy} />)
      ) : (
        <Center className={classes.container}>
          <Empty>
            <Button onClick={reset} size="md" variant="light" className={classes.button}>
              {APP_SETTINGS.PAGES.VACANCIES.TITLE}
            </Button>
          </Empty>
        </Center>
      )}
    </>
  );
};

export default VacanciesList;
