import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="relative h-170 bg-[111315] m-3 rounded-3xl overflow-hidden ">
        <img
          src={props.image}
          alt="movie-banner"
          className=" object-cover   relative"
        />
        <div className="absolute bottom-5 left-5">
          <h3 className="text-5xl text-white ">{props.title}</h3>
          <div className="flex  items-center mb-1 ">
            <p className="text-3xl text-white">{props.type} </p>
            <p className="ml-4 bg-yellow-500 rounded-md px-2">IMDB</p>
            <p className="text-white ml-1">{props.rating}</p>
          </div>
          <button className="bg-red-500 rounded-md text-white py-1 px-3 hover:scale-105 transition ">
            Watch Trailer
          </button>
          
        </div>
      </div>
    </>
  );
} 

export default Banner