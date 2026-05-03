import { describe } from "node:test";
import React from "react";

const LINKS = {
  reetro: "https://github.com/Aakash-Pandit/reetro-application",
  patientAI: "https://github.com/Aakash-Pandit/patient-appointment-using-AI",
  policyAI: "https://github.com/Aakash-Pandit/PolicyAgent",
  nutrilens: "https://github.com/Aakash-Pandit/nutrilens-api",
  book_recommendation: "https://github.com/Aakash-Pandit/book-recommendation",
  research_ai_agent: "https://github.com/Aakash-Pandit/Research-AI-Agent",
  standup_mcp: "https://github.com/Aakash-Pandit/Standup-MCP-Server",
  markdown_generator_mcp: "https://github.com/Aakash-Pandit/markdown-generator-mcp",
  code_review_bot: "https://github.com/Aakash-Pandit/code-review-bot",
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
  {
    title: "NutriLens",
    description: "Nutrilens AI is an API that takes food packaging ingredient information (text or image), runs it through AI models, and returns a human-readable explanation of what is inside along with an opinionated health assessment",
    link: LINKS.nutrilens,
  },
  {
    title: "Book Recommendation",
    description: "This is a book recommendation REST API built with Flask that serves two types of recommendations: a popularity-based list (top-rated books) and collaborative filtering (similar books based on user rating patterns). The ML models are pre-trained in a Jupyter notebook using a Books/Ratings/Users dataset and serialized as pickle files, which the API loads at runtime. The app is fully containerized with Docker and exposes endpoints at port 5000.",
    link: LINKS.book_recommendation,
  },
  {
    title: "Research AI Agent",
    description: "An autonomous research assistant built with LangGraph, Cohere, FAISS, and Tavily. It searches the live web, retrieves relevant documents from a persistent vector store, and synthesizes a grounded answer using an LLM — all in a single API call. The agent is served via FastAPI and follows an Agentic RAG architecture where each step (search, retrieve, generate) is a node in a stateful graph.",
    link: LINKS.research_ai_agent,
  },
  {
    title: "Standup MCP Server",
    description: "standup-mcp is an open-source MCP (Model Context Protocol) server that integrates with Claude Code to log daily standups to Notion using plain English. Built with Python, FastMCP, and Cohere's NLP API, it parses natural language messages like 'today I worked on jwt API and dashboard' and automatically appends them as dated bullet lists to a Notion page. It ships with an interactive CLI wizard that handles the full setup — collecting credentials, storing them securely in ~/.zshrc, and generating a credential-free .mcp.json config that safely coexists with other MCP servers. Install it in one command via uv or pipx directly from GitHub, no PyPI publishing required.",
    link: LINKS.standup_mcp,
  },
  {
    title: "Markdown Generator MCP",
    description: "An open-source Model Context Protocol (MCP) server built in Go designed to enhance the Claude Code CLI experience. By implementing the MCP standard, it allows developers to save their LLM interactions directly to their local filesystem as Markdown or PDF files. The tool features a seamless developer experience with a single-command installation that automatically handles user-scoped MCP registration, ensuring zero manual configuration.",
    link: LINKS.markdown_generator_mcp,
  },
  {
    title: "Code Review Bot",
    description: "A self-hosted, full-stack AI code review tool that provides real-time, streaming feedback on bugs, security, and performance. Powered by local LLMs, it ensures complete data privacy while accelerating the code review process.",
    link: LINKS.code_review_bot,
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="table-list">
        {projects.map((project) => (
          <div key={project.title} className="table-row">
            <h3 className="table-row-title">{project.title}</h3>
            <p className="table-row-desc">{project.description}</p>
            <a href={project.link} className="table-row-link" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
  