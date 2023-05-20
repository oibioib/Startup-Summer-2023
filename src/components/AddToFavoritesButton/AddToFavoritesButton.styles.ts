import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    padding: 0,
    width: rem(24),
    minHeight: 'unset',
    minWidth: 'unset',
    height: 'auto',

    ['&:hover']: {
      color: theme.other.mainColor,
    },

    ['&:active svg.star']: {
      fill: theme.other.mainColor,
    },
  },

  icon_active: {
    color: theme.other.mainColor,

    ['& svg.star']: {
      fill: theme.other.mainColor,
    },

    ['&:hover svg.star']: {
      fill: theme.other.mainColor,
    },
  },
}));

export default useStyles;
