import React from "react";
import { useState } from "react";

function Day(props) {
  const [clicked, setClicked] = useState(false);

  const lowHigh = {
    backgroundColor: clicked ? "#76b5bd" : "#eb755d",
    height: `${props.graph / 5}vh`,
    borderRadius: "3px",
    transition: "background-color 0.3s ease-in-out",
  };

  const showValue = {
    color: clicked ? "black" : "#fefcf6",
    textAlign: "center",
    fontSize: "0.6em",
    transition: "color 0.3s ease-in-out",
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className={props.name}>
      <p style={showValue}>${props.graph}</p>
      <div
        onClick={handleClick}
        className={props.weekdayName}
        style={lowHigh}
      ></div>
      <p
        style={{
          textAlign: "center",
          marginTop: "7px",
          color: "hsl(28, 10%, 53%)",
        }}
      >
        {props.weekdayName}
      </p>
    </div>
  );
}

export default Day;
