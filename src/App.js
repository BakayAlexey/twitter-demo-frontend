import React, { Component, Fragment } from "react";
import ProfilePage from "./ProfilePage";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Twitter</title>
          <meta name="description" content="descr page" />
        </Helmet>
        <Router>
          <Switch>
            <Redirect from="/" to="/EveryInteraction" exact />
            <Route path="/EveryInteraction" component={ProfilePage} />
            <Route path="/moments" component={ProfilePage} />
            <Route path="/notifications" component={ProfilePage} />
            <Route path="/messages" component={ProfilePage} />
            <Route path="/tweets" component={ProfilePage} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
