import React, { Component } from 'react';
import QuestionContainer from './Question.js';
import ScoreController from './ScoreController';
import Scorebar from './Scorebar';
import Player from './Player';
import data from './data';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;
        this.handleScoreClick = this.handleScoreClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleScoreClick(player, delta){
        let players = this.state.players.slice();
        let newScore = players[player].score + delta;
        if(newScore < 0){newScore = 0;}
        players[player].score = newScore;
        
        this.setState({
            players: players
        });
    }
    
    handleTextChange(event){
        const newText = event.target.value;
        let board = Object.assign({}, this.state.board);
        board.answerText = newText;
        
        this.setState({
            "board" : board
        });
    }
    
    handleSubmit(event){
        event.preventDefault();
        let board = Object.assign({}, this.state.board);
        board.answerText = '';
        
        this.setState({
            "board" : board
        });
    }
        
    declareWinner (player){
        let players = this.state.players.slice();
        let currentScore = players[player].score;
        let winningScore = this.state.board.winningCount;
        if (currentScore === winningScore){
            
        }

    }

    render() {
      const players = this.state.players.map(function(player, index){
          return (
            <Player
              key={index}
              stats={player}
              units={this.state.board.scoreBarUnits}
              handlePlusClick={()=>{this.handleScoreClick(index, 1);}}
              handleMinusClick={()=>{this.handleScoreClick(index, -1);}}
            />  
          );
      }, this);
      
    return (
        <div id="container">
          <h1>Trivia Game</h1>
          <QuestionContainer question={this.state.questions[0].question}
            answerText={this.state.board.answerText} 
            handleTextChange={this.handleTextChange}
            handleSubmit={this.handleSubmit}
            />
          <section className="scoring">
            {players}
          </section>
        </div>
    );
  }
}

export default App;
