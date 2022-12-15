import { gradientText, makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  firstWord: {
    display: 'block',
    ...gradientText('#fff, #B8C7D9'),
  },
  otherText: {
    color: '#BD9662',
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    textDecorationColor: '#BD9662',
    ...gradientText('#F8DAB1, #BD9662'),
  },
  itemLink: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    '&:before': {
      display: 'block',
      padding: '28% 50%',
      content: `''`,
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
  text: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    fontWeight: 600,
    fontSize: 20,
    [breakpoints.down('xl')]: {
      fontSize: 16,
    },
    [breakpoints.down('lg')]: {
      fontSize: 14,
      left: 10,
      bottom: 10,
    },
    [breakpoints.down('md')]: {
      fontSize: 12,
      left: 5,
      bottom: 5,
    },
    color: '#fff',
    textTransform: 'uppercase',
    // textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
  },
}));
