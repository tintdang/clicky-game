import React from 'react';
import "./Game.css";
import Card from '../Cards';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import game from "../../cards.json"

class Game extends React.Component {
  state = {
    count: 0,
    game
  }

  componentDidMount() {
    console.log("I mounted!")
  }

  handleClick = id => {
    //This states what card is selected when pressed
    console.log(`You clicked on id: ${this.state.game[id - 1].id}`)
    console.log(`the current index is ${id - 1}`)
    console.log(`The current state of this card's clicked status is ${this.state.game[id - 1].isClicked}`)

    // checks if the clicked status is true, if true: alert me.
    // Clear the score back to 0 and reset the isClicked states back to false
    if (this.state.game[id - 1].isClicked){
      alert("YOU CLICKED ME ALREADY")
      const game = this.state.game.map(card => {
        card.isClicked = false
        return card
      })
      return this.setState( {count: 0, game });
    }
    
    //makes new function where it looks for the specific id and updates the state to be true, this still needs to render the rest of the cards
    const game = this.state.game.map(card => {
      if (card.id === id){
        console.log(`This is the right id cause ${card.id} = ${id}`)
        card.isClicked = true
        return card
      } else {
        return card
      }
    })
    console.log(game)
    // This updates the counter if a card is clicked
    // and will update the game's current state
    this.setState({ count: this.state.count + 1, game });
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
              id={card.id}
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