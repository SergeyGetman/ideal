import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
    gridTemplateRows: 'repeat(6,minmax(50px,1fr))',
    gridGap: '20px',
    [breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(6, minmax(120px, 1fr))',
      gridTemplateRows: 'repeat(3, 1fr)',
    },
  },

  mainVideo: {
    width: '100%',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    [breakpoints.up('lg')]: {
      gridColumn: 'span 3',
      gridRow: 'span 2',
    },
  },

  videoItem: {
    width: '100%',
    borderRadius: '10px',
  },

  videoName: {
    display: 'block',
    maxWidth: '90%',
    margin: '0 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#E33355',
    fontSize: '16px',
  },

  mainVideoItem: {
    width: '100%',
    height: '93%',
    borderRadius: '10px',
  },
}));
