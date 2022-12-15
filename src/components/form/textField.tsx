import { FC, memo } from 'react';
import { Field } from 'formik';
import { InputText } from '@components/inputText';

// types
export type TextFieldProps = {
  name: string;
  showError?: boolean;
  showHelper?: boolean;
} & any;

export const TextField: FC<TextFieldProps> = memo((props: TextFieldProps) => {
  const { name, showError, showHelper, inputRef, disabled, value, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <InputText
          value={value}
          disabled={false}
          inputRef={inputRef}
          error={showError && meta.touched && !!meta.error}
          helperText={showHelper && meta.touched && meta.error}
          {...field}
          {...otherProps}
        />
      )}
    </Field>
  );
});

TextField.defaultProps = {
  showError: true,
  showHelper: true,
};
