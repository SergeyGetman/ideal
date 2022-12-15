import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({}) => ({
  list: {
    marginLeft: 20,
  },
  link: {
    fontSize: 14,
  },
  activeLink: {
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    color: '#515264',
    fontFamily: 'Euclid Circular B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
  },
  socials: {
    marginLeft: '30px',
  },
  socialsItem: {
    lineHeight: '20px',
  },
  socialsLink: {
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
