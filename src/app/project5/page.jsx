"use client";

import { useState } from "react";

import "./src/App.scss";

function App() {
  const [count, setCount] = useState("");
  const [lightMode, setLightMode] = useState(false);
  const [colorss, setColorss] = useState("dark");

  let stylePage = { backgroundColor: colorss };

  function handleCheck() {
    setLightMode(!lightMode);

    lightMode ? setColorss("dark") : setColorss("light");
  }

  console.log(lightMode);
  console.log(stylePage);

  function handleDisplay(event) {
    const clickedButtonValue = event.currentTarget.value;

    switch (clickedButtonValue) {
      case "RESET":
        setCount("");
        break;
      case "DEL":
        setCount(count.slice(0, -1));
        break;
      case "=":
        if (count == "") {
          return setCount("");
        }
        try {
          setCount(eval(count));
        } catch (error) {
          setCount("");
        }
        break;
      default:
        setCount(count + clickedButtonValue);
        break;
    }
  }
  let btns = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "*",
    "=",
    "RESET",
  ];

  const theMap = btns.map((e) => (
    <button
      id={colorss + e}
      onClick={handleDisplay}
      key={e}
      value={e}
      className={e}
    >
      {e}
    </button>
  ));

  let reskin = [1];
  const theSwitch = reskin.map((e) => (
    <input
      onClick={handleCheck}
      value={"true"}
      key={e}
      type={"checkbox"}
    ></input>
  ));

  // made darkmode class in CSS and use state to asigne the name of the hmtl

  return (
    <div className="root" id={colorss + "root"}>
      <div className="App" id={colorss + "App"}>
        <nav className="nav-bar" id={colorss + "nav-bar"}>
          <div className="title" id={colorss + "title"}>
            calc
          </div>
          <div className="right-nav" id={colorss + "right-nav"}>
            <div className="theme" id={colorss + "theme"}>
              THEME
            </div>
            <label className="switch">
              {theSwitch}
              <span className="slider round"></span>
            </label>
          </div>
        </nav>
        <div className="display" id={colorss + "display"}>
          {count}
        </div>
        <main className="main-div" id={colorss + "main-div"}>
          {theMap}
        </main>
      </div>
    </div>
  );
}

export default App;
