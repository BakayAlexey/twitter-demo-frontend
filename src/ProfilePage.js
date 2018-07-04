import React, { Component, Fragment } from 'react';
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

class ProfilePage extends Component {
  state = {
    userData: {},
    error: null,
  };

  componentDidMount() {
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretKey = process.env.REACT_APP_KEY;

    fetch(`${hostname}/api/v1/accounts/1?access_token=${secretKey}`)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({ userData: response });
        },
        (error) => {
          this.setState({ error });
        },
      );
  }

  render() {
    const { userData, error } = this.state;

    if (error) {
      return (
        <div>
Error
        </div>
      );
    }

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
          <Redirect from="/" to="/admin" exact />
          <Route path="/moments" component={Moments} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/messages" component={Messages} />
          <Route path="/:username" render={props => <Main {...props} userData={userData} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default ProfilePage;
