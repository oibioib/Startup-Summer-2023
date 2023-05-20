import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  search: {
    input: {
      height: rem(48),
      paddingRight: rem(110),
    },
  },

  icon: {
    marginLeft: rem(4),
  },

  button: {
    height: rem(32),
    marginRight: theme.spacing.sm,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },
}));

export default useStyles;
