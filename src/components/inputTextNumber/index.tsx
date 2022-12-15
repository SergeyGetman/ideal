import { FieldLabel } from '@components/fieldLabel';
import { FormControl, FormHelperText } from '@ui';
import { InputNumber } from '../inputNumber';

export const InputTextNumber = (props) => {
  const { error, disabled, label, required, helperText, ...otherProps } = props;

  return (
    <FormControl disabled={disabled} fullWidth error={!!error}>
      {label && <FieldLabel label={label} disabled={disabled} required={required} error={!!error} />}
      <InputNumber required={required} error={!!error} disabled={disabled} {...otherProps} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
