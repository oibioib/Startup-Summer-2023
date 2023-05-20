import { ReactNode } from 'react';

import { EmptyImage } from '@assets';
import { APP_SETTINGS } from '@constants';
import { Center, Stack, Text } from '@mantine/core';

import useStyles from './Empty.styles';

const Empty = ({ children }: { children?: ReactNode }) => {
  const { classes } = useStyles();
  return (
    <Center component={Stack} className={classes.container}>
      <EmptyImage className={classes.image} />
      <Text className={classes.text}>{APP_SETTINGS.ERRORS.EMPTY}</Text>
      {children}
    </Center>
  );
};

export default Empty;
