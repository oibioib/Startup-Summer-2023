import { ButtonStylesParams, rem } from '@mantine/core';
import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme';

import { baseColors } from './colors';

const components: MantineThemeComponents = {
  AppShell: {
    styles: (theme) => ({
      root: {
        padding: 0,
        backgroundColor: baseColors.background,
      },

      main: {
        paddingLeft: 0,
        paddingRight: 0,

        [theme.fn.smallerThan('xl')]: {
          paddingTop: 'var(--mantine-header-height)',
        },
      },
    }),
  },
  Container: {
    defaultProps: {
      sizes: {
        xs: 540,
        sm: 773,
        md: 960,
        lg: 1148,
        xl: 1320,
      },
      size: 'lg',
    },
    styles: (theme) => ({
      root: {
        padding: rem(12),

        [theme.fn.largerThan('md')]: {
          padding: rem(16),
        },
      },
    }),
  },
  Header: {
    styles: {
      root: {
        borderBottom: 'none',
        transition: '0.3s',
      },
    },
  },
  Paper: {
    styles: (theme) => ({
      root: {
        border: `1px solid ${theme.colors.gray[2]}`,
      },
    }),
  },
  Button: {
    styles: (theme, params: ButtonStylesParams, { variant }) => ({
      root: {
        transition: '0.2s',

        ['&:hover']: {
          backgroundColor: variant === 'filled' ? theme.other.mainColorLight : undefined,
        },

        ['&:active']: {
          backgroundColor: variant === 'filled' ? theme.other.mainColorDark : undefined,
        },
      },
    }),
  },
  TextInput: {
    styles: (theme) => ({
      root: {
        input: {
          borderColor: theme.colors.gray[2],
          transition: '0.2s',

          ['&:hover']: {
            borderColor: theme.other.mainColor,
          },
        },
      },
    }),
  },
  Select: {
    styles: (theme) => ({
      root: {
        input: {
          fontSize: theme.fontSizes.sm,
          paddingLeft: theme.spacing.xs,

          ['&:hover']: {
            borderColor: theme.other.mainColor,
          },
        },

        label: {
          fontWeight: 700,
          lineHeight: rem(19),
          color: theme.black,
          marginBottom: rem(8),
        },
      },
    }),
  },
  NumberInput: {
    styles: (theme) => ({
      root: {
        input: {
          fontSize: theme.fontSizes.sm,
          paddingLeft: theme.spacing.xs,

          ['&:hover']: {
            borderColor: theme.other.mainColor,
          },
        },

        label: {
          fontWeight: 700,
          lineHeight: rem(19),
          color: theme.black,
          marginBottom: rem(8),
        },
      },
    }),
  },
};

export default components;
