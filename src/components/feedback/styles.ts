import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  buttonsHolder: {
    marginTop: 30,
    [breakpoints.down('xl')]: {
      marginTop: '1.625rem',
    },
    [breakpoints.down('sm')]: {
      marginTop: '1.125rem',
    },
  },
  buttons: {
    margin: '-20px 0 0 -20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonsItem: {
    width: '100%',
    padding: '20px 0 0 20px',
    [breakpoints.up('sm')]: {
      width: '33.3333%',
    },
    [breakpoints.up('lg')]: {
      maxWidth: '380px',
    },
  },
  button: {
    position: 'relative',
    display: 'block',
    width: '100%',
    minHeight: '100%',
    padding: '1.25rem 1.25rem',
    background: 'rgba(119, 133, 204, 0.1)',
    borderRadius: 10,
    textAlign: 'center',
    color: '#3E4776',
    '&:hover': {
      backgroundImage: 'linear-gradient(180deg, #E23355, #AF2D46)',
      '& $buttonIcon': {
        ...gradientText('#E23355, #AF2D46'),
      },
      '&:before': {
        position: 'absolute',
        borderRadius: 8,
        backgroundColor: '#fff',
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        content: `''`,
      },
    },
    [breakpoints.up('md')]: {
      padding: '2.5rem 1.25rem',
    },
    [breakpoints.up('xl')]: {
      padding: 40,
    },
  },
  buttonContent: {
    position: 'relative',
  },
  buttonIcon: {
    display: 'block',
    marginBottom: 20,
    fontSize: 50,
    color: 'rgba(62, 71, 118, 0.6)',
    [breakpoints.down('sm')]: {
      fontSize: '2.375rem',
      marginBottom: '1rem',
    },
  },
  buttonCaption: {
    display: 'block',
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    [breakpoints.up('lg')]: {
      fontSize: 16,
    },
    [breakpoints.up('md')]: {
      padding: '0 0.5rem',
    },
  },
  buttonText: {
    display: 'block',
    marginTop: '0.75rem',
    lineHeight: 1.4,
    fontWeight: 300,
    fontSize: 14,
    color: '#656C91',
    padding: 0,
    [breakpoints.up('lg')]: {
      fontSize: 16,
    },
    [breakpoints.up('xl')]: {
      padding: '0 40px',
    },
  },
}));
