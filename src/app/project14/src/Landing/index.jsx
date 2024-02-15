import React from "react";
import "./style.css";

const Landing = () => {
  return (
    <section>
      <h1>Step aboard another world</h1>
      <div style={{
        display:"flex"
      }}>
        <p>
          Buying, building, selling a superyacht? In search of the perfect yacht
          charter vacantion? you will find it all with Fraser.
        </p>
        <div className="styled-element">
          {" "}
          <div>Build your own yacht</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
            transform="rotate(90)"
          >
            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Landing;
