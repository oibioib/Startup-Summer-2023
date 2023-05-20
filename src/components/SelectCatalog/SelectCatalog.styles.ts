import { createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    margin: 0,
    width: '100%',

    [`& div[aria-expanded="true"] .${getStylesRef('right_section')}`]: {
      color: theme.other.mainColor,
      transform: 'rotate(180deg)',
    },
  },

  right_section: {
    ref: getStylesRef('right_section'),
    color: theme.colors.gray[5],
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s',
    pointerEvents: 'none',
    width: rem(48),
  },

  dropdown: {
    height: '100%',
    maxHeight: rem(225),
  },
}));

export default useStyles;
