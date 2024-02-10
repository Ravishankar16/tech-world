import React from 'react'
import { useState } from 'react'
import Button from './Button'
// import data from '../data.json'
// import queList from '../queList'

export default function QuestionList(){
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
            content: "I'm new to React and want to create a simple component. Can someone guide me?",
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
            content: "I've heard about the useState hook in React. How do I use it?",
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
    // const [filteredList, setFilteredList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    

    //   const handleFilter = (category) => {
    //     const filteredList = listOfQuestions.questions.filter(
    //       (d) => d.category && d.category.toLowerCase().includes(category.toLowerCase())
    //     );
    //     setListOfQuestions({ ...listOfQuestions, questions: filteredList });
    //     setFilteredList(filteredList)
    //   };

    const handleFilter = (category) => {
        const allQuestions = initialQuestion.questions;
    
        // If the same category is clicked again, toggle the filter
        const newCategory = selectedCategory === category ? null : category;
    
        const filteredList = newCategory
          ? allQuestions.filter((d) => d.category && d.category.toLowerCase().includes(newCategory.toLowerCase()))
          : allQuestions;
    
        setListOfQuestions({ ...listOfQuestions, questions: filteredList });
        setSelectedCategory(newCategory);
      };
    
      const questionsToDisplay = listOfQuestions.questions;


    return(
        <div className='px-5 pt-7'>
            <div>
                <button onClick={() => handleFilter("javascript")}>Javascript</button>
                <button onClick={() => handleFilter("react")}>React</button>
                <button onClick={() => handleFilter("python")}>Python</button>
            </div>
            <div className='px-5 pt-7'>
            <h1 className='font-bold text-4xl'>All Questions</h1>
                <div className='pt-10 grid grid-flow-col'>
                    <ul>
                        {
                            questionsToDisplay && questionsToDisplay.map((d)=>{
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
            </div>
        </div>

    )
}