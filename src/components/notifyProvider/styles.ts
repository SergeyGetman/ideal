import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ palette }) => ({
  '@global': {
    '.Toastify__toast-container': {
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'none',
      padding: 10,
    },
    '.Toastify__toast-container--top-center': {
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    '.Toastify__toast': {
      minHeight: 'auto',
      margin: 0,
      padding: 12,
      borderRadius: 4,
      boxShadow: '0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)',
      fontFamily: 'Euclid Circular B',
      cursor: 'default',
      pointerEvents: 'auto',
      '& + &': {
        marginTop: 10,
      },
    },
    '.Toastify__toast-body': {
      flex: 'none',
      padding: 0,
    },
    '.Toastify__toast--error': {
      background: palette.error.main,
    },
    '.Toastify__toast--success': {
      background: palette.success.main,
    },
    '.Toastify__toast--warning': {
      background: palette.warning.main,
    },
    '.Toastify__toast--info': {
      background: palette.info.main,
    },
    '.Toastify__close-button': {
      alignSelf: 'center',
      fontSize: 0,
      marginLeft: 8,
    },
  },
}));
