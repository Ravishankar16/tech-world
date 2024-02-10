import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import AnswerPage from './AnswerPage'
import Modal from './Modal'

import queList from '../queList'
import AskQuestion from './AskQuestion'
// import AskQuestionCopy from './AskQuestionCopy'

export default function QuestionListCopy2(){
    const initialQuestion = queList


    const [listOfQuestions, setListOfQuestions] = useState(initialQuestion)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState("")
    const [filteredQuestions, setFilteredQuestions] = useState(initialQuestion.questions);
    
    useEffect(() => {
        // Update filteredQuestions whenever questions change
        setFilteredQuestions(filterQuestions(listOfQuestions.questions, selectedCategory, searchText));
      }, [listOfQuestions.questions, selectedCategory, searchText]);

     
  const filterQuestions = (questions, category, search) => {
    const filteredList = questions.filter((question) => {
      const validCategory =
        typeof question.category === 'string' ||
        (Array.isArray(question.category) && question.category.length > 0);

      const categoryMatch =
        !category ||
        (validCategory &&
          (Array.isArray(question.category)
            ? question.category.map((cat) => cat.toLowerCase()).includes(category.toLowerCase())
            : question.category.toLowerCase().includes(category.toLowerCase())));

      const searchMatch = !search || (question.title && question.title.toLowerCase().includes(search.toLowerCase()));

      return categoryMatch && searchMatch;
    });
    return filteredList;
  };
  
      const handleFilter = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };
    
      const handleSearch = () => {
        const searchQuestion = listOfQuestions.questions.filter(
          (d) => d.title && d.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredQuestions(searchQuestion);
        setSelectedCategory(null); // Clear the selected category when searching
      };
    
    //   const questionsToDisplay = listOfQuestions.questions;
    const questionsToDisplay = selectedCategory || searchText ? filteredQuestions : listOfQuestions.questions;


    const handleSubmitQuestion = (newQuestion) => {
        const updatedQuestions = [newQuestion, ...listOfQuestions.questions];
        setListOfQuestions((prevList) => ({ ...prevList, questions: updatedQuestions }));
      };

    return(
        <div className='px-5 pt-7'>

            <div className='flex'>
              <input className='w-3/4 px-10 border border-gray-400 p-2 rounded-l-full' 
                type='text'
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value)}/>

              <button className=' border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100' 
                onClick={()=>handleSearch()} >Search</button>
            </div>
            <AskQuestion onSubmitQuestion={handleSubmitQuestion} />
            {/* <div>
                <button className='px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400' 
                  onClick={() => handleFilter("javascript")}>Javascript</button>
                <button className='px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400' 
                  onClick={() => handleFilter("react")}>React</button>
                <button className='px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400'
                  onClick={() => handleFilter("python")}>Python</button>
            </div> */}
            <div>
        <button
          className={`px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400 ${
            selectedCategory === 'javascript' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilter('javascript')}
        >
          Javascript
        </button>
        <button
          className={`px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400 ${
            selectedCategory === 'react' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilter('react')}
        >
          React
        </button>
        <button
          className={`px-5 py-2 m-2 bg-gray-300 font-bold text-black-50 rounded-lg hover:bg-gray-400 ${
            selectedCategory === 'python' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilter('python')}
        >
          Python
        </button>
      </div>

            
            <div className='px-5 pt-7'>
            <h1 className='font-bold text-4xl'>All Questions</h1>
                <div className='pt-10 grid grid-flow-col'>                  
                    <ul>
                        {
                            questionsToDisplay && questionsToDisplay.map((d)=>{
                                return(
                                  <Link to={`/answer/${d.id}`}>
                                    <li className='pb-5' key={d.id}>
                                        <h1 className='text-2xl font-bold text-blue-500'>{d.title}</h1>
                                        <p className='pb-2'>{d.content}</p>
                                        <hr/>
                                    </li>
                                  </Link>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>

    )
}