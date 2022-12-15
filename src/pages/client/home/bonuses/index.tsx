import { t } from 'ttag';
import { Link as RouteLink } from 'react-router-dom';
import { Text, Grid, Link, Box } from '@ui';
import { clientRouts } from '@routing/routs';
import { BonusesList } from '@components/bonusesList';

// styles
import { useStyles } from './styles';

export const BonusesSection = () => {
  const classes = useStyles({});

  return (
    <>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
          wrap="wrap"
        >
          <Grid item container alignItems="center" xs>
            <Text variant="h3" className={classes.title} noWrap>{t`Great conditions and bonuses`}</Text>
            <span className={classes.fireIcon} />
          </Grid>
          <Grid item>
            <Link color="secondary" className={classes.link} component={RouteLink} to={clientRouts.bonuses}>
              {t`Show all`}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <BonusesList />
    </>
  );
};
