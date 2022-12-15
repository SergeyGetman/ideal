import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#15041a',
    color: '#7A7C94',
    padding: '10px 0',
    lineHeight: 1,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    '&:first-of-type': {
      textAlign: 'left',
    },
    '&:last-of-type': {
      textAlign: 'right',
    },
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: alpha('#7A7C94', 0.35),
  },
  caption: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(2)',
    },
  },
  iconHolder: {
    marginRight: 8,
    fontSize: 0,
  },
  icon: {
    width: 20,
  },
}));
