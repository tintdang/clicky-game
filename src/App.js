import React from 'react';
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Game from './components/Game'

const App = () => (
  <Wrapper>
    <Navbar 
      score={0}
      topScore={12}
      gameResult={"Click an image to begin!"}
    />
    <Jumbotron />
    <Game />
  </Wrapper>
);

export default App;
