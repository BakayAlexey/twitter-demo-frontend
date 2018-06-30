import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
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
      <IntlProvider locale="en">
        <Router>
          <Switch>
            <Route
              path="/:direction(about|help-center|terms|privacy-policy|cookies|ads-info)"
              component={StaticPages}
            />
            <Route path="/" component={ProfilePage} />
          </Switch>
        </Router>
      </IntlProvider>
    </Fragment>
  );
}

export default App;
