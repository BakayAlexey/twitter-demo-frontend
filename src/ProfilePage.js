import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import { Helmet } from "react-helmet";

function ProfilePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Twitter - Profile</title>
        <meta name="description" content="descr profile page" />
      </Helmet>
      <Header />
      <Main />
    </Fragment>
  );
}

export default ProfilePage;
