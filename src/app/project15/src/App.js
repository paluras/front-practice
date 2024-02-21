import React from "react";
import "./style.css";
import person from "../public/person.svg";
import search from "../public/search.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ap187s54",
  dataset: "production",
  apiVersion: "2024-02-20",
  useCdn: false,
});

async function App() {

const data = await client.fetch(`*[_type == "furniture"]`)
const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source).url();

  return (
    <>
      {/* Header component */}
      <header>
        <h1>Classico</h1>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Our World</a>
            </li>
          </ul>
        </nav>
        <nav>
          <Image src={person} alt="Profile" />

          <Image src={search} alt="Search" />
          <hr></hr>
          <b>Cart (0)</b>
        </nav>
      </header>
      {/* Just a style element */}
      <div className="big-title">MODERN FURNITURE</div>

      {/* Second Nav */}
      <nav className="nav-second">
        <ul>
          <li>
            <a>New Arrivals</a>
          </li>
          <li>
            <a>Beds</a>
          </li>
          <li>
            <a>Sofas</a>
          </li>
          <li>
            <a>Chairs</a>
          </li>
          <li>
            <a>Dining Tables</a>
          </li>
          <li>
            <a>Desks</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Card layout */}
        <section className="layout-grid">
          {/* Card */}

          {data.map((item)=>(
            <div key={item._id} className="card">
            <Image src={urlFor(item.image.asset)} alt="Produs" width={300} height={400} />
            <div className="container">
              {" "}
              <div className="card-text">
                {" "}
                
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div className="card-price">
                {" "}
                <h2>${item.price}</h2>
                <p>{item.stock} Variants</p>
              </div>
            </div>
          </div>
          ))}
          
          
    
        </section>
      </main>
    </>
  );
}

export default App;
