import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '-0.625rem 1rem 0 0rem',
    paddingTop: '1rem',
    [breakpoints.down('sm')]: {
      margin: 0,
      justifyContent: 'center',
    },
  },
  item: {
    position: 'relative',
    color: 'rgba(20, 58, 80, 0.8)',
    padding: '0.625rem 0 0 0.625rem',
    '&:before': {
      padding: '0',
      position: 'absolute',
      left: 0,
      top: '50%',
      width: 1,
      height: '1.25rem',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(20, 58, 80, 0.15)',
      content: `''`,
      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    '&:first-child::before': {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      padding: 0,
      '& + &': {
        '&:before': {
          top: '50%',
        },
      },
    },
    [breakpoints.up('xs')]: {
      padding: 0,
      '& + &': {
        '&:before': {
          top: '50%',
        },
      },
    },
  },
  caption: {
    fontFamily: 'Euclid Circular B',
    fontStyle: 'normal',
    fontWeight: 400,
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.45rem 0.95rem',
    borderRadius: 5,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    color: 'rgba(20, 58, 80, 0.8)',
    [breakpoints.up('lg')]: {
      backgroundColor: 'transparent',
    },
  },
  captionActive: {
    backgroundColor: '#0AA86F',
    color: '#fff',
  },
}));
