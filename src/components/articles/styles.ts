import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-2.5rem 0 0 -2.5rem',
    padding: '0rem 0.8rem',
    [breakpoints.down('md')]: {
      padding: 0,
    },
  },
  item: {
    width: '100%',
    padding: '3rem 0 0 2.5rem',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '33.33333%',
    },
    [breakpoints.down('md')]: {
      '&:first-child::before': {
        display: 'none',
      },
      '&:last-child:after': {
        display: 'block',
        width: '100vw',
        border: '1px solid rgba(73, 96, 118, 0.15)',
        content: `''`,
        position: 'absolute',
        top: '16.5rem',
        left: '1.563rem',
      },
      '&::before': {
        display: 'block',
        width: '100vw',
        border: '1px solid rgba(73, 96, 118, 0.15)',
        content: `''`,
        position: 'absolute',
        top: '1.2rem',
        left: '1.563rem',
      },
    },
  },
  itemInner: {
    position: 'relative',
  },
  itemTypeBanner: {
    [breakpoints.up('md')]: {
      '& $itemInner': {
        overflow: 'hidden',
        borderRadius: 20,
      },
      '& $imageHolder': {
        position: 'static',
        overflow: 'none',
      },
      '& $itemContent': {
        padding: '0 1rem 1rem',
        pointerEvents: 'none',
      },
      '& $caption': {
        color: '#fff',
        '&:hover': {
          textDecoration: 'none',
        },
      },
      '& $text': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '& $date': {
        color: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  imageHolder: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    borderRadius: 20,
    fontSize: 0,
    marginBottom: 20,
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
  itemContent: {
    position: 'relative',
  },
  caption: {
    fontWeight: 500,
    fontSize: '1.375rem',
    color: '#143A50',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  text: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    margin: '0.625rem 0',
    fontSize: '1rem',
    color: 'rgba(20, 58, 80, 0.8)',
    lineClamp: 5,
    overflow: 'hidden',
  },
  date: {
    fontSize: 16,
    margin: 0,
    color: 'rgba(20, 58, 80, 0.5)',
  },
  '@supports (column-count: 3)': {
    [breakpoints.up('md')]: {
      list: {
        display: 'block',
        position: 'relative',
        columnCount: 3,
        margin: '0 -1.875rem',
        '&:before, &:after': {
          position: 'absolute',
          top: '1.4rem',
          bottom: 0,
          content: `''`,
          borderLeft: '1px solid rgba(0, 0, 0, 0.15)',
        },
        '&:before': {
          left: '33.33333%',
        },
        '&:after': {
          right: '33.33333%',
        },
      },
      item: {
        width: 'auto',
        breakInside: 'avoid',
        padding: '1.25rem 1rem',
      },
    },
  },
}));
