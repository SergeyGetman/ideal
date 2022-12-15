import { FC, memo } from 'react';
import { Field } from 'formik';
import { InputPassword } from '@components/inputPassword';

// types
export type TextPasswordFieldProps = {
  name: string;
  showError?: boolean;
  showHelper?: boolean;
} & any;

export const TextPasswordField: FC<TextPasswordFieldProps> = memo((props: TextPasswordFieldProps) => {
  const { name, showError, showHelper, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <InputPassword
          error={showError && meta.touched && !!meta.error}
          helperText={showHelper && meta.touched && meta.error}
          {...field}
          {...otherProps}
        />
      )}
    </Field>
  );
});

TextPasswordField.defaultProps = {
  showError: true,
  showHelper: true,
};
