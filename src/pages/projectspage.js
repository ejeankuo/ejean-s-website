import "./projectspage.css";

export default function ProjectsPage() {
    return (
      <div className="projects-page">
        <img src="/projects-heading.png" alt="What I've Been Working On" className="projects-heading" />

        <h1>Ranklit: A Book Ranking iOS Application</h1>
        <div className="ranklit-card">
          <img src="/ranklit-logo.png" alt="Ranklit Logo" className="ranklit-image" />
          <p className="project-description">
            Ranklit Description blah blah blah blah blah blah blah blah 
            blah blah blah blah blah blah blah blah blah
          </p>
        </div>
      </div>
    );
  }