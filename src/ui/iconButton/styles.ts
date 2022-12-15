import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  spinner: {
    display: 'inline-block',
    fontSize: 0,
  },
  disabled: {
    '& svg': {
      opacity: 0.5,
    },
  },
}));
