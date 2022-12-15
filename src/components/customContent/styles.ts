import { makeStyles, alpha } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    zoom: 1,
    fontSize: 16,
    '&:after': {
      display: 'block',
      clear: 'both',
      content: `''`,
    },
    '& h2, & h3, & h4, & h5, & h6': {
      color: '#3E4776',
      textTransform: 'uppercase',
      '&:first-child': {
        marginTop: 0,
      },
    },
    '& h2': {
      fontSize: 24,
      [breakpoints.up('md')]: {
        fontSize: 28,
      },
      [breakpoints.up('lg')]: {
        fontSize: 32,
      },
    },
    '& h3': {
      fontSize: 18,
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
      [breakpoints.up('lg')]: {
        fontSize: 24,
      },
    },
    '& h4': {
      fontSize: 16,
      [breakpoints.up('md')]: {
        fontSize: 18,
      },
      [breakpoints.up('lg')]: {
        fontSize: 22,
      },
    },
    '& h5': {
      fontSize: 14,
      [breakpoints.up('md')]: {
        fontSize: 16,
      },
      [breakpoints.up('lg')]: {
        fontSize: 18,
      },
    },
    '& p + p': {
      margin: '10px 0 0 0',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& table': {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid',
      borderColor: alpha('#B2B8D8', 0.15),
      wordWrap: 'break-word',
    },
    '& tbody': {
      border: 'inherit',
      backgroundColor: alpha('#E5ECF6', 0.15),
    },
    '& tr': {
      border: 'inherit',
    },
    '& th': {
      border: 'inherit',
      padding: '12px 20px',
      background: alpha('#E1E4F3', 0.5),
      color: alpha('#656C91', 0.8),
      fontWeight: 200,
      fontSize: 13,
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    '& td': {
      border: 'inherit',
      padding: '12px 20px',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      // '&[align="right"]': {
      //   margin: '8px 0 8px 20px',
      // },
      // '&[align="left"]': {
      //   margin: '8px 20px 8px 0',
      // },
    },
    '& dl': {
      margin: '8px 0',
      padding: '0 20px',
    },
    '& ul': {
      margin: '8px 0 8px 30px',
      padding: '0 20px',
      listStyleType: 'none',
      listStylePosition: 'outside',
      listStyleImage: 'none',
      '& a': {
        color: '#E33355',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    '& li': {
      position: 'relative',
    },
    '& ul > li + li': {
      marginTop: 10,
    },
    '& ul li:before': {
      position: 'absolute',
      width: 8,
      height: 8,
      top: '0.5em',
      left: -30,
      borderRadius: '50%',
      backgroundColor: '#E33355',
      content: `''`,
    },
    '& li > ol, & li > ul': {
      paddingLeft: 20,
    },
    '& ol': {
      margin: '8px 0',
      padding: '0 20px',
      listStyleType: 'decimal',
      listStylePosition: 'outside',
      listStyleImage: 'none',
      counterReset: 'item',
    },
    // '& ol > li:before': {
    //   float: 'left',
    //   margin: '0 4px 0 0',
    //   counterIncrement: 'item',
    //   content: `counters(item, ".") "."`,
    // },
    '& blockquote': {
      position: 'relative',
      display: 'block',
      margin: '40px 0',
      padding: '40px 0',
      fontWeight: 500,
      fontSize: 24,
      textAlign: 'center',
      color: '#3E4776',
      '& hr': {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        margin: 0,
        width: '100vw',
        maxWidth: 1200,
        '&:first-of-type': {
          top: 0,
          bottom: 'auto',
        },
      },
    },
    '& hr': {
      position: 'relative',
      margin: '40px 0',
      height: 1,
      border: 'none',
      backgroundColor: alpha('#B2B8D8', 0.5),
      '&:before': {
        position: 'absolute',
        width: 80,
        height: 3,
        top: -1,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        content: `''`,
      },
      '&:after': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        color: '#E33355',
        content: `'♠'`,
      },
    },
  },
}));
