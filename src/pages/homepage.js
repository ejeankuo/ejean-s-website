import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { IoPin } from "react-icons/io5";


function IntroText() {
    return (
      <div className="intro-text">
        <ReactTyped
          strings={["Hi, I'm Ejean Kuo "]}
          typeSpeed={50}
          backSpeed={30}
          showCursor={true}
          cursorChar="|"
        />
      </div>
    );
  }
  
  export default function App() {
    return (
        <main className="container">
          {/* Personal Details + Intro Card */}
          <section className="card">
            <img src="/ejeanswebsite_2.png" alt="Website title" className="signature" />
            <div className="profile-row">
              <IntroText />
              <div className="divider"></div>
              <div className="headshot-container">
                <img src="/headshot.png" alt="Ejean Kuo's Headshot" className="headshot" />
                <p> <IoPin /> San Francisco, CA</p>
              </div>
            </div>
            <p className="subtitle">I'm a third year student at Northwestern 
            University pursuing a B.A. in Computer Science and English Literature.</p> 
  
            {/* Button Nav */}
            <div className="button-nav">
                <Link to="/about"><img src="/fig-about-me.png" alt="About" className="nav-button" /></Link>
                <Link to="/resume"><img src="/orange-resume.png" alt="Resume" className="nav-button" /></Link>
                <Link to="/contacts"><img src="/apple-contacts.png" alt="Contacts" className="nav-button" /></Link>
                <Link to="/projects"><img src="/tomato-proj.png" alt="Projects" className="nav-button" /></Link>
              </div>
            </section>
  
          <footer className="footer">
            © {new Date().getFullYear()} Ejean Kuo
          </footer>
        </main>
    );
  }
  