import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  tablet: {
    [breakpoints.down('sm')]: {
      display: 'none !important',
    },
    [breakpoints.up('lg')]: {
      display: 'none !important',
    },
  },
  desktop: {
    [breakpoints.up('xl')]: {
      display: 'none !important',
    },
    [breakpoints.down('lg')]: {
      display: 'none !important',
    },
  },
  large: {
    [breakpoints.down('xl')]: {
      display: 'none !important',
    },
  },
  introduction: {
    marginTop: 0,
  },
  explanation: {
    marginTop: -10,
  },
  peersBlock: {
    backgroundColor: '#fff',
    marginLeft: 0,
    marginTop: 30,
    borderRadius: 10,
  },
  peerTitle: {
    textTransform: 'uppercase',
    zIndex: 5,
    position: 'relative',
  },
  peerText: {
    marginTop: -20,
  },

  text: {
    fontSize: 16,
    color: '#656C91',
    fontWeight: 300,
    font: 'Euclid Circular B',
    zIndex: 5,
    position: 'relative',
  },
  stamp: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    marginLeft: 10,
  },
  imageBlock: {
    [breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  slots: {
    marginLeft: -20,
    marginTop: 20,
    [breakpoints.down('md')]: {
      width: 383,
      height: 175,
      zIndex: 0,
    },
    [breakpoints.up('lg')]: {
      width: 458,
      height: 210,
    },
    [breakpoints.down('sm')]: {
      width: 323,
      height: 148,
    },
  },
  peerStamp: {
    display: 'flex',
    flexDirection: 'row',
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));
