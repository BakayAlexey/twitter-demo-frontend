import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconHome from "./icon-home.svg";
import iconMoments from "./icon-moments.svg";
import iconNotifications from "./icon-notifications.svg";
import iconMessages from "./icon-messages.svg";

const Nav = styled.nav`
  display: flex;
  margin-right: auto;
`;

const Icon = styled.img`
  display: block;
  margin-right: 4px;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  color: #667580;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 25px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
  &:hover ${Text} {
    color: #1da1f2;
  }
  &.active ${Text} {
    color: #1da1f2;
  }
`;

const MainNav = () => {
  return (
    <Nav>
      <LinkStyled to="/">
        <Icon src={iconHome} alt="Home" />
        <Text>Home</Text>
      </LinkStyled>
      <LinkStyled to="/moments">
        <Icon src={iconMoments} alt="Moments" />
        <Text>Moments</Text>
      </LinkStyled>
      <LinkStyled to="/notifications">
        <Icon src={iconNotifications} alt="Notifications" />
        <Text>Notifications</Text>
      </LinkStyled>
      <LinkStyled to="/messages">
        <Icon src={iconMessages} alt="Messages" />
        <Text>Messages</Text>
      </LinkStyled>
    </Nav>
  );
};

export default MainNav;
