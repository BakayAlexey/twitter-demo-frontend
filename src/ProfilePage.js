// @flow

import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
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

type Props = {
  match: Match,
}

type UserData = {
  id: string,
  username: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  error?: string,
};

type State = {
  userData: ?UserData,
  error: ?Object,
};

class ProfilePage extends Component<Props, State> {
  state = {
    userData: null,
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
    if (!secretKey) throw new Error('Missing REACT_APP_KEY');
    if (typeof id !== 'string') throw new Error('id invalid format');

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

    if (!userData) {
      return (
        <div>
          No userData
        </div>
      );
    }

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
