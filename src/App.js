import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';

const StaticPages = ({ match }) => (
  <h2>
    {match.params.direction}
  </h2>
);

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
          <Route
            path="/:direction(about|helpCenter|terms|privacyPolicy|cookies|adsInfo)"
            component={StaticPages}
          />
          <Route path="/" component={ProfilePage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
