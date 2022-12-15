import { FC, memo, useCallback, forwardRef } from 'react';
import clsx from 'clsx';
import { default as Grid } from '@mui/material/Grid';
import { Link, LinkProps } from '../link';
import { SvgIcon } from '../svgIcon';

// styles
import { useStyles } from './styles';

// types
export type PseudolinkProps = LinkProps & {
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
  iconSize?: number;
  className?: string;
  dashed?: boolean;
};

export const Pseudolink: FC<PseudolinkProps> = memo(
  forwardRef((props: PseudolinkProps, ref) => {
    const { disabled, dashed, color, children, className, startIcon, endIcon, iconSize, onClick } = props;
    const classes = useStyles({});

    const handleClick = useCallback(
      (event) => {
        event.stopPropagation();
        onClick(event);
      },
      [onClick],
    );

    return (
      <Link
        ref={ref}
        component="span"
        color={color}
        className={clsx(className, classes.root, disabled && classes.disabled)}
        onClick={handleClick}
      >
        <Grid container component="span" spacing={1}>
          {startIcon && (
            <Grid item component="span">
              <SvgIcon glyph={startIcon} size={iconSize} />
            </Grid>
          )}
          <Grid item component="span">
            <span className={clsx(dashed && classes.dashed)}>{children}</span>
          </Grid>
          {endIcon && (
            <Grid item component="span">
              <SvgIcon glyph={endIcon} size={iconSize} />
            </Grid>
          )}
        </Grid>
      </Link>
    );
  }),
);

Pseudolink.defaultProps = {
  color: 'inherit',
  iconSize: 14,
  startIcon: null,
  endIcon: null,
  disabled: false,
  className: null,
  dashed: false,
};
