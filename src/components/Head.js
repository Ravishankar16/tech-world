import React, { useState } from 'react'
import QuestionList from './QuestionList'
// import data from '../data.json'
import queList from '../queList'

const Head = () => {

const[searchText, setSearchText] = useState("")

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-7' alt='menu' src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png"/>
            <img className='h-7 mx-2' alt='logo' src='https://www.infineon.com/frontend/release_2023-10-1/dist/resources/img/logo-desktop-en.png'/>
        </div>

        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
              type='text'
              value={searchText} 
              onChange={(e)=>setSearchText(e.target.value)}/>

            <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100' 
              onClick={()=>{
                // Filter the question and update the UI
              console.log(searchText)
              const searchQuestion = queList.questions.filter((d)=>d.title && d.title.includes(searchText))
            }} >Search</button>
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt="user" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"/>
        </div>
    </div>
    
  )
}

export default Head