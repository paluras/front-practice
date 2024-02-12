import React from "react";
import Data from "../data.json";
import Day from "./Day";


function Week() {
  return (
    <div className="weekGraph">
      {Data.map((data, index) => (
        <Day key={index} graph={data.amount} weekdayName={data.day} />
      ))}

    </div>
  );
}

export default Week;
