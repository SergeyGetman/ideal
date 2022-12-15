import { FC, memo, forwardRef } from 'react';
import { default as MuiTypography, TypographyProps } from '@mui/material/Typography';

// types
type TextProps = TypographyProps & {
  component?: any;
};

export const Text: FC<TextProps> = memo(
  forwardRef((props: TextProps, ref) => {
    return <MuiTypography ref={ref} {...props} />;
  }),
);
