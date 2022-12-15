import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  caption: {
    paddingTop: 0,
    display: 'inline-flex',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: 'rgba(20, 58, 80, 0.8)',
    fontSize: '1rem',
    fontFamily: 'Euclid Circular B',
    lineHeight: '1.25rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    [breakpoints.up('xs')]: {
      padding: '1.25rem 1rem',
    },
    '&:before': {
      position: 'absolute',
      top: 0,
      width: '90vw',
      height: 0,
      backgroundColor: 'rgba(20, 58, 80, 0.15)',
      content: `''`,
      [breakpoints.down('sm')]: {
        height: 1,
      },
    },
    '&:after': {
      position: 'absolute',
      top: '3.76rem',
      width: '90vw',
      height: 0,
      backgroundColor: 'rgba(20, 58, 80, 0.15)',
      content: `''`,
      [breakpoints.down('sm')]: {
        height: 1,
      },
    },
  },
  iconHolder: {
    marginLeft: 8,
    fontSize: 0,
  },
  content: {
    padding: '1.25rem',
    minWidth: '15rem',
  },
  item: {
    '& + &': {
      borderTop: '1px solid rgba(0,0,0,0.1)',
    },
  },
  option: {
    padding: '0.625rem 0rem',
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
}));
