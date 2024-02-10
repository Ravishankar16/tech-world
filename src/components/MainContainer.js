import React from 'react'
import AskQuestion from './AskQuestion'
import QuestionList from './QuestionList'
import QuestionCard from './QuestionCard'

const MainContainer = () => {
  return (
    <div className='col-span-11'>
        <AskQuestion/>
        {/* <QuestionCard/> */}
        <QuestionList/>
    </div>
  )
}

export default MainContainer