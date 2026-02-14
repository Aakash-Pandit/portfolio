import React from "react";

const cards = [
  {
    emoji: "🚀",
    title: "Projects & Work",
    description:
      "From backend services to AI-powered apps. See how I approach problems and ship solutions.",
    href: "#projects",
    cta: "Explore Projects →",
  },
  {
    emoji: "💬",
    title: "Get in Touch",
    description:
      "Open to freelance, backend roles, and collaboration. Say hi or ask anything.",
    href: "#contact",
    cta: "Let's Connect →",
  },
];

export default function StartExploring() {
  return (
    <section className="section">
      <h2 className="section-title">Start Exploring</h2>
      <p className="muted section-intro">
        Dive into my work and the tools that power my development journey
      </p>
      <div className="explore-grid">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="explore-card card"
          >
            <span className="explore-emoji" aria-hidden>
              {card.emoji}
            </span>
            <h3 className="explore-title">{card.title}</h3>
            <p className="muted">{card.description}</p>
            <span className="link explore-cta">{card.cta}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
