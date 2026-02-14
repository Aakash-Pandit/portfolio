import React from "react";

const skills = {
  Backend: ["Python", "Go", "Django", "FastAPI", "Flask"],
  Databases: ["PostgreSQL", "Redis"],
  DevOps: ["Docker", "GitHub Actions", "AWS"],
  AI: ["LLMs", "RAG", "Cohere", "OpenAI", "Claude"],
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="muted section-intro" style={{ marginBottom: "24px" }}>
        Technologies and tools I work with to build backend systems and AI-powered products.
      </p>
      <div className="grid grid-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card">
            <h3 className="section-title" style={{ fontSize: "20px" }}>
              {category}
            </h3>
            <div className="chip-list">
              {items.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  