import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { Feedback } from '@components/feedback';
import { RankingDescription } from '@components/ranking/rankingContentPage/ranking';
import { Grid } from '@ui';

// styles
import { useStyles } from './styles';

export const Ranking = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader rootClassName={classes.header} headerClassName={classes.headerBg} title={t`Famous rating system`} />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <RankingDescription />
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
