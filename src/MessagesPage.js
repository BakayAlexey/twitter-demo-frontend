import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

function MessagesPage() {
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
Messages Page
      </h2>
    </Fragment>
  );
}

export default MessagesPage;
