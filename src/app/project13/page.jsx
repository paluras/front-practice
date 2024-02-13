"use client";

import "./style.css";
import moon from "./moon.png";
import sun from "./sun.png";
import grass from "./grass.webp";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const lerp = (start, end, factor) => (1 - factor) * start + factor * end;

const FollowMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, mousePosition.x - 50, 0.1), // 0.1 is the lerp factor for smoothing
        y: lerp(prevPosition.y, mousePosition.y - 50, 0.1),
      }));

      requestRef.current = requestAnimationFrame(followMouse);
    };

    const requestRef = { current: requestAnimationFrame(followMouse) };

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition]); // Depend on mousePosition to ensure smooth updating

  return (
    <>
      <section
        style={{
          position: "relative",

          width: "100vw",
          height: "50vh",
          overflow: "hidden",
          background: "rgb(255,235,9)",
          background: `linear-gradient(180deg, rgba(39,87,170,1) ${
            position.y - 300
          }%, #9edcfe ${position.y - 100}%)`,

          pointerEvents: "none", // Ensure the element does not interfere with mouse events
        }}
      >
        <Image
          style={{
            objectFit: "contain",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            imageRendering: "pixelated",
            pointerEvents: "none", // Ensure the element does not interfere with mouse events
          }}
          src={sun}
        />

        <Image
          style={{
            imageRendering: "pixelated",
            objectFit: "contain",
            position: "absolute",
            left: `${position.x}px`,
            bottom: `${position.y - 200}px`,

            pointerEvents: "none", // Ensure the element does not interfere with mouse events
          }}
          src={moon}
        />

        <div className="grass-img"
          style={{
            imageRendering: "pixelated",
            objectFit: "cover",
            position: "absolute",
            bottom: "0",
            left: "0",
            width:"100%",
            height:"500px",
            backgroundImage:`url${grass}`,
           backgroundRepeat:"repeat-x",
            pointerEvents: "none", // Ensure the element does not interfere with mouse events
          }}
          src={grass}
        />
      </section>
      <header>
        <h1>It's a new dawn.</h1>
      </header>
      <section
        style={{
          color: "white",
          display: "flex",
          padding: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          enim dolore eligendi, sunt harum minus laborum fuga, eveniet id
          repellendus magni? Maxime facere, maiores perspiciatis quasi dicta
          minima vel laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi et est nostrum iste ad nam aut? Porro at necessitatibus, ullam
          numquam quidem reiciendis unde optio ducimus et perspiciatis eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit
          ratione ut, molestiae impedit ipsum tenetur. Exercitationem
          dignissimos eligendi vitae sunt, esse consequuntur debitis possimus
          praesentium eum qui maiores magnam.
        </p>
      </section>
      <header>
        <h1>It's a new day.</h1>
      </header>
      <section
        style={{
          color: "white",
          display: "flex",
          padding: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          enim dolore eligendi, sunt harum minus laborum fuga, eveniet id
          repellendus magni? Maxime facere, maiores perspiciatis quasi dicta
          minima vel laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi et est nostrum iste ad nam aut? Porro at necessitatibus, ullam
          numquam quidem reiciendis unde optio ducimus et perspiciatis eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit
          ratione ut, molestiae impedit ipsum tenetur. Exercitationem
          dignissimos eligendi vitae sunt, esse consequuntur debitis possimus
          praesentium eum qui maiores magnam.
        </p>
      </section>
      <header>
        <h1>It's a new life.</h1>
      </header>
      <section
        style={{
          color: "white",
          display: "flex",
          padding: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          enim dolore eligendi, sunt harum minus laborum fuga, eveniet id
          repellendus magni? Maxime facere, maiores perspiciatis quasi dicta
          minima vel laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi et est nostrum iste ad nam aut? Porro at necessitatibus, ullam
          numquam quidem reiciendis unde optio ducimus et perspiciatis eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit
          ratione ut, molestiae impedit ipsum tenetur. Exercitationem
          dignissimos eligendi vitae sunt, esse consequuntur debitis possimus
          praesentium eum qui maiores magnam.
        </p>
      </section>
    </>
  );
};

export default FollowMouse;
