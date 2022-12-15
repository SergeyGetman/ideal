import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    lineHeight: 1,
    textAlign: 'center',
  },
  code: {
    fontWeight: 600,
    fontSize: 228,
    color: '#742C87',
    // textShadow: '0 5px 10px rgba(0,0,0,0.2)',
    ...gradientText('#742C87, #390E45'),
  },
}));
