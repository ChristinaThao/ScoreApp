import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';



const renderPlayers = (playerList) => {
    return playerList.map( (player) => {
        return (
            <p key = {player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => {Players.remove({_id: player._id})}}>X</button>
            </p>
    );
    });
}

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if(playerName){
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();

        let title = 'Score App';
        let name = 'X'
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });


});