import React from "react";
import LetterGlitch from "../effects/LetterGlitch";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center  justify-center bg-black text-white px-4 sm:px-6"
    >
      <LetterGlitch
        glitchColors={["#F5004F", "#FFAF00", "#F9E400", "#7C00FE"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </section>
  );
}
