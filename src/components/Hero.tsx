import React from "react";
import Image from "next/image";

const LINKS = {
  projects: "#projects",
  contact: "#contact",
  resume:
    "https://drive.google.com/file/d/1z22s7m3EmK2rir3uU-Ub1D0Mir8uChsI/view?usp=drive_link",
};

export default function Hero() {
  return (
    <section className="hero hero-grid">
      <div>
        <p className="muted">Software Engineer (Backend-Focused)</p>
        <h1 className="hero-title">
          Hi, I'm <span>Aakash</span>
        </h1>
        <p className="hero-subtitle">
          I build reliable backend systems and AI-powered products with
          Python, Go, FastAPI, Django, PostgreSQL, Redis, and LLM tooling.
          I am always ready to learn new technologies and level up my
          craft with every project.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={LINKS.projects}>
            View Projects
          </a>
          <a className="btn btn-outline btn-outline-accent" href={LINKS.contact}>
            Let's Talk
          </a>
          <a
            className="btn btn-outline btn-outline-accent"
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <Image
          src="/Pic.jpg"
          alt="Aakash Pandit"
          width={420}
          height={520}
          priority
        />
      </div>
    </section>
  );
}
  