import React from "react";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, fast and scalable websites using React, Next.js and latest web tech.",
    icon: <Code size={36} />,
  },
  {
    title: "Product Design ",
    description:
      "Clean, user-focused interfaces with smooth interactions and aesthetics.",
    icon: <Palette size={36} />,
  },
  {
    title: "Mobile Friendly",
    description:
      "Fully responsive layouts that look perfect on all screen sizes.",
    icon: <Smartphone size={36} />,
  },
  {
    title: "Deployment & SEO",
    description:
      "Optimized performance, SEO-ready structure and smooth deployments.",
    icon: <Globe size={36} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white px-6 py-20"
      style={{ fontFamily: "BBH Bogle" }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-[#7C00FE]">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          We build digital products that are fast, modern and user-friendly.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group relative bg-white/5 backdrop-blur-md
              border border-white/10 rounded-2xl
              p-8 transition-all duration-300
              hover:-translate-y-3 hover:border-[#7C00FE]
              hover:shadow-[0_0_40px_rgba(124,0,254,0.4)]
            "
          >
            {/* Icon */}
            <div className="mb-6 text-[#7C00FE] transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Hover Accent Line */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7C00FE] transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
