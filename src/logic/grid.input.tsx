
import { PlayerType } from "../components/MainDisplay";

const UpdatePlayerData = (pressedGrid:number, playersData:PlayerType) => {
    const p1Selections = playersData.p1_GridSelect
    const p2Selections = playersData.p2_GridSelect
    
    //if input has already been selected
    if(p1Selections.includes(pressedGrid) || p2Selections.includes(pressedGrid)) return playersData

    //update player grid selection based on whether it's player 1 or not
    if(playersData.isPlayer1) {
      const newGrid = [...playersData.p1_GridSelect, pressedGrid]
      const newPlayerData = {...playersData, isPlayer1:!playersData.isPlayer1, p1_GridSelect:newGrid}
      return newPlayerData
    } else {
      const newGrid = [...playersData.p2_GridSelect, pressedGrid]
      const newPlayerData = {...playersData, isPlayer1:!playersData.isPlayer1, p2_GridSelect:newGrid} 
      return newPlayerData
    }

}

const exportedObject = {
  UpdatePlayerData
};
  
export default exportedObject;