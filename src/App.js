import React from 'react';
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Game from './components/Game'

const App = () => (
  <Wrapper>
    <Navbar />
    <Jumbotron />
    <Game />
  </Wrapper>
);

export default App;
