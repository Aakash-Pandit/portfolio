import React from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Nav({
  theme,
  onThemeToggle,
}: {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        {LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="nav-link" onClick={handleNavClick}>
            {label}
          </a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
