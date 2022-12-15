import { FC, memo, forwardRef } from 'react';
import clsx from 'clsx';
import { default as MuiCircularProgress, CircularProgressProps } from '@mui/material/CircularProgress';

// styles
import { useStyles } from './styles';

// types
type SpinnerProps = CircularProgressProps & {
  fixed?: boolean;
  absolute?: boolean;
};

export const Spinner: FC<SpinnerProps> = memo(
  forwardRef((props: SpinnerProps, ref) => {
    const classes = useStyles({});
    const { fixed, absolute, ...otherProps } = props;

    return (
      <span
        className={clsx(
          classes.spinnerHolder,
          (fixed || absolute) && classes.cover,
          fixed && classes.fixed,
          absolute && classes.absolute,
        )}
      >
        <MuiCircularProgress ref={ref} {...otherProps} />
      </span>
    );
  }),
);

Spinner.defaultProps = {
  fixed: false,
  absolute: false,
};
