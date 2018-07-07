import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
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
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretKey = process.env.REACT_APP_KEY;

    fetch(`${hostname}/api/v1/accounts/${id}?access_token=${secretKey}`)
      .then(res => res.json())
      .then(
        (userData) => {
          this.setState({ userData });
        },
        (error) => {
          this.setState({ error });
        },
      );
  }

  render() {
    const { userData, error } = this.state;

    if (error || userData.error) {
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
          <Route path="/moments" component={Moments} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/messages" component={Messages} />
          <Route
            path={`/${userData.id}`}
            render={props => <Main {...props} userData={userData} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default ProfilePage;
