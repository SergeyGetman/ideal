import { makeStyles, gradientText } from '@utils/styles';

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
  list: {
    display: 'flex',
    margin: '-20px 0 0 -20px',
    flexWrap: 'wrap',
  },
  item: {
    width: '100%',
    padding: '20px 0 0 20px',
    [breakpoints.up('md')]: {
      width: 'auto',
      flex: 1,
    },
  },
  itemLink: {
    position: 'relative',
    display: 'block',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)',
    '&:before': {
      display: 'block',
      height: 200,
      content: `''`,
      [breakpoints.up('md')]: {
        height: 'auto',
        padding: '66% 50%',
      },
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectPosition: 'center center',
    objectFit: 'cover',
  },
  itemContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  itemText: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 25px',
    fontSize: 14,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    color: '#fff',
  },
  itemTitle: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: '0.04em',
    // textShadow: '0px 5px 19px rgba(0, 0, 0, 0.5)',
    '& span': {
      '&:first-of-type': {
        ...gradientText('#F8DAB1, #BD9662'),
      },
      '&:last-of-type': {
        // TODO add gradient
        ...gradientText('#fff, #B8C7D9'),
      },
    },
  },
  date: {
    margin: '0 0 5px',
    fontWeight: 'bold',
  },
  summ: {
    padding: 20,
  },
  summValue: {
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '-0.04em',
    textTransform: 'uppercase',
    ...gradientText('#BD9662, #F8DAB1'),
    '& span': {
      fontSize: 20,
      margin: '0 4px',
    },
  },
}));
