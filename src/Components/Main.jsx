import React, { useEffect, useState } from "react";
import { GridScan } from "../effects/GridScan";

const text =
  "Explore a world of JSON data like never before. Dive in to discover, visualize, and interact with structured information seamlessly.";

export default function Main() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#fde047"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          className="bg-black min-h-screen"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
        style={{ fontFamily: "Inconsolata" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-yellow-400"> <mark > {"{offJson/}"} </mark> </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl sm:max-w-2xl min-h-[4rem]">
          {"{"} {displayText}  
          <span className="animate-pulse">|</span> {"}"}
        </p>

        <a
          href="#explore"
          className="bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-500 transition"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}
