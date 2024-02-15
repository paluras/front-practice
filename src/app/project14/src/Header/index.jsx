"use client";

import { useEffect, useState } from "react";

import "./style.css";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(() => {
    // Function to update the width state
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Update the width when the component mounts

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);





  return (
    <header>
      <h1>Fraser&#174;</h1>

      {width > 1000 ? (
        <>
          <nav>
            <ul>
              <a>Buy</a>
              <a>Sell</a>
              <a>Charter</a>
              <a>Manage</a>
            </ul>
          </nav>
          <nav>
            <ul>
              <a href="">About</a>
              <a href="">News</a>
              <button>
                <a href="">&#x2022; Build your own</a>
              </button>
            </ul>
          </nav>
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 -960 960 960"
          width="50"
          fill="white"
        >
          <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
        </svg>
      )}
    </header>
  );
};

export default Header;
