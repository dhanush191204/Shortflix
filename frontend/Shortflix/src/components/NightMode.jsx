import React from 'react'

function NightMode() {
  return (
    <div className=" border-2 border-[#3e5eff] flex items-center  px-1 py-0.5 rounded-4xl ">
      <div className="h-7 w-7 rounded-full bg-[#3e5eff] flex justify-center items-center m-0.5 ">
        <i className="bi bi-moon-fill text-[#FFFFFF] "></i>
      </div>
      <div className="text-[#3e5eff] m-0.5 ml-2 mr-1   "> Night </div>
    </div>
  );
}

export default NightMode