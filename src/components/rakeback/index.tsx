import { t, jt } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { BonusesList } from '@components/bonusesList';
import { BonusesFaq } from '@components/bonusesFaq';
import { Grid, Text } from '@ui';

// styles
import { useStyles } from './styles';
import { useMemo } from 'react';
import { SITE_NAME } from '@utils/constants';
import LogoGreySvg from '@components/depositBonus/images/logo-grey.svg';
import { useBonusConfig } from '@contexts/bonusContext';

export const Rakeback = () => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();
  const gradientText = (
    <span key="gradientText" className={classes.gradientText}>
      {bonusConfig.rakeback_bonus_percentage}
      {'%'}
    </span>
  );

  const list = useMemo(() => {
    return ['more', 'deposit', 'referral' /*'streamersOffer'*/];
  }, []);

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={<>{jt`Rakeback bonus ${gradientText} just for you!`}</>}
      />
      <div className={classes.container}>
        <PageBody>
          <Grid container direction="column" spacing={10} wrap="nowrap">
            <Grid item>
              <div className={classes.content}>
                <Text variant="h3" gutterBottom>
                  {t`Let us tell you about our rakeback bonus policy.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`And yet again, it's a very simple and straightforward one.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`Other rooms might have confusing multi-level-tiered programs and vague terms and conditions, but just like with other types of bonuses, it's not about us.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`PokerCasta is the only room that offers an instant rakeback. Just get to showdown and claim your bonus.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`You don't have to wait for a certain amount of money or reach any specific levels of play — even a ${bonusConfig.currency_sign}0.01 bonus is paid instantly. As always — there are no additional requirements and no strings attached.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`Just sit back, relax and have fun. Our expert team has taken care of everything else.`}
                </Text>
              </div>
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
            </Grid>
            <Grid item>
              <BonusesList list={list} />
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
  );
};
