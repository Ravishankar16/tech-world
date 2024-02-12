import React from "react";
// import data from '../data.json'

const Head = () => {
  return (
    // <div className='grid grid-flow-col p-5 m-2 shadow-lg sticky top-0 left-0 right-0 bg-white z-10'>
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-7"
          alt="menu"
          src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png"
        />
        <img
          className="h-7 mx-2"
          alt="logo"
          src="https://www.infineon.com/frontend/release_2023-10-1/dist/resources/img/logo-desktop-en.png"
        />
      </div>

      <div className="flex">
        <ul className="flex space-x-4  px-4">
          <li className="bg-blue-400 text-white text-md hover:bg-blue-700 hover:text-white p-2 rounded-md font-bold">
            DEV COMMUNITY
          </li>
          <li className="bg-blue-400 text-white text-md hover:bg-blue-700 hover:text-white p-2 rounded-md font-bold">
            ABOUT
          </li>
          <li className="bg-blue-400 text-white text-md hover:bg-blue-700 hover:text-white p-2 rounded-md font-bold">
            FORUM
          </li>
          <li className="bg-blue-400 text-white text-md hover:bg-blue-700 hover:text-white p-2 rounded-md font-bold">
            DISCUSSION
          </li>
          <li className="bg-blue-400 text-white text-md hover:bg-blue-700 hover:text-white p-2 rounded-md font-bold">
            TECH TALK
          </li>
        </ul>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>

    </div>
  );
};

export default Head;
