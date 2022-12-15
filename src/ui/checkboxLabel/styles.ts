import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  label: {
    flex: 1,
    marginLeft: 8,
  },
  fullWidth: {
    display: 'flex',
    width: '100%',
  },
  checkbox: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    position: 'relative',
    borderRadius: 8,
    width: 24,
    height: 24,
    backgroundColor: '#EEF3FA',
    boxShadow: 'none',
  },
  checkedIcon: {
    '&:before': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%230E9B4E'/%3E%3C/svg%3E\")",
      content: `''`,
    },
  },
}));
