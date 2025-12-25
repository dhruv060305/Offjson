// NavWrapper.jsx
import { useEffect, useState } from "react";
import Nav from "./Nav";

export default function NavWrapper() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsHome(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🟡 HOME SECTION → always visible
  if (isHome) {
    return (
      <div className="relative w-full">
        <Nav />
      </div>
    );
  }

  // ⚫ OTHER SECTIONS → hover to reveal
  return (
    <div className="relative w-full group">
      {/* Hover trigger zone */}
      <div className="absolute top-0 left-0 h-8 w-full z-40"></div>

      {/* Hidden nav */}
      <div
        className="
          absolute top-0 left-0 w-full z-50
          -translate-y-full
          group-hover:translate-y-0
          transition-transform duration-300 ease-out
        "
      >
        <Nav />
      </div>
    </div>
  );
}
