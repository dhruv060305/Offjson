import React, { useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Web Development",
    subtitle: "Build. Scale. Dominate.",
    description:
      "We engineer fast, scalable websites and platforms with full ownership, automation, and performance baked in.",
  },
  {
    title: "AI Automation",
    subtitle: "Systems that work while you sleep.",
    description:
      "We design AI-powered workflows that remove repetitive work, increase efficiency, and scale operations automatically.",
  },
  {
    title: "AI Advertising & Marketing",
    subtitle: "Precision over guesswork.",
    description:
      "Using AI, we analyze what already converts and amplify it with data-driven advertising strategies.",
  },
];

export default function Services() {
  const [slide, setSlide] = useState(0);
  const totalSlides = services.length + 1;
  const sliderRef = useRef(null);

  // Swipe detection
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) next(); // swipe left
    else if (distance < -50) prev(); // swipe right
  };

  const next = () => slide < totalSlides - 1 && setSlide(slide + 1);
  const prev = () => slide > 0 && setSlide(slide - 1);

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${slide * (100 / totalSlides)}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* -------- INTRO SLIDE -------- */}
        <div className="w-full min-h-screen flex items-center px-6 md:px-24">
          <div className="max-w-2xl  md:text-left">
            <span className="text-sm tracking-widest text-[#7C00FE]">
              OUR CAPABILITIES
            </span>
            <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Services <br /> that <br />
              <span className="text-[#7C00FE]">move fast</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
              We don’t offer features. We build systems designed to grow with
              your business.
            </p>
            <button
              onClick={next}
              className="mt-8 flex items-center gap-2 text-[#7C00FE] text-lg hover:gap-4 transition-all"
            >
              Start Exploring <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* -------- SERVICE SLIDES -------- */}
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full min-h-screen flex flex-col md:flex-row items-center px-6 md:px-24 py-12"
          >
            {/* LEFT (desktop) / TOP (mobile) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-4xl md:text-6xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-[#7C00FE] text-lg md:text-xl mb-4">
                {service.subtitle}
              </p>
            </div>

            {/* RIGHT (desktop) / BOTTOM (mobile) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                {service.description}
              </p>

              {/* Nav */}
              <div className="mt-8 flex justify-center md:justify-start items-center gap-6">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button
                  onClick={next}
                  className="flex items-center gap-2 text-[#7C00FE] hover:gap-4 transition-all"
                >
                  Next <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
