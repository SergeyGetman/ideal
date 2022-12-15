import { makeStyles } from '@utils/styles';
import FirePng from '../../bonusesList/images/fire.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  content: {
    fontSize: 16,
    [breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  marker: {
    color: '#E33355',
    fontSize: 6,
  },
  fireIcon: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    width: 36,
    height: 36,
    marginLeft: 5,
    backgroundImage: `url(${FirePng})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: '100%',
  },
  text: {
    fontSize: 16,
    color: '#656C91',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
}));
