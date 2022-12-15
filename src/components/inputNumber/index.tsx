import { forwardRef } from 'react';
import NumberFormat from 'react-number-format';
import { isNumber } from '@utils/common';
import { InputBase } from '@ui';

const NumberInput = forwardRef((props, ref) => {
  // @ts-ignore
  const { name, onChange, ...otherProps } = props;
  return (
    <NumberFormat
      {...otherProps}
      name={name}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: isNumber(values.floatValue) ? values.floatValue : values.value,
          },
        });
      }}
    />
  );
});

export const InputNumber = (props) => {
  const {
    classes,
    inputRef,
    size,
    required,
    value,
    startAdornment,
    endAdornment,
    disabled,
    error,
    inputProps,
    ...otherProps
  } = props;
  return (
    <InputBase
      inputRef={inputRef}
      value={value}
      error={!!error}
      classes={classes}
      disabled={disabled}
      size={size}
      required={required}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      inputComponent={NumberInput}
      inputProps={{ ...inputProps, ...otherProps }}
    />
  );
};

InputNumber.defaultProps = {
  prefix: '',
  suffix: '',
  format: null,
  mask: null,
  thousandSeparator: null, // '\u2009'
  isNumericString: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: true,
  allowNegative: false,
  decimalSeparator: '.',
  decimalScale: 0,
  allowedDecimalSeparators: ['.', ','],
};
