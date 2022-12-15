import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#40174B',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
    height: '10vw',
    [breakpoints.down('sm')]: {
      height: '18vw',
    },
    padding: '0rem 1rem',
  },
  hidingMenuSymbol: {
    fontsize: '5vw',
  },
  menuHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A2E7A',
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: '3vw 3vw',
    [breakpoints.down('sm')]: {
      padding: '5.5vw 5.5vw',
    },
  },
  menuOpenActionIcon: {
    fontSize: '4vw',
    [breakpoints.down('sm')]: {
      fontSize: '7vw',
    },
  },
  menuButtonClose: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: '3.5vw 3.5vw',
    [breakpoints.down('sm')]: {
      padding: '6.5vw 6.5vw',
    },
  },
  menuCloseActionIcon: {
    fontSize: '3vw',
    [breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
  },
  mainPortableMenuWrapper: {
    padding: 20,
    width: '100vw',
    backgroundColor: 'rgba(33, 8, 40, 0.98)',
    gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
  },
  rollingMenuLinks: {
    marginLeft: '3.5vw',
  },
  link: {
    fontSize: '1.125rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    userSelect: 'none',
    '&:hover': {
      color: '#FF3055',
      textDecoration: 'none',
      borderBottom: '3px solid red',
      lineHeight: '1.5rem',
      display: 'table',
    },
  },
  activeLink: {
    color: '#FF3055',
  },
  rollingMenuWrapper: {
    width: '100%',
  },
  horizontalDivider: {
    width: '100vw',
    opacity: '0.2',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
    border: '1px solid #777DBA',
    margin: '1rem 0rem',
  },
  portableWindowOfMenu: {
    width: '20%',
  },
  menuInnerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A2E7A',
  },
  userOrSignInUpContainer: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userOrSignInUpContainerSideMenu: {
    [breakpoints.down('sm')]: {
      position: 'relative',
      left: '3.7vw',
    },
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
