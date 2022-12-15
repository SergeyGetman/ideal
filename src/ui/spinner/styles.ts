import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  spinnerHolder: {
    textAlign: 'center',
    lineHeight: 1,
  },
  cover: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  absolute: {
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
  },
}));
