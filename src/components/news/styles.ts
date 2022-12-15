import { makeStyles, alpha } from '@utils/styles';

// images
import LabelSvg from './images/label.svg';

export const useStyles = makeStyles(({ breakpoints }) => ({
  list: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-1.25rem 0 0 -1.25rem',
  },
  item: {
    width: '100%',
    position: 'relative',
    padding: '1.25rem 0 0 1.25rem',
    [breakpoints.up('md')]: {
      width: '40%',
    },
  },
  itemLink: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    fontSize: 0,
    '&:before': {
      display: 'block',
      padding: '37.5% 50%',
      content: `''`,
      [breakpoints.up('lg')]: {
        padding: '64% 50%',
      },
    },
  },
  mask: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `linear-gradient(180deg, ${alpha('#40497A', 0)}, #40497A)`,
    content: `''`,
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
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
  caption: {
    margin: '0 0 10px',
    fontWeight: 500,
    fontSize: '1.625rem',
    color: '#fff',
  },
  date: {
    fontSize: '0.875rem',
    margin: 0,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  labels: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  labelHolder: {
    display: 'none',
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginLeft: '1.25rem',
    width: '4.125rem',
    height: '5.688rem',
    backgroundImage: `url(${LabelSvg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    backgroundSize: '100%',
  },
  labelIcon: {
    fontSize: '2.25rem',
    marginBottom: '1rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 10,
    marginLeft: -10,
  },
  tagsItem: {
    marginTop: '0.625rem',
    marginLeft: '0.625rem',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#0AA86F',
    borderRadius: 5,
    padding: '0.313rem 0.625rem',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1,
    textTransform: 'uppercase',
    color: '#fff',
    whiteSpace: 'nowrap',
  },
  actiity: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  actiityIcon: {
    fontSize: '1rem',
    marginRight: '0.625rem',
  },

  listGridLayout: {
    [breakpoints.up('lg')]: {
      '@supports (display: grid)': {
        display: 'grid',
        maxWidth: '100%',
        gridAutoFlow: 'dense',
        gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
        gridGap: 20,
        margin: 0,
        '& $item': {
          width: 'auto',
          padding: 0,
          gridColumn: 'span 2',
          '&:nth-of-type(1)': {
            gridColumn: 'span 5',
            gridRow: 'span 2',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                padding: '37.5% 50%',
                content: `''`,
              },
            },
            '& $caption': {
              fontSize: '1.625rem',
              lineHeight: '138%',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            '& $date': {
              fontSize: '1.125rem',
            },
            '& $tag': {
              padding: '0.375rem 0.938rem',
              fontSize: '1rem',
            },
            '& $actiity': {
              fontSize: '1.125rem',
            },
            '& $actiityIcon': {
              fontSize: '1.125rem',
            },
            '& $labelHolder': {
              display: 'block',
            },
          },
          '&:nth-of-type(2), &:nth-of-type(3)': {
            gridColumn: 'span 3',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                padding: '31% 50%',
                content: `''`,
              },
            },
          },
          '& $caption': {
            fontSize: '1.125rem',
            lineHeight: '122%',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          '& $date': {
            fontSize: '0.875rem',
          },
          '& $tag': {
            fontSize: '0.875rem',
          },
          '& $actiity': {
            fontSize: '0.875rem',
          },
          '& $actiityIcon': {
            fontSize: '0.875rem',
          },
        },
      },
    },
    [breakpoints.down('lg')]: {
      '@supports (display: grid)': {
        display: 'grid',
        maxWidth: '100%',
        gridAutoFlow: 'dense',
        gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
        gridGap: 20,
        margin: 0,
        '& $item': {
          width: 'auto',
          padding: 0,
          gridColumn: 'span 2',
          '&:nth-of-type(1)': {
            gridColumn: 'span 4',
            gridRow: 'span 2',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                padding: '37.5% 50%',
                content: `''`,
              },
            },
            '& $caption': {
              '&:hover': {
                textDecoration: 'underline',
              },
              [breakpoints.up('sm')]: {
                fontSize: '1.25rem',
                lineHeight: '150%',
              },
              [breakpoints.up('md')]: {
                fontSize: '1.5rem',
                lineHeight: '150%',
              },
            },
            '& $date': {
              [breakpoints.up('sm')]: {
                fontSize: '0.68rem',
              },
              [breakpoints.up('md')]: {
                fontSize: '1.125rem',
              },
            },
            '& $tag': {
              [breakpoints.up('sm')]: {
                fontSize: '0.686rem',
              },
              [breakpoints.up('md')]: {
                fontSize: '1.125rem',
              },
            },
            '& $actiity': {
              [breakpoints.up('sm')]: {
                fontSize: '0.686rem',
              },
              [breakpoints.up('md')]: {
                fontSize: '1.125rem',
              },
            },
            '& $actiityIcon': {
              [breakpoints.up('sm')]: {
                fontSize: '0.686rem',
              },
              [breakpoints.up('md')]: {
                fontSize: '1.125rem',
              },
            },
            '& $labelHolder': {
              display: 'block',
            },
          },
          '&:nth-of-type(2), &:nth-of-type(3)': {
            gridColumn: 'span 2',
            gridRow: 'span 1',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                padding: '37% 50%',
                content: `''`,
              },
            },
          },
          '& $caption': {
            '&:hover': {
              textDecoration: 'underline',
            },
            [breakpoints.up('sm')]: {
              fontSize: '0.875rem',
              lineHeight: '126%',
            },
            [breakpoints.up('md')]: {
              fontSize: '0.75rem',
              lineHeight: '137%',
            },
          },
          '& $date': {
            [breakpoints.up('sm')]: {
              fontSize: '0.678rem',
            },
            [breakpoints.up('md')]: {
              fontSize: '0.678rem',
            },
          },
          '& $tag': {
            [breakpoints.up('sm')]: {
              fontSize: '0.678rem',
            },
            [breakpoints.up('md')]: {
              fontSize: '0.625rem',
            },
          },
          '& $actiity': {
            [breakpoints.up('sm')]: {
              fontSize: '0.688rem',
            },
            [breakpoints.up('md')]: {
              fontSize: '0.875rem',
            },
          },
          '& $actiityIcon': {
            [breakpoints.up('sm')]: {
              fontSize: '0.688rem',
            },
            [breakpoints.up('md')]: {
              fontSize: '0.875rem',
            },
          },
        },
      },
    },
    [breakpoints.down('md')]: {
      '@supports (display: grid)': {
        display: 'grid',
        maxWidth: '100%',
        gridAutoFlow: 'dense',
        gridTemplateColumns: 'repeat(1, minmax(100px, 1fr))',
        gridGap: 20,
        margin: 0,
        '& $item': {
          width: 'auto',
          padding: 0,
          gridColumn: 'span 1',
          '&:nth-of-type(1)': {
            gridColumn: 'span 1',
            gridRow: 'span 2',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                content: `''`,
              },
            },
          },
          '&:nth-of-type(2), &:nth-of-type(3)': {
            gridColumn: 'span 1',
            gridRow: 'span 1',
            '& $itemLink': {
              '&:before': {
                display: 'block',
                padding: '37% 50%',
                content: `''`,
              },
            },
          },
        },
        '& $caption': {
          fontSize: '1rem',
        },
        '& $date': {
          fontSize: '0.813rem',
        },
        '& $tag': {
          fontSize: '0.813rem',
        },
        '& $actiity': {
          fontSize: '0.813rem',
        },
        '& $actiityIcon': {
          fontSize: '0.813rem',
        },
      },
    },
  },
}));
