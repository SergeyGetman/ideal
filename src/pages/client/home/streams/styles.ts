import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 0,
    textTransform: 'uppercase',
    '& span': {
      color: '#E33355',
    },
    [breakpoints.up('md')]: {
      fontSize: 20,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
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
  linkIcon: {
    display: 'none',
    fontSize: 0,
    marginRight: 10,
    [breakpoints.up('md')]: {
      display: 'inline',
    },
  },

  videoArchiveBlock: {
    '& ul li:nth-child(n+8)': {
      display: 'none',
    },

    '& ul': {
      gridTemplateRows: 'repeat(5,minmax(50px,1fr))',
      [breakpoints.up('lg')]: {
        gridTemplateRows: 'repeat(2, 1fr)',
      },
    },
  },
}));
