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
  };

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/1?access_token=${
        process.env.REACT_APP_KEY
      }`,
    )
      .then(response => response.json())
      .then((userData) => {
        console.log(userData);
        this.setState({ userData });
      })
      .catch(alert);
  }

  render() {
    const { userData } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>
Twitter - Profile
          </title>
          <meta name="description" content="descr profile page" />
        </Helmet>
        <Header avatar={userData.avatar_static} />
        <Switch>
          <Redirect from="/" to="/admin" exact />
          <Route path="/moments" component={Moments} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/messages" component={Messages} />
          <Route path="/:username" render={() => <Main userData={userData} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default ProfilePage;
