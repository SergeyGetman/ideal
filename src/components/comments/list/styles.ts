import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  list: {},
  item: {
    background: '#fff',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
    '& + $item': {
      marginTop: 8,
    },
  },
  listInner: {
    '& $item': {
      position: 'relative',
      padding: 0,
      background: 'transparent',
      overflow: 'visible',
      borderRadius: 0,
      '& + $item': {
        marginTop: 20,
        paddingTop: 20,
        '&:before': {
          position: 'absolute',
          top: 0,
          right: -20,
          width: 780,
          height: 1,
          background: alpha('#B2B8D8', 0.25),
          content: `''`,
        },
      },
    },
  },
}));
