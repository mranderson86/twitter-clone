import React from "react";

import List from "../List";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar = () => (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Buscar no Twitter" />
      <SearchIcon />
    </SearchWrapper>

    <Body>
      {/* <List /> */}
      <p>{"Lorem ipsum color sit amet.".repeat(50)}</p>
    </Body>
  </Container>
);

export default SideBar;
