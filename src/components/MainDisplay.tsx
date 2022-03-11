import {useState} from 'react'
import './mainDisplay.css'

import Grid from './Grid'

import logicInput from "../logic/grid.input";

export type PlayerType = {
  isPlayer1: boolean;
  p1_GridSelect: Array<number>;
  p2_GridSelect: Array<number>;
};

const originalPlayerStatus = {
  isPlayer1: true,
  p1_GridSelect: [],
  p2_GridSelect: []
}

const MainDisplay = () => {
  const [playersData, playerTask] = useState<PlayerType>(originalPlayerStatus)
  const [gameReset, gameResetTask] = useState(false)

  const playerTurnHandler = (pressedGrid:number) => {
    const newPlayerData = logicInput.UpdatePlayerData(pressedGrid, playersData)
    playerTask(newPlayerData)
  }

  const resetHandler = () => {
    playerTask(originalPlayerStatus)
    gameResetTask(!gameReset)
  }

  return (
    <div>
      <h2>{playersData.isPlayer1 ? 'Player 1': 'Player 2'} turn</h2>
      <div className='grid-modal'>
        <Grid playersData={playersData} onReset={gameReset} onTurnMove={playerTurnHandler}/>
      </div>
      <button onClick={resetHandler}>RESET</button>
    </div>
  )
}

export default MainDisplay