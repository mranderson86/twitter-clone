import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../SideBar";

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

    <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Diego Hay" nickname="@diegohay23" />,
            <FollowSuggestion
              name="Anderson Gomes"
              nickname="@mranderson286"
            />,
            <FollowSuggestion name="Alexandre Brito" nickname="@alexandreb2" />,
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </StickyBox>
  </Container>
);

export default SideBar;
