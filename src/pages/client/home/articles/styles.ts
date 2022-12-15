import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 0,
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 20,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  link: {
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 16,
    },
    [breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
  listHolder: {
    overflow: 'hidden',
  },
}));
