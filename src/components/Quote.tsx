import React from "react";

export default function Quote() {
  return (
    <section className="section quote-section">
      <blockquote className="site-quote">
        <p>
          The best way to learn is to build, break things, and build again.
          Every bug is a lesson in disguise.
        </p>
        <footer className="muted">— My development philosophy</footer>
      </blockquote>
    </section>
  );
}
