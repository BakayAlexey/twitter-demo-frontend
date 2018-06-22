import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StTrends = styled.div`
  box-sizing: border-box;
  min-height: 390px;
  margin-bottom: 23px;
  padding: 15px;
  background: #ffffff;
`;

const Head = styled.div`
  margin-bottom: 14px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: #000000;
  letter-spacing: -0.5px;
`;

const Change = styled(Link)`
  position: relative;
  display: inline-block;
  margin-left: 6px;
  padding: 0 0 0 6px;
  text-decoration: none;
  font-size: 12px;
  font-weight: normal;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 2px;
    height: 2px;
    background-color: #66757f;
    border-radius: 50%;
  }
`;

const TrendsList = styled.div``;

const StTrend = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Name = styled(Link)`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Stats = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  color: #718290;
`;

function Trend(props) {
  return (
    <StTrend>
      <Name to={"/search?q=" + props.name}>{props.name}</Name>
      {props.stats && <Stats>{props.stats}</Stats>}
    </StTrend>
  );
}

function Trends() {
  return (
    <StTrends>
      <Head>
        <Title>United Kingdom Trends</Title>
        <Change to="/change">Change</Change>
      </Head>
      <TrendsList>
        <Trend name="#BringYourDogToWorkDay" />
        <Trend name="#FridayFeeling" stats="12.1K Tweets" />
        <Trend
          name="#BrexitAnniversary"
          stats="It’s one year since the UK voted to leave the European Union"
        />
        <Trend name="HMS Queen Elizabeth" stats="1,036 Tweets" />
        <Trend name="Joe Budden" stats="1,036 Tweets" />
        <Trend name="Trident" stats="6,136 Tweets" />
      </TrendsList>
    </StTrends>
  );
}

export default Trends;
