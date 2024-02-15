'use client'


// import Header from "@/app/project14/src/Header/index";
import "./style.css";
import Landing from "./Landing";
import dynamic from 'next/dynamic';
import Head from "next/head";

const HeaderNoSSR = dynamic(() => import('@/app/project14/src/Header/index'), { ssr: false });



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
        width= {1000}
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

      <HeaderNoSSR/>
      <Landing />
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          display: "flex",
          gap: "10px",
        }}
        className="btn-container"
      >
        {" "}
        <button className="custom-btn">&#x2022; Yachts for sale</button>
        <button className="custom-btn">&#x2022; Yachts for sale</button>
      </div>
    </>
  );
}
