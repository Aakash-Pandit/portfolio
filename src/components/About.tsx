import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <p className="muted">
        I am a backend-focused engineer who enjoys designing scalable
        systems, clean APIs, and data-driven applications. I have shipped
        production services with Python and Go, built APIs using FastAPI
        and Django, and integrated AI workflows into real products.
      </p>
      <p className="muted" style={{ marginTop: "16px" }}>
        My day-to-day work covers system design, performance tuning, and
        building reliable data pipelines. I care about clean architecture,
        observability, and writing code that is easy to test, maintain,
        and scale as the product grows.
      </p>
    </section>
  );
}
  