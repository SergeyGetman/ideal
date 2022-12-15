import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  icon: {
    fontSize: 'inherit',
    marginRight: 8,
  },
}));
