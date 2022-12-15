import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  section: {
    '&:first-of-type': {
      paddingTop: 25,
    },
    '& + &': {
      marginTop: 40,
      paddingTop: 40,
      borderTop: '2px dashed #D8E4F2',
    },
  },
  worldHolder: {
    marginTop: 40,
  },
}));
