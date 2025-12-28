import React, { useState } from "react";
import { Code, Palette, Smartphone } from "lucide-react";
import bgImage from "../assets/Gemini_Generated_Image_xkvfzgxkvfzgxkvf.png";

const services = [
  {
    title: "Web Development",
    description:
      "We build business-ready websites with powerful admin dashboards that give owners complete control, automation, and growth insights.",
    icon: <Code size={26} />,
  },
  {
    title: "Ai Automation",
    description:
      "Command Your Growth. Automated Intelligence at Your Fingertips.",
    icon: <Palette size={26} />,
  },
  {
    title: "AI Automated Advertising & Marketing",
    description:
      "We don’t guess marketing strategies — we reverse engineer what already works using AI.",
    icon: <Smartphone size={26} />,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-black text-white py-24 overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      <div className="relative z-10 max-w-full mx-auto px-0">
        {/* Heading */}
        <div className="text-center mb-24 px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#7C00FE]">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We build digital products that are fast, modern and user-friendly.
          </p>
        </div>

        {/* Services */}
        <div className="w-full">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setActiveIndex(index)
                }
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setActiveIndex(null)
                }
                onClick={() => handleClick(index)}
                className="group relative w-full cursor-pointer border-t border-white/10 overflow-hidden"
              >
                {/* Background Image for bar only */}
                <div
                  className={`absolute inset-0 bg-center bg-cover transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
                />

                {/* Main Bar */}
                <div
                  className={`relative flex flex-col items-center justify-center gap-4
                    w-full  h-24 transition-all duration-300 ease-out
                    ${isActive ? "h-56 md:h-44" : ""} bg-black/70 group-hover:bg-transparent
                    px-6 md:px-0
                  `}
                >
                  {/* Logo and Title side by side */}
                  <div className="flex items-center gap-4 mt-4 z-10">
                    <div className="text-[#F9E400]">{service.icon}</div>
                    <h3 className="text-2xl  md:text-3xl font-medium">{service.title}</h3>
                  </div>

                  {/* Description below */}
                  <p
                    className={`text-[#F5004F] text-sm md:text-base z-10 text-center mt-2 transition-all duration-300 ${
                      isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Accent Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#F9E400] transition-all duration-300 z-10 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
