import React, { useState } from 'react'
import Modal from './Modal'
// import Modal from './Modal'

const AskQuestion = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='px-5 pt-8 font-bold text-xl'>
        <button onClick={()=>setShowModal(true)} className='border border-gray-400 py-2 px-5 bg-blue-500 text-white'>Ask Question</button>
        {showModal && <Modal onClose={()=> setShowModal(false)}/>}
    </div>
  )
}

export default AskQuestion