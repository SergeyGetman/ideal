import { Glyph, ButtonBase } from '@ui';
import { t } from 'ttag';
import { useStyles } from './styles';
import { useCallback } from 'react';
import { useBonusConfig } from '@contexts/bonusContext';
import { useAuthContext } from '@contexts/authContext';
import { AUTH_TYPES } from '@components/auth/utils';

export const ButtonSignInUp = () => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();
  const { showAuthModal } = useAuthContext();
  const openAuthSignInModal = useCallback(() => showAuthModal(AUTH_TYPES.signIn), [showAuthModal]);
  const openAuthSignUpModal = useCallback(() => showAuthModal(AUTH_TYPES.signUp), [showAuthModal]);
  const openResetEmailModal = useCallback(() => showAuthModal(AUTH_TYPES.resetPassword), [showAuthModal]);

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.buttonCaption_reset} onClick={openResetEmailModal}>
        {t`Reset Email`}
      </ButtonBase>
      <ButtonBase className={classes.buttonCaption} onClick={openAuthSignInModal}>
        {t`Sign In`}
      </ButtonBase>
      <ButtonBase className={classes.buttonBonus} onClick={openAuthSignUpModal}>
        <span className={classes.buttonSignUp}>{t`Sign Up`}</span>
        <span className={classes.buttonPlus}>+</span>
        <Glyph name="bonus" className={classes.bonusIcon} />
        <span className={classes.buttonBonusContainer}>
          <span className={classes.buttonValueThousand}>
            {bonusConfig.currency_sign}
            {bonusConfig.deposit_bonus_size}
          </span>
          <span className={classes.buttonValueBonus}>{t`bonus!`}</span>
        </span>
      </ButtonBase>
    </div>
  );
};
