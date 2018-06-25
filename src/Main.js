import React from "react";
import Bar from "./Bar";
import InfoProfile from "./InfoProfile";
import Followers from "./Followers";
import Gallery from "./Gallery";
import Tweets from "./Tweets";
import Follows from "./Follows";
import Trends from "./Trends";
import Support from "./Support";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const ProfileImg = styled.img`
  display: block;
  max-width: 2560px;
  width: 100%;
  height: 380px;
  margin: 0 auto;
  object-fit: cover;
`;

const ProfileContent = styled.div`
  padding-top: 9px;
  background-color: #e6ecf0;
`;

function Main() {
  return (
    <main>
      <ProfileImg
        src={process.env.PUBLIC_URL + "/img/profile-image.jpg"}
        alt="profile_image"
      />
      <Bar />
      <ProfileContent>
        <Grid>
          <Row>
            <Col md={3}>
              <InfoProfile />
              <Followers />
              <Gallery />
            </Col>
            <Col md={6}>
              <Tweets />
            </Col>
            <Col md={3}>
              <Follows />
              <Trends />
              <Support />
            </Col>
          </Row>
        </Grid>
      </ProfileContent>
    </main>
  );
}

export default Main;
