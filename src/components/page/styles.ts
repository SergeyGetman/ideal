import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  page: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 15px',
    [breakpoints.up('lg')]: {
      padding: '0 20px',
    },
  },
}));
