import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import AnswerPage from './AnswerPage'
import Modal from './Modal'
import { Search } from 'lucide-react'
import queList from '../queList'
import AskQuestion from './AskQuestion'
import ReactPaginate from 'react-paginate';

export default function QuestionList(){
    const initialQuestion = queList


    const [listOfQuestions, setListOfQuestions] = useState(initialQuestion)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState("")
    const [filteredQuestions, setFilteredQuestions] = useState(initialQuestion.questions);
    const [pageNumber, setPageNumber] = useState(0);

    
    useEffect(() => {
        // Update filteredQuestions whenever questions changes in the
        // questions, selected category, or search text
        setFilteredQuestions(filterQuestions(listOfQuestions.questions, selectedCategory, searchText));
      }, [listOfQuestions.questions, selectedCategory, searchText]);

  // filter questions based on category and search text
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
    // to update the selected category and initiate a search
      const handleFilter = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };
    
      const handleSearch = () => {
        const searchQuestion = listOfQuestions.questions.filter(
          (d) => d.title && d.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredQuestions(searchQuestion);
        // Clear the selected category when searching
        setSelectedCategory(null); 
      };
    
    //   const questionsToDisplay = listOfQuestions.questions;
    const questionsToDisplay = selectedCategory || searchText ? filteredQuestions : listOfQuestions.questions;

      // new question from the AskQoestionPage will be stored in the updated question
    const handleSubmitQuestion = (newQuestion) => {
        const updatedQuestions = [newQuestion, ...listOfQuestions.questions];
        setListOfQuestions((prevList) => ({ ...prevList, questions: updatedQuestions }));
      };


      // Set the number of questions per page
      const questionsPerPage = 5; 
      // Calculate the total number of pages
      const pageCount = Math.ceil(questionsToDisplay.length / questionsPerPage);

      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

      const displayedQuestions = questionsToDisplay.slice(
        pageNumber * questionsPerPage,
        (pageNumber + 1) * questionsPerPage
      );

    return(
        <div className='px-5'>
            <AskQuestion onSubmitQuestion={handleSubmitQuestion} />
            <div className='flex items-center justify-center'>
              {/* search input box and button */}
              <input className='w-2/5 px-10 border border-gray-400 p-2 rounded-l-full' 
                type='text'
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value)}/>

              <button className=' border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100' 
                onClick={()=>handleSearch()} ><Search /></button>
            </div>
            {/* filter based on category */}
            <div className=' flex items-center justify-center'>
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

            
            <div className='px-5 pt-2'>
            <h1 className='font-bold text-3xl'>All Questions</h1>
                {/* iterate and display list of questions */}
                <div className='pt-2 grid grid-flow-col'>                  
                    <ul>
                        {
                            displayedQuestions && displayedQuestions.map((d)=>{
                                return(
                                  <Link to={`/answer/${d.id}`}>
                                    <li className='pb-3' key={d.id}>
                                        <h1 className='text-xl font-bold text-blue-500'>{d.title}</h1>
                                        <p className='text-md pb-2'>{d.content}</p>
                                        <hr/>
                                    </li>
                                  </Link>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center mt-1'>
              {/* used react-paginate for pagination */}
              <ReactPaginate className='flex px-10'
                // previousLabel={'<'}
                previousLabel={<span className="text-black font-bold border border-grey-500 p-0.8 bg-blue-50">{'Back'}</span>}
                nextLabel={<span className="text-black font-bold border border-grey-500 p-0.8 bg-blue-50">{'Next'}</span>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                pageClassName={'pagination__page font-bold border border-grey-500 px-2'}
                disabledClassName={'pagination__link--disabled bg-blue-200 text-black'}
                activeClassName={'pagination__link--active bg-blue-500 text-white'}
              />
            </div>
        </div>

    )
}