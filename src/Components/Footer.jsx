import React from "react";
import { FaLinkedinIn, FaRedditAlien, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      {/* Gradient top border */}
      <div className="h-[2px] bg-gradient-to-r from-[#7C00FE] via-[#FF2D2D] to-[#F9E400]" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2
            className="text-3xl font-extrabold tracking-wider text-[#F9E400]
                       drop-shadow-[0_0_12px_#7C00FE]"
          >
            OFFJSON
          </h2>
          <p className="mt-3 text-gray-400 max-w-sm">
            Engineering the future with AI, automation, and high-performance web systems.
          </p>
        </div>

        {/* Social */}
        <div className="flex justify-center md:justify-end gap-5 items-center">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center rounded-full
                       bg-[#0f0f0f] border border-white/10
                       hover:text-[#F9E400]
                       hover:shadow-[0_0_20px_#7C00FE]
                       transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="#"
            aria-label="Reddit"
            className="w-11 h-11 flex items-center justify-center rounded-full
                       bg-[#0f0f0f] border border-white/10
                       hover:text-[#FF2D2D]
                       hover:shadow-[0_0_20px_#FF2D2D]
                       transition-all duration-300"
          >
            <FaRedditAlien size={18} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center rounded-full
                       bg-[#0f0f0f] border border-white/10
                       hover:text-[#F9E400]
                       hover:shadow-[0_0_20px_#F9E400]
                       transition-all duration-300"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs tracking-widest text-gray-500 pb-6">
        © 2025 OFFJSON — Built Different.
      </div>
    </footer>
  );
};

export default Footer;
