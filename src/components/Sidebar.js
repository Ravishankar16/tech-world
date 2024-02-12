import React from 'react'
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48 '>
        <ul>
            {/* List of features */}
            <Link to="/"><li className='text-lg font-bold'>Home</li></Link>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Community</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Forum</li>
        </ul>
        <h1 className='font-bold pt-1'>Features</h1>
        <ul>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Top Users</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Answered</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Unanswered</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Recent</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Solved</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Unsolved</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Most Liked</li>
        </ul>
        <h1 className='font-bold pt-2'>Categories</h1>
        <ul>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Javascript</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Python</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Java</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>C</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>C++</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>React</li>
            <li className='hover:bg-blue-400 hover:font-bold hover:text-white'>Node</li>
        </ul>
        
    </div>
  )
}

export default Sidebar