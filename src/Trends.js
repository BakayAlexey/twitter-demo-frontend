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

const Small = styled.span`
  display: inline-block;
  margin: 0 5px;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #1da1f2;
`;

const Change = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: normal;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

const Description = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  color: #718290;
`;

function Trend(props) {
  const { name, stats, description } = props;
  const statsDescr = () => {
    if (stats > 10000) {
      return (stats / 1000).toFixed(1) + "K Tweets";
    } else if (stats => 1000) {
      return (stats / 1000).toFixed(3).replace(".", ",") + " Tweets";
    } else if (stats === 1) {
      return "1 Tweet";
    } else {
      return stats + " Tweet";
    }
  };

  return (
    <StTrend>
      <Name to={"/search?q=" + name}>{name}</Name>
      {stats && <Stats>{statsDescr()}</Stats>}
      {description && <Description>{description}</Description>}
    </StTrend>
  );
}

function Trends() {
  return (
    <StTrends>
      <Head>
        <Title>United Kingdom Trends</Title>
        <Small>·</Small>
        <Change to="/change">Change</Change>
      </Head>
      <TrendsList>
        <Trend name="#BringYourDogToWorkDay" />
        <Trend name="#FridayFeeling" stats={12121} />
        <Trend
          name="#BrexitAnniversary"
          description="It’s one year since the UK voted to leave the European Union"
        />
        <Trend name="HMS Queen Elizabeth" stats={1036} />
        <Trend name="Joe Budden" stats={1036} />
        <Trend name="Trident" stats={6136} />
      </TrendsList>
    </StTrends>
  );
}

export default Trends;
