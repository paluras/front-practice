"use client";
import { useState } from "react";

const Modal = () => {
  const [width, setWidth] = useState(0);
  const [opac, setOpac] = useState(0);
  const handleClickOpen = () => {
    setWidth(353);
    setOpac(1);
  };
  const handleClickClose = () => {
    setWidth(0);
    setOpac(0);
  };

  return (
    <>
      <div
        style={{
          opacity: `${opac}`,
        }}
        onClick={() => handleClickClose()}
        className="absolute-opac"
      ></div>
      <svg
        onClick={() => handleClickOpen()}
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        viewBox="0 -960 960 960"
        width="50"
        fill="white"
      >
        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
      </svg>
      <div
        style={{
          position: "absolute",
          zIndex: "999",
          color: "black",
          overflow: "hidden",
          borderRadius: "20px",
          top: "20px",
          right: "20px",
          width: `${width / 2}px`,
          backgroundColor: "#d2d9df",
          height: `${width}px`,
          transition:
            "width 1s cubic-bezier(0.92,-0.16, 0, 0.98) , height 0.5s cubic-bezier(0.92,-0.16, 0, 0.98)",
        }}
        className="modal"
      >
        <svg
          onClick={() => handleClickClose()}
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 -960 960 960"
          width="50"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <ul
          style={{
            margin: "50px 20%",
            fontSize: "24px",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "10px 0px",
            gap: "5px",
          }}
        >
          <li>Buy</li>
          <li>Sell</li>
          <li>Charter</li>
          <li>Manage</li>
          <li>About</li>
          <li>News</li>
          <li>Build</li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
