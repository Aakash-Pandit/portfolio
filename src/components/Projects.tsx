import React from "react";

const LINKS = {
  reetro: "https://github.com/Aakash-Pandit/reetro-application",
  patientAI: "https://github.com/Aakash-Pandit/patient-appointment-using-AI",
  policyAI: "https://github.com/Aakash-Pandit/PolicyAgent",
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
      "This project is a Python-based (FastAPI) patient appointment system that combines standard CRUD flows for doctors, patients, and appointments with an AI-driven Q&A assistant to help users understand and manage scheduling. It can be described as a lightweight AI agent (tool-calling) app.",
    link: LINKS.patientAI,
  },
  {
    title: "Policy AI Agent",
    description:
      "A Python FastAPI application that combines organizations, users, leave requests, policies, and an AI chat assistant powered by Cohere with tool/function calling. The AI answers questions using real data from the database and from RAG (Retrieval-Augmented Generation) over policy documents.",
    link: LINKS.policyAI,
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
  