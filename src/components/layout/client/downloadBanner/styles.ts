import { makeStyles, gradientText } from '@utils/styles';
import BgSvg from './images/bg.svg';
import BgSmSvg from './images/bgsm.svg';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    color: '#fff',
    position: 'relative',
    margin: '0 auto',
    [breakpoints.down('sm')]: {
      width: 336,
      height: 290,
    },
    [breakpoints.up('sm')]: {
      width: 634,
      height: 157,
    },
    [breakpoints.up('md')]: {
      width: 760,
      height: 152,
    },
    [breakpoints.up('xl')]: {
      width: 1188,
      height: 182,
    },
  },
  bgHolder: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    [breakpoints.down('sm')]: {
      width: 336,
    },
    [breakpoints.up('sm')]: {
      width: 634,
    },
    [breakpoints.up('md')]: {
      width: 760,
    },
    [breakpoints.up('xl')]: {
      width: 1188,
    },
    transform: 'translateX(-50%)',
    backgroundColor: '#E33355',
    backgroundImage: 'linear-gradient(180deg, #d83252, #b02d46)',
    borderRadius: 10,
    '&:before': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '24px 50%, left 80px bottom 60px, 50px 24px',
      content: `''`,
    },
    '&:after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundRepeat: 'no-repeat',
      content: `''`,
      [breakpoints.down('sm')]: {
        backgroundPosition: 'right -30px bottom -20px',
        backgroundImage: `url(${BgSmSvg})`,
      },
      [breakpoints.up('sm')]: {
        backgroundPosition: 'right -30px center',
        backgroundImage: `url(${BgSvg})`,
      },
      [breakpoints.up('md')]: {
        backgroundPosition: 'right 35px center',
        backgroundImage: `url(${BgSvg})`,
      },
      [breakpoints.up('xl')]: {
        backgroundPosition: 'right 100px center',
        backgroundImage: `url(${BgSvg})`,
      },
    },
  },
  card1: {
    position: 'absolute',
    bottom: 0,
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      right: 190,
      height: 182,
      width: 168,
    },
    [breakpoints.up('md')]: {
      right: 241,
      height: 171,
      width: 163,
    },
    [breakpoints.up('xl')]: {
      right: 322,
      height: 205,
      width: 195,
    },
  },
  card2: {
    position: 'absolute',
    right: 0,
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      height: 182,
      width: 168,
      top: -4,
    },
    [breakpoints.up('md')]: {
      top: -3,
      height: 175,
      width: 163,
    },
    [breakpoints.up('xl')]: {
      top: -4,
      height: 210,
      width: 195,
    },
  },
  coin1: {
    position: 'absolute',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      width: 100,
      height: 75,
      top: -33,
      right: 70,
    },
    [breakpoints.up('md')]: {
      width: 100,
      height: 75,
      top: -45,
      right: 138,
    },
    [breakpoints.up('xl')]: {
      width: 131,
      height: 92,
      top: -54,
      right: 167,
    },
  },
  coin2: {
    position: 'absolute',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      width: 78,
      height: 59,
      top: -26,
      right: 241,
    },
    [breakpoints.up('md')]: {
      top: -25,
      right: 291,
      width: 75,
      height: 57,
    },
    [breakpoints.up('xl')]: {
      top: -30,
      right: 382,
      width: 90,
      height: 70,
    },
  },
  content: {
    position: 'relative',
    flex: 1,
    [breakpoints.down('sm')]: {
      top: 22,
      marginLeft: 40,
    },
    [breakpoints.up('sm')]: {
      top: 32,
      marginLeft: 30,
    },
    [breakpoints.up('md')]: {
      top: 32,
      marginLeft: 25,
    },
    [breakpoints.up('xl')]: {
      top: 36,
      marginLeft: 106,
    },
  },
  title: {
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 22,
    },
    [breakpoints.up('sm')]: {
      fontSize: 20,
    },
    [breakpoints.up('md')]: {
      fontSize: 22,
    },
    [breakpoints.up('xl')]: {
      fontSize: 26.5,
    },
  },
  text: {
    color: '#FFC4CF',
    [breakpoints.down('sm')]: {
      fontSize: 16,
      marginLeft: '55px',
      marginTop: -22,
    },
    [breakpoints.up('sm')]: {
      fontSize: 11.5,
      marginTop: -24,
    },
    [breakpoints.up('md')]: {
      fontSize: 13,
      marginTop: -25,
    },
    [breakpoints.up('xl')]: {
      fontSize: 15,
      marginTop: -30,
    },
  },
  links: {
    display: 'flex',
    fontSize: 20,
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'left',
      marginTop: '18px',
    },
    [breakpoints.up('sm')]: {
      flexDirection: 'column',
      alignItems: 'left',
      marginTop: '-5px',
    },
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'left',
      marginTop: '0px',
    },
    [breakpoints.up('xl')]: {
      flexDirection: 'row',
      alignItems: 'left',
      marginTop: '-0px',
    },
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    [breakpoints.down('sm')]: {
      marginTop: '9px',
      marginLeft: -45,
    },
    [breakpoints.up('sm')]: {
      marginLeft: -12,
      marginTop: '4px',
    },
    [breakpoints.up('md')]: {
      marginLeft: 0,
      marginTop: '0px',
    },
    [breakpoints.up('xl')]: {
      fontSize: 18,
      marginTop: '0px',
    },
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    [breakpoints.down('sm')]: {
      fontSize: 16,
      marginLeft: 13,
    },
    [breakpoints.up('sm')]: {
      fontSize: 12,
      marginLeft: 12,
    },
    [breakpoints.up('md')]: {
      fontSize: 12,
      marginLeft: 10,
    },
    [breakpoints.up('xl')]: {
      fontSize: 15,
      marginLeft: 10,
    },
  },
  itemavailable: {
    display: 'inline-flex',
    [breakpoints.down('sm')]: {
      alignItems: 'left',
      marginLeft: 58,
      fontSize: 16.5,
    },
    [breakpoints.up('sm')]: {
      alignItems: 'left',
      fontSize: 12,
    },
    [breakpoints.up('md')]: {
      alignItems: 'left',
      fontSize: 12,
    },
    [breakpoints.up('xl')]: {
      alignItems: 'left',
      fontSize: 15,
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#FFC3CF',
    '&:hover': {
      color: '#fff',
    },
  },
  iconHolder: {
    marginRight: 10,
    fontSize: 0,
  },
  icon: {
    [breakpoints.down('sm')]: {
      width: 24,
      height: 24,
    },
    [breakpoints.up('sm')]: {
      width: 18,
      height: 18,
    },
    [breakpoints.up('md')]: {
      width: 18,
      height: 18,
    },
    [breakpoints.up('xl')]: {
      width: 22,
      height: 22,
    },
  },
  buttonHolder: {
    position: 'absolute',
    [breakpoints.down('sm')]: {
      left: 22,
      top: 192,
    },
    [breakpoints.up('sm')]: {
      right: 45,
      top: 51,
    },
    [breakpoints.up('md')]: {
      right: 111,
      top: 49,
    },
    [breakpoints.up('xl')]: {
      right: 134,
      top: 59,
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      height: 60,
      width: 294,
      fontSize: 21,
    },
    [breakpoints.up('sm')]: {
      height: 55,
      width: 227,
      fontSize: 14,
    },
    [breakpoints.up('md')]: {
      height: 53,
      width: 219,
      fontSize: 14,
    },
    [breakpoints.up('xl')]: {
      height: 63,
      width: 322,
      fontSize: 16.5,
    },
    backgroundColor: '#0E9B4E',
    backgroundImage: 'linear-gradient(180deg, #0E9B4E 12.98%, #087138 100%)',
    boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.1)',
    borderBottom: '5px solid #064A25',
    fontWeight: 600,
    lineHeight: 1,
    textTransform: 'uppercase',
    borderRadius: 10,
    linearGradient: '180deg, #0E9B4E 12.98%, #087138 100%',
  },
  buttonCaption: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFFAEA',
  },
  buttonArrow: {
    lineHeight: 1,
    width: '1em',
    ...gradientText('#FFFAEA, #F4CA93'),
    [breakpoints.down('sm')]: {
      fontSize: 26,
      marginLeft: 17,
    },
    [breakpoints.up('sm')]: {
      fontSize: 19,
      marginLeft: 8,
    },
    [breakpoints.up('md')]: {
      fontSize: 19,
      marginLeft: 8,
    },
    [breakpoints.up('xl')]: {
      fontSize: 20,
      marginLeft: 20,
    },
  },
  buttonCaptionText: {
    ...gradientText('#FFFAEA, #F4CA93'),
  },
  star1: {
    position: 'absolute',
    [breakpoints.down('sm')]: {
      width: 12,
      height: 12,
      top: 65,
      left: 22,
    },
    [breakpoints.up('sm')]: {
      width: 15,
      height: 15,
      top: 75,
      left: 11,
    },
    [breakpoints.up('md')]: {
      width: 14,
      height: 14,
      top: 75,
      left: 13,
    },
    [breakpoints.up('xl')]: {
      width: 15,
      height: 15,
      top: 75,
      left: 30,
    },
  },
  star2: {
    position: 'absolute',
    [breakpoints.down('sm')]: {
      width: 9,
      height: 9,
      top: 105,
      left: 35,
    },
    [breakpoints.up('sm')]: {
      width: 11,
      height: 11,
      top: 133,
      left: 35,
    },
    [breakpoints.up('md')]: {
      width: 11,
      height: 11,
      top: 121,
      left: 56,
    },
    [breakpoints.up('xl')]: {
      width: 13,
      height: 13,
      top: 141,
      left: 86,
    },
  },
  star3: {
    position: 'absolute',
    width: 500,
    [breakpoints.down('sm')]: {
      width: 25,
      height: 25,
      top: 16,
      left: 20,
    },
    [breakpoints.up('sm')]: {
      width: 33,
      height: 33,
      top: 6,
      left: 11,
    },
    [breakpoints.up('md')]: {
      width: 32,
      height: 32,
      top: 6,
      left: 11,
    },
    [breakpoints.up('xl')]: {
      width: 35,
      height: 35,
      top: 13,
      left: 59,
    },
  },
}));
