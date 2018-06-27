import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function Moments() {
  return (
    <h2>
Moments
    </h2>
  );
}

function Notifications() {
  return (
    <h2>
Notifications
    </h2>
  );
}

function Messages() {
  return (
    <h2>
Messages
    </h2>
  );
}

function ProfilePage() {
  return (
    <Fragment>
      <Helmet>
        <title>
Twitter - Profile
        </title>
        <meta name="description" content="descr profile page" />
      </Helmet>
      <Header />
      <Switch>
        <Redirect from="/" to="/EveryInteraction" exact />
        <Route path="/EveryInteraction" component={Main} />
        <Route path="/moments" component={Moments} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </Fragment>
  );
}

export default ProfilePage;
