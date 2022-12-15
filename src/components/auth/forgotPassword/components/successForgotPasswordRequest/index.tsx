import { useStyles } from '../../styles';
import { Grid, Button, Text } from '@ui';
import { t } from 'ttag';
import { Link } from 'react-router-dom';
import { clientRouts } from '@routing/routs';

export const SuccessRequest = () => {
  const classes = useStyles({});

  return (
    <Grid container direction="column" justifyContent="center" spacing={1} wrap="wrap">
      <Grid item>
        <Text variant="h3" component="div">{t`password recovery`}</Text>
      </Grid>
      <Grid className={classes.contentWrapper_successRequst}>
        <Text variant="h2" color="#23A75F" textAlign="center" component="div">
          {t` SUCCESS!`}
        </Text>
        <Text
          variant="h4"
          marginTop="1rem"
          textAlign="center"
          component="div"
        >{t`Email confirmation link has been sent to your email address, follow the instructions.`}</Text>
        <Grid className={classes.buttonOfHome}>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to={clientRouts.home}
          >
            <Text color="#E33355">{t`Home`}</Text>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
