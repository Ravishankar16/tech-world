import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import AnswerPage from './AnswerPage'
import Modal from './Modal'

import queList from '../queList'
import AskQuestion from './AskQuestion'
import AskQuestionCopy from './AskQuestionCopy'

export default function QuestionListCopy2(){
    const initialQuestion = {

        users: [
          {
            id: "u1",
            username: "ravi_infineon",
            displayName: "Ravi"
          },
          {
            id: "u2",
            username: "shankar_infineon",
            displayName: "Shankar"
          }
        ],
        questions: [
          {
            id: "q1",
            title: "How to create a React component?",
            content: "I'm new to React and want to create a simple component. Can someone guide me?Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.",
            category: "javascript",
            userId: "u1",
            answers: [
              {
                id: "a1",
                content: "To create a React component, you need to use the `React.Component` class...",
                userId: "u2",
                comments: [
                  {
                    id: "c1",
                    content: "Great explanation! Can you provide an example?",
                    userId: "u1"
                  },
                  {
                    id: "c2",
                    content: "I'm having issues with state management. Any tips?",
                    userId: "u2"
                  }
                ]
              },
              {
                id: "a2",
                content: "Another approach is to use functional components with hooks...",
                userId: "u1",
                comments: []
              }
            ]
          },
          {
            id: "q2",
            title: "How to use useState in React?",
            content: "I've heard about the useState hook in React. I am trying to add a RecyclerView to a fragment, but without success. I have followed this guide, but in there the RecyclerView is added to MainActivity, so I tried to adapt it. However, I cannot get the RecyclerView to show up?",
            category: "react",
            userId: "u2",
            answers: [
              {
                id: "a3",
                content: "In functional components, you can use the `useState` hook to manage state...",
                userId: "u1",
                comments: [
                  {
                    id: "c3",
                    content: "Does `useState` work with class components too?",
                    userId: "u2"
                  }
                ]
              }
            ]
          },
          {
            id: "q3",
            title: "How to use of Python?",
            content: "I've heard about the useState hook in React. How do I use it?",
            category: 'python',
            userId: "u2",
            answers: [
              {
                id: "a4",
                content: "In functional components, you can use the `useState` hook to manage state...",
                userId: "u1",
                comments: [
                  {
                    id: "c4",
                    content: "Does `useState` work with class components too?",
                    userId: "u2"
                  }
                ]
              }
            ]
          }
        ]
      }


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
            <AskQuestionCopy onSubmitQuestion={handleSubmitQuestion} />
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
                                  // <Link to={"/answer"+ queList.questions.id}>
                                  <Link to="/answer">
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