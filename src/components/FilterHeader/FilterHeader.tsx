import { CrossIcon } from '@assets';
import { APP_SETTINGS } from '@constants';
import { Button, Group, Text } from '@mantine/core';

import useStyles from './FilterHeader.styles';

const FilterHeader = ({ reset }: { reset: () => void }) => {
  const { classes } = useStyles();

  return (
    <Group grow className={classes.container}>
      <Text className={classes.heading}>{APP_SETTINGS.FORM.HEADING}</Text>
      <Button
        variant="white"
        compact
        rightIcon={<CrossIcon />}
        onClick={reset}
        classNames={{ root: classes.button, inner: classes.inner, rightIcon: classes.icon }}
      >
        {APP_SETTINGS.FORM.BUTTONS.CLEAR_ALL}
      </Button>
    </Group>
  );
};

export default FilterHeader;
