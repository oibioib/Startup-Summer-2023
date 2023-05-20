import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  pagination: {
    justifyContent: 'center',
    marginTop: 24,
  },

  dots: {
    width: '100%',
    height: theme.spacing.lg,

    [theme.fn.largerThan('xs')]: {
      width: 'auto',
    },
  },

  control: {
    borderRadius: theme.radius.xs,
  },
}));

export default useStyles;
