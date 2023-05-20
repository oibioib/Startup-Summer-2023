import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  option: {
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
    lineHeight: rem(20),
    borderRadius: theme.radius.sm,
    marginBottom: rem(4),
    padding: `${rem(8)} ${rem(12)}`,
    transition: 'background-color 0.15s',

    ['&:last-of-type']: {
      marginBottom: 0,
    },

    '&[data-hovered]': {
      backgroundColor: theme.colors.blue[1],
    },

    '&[data-selected]': {
      backgroundColor: theme.other.mainColor,
      fontWeight: 500,
      color: theme.white,
    },
  },
}));

export default useStyles;
