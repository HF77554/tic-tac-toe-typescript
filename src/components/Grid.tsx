import React, {useState} from 'react'
import { PlayerType } from "./MainDisplay";
import './grid.css'

type Props = {
    playersData: PlayerType;
    onTurnMove: (clickedItem: number) => void;
};

const Grid: React.FC<Props> = ({ playersData, onTurnMove }) => {
  const gridId = [1,2,3,4,5,6,7,8,9]

  return (
    <div>
      <div className="grid-container">
        {gridId.map(id => 
          <div key={id} className="grid-item" onClick={() => onTurnMove(id)}>
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Grid