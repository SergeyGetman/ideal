import { makeStyles, gradientText } from '@utils/styles';

// images
import TabPng from './images/tab.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    maxWidth: 1440,
    margin: '0 auto',
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
    width: 1440,
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  container: {
    position: 'relative',
    paddingTop: 30,
    fontSize: '1rem',
    marginBottom: '2.5rem',
    [breakpoints.down('md')]: {
      fontSize: '0.875rem',
      paddingTop: '1rem',
    },
  },
  stepsHolder: {
    display: 'flex',
    flexDirection: 'row',
    margin: '40px 0',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  tabs: {
    maxWidth: '50%',
    [breakpoints.up('lg')]: {
      maxWidth: 480,
    },
  },
  tab: {
    '& + &': {
      borderTop: '1px dashed rgba(205, 217, 234, 0.8)',
    },
  },
  tabActive: {
    '&&, & + $tab': {
      borderTopColor: 'transparent',
    },
    '& $stepIndexHolder': {
      background: 'linear-gradient(180deg, #E23355 0%, #AF2D46 100%)',
    },
    '& $stepButton': {
      backgroundImage: `url(${TabPng})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundSize: 'auto 100%',
    },
    '& $stepIndex': {
      ...gradientText('#FFEFD9, #EBBA79'),
    },
    '& $stepCaption': {
      color: '#FF3055',
    },
  },
  tabContent: {
    position: 'relative',
    height: 300,
    marginTop: 30,
    [breakpoints.up('lg')]: {
      marginTop: 0,
      height: 'auto',
      flex: 1,
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginTop: 0,
    },
  },
  transition: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  transitionImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '100%',
    maxWidth: '100%',
    transform: 'translate(-50%, -50%)',
    [breakpoints.down('lg')]: {
      maxHeight: '75%',
      maxWidth: 'none',
      transform: 'translate(0%, -50%)',
    },
  },
  stepButton: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    textAlign: 'left',
    [breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  stepIndexHolder: {
    flexShrink: 0,
    display: 'flex',
    width: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px 0 0 10px',
    [breakpoints.down('md')]: {
      borderRadius: '10rem',
      width: '4.125rem',
      height: '4.125rem',
      background: 'linear-gradient(180deg, #E4EBF5 0%, rgba(228, 235, 245, 0) 127.26%)',
    },
  },
  stepIndex: {
    fontWeight: 600,
    fontSize: '3rem',
    textTransform: 'uppercase',
    color: '#BABED1',
    [breakpoints.down('md')]: {
      fontSize: '2.5rem',
      ...gradientText('#E23355 , #AF2D46 '),
    },
  },
  stepCaption: {
    display: 'block',
    padding: '20px 25px',
    maxWidth: 340,
    fontSize: 16,
    lineHeight: '20px',
    color: '#656C91',
    [breakpoints.down('lg')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.down('sm')]: {
      padding: '0.9rem',
    },
  },
  stepsHolderMobile: {
    padding: '1rem 1.5rem',
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  carouselIndicator: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: '1rem',
    marginBottom: '0.8rem',
  },
  carouselEclipse: {
    '& + &': {
      marginLeft: '0.5rem',
    },
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    background: '#DADCE9',
  },
  activeCarouselEclipse: {
    background: 'linear-gradient(180deg, #E23355 0%, #AF2D46 100%)',
  },
  internalcontainer: {
    paddingTop: 20,
  },
  faqHolder: {
    paddingTop: 40,
    marginTop: 40,
    borderTop: '2px dashed #D8E4F2',
  },
  signature: {
    paddingTop: '1.5rem',
  },
  logoHolder: {
    fontSize: 0,
  },
}));
