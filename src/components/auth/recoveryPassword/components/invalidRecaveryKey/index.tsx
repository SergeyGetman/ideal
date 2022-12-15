import { Button, Grid, Text } from '@ui';
import { t } from 'ttag';
import { useStyles } from '../../styles';
import { Link } from 'react-router-dom';
import { clientRouts } from '@routing/routs';

export const BadKeyResponseLayout = () => {
  const classes = useStyles({});
  return (
    <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
      <Grid item>
        <Text variant="h3" component="div">{t`New password`}</Text>
      </Grid>
      <Grid item>
        <Grid className={classes.contentWrapper_badRequest} container direction="column" spacing={6} wrap="nowrap">
          <Grid item>
            <Text
              variant="h2"
              color="#E33355"
              textAlign="center"
              component="div"
            >{t`Password recovery key is wrong or expired`}</Text>
            <Grid className={classes.buttonWrapper}>
              <Button
                component={Link}
                to={clientRouts.forgotPassword}
                fullWidth
                type="submit"
                variant="outlined"
                size="large"
              >
                <Text color="#E33355">{t`SEND LINK AGAIN`}</Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
