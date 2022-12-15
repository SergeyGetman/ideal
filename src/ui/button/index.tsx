import { FC, memo, forwardRef } from 'react';
import clsx from 'clsx';
import { default as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { SvgIcon } from '../svgIcon';

// styles
import { useStyles } from './styles';

// types
export type ButtonProps = MuiButtonProps & {
  component?: any;
  to?: string;
  target?: string;
  loading?: boolean;
};

export const Button: FC<ButtonProps> = memo(
  forwardRef((props: ButtonProps, ref) => {
    const classes = useStyles({});
    const { loading, disabled, endIcon, startIcon, children, ...otherProps } = props;

    return (
      <MuiButton
        ref={ref}
        {...otherProps}
        classes={{
          startIcon: classes.startIcon,
          endIcon: classes.endIcon,
        }}
        disabled={disabled || loading}
        className={clsx(loading && classes.stateLoading)}
        endIcon={endIcon ? <SvgIcon size={16} glyph={endIcon} /> : null}
        startIcon={startIcon ? <SvgIcon size={16} glyph={startIcon} /> : null}
      >
        <span className={classes.label}>{children}</span>
        {loading && (
          <span className={classes.dots}>
            <span className={classes.dot} />
            <span className={classes.dot} />
            <span className={classes.dot} />
          </span>
        )}
      </MuiButton>
    );
  }),
);
