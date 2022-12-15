import { makeStyles } from '@utils/styles';

// images
import HeaderPng from './images/headers.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #34123D, #66579C)',
  },
  headerBg: {
    [breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderPng})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right 20px',
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
    [breakpoints.down('lg')]: {
      background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
    },
  },
  content: {
    position: 'relative',
  },
  faqHolder: {
    paddingTop: 40,
    marginTop: 40,
    borderTop: '2px dashed #D8E4F2',
  },
}));
