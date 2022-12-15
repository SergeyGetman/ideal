import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root_style: {
    color: '#515264',
    fontFamily: 'Euclid Circular B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    marginLeft: '10px',
    [breakpoints.up('md')]: {
      padding: '0 12px',
      flexDirection: 'row',
    },
  },
  root_password: {
    color: 'red',
    fontFamily: 'Euclid Circular B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '14px',
    marginTop: '20px',
    textAlign: 'center',
  },
  root_button: {
    color: 'red',
    backgroundColor: 'white',
  },
}));
