import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IconHome from "./IconHome.svg";
import IconMoments from "./IconMoments.svg";
import IconNotifications from "./IconNotifications.svg";
import IconMessages from "./IconMessages.svg";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 25px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
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

const MainNav = () => {
  return (
    <Nav>
      <LinkStyled to="/home">
        <Icon src={IconHome} alt="Home" />
        <Text>Home</Text>
      </LinkStyled>
      <LinkStyled to="/moments">
        <Icon src={IconMoments} alt="Moments" />
        <Text>Moments</Text>
      </LinkStyled>
      <LinkStyled to="/notifications">
        <Icon src={IconNotifications} alt="Notifications" />
        <Text>Notifications</Text>
      </LinkStyled>
      <LinkStyled to="/messages">
        <Icon src={IconMessages} alt="Messages" />
        <Text>Messages</Text>
      </LinkStyled>
    </Nav>
  );
};

export default MainNav;
