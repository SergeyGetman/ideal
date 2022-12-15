import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    color: '#656C91',
  },
  iconHolder: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    padding: '0 15px',
  },
  buttonHolder: {
    padding: '0 5px',
    width: 170,
  },
  imageHolder: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    width: 50,
    height: 50,
    borderRadius: '50%',
    fontSize: 0,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectPosition: 'center center',
    objectFit: 'cover',
  },
  closeLink: {
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    textTransform: 'uppercase',
    [breakpoints.up('lg')]: {
      fontSize: 14,
    },
  },
}));
