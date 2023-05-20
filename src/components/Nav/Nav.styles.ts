import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  nav: {
    padding: 0,
    margin: rem(8),
    display: 'flex',
    gap: rem(60),
    justifyContent: 'center',

    [theme.fn.smallerThan('sm')]: {
      gap: rem(30),
      justifyContent: 'right',
    },

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
    },
  },

  link: {
    textDecoration: 'none',
    color: theme.black,
    fontWeight: 500,
  },

  link_active: {
    color: theme.other.mainColor,
  },

  link_not_nested: {
    cursor: 'default',
    pointerEvents: 'none',
  },
}));

export default useStyles;
