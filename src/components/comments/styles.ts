import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: '#EEF3FA',
    borderRadius: 10,
    padding: 25,
  },
  wrapper: {
    maxWidth: 780,
    margin: '0 auto',
  },
  listHolder: {
    marginTop: 20,
  },
  formHolder: {
    marginTop: 8,
    background: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  toggleButton: {
    color: '#D41841',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    [breakpoints.up('md')]: {
      fontSize: 18,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
}));
