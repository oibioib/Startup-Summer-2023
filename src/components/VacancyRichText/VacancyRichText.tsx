import { Box, TypographyStylesProvider } from '@mantine/core';

import useStyles from './VacancyRichText.styles';

const VacancyRichText = ({ vacancyRichText }: { vacancyRichText: string }) => {
  const { classes } = useStyles();

  return (
    <Box
      component={TypographyStylesProvider}
      dangerouslySetInnerHTML={{
        __html: vacancyRichText,
      }}
      className={classes.text}
    />
  );
};

export default VacancyRichText;
