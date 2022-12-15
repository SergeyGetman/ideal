import { useStyles } from '../../../styles';
import { Grid, Text, Button } from '@ui';
import { Link } from 'react-router-dom';
import { t } from 'ttag';
import { clientRouts } from '@routing/routs';

export const UnSuccessUpdatePassword = () => {
  const classes = useStyles({});
  return (
    <Grid item>
      <Grid container direction="column" justifyContent="center" spacing={1} wrap="wrap">
        <Grid item>
          <Text variant="h3" component="div">{t`new password`}</Text>
        </Grid>
        <Grid className={classes.contentWrapper}>
          <Text variant="h2" color="#E33355" textAlign="center" component="div">{t`Oops, something went wrong.`}</Text>
          <Text
            variant="h4"
            marginTop="1rem"
            textAlign="center"
            component="div"
          >{t`Password failed to change, contact support!`}</Text>
          <Grid className={classes.buttonWrapper}>
            <Button component={Link} to={clientRouts.contacts} fullWidth type="submit" variant="outlined" size="large">
              <Text color="#E33355">{t`CONTACTS`}</Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
