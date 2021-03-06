// @flow

import React, { Component } from 'react';
import {
  NavLink, Route, Switch, withRouter,
} from 'react-router-dom';
import type { Match } from 'react-router-dom';
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

type Props = {
  id: string,
  match: Match,
}

type State = {
  tweetsData: Array<Object>,
  error: null | Object,
}

class Tweets extends Component<Props, State> {
  state = {
    tweetsData: [],
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;

    if (id) {
      const hostname = 'https://twitter-demo.erodionov.ru';
      const secretKey = process.env.REACT_APP_KEY;
      if (!secretKey) throw new Error('Missing REACT_APP_KEY');

      fetch(`${hostname}/api/v1/accounts/${id}/statuses?access_token=${secretKey}`)
        .then(res => res.json())
        .then(
          (tweetsData) => {
            this.setState({ tweetsData });
          },
          (error) => {
            this.setState({ error });
          },
        );
    }
  }

  render() {
    const { match } = this.props;
    const { tweetsData, error } = this.state;

    if (error) {
      return (
        <div>
          Error
        </div>
      );
    }

    if (tweetsData.length === 0) {
      return (
        <div>
          No tweets
        </div>
      );
    }

    const tweetsList = tweetsData.map(tweet => (
      <Tweet
        key={tweet.id}
        tweetId={tweet.id}
        pinned={tweet.pinned}
        avatar={tweet.account.avatar_static}
        author={tweet.account.display_name}
        authorName={`@${tweet.account.username}`}
        date={tweet.created_at}
        text={tweet.content}
        images={tweet.media_attachments}
        comments={tweet.comments}
        retweet={tweet.reblogs_count}
        loves={tweet.favourites_count}
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
              render={() => tweetsList.filter(tweet => tweet)}
            />
            <Route
              path={`${match.url}/media`}
              render={() => tweetsList.filter(
                tweet => tweet.props.images.length > 0 || tweet.props.text.indexOf('href') !== -1,
              )
              }
            />
            <Route path={`${match.url}`} render={() => tweetsList} />
          </Switch>
        </List>
      </StTweets>
    );
  }
}

export default withRouter(Tweets);
