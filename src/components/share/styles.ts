import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {},
  text: {
    fontSize: 16,
    color: '#515264',
  },
  socials: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  socialsItem: {
    '& + &': {
      marginLeft: 16,
    },
  },
  socialsLink: {
    verticalAlign: 'middle',
    color: 'currentColor',
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  },
}));
