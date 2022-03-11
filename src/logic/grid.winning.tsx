import { PlayerType } from "../components/MainDisplay";

const checkPlayerWon = (playersData:PlayerType) => {
    
    const winningCombinations= [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

    if(!playersData.isPlayer1) {
        //player 1 winning
        const result = winningCombinations.map(arr => arr.every(i => playersData.p1_GridSelect.includes(i) )).includes(true)
        if (result) return 'Player 1 won'
    } else {
        //player 2 winning
        const result = winningCombinations.map(arr => arr.every(i => playersData.p2_GridSelect.includes(i) )).includes(true)
        if (result) return 'Player 2 won'
    }

}

const exportedObject = {
    checkPlayerWon
};
  
export default exportedObject;