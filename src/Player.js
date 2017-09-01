import React, {Component} from 'react';
import ScoreController from './ScoreController';
import Scorebar from './Scorebar';

class Player extends Component {
    
    render () {
        const height = (this.props.units * this.props.stats.score) + 'px';
        return (
            <div>
                <section className="player player2">
                  <h2>{this.props.stats.name}</h2>
                    <p className="score">Score: {this.props.stats.score}</p>
                    <Scorebar height={height}/>    
                    <ScoreController plus={this.props.handlePlusClick} minus={this.props.handleMinusClick}/>
                </section>
            </div>
        );
    }
    
}

export default Player;