import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  iconHolder: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    padding: '0 0.938rem',
  },
  buttonHolder: {
    padding: '0 5px',
    width: '10.625rem',
    [breakpoints.down('sm')]: {
      width: '6.625rem',
      padding: 0,
    },
  },
  inputWrapper: {
    [breakpoints.up('lg')]: {
      backgroundColor: '#fff',
    },
  },
  input: {
    '&&': {
      paddingLeft: 50,
    },
  },
}));
