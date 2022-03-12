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
  const [isGameOver, isGameOverTask] = useState(false)

  const playerTurnHandler = (pressedGrid:number) => {
    const newPlayerData = logicInput.UpdatePlayerData(pressedGrid, playersData)
    const result = logicWon.checkPlayerWon(newPlayerData)
    playerTask(newPlayerData)
    //add logic for when game is won, stop from moving, activate modal
  }

  const resetHandler = () => {
    playerTask(originalPlayerStatus)
    gameResetTask(!gameReset)
  }

  return (
    <div>
      <h2>{playersData.isPlayer1 ? 'Player 1': 'Player 2'} turn</h2>
      <button onClick={()=>isGameOverTask(!isGameOver)}>Modal</button>
      <Modal onGameOver={isGameOver} onModalClose={()=>isGameOverTask(!isGameOver)}>
        Modal Words
      </Modal>
      <div className='grid-modal'>
        <Grid playersData={playersData} onReset={gameReset} onTurnMove={playerTurnHandler}/>
      </div>
      <button onClick={resetHandler}>RESET</button>
    </div>
  )
}

export default MainDisplay