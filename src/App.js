import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <ProfilePage />
      </Router>
    </Fragment>
  );
}

export default App;
