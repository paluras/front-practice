"use client";

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "next/image";
import dice from "./assets/icon-dice.svg";
import pattern from "./assets/pattern-divider-desktop.svg";

function App() {
  const [count, setCount] = useState([]);
  const [advice, setAdvice] = useState([]);

  const hook = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setCount(response["data"]["slip"]["id"]);
      setAdvice(response["data"]["slip"]["advice"]);
    });
  };

  useEffect(() => {
    hook();
    
  }, [advice]);

  return (
    <div className="App">
      <div className="main-element">
        <div className="id">Advice #{count}</div>
        <div className="advice">{advice}</div>
        <Image className="pattern" src={pattern} alt="pettern-divider" />
        <button className="rndBtn" onClick={() => hook()}>
          <Image className="diceImg" src={dice} alt="diceIcon" />
        </button>
      </div>
    </div>
  );
}

export default App;
