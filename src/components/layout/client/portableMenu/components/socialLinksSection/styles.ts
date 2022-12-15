import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#270b2f',
    color: '#838599',
    padding: '0.625rem 0',
    lineHeight: 1,
    marginLeft: '3.5vw',
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  socialLinksWrapper: {
    width: '100%',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
  },
  socialsDescription: {
    fontSize: '3vw',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.75rem',
    justifyContent: 'flex-end',
    flex: 1,
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: '1.25rem',
    '& + &': {
      marginLeft: '0.625rem',
      paddingLeft: '0.625rem',
      borderLeft: `1px solid ${alpha('#838599', 0.35)}`,
    },
    fontSize: '1rem',
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
      marginRight: 0,
    },
  },
  skeleton: {
    backgroundColor: 'rgba(255,255,255,.1)',
  },
  horizontalDivider: {
    width: '100vw',
    opacity: '0.2',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
    border: '1px solid #777DBA',
    margin: '1.5rem -1rem',
  },
}));
