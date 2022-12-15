import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    padding: '30px 0',
    textAlign: 'center',
    backgroundColor: '#0C010F',
    backgroundImage: 'linear-gradient(180deg, #0C010F, #0f0212)',
    '&:before': {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      height: '180%',
      backgroundColor: 'transparent',
      backgroundImage: 'radial-gradient(center, ellipse closest-side, #3C0C49 0%, transparent 100%)',
      transform: 'translateY(-50%)',
      content: `''`,
    },
    '&:after': {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      height: 1,
      backgroundColor: '#1A0929',
      backgroundImage: 'linear-gradient(90deg, #1A0929 0%, #3A3170 50%, #1A0929 100%)',
      content: `''`,
    },
  },
  content: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
    fontWeight: 'bold',
    fontSize: 28,
    color: '#9294AC',
    [breakpoints.up('md')]: {
      marginLeft: -40,
    },
    [breakpoints.up('lg')]: {
      marginLeft: -80,
    },
    '& > span': {
      paddingLeft: 20,
      [breakpoints.up('md')]: {
        paddingLeft: 40,
        fontSize: 30,
      },
      [breakpoints.up('lg')]: {
        paddingLeft: 80,
        fontSize: 30,
      },
    },
    [breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  link: {
    color: '#F8DAB1',
    ...gradientText('#F8DAB1, #BD9662'),
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 22,
    },
    [breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [breakpoints.up('md')]: {
      fontSize: 30,
    },
    [breakpoints.up('xl')]: {
      fontSize: 30,
    },
  },
  itemfaq: {
    [breakpoints.down('sm')]: {
      marginLeft: '40%',
    },
  },
  itemsupport: {
    [breakpoints.down('sm')]: {
      marginLeft: '-35%',
    },
  },
}));
