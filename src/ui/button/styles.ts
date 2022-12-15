import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(() => ({
  '@keyframes wave': {
    '0%, 50%, 100%': {
      transform: 'initial',
    },
    '25%': {
      transform: 'translateY(-3px)',
    },
  },
  label: {
    lineHeight: 1,
  },
  startIcon: {},
  endIcon: {},
  stateLoading: {
    '& $label': {
      color: 'transparent',
      opacity: 0,
    },
    '& $startIcon': {
      visibility: 'hidden',
    },
    '& $endIcon': {
      visibility: 'hidden',
    },
  },
  dots: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    fontSize: 0,
  },
  dot: {
    display: 'inline-block',
    margin: 3,
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    animation: '$wave 1s ease-in infinite',
    '&:nth-of-type(2)': {
      animationDelay: '0.2s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '0.4s',
    },
  },
}));
