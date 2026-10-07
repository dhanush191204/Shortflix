import React from 'react'
import { Link } from "react-router-dom";
import Theme from './components/Theme';


function Topbar() {
  return (
    <div className=" bg-[#111315] col-span-4 grid grid-cols-4 w-100% ">
      <div>
        <ul className="grid grid-cols-3 h-full items-center">
          <li className="flex justify-center text-[#9C9D9D] hover:text-[#FFFFFF] ">
            {" "}
            <Link to="/tv-show">TV Show</Link>{" "}
          </li>
          <li className="flex justify-center text-[#9C9D9D] hover:text-[#FFFFFF] ">
            {" "}
            <Link to="/movies">Movies</Link>{" "}
          </li>
          <li className="flex justify-center text-[#9C9D9D] hover:text-[#FFFFFF] ">
            {" "}
            <Link to="/animes">Animes</Link>{" "}
          </li>
        </ul>
      </div>
      <div className=" h-full flex items-center justify-center col-span-2 ">
        <div className="border border-[#9C9D9D] flex rounded-4xl py-2  px-14 hover:scale-105  ">
          <i className="bi bi-search text-[#9C9D9D] right-5 relative "></i>
          <input
            type="text"
            name=""
            id=""
            className="border-[#111315] h-full focus:outline-none focus:ring-0 placeholder-[#9C9D9D] text-[#9C9D9D] "
            placeholder="Search.."
          />
          <i className="bi bi-share-fill text-[#9C9D9D] left-5 relative "></i>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center  ">
          <Theme />
        </div>
        <div className="flex items-center justify-center  ">
          <div className=" border-2 border-[#9c9d9d] flex items-center  px-1 py-0.5 rounded-4xl ">
            <div className="text-[#9C9D9D] m-0.5 ml-2 mr-1   ">
              <i className="bi bi-bell-fill text-[#FFFFFF] "></i>
            </div>
            <div className="h-7 w-7 rounded-full bg-[#9c9d9d] flex justify-center items-center m-0.5 ">
              <i className="bi bi-person-circle "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar