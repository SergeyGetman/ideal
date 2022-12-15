import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'left',
  },
  name: {
    display: 'block',
    fontWeight: 600,
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#fff',
  },
  balance: {
    fontSize: 14,
    ...gradientText('#F8DAB1, #BD9662'),
  },
  logoutHolder: {
    color: '#fff',
  },
}));
