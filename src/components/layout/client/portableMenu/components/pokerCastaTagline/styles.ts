import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    fontSize: '2.3vw',
    [breakpoints.down('sm')]: {
      fontSize: '3vw',
    },
    [breakpoints.up('xs')]: {
      fontSize: '2.5vw',
    },
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#fff',
    margin: 0,
  },
  text: {
    fontSize: '1.8vw',
    [breakpoints.down('sm')]: {
      fontSize: '2.5vw',
    },
    [breakpoints.up('xs')]: {
      fontSize: '2vw',
    },
    color: '#A0A6C2',
    margin: 0,
  },
}));
