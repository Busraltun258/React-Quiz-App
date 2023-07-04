import React from 'react'
import "./Drapdown.css"

const Drapdown = ({ data, setDifficultyChange }) => {
  return (
    <div className='drapdown'>
      <select onChange={e => setDifficultyChange(e.target.value)} name='' id=''>

        {
          data.map((dt, i) => (

            <option key={i} value={dt}>
              {dt}
            </option>



          ))
        }

      </select>
    </div>
  )
}

export default Drapdown