import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import * as api from "../../api/api"
import QuestionCard from '../../components/questionCard/QuestionCard'
import "./Quiz.css"
import Modal from '../../components/modal/Modal'

const Quiz = () => {
  const { diffuclty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const data = await api.dataFetch(diffuclty, amount)
      setQuestionsData(data)
    }
    getData();

  }, []) 
  console.log(questionsData)

  return (
    <div className='quiz'>{
      modal ? <Modal score={score}/> :
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
    }

    </div>
  )
}

export default Quiz