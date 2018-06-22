import React from "react";
import { NavLink } from "react-router-dom";
import Tweet from "./Tweet";
import styled from "styled-components";

const StTweets = styled.div`
  background-color: #ffffff;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e8ed;
`;

const LinkStyled = styled(NavLink)`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #292f33;
    text-decoration: none;
  }
`;

const List = styled.div``;

function Tweets() {
  const article = {
    img: process.env.PUBLIC_URL + "/img/tweet-article.jpg",
    title: "The Future of Web Fonts",
    text:
      "We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…",
    link: "vilijamis.com"
  };

  return (
    <StTweets>
      <Nav>
        <LinkStyled to="/">Tweets</LinkStyled>
        <LinkStyled to="/tweets_replies">Tweets &amp; replies</LinkStyled>
        <LinkStyled to="/media">Media</LinkStyled>
      </Nav>
      <List>
        <Tweet
          pinned={true}
          avatar={process.env.PUBLIC_URL + "/img/avatar-small.png"}
          author="Every Interaction"
          authorName="@EveryInteract"
          date="2 Mar 2015"
          bigText="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
          image={process.env.PUBLIC_URL + "/img/tweet-img.jpg"}
          comments={0}
          retweet={17}
          loves={47}
          envelope={0}
        />
        <Tweet
          avatar={process.env.PUBLIC_URL + "/img/avatar-small.png"}
          author="Every Interaction"
          authorName="@EveryInteract"
          date="23h"
          srcImg={process.env.PUBLIC_URL + "/img/tweet-img.jpg"}
          bigText="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
          comments={1}
          retweet={4}
          loves={2}
          envelope={0}
        />
        <Tweet
          avatar={process.env.PUBLIC_URL + "/img/avatar-small.png"}
          author="Every Interaction"
          authorName="@EveryInteract"
          date="Nov 18"
          srcImg={process.env.PUBLIC_URL + "/img/tweet-img.jpg"}
          text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
          article={article}
          comments={0}
          retweet={0}
          loves={0}
          envelope={0}
        />
      </List>
    </StTweets>
  );
}

export default Tweets;
