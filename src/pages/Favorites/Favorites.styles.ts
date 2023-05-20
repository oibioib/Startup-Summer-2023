import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    padding: 0,

    [theme.fn.largerThan('md')]: {
      padding: 0,
    },
  },

  inner: {
    width: '100%',
    gap: theme.spacing.md,
  },

  button: {
    fontWeight: 600,
    fontSize: 14,
    borderRadius: theme.radius.md,
  },
}));

export default useStyles;
