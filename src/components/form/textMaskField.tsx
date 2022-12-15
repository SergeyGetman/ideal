import { FC, memo, useCallback, useEffect } from 'react';
import { Field, useField, useFormikContext } from 'formik';
import { FormHelperText } from '@ui';
import { InputTextMask } from '@components/inputTextMask';
import { sleep } from '@utils/common';

// types
export type TextMaskFieldProps = {
  name: string;
  showError?: boolean;
  showHelper?: boolean;
  autoFocus?: boolean;
} & any;

export const TextMaskField: FC<TextMaskFieldProps> = memo((props: TextMaskFieldProps) => {
  const { name, showError, showHelper, autoFocus, inputRef, value, onChange, helperText, ...otherProps } = props;
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const handleChange = useCallback(
    (event, value) => {
      setFieldValue(name, value);
      !!onChange && onChange(value);
      // @ts-ignore
      sleep(0).then(() => document.activeElement.blur());
    },
    [name],
  );

  return (
    <Field name={name} autoFocus={autoFocus}>
      {({ field, meta }) => (
        <InputTextMask
          onChange={handleChange}
          value={value}
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

TextMaskField.defaultProps = {
  showError: true,
  showHelper: true,
  autoFocus: false,
};
