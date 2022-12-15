import { useStyles } from '../styles';
import { Particles } from '@components/auth/preSignUp/particles';
import { Text } from '@ui';
import { t } from 'ttag';

const PARTICLES_DURATION = 5000;

const PreSignUpSubmitSuccess = () => {
  const classes = useStyles();

  return (
    <div className={classes.response}>
      <Particles duration={PARTICLES_DURATION} />
      <div>
        <Text color="#23A75F" className={classes.responseTitle}>
          {t`Thanks for sign up!`}
        </Text>
        <Text gutterBottom>{t`PokerCasta is coming soon, we'll notify you once we go live.`}</Text>
        <Text>{t`See you at the tables!`}</Text>
      </div>
    </div>
  );
};

export default PreSignUpSubmitSuccess;
