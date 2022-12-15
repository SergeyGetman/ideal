import { Grid } from '@ui';
import { useStyles } from './styles';
import { t } from 'ttag';

export const PokerCastaTagline = () => {
  const classes = useStyles({});
  return (
    <Grid container direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={4}>
      <Grid item xs>
        <h4 className={classes.title}>{t`Home poker online`}</h4>
        <p className={classes.text}>{t`Join recreational poker community!`}</p>
      </Grid>
    </Grid>
  );
};
