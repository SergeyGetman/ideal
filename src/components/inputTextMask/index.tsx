import { FieldLabel } from '@components/fieldLabel';
import { FormControl, FormHelperText } from '@ui';
import { InputMask } from '../inputMask';

export const InputTextMask = (props) => {
  const { error, disabled, label, required, helperText, autoFocus, inputRef, value, ...otherProps } = props;
  return (
    <FormControl disabled={disabled} fullWidth error={!!error}>
      {label && <FieldLabel disabled={disabled} label={label} required={required} error={!!error} />}
      <InputMask
        value={value}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        error={!!error}
        inputRef={inputRef}
        {...otherProps}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
