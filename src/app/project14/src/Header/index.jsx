"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal";
import "./style.css";

const Header = () => {
  const [width, setWidth] = useState(0);
  console.log(width);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <header>
      <h1>Fraser&#174;</h1>

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
      <div className="nav-mobile">
        <Modal />
      </div>
    </header>
  );
};

export default Header;
