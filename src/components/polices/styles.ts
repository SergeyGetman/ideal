import { makeStyles } from '@utils/styles';
import HeaderPng from './images/header.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #0347ae)',
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
    },
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
  content: {
    position: 'relative',
    color: '#656C91',
  },
  filedHolder: {
    margin: '30px 0 30px 10%',
    maxWidth: 900,
  },
  files: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-20px 0 0 -20px',
  },
  filesItem: {
    padding: '20px 0 0 20px',
    maxWidth: '',
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      width: 108,
    },
    [breakpoints.up('sm')]: {
      width: 138,
    },
    [breakpoints.up('md')]: {
      width: 178,
    },
    [breakpoints.up('lg')]: {
      width: 180,
    },
  },
  fileIconLink: {
    position: 'relative',
    display: 'block',
    background: 'rgba(119, 133, 204, 0.1)',
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 0,
    '&:before': {
      display: 'block',
      padding: '60% 50%',
      content: `''`,
    },
  },
  fileIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [breakpoints.down('sm')]: {
      width: 62,
      height: 85,
    },
    [breakpoints.up('sm')]: {
      width: 75,
      height: 115,
    },
    [breakpoints.up('md')]: {
      width: 106,
      height: 144,
    },
    [breakpoints.up('lg')]: {
      width: 107,
      height: 146,
    },
  },
  fileName: {
    fontWeight: 300,
    textTransform: 'uppercase',
    color: '#E33355',
    '&:hover': {
      textDecoration: 'underline',
    },
    [breakpoints.down('sm')]: {
      fontSize: 10,
    },
    [breakpoints.up('sm')]: {
      fontSize: 12,
    },
    [breakpoints.up('md')]: {
      fontSize: 14,
    },
    [breakpoints.up('lg')]: {
      fontSize: 14,
    },
  },
}));
