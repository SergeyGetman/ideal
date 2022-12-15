import { t, jt } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { BonusesList } from '@components/bonusesList';
import { BonusesFaq } from '@components/bonusesFaq';
import { Banner } from './banner';
import { ClaimBonus } from './claim';
import { Grid, Box, Text } from '@ui';
import { SITE_NAME } from '@utils/constants';
import LogoGreySvg from './images/logo-grey.svg';
import { useStyles } from './styles';
import clsx from 'clsx';
import { useBonusConfig } from '@contexts/bonusContext';

export const DepositBonus = () => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();
  const gradientText = (
    <span key="gradientText" className={classes.gradientText}>
      {bonusConfig.currency_sign}
      {bonusConfig.deposit_bonus_size}
    </span>
  );

  return (
    <div className={classes.root}>
      <PageHeader rootClassName={classes.header} title={<>{jt`Get ${gradientText} deposit bonus right now!`}</>} />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container className={classes.gridContainer}>
              <Grid item lg={7}>
                <Text variant="h3" gutterBottom>
                  {t`‘Transparency is the new bonus policy’ or Why PokerCasta Is The Best Room To Play In`}
                </Text>
                <Box className={classes.textContainer}>
                  <Text color="textSecondary" gutterBottom>
                    {t`VIP points, scores and credits — these are words that discourage even experienced poker players. Instead of a pleasant game, poker rooms offer a long list of complex conditions written in horrible legal language.`}
                  </Text>
                  <Text color="textSecondary" gutterBottom>
                    {t`Violate them — even without knowing — and you lose all your privileges.`}
                  </Text>
                  <Text color="textSecondary" gutterBottom>
                    {t`Also, players are often limited in time making it extremely difficult to win bonuses back, as well as withdraw money to a bank account. Some bonuses cancel others, and others dissolve into plain air if you do not play at certain stakes.`}
                  </Text>
                  <Text color="textSecondary" gutterBottom>
                    {t`It’s tiring and distracting. It’s annoying. It’s wasting your time.`}
                  </Text>
                </Box>
              </Grid>

              <Grid item lg={4} className={classes.bannerVideo}>
                <Banner />
              </Grid>
            </Grid>
          </PageBody>
          <section className={classes.claimHolder}>
            <ClaimBonus />
          </section>
          <PageBody>
            <Box className={classes.textContainer}>
              <Text color="textSecondary" gutterBottom>
                {t`It's not magic. It's respect for our customers. It’s fair play. Because we are here to make your game exciting and profitable with — `}
                <b>{t`Transparency. Real bonuses. Easy living.`}</b>
              </Text>
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
            </Box>
            <Box className={clsx(classes.textContainer, classes.bonusesList)}>
              <BonusesList list={['more', 'referral', 'rakeback']} />
              {/*'streamersOffer'*/}
            </Box>
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
