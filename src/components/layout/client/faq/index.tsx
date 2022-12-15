import { Link as RouteLink } from 'react-router-dom';
import { t } from 'ttag';
import { PageBody } from '@components/page';
import { clientRouts } from '@routing/routs';
import { Grid } from '@ui';

// styles
import { useStyles } from './styles';

export const Faq = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageBody>
        <div className={classes.content}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={8}>
              <span>{t`Still have a Question?`}</span>
            </Grid>
            <Grid item xs={6} sm={2}>
              <span className={classes.itemfaq}>
                <RouteLink to={clientRouts.faq} className={classes.link}>
                  {t`FAQ`}
                </RouteLink>
              </span>
            </Grid>
            <Grid item xs={6} sm={2}>
              <span className={classes.itemsupport}>
                <RouteLink to={clientRouts.contacts} className={classes.link}>
                  {t`Support`}
                </RouteLink>
              </span>
            </Grid>
          </Grid>
        </div>
      </PageBody>
    </div>
  );
};
