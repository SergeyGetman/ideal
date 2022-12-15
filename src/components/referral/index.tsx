import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { Steps } from './steps';
import { Text } from '@ui';
import { useStyles } from './styles';
import { Feedback } from '@components/feedback';
import { useBonusConfig } from '@contexts/bonusContext';

export const Referral = () => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();
  return (
    <div className={classes.root}>
      <PageHeader rootClassName={classes.header} title={t`Friendship wins... and so do you!`} />
      <div className={classes.container}>
        <PageBody>
          <div className={classes.content}>
            <Text variant="h3" gutterBottom>
              {t`PokerCasta referral program: unique conditions, enjoyable rewards`}
            </Text>
            <Text color="textSecondary" gutterBottom>
              {t`Most poker rooms ruin the concept of the referral program: a lot of ridiculous conditions almost impossible to meet, scanty reward and no pleasure from the game.`}
            </Text>
            <Text color="textSecondary" gutterBottom>
              {t`At PokerCasta, we value not just our players but also their close friends. That’s why we have developed a unique referral program that is available only in our poker room. Invite your friends to PokerCasta and get ${bonusConfig.referral_bonus_percentage}% of your friend's rake! The money goes to your stack at the table during the game.`}
            </Text>
            <Text color="textSecondary" gutterBottom>
              <b>{t`Our only condition is — no extra conditions!`}</b>
            </Text>
          </div>
        </PageBody>
        <Steps />
        <div className={classes.feedbackContainer}>
          <Feedback />
        </div>
      </div>
    </div>
  );
};
