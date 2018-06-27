import React from 'react';
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

function Followers() {
  const followersData = [
    {
      to: '/salahov30',
      img: `${process.env.PUBLIC_URL}/img/followers1.jpg`,
      description: 'followerDescr',
    },
    {
      to: '/VonderVuflya‏',
      img: `${process.env.PUBLIC_URL}/img/followers2.jpg`,
      description: 'followerDescr',
    },
    {
      to: '/noveltyshoe',
      img: `${process.env.PUBLIC_URL}/img/followers3.jpg`,
      description: 'followerDescr',
    },
    {
      to: '/Artsalve',
      img: `${process.env.PUBLIC_URL}/img/followers4.jpg`,
      description: 'followerDescr',
    },
    {
      to: '/aya_ulan',
      img: `${process.env.PUBLIC_URL}/img/followers5.jpg`,
      description: 'followerDescr',
    },
    {
      to: '/lighthorsechris',
      img: `${process.env.PUBLIC_URL}/img/followers6.jpg`,
      description: 'followerDescr',
    },
  ];

  const followersList = followersData.map(follower => (
    <Follower
      key={Math.random()}
      to={follower.to}
      img={follower.img}
      description={follower.description}
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

export default Followers;
