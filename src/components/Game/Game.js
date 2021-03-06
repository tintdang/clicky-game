import React from 'react';
import "./Game.css";
import Card from '../Cards';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import game from "../../cards.json"

class Game extends React.Component {
  state = {
    count: 0,
    topScore: 0,
    gameMessage: "Click an image to begin!",
    game
  }

  componentDidMount() {
    console.log("I mounted!")
    console.log(`The json is: \n${JSON.stringify(game)}`)
    console.log(`I want to shuffle this json file`)
    //This will shuffle the json array and will
    this.shuffle(game)
    console.log(`Shuffled! ${JSON.stringify(game)}`)
  }

  //This will shuffle the cards and return a mixed array
  shuffle = game => {
    for (let i = game.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [game[i], game[j]] = [game[j], game[i]];
    }
    // this will update the state of the game itself. can be also this.setState({ game: game })
    return this.setState({ game })
  }

  handleClick = id => {
    //This states what card is selected when pressed
    console.log(`You clicked on id: ${this.state.game[id - 1].id}`)
    console.log(`the current index is ${id - 1}`)
    console.log(`The current state of this card's clicked status is ${this.state.game[id - 1].isClicked}`)

    // checks if the clicked status is true, if true: alert me. by updating the gameMessage to tell them they are wrong
    // Clear the score back to 0 and reset the isClicked states back to false
    // then run the shuffle the game function
    if (this.state.game[id - 1].isClicked) {
      const game = this.state.game.map(card => {
        card.isClicked = false
        return card
      })
      this.shuffle(game)
      return this.setState({ count: 0, game, gameMessage: "Wrong! Game Over!" });
    }

    //makes new function where it looks for the specific id and updates the state to be true, this still needs to render the rest of the cards in order for the state change to work.
    const game = this.state.game.map(card => {
      if (card.id === id) {
        console.log(`This is the right id cause ${card.id} = ${id}`)
        card.isClicked = true
        return card
      } else {
        return card
      }
    })

    // once the update is done, shuffle the array again and have them guess MUAHAHAHAHAHHAHA

    console.log(game)
    this.shuffle(game)
    // This updates the counter if a card is clicked
    // and will update the game's current state
    // Check if top score is less than the current count
    this.checkTopScore()
    this.setState({ count: this.state.count + 1, game, gameMessage: "Correct!" });
  }

  checkTopScore = () => {
    if(this.state.count + 1 > this.state.topScore){
      return this.setState({ topScore: this.state.count + 1})
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar
          score={this.state.count}
          topScore={this.state.topScore}
          gameResult={this.state.gameMessage}
        />

        <Jumbotron />
        <div className="d-flex flex-wrap justify-content-center cardrow">

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