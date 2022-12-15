// styles
import { makeStyles, gradientText } from '@utils/styles';
import AngleSvg from '../../pages/client/home/promo/images/angle.svg';
import Button1Png from '../../pages/client/home/promo/images/button1.png';
import Button2Png from '../../pages/client/home/promo/images/button2.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  gradient: {
    position: 'relative',
    backgroundImage: 'linear-gradient(180deg, #1B0621, #2F0A39)',
  },
  content: {
    position: 'relative',
  },

  toggleHolder: {
    position: 'relative',
    top: '3px',
    height: 60,
    overflow: 'hidden',
    textAlign: 'center',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      [breakpoints.down('md')]: {
        left: '-150px',
        right: '-150px',
      },
      height: '200%',
      backgroundImage: `url(${AngleSvg})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      transform: 'translateY(-50%)',
      content: `''`,
    },
  },
  toggleHolderCollapsed: {
    '&:before': {
      transform: 'translateY(0)',
    },
    '& $buttonHolder': {
      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
      [breakpoints.down('md')]: {
        clipPath: 'polygon(-27% 0%, 50% 100%, 127% 0)',
      },
    },
    '& $toggleButton': {
      backgroundImage: `url(${Button1Png})`,
    },
    '& $buttonText': {
      color: '#fff',
      ...gradientText('#EEB1FF, #fff'),
    },
  },
  buttonHolder: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
    [breakpoints.down('md')]: {
      clipPath: 'polygon(-27% 100%, 50% 0, 127% 100%)',
    },
  },
  toggleButton: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 307,
    height: 60,
    backgroundImage: `url(${Button2Png})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  buttonText: {
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#A44CBB',
    ...gradientText('#A44CBB, #6A2E7A'),
    '& .glyph:before': {
      verticalAlign: 'initial',
    },
  },
  buttonGlyph: {
    fontSize: 9,
    width: '1em',
    margin: '0 10px',
  },
}));
