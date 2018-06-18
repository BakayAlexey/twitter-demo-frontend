import React, { Fragment } from "react";
import Bar from "./Bar";
// import MainContent from "./MainContent";
import styled from "styled-components";

const ProfileImg = styled.div`
  position: relative;
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }
`;

function Main() {
  return (
    <main>
      <ProfileImg>
        <img
          src={process.env.PUBLIC_URL + "/img/Profile_image.jpg"}
          alt="profile_image"
        />
      </ProfileImg>
      <Bar />
    </main>
  );
}

export default Main;
