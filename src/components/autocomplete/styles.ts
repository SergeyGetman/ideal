import { makeStyles } from '@utils/styles';

// colors
import { grey } from '@utils/colors';

export const useStyles = makeStyles(() => ({
  holder: {
    position: 'relative',
  },
  inputRoot: {
    padding: 0,
  },
  inputRootDisabled: {
    background: grey[50],
  },
  focused: {
    '& $arrow': {
      transform: 'rotate(180deg)',
    },
  },
  arrow: {
    transition: 'all 100ms ease',
  },
  startAdornment: {
    margin: '0 10px 0 15px',
  },
  endAdornment: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
    width: 40,
    textAlign: 'center',
  },
}));
