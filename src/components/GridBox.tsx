import React, {useState} from 'react'
import { PlayerType } from "./MainDisplay";

type Props = {
    boxId:number;
    playersData: PlayerType;
    onTurnMove: (clickedItem: number) => void;
};

const GridBox: React.FC<Props> = ({boxId, playersData, onTurnMove }) => {
    const [gridSymbol, symbolTask] = useState<string>()

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