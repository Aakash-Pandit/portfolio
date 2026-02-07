import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const LINKS = {
  email: "mailto:aakashpandit366@gmail.com",
  github: "https://github.com/Aakash-Pandit",
  linkedin: "https://www.linkedin.com/in/aakash-pandit/",
  instagram: "https://www.instagram.com/golangwith.aakash/",
};

export default function Contact() {
  return (
    <section className="section footer-space" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="muted" style={{ marginTop: "8px" }}>
        Want to work together or just say hi? I am open to freelance
        projects, backend roles, and collaboration.
      </p>
      <div className="hero-actions">
        <a
          className="btn btn-outline btn-icon social-icon"
          href={LINKS.email}
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={18} />
        </a>
        <a
          className="btn btn-outline btn-icon social-icon"
          href={LINKS.github}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
        </a>
        <a
          className="btn btn-outline btn-icon social-icon"
          href={LINKS.linkedin}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          className="btn btn-outline btn-icon social-icon"
          href={LINKS.instagram}
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={18} />
        </a>
      </div>
    </section>
  );
}
  