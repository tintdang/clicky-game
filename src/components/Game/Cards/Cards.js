import React from 'react';
import './Cards.css';

class Card extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    //Checks the state of the cards and if it has been clicked already, alerts me that it was clicked already
    if (this.state.isClicked === true){
      alert("YOU CLICKED ME ALREADY")
      return this.setState({ isClicked: false})
    }
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <div>
          <img className="img-fluid" src="https://gbf.wiki/images/thumb/3/3e/Scathacha_NPC.png/480px-Scathacha_NPC.png" alt="something" />
        </div>
      </div>
    );
  }
}

export default Card;