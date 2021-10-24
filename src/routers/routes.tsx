import Login from '../component/pages/login';
import Test from '../component/pages/test';
import { Switch, Route, Redirect } from 'react-router-dom';

export const Path = {
  login: '/login',
  test: '/test',
};

export const Router = (
  <Switch>
    <Route exact path={Path.login} component={Login} />
    <Route exact path={Path.test} component={Test} />
    <Redirect path="/" to={Path.login} />
  </Switch>
);
