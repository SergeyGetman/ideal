import { makeStyles, gradientText } from '@utils/styles';
import imgLent from '@components/auth/preSignUp/images/birthday-lg.png';
import BackgroundXSPng from '@components/auth/preSignUp/images/background-xs.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: 780,
    maxWidth: 'calc(100vw - 2.5rem)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    [breakpoints.up('md')]: {
      padding: '0 12px',
      flexDirection: 'row',
    },
  },
  formHolder: {
    flex: 1,
    position: 'relative',
    background: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: -10,
    [breakpoints.up('sm')]: {
      padding: 30,
    },
    [breakpoints.up('md')]: {
      marginBottom: 0,
      marginRight: -10,
      padding: '1.875rem 4.063rem 3.75rem',
    },
  },
  sidebar: {
    borderRadius: '0 0 0.625rem 0.625rem',
    padding: 20,
    backgroundImage: 'linear-gradient(180deg, #5B1170 0%, #360D42 100%)',
    [breakpoints.up('sm')]: {
      padding: 30,
    },
    [breakpoints.up('lg')]: {
      width: '17.5rem',
      padding: '3.125rem 3.125rem 3.125rem 3.75rem',
      borderRadius: '0 0.625rem 0.625rem 0',
    },
    [breakpoints.down('lg')]: {
      width: '15rem',
      padding: '3.125rem 3.125rem 3.125rem 3.75rem',
      borderRadius: '0 0.625rem 0.625rem 0',
    },
    [breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0,
    },
  },
  sidebarList: {
    marginTop: '3.125rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '-0.625rem 0 0 -0.625rem',
    [breakpoints.up('md')]: {
      flexDirection: 'column',
      margin: '-2.5rem 0 0 -2.5rem',
    },
    [breakpoints.down('md')]: {
      flexDirection: 'row',
      margin: '0.5rem',
    },
  },
  sidebarItem: {
    padding: '0.625rem 0 0 0.625rem',
    [breakpoints.up('md')]: {
      padding: '2.5rem 0 0 2.5rem',
    },
  },

  sidebarImg: {
    maxHeight: 40,
    maxWidth: '100%',
    verticalAlign: 'middle',
    [breakpoints.up('md')]: {
      maxHeight: 'none',
    },
  },
  sidebarImgOpacity: {
    verticalAlign: 'middle',
    opacity: 0.5,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  preText: {
    width: '100%',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    '& span': {
      ...gradientText('#FAE6CC, #CCA36C'),
    },
    [breakpoints.up('md')]: {
      fontSize: 20,
      marginBottom: 30,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
      marginBottom: 50,
    },
  },
  response: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    lineHeight: 1.4,
    fontSize: 18,
    color: '#656C91',
    textTransform: 'uppercase',
  },
  responseTitle: {
    fontSize: 18,
    marginBottom: 20,
    [breakpoints.up('md')]: {
      fontSize: 24,
      marginBottom: 30,
    },
    [breakpoints.up('md')]: {
      fontSize: 32,
      marginBottom: 40,
    },
  },
  headerInModal: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: 1,
    textAlign: 'center',
    color: 'white',
    [breakpoints.down('sm')]: {
      marginTop: 10,
      fontSize: 18,
      height: 46,
      width: 336,
      left: 19,
    },
  },
  lettersInHeadersModal: {
    fontSize: 32,
    letterSpacing: 1,
    color: '#E33355',
    [breakpoints.down('sm')]: {
      fontSize: 18,
      color: '#E33355',
    },
  },
  letterThouthend: {
    fontSize: 32,
    letterSpacing: 1,
    color: '#D8E340',
    [breakpoints.down('sm')]: {
      fontSize: 18,
      color: '#D8E340',
    },
  },
  blocksMobileTitile: {
    marginTop: 10,
    marginLeft: 25,
  },
  modalHendler: {
    backgroundPosition: 'center, center',
    backgroundImage: `url(${imgLent})}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.3',
    minWidth: 350,
    zIndex: 10,
  },
  modalHendlerInside: {
    backgroundImage: `url(${BackgroundXSPng})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 100,
  },
  iframeStyle: {
    width: 150,
    height: 50,
    border: 'none',
  },
}));
