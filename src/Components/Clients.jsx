import React from "react";
import BlurText from "../effects/BlurText";
import teamBg from "../assets/team.jpeg";

const teamData = [
  {
    id: 1,
    name: "Athrava Pathak",
    role: "Founder & AI Developer",
    skills: ["Python", "TensorFlow", "UI/UX"],
  },
  {
    id: 2,
    name: "Rajeshwari Meti",
    role: "Web Designer",
    skills: ["Figma", "UI/UX", "CSS"],
  },
  {
    id: 3,
    name: "Sanika Jagpat",
    role: "Product Designer",
    skills: ["Figma", "UX Research"],
  },
  {
    id: 4,
    name: "Dhruv Taraviya",
    role: "Co-Founder",
    skills: ["MongoDB", "React", "Node.js"],
  },
];

export default function Clients() {
  return (
    <section
    id="team"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ fontFamily: "BBH Bogle" }}
    >
      {/* Heading */}
      <div className="relative z-20 px-4 pt-10 md:px-16">
        <BlurText
          text="Meet Our Team"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[#F9E400] tracking-wide text-3xl sm:text-8xl font-bold mb-6"
        />
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative w-full h-screen overflow-x-auto snap-x snap-mandatory">
        <div
          className="relative h-full flex"
          style={{
            width: `${teamData.length * 100}vw`,
            backgroundImage: `url(${teamBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          {teamData.map((person) => (
            <div
              key={person.id}
              className="relative w-screen h-full snap-center flex items-end z-10"
            >
              {/* ALWAYS visible info */}
              <div className="w-full px-4 pb-10">
                <div className="bg-white/25 backdrop-blur-lg rounded-2xl p-4 text-white text-sm font-mono shadow-2xl">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(person, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hover zones */}
        <div className="relative z-10 h-full grid grid-cols-4 px-16 gap-6">
          {teamData.map((person) => (
            <div
              key={person.id}
              className="group relative flex items-end pb-12"
            >
              {/* Hover-only card */}
              <div className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white text-sm font-mono shadow-xl">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(person, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
