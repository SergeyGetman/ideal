import { makeStyles, gradientText } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    fontSize: '5.5rem',
  },
  list: {
    margin: '-20px 0 0 -20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '100%',
    padding: '20px 0 0 20px',
    [breakpoints.up('sm')]: {
      width: '25%',
    },
    [breakpoints.down('sm')]: {
      width: '50%',
    },
  },
  button: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
    padding: 20,
    background: 'rgba(119, 133, 204, 0.1)',
    borderRadius: 10,
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
  },
  buttonActive: {
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
  buttonContent: {
    position: 'relative',
  },
  buttonIcon: {
    display: 'block',
    marginBottom: '1.25rem',
    fontSize: '3.125rem',
    color: 'rgba(62, 71, 118, 0.6)',
    [breakpoints.down('sm')]: {
      marginBottom: '1rem',
      fontSize: '1.625rem',
    },
  },
  buttonCaption: {
    display: 'block',
    fontWeight: 600,
    fontSize: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '0.825rem',
    },
    textTransform: 'uppercase',
  },
  description: {
    maxWidth: 640,
    margin: '30px auto 0',
  },
  headingOfQueryList: {
    fontSize: '1.5rem',
    [breakpoints.down('lg')]: {
      fontSize: '1.375rem',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
    textAlign: 'center',
  },
}));
