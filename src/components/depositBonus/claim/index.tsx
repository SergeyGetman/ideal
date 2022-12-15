import { t } from 'ttag';
import { useAuthContext } from '@contexts/authContext';
import { PageBody } from '@components/page';
import { Text, Box, ButtonBase, Glyph } from '@ui';
import { useStyles } from './styles';
import CoinsPng from './images/coins.png';
import { useBonusConfig } from '@contexts/bonusContext';
import { useCallback } from 'react';
import { AUTH_TYPES } from '@components/auth/utils';

export const ClaimBonus = () => {
  const classes = useStyles({});
  const { user, showAuthModal } = useAuthContext();
  const { bonusConfig } = useBonusConfig();

  const showAuthSignUpModal = useCallback(() => {
    if (user) {
      showAuthModal(AUTH_TYPES.signUp);
    }
  }, [showAuthModal]);

  return (
    <div className={classes.root}>
      <div className={classes.bgHolder}>
        <span className={classes.bg} />
      </div>
      <PageBody>
        <div className={classes.container}>
          <div className={classes.content}>
            <Text variant="h4" gutterBottom>
              {t`So we asked ourselves — how can we change this?`}
            </Text>
            <Text color="textSecondary">{t`And the answer is simple — with honesty and simplicity.`}</Text>
            <Box sx={{ my: '20px' }}>
              <ButtonBase className={classes.button} onClick={showAuthSignUpModal}>
                <span className={classes.buttonCaptionHolder}>
                  <span className={classes.buttonArrowHolder}>
                    <span className={classes.buttonArrow} />
                  </span>
                  <span
                    className={classes.buttonCaption}
                  >{t`Claim ${bonusConfig.currency_sign}${bonusConfig.deposit_bonus_size} BONUS NOW`}</span>
                </span>
                <span className={classes.buttonBonus}>
                  <Glyph name="bonus" className={classes.bonusIcon} />
                </span>
              </ButtonBase>
            </Box>
            <Text color="textSecondary" gutterBottom>
              {t`We suggest you save your time and claim your bonus with PokerCasta.`}
            </Text>
            <Text color="textSecondary">
              <b>{t`A ${bonusConfig.currency_sign}${bonusConfig.deposit_bonus_size} deposit for your pleasure is sent to your stack right at the table during the showdown. All you have to do is to simply play poker.`}</b>
            </Text>
          </div>
          <div className={classes.imageHolder}>
            <img src={CoinsPng} alt="" />
          </div>
        </div>
      </PageBody>
    </div>
  );
};
