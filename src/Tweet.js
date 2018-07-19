import React from 'react';
import styled from 'styled-components';
import Preview from './Preview';
import iconPinned from './icons/icon-pinned.svg';
import iconLoves from './icons/icon-loves.svg';
import iconComments from './icons/icon-comments.svg';
import iconEnvelope from './icons/icon-envelope.svg';
import iconRetweet from './icons/icon-retweet.svg';

const StTweet = styled.div`
  border-bottom: 1px solid #e1e8ed;
`;

const StPinned = styled.div`
  position: relative;
  padding: 5px 10px 5px 70px;
`;

const PinnedIcon = styled.img`
  position: absolute;
  left: 45px;
  top: 50%;
  transform: translate(0, -50%);
  display: block;
  width: 11px;
  height: 12px;
`;

const PinnedDescr = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #707e88;
`;

const Body = styled.div`
  position: relative;
  padding: 5px 10px 5px 70px;
`;

const Avatar = styled.div`
  position: absolute;
  top: 12px;
  left: 15px;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Author = styled.div`
  display: inline-block;
  vertical-align: baseline;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
  line-height: 21px;
  color: #292f33;
  text-decoration: none;
`;

const AuthorName = styled.div`
  display: inline-block;
  vertical-align: baseline;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  color: #707e88;
  text-decoration: none;
`;

const TweetDate = styled.a`
  position: relative;
  display: inline-block;
  padding-left: 7px;
  font-size: 12px;
  font-weight: normal;
  line-height: 21px;
  color: #707e88;
  text-decoration: none;
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: #707e88;
    border-radius: 50%;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const TextBig = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 300;
  line-height: 30px;
  color: #292f33;
  a {
    color: #1da1f2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Text = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: #292f33;
  a {
    color: #1da1f2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const ActionList = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

const ActionIcon = styled.img`
  display: block;
  margin-right: 10px;
`;

const ActionValue = styled.div`
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  color: #667580;
`;

function Pinned() {
  return (
    <StPinned>
      <PinnedIcon src={iconPinned} />
      <PinnedDescr>
Pinned Tweet
      </PinnedDescr>
    </StPinned>
  );
}

function Tweet(props) {
  const {
    pinned,
    tweetId,
    avatar,
    author,
    authorName,
    date,
    text,
    images,
    comments,
    retweet,
    loves,
    envelope,
  } = props;

  return (
    <StTweet>
      {pinned && <Pinned />}
      <Body>
        <Avatar>
          <Img src={avatar} alt="avatar" />
        </Avatar>

        <div>
          <Author>
            {author}
          </Author>
          <AuthorName>
            {authorName}
          </AuthorName>
          <TweetDate>
            {new Date(date).toLocaleString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )}
          </TweetDate>
        </div>

        {text
          && (text.length > 120 ? (
            <Text dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextBig dangerouslySetInnerHTML={{ __html: text }} />
          ))}

        {images && images.length > 0 && images.map(img => <Image key={img.id} src={img.url} />)}

        <Preview id={tweetId} />

        <ActionList>
          <Action>
            <ActionIcon src={iconComments} alt="comments" />
            {(comments || !comments === 0) && (
            <ActionValue>
              {comments}
            </ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconRetweet} alt="retweet" />
            {(retweet || !retweet === 0) && (
            <ActionValue>
              {retweet}
            </ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconLoves} alt="loves" />
            {(loves || !loves === 0) && (
            <ActionValue>
              {loves}
            </ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconEnvelope} alt="envelope" />
            {(envelope || !envelope === 0) && (
            <ActionValue>
              {envelope}
            </ActionValue>
            )}
          </Action>
        </ActionList>
      </Body>
    </StTweet>
  );
}

export default Tweet;
