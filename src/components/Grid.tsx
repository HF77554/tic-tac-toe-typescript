//misc
import React, {useState} from 'react'
import './grid.css'

//types
import { PlayerType } from "./MainDisplay";

//components
import GridBox from "./GridBox";

type Props = {
    playersData: PlayerType;
    onReset:boolean;
    onTurnMove: (clickedItem: number) => void;
};

const Grid: React.FC<Props> = ({ playersData, onReset, onTurnMove }) => {
  const gridId = [1,2,3,4,5,6,7,8,9]

  return (
      <div className="grid-container">
        {gridId.map(id => 
          <GridBox key={id} boxId={id} onReset={onReset} playersData={playersData} onTurnMove={onTurnMove}/>
        )}
      </div>
  )
}

export default Grid

//<div key={id} className="grid-item" onClick={() => onTurnMove(id)}>