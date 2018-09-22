import React from 'react';
import './Cards.css';

const Card = props => 
  <div className="card" onClick={() => props.handleClick()}>
    <div>
      <img className="img-fluid" src={props.image} alt="something" />
    </div>
  </div>;


export default Card;