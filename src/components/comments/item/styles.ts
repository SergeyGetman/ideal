import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    color: '#656C91',
    '&:hover': {
      '& $replyLink': {
        opacity: 1,
      },
    },
  },
  content: {},
  imageHolder: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    width: 50,
    height: 50,
    borderRadius: '50%',
    fontSize: 0,
    marginBottom: 20,
    marginRight: 20,
    backgroundColor: '#fff',
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
  head: {
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    fontWeight: 100,
  },
  replyHolder: {
    position: 'relative',
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    '&:before': {
      position: 'absolute',
      top: 0,
      right: -20,
      width: 780,
      height: 1,
      background: alpha('#B2B8D8', 0.25),
      content: `''`,
    },
    [breakpoints.up('lg')]: {
      paddingLeft: 70,
    },
  },
  replyLink: {
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'all 200ms ease',
    [breakpoints.up('lg')]: {
      opacity: 0,
      fontSize: 14,
    },
  },
  formHolder: {
    position: 'relative',
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    '&:before': {
      position: 'absolute',
      top: 0,
      right: -20,
      width: 780,
      height: 1,
      background: alpha('#B2B8D8', 0.25),
      content: `''`,
    },
    [breakpoints.up('lg')]: {
      paddingLeft: 70,
    },
  },
}));
