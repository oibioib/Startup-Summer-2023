import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.2),
    zIndex: 100,
    borderRadius: theme.radius.md,
  },
}));

export default useStyles;
