import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Meet Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white"
        style={{ fontFamily: "BBH Bogle" }}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-bold">offJson</span>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex gap-6 text-lg">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="px-3 py-1 rounded-md hover:bg-white hover:text-[#7C00FE] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="sm:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 🟣 COLOR PANEL (70%) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[70%] z-40 bg-[#7C00FE]
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      />

      {/* ⚫ NAV PANEL (70%) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[70%] z-50 bg-black
          flex flex-col items-center justify-center gap-8
          text-2xl text-white
          transition-transform duration-500 ease-out delay-150
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => setOpen(false)}
            className="hover:text-[#7C00FE] transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* 👉 RIGHT SIDE CLICK AREA (30%) */}
      {open && (
        <div
          className="fixed top-0 right-0 h-full w-[30%] z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
