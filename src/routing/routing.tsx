import { Switch, Route } from 'react-router-dom';
import AuthRoutes from '@routing/auth.routes';
import { ClientRouting } from './client';

export const Routing = () => {
  return (
    <>
      <AuthRoutes />
      <Switch>
        <Route path={'/'} component={ClientRouting} />
      </Switch>
    </>
  );
};
