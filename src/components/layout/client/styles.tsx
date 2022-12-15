import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    position: 'relative',
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    position: 'relative',
    backgroundColor: '#0f0212',
  },
  footerNavigationHolder: {
    padding: '50px 0 30px 0',
    color: '#9294AC',
  },
  bottom: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0f0212',
    backgroundImage: 'linear-gradient(180deg, #0f0212 0%, #1B0621 50%, #0C010F 100%)',
    color: '#515264',
    '&:before': {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      width: '100%',
      height: 400,
      transform: 'translate(-50%, 50%)',
      backgroundColor: 'transparent',
      backgroundImage: 'radial-gradient(center, ellipse closest-side, #082C4E 0%, rgba(60, 12, 73, 0) 100%)',
      opacity: 0.7,
      content: `''`,
    },
  },
  partnersHolder: {
    position: 'relative',
    padding: '30px 0',
    borderTop: `1px solid ${alpha('#515368', 0.5)}`,
  },
  copyrightHolder: {
    position: 'relative',
    padding: '36px 50px',
    textAlign: 'center',
    fontSize: 12,
  },
  footerSocialHolder: {
    [breakpoints.down('sm')]: {
      display: 'block',
      padding: '21px 0 31px 42px',
      color: '#9294AC',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    },
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  downloadbanner: {
    marginTop: '-30px',
  },
  footerLocalesHolder: {
    paddingTop: 30,
    [breakpoints.down('sm')]: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    },
  },
}));
