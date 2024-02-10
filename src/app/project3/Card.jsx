import React from "react";
import Image from "next/image";
import dots from "./assets/icon-ellipsis.svg";

function Card(props) {
  return (
    <div style={{ backgroundColor: props.bg }} className="card">
      <div className={props.color}></div>
      <div className="card-body">
        <div className="card-nav">
          {props.text}

          <Image src={dots} alt="dots"></Image>
        </div>
        <div className="card-main">
          <div className="hours">{props.hours}</div>
          <div className="previous-week">Last Week - {props.hoursPrev} </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
