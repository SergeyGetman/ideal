import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { BonusesList } from '@components/bonusesList';
import { UnderConstruction } from '@components/underConstruction';
import { BonusesFaq } from '@components/bonusesFaq';
import { Grid, Text } from '@ui';

// styles
import { useStyles } from './styles';

export const StreamersOffer = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`Special offer for streamers!`}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <UnderConstruction />
              </Grid>
              <Grid item>
                <BonusesList list={['more', 'deposit', 'referral', 'rakeback']} />
              </Grid>
            </Grid>
          </PageBody>
          <section className={classes.faqHolder}>
            <PageBody>
              <Text variant="h3" gutterBottom>
                {t`Frequently asked question about bonuses`}
              </Text>
              <BonusesFaq />
            </PageBody>
          </section>
        </div>
      </div>
    </div>
  );
};
