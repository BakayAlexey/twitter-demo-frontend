import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Bar from './Bar';
import InfoProfile from './InfoProfile';
import Followers from './Followers';
import Galleries from './Galleries';
import Tweets from './Tweets';
import Follows from './Follows';
import Trends from './Trends';
import Support from './Support';

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

function Main(props) {
  const { match, userData } = props;
  return (
    <main>
      <ProfileImg src={userData.header_static} alt="profile_image" />
      <Bar />
      <ProfileContent>
        <Grid>
          <Row>
            <Col md={3}>
              <InfoProfile userData={userData} />
              <Followers id={userData.id} />
              <Galleries />
            </Col>

            <Switch>
              <Route
                path={`${match.url}/following`}
                render={() => (
                  <Col md={9}>
                    <h2>
following
                    </h2>
                  </Col>
                )}
              />
              <Route
                path={`${match.url}/followers`}
                render={() => (
                  <Col md={9}>
                    <h2>
followers
                    </h2>
                  </Col>
                )}
              />
              <Route
                path={`${match.url}/likes`}
                render={() => (
                  <Col md={9}>
                    <h2>
likes
                    </h2>
                  </Col>
                )}
              />
              <Route
                path={`${match.url}/lists`}
                render={() => (
                  <Col md={9}>
                    <h2>
lists
                    </h2>
                  </Col>
                )}
              />
              <Route
                path={`${match.url}`}
                render={() => (
                  <Fragment>
                    <Col md={6}>
                      <Tweets id={userData.id} />
                    </Col>
                    <Col md={3}>
                      <Follows />
                      <Trends />
                      <Support />
                    </Col>
                  </Fragment>
                )}
              />
            </Switch>
          </Row>
        </Grid>
      </ProfileContent>
    </main>
  );
}

export default Main;
