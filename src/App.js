import './App.css';

import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { ReactTyped } from "react-typed";


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
      {/* Personal Details Card  */}
      <section className="card">
        <img src="/ejeanswebsite_2.png" alt="Website title" className="signature" />
        <div className="profile-row">
          <IntroText />
          <div className="divider"></div>
          <img src="/headshot.png" alt="Ejean Kuo's Headshot" className="headshot" />
        </div>
        
        <p className="subtitle">I'm a second year student at Northwestern 
        University pursuing a B.A. in Computer Science and English Literature.</p> 

        {/* Contact Details */}
        <div className="contacts-card">
          <p className="contact-heading">Connect with me!</p>
          <ul className="contacts">
            <li><a href="tel:+19257011032"><AiFillPhone /> (925) 701-1032</a></li>
            <li><a href="mailto:ejeankuo2027@u.northwestern.edu"> <AiFillMail /> ejeankuo2027@u.northwestern.edu</a></li>
            <li><a href="https://github.com/ejeankuo"><AiFillGithub /> github.com/ejeankuo</a></li>
            <li><a href="https://www.linkedin.com/in/ejeankuo/"> <AiFillLinkedin /> linkedin.com/in/ejeankuo</a></li> 
          </ul>
        </div>

        {/* Resume */}
        <div className="resume-actions">
          <a className="button" href="/EjeanKuo_Resume.pdf" download>
            Download my resumé here!
          </a>
        </div>

        <figure className="resume-figure">
          <p className="resume-figure-caption">Or, just take a look :)</p>
          <img src="/EjeanKuo_Resume-1.png" alt="Resume preview" className="resume-image" />
        </figure>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Ejean Kuo
      </footer>
    </main>
  );
}


/*
<li><a href="https://github.com/ejeankuo">github.com/ejeankuo</a></li>
<li><a href="https://www.linkedin.com/in/ejeankuo/">linkedin.com/in/ejeankuo</a></li> 
*/