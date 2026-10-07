import React from 'react'
import { Link } from "react-router-dom";



function SidebarMenu(props) {
  return (
    <div>
      <div className="py-3 pl-2 text-[#9C9D9D] hover:text-[#D91F27] hover:border-l-4 border-[#D91F27] ">
        
        <Link to={props.link} className="m-5  ">
          <i className={props.icon}></i>
          <span>{props.name}</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarMenu