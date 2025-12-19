import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Main from "./Components/Main.jsx";
import About from "./Components/About.jsx";
import Loader from "./Components/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏳ loader duration (2s)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Nav />
      <Main />
      <About />
    </>
  );
}

export default App;
