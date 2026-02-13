import { IoPin } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";

// import { ReactTyped } from "react-typed";
//import { Link } from "react-router-dom";


// function IntroText() {
//     return (
//       <div className="intro-text">
//         Hey, I'm Ejean and I love t
//         <ReactTyped
//           strings={["Hi, I'm Ejean Kuo "]}
//           typeSpeed={50}
//           backSpeed={30}
//           showCursor={true}
//           cursorChar="|"
//         />
//       </div>
//     );
//   }


function IntroText() {
  return (
    <h1 className="intro-text">
      Hey, I'm Ejean and&nbsp;I&nbsp;love&nbsp;to{' '}
      <br />
      <span className="typewriter-phrases">
        <Typewriter
          words={[
            'learn new skills.',
            'design creatively.',
            'code new features.',
            'solve problems.',
            'build relationships.',
            'travel the world!',
            'make positive change.'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={75}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
}

  
  export default function App() {
    return (
        <main className="home-container">
          {/* Personal Details + Intro Card */}
          <section className="home-card">
            <img src="/images/ejeanswebsite_3.png" alt="Website title" className="signature" />
            <IntroText />
            <div className="profile-row">
              <div className="headshot-container">
                <li className="headshot-link">
                    <a href="https://www.linkedin.com/in/ejeankuo/" className="contact-link"> 
                      <img src="/images/headshot.png" alt="Ejean Kuo's Headshot" className="headshot" />
                    </a>
                </li> 
                <p> <IoPin /> San Francisco, CA</p>
              </div>
            </div>
            <p className="subtitle">I'm a third year student at Northwestern 
            University pursuing a B.A. in Computer Science and English Literature.</p> 
  
            {/* Button Nav */}
            <div className="button-nav">
                <Link to="/about"><img src="/images/fig-about-me.png" alt="About" className="nav-button" /></Link>
                <Link to="/resume"><img src="/images/orange-resume.png" alt="Resume" className="nav-button" /></Link>
                <Link to="/contacts"><img src="/images/apple-contacts.png" alt="Contacts" className="nav-button" /></Link>
                <Link to="/projects"><img src="/images/tomato-proj.png" alt="Projects" className="nav-button" /></Link>
              </div>
            </section>
  
          <footer className="footer">
            © {new Date().getFullYear()} Ejean Kuo
          </footer>
        </main>
    );
  }
  