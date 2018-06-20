import React from "react";
import tick from "./icons/Tick.svg";
import iconLocation from "./icons/IconLocation.svg";
import iconLink from "./icons/IconLink.svg";
import iconJoined from "./icons/IconJoined.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 0;
`;

const Avatar = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 207px;
  height: 207px;
  margin-top: -207px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border: 1px solid #e7ecf0;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`;

const Name = styled.div`
  display: inline-block;
  vertical-align: bottom;
  margin-right: 5px;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  color: #14171a;
`;

const Verified = styled.img`
  display: inline-block;
  vertical-align: bottom;
  width: 18px;
  height: 18px;
`;

const NameLink = styled.a`
  display: inline-block;
  vertical-align: baseline;
  margin-right: 7px;
  font-size: 14px;
  line-height: 21px;
  font-weight: normal;
  color: #697787;
`;

const Follows = styled.a`
  display: inline-block;
  vertical-align: baseline;
  font-size: 12px;
  line-height: 12px;
  font-weight: normal;
  color: #697787;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: 14171a;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    display: block;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: #657786;
  }
`;

const LinkSite = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    display: block;
    margin-right: 10px;
  }
  a {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: #657786;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Joined = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    display: block;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: #657786;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  margin-top: 17px;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  width: calc((100% - 6px) / 2);
  margin-right: 5px;
  padding: 13px 16px 12px 16px;
  background-color: #1da1f2;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:hover {
    background-color: #4ab3f4;
  }
`;

const InfoProfile = () => {
  return (
    <Wrapper>
      <Avatar>
        <img
          src={process.env.PUBLIC_URL + "/img/avatar_big.png"}
          alt="profile_image"
        />
      </Avatar>
      <div>
        <Name>Every Interaction</Name>
        <Verified src={tick} alt="verified" />
      </div>
      <div>
        <NameLink>@EveryInteract</NameLink>
        <Follows>Follows you</Follows>
      </div>
      <Description>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </Description>
      <Location>
        <img src={iconLocation} alt="location" />
        <span>London, UK </span>
      </Location>
      <LinkSite>
        <img src={iconLink} alt="link site" />
        <a href="everyinteraction.com">everyinteraction.com</a>
      </LinkSite>
      <Joined>
        <img src={iconJoined} alt="joined" />
        <span>Joined May 2008</span>
      </Joined>
      <BtnGroup>
        <Button>Tweet to</Button>
        <Button>Message</Button>
      </BtnGroup>
    </Wrapper>
  );
};

export default InfoProfile;
