import React from "react";
import { Grid } from "react-flexbox-grid";
import MainNav from "./MainNav";
import SearchForm from "./SearchForm";
import IconLogo from "./TwitterLogo.svg";
import styled from "styled-components";

const HeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21px;

  img {
    display: block;
    width: 100%;
  }
`;

const Avatar = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 18px;
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
`;

const ButtonTweet = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 9px 16px 8px 16px;
  background-color: #1da1f2;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #4ab3f4;
  }
`;

function Header() {
  return (
    <header>
      <Grid>
        <HeaderContent>
          <MainNav />
          <Logo>
            <img src={IconLogo} alt="Logo" />
          </Logo>
          <SearchForm />
          <Avatar>
            <img
              src={process.env.PUBLIC_URL + "/img/avatar_small.png"}
              alt="Avatar"
            />
          </Avatar>
          <ButtonTweet>Tweet</ButtonTweet>
        </HeaderContent>
      </Grid>
    </header>
  );
}

export default Header;
