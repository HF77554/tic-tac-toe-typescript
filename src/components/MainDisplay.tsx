import {useState} from 'react'
import Grid from './Grid'

export type PlayerType = {
  isPlayer1: boolean;
  p1_GridSelect: Array<number>;
  p2_GridSelect: Array<number>;
};

const MainDisplay = () => {
  const [playersData, playerTask] = useState<PlayerType>({
    isPlayer1: true,
    p1_GridSelect: [],
    p2_GridSelect: []
  })

  const playerTurnHandler = (pressedGrid:number) => {
    
    if (playersData.isPlayer1){
      const newGrid = [...playersData.p1_GridSelect, pressedGrid]
      const newPlayerData = {...playersData, isPlayer1:!playersData.isPlayer1, p1_GridSelect:newGrid}
      playerTask(newPlayerData)
    } else {
      const newGrid = [...playersData.p2_GridSelect, pressedGrid]
      const newPlayerData = {...playersData, isPlayer1:!playersData.isPlayer1, p2_GridSelect:newGrid} 
      playerTask(newPlayerData)
    }
    
  }

  return (
    <div>
      <h2>{playersData.isPlayer1 ? 'Player 1': 'Player 2'} turn</h2>
      <Grid playersData={playersData} onTurnMove={playerTurnHandler}/>
      <button onClick={()=>console.log(playersData)}>X</button>
    </div>
  )
}

export default MainDisplay