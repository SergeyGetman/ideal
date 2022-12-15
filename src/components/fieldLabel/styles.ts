import { makeStyles } from '@utils/styles';

// colors
import { red } from '@utils/colors';

export const useStyles = makeStyles(() => ({
  required: {
    marginLeft: 3,
    color: red[600],
  },
}));
