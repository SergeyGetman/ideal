import { makeStyles, gradientText } from '@utils/styles';

// images
import ArrowSvg from './images/arrow.svg';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#40174b',
    borderBottom: '1px solid #6a2e7a',
    [breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    [breakpoints.up('lg')]: {
      flexDirection: 'row',
      padding: 0,
    },
  },
  content: {
    flex: 1,
    padding: '20px 0',
    textAlign: 'center',
    [breakpoints.up('lg')]: {
      textAlign: 'left',
    },
  },
  logoHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 230,
    textAlign: 'center',
    fontSize: 0,
    [breakpoints.up('lg')]: {
      margin: '0 50px 0 0',
      '&:before': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(center, ellipse closest-side, rgba(255,255,255,0.2), transparent)',
        content: `''`,
      },
      '&:after': {
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 14,
        height: 34,
        backgroundImage: `url(${ArrowSvg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: '100%',
        content: `''`,
      },
    },
  },
  link: {
    position: 'relative',
    display: 'inline-block',
    [breakpoints.up('lg')]: {
      width: 153,
      height: 82,
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#fff',
    margin: 0,
    [breakpoints.up('md')]: {
      fontSize: 20,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  text: {
    fontSize: 16,
    color: '#A0A6C2',
    margin: 0,
  },
  button: {
    display: 'inline-flex',
    alignItems: 'stretch',
    borderRadius: 10,
    height: 50,
    boxShadow: '0px 10px 35px rgba(0, 0, 0, 0.15)',
    color: '#fff',
    fontWeight: 600,
    fontSize: 13,
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 14,
    },
    [breakpoints.up('lg')]: {
      fontSize: 16,
    },
  },
  buttonCaption: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    border: '1px solid #4E446A',
    backgroundColor: '#4E4568',
    backgroundImage: 'linear-gradient(180deg, #4E4568 0%, #150D1C 100%)',
    borderRadius: '10px 0 0 10px',
  },
  buttonArrowHolder: {
    position: 'absolute',
    left: '100%',
    top: -1,
    bottom: -1,
    width: 14,
    marginLeft: -1,
    overflow: 'hidden',
  },
  buttonArrow: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    transform: 'scale(0.5, 1)',
    transformOrigin: 'left center',
    '&:before': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 38,
      height: 38,
      borderRadius: '0 6px 0 0',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      backgroundColor: '#4E4568',
      backgroundImage: 'linear-gradient(135deg, #4E4568 0%, #150D1C 100%)',
      content: `''`,
    },
  },
  buttonBonus: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0px 20px 0px 25px',
    borderRadius: '0 10px 10px 0',
    backgroundColor: '#E33355',
    backgroundImage: 'linear-gradient(180deg, #E33355 0%, #AF2D46 100%)',
    fontSize: 0,
  },
  buttonValue: {
    fontSize: 16,
    [breakpoints.up('md')]: {
      marginLeft: 10,
    },
  },
  bonusIcon: {
    display: 'none',
    width: '1em',
    lineHeight: 1,
    fontSize: 20,
    color: '#FFEFD9',
    ...gradientText('#FFEFD9, #EBBA79'),
    [breakpoints.up('md')]: {
      display: 'inline',
    },
  },
  userOreSignInUpContainer: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
