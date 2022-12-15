import { makeStyles } from '@utils/styles';

// images
import FlashPng from './images/flash.png';
import SynmbolsPng from './images/symbols.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#1B0621',
    color: '#fff',
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  flashBackground: {
    paddingTop: '70px',
    backgroundImage: `url(${FlashPng})`,
    backgroundPosition: 'center -150px',
    [breakpoints.down('xl')]: {
      backgroundPosition: 'center -150px',
    },
    [breakpoints.down('lg')]: {
      backgroundPosition: 'center -300px',
      paddingTop: '10px',
    },
    [breakpoints.down('md')]: {
      backgroundPosition: 'center -300px',
      paddingTop: '10px',
    },
    [breakpoints.down('sm')]: {
      backgroundPosition: 'center -200px',
      backgroundSize: '2500px 700px',
      paddingTop: '0px',
    },
    backgroundRepeat: 'no-repeat',
    content: `''`,
  },
  symbolsBackground: {
    backgroundImage: `url(${SynmbolsPng})`, // this symbols image are not the same as in the design model
    backgroundPosition: 'center top',

    backgroundRepeat: 'no-repeat',
    content: `''`,
  },

  gradient: {
    position: 'relative',
    backgroundImage: 'linear-gradient(180deg, #1B0621, #2F0A39)',
  },
  content: {
    position: 'relative',
  },
  advantagesHolder: {
    padding: '40px 0',
    [breakpoints.down('lg')]: {
      padding: '30px 0',
    },
    [breakpoints.down('md')]: {
      padding: '20px 0',
    },
    [breakpoints.down('sm')]: {
      padding: '0 0 20px 0',
      margin: '0 0 0 -10px',
    },
  },
}));
