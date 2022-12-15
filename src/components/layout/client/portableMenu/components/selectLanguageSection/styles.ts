import { makeStyles } from '@utils/styles';

export const useStyles = makeStyles(({}) => ({
  languagesDescription: {
    display: 'flex',
    justifyContent: 'center',
  },
  languagesDescriptionItem: {
    fontSize: '3vw',
    fontWeight: 400,
    color: '#838599',
    lineHeight: '1rem',
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  locales: {
    color: '#515264',
    marginTop: '1rem',
  },
}));
