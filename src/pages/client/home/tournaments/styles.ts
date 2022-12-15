import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    margin: '-30px 0 0 -30px',
    [breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  winnersHolder: {
    padding: '30px 0 0 30px',
    [breakpoints.up('lg')]: {
      flex: 1,
    },
  },
  announcementsHolder: {
    flex: 1,
    padding: '30px 0 0 30px',
    [breakpoints.up('lg')]: {
      flex: 1,
    },
  },
}));
