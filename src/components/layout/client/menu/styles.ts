import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1B0621',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    height: 70,
  },
  buttonHolder: {
    width: 230,
    marginTop: '0.7rem',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
    width: '100%',
    backgroundColor: '#0E9B4E',
    backgroundImage: 'linear-gradient(180deg, #0E9B4E 12.98%, #087138 100%)',
    borderBottom: '4px solid #064A25',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1,
    textTransform: 'uppercase',
    borderRadius: '0 0 6px 6px',
    '&:hover': {
      backgroundImage: 'linear-gradient(180deg, #0E9B4E 12.98%, #087138 50%)',
    },
  },
  buttonDesignFigure: {
    position: 'absolute',
    top: '-0.07rem',
  },
  buttonCaption: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  buttonArrow: {
    fontSize: 28,
    lineHeight: 1,
    marginRight: 20,
    width: '1em',
    ...gradientText('#fff, #F4CA93'),
  },
  buttonCaptionText: {
    ...gradientText('#fff, #F4CA93'),
  },
  menuHolder: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '0 50px',
  },
  list: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItem: {},
  link: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
    userSelect: 'none',
    '&:hover': {
      color: '#FF3055',
      textDecoration: 'none',
      borderBottom: '3px solid #FF3055',
      lineHeight: '1.5rem',
      display: 'table',
    },
  },
  activeLink: {
    color: '#FF3055',
    textDecoration: 'underline',
  },
}));
