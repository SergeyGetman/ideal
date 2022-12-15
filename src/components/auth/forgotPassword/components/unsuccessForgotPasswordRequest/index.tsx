import { useStyles } from '../../styles';
import { Grid, Text, Button } from '@ui';
import { t } from 'ttag';
import { Link } from 'react-router-dom';
import { clientRouts } from '@routing/routs';

export const ErrorRequest = () => {
  const classes = useStyles({});

  return (
    <Grid item>
      <Grid container direction="column" justifyContent="center" spacing={1} wrap="wrap">
        <Grid item>
          <Text variant="h3" component="div">{t`password recovery`}</Text>
        </Grid>
        <Grid className={classes.contentWrapper_badRequst}>
          <Text variant="h2" color="#E33355" textAlign="center" component="div">{t`Oops, something went wrong.`}</Text>
          <Text
            variant="h4"
            marginTop="1rem"
            textAlign="center"
            component="div"
          >{t`Email confirmation link failed to send, contact support!`}</Text>
          <Grid className={classes.buttonWrapper}>
            <Button fullWidth type="submit" variant="outlined" size="large" component={Link} to={clientRouts.contacts}>
              <Text color="#E33355">{t`CONTACTS`}</Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
