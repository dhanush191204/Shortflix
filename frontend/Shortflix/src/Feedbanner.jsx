import React, { useState } from "react";
import Banner from "./components/Banner";


function Feedbanner() {
  const bannerdata = [
    {
      image: "src/assets/Money-Heist.png",
      title: "Money Heiest",
      type: "Crime, Drama",
      rating: "7.9",
    },

    {
      image: "src/assets/stranger-things-original.jpg",
      title: "Stranger Things",
      type: "Supernatural forces",
      rating: "8.2",
    },
    {
      image: "src/assets/wednesday.jpg",
      title: "Wednesday",
      type: "Horror, Drama",
      rating: "7.9",
    },
    {
      image: "src/assets/spiderman.webp",
      title: "Brand New Day",
      type: "Super Hero",
      rating: "8.9",
    },
    {
      image: "src/assets/squid-game.jpg",
      title: "Squid Game",
      type: "Game, Thriller",
      rating: "9.0",
    },
    {
      image: "src/assets/michael.jpg",
      title: "Michael",
      type: "Biographical film",
      rating: "8.6",
    },
    {
      image: "src/assets/resident-evil.avif",
      title: "Resident Evil",
      type: "Survival-horror",
      rating: "8.4",
    },
    {
      image: "src/assets/off-campus.jpg",
      title: "Off Campus",
      type: "Romantic, Drama",
      rating: "9.1",
    },

    {
      image: "src/assets/doom.jpg",
      title: "Avengers: Doomsday",
      type: "Action-adventure",
      rating: "8.9",
    },

    {
      image: "src/assets/Money-Heist.png",
      title: "Money Heiest",
      type: "Crime, Drama",
      rating: "7.9",
    },
  ];

const [BannerChange, setbannerChange ] = useState(0)

  

  

  return (
    <>
      <Banner
        image={bannerdata[BannerChange].image}
        title={bannerdata[BannerChange].title}
        type={bannerdata[BannerChange].type}
        rating={bannerdata[BannerChange].rating}
      />
      <button
        onClick={() => {
          BannerChange === 8
            ? setbannerChange(0)
            : setbannerChange(BannerChange + 1);
        }}
        className="w-20 relative bottom-16 left-40 hover:scale-105 transition  bg-[#9c9d9d] rounded-md py-1 px-3 "
      >
        Next
      </button>
    </>
  );
}

export default Feedbanner;
