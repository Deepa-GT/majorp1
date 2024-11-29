import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    setIsDarkMode(scrollPosition > windowHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
      <section className="section white-section">White Section hover on the section transition to black</section>
      <section className="section black-section">Black Section hover on the section transition to white</section>
    </div>
  );
};

export default App;