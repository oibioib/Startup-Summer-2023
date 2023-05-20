import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 700,
  },

  text: {
    fontSize: rem(20),
    fontWeight: 500,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  image: {
    marginBottom: rem(30),
    height: 'auto',

    [theme.fn.smallerThan('md')]: {
      width: rem(250),
    },

    [theme.fn.smallerThan('sm')]: {
      width: rem(200),
    },
  },
}));

export default useStyles;
