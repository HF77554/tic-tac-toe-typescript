import {useState} from 'react'
import Grid from './Grid'

const MainDisplay = () => {
  const [isPlayer1, playerTask] = useState(true)

  return (
    <div>
      <h2>{isPlayer1 ? 'Player 1': 'Player 2'} turn</h2>
      <Grid />
    </div>
  )
}

export default MainDisplay