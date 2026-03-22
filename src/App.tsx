import './App.css'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Navbar } from './components/Navbar.tsx'
import { ProjectCard } from './components/ProjectCard.tsx'
import { ThemeToggle } from './components/ThemeToggle.tsx'
import { featuredProjects } from './data/projects.ts'

function App() {
  return (
    <div className="site">
      <Navbar
        brand="Phillip Moore"
        links={[
          { href: 'projects.html', label: 'Projects' },
          { href: 'about.html', label: 'About' },
          { href: '#contact', label: 'Contact' },
        ]}
        end={<ThemeToggle />}
      />

      <main>
        <Hero
          className="motion-fade-in"
          title="Phillip Moore"
          tagline="Systems Developer and Engineer"
        />

        <section id="projects" className="panel motion-fade-in motion-delay-1">
          <h2>Featured Projects</h2>
          <p className="panel-crosslink">
            <a href="projects.html">View all projects</a>
          </p>
          <div className="project-grid" role="list">
            {featuredProjects.map((project) => (
              <div key={project.href} role="listitem">
                <ProjectCard
                  title={project.title}
                  href={project.href}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="panel motion-fade-in motion-delay-2">
          <h2>About</h2>
          <p>
            I enjoy building practical web apps and game systems. This portfolio is
            being migrated to React + TypeScript so please be patient with me. Thanks!
          </p>
          <p className="panel-crosslink">
            <a href="about.html">Read more on the About page</a>
          </p>
        </section>

        <Footer
          className="motion-fade-in motion-delay-3"
          email="phillipmoore3102@gmail.com.com"
          githubUrl="https://github.com/Phillipmoore01"
        />
      </main>
    </div>
  )
}

export default App
