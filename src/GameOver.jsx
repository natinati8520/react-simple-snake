import React from 'react'

function GameOver(props) {
  return (
    <div
      id='GameBoard'
      style={{
        width: '16.7vw',
        height: '20.33vh',
        borderWidth: '0.4vw',
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'>GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div>
          {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
          {props.highScore}
        </div>
        <div id='PressSpaceText'>Press Space to restart</div>
      </div>
    </div>
  )
}

export default GameOver
