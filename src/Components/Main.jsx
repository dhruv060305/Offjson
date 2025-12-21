import React, { useEffect, useState } from "react";
import { GridScan } from "../effects/GridScan";

const text =
  "Explore a world of JSON data like never before. Dive in to discover, visualize, and interact with structured information seamlessly.";

// Brand text
const brand = "{offJson/}";

// Fixed replacement mapping
const charMap = {
  o: "#",
  f: "$",
  J: "@",
  s: "%",
  n: "!",
  "/": "\\",
};

export default function Main() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GridScan Background */}
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#F9E400"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          className="bg-black w-full h-full"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-4"
        style={{ fontFamily: "BBH Bogle" }}
      >
        {/* Brand */}
        <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold mb-4 tracking-widest">
          <span className="text-[#F9E400] flex gap-1 select-none justify-center">
            {brand.split("").map((char, i) => (
              <MappedHoverChar key={i} char={char} />
            ))}
          </span>
        </h1>

        {/* Typewriter Text */}
        <p className="text-base sm:text-lg md:text-xl tracking-wide mb-8 max-w-2xl mx-auto min-h-[4rem]">
          {"{ "}
          {displayText}
          <span className="animate-pulse">|</span>
          {" }"}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 items-center justify-center">
          <a
            href="#explore"
            className="bg-[#F9E400] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition"
          >
            Explore Now
          </a>

          <a
            href="#explore"
            className="bg-transparent border-2 border-[#F9E400] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   Hover Character Component
================================ */

function MappedHoverChar({ char }) {
  const [display, setDisplay] = useState(char);
  const replacement = charMap[char] || char;

  return (
    <span
      onMouseEnter={() => setDisplay(replacement)}
      onMouseLeave={() => setDisplay(char)}
      className="cursor-pointer transition-colors duration-150 hover:text-white"
    >
      {display}
    </span>
  );
}
