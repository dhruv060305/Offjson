import React, { useEffect, useRef, useState } from "react";
import LetterGlitch from "../effects/LetterGlitch";

export default function About() {
  const headingText = "who we are";

  const [displayHeading, setDisplayHeading] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (index < headingText.length) {
      const timeout = setTimeout(() => {
        setDisplayHeading((prev) => prev + headingText[index]);
        setIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index, isVisible]);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={["#F5004F", "#FFAF00", "#F9E400", "#7C00FE"]}
          glitchSpeed={50}
          centerVignette
          outerVignette={false}
          smooth
        />
      </div>

      {/* Glass Content */}
      <div
        className="
          relative z-10
          flex flex-col gap-14
          px-10 py-16 sm:px-16 sm:py-20
          bg-black/30
          backdrop-blur-xl
          rounded-2xl
          shadow-2xl
          w-[90%]
          max-w-9xl
          min-h-[90vh]
        "
      >
        {/* TYPEWRITER H1 */}
        <h1
          ref={headingRef}
          className="text-5xl text-white sm:text-6xl md:text-9xl font-bold tracking-widest"
          style={{ fontFamily: "BBH Bogle" }}
        >
          {"{"} {displayHeading}
          {isVisible && (
            <span className="animate-pulse text-[#F9E400]">|</span>
          )}{" "}
          {"}"}
        </h1>

        {/* 🔽 DROPDOWNS */}
        <div className="flex flex-col gap-6 max-w-3xl" style={{ fontFamily: "BBH Bogle" }}>
          {/* Item 1 */}
          <div className="group border-b border-white/20 pb-4">
            <h3 className="text-xl tracking-widest cursor-pointer group-hover:text-[#F9E400] transition">
              Mission
            </h3>

            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
              <p className="mt-4 text-gray-300 leading-relaxed tracking-wide">
                Building immersive, high-performance web experiences with modern
                UI and clean architecture.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group border-b border-white/20 pb-4">
            <h3 className="text-xl tracking-widest cursor-pointer group-hover:text-[#F9E400] transition">
              Vision
            </h3>

            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
              <p className="mt-4 text-gray-300 leading-relaxed tracking-wide">
                Redefining how developers interact with structured data through
                powerful and intuitive visualization tools.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group border-b border-white/20 pb-4">
            <h3 className="text-xl tracking-widest cursor-pointer group-hover:text-[#F9E400] transition">
              Values
            </h3>

            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
              <ul className="mt-4 text-gray-300 space-y-2 tracking-wide">
                <li>• Performance first</li>
                <li>• Clean cyber aesthetics</li>
                <li>• Scalable systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
