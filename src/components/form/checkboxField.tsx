import { FC, memo } from 'react';
import { Field } from 'formik';
import { CheckboxLabel, CheckboxLabelProps } from '@ui';

export type CheckboxFieldProps = {
  name: string;
} & CheckboxLabelProps;

export const CheckboxField: FC<CheckboxFieldProps> = memo((props: CheckboxFieldProps) => {
  const { name, ...otherProps } = props;

  return <Field name={name}>{({ field }) => <CheckboxLabel checked={field.value} {...field} {...otherProps} />}</Field>;
});
