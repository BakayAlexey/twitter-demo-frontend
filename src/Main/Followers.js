import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconFollowers from "./icons/IconFollowers.svg";

const Wrapper = styled.div`
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
`;

const StFollower = styled(Link)`
  width: calc((100% - 20px) / 5);
  margin-right: 5px;
  margin-bottom: 5px;
  &:nth-child(5n) {
    margin-right: 0;
  }
  img {
    display: block;
    width: 100%;
  }
`;

function Follower(props) {
  return (
    <StFollower to={props.to}>
      <img src={props.img} alt={props.descr} />
    </StFollower>
  );
}

function Followers() {
  return (
    <Wrapper>
      <Head>
        <Icon src={iconFollowers} alt="followers" />
        <Title to="/followers">6 Followers you know</Title>
      </Head>

      <FollowersList>
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers1.jpg"}
          descr="followerDescr"
        />
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers2.jpg"}
          descr="followerDescr"
        />
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers3.jpg"}
          descr="followerDescr"
        />
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers4.jpg"}
          descr="followerDescr"
        />
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers5.jpg"}
          descr="followerDescr"
        />
        <Follower
          to="/followerProfile"
          img={process.env.PUBLIC_URL + "/img/Followers6.jpg"}
          descr="followerDescr"
        />
      </FollowersList>
    </Wrapper>
  );
}

export default Followers;
