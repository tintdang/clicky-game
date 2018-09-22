import React from 'react';
import "./Game.css";
import Card from '../Cards';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';

class Game extends React.Component {
  state = {
    count: 0,
    game: [
      {
        id: 1,
        img: "https://gbf.wiki/images/1/1a/Freezie_B.png",
        isClicked: false
      },
      {
        id: 2,
        img: "https://gbf.wiki/images/b/b9/Freezie_A.png",
        isClicked: false
      },
      {
        id: 3,
        img: "https://gbf.wiki/images/thumb/3/3e/Scathacha_NPC.png/480px-Scathacha_NPC.png",
        isClicked: false
      },
    ],
  }

  componentDidMount() {
    console.log("I mounted!")
  }

  handleClick = () => {
    // This updates the counter if a card is clicked
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count + 1)
  }

  render() {
    return (
      <div className="container">
        <Navbar
          score={this.state.count}
          topScore={12}
          gameResult={"Click an image to begin!"}
        />

        <Jumbotron />
        <div className="d-flex justify-content-center cardrow">

          {this.state.game.map(card => (
            <Card
              key={card.id}
              handleClick={this.handleClick}
              image={card.img}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default Game;