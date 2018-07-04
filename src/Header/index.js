import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import MainNav from './MainNav';
import SearchForm from './SearchForm';
import iconLogo from './twitter-logo.svg';

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
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Avatar = styled.div`
  width: 26px;
  height: 26px;
  margin: 0 18px;
  border-radius: 50%;
  overflow: hidden;
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
            <Img src={iconLogo} alt="Logo" />
          </Logo>
          <SearchForm />
          <Avatar>
            <Img src={`${process.env.PUBLIC_URL}/img/avatar-small.png`} alt="Avatar" />
          </Avatar>
          <ButtonTweet>
Tweet
          </ButtonTweet>
        </HeaderContent>
      </Grid>
    </header>
  );
}

export default Header;
