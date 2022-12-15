import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    zIndex: 1,
    color: 'inherit',
    lineHeight: 1,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-36px 0 0 -24px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '100px',
    padding: '36px 0 0 24px',
    '&:first-of-type': {
      textAlign: 'left',
    },
    '&:last-of-type': {
      textAlign: 'right',
    },
  },
  caption: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      color: '#fff',
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
