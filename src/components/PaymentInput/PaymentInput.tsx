import { useRef } from 'react';

import { DownIcon, UpIcon } from '@assets';
import { useFormContext } from '@components/FilterForm/FilterForm';
import { NumberInput, NumberInputHandlers, Stack } from '@mantine/core';

import useStyles from './PaymentInput.styles';

type PaymentInput = {
  inputProp: string;
  label?: string;
  placeholder?: string;
  dataElem: string;
};

const PaymentInput = ({ inputProp, label, placeholder, dataElem }: PaymentInput) => {
  const form = useFormContext();
  const { classes } = useStyles();
  const handlers = useRef<NumberInputHandlers>();

  return (
    <NumberInput
      {...form.getInputProps(inputProp)}
      handlersRef={handlers}
      label={label}
      hideControls
      placeholder={placeholder}
      type="number"
      size="md"
      min={0}
      classNames={{ rightSection: classes.right_section }}
      rightSection={
        <Stack className={classes.icons}>
          <UpIcon className={classes.icon} onClick={() => handlers.current?.increment()} />
          <DownIcon className={classes.icon} onClick={() => handlers.current?.decrement()} />
        </Stack>
      }
      data-elem={dataElem}
    />
  );
};

export default PaymentInput;
