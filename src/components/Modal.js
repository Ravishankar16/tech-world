import React, { useState, useRef } from 'react'
import { X } from 'lucide-react'

const Modal = ({onClose, handleAskQuestion  }) => {
    const [title,setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState([])
    const modalRef = useRef()

    // checks if the click event occurred on the modal and closes the modal accordingly
    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose()
        }
    }
    // when the user submits the question. 
    // It extracts the question details and calls the prop function 
    // handleAskQuestion to add the question
    const submitQuestion = ()=> {
        const newQuestion = {
            title: title,
            content: content,
            // Convert category string to array
            category: category.split(','), 
          };

        // Call the prop function
        handleAskQuestion(newQuestion); 

        // Close the modal after submitting the question
        onClose();

    }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm grid grid-flow-col justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-black'>
            {/* Modal will be closed onclick of this */}
            <button onClick={onClose} className='place-self-end'><X/></button>
            {/* Form fields for title,content and category */}
            <div className='bg-gray-100 rounded-xl px-20 py-10 flex flex-col gap-5  mx-4'>
                <h1 className='text-2xl font-extrabold text-blue-600'>Ask question</h1>
                <p className='text-base font-medium'>You are ready to ask a programming-related question and this form will help guide you through the process.</p>
                <form>
                    <label className='text-blue-500'>Title:</label><br/>
                    <input className='w-full px-4 py-3 text-lg text-black border-gray-300 rounded-ms ' 
                    type='text' value={title} placeholder='type question title' onChange={(e)=>setTitle(e.target.value)}/><br/>
                    <label className='text-blue-500'>Content:</label><br/>
                    <textarea className='w-full px-4 py-3 text-lg text-black border-gray-300 rounded-ms' onChange={(e)=>setContent(e.target.value)} name="Modal" rows={4} cols={40} /><br/>
                    <label className='text-blue-500'>Category:</label><br/>
                    <input className='w-full px-4 py-3 text-sm text-black border-gray-300 rounded-ms' type='text' value={category} placeholder='e.g Javascript,React' onChange={(e)=>setCategory(e.target.value)}/><br/>
                    <button className='mt-4 w-1/4 flex items-center bg-blue-600 text-white justify-center gap-2 px-5 py-3 font-medium rounded-md' type='button' onClick={submitQuestion}>Add Question</button>
            </form>
            </div>
            
        </div>

    </div>
  )
}

export default Modal