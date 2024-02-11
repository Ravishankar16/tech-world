import React, { useState } from 'react';
import Modal from './Modal';

const AskQuestion = ({ onSubmitQuestion }) => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
  
    const handleAskQuestion = (newQuestion) => {
      // Add validation logic if needed
      onSubmitQuestion(newQuestion);
  
      // Close the modal after submitting the question
    //   setShowModal(false);
    };
  

  return (
    // <div className='px-5 pt-8 font-bold text-xl'>
    //   <button onClick={() => setShowModal(true)} className='border border-gray-400 py-2 px-5 bg-blue-500 text-white'>
    //     Ask Question
    //   </button>
    //   {showModal && (
    //     <Modal onClose={() => setShowModal(false)} handleAskQuestion={handleAskQuestion} />
    //   )}
    // </div>
    <div className='px-5 pt-5 pb-2 font-bold text-xl'>
      <button onClick={() => setShowModal(true)} className='border border-gray-400 py-2 px-5 bg-blue-600 text-white'>
        Ask Question
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} handleAskQuestion={handleAskQuestion} />
      )}
    </div>
  );
};

export default AskQuestion;
