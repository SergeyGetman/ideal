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
    backgroundImage: 'linear-gradient(180deg, #33264b, #dd3355)',
    [breakpoints.up('md')]: {
      '&:before': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${HeaderPng})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 80%',
        backgroundPosition: 'bottom right 1rem',
        content: `''`,
        [breakpoints.up('lg')]: {
          backgroundSize: 'auto 65%',
        },
        [breakpoints.up('xl')]: {
          backgroundSize: 'auto',
          backgroundPosition: 'bottom right calc(50% - 270px)',
        },
      },
    },
  },
  container: {
    position: 'relative',
    padding: '30px 0',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 428,
      background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
      content: `''`,
    },
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
    },
  },
  content: {
    position: 'relative',
    fontSize: 16,
    [breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  feedbackContainer: {
    display: 'none',
  },
}));
