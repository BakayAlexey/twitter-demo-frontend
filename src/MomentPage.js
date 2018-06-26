import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

function MomentPage() {
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
Moment Page
      </h2>
    </Fragment>
  );
}

export default MomentPage;
