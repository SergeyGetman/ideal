import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
  },
  infoHolder: {
    margin: '0 auto 20px',
    [breakpoints.up('lg')]: {
      maxWidth: 780,
    },
    [breakpoints.up('xl')]: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  contentHolder: {
    margin: '0 auto',
    [breakpoints.up('lg')]: {
      maxWidth: 780,
    },
  },
}));
