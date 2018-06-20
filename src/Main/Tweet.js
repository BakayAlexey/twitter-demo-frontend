import React from "react";
import iconPinned from "./icons/IconPinned.svg";
import iconLoves from "./icons/IconLoves.svg";
import iconComments from "./icons/IconComments.svg";
import iconEnvelope from "./icons/IconEnvelope.svg";
import iconRetweet from "./icons/IconRetweet.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid #e1e8ed;
`;

const PinnedWrapper = styled.div`
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

function Pinned() {
  return (
    <PinnedWrapper>
      <PinnedIcon src={iconPinned} />
      <PinnedDescr>Pinned Tweet</PinnedDescr>
    </PinnedWrapper>
  );
}

const Body = styled.div`
  position: relative;
  padding: 5px 10px 5px 70px;
`;

const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
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

const Date = styled.a`
  position: relative;
  display: inline-block;
  padding-left: 7px;
  font-size: 12px;
  font-weight: normal;
  line-height: 21px;
  color: #707e88;
  text-decoration: none;
  &::before {
    content: "";
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
  }
`;

const Text = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: #292f33;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const Article = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  overflow: hidden;
`;

const ArticleImg = styled.img`
  display: block;
  flex-shrink: 0;
  width: 126px;
  height: 126px;
`;

const ArticleContent = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  font-size: 15px;
  font-weight: normal;
  line-height: 22px;
  color: #000000;
`;

const ArticleTitle = styled.div`
  margin-bottom: 3px;
  font-weight: bold;
`;

const ArticleText = styled.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 18px;
  color: #000000;
`;

const ArticleLink = styled.a`
  display: block;
  color: #667580;
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

function Tweet(props) {
  return (
    <Wrapper>
      {props.pinned && <Pinned />}
      <Body>
        <Avatar>
          <img src={props.avatar} alt="avatar" />
        </Avatar>

        <div>
          <Author>{props.author}</Author>
          <AuthorName>{props.authorName}</AuthorName>
          <Date>{props.date}</Date>
        </div>

        {props.bigText && <TextBig>{props.bigText}</TextBig>}

        {props.text && <Text>{props.text}</Text>}

        {props.image && <Image src={props.image} />}

        {props.article && (
          <Article>
            <ArticleImg src={props.article.img} />
            <ArticleContent>
              <ArticleTitle>{props.article.title}</ArticleTitle>
              <ArticleText>{props.article.text}</ArticleText>
              <ArticleLink>{props.article.link}</ArticleLink>
            </ArticleContent>
          </Article>
        )}

        <ActionList>
          <Action>
            <ActionIcon src={iconComments} alt="comments" />
            {(props.comments || !props.comments === 0) && (
              <ActionValue>{props.comments}</ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconRetweet} alt="retweet" />
            {(props.retweet || props.retweet === 0) && (
              <ActionValue>{props.retweet}</ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconLoves} alt="loves" />
            {(props.loves || props.loves === 0) && (
              <ActionValue>{props.loves}</ActionValue>
            )}
          </Action>
          <Action>
            <ActionIcon src={iconEnvelope} alt="envelope" />
            {(props.envelope || props.envelope === 0) && (
              <ActionValue>{props.envelope}</ActionValue>
            )}
          </Action>
        </ActionList>
      </Body>
    </Wrapper>
  );
}

export default Tweet;
