import { AuthTypeActionBarProps } from '@components/auth/authTypeActionBar/types';
import SignUpActions from '@components/auth/authTypeActionBar/signUpActions';
import { useStyles } from './styles';
import SignInActions from '@components/auth/authTypeActionBar/signInActions';
import ForgotPasswordActions from '@components/auth/authTypeActionBar/forgotPasswordActions';

const AuthTypeActionBarSwitch = ({ authType, setAuthType }: AuthTypeActionBarProps) => {
  if (authType === 'signUp') {
    return <SignUpActions setAuthType={setAuthType} />;
  }

  if (authType === 'signIn') {
    return <SignInActions setAuthType={setAuthType} />;
  }

  if (authType === 'forgotPassword') {
    return <ForgotPasswordActions setAuthType={setAuthType} />;
  }

  return null;
};

const AuthTypeActionBar = ({ authType, setAuthType }: AuthTypeActionBarProps) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AuthTypeActionBarSwitch authType={authType} setAuthType={setAuthType} />
    </div>
  );
};

export default AuthTypeActionBar;
