import React, { useState } from 'react'
import Drapdown from '../../components/drapdown/Drapdown'
import './Introduce.css'
import { useNavigate } from 'react-router'

const Introduce = () => {
  const diffuclty = ["easy", "medium", "hard"]
  const [diffucltyChange, setDifficultyChange] = useState('easy');
  const Total_Questions = 10;
  const navigate = useNavigate()

  const quizStart = () => {
    if (diffucltyChange) {
      navigate(`/quiz/${diffucltyChange}/${Total_Questions}`)

    }

  }

  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg" alt="" />
        <Drapdown data={diffuclty} setDifficultyChange={setDifficultyChange} />
        <div onClick={quizStart} className='introduce-btn'>
          Quize Başla
        </div>
      </div>
    </div>
  )
}

export default Introduce