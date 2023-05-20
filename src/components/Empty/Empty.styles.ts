import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: rem(80),
    gap: rem(28),
    textAlign: 'center',
  },

  image: {
    height: 'auto',

    [theme.fn.smallerThan('md')]: {
      width: rem(250),
    },

    [theme.fn.smallerThan('xs')]: {
      width: rem(150),
    },
  },

  text: {
    fontWeight: 700,
    fontSize: rem(24),
  },
}));

export default useStyles;
