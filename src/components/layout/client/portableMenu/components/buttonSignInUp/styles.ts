import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexDirection: 'row',
    display: 'inline-flex',
    alignItems: 'stretch',
    boxShadow: '0 0.4rem 0.13rem rgba(0, 0, 0, 0.15)',
    color: '#fff',
    [breakpoints.down('sm')]: {
      height: '14vw',
      width: '100%',
      display: 'flex',
    },
    [breakpoints.up('sm')]: {
      width: '28vw',
      height: '2.3rem',
    },
    [breakpoints.up('md')]: {
      width: '30.3vw',
      height: '2.8rem',
    },
    [breakpoints.up('lg')]: {
      width: '22rem',
      height: '3.2rem',
    },
  },
  buttonCaption: {
    zIndex: 2,
    position: 'relative',
    textTransform: 'uppercase',
    fontFamily: 'Euclid Circular B',
    fontWeight: 600,
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.4rem 0 0 0.4rem',
      width: '30%',
      height: '14vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.5vw',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.4rem 0 0 0.4rem',
      width: '8.8vw',
      height: '2.3rem',
    },
    [breakpoints.up('md')]: {
      fontSize: '0.8rem',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.5rem 0 0 0.5rem',
      width: '10.5vw',
      height: '2.8rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1rem',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.5rem 0 0 0.5rem',
      width: '7rem',
      height: '3.2rem',
    },
    backgroundColor: '#1e56ad',
    '&:hover': {
      backgroundColor: '#154896',
    },
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      width: 0,
      height: 0,
      marginLeft: -1,
      [breakpoints.down('sm')]: {
        left: '100%',
        borderTop: '7vw solid transparent',
        borderLeft: '3vw solid #1e56ad',
        borderBottom: '7vw solid transparent',
      },
      [breakpoints.up('sm')]: {
        left: '8.8vw',
        borderTop: '1.15rem solid transparent',
        borderLeft: '1.3vw solid #1e56ad',
        borderBottom: '1.15rem solid transparent',
      },
      [breakpoints.up('md')]: {
        left: '10.5vw',
        borderTop: '1.4rem solid transparent',
        borderLeft: '1vw solid #1e56ad',
        borderBottom: '1.4rem solid transparent',
      },
      [breakpoints.up('lg')]: {
        left: '7rem',
        borderTop: '1.6rem solid transparent',
        borderLeft: '0.6rem solid #1e56ad',
        borderBottom: '1.6rem solid transparent',
      },
    },
    '&:hover:before': {
      [breakpoints.down('sm')]: {
        left: '100%',
        borderTop: '7vw solid transparent',
        borderLeft: '3vw solid #154896',
        borderBottom: '7vw solid transparent',
      },
      [breakpoints.up('sm')]: {
        left: '8.8vw',
        borderTop: '1.15rem solid transparent',
        borderLeft: '1.3vw solid #154896',
        borderBottom: '1.15rem solid transparent',
      },
      [breakpoints.up('md')]: {
        left: '10.5vw',
        borderTop: '1.4rem solid transparent',
        borderLeft: '1vw solid #154896',
        borderBottom: '1.4rem solid transparent',
      },
      [breakpoints.up('lg')]: {
        left: '7rem',
        borderTop: '1.6rem solid transparent',
        borderLeft: '0.6rem solid #154896',
        borderBottom: '1.6rem solid transparent',
      },
    },
  },
  buttonCaption_reset: {
    zIndex: 0,
    position: 'relative',
    textTransform: 'uppercase',
    fontFamily: 'Euclid Circular B',
    fontWeight: 600,
    marginRight: 2,
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.4rem 0 0 0.4rem',
      width: '30%',
      height: '14vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.5vw',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.4rem 0 0 0.4rem',
      width: '8.8vw',
      height: '2.3rem',
    },
    [breakpoints.up('md')]: {
      fontSize: '0.8rem',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.5rem 0 0 0.5rem',
      width: '10.5vw',
      height: '2.8rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1rem',
      padding: '0 0 0 0.8rem',
      borderRadius: '0.5rem 0 0 0.5rem',
      width: '7rem',
      height: '3.2rem',
    },
    backgroundColor: '#1e56ad',
    '&:hover': {
      backgroundColor: '#154896',
    },
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      width: 0,
      height: 0,
      marginLeft: -1,
      [breakpoints.down('sm')]: {
        left: '100%',
        borderTop: '7vw solid transparent',
        borderLeft: '3vw solid #1e56ad',
        borderBottom: '7vw solid transparent',
      },
      [breakpoints.up('sm')]: {
        left: '8.8vw',
        borderTop: '1.15rem solid transparent',
        borderLeft: '1.3vw solid #1e56ad',
        borderBottom: '1.15rem solid transparent',
      },
      [breakpoints.up('md')]: {
        left: '10.5vw',
        borderTop: '1.4rem solid transparent',
        borderLeft: '1vw solid #1e56ad',
        borderBottom: '1.4rem solid transparent',
      },
      [breakpoints.up('lg')]: {
        left: '7rem',
        borderTop: '1.6rem solid transparent',
        borderLeft: '0.6rem solid #1e56ad',
        borderBottom: '1.6rem solid transparent',
      },
    },
    '&:hover:before': {
      [breakpoints.down('sm')]: {
        left: '100%',
        borderTop: '7vw solid transparent',
        borderLeft: '3vw solid #154896',
        borderBottom: '7vw solid transparent',
      },
      [breakpoints.up('sm')]: {
        left: '8.8vw',
        borderTop: '1.15rem solid transparent',
        borderLeft: '1.3vw solid #154896',
        borderBottom: '1.15rem solid transparent',
      },
      [breakpoints.up('md')]: {
        left: '10.5vw',
        borderTop: '1.4rem solid transparent',
        borderLeft: '1vw solid #154896',
        borderBottom: '1.4rem solid transparent',
      },
      [breakpoints.up('lg')]: {
        left: '7rem',
        borderTop: '1.6rem solid transparent',
        borderLeft: '0.6rem solid #154896',
        borderBottom: '1.6rem solid transparent',
      },
    },
  },

  buttonBonus: {
    zIndex: 10,
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#E33355',
    backgroundImage: 'linear-gradient(180deg, #E33355 0%, #AF2D46 100%)',
    '&:hover': {
      backgroundImage: 'linear-gradient(180deg, #F53459 0%, #982239 100%)',
    },
    textTransform: 'uppercase',
    fontFamily: 'Euclid Circular B',
    fontWeight: 600,
    [breakpoints.down('sm')]: {
      padding: '0 0.4rem 0 0.8rem',
      borderRadius: '0 0.4rem 0.4rem 0',
      width: '70%',
    },
    [breakpoints.up('sm')]: {
      padding: '0px 1.3vw 0 2vw',
      borderRadius: '0 0.4rem 0.4rem 0',
      width: '19.2vw',
    },
    [breakpoints.up('md')]: {
      padding: '0px 1.3vw 0 2vw',
      borderRadius: '0 0.5rem 0.5rem 0',
      width: '20vw',
    },
    [breakpoints.up('lg')]: {
      padding: '0px 10px 0 20px',
      borderRadius: '0 0.5rem 0.5rem 0',
      width: '15rem',
    },
  },
  bonusIcon: {
    width: '1em',
    lineHeight: 1,
    fontSize: 20,
    color: '#FFEFD9',
    ...gradientText('#FFEFD9, #EBBA79'),
    [breakpoints.up('sm')]: {
      zoom: '0.6',
    },
    [breakpoints.up('md')]: {
      zoom: '0.8',
    },
    [breakpoints.up('lg')]: {
      zoom: '1',
    },
  },
  buttonValueThousand: {
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.5vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '1.4vw',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  },
  buttonValueBonus: {
    [breakpoints.down('sm')]: {
      fontSize: '3.3vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.2vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
    [breakpoints.up('lg')]: {
      fontSize: '0.9rem',
    },
  },
  buttonBonusContainer: {
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.down('sm')]: {
      marginLeft: '2.5vw',
    },
    [breakpoints.up('sm')]: {
      marginLeft: '0.35rem',
    },
    [breakpoints.up('md')]: {
      marginLeft: '0.4rem',
    },
  },
  buttonSignUp: {
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.5vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '1.4vw',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  },
  buttonPlus: {
    [breakpoints.down('sm')]: {
      fontSize: '4vw',
      margin: '0 2vw',
    },
    [breakpoints.up('sm')]: {
      fontSize: '1.5vw',
      margin: '0 0.7vw',
    },
    [breakpoints.up('md')]: {
      fontSize: '1.5vw',
      margin: '0 0.7vw',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1rem',
      margin: '0 0.7rem',
    },
  },
}));
