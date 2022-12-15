import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 0.8,
    },
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-20px 0 0 -20px',
  },
  listPickFirst: {},
  item: {
    width: '25%',
    padding: '20px 0 0 20px',
  },
  imageLink: {
    position: 'relative',
    display: 'block',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)',
    '&:before': {
      display: 'block',
      padding: '28% 50%',
      content: `''`,
    },
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
  info: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    position: 'relative',
    flexShrink: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 16,
    height: 16,
    marginRight: 10,
    borderRadius: '50%',
  },
  statusLive: {
    backgroundImage: 'linear-gradient(180deg, #85CD39 0%, #7BBF32 100%)',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1s infinite ease-in-out',
      border: '1px solid #85CD39',
      content: `''`,
    },
  },
  statusNonLive: {
    backgroundImage: 'linear-gradient(180deg, #FF7B05 0%, #DD7314 100%)',
  },
  textHolder: {},
  text: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 0 0 -20px',
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#000',
    pointerEvents: 'none',
  },
  textItem: {
    padding: '0 0 0 20px',
    pointerEvents: 'auto',
  },
  statusText: {
    color: '#E33355',
  },
  playButton: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(180deg, #E33355 0%, #B90A54 100%)',
    color: '#fff',
    transform: 'translate(-50%, -50%)',
    visibility: 'hidden',
    boxShadow: `
      0 0 0 10px ${alpha('#13071D', 0.3)},
      0 0 0 20px ${alpha('#13071D', 0.3)},
      0 0 0 30px ${alpha('#13071D', 0.3)}`,
    '& svg': {
      marginLeft: 2,
    },
  },
  count: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: '#591454',
    borderRadius: 5,
    padding: '2px 10px',
    fontWeight: 600,
    fontSize: 13,
    color: '#fff',
  },
  live: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: '#E33355',
    borderRadius: 5,
    padding: '2px 10px',
    fontWeight: 600,
    fontSize: 13,
    color: '#fff',
    textTransform: 'uppercase',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  },
  summ: {
    fontWeight: 200,
    '&:before': {
      margin: '0 4px',
      color: '#A4B0C1',
      content: `'/'`,
    },
  },

  '@supports (display: grid)': {
    list: {
      display: 'grid',
      maxWidth: '100%',
      gridAutoFlow: 'dense',
      gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
      gridGap: 20,
      margin: 0,
      [breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(6, minmax(120px, 1fr))',
      },
    },
    live: {
      visibility: 'hidden',
    },
    text: {
      fontSize: 13,
    },
    item: {
      width: 'auto',
      padding: 0,
    },
    listPickFirst: {
      '& $item': {
        '&:first-of-type': {
          gridColumn: 'span 2',
          [breakpoints.up('lg')]: {
            gridColumn: 'span 3',
            gridRow: 'span 2',
          },
          '& $text': {
            fontSize: 16,
          },
          '& $live': {
            visibility: 'visible',
          },
          '& $playButton': {
            visibility: 'visible',
          },
        },
      },
    },
  },
}));
