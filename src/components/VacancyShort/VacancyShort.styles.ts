import { createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    flexShrink: 0,
    borderRadius: theme.radius.lg,
    transition: '0.2s',

    padding: '23px 24px 20px 24px',

    ['&:hover']: {
      cursor: 'pointer',
      border: `1px solid ${theme.colors.gray[2]}`,
      boxShadow: theme.shadows.lg,
    },

    [`&:hover .${getStylesRef('title')}`]: {
      color: theme.other.mainColorDark,
    },
  },

  inner: {
    gap: 9,
  },

  title: {
    ref: getStylesRef('title'),
    fontWeight: 600,
    margin: 0,
    fontSize: theme.fontSizes.xl,
    lineHeight: '120%',
    color: theme.other.mainColor,
    transition: '0.5s',
  },

  description: {
    lineHeight: rem(16),
    gap: 13,
  },

  payment: {
    fontWeight: 600,
  },

  city: {
    gap: 7,
    marginTop: 1,
  },
}));

export default useStyles;
