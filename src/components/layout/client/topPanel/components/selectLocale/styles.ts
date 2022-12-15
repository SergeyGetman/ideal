import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  caption: {
    display: 'inline-flex',
    cursor: 'pointer',
    color: 'inherit',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: '#fff',
    },
  },
  iconHolder: {
    marginRight: 8,
    fontSize: 0,
  },
  icon: {
    width: 20,
  },
  arrow: {
    display: 'inline-block',
    marginLeft: 4,
    border: '4px solid transparent',
    borderBottom: 'none',
    borderTopColor: 'currentColor',
  },
  content: {
    minWidth: 240,
    padding: 20,
  },
  item: {
    '& + &': {
      borderTop: '1px solid rgba(0,0,0,0.1)',
    },
  },
  option: {
    padding: '10px 0',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: 'inherit',
    cursor: 'pointer',
  },
  optionCurrent: {
    fontWeight: 'bold',
  },
  currentLocaleHolder: {
    fontWeight: 400,
    fontSize: '1rem',
    fontFamily: 'Euclid Circular B',
    [breakpoints.down('lg')]: {
      fontSize: '0.8rem',
    },
  },
}));
