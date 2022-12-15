import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    [breakpoints.up('lg')]: {
      flexDirection: 'row',
      padding: 0,
    },
  },
  wrapperForLogoAndFairGambling: {
    [breakpoints.down('lg')]: {
      width: '100%',
    },
  },
  logoHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    fontSize: 0,
    [breakpoints.up('lg')]: {
      margin: '0 50px 0 0',
      '&:before': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(center, ellipse closest-side, rgba(255,255,255,0.2), transparent)',
        content: `''`,
      },
      '&:after': {
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 14,
        height: 34,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: '100%',
        content: `''`,
      },
    },
  },
  link: {
    position: 'relative',
    display: 'inline-block',
    [breakpoints.up('lg')]: {
      width: 153,
      height: 82,
    },
  },
  image: {
    width: '15vw',
    [breakpoints.down('sm')]: {
      width: '25vw',
    },
  },
  arrowOfPokerCastaWrapper: {
    paddingLeft: '1rem',
  },
  content: {
    flex: 1,
    padding: '20px 0',
    textAlign: 'center',
    [breakpoints.up('lg')]: {
      textAlign: 'left',
    },
    [breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
}));
