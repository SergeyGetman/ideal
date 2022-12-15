import { makeStyles, gradientText } from '@utils/styles';

// images
import LinkPng from './images/link.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'hidden',
    textAlign: 'center',
  },
  imageHolder: {
    position: 'relative',
    width: 0,
    display: 'inline-block',
    margin: '0 auto',
  },
  image: {
    transform: 'translateX(-50%)',
    [breakpoints.between('xs', 'sm')]: {
      width: '771px',
    },
    [breakpoints.between('sm', 'lg')]: {
      width: '946px',
    },
    [breakpoints.between('lg', 'xl')]: {
      width: '1200px',
    },
  },
  imageFlash: {
    transform: 'translate(-50%, -17%)',
    [breakpoints.down('xl')]: {
      transform: 'translate(-50%, -20%)',
    },
  },
  buttons: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    [breakpoints.down('xl')]: {
      bottom: -5,
    },
    [breakpoints.down('lg')]: {
      bottom: -15,
    },
    [breakpoints.down('sm')]: {
      bottom: -20,
    },
    left: '50%',
    height: 100,
    width: 600,
    transform: 'translateX(-50%)',
  },
  buttonsItem: {
    flex: 1,
  },
  button: {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    padding: '0 0 10px',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: 20,
    [breakpoints.down('xl')]: {
      fontSize: 16,
    },
    [breakpoints.down('lg')]: {
      fontSize: 13,
    },
    textTransform: 'uppercase',
    // textShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  },
  buttonRed: {
    flexDirection: 'row-reverse',
    '& $buttonCaption': {
      ...gradientText('#fff, #B8C7D9'),
    },
    '& $buttonCircle': {
      border: '2px solid #A51F39',
      background: 'linear-gradient(180deg, #CF294A, #AB1B37)',
    },
    '& $buttonGlyph': {
      ...gradientText('#fff, #B8C7D9'),
    },
  },
  buttonGreen: {
    '& $buttonCaption': {
      ...gradientText('#FFFAEA, #F4CA93'),
    },
    '& $buttonCircle': {
      border: '2px solid #075329',
      background: 'linear-gradient(180deg, #09803E, #064F27)',
    },
    '& $buttonGlyph': {
      ...gradientText('#FFFAEA, #F4CA93'),
    },
  },
  buttonCaption: {},
  buttonCircle: {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    margin: '0 15px',
    width: 56,
    height: 56,
    [breakpoints.down('xl')]: {
      width: 54,
      height: 54,
    },
    [breakpoints.down('lg')]: {
      width: 42,
      height: 42,
    },
    [breakpoints.down('sm')]: {
      width: 35,
      height: 35,
      margin: '0 10px',
    },
    color: '#fff',
    boxShadow: '0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 0px rgba(255, 255, 255, 0.15)',
  },
  buttonGlyph: {
    fontSize: 24,
    width: '1em',
    [breakpoints.down('lg')]: {
      fontSize: 23,
    },
    [breakpoints.down('md')]: {
      fontSize: 18,
    },
    [breakpoints.down('sm')]: {
      fontSize: 14,
    },
    // textShadow: '0px 3px 0px rgba(0, 0, 0, 0.15)',
  },
  links: {
    display: 'flex',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 150,
    width: 1110,
    [breakpoints.down('xl')]: {
      bottom: 140,
      width: 943,
    },
    [breakpoints.down('lg')]: {
      bottom: 110,
      width: 740,
    },
    [breakpoints.down('md')]: {
      width: '100%',
      bottom: 0,
      position: 'relative',
      paddingTop: 20,
    },
  },
  linksPart: {
    flex: 1,
    '&:first-of-type': {
      paddingLeft: 40,
      [breakpoints.down('lg')]: {
        paddingLeft: 10,
      },
      [breakpoints.down('md')]: {
        paddingLeft: 20,
      },
      textAlign: 'left',
    },
    '&:last-of-type': {
      textAlign: 'right',
      [breakpoints.down('md')]: {
        paddingRight: 20,
      },
      [breakpoints.down('sm')]: {
        paddingRight: 10,
      },
    },
  },
  linksList: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  linksItem: {
    '& + &': {
      marginLeft: 10,
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    // textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
  },
  linkGlyph: {
    fontSize: 34,
    [breakpoints.between('lg', 'xl')]: {
      fontSize: 27,
    },
    [breakpoints.between('sm', 'lg')]: {
      fontSize: 21,
    },
    [breakpoints.between('xs', 'sm')]: {
      fontSize: 18,
    },
    width: '1em',
    ...gradientText('#fff, #79A6A7'),
  },
  linksCircle: {
    position: 'relative',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: 72,
    height: 72,
    [breakpoints.between('lg', 'xl')]: {
      width: 62,
      height: 62,
    },
    [breakpoints.between('sm', 'lg')]: {
      width: 49,
      height: 49,
    },
    [breakpoints.between('sm', 'md')]: {
      background: 'linear-gradient(180deg, #0F6163 0%, #0B393C 100%)',
    },
    [breakpoints.between('xs', 'sm')]: {
      width: 38,
      height: 38,
      background: 'linear-gradient(180deg, #0F6163 0%, #0B393C 100%)',
    },
    color: '#fff',
    backgroundImage: `url(${LinkPng})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  linksCaption: {
    marginLeft: 10,
    fontWeight: 600,
    maxWidth: 130,
    fontSize: 14,
    [breakpoints.down('lg')]: {
      fontSize: 12,
    },
    textTransform: 'uppercase',
    ...gradientText('#fff, #A9C6C7'),
  },
}));
