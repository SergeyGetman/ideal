import { FC, memo, forwardRef } from 'react';
import { default as MuiSwipeableDrawer, SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';

export const SwipeableDrawer: FC<SwipeableDrawerProps> = memo(
  forwardRef((props: SwipeableDrawerProps, ref) => {
    return <MuiSwipeableDrawer ref={ref} {...props} />;
  }),
);

SwipeableDrawer.defaultProps = {
  disableSwipeToOpen: true,
  transitionDuration: 200,
};
