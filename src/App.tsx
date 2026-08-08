import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>Mozify</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to Mozify</h2>
          <p>Build and deploy your Vite app easily.</p>
          <button>Get Started</button>
        </section>
      </main>

      <footer>
        <p>© 2026 Mozify. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
