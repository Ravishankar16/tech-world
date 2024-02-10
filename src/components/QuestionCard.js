import React from 'react'
import data from '../data.json'

const QuestionCard = () => {
  return (
    <div className='pt-10 grid grid-flow-col'>
            <ul>
                {
                    data.questions && data.questions.map((d)=>{
                        return(
                        <li className='pb-5' key={d.id}>
                            <h1 className='text-2xl font-bold text-blue-500'>{d.title}</h1>
                            <p className='pb-2'>{d.content}</p>
                            <hr/>
                        </li>
                        )
                    })
                }

            </ul>
            
        </div>
  )
}

export default QuestionCard