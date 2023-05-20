import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles({
  text: {
    lineHeight: '140%',

    br: {
      display: 'none',
    },

    ul: {
      listStyleType: 'disc',
      paddingLeft: rem(26),

      li: {
        margin: 0,

        p: {
          margin: 0,
        },

        ul: {
          marginTop: rem(10),
        },
      },
    },

    ['p > b']: {
      fontSize: rem(20),
      lineHeight: rem(20),
      fontWeight: 700,
    },

    ['& > b']: {
      fontSize: rem(20),
      lineHeight: rem(20),
      fontWeight: 700,
    },
  },
});

export default useStyles;
