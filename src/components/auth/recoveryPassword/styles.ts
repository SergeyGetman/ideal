import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  contentWrapper: {
    padding: '7rem 0rem',
  },
  contentWrapper_badRequest: {
    padding: '12rem 0rem',
  },
  buttonWrapper: {
    marginTop: '3rem',
    [breakpoints.down('sm')]: {
      marginTop: '10vw',
    },
  },
  actionDescription: {
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: '1.25rem',
    color: '#656C91',
    paddingBottom: '1rem',
  },
}));
