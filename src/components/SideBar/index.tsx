import React from "react";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";

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
      <List
        title="Talvez você curta"
        elements={[
          <FollowSuggestion name="Diego Hay" nickname="@diegohay23" />,
          <FollowSuggestion name="Anderson Gomes" nickname="@mranderson286" />,
          <FollowSuggestion name="Alexandre Brito" nickname="@alexandreb2" />,
        ]}
      />

      <List
        title="Talvez você curta"
        elements={[<h1>TESTE</h1>, <h1>TESTE</h1>]}
      />
    </Body>
  </Container>
);

export default SideBar;
