import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconFollowers from './icons/icon-followers.svg';

const StFollowers = styled.div`
  padding: 15px 0;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  display: block;
  width: 13px;
  height: 16px;
  margin-right: 12px;
`;

const Title = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  text-decoration: none;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
`;

const StFollower = styled(Link)`
  box-sizing: border-box;
  width: 20%;
  margin-bottom: 4px;
  padding: 0 2px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

function Follower(props) {
  const { to, img, description } = props;
  return (
    <StFollower to={to}>
      <Img src={img} alt={description} />
    </StFollower>
  );
}

class Followers extends Component {
  state = {
    followersData: [],
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;

    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretKey = process.env.REACT_APP_KEY;

    fetch(`${hostname}/api/v1/accounts/${id}/followers?access_token=${secretKey}`)
      .then(res => res.json())
      .then(
        (followersData) => {
          this.setState({ followersData });
        },
        (error) => {
          this.setState({ error });
        },
      );
  }

  render() {
    const { followersData, error } = this.state;

    if (error || followersData.error) {
      return (
        <div>
Error
        </div>
      );
    }

    if (followersData.length === 0) {
      return (
        <div>
Followers list is empty
        </div>
      );
    }

    const followersList = followersData.map(follower => (
      <Follower
        key={follower.id}
        to={`/${follower.id}`}
        img={follower.avatar_static}
        description={follower.username}
      />
    ));

    return (
      <StFollowers>
        <Head>
          <Icon src={iconFollowers} alt="followers" />
          <Title to="/followers">
6 Followers you know
          </Title>
        </Head>

        <FollowersList>
          {followersList}
        </FollowersList>
      </StFollowers>
    );
  }
}

export default Followers;
