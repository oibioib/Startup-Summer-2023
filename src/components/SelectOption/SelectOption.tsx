import { forwardRef } from 'react';

import useStyles from './SelectOption.styles';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}

const SelectOption = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, ...others }: ItemProps, ref) => {
    const { classes } = useStyles();

    return (
      <div ref={ref} {...others} className={classes.option}>
        <span>{label}</span>
      </div>
    );
  }
);

export default SelectOption;
