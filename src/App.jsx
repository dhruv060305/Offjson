import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Main from "./Components/Main.jsx";
import About from "./Components/About.jsx";
import Loader from "./Components/Loader.jsx";
import Clients from "./Components/Clients.jsx";
import Services from "./Components/Services.jsx";
import Footer from "./Components/Footer.jsx"; 
import music from "./assets/music.mp3";

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
      
        <Nav />
        <Main />
        <About />
        <Clients />
        <Services />
        <Footer />
      
      <audio ref={audioRef} src={music} loop />
    </>
  );
}

export default App;
