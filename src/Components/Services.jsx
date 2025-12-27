import React, { useState } from "react";
import { Code, Palette, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, fast and scalable websites using React, Next.js and latest web tech.",
    icon: <Code size={26} />,
  },
  {
    title: "Product Design",
    description:
      "Clean, user-focused interfaces with smooth interactions and aesthetics.",
    icon: <Palette size={26} />,
  },
  {
    title: "Advertising & Marketing",
    description:
      "Expand your reach with targeted digital marketing strategies.",
    icon: <Smartphone size={26} />,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-black text-white py-24 overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7C00FE]/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F9E400]/20 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10">
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
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleService(index)}
                className={`
                  group relative w-full cursor-pointer
                  border-t border-white/10
                  overflow-hidden
                  ${isOpen ? "bg-white/5" : ""}
                `}
              >
                {/* Main Bar */}
                <div
                  className={`
                    flex items-center justify-center gap-4
                    h-24 md:h-28
                    transition-all duration-300 ease-out
                    md:group-hover:h-44
                    ${isOpen ? "h-44" : ""}
                    md:hover:bg-white md:hover:text-[#7C00FE]
                  `}
                >
                  <div className="text-[#7C00FE]">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className={`
                    absolute bottom-7 left-1/2 -translate-x-1/2
                    w-full max-w-3xl px-6 text-center
                    text-gray-400 text-sm md:text-base
                    transition-all duration-300
                    md:opacity-0 md:translate-y-4
                    md:group-hover:opacity-100 md:group-hover:translate-y-0
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                >
                  {service.description}
                </div>

                {/* Accent Line */}
                <span
                  className={`
                    absolute bottom-0 left-0 h-[2px]
                    bg-[#F9E400] transition-all duration-300
                    md:w-0 md:group-hover:w-full
                    ${isOpen ? "w-full" : "w-0"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
