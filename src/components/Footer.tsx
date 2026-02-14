import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const LINKS = {
  email: "mailto:aakashpandit366@gmail.com",
  github: "https://github.com/Aakash-Pandit",
  linkedin: "https://www.linkedin.com/in/aakash-pandit/",
  instagram: "https://www.instagram.com/golangwith.aakash/",
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-built">
        Built with ❤️ by Aakash Pandit
      </p>
    </footer>
  );
}
