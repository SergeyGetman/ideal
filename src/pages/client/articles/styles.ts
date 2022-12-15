import { makeStyles } from '@utils/styles';

// images
import HeaderPng from './images/header.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #652B75)',
    [breakpoints.up('lg')]: {
      '&:before': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${HeaderPng})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right calc(50% - 280px)',
        content: `''`,
      },
    },
  },
  container: {
    position: 'relative',
    padding: '1.875rem 0',
    [breakpoints.up('md')]: {
      padding: '1rem 0',
    },
    [breakpoints.up('lg')]: {
      padding: '3.125rem 0',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 428,
        background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
        content: `''`,
      },
    },
  },
  content: {
    position: 'relative',
    color: '#656C91',
  },
}));
