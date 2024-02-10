"use client";
import Image from "next/image";
import "./src/App.css";
import Card from "./src/Card";
import Contact from "./src/Contact";
import github from "./public/icon-github.svg";
import ft from "./public/icon-frontend-mentor.svg";
import twitter from "./public/icon-twitter.svg";
import profile from "./public/image-profile-mobile.webp";

function App() {


  return (
    <div className="App">
      <div className="non-contact">
        <div className="ring"></div>
        <div className="main-name">
          <div className="name-icons">
            <h1>adamkeyes</h1>
            <div className="icons">
              <Image src={ft} alt="fm"></Image>
              <Image src={github} alt="github"></Image>
              <Image src={twitter} alt="twitter"></Image>
            </div>
          </div>
          <Image src={profile} alt="profile-img"></Image>

          <div className="text-contact">
            <h1>
              Nice to meet you! I'm <a>Adam Keyes</a>.
            </h1>
            <p className="description">
              Based in the UK, i`m a front-end developer passionate about
              building accesible web app that users love
            </p>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="skills">
          <div className="html">
            HTML
            <p>4 Years Experience</p>
          </div>
          <div className="html">
            CSS
            <p>4 Years Experience</p>
          </div>
          <div className="html">
            Javascript
            <p>4 Years Experience</p>
          </div>
          <div className="html">
            Accessibility
            <p>4 Years Experience</p>
          </div>
          <div className="html">
            React
            <p>4 Years Experience</p>
          </div>
          <div className="html">
            Sass
            <p>4 Years Experience</p>
          </div>
        </div>
        <div className="main-body">
          <div className="project-expose">
            Projects
            <a href="#contact">Contact me</a>{" "}
          </div>
          <div className="projectsMultiple">
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Contact  />
    </div>
  );
}

export default App;
