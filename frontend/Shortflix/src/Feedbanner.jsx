import React from "react";
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
      image:
        "https://wallpapers.com/images/high/squid-game-background-kxyk80relza8m5yc.jpg",
      title: "Squid Game",
      type: "Game, Thriller",
      rating: "9.0",
    },
    {
      image:
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABbyANuq94N7FvIjXydCVVuAvBxo9OXprQT_oRG34yqDACFJnP_Ynndn-MH5Q3xU8ofkzFa1m0BpK1zHPB08GjAsTkKV2E8gyICBS.webp?r=dce",
      title: "Stranger Things",
      type: "Supernatural forces",
      rating: "8.9",
    },
    {
      image:
        "https://images.bauerhosting.com/empire/2026/09/resident-evil-2026-1.jpg?ar=16:9&fit=crop&crop=top&auto=format&w=2560&q=80",
      title: "Resident Evil",
      type: "Survival-horror",
      rating: "8.4",
    },
  ];

  return (
    <>
      <Banner
        image="https://images.bauerhosting.com/empire/2026/09/resident-evil-2026-1.jpg?ar=16:9&fit=crop&crop=top&auto=format&w=2560&q=80"
        title="Resident Evil"
        type="Survival-horror"
        rating="8.4"
      />
    </>
  );
}

export default Feedbanner;
