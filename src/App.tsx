import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Header + Navbar */}
      <header>
        <div className="nav-container">
          {/* Logo lấy từ public/logo.png */}
          <img src="/logo.png" alt="Mozify Logo" className="logo" />
          <h1>Mozify</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <h2>Welcome to Mozify</h2>
          <p>Build and deploy your Vite app easily.</p>
          <button>Get Started</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 Mozify. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
