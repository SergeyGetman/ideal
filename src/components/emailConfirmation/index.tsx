import { t } from 'ttag';
import { Link as RouteLink } from 'react-router-dom';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { Feedback } from '@components/feedback';
import { useTheme } from '@hooks/useTheme';
import { Grid, Text, Button, Spinner } from '@ui';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

export const EmailConfirmation = ({ data }) => {
  const classes = useStyles({});
  const { palette } = useTheme();

  const renderComponent = (renderState) => {
    switch (renderState) {
      case 'error':
        return (
          <div className={classes.holder}>
            <Text
              variant="h3"
              color={palette.error.main}
            >{t`Oops, something went wrong. Email confirmation failed.`}</Text>
            <Text className={classes.subtitle}>{t`Contact us and we'll resolve your problem.`}</Text>
            <div className={classes.buttonHolder}>
              <Button component={RouteLink} size="large" fullWidth variant="outlined" to={clientRouts.contacts}>
                <Text color="#E33355">
                  <b>{t`Contacts`}</b>
                </Text>
              </Button>
            </div>
          </div>
        );
      case 'success':
        return (
          <div className={classes.holder}>
            <Text variant="h3" color={palette.success.main}>{t`Congratulations! email confirmed.`}</Text>
            <div className={classes.buttonHolder}>
              <Button component={RouteLink} size="large" fullWidth variant="outlined" to={clientRouts.home}>
                <Text color="#E33355">
                  <b>{t`Home`}</b>
                </Text>
              </Button>
            </div>
          </div>
        );
      default:
        return (
          <div className={classes.holder}>
            <Spinner />
          </div>
        );
    }
  };

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        path={['emailconfirmation']}
        title={t`Email confirmation`}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={15} wrap="nowrap">
              <Grid item>{renderComponent(data)}</Grid>
              <Grid display="none" item>
                <Feedback />
              </Grid>
            </Grid>
          </PageBody>
        </div>
      </div>
    </div>
  );
};
