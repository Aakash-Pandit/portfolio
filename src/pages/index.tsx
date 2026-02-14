import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import WhatIDo from "../components/WhatIDo";
import Nav from "../components/Nav";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <>
      <Nav theme={theme} onThemeToggle={toggleTheme} />
      <main className="page">
        <Hero />
        <WhatIDo />
        <Quote />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
