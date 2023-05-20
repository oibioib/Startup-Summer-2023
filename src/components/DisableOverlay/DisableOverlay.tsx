import { Box } from '@mantine/core';

import useStyles from './DisableOverlay.styles';

const DisableOverlay = () => {
  const { classes } = useStyles();

  return <Box className={classes.box} />;
};

export default DisableOverlay;
