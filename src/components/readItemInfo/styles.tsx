import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    color: '#787E9F',
    [breakpoints.up('xl')]: {
      paddingLeft: 24,
      padding: '1px 0 0 24px',
      margin: '4px 0',
      '&:before': {
        position: 'absolute',
        top: '0.5em',
        left: 0,
        width: 16,
        height: 1,
        opacity: 0.5,
        backgroundColor: 'currentColor',
        content: `''`,
      },
    },
  },
  date: {
    fontSize: 14,
    margin: 0,
  },
  actiity: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 14,
  },
  actiityIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    margin: '-16px 0 0 -16px',
    [breakpoints.up('xl')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  item: {
    padding: '16px 0 0 16px',
  },
}));
