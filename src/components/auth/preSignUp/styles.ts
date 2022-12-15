import { makeStyles } from '@utils/styles';

// images
import BackgroundXSPng from './images/background-xs.png';
import CoinsMDPng from './images/coins-md.png';
import CoinsLGPng from './images/coins-lg.png';
import CoinsXLPng from './images/coins-xl.png';
import BirthdayMDPng from './images/birthday-md.png';
import BirthdayLGPng from './images/birthday-lg.png';
import BirthdayXLPng from './images/birthday-xl.png';

export const useBgStyles = makeStyles(({ breakpoints }) => ({
  background: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    pointerEvents: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundImage: `url(${BackgroundXSPng})`,
    [breakpoints.up('md')]: {
      backgroundImage: `url(${CoinsMDPng})`,
    },
    [breakpoints.up('lg')]: {
      backgroundImage: `url(${CoinsLGPng})`,
    },
    [breakpoints.up('xl')]: {
      backgroundImage: `url(${CoinsXLPng})`,
    },
  },
  backgroundBirthday: {
    [breakpoints.up('md')]: {
      backgroundImage: `url(${BirthdayMDPng})`,
    },
    [breakpoints.up('lg')]: {
      backgroundImage: `url(${BirthdayLGPng})`,
    },
    [breakpoints.up('xl')]: {
      backgroundImage: `url(${BirthdayXLPng})`,
    },
  },
  buttonStyle: {
    boxShadow: '1px 3px 1px #9E9E9E',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 16,
    height: 55,
  },
  spanStyle: {
    fontSize: 18,
    verticalAlign: 'text-bottom',
  },
  root: {
    fontSize: 15,
    '& > span': { mr: '10px', fontSize: 18 },
  },
}));
