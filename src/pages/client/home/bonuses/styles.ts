import { makeStyles } from '@utils/styles';

// images
import FirePng from './images/fire.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 0,
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 20,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  fireIcon: {
    display: 'none',
    width: 36,
    height: 36,
    marginLeft: 10,
    backgroundImage: `url(${FirePng})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: '100%',
    [breakpoints.up('lg')]: {
      display: 'inline',
    },
  },
  link: {
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 16,
    },
    [breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
}));
