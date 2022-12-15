import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    marginTop: -20,
    marginLeft: 20,
    [breakpoints.down('sm')]: {
      columnCount: 2,
      columnGap: 40,
    },
    [breakpoints.up('sm')]: {
      columnCount: 4,
    },
  },
  listItem: {
    paddingTop: 0,
  },
  listItemFull: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
    [breakpoints.up('sm')]: {
      display: 'block',
      marginTop: '15px',
    },
  },
  link: {
    fontFamily: 'Euclid Circular B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#9294AC',
    '&:hover': {
      color: '#fff',
      textDecoration: 'underline',
    },
    [breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [breakpoints.up('sm')]: {
      fontSize: '13px',
    },
  },
  activeLink: {
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    fontSize: 16,
    color: '#515264',
  },
  socials: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '30px',
  },
  socialsItem: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '20px',
    width: '65px',
  },
  socialsLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'currentColor',
    '&:hover': {
      color: '#fff',
    },
  },
  iconHolder: {
    marginRight: 8,
  },
  skeleton: {
    backgroundColor: 'rgba(255,255,255,.1)',
  },
}));
