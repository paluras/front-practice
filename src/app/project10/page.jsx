"use client";

import Image from "next/image";
import logo from "./src/assets/logo.svg";
import "./src/App.css";
import Week from "./src/Week";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          <p>My balance</p>
          <h2>$921.48</h2>
        </div>
        <Image src={logo} alt="companny logo , two circles" />
      </nav>
      <main>
        <div className="spendings">Spending - Last 7 days</div>
        <Week />
        <div className="bottom-spendings">
          <div className="left-bottom">
            <p>Total this month</p>
            <h2>$478.33</h2>
          </div>
          <div className="right">
            <h5>+2.4%</h5>
            <p>from last month</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
