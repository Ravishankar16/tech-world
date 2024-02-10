import React from 'react'
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Home</li>
            <li>Home</li>
        </ul>
        <h1 className='font-bold'>Categories</h1>
        <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>React</li>
            <li>Node</li>
        </ul>
        <h1 className='font-bold pt-5'>Top Rated</h1>
        <ul>
            <li>Users</li>
            <li>Answered</li>
            <li>Unanswered</li>
            <li>C</li>
            <li>C++</li>
            <li>React</li>
            <li>Node</li>
        </ul>
    </div>
  )
}

export default Sidebar