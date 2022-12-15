import { makeStyles } from '@utils/styles';

// images
import HeaderPng from './images/header.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
  },
  headingOfQueryList: {
    fontSize: '1.5rem',
    [breakpoints.down('lg')]: {
      fontSize: '1.375rem',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
    textAlign: 'center',
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #0f8f78)',
  },
  headerBg: {
    [breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderPng})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right 100px',
    },
  },
  container: {
    position: 'relative',
    padding: '30px 0',
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 428,
        background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
        content: `''`,
      },
    },
  },
  content: {
    position: 'relative',
  },
  searchHolder: {
    maxWidth: 780,
    margin: '30px auto 0',
  },
  tabsHolder: {
    marginTop: '1.875rem',
  },
  listHolder: {
    marginTop: '1.875rem',
    '&-item': {
      width: '10rem',
    },
  },
}));
