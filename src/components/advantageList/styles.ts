import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    display: 'flex',
  },
  item: {
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '50%',
      padding: '0 5px 0 5px',
    },
    [breakpoints.up('lg')]: {
      width: '25%',
      padding: '0 10px 0 10px',
    },
    [breakpoints.down('sm')]: {
      paddingTop: 20,
      '&:last-child': {
        paddingLeft: '18px',
      },
    },
  },
  itemWidth: {},
  carouselIndicator: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: '15px',
  },
  carouselEclipse: {
    '& + &': {
      marginLeft: '7px',
    },
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#4E3863',
  },
  activeCarouselEclipse: {
    background: 'linear-gradient(180deg, #FFFFFF 32.92%, #B8C7D9 71.82%)',
    boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
  },
}));
