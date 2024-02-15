"use client";

import Header from "@/app/project14/src/Header/index";
import "./style.css";
import Landing from "./Landing";

import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <link rel="preload" href="/yacht.jpg" as="image" />
      </Head>
      <img
        alt="Yacht"
        loading="eager"
        src="/yacht.jpg"
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          zIndex: "-1",
          height: "100vh",
          width: "100vw",
          top: "0",
          left: "0",
          objectFit: "cover",
        }}
      />

      <Header />
      <Landing />
      <div className="btn-container">
        {" "}
        <button className="custom-btn">&#x2022; Yachts for sale</button>
        <button className="custom-btn">&#x2022; Yachts for sale</button>
      </div>
      <footer style={{
        color:"white",
        display:"flex",
        justifyContent:"center",
        bottom:"0",
       padding:"20px"
      }}>
        {" "}
        <a href="https://dribbble.com/shots/23629019-Fraser-Yachts-website">
          Design By Nazar Stasiv
        </a>
      </footer>
    </>
  );
}
