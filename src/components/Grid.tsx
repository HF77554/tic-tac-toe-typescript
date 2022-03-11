import React, {useState} from 'react'
import './grid.css'

const Grid = () => {
  const gridId = [1,2,3,4,5,6,7,8,9]

  return (
    <div>
      <div className="grid-container">
        {gridId.map(id => 
          <div key={id} className="grid-item" onClick={()=> console.log(id)}>
            {id}
          </div>
        )}
      </div>
    </div>
  )
}

export default Grid