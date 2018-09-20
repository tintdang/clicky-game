import React from 'react';
import "./Game.css";
import Card from './Cards';

const Game = () =>
    <div className="container">
        <div className="d-flex justify-content-center cardrow">

            <Card />
            <Card />
            <Card />

        </div>

        <div className="d-flex justify-content-center cardrow">

            <Card />
            <Card />
            <Card />

        </div>

        <div className="d-flex justify-content-center cardrow">

            <Card />
            <Card />
            <Card />

        </div>
    </div>;


export default Game;