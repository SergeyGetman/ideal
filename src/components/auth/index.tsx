import clsx from 'clsx';
import { Overlay } from '@components/overlay';
import { SignInForm } from './signIn';
import { ForgotPasswordForm } from './forgotPassword';
import { IconButton } from '@ui';
import { AUTH_TYPES, AuthType } from './utils';
import CrossIcon from '@svg_icons/cross.svg';
import { useStyles } from './styles';
import PurePreSignUp from '@components/auth/preSignUp/purePreSignUp';
import background from '../auth/preSignUp/images/birthday-lg.png';
import { SideBar } from './sideBar';
import { RecoveryPasswordForm } from '@components/auth/recoveryPassword';
import { useBonusConfig } from '@contexts/bonusContext';
import { ResendEmailConfirmation } from '@components/auth/resendEmailConfirmation';

const styles = {
  backdropProps: {
    sx: {
      backgroundPosition: 'center, center',
      backgroundImage: `url(${background})}`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 1,
      minWidth: 650,
    },
  },
};

export interface AuthProps {
  isVisible: boolean;
  onClose: () => void;
  authType: AuthType | null;
}

const AuthTypeForm = ({ authType }: Pick<AuthProps, 'authType'>) => {
  switch (authType) {
    case AUTH_TYPES.signIn: {
      return <SignInForm />;
    }
    case AUTH_TYPES.signUp: {
      return <PurePreSignUp />;
    }
    case AUTH_TYPES.forgotPassword: {
      return <ForgotPasswordForm />;
    }
    case AUTH_TYPES.recoveryPassword: {
      return <RecoveryPasswordForm />;
    }
    case AUTH_TYPES.resetPassword: {
      return <ResendEmailConfirmation />;
    }
    default: {
      return null;
    }
  }
};

export const Auth = ({ isVisible, onClose, authType }: AuthProps) => {
  const classes = useStyles({});
  const { bonusConfig } = useBonusConfig();

  if (!authType) {
    return null;
  }

  return (
    <Overlay open={isVisible} onClose={onClose} backdropProps={styles.backdropProps}>
      <div className={clsx(classes.modalHendlerInside, classes.blocksMobileTitile)}>
        <p className={classes.headerInModal}>
          HAPPY BIRTHDAY! <br />
          SIGN UP AND GET
          <span className={classes.letterThouthend}>
            {' '}
            {bonusConfig.currency_sign}
            {bonusConfig.deposit_bonus_size}{' '}
          </span>
          <span className={classes.lettersInHeadersModal}>DEPOSITS BONUS!</span>
        </p>
      </div>
      <div className={classes.root}>
        <div className={classes.formHolder}>
          <AuthTypeForm authType={authType} />
          <IconButton className={classes.close} iconColor="#3E4776" iconSize={20} glyph={CrossIcon} onClick={onClose} />
        </div>
        <SideBar />
      </div>
    </Overlay>
  );
};

Auth.defaultProps = {
  isVisible: false,
};
