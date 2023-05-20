import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    padding: 0,

    [theme.fn.largerThan('md')]: {
      padding: 0,
    },
  },

  inner: {
    width: '100%',
    gap: theme.spacing.lg,
  },

  block: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.lg,
  },

  short_description: {
    gap: theme.spacing.xs,
  },

  payment: {
    fontSize: 20,
    lineHeight: rem(20),
    gap: 13,
  },

  payment_text: {
    fontWeight: 700,
  },

  location: {
    gap: 17,
  },
}));

export default useStyles;
