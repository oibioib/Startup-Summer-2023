import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icons: {
    gap: 9,
  },

  icon: {
    width: rem(9),
    height: 'auto',
    cursor: 'pointer',
    color: theme.colors.gray[5],

    ['&:hover']: {
      color: theme.other.mainColorLight,
    },

    ['&:active']: {
      color: theme.other.mainColor,
    },
  },

  right_section: {
    width: 36,
  },
}));

export default useStyles;
