import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const Nav = styled.div`
  display: flex;
  margin-right: auto;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9px 17px 4px 17px;
  border-bottom: 4px solid transparent;
  font-size: 12px;
  font-weight: bold;
  line-height: 21px;
  color: #707e88;
  text-align: center;
  text-decoration: none;
`;

const Name = styled.div``;

const Amount = styled.div`
  font-size: 18px;
  color: #707e88;
`;

const Statistics = () => {
  return (
    <Nav>
      <LinkStyled to="/tweets">
        <Name>Tweets</Name>
        <Amount>8,058</Amount>
      </LinkStyled>
      <LinkStyled to="/following">
        <Name>Following</Name>
        <Amount>721</Amount>
      </LinkStyled>
      <LinkStyled to="/followers">
        <Name>Followers</Name>
        <Amount>1,815</Amount>
      </LinkStyled>
      <LinkStyled to="/likes">
        <Name>Likes</Name>
        <Amount>460</Amount>
      </LinkStyled>
      <LinkStyled to="/lists">
        <Name>Lists</Name>
        <Amount>2</Amount>
      </LinkStyled>
    </Nav>
  );
};

const BarStyled = styled.div`
  position: relative;
  box-shadow: 0 2px 2px 0 #b0b8be;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 10px 25px;
  background: none;
  border: 1px solid #1da1f2;
  border-radius: 20px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #1da1f2;
  letter-spacing: 0.01px;
  text-align: center;
  cursor: pointer;
`;

const BtnMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

const IconMore = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 4px;
  height: 4px;
  border: 1px solid #6c7e8e;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid #6c7e8e;
    border-radius: 50%;
    transform: translate(0, -5px);
  }
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid #6c7e8e;
    border-radius: 50%;
    transform: translate(0, 5px);
  }
`;

const Bar = () => {
  return (
    <BarStyled>
      <Grid>
        <Row>
          <Col mdOffset={3} md={9}>
            <Content>
              <Statistics />
              <Button>Follow</Button>
              <BtnMore>
                <IconMore />
              </BtnMore>
            </Content>
          </Col>
        </Row>
      </Grid>
    </BarStyled>
  );
};

export default Bar;
