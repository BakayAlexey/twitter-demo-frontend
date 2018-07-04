import React, { Component } from 'react';
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

class Tweets extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      tweetsData: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}/statuses?access_token=${
        process.env.REACT_APP_KEY
      }`,
    )
      .then(response => response.json())
      .then((userData) => {
        console.log('tweets', userData);
        // this.setState({ userData });
      });
  }

  render() {
    const { match } = this.props;
    const { tweetsData } = this.state;

    const tweetsList = tweetsData.map(tweet => (
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
  }
}

export default withRouter(Tweets);
