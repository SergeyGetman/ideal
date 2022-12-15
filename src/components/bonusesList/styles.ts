import { makeStyles, gradientText } from '@utils/styles';

// images
import FirePng from './images/fire.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-20px 0 0 -20px',
  },
  item: {
    width: '50%',
    position: 'relative',
    padding: '20px 0 0 20px',
    [breakpoints.up('sm')]: {
      width: '25%',
    },
    '&.theme-purple': {
      '& $itemLink': {
        backgroundColor: '#6F1888',
        backgroundImage: 'linear-gradient(110.1deg, #6F1888 13.07%, #360D42 92.73%)',
      },
    },
    '&.theme-pink': {
      '& $itemLink': {
        backgroundColor: '#D5267A',
        backgroundImage: 'linear-gradient(117.14deg, #D5267A 14.45%, #7D1843 85.64%)',
      },
    },
    '&.theme-green': {
      '& $itemLink': {
        backgroundColor: '#408B6B',
        backgroundImage: 'linear-gradient(117.14deg, #408B6B 14.45%, #284E46 85.64%)',
      },
    },
    '&.theme-blue': {
      '& $itemLink': {
        backgroundColor: '#147EBA',
        backgroundImage: 'linear-gradient(117.14deg, #147EBA 14.45%, #0C5680 85.64%)',
      },
    },
    '&:not(.theme-custom)': {
      '& $content': {
        padding: '1rem',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: 1.2,
        color: '#fff',
        '& .gradientText': {
          color: '#FAE6CC',
          ...gradientText('#FAE6CC, #CCA36C'),
        },
        [breakpoints.up('lg')]: {
          fontSize: '1.375rem',
        },
        [breakpoints.up('xl')]: {
          fontSize: '1.625rem',
          padding: '1.56rem 3.125rem',
        },
      },
    },
  },
  itemLink: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    position: 'relative',
    borderRadius: 10,
    '&:hover': {
      '& $more': {
        textDecoration: 'underline',
      },
    },
  },
  imageHolder: {
    display: 'block',
    position: 'relative',
    pointerEvents: 'none',
    '&:before': {
      display: 'block',
      padding: '30% 50%',
      content: `''`,
      [breakpoints.up('lg')]: {
        padding: '36% 50%',
      },
    },
  },
  image: {
    position: 'absolute',
    left: '50%',
    top: '35%',
    maxWidth: '70%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    [breakpoints.up('lg')]: {
      maxWidth: '90%',
    },
  },
  content: {
    '& .rakebackBonus': {
      display: 'block',
    },
  },
  more: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'rgba(255, 255, 255, 0.6)',
    [breakpoints.up('lg')]: {
      fontSize: 16,
    },
  },
  bonusesTile: {
    display: 'flex',
    height: '100%',
    padding: 30,
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#EEF3FA',
    color: '#3E4776',
    '&:hover': {
      '& $bonusesLink': {
        textDecoration: 'underline',
      },
    },
    [breakpoints.down('xl')]: {
      padding: '0.9rem',
    },
  },
  bonusesTileTitle: {
    display: 'block',
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    [breakpoints.up('sm')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1.125rem',
    },
    [breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
  },
  bonusesLink: {
    fontWeight: 600,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    color: '#E33355',
    [breakpoints.up('sm')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1.125rem',
    },
  },
  fireIcon: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    width: '1.25rem',
    height: '1.25rem',
    marginLeft: 10,
    backgroundImage: `url(${FirePng})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: '100%',
    [breakpoints.up('md')]: {
      width: '1.56rem',
      height: '1.56rem',
      marginLeft: '0.3rem',
    },
    [breakpoints.up('xl')]: {
      width: '2.25rem',
      height: '2.25rem',
    },
  },
  rakebackBonus: {
    display: 'block',
  },
}));
