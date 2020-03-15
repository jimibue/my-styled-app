import React from "react";
import { Header, Button, Segment, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import HeaderText from "./HeaderText";

const App = () => (
  <AppContainer>
    <HeaderText fSize="large">
      My Portfolio
    </HeaderText>
    <Segment as={Transparent}>
      <HeaderText>
        My Projects
      </HeaderText>
    </Segment>
    <Segment as={Transparent}>
      <HeaderText>
        Contact
      </HeaderText>
    </Segment>
  </AppContainer>
);

const Transparent = styled.div`
  background: transparent !important;
`;
const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

export default App;
