import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import MomentPage from './MomentPage';
import NotificationsPage from './NotificationsPage';
import MessagesPage from './MessagesPage';

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>
Twitter
        </title>
        <meta name="description" content="descr page" />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/EveryInteraction" component={ProfilePage} exact />
          <Route path="/moments" component={MomentPage} exact />
          <Route path="/notifications" component={NotificationsPage} exact />
          <Route path="/messages" component={MessagesPage} exact />
          <Route path="/tweets" component={ProfilePage} />
          <Route path="/" component={ProfilePage} exact />
          <Redirect from="/123" to="/EveryInteraction" exact />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
