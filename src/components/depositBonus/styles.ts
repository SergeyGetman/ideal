import { makeStyles, gradientText } from '@utils/styles';

// images
import HeaderPng from './images/header.png';

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
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #6e1886)',
    [breakpoints.up('sm')]: {
      padding: '0 3.5rem',
      '&:before': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${HeaderPng})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom right calc(50% - 240px)',
        content: `''`,
        [breakpoints.down('lg')]: {
          backgroundPosition: 'bottom right calc(50% - 10rem)',
        },
      },
    },
  },
  container: {
    position: 'relative',
    padding: '30px 0',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 428,
      background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
      content: `''`,
    },
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
    },
  },
  content: {
    position: 'relative',
    margin: 'auto',
    padding: '0 3.5rem',
    [breakpoints.down('lg')]: {
      padding: '0 3.5rem',
    },
    [breakpoints.down('sm')]: {
      padding: '0 1rem',
    },
  },
  gradientText: {
    ...gradientText('#FAE6CC, #CCA36C'),
  },
  gridContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gridGap: '1rem',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    [breakpoints.up('lg')]: {
      gridGap: '1.875rem',
    },
    [breakpoints.up('xl')]: {
      gridGap: '4.3rem',
    },
  },
  textContainer: {
    fontSize: '1rem',
  },
  bannerVideo: {
    [breakpoints.down('lg')]: {
      margin: 'auto',
    },
  },
  claimHolder: {
    marginTop: 40,
    padding: '10px 0 15px',
    marginBottom: '1.25rem',
  },
  bonusesList: {
    marginTop: '2.5rem',
  },
  faqHolder: {
    paddingTop: 40,
    marginTop: 40,
    borderTop: '2px dashed #D8E4F2',
  },
}));
