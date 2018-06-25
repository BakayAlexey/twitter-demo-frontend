import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tick from "./icons/tick.svg";
import iconPeople from "./icons/icon-people.svg";

const StFollows = styled.div`
  margin-bottom: 10px;
  padding: 15px 15px 20px 15px;
  background-color: #ffffff;
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 5px;
`;

const Title = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #292f33;
`;

const Small = styled.span`
  display: inline-block;
  margin: 0 5px;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #1da1f2;
`;

const BtnRefresh = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: none;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkViewAll = styled(Link)`
  position: relative;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowsList = styled.div``;

const StFollowUser = styled.div`
  position: relative;
  padding: 11px 24px 14px 60px;
  border-bottom: 1px solid #e6ecf0;
`;
const AvatarWrap = styled.div`
  position: absolute;
  top: 11px;
  left: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

const Name = styled.div`
  margin-right: 3px;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  color: #292f33;
  white-space: nowrap;
`;

const Verified = styled.img`
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`;

const NameLink = styled(Link)`
  margin-left: 3px;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  color: #718290;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 6px 21px 5px 21px;
  background: none;
  border: 1px solid #1da1f2;
  border-radius: 20px;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: #1da1f2;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #e8f5fd;
  }
`;

const BtnClose = styled.button`
  box-sizing: border-box;
  position: absolute;
  top: 11px;
  right: 0;
  width: 8px;
  height: 8px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 2px;
    background-color: #ccd6dd;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const FindUsers = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
`;

const Icon = styled.img`
  flex-shrink: 0;
  display: block;
  width: 16px;
  height: 12px;
  margin-right: 6px;
`;

const FindLink = styled(Link)`
  font-size: 13px;
  line-height: 15px;
  font-weight: normal;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function FollowUser(props) {
  return (
    <StFollowUser>
      <BtnClose />
      <AvatarWrap>
        <Img src={props.img} alt={props.imgDescr} />
      </AvatarWrap>
      <UserData>
        <Name>{props.name}</Name>
        {props.verified && <Verified src={tick} alt="verified" />}
        <NameLink to={"/" + props.nameLink}>{props.nameLink}</NameLink>
      </UserData>
      <Button>Follow</Button>
    </StFollowUser>
  );
}

function Follows() {
  return (
    <StFollows>
      <Head>
        <Title to="/followers">Who to follow</Title>
        <Small>·</Small>
        <BtnRefresh>Refresh</BtnRefresh>
        <Small>·</Small>
        <LinkViewAll to="/viewAll">View all</LinkViewAll>
      </Head>
      <FollowsList>
        <FollowUser
          img={process.env.PUBLIC_URL + "/img/follow1.jpg"}
          imgDescr="img descr"
          verified={false}
          name="AppleInsider"
          nameLink="@appleinsider"
        />
        <FollowUser
          img={process.env.PUBLIC_URL + "/img/follow2.jpg"}
          imgDescr="img descr"
          verified={true}
          name="Creode"
          nameLink="@Creode"
        />
        <FollowUser
          img={process.env.PUBLIC_URL + "/img/follow3.jpg"}
          imgDescr="img descr"
          verified={false}
          name="Epiphany Search"
          nameLink="@Epiphany Search"
        />
      </FollowsList>

      <FindUsers>
        <Icon src={iconPeople} />
        <FindLink to="/findPeople">Find people you know</FindLink>
      </FindUsers>
    </StFollows>
  );
}

export default Follows;
