import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { BonusesList } from '@components/bonusesList';
import { BonusesDescription } from '@components/bonuses/bonusesPageText/bonuses';
import { BonusesFaq } from '@components/bonusesFaq';
import { Grid, Text } from '@ui';
import { useStyles } from './styles';
import { SITE_NAME } from '@utils/constants';
import LogoGreySvg from '@components/depositBonus/images/logo-grey.svg';

export const Bonuses = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`All amazing bonuses for your profitable game!`}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <Grid item>
                  <BonusesDescription />
                </Grid>
                <div className={classes.internalcontainer}>
                  <Grid container alignItems="center" spacing={5}>
                    <Grid item>
                      <Text color="textSecondary">
                        {t`Always yours,`}
                        <br />
                        {SITE_NAME}
                      </Text>
                    </Grid>
                    <Grid item style={{ fontSize: 0 }}>
                      <img src={LogoGreySvg} alt={SITE_NAME} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <BonusesList />
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
