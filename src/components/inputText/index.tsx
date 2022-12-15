import { FieldLabel } from '@components/fieldLabel';
import { InputBase, FormControl, FormHelperText } from '@ui';

export const InputText = (props) => {
  const { error, disabled, label, required, helperText, ...otherProps } = props;
  return (
    <FormControl fullWidth error={!!error} disabled={disabled}>
      {!!label && <FieldLabel disabled={disabled} label={label} required={required} error={!!error} />}
      <InputBase required={required} disabled={disabled} error={!!error} {...otherProps} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

InputText.defaultProps = {
  error: false,
  disabled: false,
  label: '',
  required: false,
  helperText: '',
};
