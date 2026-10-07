import React from 'react'

function DayMode() {
    return (
      <div className=" border-2 border-[#f3db07] flex items-center  px-1 py-0.5 rounded-4xl ">
        <div className="h-7 w-7 rounded-full bg-[#f3db07] flex justify-center items-center m-0.5 ">
          <i className="bi bi-brightness-high-fill text-[#FFFFFF] "></i>
        </div>
        <div className="text-[#f3db07] m-0.5 ml-2 mr-1   "> Day </div>
      </div>
    );
}

export default DayMode