import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({ breakpoints, palette }) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 0,
    textTransform: 'uppercase',
    [breakpoints.up('md')]: {
      fontSize: 20,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  dateButton: {
    display: 'inline-flex',
    fontWeight: 600,
    fontSize: 18,
    textTransform: 'uppercase',
    color: palette.secondary.main,
  },
  buttonArrow: {
    display: 'inline-block',
    marginRight: 5,
    border: '4px solid transparent',
    borderBottom: 'none',
    borderTop: '5px solid currentColor',
    '& + span': {
      borderBottom: '1px dashed',
    },
  },
  datePickerHolder: {
    minWidth: 320,
    padding: 20,
  },
  tableHolder: {
    overflow: 'auto',
  },
  table: {
    minWidth: '100%',
    borderSpacing: 0,
    borderCollapse: 'collapse',
    border: 'none',
  },
  row: {
    fontWeight: 600,
    fontSize: 14,
    color: '#4E6B86',
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(226, 238, 244, 0.5)',
    },
    '& td': {
      padding: 6,
      verticalAlign: 'middle',
    },
    [breakpoints.up('md')]: {
      fontSize: 16,
    },
    [breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
  labelCell: {
    fontSize: 12,
    fontWeight: 200,
    textTransform: 'uppercase',
    color: '#4E6B86',
    textAlign: 'left',
    opacity: 0.7,
    padding: 6,
    '&:first-of-type': {
      textAlign: 'center',
    },
  },
  place: {
    display: 'block',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#E33355',
    [breakpoints.up('md')]: {
      fontSize: 18,
    },
    [breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  country: {
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    fontSize: 0,
    fontWeight: 'normal',
    color: '#4E6B86',
    '& span': {
      fontSize: 16,
    },
  },
  countryFlag: {
    marginRight: 8,
    fontStyle: 'normal',
    fontSize: 24,
    [breakpoints.up('md')]: {
      fontSize: 18,
    },
    [breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
}));
