import { makeStyles, gradientText } from '@utils/styles';

// images
import BannerBgPng from './images/banner.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.8,
    },
    '100%': {
      transform: 'scale(1.5)',
      opacity: 0,
    },
  },
  root: {
    display: 'block',
    lineHeight: 1.2,
    padding: '30px 60px',
    backgroundImage: `url(${BannerBgPng}), linear-gradient(110.1deg, #6F1888 13.07%, #360D42 92.73%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',
    textAlign: 'center',
    borderRadius: 10,
    [breakpoints.up('lg')]: {
      minWidth: 320,
    },
  },
  icon: {
    margin: '30px auto',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    borderRadius: '50%',
    fontSize: 0,
    '& img': {
      position: 'relative',
      zIndex: 1,
    },
    '&:before, &:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 2s infinite ease-in-out',
      border: '2px solid #E33355',
      content: `''`,
    },
    '&:after': {
      animationDelay: '1s',
    },
  },
  text: {
    display: 'block',
    color: '#DEBAE7',
    fontWeight: 500,
    fontSize: 16,
  },
  title: {
    display: 'block',
    margin: '20px 0',
    fontWeight: 600,
    fontSize: 20,
    textTransform: 'uppercase',
    ...gradientText('#FFFAEA, #F4CA93'),
  },
}));
