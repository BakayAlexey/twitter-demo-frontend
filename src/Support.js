import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StSupport = styled.div``;

const Copyright = styled.span`
  display: inline-block;
  margin-right: 5px;
  vertical-align: baseline;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
  color: #718290;
`;

const StLink = styled(Link)`
  display: inline-block;
  margin-right: 5px;
  vertical-align: baseline;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
  color: #718290;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Support() {
  return (
    <StSupport>
      <Copyright>© 2018 Twitter</Copyright>
      <StLink to="/about">About</StLink>
      <StLink to="/helpCenter">Help Center</StLink>
      <StLink to="/terms">Terms</StLink>
      <StLink to="/privacyPolicy">Privacy policy</StLink>
      <StLink to="/cookies">Cookies</StLink>
      <StLink to="/adsInfo">Ads info</StLink>
    </StSupport>
  );
}

export default Support;
