import './App.css'

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="/">Phillip Moore</a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Phillip Moore</h1>
          <p>Junior Full Stack Developer and Part-Time Game Developer.</p>
        </section>

        <section id="projects" className="panel">
          <h2>Featured Projects</h2>
          <ul>
            <li><a href="https://github.com/Phillipmoore01/RestfulWebService">RESTful Web Service</a></li>
            <li><a href="https://github.com/Phillipmoore01/FlightSite">FlightSite</a></li>
            <li><a href="https://github.com/Phillipmoore01/SaveThePrincess">Save The Princess</a></li>
          </ul>
        </section>

        <section id="about" className="panel">
          <h2>About</h2>
          <p>
            I enjoy building practical web apps and game systems. This portfolio is
            being migrated to React + TypeScript to better demonstrate UI, architecture,
            and frontend engineering skills.
          </p>
        </section>

        <section id="contact" className="panel">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:phillipmoore01@users.noreply.github.com">phillipmoore01@users.noreply.github.com</a></p>
          <p>GitHub: <a href="https://github.com/Phillipmoore01">github.com/Phillipmoore01</a></p>
        </section>
      </main>
    </div>
  )
}

export default App
