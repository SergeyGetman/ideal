import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#270b2f',
    color: '#838599',
    padding: '0.625rem 0',
    lineHeight: 1,
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
  languagesWrapper: {
    [breakpoints.down('lg')]: {
      order: 1,
    },
  },
  socialLinksWrapper: {
    [breakpoints.down('lg')]: {
      order: 2,
    },
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: 12,
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: '20px',
    fontSize: '1rem',
    [breakpoints.down('lg')]: {
      fontSize: '0.8rem',
    },
    '& + &': {
      marginLeft: 10,
      paddingLeft: 10,
      borderLeft: `1px solid ${alpha('#838599', 0.35)}`,
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'currentColor',
    '&:hover': {
      color: '#fff',
    },
  },
  activeLink: {
    color: '#fff',
  },
  iconHolder: {
    marginRight: 8,
    '&:last-child': {
      marginRight: 8,
    },
  },
  skeleton: {
    backgroundColor: 'rgba(255,255,255,.1)',
  },
}));
