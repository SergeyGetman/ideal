import { FC, memo } from 'react';
import { Field } from 'formik';
import { InputTextNumber } from '@components/inputTextNumber';

// types
export type TextNumberFieldProps = {
  name: string;
  showError?: boolean;
  showHelper?: boolean;
} & any;

export const TextNumberField: FC<TextNumberFieldProps> = memo((props: TextNumberFieldProps) => {
  const { name, showError, showHelper, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <InputTextNumber
          error={showError && meta.touched && !!meta.error}
          helperText={showHelper && meta.touched && meta.error}
          {...field}
          {...otherProps}
        />
      )}
    </Field>
  );
});

TextNumberField.defaultProps = {
  showError: true,
  showHelper: true,
};
