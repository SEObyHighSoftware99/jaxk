import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>My React Website</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Build Modern Websites with React</h2>

        <p>
          Fast, responsive and beautiful websites for your business.
        </p>

        <button>Get Started</button>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="card">
          <h3>Web Design</h3>
          <p>Modern and professional UI design.</p>
        </div>

        <div className="card">
          <h3>React Development</h3>
          <p>Fast and dynamic React applications.</p>
        </div>

        <div className="card">
          <h3>SEO Optimization</h3>
          <p>Improve your Google rankings.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 My React Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;