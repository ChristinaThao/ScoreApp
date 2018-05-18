import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Tina',
    score: 100
}, {
    _id: '2',
    name: 'Tobi',
    score: 40
}, {
    _id: '3',
    name: 'Ella',
    score: 1
}];

const renderPlayers = function (playerList) {
    return playerList.map(function (player) {
        return <p key = {player._id}>{player.name} has {player.score} point(s).</p>;
    });
}

Meteor.startup(function() {
    let title = 'Score App';
    let name = 'X'
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
            {renderPlayers(players)}
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
});