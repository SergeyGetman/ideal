import { makeStyles } from '@utils/styles';

// images
import HeaderPng from './images/header.png';

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('lg')]: {
      marginTop: -70,
    },
  },

  header: {
    backgroundImage: 'linear-gradient(180deg, #33264b, #1895bd)',
  },

  headerBg: {
    [breakpoints.up('sm')]: {
      backgroundImage: `url(${HeaderPng})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right 100px',
    },
  },

  container: {
    position: 'relative',
    padding: '30px 0',
    [breakpoints.up('md')]: {
      padding: '40px 0',
    },
    [breakpoints.up('lg')]: {
      padding: '50px 0',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 428,
        background: 'linear-gradient(360deg, #FFFFFF 0%, #E4EBF5 100%)',
        content: `''`,
      },
    },
  },

  content: {
    position: 'relative',
    [breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr ',
    },
  },

  formHolder: {
    marginBottom: 40,
    minWidth: '336px',
    maxWidth: '478px',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.up('md')]: {
      marginBottom: 0,
      marginLeft: 40,
    },
    [breakpoints.only('md')]: {
      gridRowStart: 2,
      gridRowEnd: 4,
      gridColumnStart: '2',
    },
    [breakpoints.up('lg')]: {
      gridColumnStart: '2',
      gridRowStart: '1',
      gridRowEnd: '5',
    },
  },

  contactsInformationTextBox: {
    margin: 0,
    fontWeight: 500,
    fontSize: 18,
    color: '#656C91',
    paddingTop: '0',
    [breakpoints.only('md')]: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
    },
    [breakpoints.up('lg')]: {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '1',
      gridRowEnd: '2',
    },
  },

  contactsInformationText: {
    marginTop: '0',
  },

  contactsBox: {
    [breakpoints.up('lg')]: {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '2',
      gridRowEnd: '5',
    },
  },

  supportHolder: {
    [breakpoints.up('lg')]: {
      minWidth: '600px',
    },
    background: '#fff',
    boxShadow: '0px 30px 80px #E4EBF5',
    borderRadius: 10,
  },

  supportHeader: {
    padding: '15px 20px',
    backgroundColor: '#6A2E7A',
    borderRadius: '10px 10px 0 0',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#D3D9F9',
  },

  listHolder: {
    overflow: 'hidden',
  },

  list: {
    display: 'flex',
    flexWrap: 'wrap',
    flexShrink: 1,
    margin: '0 -1px -1px 0',
    [breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '25px 25px 25px 5px',
    lineHeight: 1.2,
    borderBottom: '1px dashed rgba(205, 217, 234, 0.8)',
    borderRight: '1px dashed rgba(205, 217, 234, 0.8)',
    [breakpoints.up('sm')]: {
      width: '50%',
    },
  },

  iconHolder: {
    fontSize: 0,
    marginRight: 15,
  },

  icon: {},
  itemTitle: {
    display: 'block',
    fontWeight: 600,
    fontSize: 12,
    textTransform: 'uppercase',
  },

  itemLink: {
    fontWeight: 300,
    fontSize: 16,
    color: '#E33355',
    [breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },

  sectionTitle: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#6A2E7A',
  },
}));
