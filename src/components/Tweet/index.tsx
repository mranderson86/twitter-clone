import React from "react";

import {
  Container,
  Retweeted,
  RockseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from "./styles";

const Tweet = () => (
  <Container>
    <Retweeted>
      <RockseatIcon />
      Você retweetou
    </Retweeted>

    <Body>
      <Avatar />

      <Content>
        <Header>
          <strong>Rockerseat</strong>
          <span>@rockerseat</span>
          <Dot />
          <time>27 de jun</time>
        </Header>

        <Description>Foguete não tem ré</Description>
        <ImageContent />

        <Icons>
          <Status>
            <CommentIcon />
            18
          </Status>

          <Status>
            <RetweetIcon />
            18
          </Status>

          <Status>
            <LikeIcon />
            999
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
);

export default Tweet;
