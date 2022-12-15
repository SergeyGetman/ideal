import { FC, memo, forwardRef } from 'react';
import { default as MuiButtonBase, ButtonBaseProps as MuiButtonBaseProps } from '@mui/material/ButtonBase';

// types
export type ButtonBaseProps = MuiButtonBaseProps & {
  component?: any;
  to?: string;
};

export const ButtonBase: FC<ButtonBaseProps> = memo(
  forwardRef((props: ButtonBaseProps, ref) => {
    return <MuiButtonBase ref={ref} {...props} />;
  }),
);
