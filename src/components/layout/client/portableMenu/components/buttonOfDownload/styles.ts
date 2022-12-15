import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3.7rem',
    [breakpoints.down('md')]: {
      height: '3.7rem',
    },
    [breakpoints.down('sm')]: {
      height: '14vw',
    },
    padding: '0 24px',
    backgroundColor: '#0E9B4E',
    backgroundImage: 'linear-gradient(180deg, #0E9B4E 12.98%, #087138 100%)',
    borderBottom: '4px solid #064A25',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundImage: 'linear-gradient(180deg, #0E9B4E 12.98%, #087138 50%)',
    },
  },
  buttonDownloadCaption: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 600,
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '2.2vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '1.8vw',
    },
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  buttonArrow: {
    [breakpoints.down('sm')]: {
      fontSize: '6vw',
      marginRight: '2.2vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '3vw',
      marginRight: '1.4vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '2.5vw',
      marginRight: '1vw',
    },
    lineHeight: 1,
    width: '1em',
    ...gradientText('#fff, #F4CA93'),
  },
  buttonCaptionText: {
    ...gradientText('#fff, #F4CA93'),
  },
  buttonDownloadHolder: {
    backgroundColor: '#1B0621',
    marginLeft: '3.2vw',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.up('sm')]: {
      marginBottom: '2rem',
      width: '42vw',
    },
    [breakpoints.up('md')]: {
      width: '38vw',
    },
  },
}));
