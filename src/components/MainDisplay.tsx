import {useState} from 'react'
import './mainDisplay.css'

//import components
import Grid from './Grid'
import Modal from '../modal/Modal'

//import methods
import logicInput from "../logic/grid.input";
import logicWon from "../logic/grid.winning";

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
  const [isGameOver, isGameOverTask] = useState('')

  const playerTurnHandler = (pressedGrid:number) => {
    const newPlayerData = logicInput.UpdatePlayerData(pressedGrid, playersData)
    const result = logicWon.checkPlayerWon(newPlayerData)
    if(result) return isGameOverTask(result)
    playerTask(newPlayerData)
  }

  const resetGameHandler = () => {
    isGameOverTask('')
    playerTask(originalPlayerStatus)
    gameResetTask(!gameReset)
  }


  return (
    <>
      <h2>{playersData.isPlayer1 ? 'Player 1': 'Player 2'} turn</h2>

      <Modal onGameWin={isGameOver} onModalClose={resetGameHandler} />

      <div className='grid-modal'>
        <Grid playersData={playersData} onReset={gameReset} onTurnMove={playerTurnHandler}/>
      </div>

      <div className='reset-btn-container'>
        <button className='reset-btn' onClick={resetGameHandler}>RESET</button>
      </div>
    </>
  )
}

export default MainDisplay