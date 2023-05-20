import { MantineThemeOverride, rem } from '@mantine/core';
import { baseColors, blueColors, grayColors } from '@theme/colors';

import components from './components';

const theme: MantineThemeOverride = {
  fontFamily: `'Inter', sans-serif`,
  white: baseColors.white,
  black: baseColors.black,
  colors: {
    blue: blueColors,
    gray: grayColors,
  },
  primaryShade: 5,
  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(10),
    lg: rem(12),
    xl: rem(16),
  },
  headings: {
    sizes: {
      h1: {
        fontWeight: 700,
        fontSize: rem(28),
        lineHeight: rem(34),
      },
    },
  },
  components,
  other: {
    mainColor: blueColors[5],
    mainColorLight: blueColors[4],
    mainColorDark: blueColors[6],
  },
  globalStyles: () => ({
    ul: {
      listStyle: 'none',
    },
  }),
};

export default theme;
