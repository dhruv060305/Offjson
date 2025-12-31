import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "../effects/BlurText";

// images
import athrava from "../assets/team/athrava.jpeg";
import rajeshwari from "../assets/team/rajeshwari.jpeg";
import sanika from "../assets/team/sanika.jpeg";
import dhruv from "../assets/team/dhruv.jpeg";

const teamData = [
  {
    id: 1,
    name: "Athrava Pathak",
    // role: "AI/ML Developer",
    Designation: "Founder",
    image: athrava,
  },
  {
    id: 2,
    name: "Rajeshwari Meti",
    // role: "Web Designer",
    Designation: "Co-Founder",
    image: rajeshwari,
  },
  {
    id: 3,
    name: "Sanika Jagapat",
    // role: "Product Designer",
    Designation: "Social Media Manager",
    image: sanika,
  },
  {
    id: 4,
    name: "Dhruv Taraviya",
    // role: "Full Stack Developer",
    Designation: "Co-Founder",
    image: dhruv,
  },
];

export default function Clients() {
  const [active, setActive] = useState(teamData[0]);

  return (
    <section
      id="team"
      className="w-full min-h-screen bg-black overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      {/* Heading */}
      <div className="px-4 pt-10 md:px-16">
        <BlurText
          text="Meet Our Team"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[#F9E400] tracking-wide text-3xl sm:text-8xl font-bold mb-10"
        />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex flex-col items-center pt-24">
        {/* Image Row (TOP) */}
        <div className="flex gap-6 mb-12">
          {teamData.map((person) => (
            <motion.div
              key={person.id}
              onMouseEnter={() => setActive(person)}
              whileHover={{ scale: 1.15 }}
              className={`w-16 h-16 rounded-xl overflow-hidden border border-white/20 cursor-pointer
                ${active.id !== person.id ? "opacity-40" : "opacity-100"}`}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>

        {/* NAME */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={active.name}
            className="text-[7rem] lg:text-[15rem] font-extrabold text-[#FF2D2D] leading-none text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {active.name.split("").map((char, i, arr) => {
              const mid = arr.length / 2;
              const delay = Math.abs(mid - i) * 0.06;

              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay, ease: "easeOut" },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </motion.h1>
        </AnimatePresence>

        {/* DESIGNATION */}
        <motion.p
          key={active.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 25px rgba(255,45,45,0.8)",
          }}
          className="mt-4 text-2xl tracking-widest text-[#FF2D2D] uppercase text-center"
        >
          {active.Designation} · {active.role}
        </motion.p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col items-center pt-16 px-4">
        {/* Image Row */}
        <div className="flex gap-4 mb-10">
          {teamData.map((person) => (
            <motion.div
              key={person.id}
              onClick={() => setActive(person)}
              whileTap={{ scale: 1.15 }}
              className={`w-14 h-14 rounded-xl overflow-hidden border border-white/20 cursor-pointer
          ${active.id !== person.id ? "opacity-40" : "opacity-100"}`}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale active:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>

        {/* NAME */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={active.name}
            className="text-[7rem] sm:text-[10rem] font-extrabold text-[#FF2D2D] leading-none text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {active.name.split("").map((char, i, arr) => {
              const mid = arr.length / 2;
              const delay = Math.abs(mid - i) * 0.05;

              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay, ease: "easeOut" },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </motion.h1>
        </AnimatePresence>

        {/* DESIGNATION */}
        <motion.p
          key={active.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            textShadow: "0 0 20px rgba(255,45,45,0.8)",
          }}
          className="mt-4 text-sm tracking-widest text-[#FF2D2D] uppercase text-center"
        >
          {active.Designation} · 
        </motion.p>
      </div>
    </section>
  );
}
