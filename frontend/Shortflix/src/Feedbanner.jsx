import React, { useState } from "react";
import Banner from "./components/Banner";


function Feedbanner() {
  const bannerdata = [
    {
      image:
        "https://justwebseries.com/wp-content/uploads/2026/05/is-Money-Heist-Season-6-coming.png",
      title: "Money Heiest",
      type: "Crime, Drama",
      rating: "7.9",
    },
    {
      image: "https://wallpapercave.com/wp/wp9938368.jpeg",
      title: "Squid Game",
      type: "Game, Thriller",
      rating: "9.0",
    },
    {
      image:
        "https://i.pinimg.com/originals/57/68/77/576877c2631d6b169f5902731dc0c4b3.jpg",
      title: "Stranger Things",
      type: "Supernatural forces",
      rating: "8.2",
    },
    {
      image:
        "https://www.whats-on-netflix.com/wp-content/uploads/2025/09/wednesday-season-2-soundtrack-list.jpg",
      title: "Wednesday",
      type: "Horror, Drama",
      rating: "7.9",
    },
    {
      image: "https://wallpaperaccess.com/full/44713807.jpg",
      title: "Brand New Day",
      type: "Super Hero",
      rating: "8.9",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNTBhZmE0ZDQtOWJiYi00NjZmLWExZTgtOTlkZWE4YmY3OGZkXkEyXkFqcGc@.jpg",
      title: "Swapped",
      type: "Fantasy comedy film",
      rating: "7.6",
    },
    {
      image:
        "https://images.bauerhosting.com/empire/2026/09/resident-evil-2026-1.jpg?ar=16:9&fit=crop&crop=top&auto=format&w=2560&q=80",
      title: "Resident Evil",
      type: "Survival-horror",
      rating: "8.4",
    },
    {
      image: "https://wallpaperaccess.com/full/26708477.jpg",
      title: "Off Campus",
      type: "Romantic, Drama",
      rating: "9.1",
    },

    {
      image:
        "https://images.complex.com/complex/image/upload/c_crop,h_1032,w_1730,x_0,y_0/g_auto:aoi_692_413_346_206,q_auto,f_avif,c_fill,ar_1.68,w_2048/sanity-new/s9b8luca7scwyinzih4b",
      title: "Avengers",
      type: "Action-adventure",
      rating: "8.9",
    },

    {
      image:
        "https://justwebseries.com/wp-content/uploads/2026/05/is-Money-Heist-Season-6-coming.png",
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
