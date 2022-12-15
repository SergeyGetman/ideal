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
    backgroundImage: 'linear-gradient(180deg, #33264b, #1895bd)',
    [breakpoints.down('lg')]: {
      paddingTop: 10,
    },
    [breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  headerBg: {
    backgroundImage: `url(${HeaderPng})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right 50px',
    [breakpoints.down('lg')]: {
      backgroundSize: 'contain',
      backgroundPosition: 'bottom right',
    },
    [breakpoints.down('md')]: {
      backgroundPosition: 'bottom right',
    },
    [breakpoints.down('sm')]: {
      backgroundImage: 'none',
      height: 105,
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
  holder: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 100,
    textTransform: 'uppercase',
  },
  buttonHolder: {
    maxWidth: 380,
    margin: '30px auto 0',
  },
}));
