import { FC, memo } from 'react';
import { InputLabel } from '@ui';

// styles
import { useStyles } from './styles';

// types
export type FieldLabelProps = {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
};

export const FieldLabel: FC<FieldLabelProps> = memo((props: FieldLabelProps) => {
  const classes = useStyles({});
  const { label, required, ...otherProps } = props;

  return (
    <InputLabel {...otherProps}>
      <span>
        {label}
        {required && <span className={classes.required}>*</span>}
      </span>
    </InputLabel>
  );
});

FieldLabel.defaultProps = {
  required: false,
  disabled: false,
  error: false,
};
