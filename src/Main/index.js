import React from "react";
import Bar from "./Bar";
import InfoProfile from "./InfoProfile";
import Tweets from "./Tweets";
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
        src={process.env.PUBLIC_URL + "/img/Profile_image.jpg"}
        alt="profile_image"
      />
      <Bar />
      <ProfileContent>
        <Grid>
          <Row>
            <Col md={3}>
              <InfoProfile />
            </Col>
            <Col md={6}>
              <Tweets />
            </Col>
          </Row>
        </Grid>
      </ProfileContent>
    </main>
  );
}

export default Main;
