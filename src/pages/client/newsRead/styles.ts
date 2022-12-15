import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },
  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #1BB4BE)',
    '& h1': {
      maxWidth: 'none',
    },
  },
  container: {
    position: 'relative',
    padding: '30px 0',
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 428,
        background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
        content: `''`,
      },
    },
  },
  linksHolder: {
    maxWidth: 780,
    margin: '0 auto',
  },
}));
