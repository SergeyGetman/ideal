import { FC, memo, forwardRef } from 'react';
import { default as MuiLink, LinkProps as MuiLinkProps } from '@mui/material/Link';

// types
export type LinkProps = MuiLinkProps & {
  component?: any;
  to?: string;
};

export const Link: FC<LinkProps> = memo(
  forwardRef((props: LinkProps, ref) => {
    return <MuiLink ref={ref} {...props} />;
  }),
);
