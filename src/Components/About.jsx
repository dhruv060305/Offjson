import React, { useEffect, useRef, useState } from "react";
import LetterGlitch from "../effects/LetterGlitch";
import bg from "../assets/team.jpeg";
/* 🔹 Typewriter Hook */
function useTypewriter(text, active, speed = 10) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!active) return;

    setOutput("");
    let i = 0;

    const interval = setInterval(() => {
      setOutput((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [active, text]);

  return output;
}

export default function About() {
  const headingText = "who we are";

  const [displayHeading, setDisplayHeading] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const headingRef = useRef(null);

  
  /* 👀 Observe heading */
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

  /* ⌨️ Heading Typewriter */
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
      {/* 🔥 Glitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={["#F5004F", "#FFAF00", "#F9E400", "#7C00FE"]}
          glitchSpeed={50}
          centerVignette
          outerVignette={false}
          smooth
        />
      </div>

      {/* 🧊 Glass Content */}
      <div
        className="
          relative z-10
          grid grid-cols-1 lg:grid-cols-2 gap-16
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
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-14">
          {/* 🔠 TYPEWRITER H1 */}
          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-9xl  font-bold tracking-widest"
            style={{ fontFamily: "BBH Bogle" }}
          >
            {"{"} {displayHeading}
            {isVisible && (
              <span className="animate-pulse text-[#F9E400]">|</span>
            )}{" "}
            {"}"}
          </h1>

          {/* 🔽 DROPDOWNS */}
          <div
            className="flex flex-col gap-6 max-w-3xl"
            style={{ fontFamily: "BBH Bogle" }}
          >
            {/* Mission */}
            <div
              className="border-b border-white/20 pb-4"
              onMouseEnter={() => setActiveItem(0)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <h3 className="text-xl tracking-widest cursor-pointer hover:text-[#F9E400] transition">
                Mission:
              </h3>

              <div
                className={`overflow-hidden transition-all ml-5 duration-500 ${
                  activeItem === 0
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {"{"}
                <p className="ml-8 text-gray-300 leading-relaxed tracking-wide">
                  {useTypewriter(
                    "   We turn operations into software. Offjson builds structured websites, smart dashboards, and AI agents. These tools automate marketing, sales, and execution. As a result, teams can grow without adding complexity.",
                    activeItem === 0
                  )}
                  {activeItem === 0 && (
                    <span className="animate-pulse text-[#F9E400]">|</span>
                  )}
                </p>
                {"}"}
              </div>
            </div>

            {/* Vision */}
            <div
              className="border-b border-white/20 pb-4"
              onMouseEnter={() => setActiveItem(1)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <h3 className="text-xl tracking-widest cursor-pointer hover:text-[#F9E400] transition">
                Vision:
              </h3>

              <div
                className={`overflow-hidden transition-all ml-5 duration-500 ${
                  activeItem === 1
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {"{"}
                <p className="ml-8 text-gray-300 leading-relaxed tracking-wide">
                  {useTypewriter(
                    "    Businesses should manage themselves. We’re creating a future where systems take over busywork. Growth will come from leverage, not effort.",
                    activeItem === 1
                  )}
                  {activeItem === 1 && (
                    <span className="animate-pulse text-[#F9E400]">|</span>
                  )}
                </p>
                {"}"}
              </div>
            </div>

            {/* Values */}
            <div
              className="border-b border-white/20 pb-4"
              onMouseEnter={() => setActiveItem(2)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <h3 className="text-xl tracking-widest cursor-pointer hover:text-[#F9E400] transition">
                Values:
              </h3>

              <div
                className={`overflow-hidden transition-all ml-5 duration-500 ${
                  activeItem === 2
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {"{"}
                <p className="ml-8 text-gray-300 leading-relaxed tracking-wide">
                  {useTypewriter(
                    "    Systems over effort. We replace manual work with organized workflows that are designed to grow. Automation by default—if a process can run without people, it should. Execution over noise—we focus on delivering, measuring, and improving based on real results instead of empty hype. ",

                    activeItem === 2
                  )}
                  {activeItem === 2 && (
                    <span className="animate-pulse text-[#F9E400]">|</span>
                  )}
                </p>
                {"}"}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — PORTRAIT IMAGE */}
        <div className="sm:flex items-center justify-center hidden">
          <div
            className="
              relative
              w-[650px] sm:w-[520px]
              h-[600px] sm:h-[480px]
              rounded-2xl
              overflow-hidden
              bg-white/10
              backdrop-blur-md
              shadow-2xl
              
            "
          >
            <img
              src={bg}
              alt="Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
