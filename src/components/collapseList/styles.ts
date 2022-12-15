import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  item: {
    '& + &': {
      marginTop: '1.25rem',
      paddingTop: '1.25rem',
      borderTop: '1px solid #F5F6FA',
    },
  },
  collapsed: {
    '& $button': {
      color: '#E33355',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    textAlign: 'left',
    fontWeight: 500,
    fontSize: '1.125rem',
    [breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
    [breakpoints.down('md')]: {
      fontSize: '0.875rem',
    },
  },
  peak: {
    fontSize: 0,
    marginRight: '0.938rem',
  },
  caption: {
    flex: 1,
  },
  control: {
    marginLeft: '0.938rem',
  },
  text: {
    marginTop: '1.25rem',
    fontSize: '1rem',
    padding: '0rem 1.8rem',
    color: '#656C91',
    [breakpoints.down('lg')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.down('md')]: {
      fontSize: '0.75rem',
    },
  },
}));
