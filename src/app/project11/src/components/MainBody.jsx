import React from "react";
import Image from "next/image";
import { images } from "../assets/index";
function MainBody() {
  console.log(images);
  return (
    <main>
      <div className="main-left-side">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>
        <button>Learn More</button>
        <div className="brand-img">
          
          <Image  src={images.audiophile} alt="audio logo" />
          <Image  src={images.databiz} alt="databiz logo" />
          <Image  src={images.maker} alt="maker logo"/>
          <Image  src={images.meet}  alt="meet logo"/>
        </div>
      </div>
      <img
        className="main-right-img"
        src="https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/image-hero-desktop.png"
      ></img>
      <img
        className="main-right-img-mobile"
        src="https://raw.githubusercontent.com/paluras/instrosection/fa1b9d4125abbb63757c254a14190cc9572de1be/src/assets/image-hero-mobile.png"
      ></img>
    </main>
  );
}

export default MainBody;
