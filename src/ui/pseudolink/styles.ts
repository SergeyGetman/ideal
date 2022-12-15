import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  label: {
    borderBottom: '1px dotted currentColor',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.4,
  },
  dashed: {
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
  },
}));
