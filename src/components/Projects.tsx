import React from "react";

const LINKS = {
  reetro: "https://github.com/Aakash-Pandit/reetro-application",
  patientAI: "https://github.com/Aakash-Pandit/patient-appointment-using-AI",
};

const projects = [
  {
    title: "Reetro Application",
    description:
      "Team retrospectives app to capture feedback, vote on themes, and track action items in real time using Golang, PostgreSQL and Redis. Dockerized and ready for deployment.",
    link: LINKS.reetro,
  },
  {
    title: "AI Agent: Patient Appointment Booking System",
    description:
      "FastAPI + PostgreSQL app with AI-assisted appointment booking using Cohere tools. Dockerized and ready for deployment.",
    link: LINKS.patientAI,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-2">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3 className="section-title" style={{ fontSize: "20px" }}>
              {project.title}
            </h3>
            <p className="muted">{project.description}</p>
            <a href={project.link} className="link" target="_blank">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
  