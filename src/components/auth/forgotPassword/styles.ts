import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  contentHeader: {
    width: 400,
    height: 30,
    marginTop: 10,
    fontWeight: 700,
    marginRight: 5,
  },
  contentWrapper: {
    padding: '8rem 0rem',
  },
  contentWrapper_badRequst: {
    padding: '13rem 0rem',
  },
  contentWrapper_successRequst: {
    padding: '11rem 0rem',
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
  },
  buttonOfHome: {
    marginTop: '2rem',
  },
}));
