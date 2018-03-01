import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import TestMainLayoutRoute from './routes/TestMainLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TestMainLayoutRoute} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
