import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';

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
            path="/about"
            render={() => (
              <h2>
about
              </h2>
            )}
          />
          <Route
            path="/helpCenter"
            render={() => (
              <h2>
helpCenter
              </h2>
            )}
          />
          <Route
            path="/terms"
            render={() => (
              <h2>
terms
              </h2>
            )}
          />
          <Route
            path="/privacyPolicy"
            render={() => (
              <h2>
privacyPolicy
              </h2>
            )}
          />
          <Route
            path="/cookies"
            render={() => (
              <h2>
cookies
              </h2>
            )}
          />
          <Route
            path="/adsInfo"
            render={() => (
              <h2>
adsInfo
              </h2>
            )}
          />
          <Route path="/" component={ProfilePage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
