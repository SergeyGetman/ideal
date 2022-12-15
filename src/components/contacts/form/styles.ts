import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    padding: '35px 40px 40px',
    background: '#fff',
    boxShadow: '0px 30px 80px #E4EBF5',
    borderRadius: 10,
    [breakpoints.only('sm')]: {
      marginTop: '31px',
      height: '512px',
    },
    [breakpoints.only('md')]: {
      height: '558px',
    },
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));
