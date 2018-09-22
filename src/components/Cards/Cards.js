import React from 'react';
import './Cards.css';

const Card = props => 
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div>
      <img className="img-fluid" src={props.image} alt={props.id} />
    </div>
  </div>;


export default Card;