// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

const StPreview = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  flex-shrink: 0;
  width: 126px;
  height: 126px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  font-size: 15px;
  font-weight: normal;
  line-height: 22px;
  color: #000000;
`;

const Title = styled.div`
  margin-bottom: 3px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 18px;
  color: #000000;
`;

const StLink = styled.a`
  display: block;
  color: #667580;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  id: string,
};

type State = {
  previewData: Object,
  error: null | Object,
};

class Preview extends Component<Props, State> {
  state = {
    previewData: {},
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;

    if (id) {
      const hostname = 'https://twitter-demo.erodionov.ru';
      const secretKey = process.env.REACT_APP_KEY;
      if (!secretKey) throw new Error('Missing REACT_APP_KEY');

      fetch(`${hostname}/api/v1/statuses/${id}/card?access_token=${secretKey}`)
        .then(res => res.json())
        .then(
          (previewData) => {
            this.setState({ previewData });
          },
          (error) => {
            this.setState({ error });
          },
        );
    }
  }

  render() {
    const { previewData, error } = this.state;

    if (error) {
      return (
        <div>
          Error
        </div>
      );
    }

    if (!previewData.title) {
      return false;
    }

    return (
      <StPreview>
        {previewData.image && <Image src={previewData.image} />}
        <Content>
          <Title>
            {previewData.title}
          </Title>
          <Text>
            {previewData.description}
          </Text>
          <StLink href={previewData.url}>
            {previewData.url}
          </StLink>
        </Content>
      </StPreview>
    );
  }
}

export default Preview;
