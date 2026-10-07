import React from "react";
import Feed from "./Feed";
import Suggestion from "./Suggestion";

function Contentbar() {
  return (
    <div className="grid grid-cols-4 col-span-4 row-span-8 bg-[#111315]">
      <Feed />
      <Suggestion />
    </div>
  );
}

export default Contentbar;
