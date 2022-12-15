import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    color: '#fff',
    backgroundColor: '#33264b',
  },
  header: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [breakpoints.up('lg')]: {
      paddingTop: 70,
      minHeight: 300,
    },
  },
  headerContent: {
    position: 'relative',
    flex: 1,
    padding: '30px 0',
    [breakpoints.up('lg')]: {
      padding: '40px 0',
    },
    [breakpoints.up('xl')]: {
      padding: '50px 0',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: '1.5rem',
      maxWidth: '60%',
    },
    [breakpoints.up('lg')]: {
      fontSize: '2rem',
      maxWidth: '52%',
    },
  },
  breadcrumbsHolder: {
    marginTop: 20,
    fontWeight: 500,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));
