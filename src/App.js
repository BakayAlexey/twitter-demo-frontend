import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/EveryInteraction" exact />
          <Route path="/EveryInteraction" component={ProfilePage} />
          <Route path="/moments" component={ProfilePage} />
          <Route path="/notifications" component={ProfilePage} />
          <Route path="/messages" component={ProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
