import React from 'react';

function Winner(props) {
    return (
        <div className="active">
          <p id="winnerMessage">Congratulations <strong>{props.winningPlayer}!!</strong> Ready to play again?</p> 
          <button >Reset</button>
        </div>
    ); 
}

export default Winner;