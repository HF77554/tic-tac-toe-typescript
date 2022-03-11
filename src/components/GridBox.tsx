import React, {useEffect, useState} from 'react'
import { PlayerType } from "./MainDisplay";

type Props = {
    boxId:number;
    onReset:boolean;
    playersData: PlayerType;
    onTurnMove: (clickedItem: number) => void;
};

const GridBox: React.FC<Props> = ({boxId, onReset, playersData, onTurnMove }) => {
    const [gridSymbol, symbolTask] = useState<string>()

    //reset grid box onReset
    useEffect(() => {      
        if(!gridSymbol) return
        symbolTask('')
      }, [onReset]);

    const onClickHandler = () => {
        onTurnMove(boxId)

        //marks grid box only once with correct symbol
        if (gridSymbol) return
        const playerSymbol = playersData.isPlayer1 ? 'X' : 'O'
        symbolTask(playerSymbol)
    }

    return (
        <div className="grid-item" onClick={onClickHandler}>
            {gridSymbol}
        </div>
    )
}

export default GridBox