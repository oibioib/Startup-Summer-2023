import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  column: {
    flexGrow: 0,
  },

  filter: {
    position: 'relative',
    flexShrink: 0,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.sm,

    [theme.fn.largerThan('xs')]: {
      padding: theme.spacing.lg,
    },

    [theme.fn.largerThan('sm')]: {
      width: 315,
    },
  },

  search: {
    position: 'relative',
    overflow: 'hidden',
  },

  results: {
    gap: theme.spacing.md,
  },

  loading: {
    padding: 50,

    [theme.fn.largerThan('xs')]: {
      padding: 100,
    },

    [theme.fn.largerThan('lg')]: {
      padding: 150,
    },
  },
}));

export default useStyles;
