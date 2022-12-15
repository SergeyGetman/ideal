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
    backgroundImage: 'linear-gradient(180deg, #33264b, #4696E0)',
    '& h1': {
      maxWidth: '60%',
    },
  },
  headerBg: {
    [breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderPng})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right 100px',
    },
  },
  container: {
    position: 'relative',
    padding: '30px 0',
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
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
  },

  supportMail: {
    textDecoration: 'underline',
    color: 'red',
  },

  listNumber: {
    color: 'red',
  },
}));
