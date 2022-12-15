import { FC, memo, forwardRef } from 'react';
import clsx from 'clsx';
import { default as MuiSvgIcon } from '@mui/material/SvgIcon';

// types
export type GlyphProps = any;

export type SvgIconProps = {
  className?: string;
  color?: string;
  size?: any;
  glyph?: GlyphProps;
};

// styles
import { useStyles } from './styles';

export const SvgIcon: FC<SvgIconProps> = memo(
  forwardRef((props: SvgIconProps, ref) => {
    const { className, color, size, glyph } = props;
    const classes = useStyles({});

    return (
      <MuiSvgIcon
        ref={ref}
        component={glyph}
        className={clsx(classes.icon, className)}
        style={{
          color,
          fontSize: size,
        }}
      />
    );
  }),
);

SvgIcon.defaultProps = {
  size: null,
};
