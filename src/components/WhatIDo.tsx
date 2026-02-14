import React from "react";

const items = [
  {
    emoji: "⚙️",
    title: "Backend Development",
    description:
      "Building robust APIs and scalable systems with Python, Go, FastAPI & Django",
  },
  {
    emoji: "🤖",
    title: "AI & LLMs",
    description:
      "Creating intelligent solutions with RAG, tool calling, and LLM-powered workflows",
  },
  {
    emoji: "🌐",
    title: "Systems & Data",
    description:
      "Databases, caching, pipelines, and DevOps with PostgreSQL, Redis, Docker",
  },
];

export default function WhatIDo() {
  return (
    <section className="section" id="what-i-do">
      <h2 className="section-title">What I Do</h2>
      <div className="what-i-do-grid">
        {items.map((item) => (
          <div key={item.title} className="what-i-do-card card">
            <span className="what-i-do-emoji" aria-hidden>
              {item.emoji}
            </span>
            <h3 className="what-i-do-title">{item.title}</h3>
            <p className="muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
