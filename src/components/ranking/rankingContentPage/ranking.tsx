import { t, jt } from 'ttag';
import { Grid, Text } from '@ui';
import { useStyles } from './styles';
import AlwaysYoursPokerCasta from '../../depositBonus/images/logo-grey.svg';
import PeersImage from '../images/slots-desktop.png';
import { SITE_NAME } from '@utils/constants';
import { useBonusConfig } from '@contexts/bonusContext';

interface RatingProps {
  title: string;
  introduction: string;
  explanation: string;
  peers: string;
  peerTextDesktop: string;
  callToAction: string;
}

const IntroductionText = () => {
  return (
    <p>
      We use the famous <b>ELO rating system </b>, commonly found in chess and many other sports.
    </p>
  );
};

const PeersTitle = () => {
  return (
    <h5>
      If you want to relax <br /> and play with your peers
    </h5>
  );
};

const PeersTextDesktop = () => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();
  return (
    <p>
      we invite you to the Spin & Go tables, where you can make big <br className={classes.tablet} /> money with{' '}
      <br className={classes.desktop} /> a relatively small <br className={classes.large} /> buy-in (this way, for
      example,{' '}
      <b>
        a <br className={classes.tablet} /> {bonusConfig.currency_sign}
        {bonusConfig.spin_n_go_buy_in} buy-in can get you to <br className={classes.desktop} /> win{' '}
        {bonusConfig.currency_sign}
        {bonusConfig.spin_n_go_max_prize} and more
      </b>
      ).{' '}
    </p>
  );
};

export const RankingDescription = ({
  title,
  introduction,
  explanation,
  peers,
  peerTextDesktop,
  callToAction,
}: RatingProps) => {
  const classes = useStyles({});
  return (
    <>
      <Grid container direction="column" spacing={5} wrap="nowrap">
        {!!title && (
          <Grid item>
            <Text variant="h3">{title}</Text>
          </Grid>
        )}
        {!!introduction && (
          <Grid item className={classes.introduction}>
            <Text className={classes.text}>{introduction}</Text>
          </Grid>
        )}
        {!!explanation && (
          <Grid item className={classes.explanation}>
            <Text className={classes.text}>{explanation}</Text>
          </Grid>
        )}
        <Grid container direction="column" spacing={5} wrap="nowrap" className={classes.peersBlock}>
          <Grid item className={classes.peerStamp}>
            <Grid>
              {!!peers && (
                <Grid item className={classes.peerTitle}>
                  <Text variant="h5">{peers}</Text>
                </Grid>
              )}
              <Grid item className={classes.peerText}>
                <Text className={classes.text}>{peerTextDesktop}</Text>
              </Grid>
            </Grid>
            <Grid item className={classes.imageBlock}>
              <img src={PeersImage} className={classes.slots} />
            </Grid>
          </Grid>
          {!!callToAction && (
            <Grid item>
              <Text className={classes.text}>{callToAction}</Text>
            </Grid>
          )}
          <Grid item className={classes.stamp}>
            <p className={classes.text}>
              Always yours, <br /> PokerCasta
            </p>
            <img src={AlwaysYoursPokerCasta} alt={SITE_NAME} className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

RankingDescription.defaultProps = {
  title: t`PokerCasta offers a revolutionary approach to poker`,
  introduction: jt`${(<IntroductionText />)}`,
  explanation: t`We decided to do it our way so you can enjoy playing equel-level gamers 
            and not be intimidated or bored when the poker skill of your opponents is drastically different from yours.`,
  peers: jt`${(<PeersTitle />)}`,
  peerTextDesktop: jt`${(<PeersTextDesktop />)}`,
  callToAction: t`Make a cup of your favourite beverage, click the button, and dive into the world of smart poker 
            to enjoy your day and your game. `,
};
