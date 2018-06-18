import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ProfilePage />
        </div>
      </Router>
    );
  }
}

export default App;
