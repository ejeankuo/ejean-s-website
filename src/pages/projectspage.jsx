import "./projectspage.css";

export default function ProjectsPage() {
    return (
      <div className="projects-page">
        <img 
          src="/images/projects-heading.png" 
          alt="What I've Been Working On" 
          className="projects-heading" 
          loading="eager"
        />

        {/* Wordle */}
        <h1 className="project-title">Wurdle: a Wordle Clone</h1>
        <div className="project-card">
          <li>
            <a href="https://wurdle-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/images/wurdle.webp" alt="Ranklit Logo" className="project-image-wurdle" loading="eager"/>
            </a>
          </li>
          <p className="project-description">
            <strong> Tech Stack: </strong> <br/> 
            React · JavaScript · Vercel <br /> <br />
            A wordle clone, made using Javascript, React, and deployed on Vercel. Test it out yourself!
          </p>
        </div>
        

        {/* Letterboxd Wrapped */}
        <h1 className="project-title">Letterboxd Wrapped</h1>
        <div className="project-card">
          <li>
            <a href="https://github.com/ejeankuo/letbox-wrapped" target="_blank" rel="noopener noreferrer">
              <img src="/images/letbox-wrap-homepage.webp" alt="Ranklit Logo" className="project-image" loading="eager"/>
            </a>
          </li>
          <p className="project-description">
            <strong> Tech Stack: </strong> <br /> 
            React · TypeScript · Node.js/Express · Cors <br/><br />
            A web scraping project using React, Typescript, and an animation library React Motion, with a backend web service built using Node.js and Express. Just enter 
            your username and see a personalized summary of your past year in movies. 
          </p>
        </div>

        {/* Ranklit */}
        <h1 className="project-title">Ranklit: A Book Ranking iOS Application</h1>
        <div className="project-card">
          <li>
            <a href="https://github.com/ejeankuo" target="_blank" rel="noopener noreferrer">
              <img src="/images/ranklit-logo.png" alt="Ranklit Logo" className="project-image" loading="eager"/>
            </a>
          </li>
          <p className="project-description">
            <strong> Tech Stack:  </strong> <br /> 
            SwiftUI · Swift · Supabase · Open Library API<br/><br />
            A full-stack iOS app for book tracking, enabling curated lists and personalized ratings through a pairwise ranking algorithm. <br /> <br />
            So far, I've built user authentication flows (Log In/Create Account) with email + username support, syncing data to Supabase, and 
            implemented user-specific lists (Favorites, Want to Read) backed by Supabase RLS and book data from Open Library API. <br /> <br />
            Stay tuned for more updates!
          </p>
        </div>

        {/* Pacman */}
        <h1 className="project-title">Pacman Trainer</h1>
        <div className="project-card">
          <li>
            <a href="https://github.com/ejeankuo" target="_blank" rel="noopener noreferrer">
              <img src="/images/pacman-ss.png" alt="Pacman Screenshot" className="project-image" loading="eager"/>
            </a>
          </li>
          <p className="project-description">
            <strong> Tech Stack: </strong> <br /> 
            Python · Tkinter <br/><br />
            A reinforcement learning agent that learns to play Pacman using Q-learning and epsilon-greedy exploration. <br /> <br />
            The agent trains by playing multiple games of Pacman, receiving rewards for eating pellets and penalties for being caught by ghosts. 
            Over time, it learns to navigate the maze more effectively, avoiding ghosts and maximizing its score. <br /> <br />
            Built with Python and Tkinter, this project showcases the application of reinforcement learning techniques in game environments.
          </p>
        </div>

        {/* CAE */}
        <h1 className="project-title">Climate Action Evanston Data Collection Form</h1>
        <div className="project-card">
          <li>
            <a href="https://github.com/ejeankuo" target="_blank" rel="noopener noreferrer">
              <img src="/images/form-ss.png" alt="CAE logo" className="project-image" loading="eager"/>
            </a>
          </li>
          <p className="project-description">
            <strong> Tech Stack:  </strong> <br /> 
            React · JavaScript · Node.js/Express · Supabase · Vercel<br/><br />
            A full-stack web application for Climate Action Evanston to streamline data collection and visualization. <br /> <br />
            The platform centralizes submission data into one location, reducing manual tracking and reporting time by 40%. Built to be admin-friendly, so non-technical staff can easily add and edit content displayed on the site––even without the help of developers. <br /> <br />
            By supporting the recording and visualization of local volunteer efforts, this project combines activism with scalable, collaborative development with Git version control.
          </p>
        </div>
      </div>
    );
  }