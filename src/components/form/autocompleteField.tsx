/* eslint @typescript-eslint/no-unused-vars: 'off' */

import { useCallback, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { sleep } from '@utils/common';
import { Autocomplete } from '@components/autocomplete';

export const AutocompleteField = (props) => {
  const { name, showError, showHelper, initialValue, onChange, options, value, ...otherProps } = props;
  const [field, meta] = useField(name);
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

  useEffect(() => {
    if (initialValue && !field.value) {
      const country = options.find((c) => c.code === initialValue);
      if (country) handleChange(null, country);
    }
  }, [initialValue, options]);

  const handleBlurField = () => {
    !meta.touched && sleep(0).then(() => setFieldTouched(name, true, true));
  };

  return (
    <Autocomplete
      options={options}
      error={showError && meta.touched && !!meta.error}
      helperText={showHelper && meta.touched && meta.error}
      value={field.value}
      onChange={handleChange}
      onBlur={handleBlurField}
      {...otherProps}
    />
  );
};

AutocompleteField.defaultProps = {
  showError: true,
  showHelper: true,
};
