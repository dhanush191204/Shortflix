import React, { useState } from "react";
import DayMode from "./DayMode";
import NightMode from "./NightMode";

function Theme() {

    const [mode, setMode] = useState("Night")
    


  return (
    <>
      <div onClick={() => setMode(mode === "Night" ? "Day" : "Night")} className="transition ">
        {mode === "Night" ? <DayMode /> : <NightMode />}
      </div>
    </>
  );
}

export default Theme;
