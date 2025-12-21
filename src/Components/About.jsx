import React from "react";
import PixelBlast from "../effects/PixelBlast";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-widest">
          About
        </h2>
      </div>
    </section>
  );
}
