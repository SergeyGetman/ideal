import { FC, memo, forwardRef } from 'react';
import { default as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { SvgIcon } from '../svgIcon';

// icons
import SpinnerIcon from '@svg_icons/spinner.svg';

// styles
import { useStyles } from './styles';

// types
export type IconButtonProps = MuiIconButtonProps & {
  iconSize?: number;
  iconColor?: string;
  glyph?: any;
  component?: any;
  to?: string;
  loading?: boolean;
};

export const IconButton: FC<IconButtonProps> = memo(
  forwardRef((props: IconButtonProps, ref) => {
    const classes = useStyles({});
    const { loading, disabled, iconSize, iconColor, glyph, children, ...otherProps } = props;

    return (
      <MuiIconButton ref={ref} classes={{ disabled: classes.disabled }} disabled={disabled || loading} {...otherProps}>
        {children || (
          <>
            {loading ? (
              <span className={classes.spinner}>
                <SvgIcon size={iconSize} glyph={SpinnerIcon} color={iconColor} />
              </span>
            ) : (
              <SvgIcon size={iconSize} glyph={glyph} color={iconColor} />
            )}
          </>
        )}
      </MuiIconButton>
    );
  }),
);

IconButton.defaultProps = {
  iconSize: 18,
  iconColor: 'inherit',
  loading: false,
  disabled: false,
};
