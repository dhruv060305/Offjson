import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Main from "./Components/Main.jsx";
import About from "./Components/About.jsx";
import Loader from "./Components/Loader.jsx";
import Clients from "./Components/Clients.jsx";
import NavWrapper from "./Components/NavWrapper.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
      if (audioRef.current) {
        audioRef.current.play().catch((e) => console.log(e));
      }
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="relative">
        <NavWrapper />
        <Main />
        <About />
        <Clients />
      </div>
      <audio ref={audioRef} src="/audio/music.mp3" loop />
    </>
  );
}

export default App;
