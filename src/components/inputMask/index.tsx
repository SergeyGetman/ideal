/* eslint @typescript-eslint/no-unused-vars: 'off' */

import { forwardRef } from 'react';
import { default as TextMask } from 'react-text-mask';
import { InputBase } from '@ui';

const MaskedInput = forwardRef((props, ref) => {
  // @ts-ignore
  const { size, inputRef, placeholderChar, ...otherProps } = props;

  return <TextMask {...otherProps} guide={false} placeholderChar={placeholderChar || '\u2000'} />;
});

export const InputMask = (props) => {
  const {
    size,
    value,
    required,
    startAdornment,
    disabled,
    classes,
    endAdornment,
    error,
    inputProps,
    inputRef,
    ...otherProps
  } = props;
  return (
    <InputBase
      value={value}
      error={!!error}
      disabled={disabled}
      size={size}
      required={required}
      classes={classes}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      inputComponent={MaskedInput}
      inputProps={{ ...inputProps, ...otherProps }}
      ref={inputRef}
    />
  );
};
