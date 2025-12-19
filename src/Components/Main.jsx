import React from "react";
import { GridScan } from "../effects/GridScan";

export default function Main() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div style={{ width: "100%", position: "relative" }}>
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

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
            Welcome to offJson
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-center max-w-2xl">
            Explore a world of JSON data like never before. Dive in to discover,
            visualize, and interact with structured information seamlessly.
          </p>
          <a
            href="#explore"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Explore Now
          </a>
        </div>
      </section>
    </>
  );
}
