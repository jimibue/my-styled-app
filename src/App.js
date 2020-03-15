import React from 'react';
import { Header, Button, Segment, Card, Icon } from 'semantic-ui-react';

const App = () => (
  <div>
    <Header as="h1" textAlign="center">My Portfolio</Header>
    <Segment>
      <Header as="h2" textAlign="center">My Projects</Header>
    </Segment>
    <Segment>
      <Header as="h2" textAlign="center">Contact</Header>
    </Segment>
  </div>
)

export default App;
