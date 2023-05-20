import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  logo: {
    display: 'block',

    [theme.fn.smallerThan('sm')]: {
      height: rem(28),
    },
  },
}));

export default useStyles;
