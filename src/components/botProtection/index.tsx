import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { Feedback } from '@components/feedback';
import { Grid, Text } from '@ui';
import { SITE_NAME } from '@utils/constants';
import LogoGreySvg from './images/logo-grey.svg';

// styles
import { useStyles } from './styles';

export const BotProtection = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`Effective anti bot protection system`}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <Text variant="h3" gutterBottom>
                  {t`How We Do Bot Protection At PokerCasta`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`All major poker rooms have security systems installed in order to provide bot-free game experience for their users. PokerCasta chose to have additional security measures in place to prevent bots from interfering.`}
                </Text>

                <Text variant="h3" gutterBottom>
                  {t`How We Ensure Ultimate Bot Protection `}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`To make sure you only interact with human players, we have introduced 4 layers of bot protection:`}
                </Text>

                <Text variant="h6" gutterBottom>
                  <span className={classes.listNumber}>1. </span>
                  {t`PATTERTN DETECTION`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`Despite the advance of modern technology, computer play is still very different from that of a human. This includes hand choices, style of play, consistency, risk assessment, etc.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`For example, a bot would make raises with the same occurrence, while a real person would not. This and other types of behavior are easy to detect as a pattern and prevent the bot from interfering with the game.`}
                </Text>

                <Text variant="h6" gutterBottom>
                  <span className={classes.listNumber}>2. </span>
                  {t`CAPTCHA`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`You've probably seen a CAPTCHA check on multiple websites. We have it, too, to protect you and other players from bots.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`There are signals that make CAPTCHA checks occur more often - be it a long period of play or handling multiple tables at once. We use a version of CAPTCHA that is impossible for a bot to pass by.`}
                </Text>

                <Text variant="h6" gutterBottom>
                  <span className={classes.listNumber}>3. </span>
                  {t`HUMAN CONTROL`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`Although the measures mentioned above can be quite sufficient for bot protection, we also have a security team in place here, at PokerCasta. This team is constantly looking for possible suspicious activity and checks users' reports of such.`}
                </Text>

                <Text variant="h6" gutterBottom>
                  <span className={classes.listNumber}>4. </span>
                  {t`3RD PARTY DETECTION TOOLS`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`Apart from our own pattern detection software we also use specialized 3rd party detection tools. This additional layer of security helps ensure the maximum level of safety for our players and allows them to simply enjoy the game with no second thoughts.`}
                </Text>
                <Text color="textSecondary" gutterBottom>
                  {t`If you have questions about our bot prevention system or would like to report suspicious activity, please, email us at `}
                  <a className={classes.supportMail} href="mailto:support@pokercasta.com">
                    support@pokercasta.com
                  </a>
                </Text>
              </Grid>

              <Grid item container alignItems="center" spacing={5}>
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
