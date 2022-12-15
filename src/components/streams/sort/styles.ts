import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  caption: {
    display: 'inline-flex',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: 'rgba(20, 58, 80, 0.8)',
    fontSize: 16,
  },
  iconHolder: {
    marginLeft: 8,
    fontSize: 0,
  },
  content: {
    padding: 20,
    minWidth: 240,
  },
  item: {
    '& + &': {
      borderTop: '1px solid rgba(0,0,0,0.1)',
    },
  },
  option: {
    padding: '10px 0',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: 'inherit',
    cursor: 'pointer',
  },
  optionCurrent: {
    fontWeight: 'bold',
  },
}));
