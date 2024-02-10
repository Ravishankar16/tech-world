import React, { useState, useRef } from 'react'
import { X } from 'lucide-react'

const Modal = ({onClose}) => {
    const [title,setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState([])
    const modalRef = useRef()

    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose()
        }
    }

    const handleAskQuestion = ()=> {

    }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm grid grid-flow-col justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-black'>
            <button onClick={onClose} className='place-self-end'><X/></button>
            <div className='bg-gray-100 rounded-xl px-20 py-10 flex flex-col gap-5  mx-4'>
                <h1 className='text-2xl font-extrabold text-blue-600'>Ask question</h1>
                <p className='text-base font-medium'>You are ready to ask a programming-related question and this form will help guide you through the process.</p>
                    {/* <h1>Steps to follow</h1>
                    <p className='text-base'>1.Summarize your problem in a one-line title.</p>
                    <p className='text-base'>2.Describe your problem in more detail.</p>
                    <p className='text-base'>3.Describe what you tried and what you expected to happen.</p> */}
                <form>
                <label className='text-blue-500'>Title:</label><br/>
                <input className='w-full px-4 py-3 text-sm text-black border-gray-300 rounded-ms' 
                type='text' value={title} placeholder='type question title' onChange={(e)=>setTitle(e.target.value)}/><br/>
                <label className='text-blue-500'>Content:</label><br/>
                <textarea className='w-full px-4 py-3 text-sm text-black border-gray-300 rounded-ms' name="Modal" rows={4} cols={40} /><br/>
                {/* <input type='text' value={content} placeholder='explain your question in detail' onChange={(e)=>setContent(e.target.value)}/><br/> */}
                <label className='text-blue-500'>Category:</label><br/>
                <input className='w-full px-4 py-3 text-sm text-black border-gray-300 rounded-ms' type='text' value={category} placeholder='e.g Javascript,React' onChange={(e)=>setCategory(e.target.value)}/><br/>
                <button className='mt-4 w-1/4 flex items-center bg-blue-600 text-white justify-center gap-2 px-5 py-3 font-medium rounded-md' type='button' onClick={handleAskQuestion}>Submit</button>
            </form>
            </div>
            
        </div>

    </div>
  )
}

export default Modal