import { FC, memo, forwardRef, useMemo } from 'react';
import clsx from 'clsx';
import { default as FormControlLabel } from '@mui/material/FormControlLabel';
import { default as Checkbox, CheckboxProps } from '@mui/material/Checkbox';

// styles
import { useStyles } from './styles';

// types
export type CheckboxLabelProps = {
  label?: any;
  fullWidth?: boolean;
} & CheckboxProps;

export const CheckboxLabel: FC<CheckboxLabelProps> = memo(
  forwardRef((props: CheckboxLabelProps, ref) => {
    const classes = useStyles({});
    const { label, fullWidth, required, ...otherProps } = props;
    const icon = useMemo(() => <span className={classes.icon} />, []);
    const checkedIcon = useMemo(() => <span className={clsx(classes.icon, classes.checkedIcon)} />, []);

    return (
      <FormControlLabel
        ref={ref}
        classes={{ root: fullWidth ? classes.fullWidth : null }}
        control={
          <Checkbox
            disableRipple
            className={classes.checkbox}
            checkedIcon={checkedIcon}
            icon={icon}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...otherProps}
          />
        }
        label={
          <div className={classes.label}>
            {label}
            {required && ' *'}
          </div>
        }
      />
    );
  }),
);

CheckboxLabel.defaultProps = {
  fullWidth: false,
};
