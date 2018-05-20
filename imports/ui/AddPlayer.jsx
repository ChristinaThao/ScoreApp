import React from 'react';

export default class AddPlayer extends React.Component {
    render () {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="playerName" placeholder="Player Name"/>
                <button>Add Player</button>
            </form>
        );
    }
}

