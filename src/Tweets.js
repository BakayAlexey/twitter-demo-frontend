import React from 'react';
import {
  NavLink, Route, Switch, withRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import Tweet from './Tweet';

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

const Tweets = withRouter(({ match }) => {
  const TweetsData = [
    {
      pinned: true,
      avatar: `${process.env.PUBLIC_URL}/img/avatar-small.png`,
      author: 'Every Interaction',
      authorName: '@EveryInteract',
      date: '2 Mar 2015',
      text: null,
      bigText:
        'We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI',
      image: `${process.env.PUBLIC_URL}/img/tweet-img.jpg`,
      article: null,
      comments: 0,
      retweet: 17,
      loves: 47,
      envelope: 0,
    },
    {
      pinned: false,
      avatar: `${process.env.PUBLIC_URL}/img/avatar-small.png`,
      author: 'Every Interaction',
      authorName: '@EveryInteract',
      date: '23h',
      srcImg: `${process.env.PUBLIC_URL}/img/tweet-img.jpg`,
      text: null,
      bigText:
        'Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/',
      image: null,
      article: null,
      comments: 1,
      retweet: 4,
      loves: 2,
      envelope: 0,
    },
    {
      pinned: false,
      avatar: `${process.env.PUBLIC_URL}/img/avatar-small.png`,
      author: 'Every Interaction',
      authorName: '@EveryInteract',
      date: 'Nov 18',
      srcImg: `${process.env.PUBLIC_URL}/img/tweet-img.jpg`,
      text:
        'Variable web fonts are coming, and will open a world of opportunities for weight use online',
      bigText: null,
      image: null,
      article: {
        img: `${process.env.PUBLIC_URL}/img/tweet-article.jpg`,
        title: 'The Future of Web Fonts',
        text:
          'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
        link: 'vilijamis.com',
      },
      comments: 0,
      retweet: 0,
      loves: 0,
      envelope: 0,
    },
  ];

  const tweetsList = TweetsData.map(tweet => (
    <Tweet
      key={Math.random()}
      pinned={tweet.pinned}
      avatar={tweet.avatar}
      author={tweet.author}
      authorName={tweet.authorName}
      date={tweet.date}
      srcImg={tweet.srcImg}
      text={tweet.text}
      bigText={tweet.bigText}
      image={tweet.image}
      article={tweet.article}
      comments={tweet.comments}
      retweet={tweet.retweet}
      loves={tweet.loves}
      envelope={tweet.envelope}
    />
  ));

  return (
    <StTweets>
      <Nav>
        <LinkStyled to={`${match.url}`} exact>
          Tweets
        </LinkStyled>
        <LinkStyled to={`${match.url}/tweets-replies`}>
Tweets &amp; replies
        </LinkStyled>
        <LinkStyled to={`${match.url}/media`}>
Media
        </LinkStyled>
      </Nav>

      <List>
        <Switch>
          <Route
            path={`${match.url}/tweets-replies`}
            render={() => (
              <h2>
tweets-replies
              </h2>
            )}
          />
          <Route
            path={`${match.url}/media`}
            render={() => (
              <h2>
media
              </h2>
            )}
          />
          <Route path={`${match.url}`} render={() => tweetsList} />
        </Switch>
      </List>
    </StTweets>
  );
});

export default Tweets;
