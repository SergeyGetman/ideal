import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  listHolder: {
    '& + &': {
      marginTop: 32,
      paddingTop: 32,
      borderTop: `1px solid ${alpha('#515368', 0.5)}`,
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-20px 0 0 -40px',
    [breakpoints.up('md')]: {
      margin: '-30px 0 0 -60px',
    },
    [breakpoints.up('lg')]: {
      margin: '-50px 0 0 -80px',
    },
  },
  item: {
    padding: '20px 0 0 40px',
    [breakpoints.up('md')]: {
      padding: '30px 0 0 60px',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0 0 80px',
    },
  },
  imageHolder: {
    fontSize: 0,
  },
}));
