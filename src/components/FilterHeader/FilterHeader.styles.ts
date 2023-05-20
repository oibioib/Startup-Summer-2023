import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: rem(28),
  },

  heading: {
    fontSize: theme.fontSizes.xl,
    lineHeight: theme.fontSizes.xl,
    fontWeight: 700,
  },

  button: {
    fontWeight: 500,
    color: theme.colors.gray[5],
    height: theme.fontSizes.xl,
    padding: 0,

    ['&:hover']: {
      color: theme.other.mainColorLight,
    },

    ['&:active']: {
      color: theme.other.mainColor,
    },
  },

  inner: {
    justifyContent: 'right',
  },

  icon: {
    width: rem(16),
    alignSelf: 'center',
    margin: 0,
    marginLeft: rem(4),
  },
}));

export default useStyles;
