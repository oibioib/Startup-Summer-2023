import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    gap: theme.spacing.xs,
    flexDirection: 'column',

    [theme.fn.largerThan('xs')]: {
      gap: theme.spacing.xl,
      flexDirection: 'row',
    },
  },

  logo: {
    [theme.fn.largerThan('xs')]: {
      position: 'absolute',
    },
  },
}));

export default useStyles;
