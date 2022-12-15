import { makeStyles } from '@utils/styles';

// images
import HeaderPng from './images/header.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #b50384)',
    [breakpoints.up('md')]: {
      '&:before': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${HeaderPng})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 85%',
        backgroundPosition: 'bottom right -1rem',
        content: `''`,
        [breakpoints.up('lg')]: {
          backgroundSize: 'auto 65%',
        },
        [breakpoints.up('xl')]: {
          backgroundSize: 'auto',
          backgroundPosition: 'bottom right calc(50% - 270px)',
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
  },
  gridContainer: {
    gridGap: '1.875rem',
    [breakpoints.up('md')]: {
      gridGap: '2.5rem',
    },
    [breakpoints.up('lg')]: {
      gridGap: '3.125rem',
    },
    [breakpoints.up('xl')]: {
      gridGap: '3.75rem',
    },
  },
  listHolder: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    [breakpoints.down('md')]: {
      marginTop: '1rem',
    },
  },
  downloadList: {
    padding: '0 20px',
    marginLeft: 30,
    listStyleType: 'disc',
    listStylePosition: 'outside',
    listStyleImage: 'none',
    '& > li + li': {
      marginTop: 10,
    },
    '& > li:before': {
      float: 'left',
      margin: '0 8px 0 0',
      fontSize: 18,
      content: '◦',
    },
    [breakpoints.down('sm')]: {
      padding: 0,
      marginLeft: '1.25rem',
    },
  },
  downloadLink: {
    color: '#E33355',
    textDecoration: 'underline',
    fontWeight: 300,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  guideLink: {
    color: '#E33355',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
    [breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
