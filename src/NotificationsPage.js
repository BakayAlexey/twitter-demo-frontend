import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

function NotificationsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
Twitter - Profile
        </title>
        <meta name="description" content="descr profile page" />
      </Helmet>
      <Header />
      <h2>
Notifications Page
      </h2>
    </Fragment>
  );
}

export default NotificationsPage;
