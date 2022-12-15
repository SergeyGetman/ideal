import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    fontSize: 14,
    [breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  link: {
    color: 'inherit',
    textDecorationColor: 'currentColor',
    '&:hover': {
      color: '#fff',
    },
  },
  caption: {
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
}));
