import { useAuthContext } from '@contexts/authContext';
import { Auth } from '@components/auth';
import { Route, Switch, useHistory } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import { useCallback } from 'react';
import { AUTH_TYPES } from '@components/auth/utils';

const AuthRoutes = () => {
  const history = useHistory();

  const { authType, hideAuthModal } = useAuthContext();

  const goToHomePage = useCallback(() => {
    history.push(clientRouts.home);
  }, [history]);

  if (authType) {
    return <Auth isVisible onClose={hideAuthModal} authType={authType} />;
  }

  return (
    <Switch>
      <Route path={clientRouts.signUp}>
        <Auth isVisible onClose={goToHomePage} authType={AUTH_TYPES.signUp} />
      </Route>
      <Route path={clientRouts.signIn}>
        <Auth isVisible onClose={goToHomePage} authType={AUTH_TYPES.signIn} />
      </Route>
      <Route path={clientRouts.recoveryPassword}>
        <Auth isVisible onClose={goToHomePage} authType={AUTH_TYPES.recoveryPassword} />
      </Route>
      <Route path={clientRouts.forgotPassword}>
        <Auth isVisible onClose={goToHomePage} authType={AUTH_TYPES.forgotPassword} />
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
