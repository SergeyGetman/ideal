import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 400,
    margin: '0 auto',
    fontWeight: 600,
    fontSize: '1.125rem',
    marginTop: '3rem',
    position: 'relative',
    [breakpoints.down('md')]: {
      width: '18rem',
    },
  },
}));
