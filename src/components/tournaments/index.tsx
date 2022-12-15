import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { Feedback } from '@components/feedback';
import { UnderConstruction } from '@components/underConstruction';
import { Grid } from '@ui';

// styles
import { useStyles } from './styles';

export const Tournaments = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader rootClassName={classes.header} title={t`Tournaments`} />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <UnderConstruction />
              </Grid>
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
