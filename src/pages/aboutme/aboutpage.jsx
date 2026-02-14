import "./aboutpage.css";
import ReusableCoursel from "./carousel.jsx";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DiscPhotos = [
    { src: "/images/disc_catering.png", alt: "Ejean with DISC exec" },
    { src: "/images/CAE_presentation.png", alt: "CAE presentation" }
]

const NUMTPhotos = [
    { src: "/images/numt_ejean.jpg", alt: "Northwestern Mock Trial Defense"},
    { src: "/images/numt_fall_team.png", alt: "Northwestern Mock Trial Team"}
]

const SDFAPhotos = [
    { src: "/images/sfda_internship.jpg", alt: "SFDA BeReal Screenshot" },
    { src: "/images/sfda_intern2.jpg", alt: "Ejean at SFDA Office" }
]

function HelloTyped() {
    return (
    <span className="hello-typewriter">
        <Typewriter
        words={[ 'Hello! It\'s nice to meet you.' ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={60}
        delaySpeed={1000}
        />
    </span>
    );
  }

export default function AboutPage() {
    return (
        <div className="about-me-container">
            <div className="about-me-header">
                <img src="/images/about-me.webp" alt="About me" className="signature-about" loading="eager"/>
                <div className="about-card">
                    <div className="about-text">
                        <h2><HelloTyped/></h2>
                        <p>I'm Ejean Kuo, a third-year student at Northwestern University pursuing a B.A. in Computer Science and English Literature.</p>
                        <p>I'm from the San Francisco Bay Area, but I'm currently based in Evanston, IL. I love to study languages, 
                            whether it's through coding or by reading/writing, and to explore the intersection of technology and creativity. Technology is
                            such a powerful conduit for storytelling, and I hope to create tools that can help share stories in new and exciting ways!
                        </p>
                        <p>In my free time, I enjoy reading novels, crafting (journaling, sewing, and knitting), building exciting web apps, and traveling the world!</p>
                        <p>Feel free to explore my website to learn more about my projects and resumé.</p>
                        <p>(P.S. click the sticker on the right to get in touch with me!) :) </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <img src="/images/Ejean_AbtMe.webp" alt="Ejean Kuo Pic" className="about-photo" loading="eager"/>
                        <Link to="/contacts" className="about-button">
                            <img src="/images/connect-fruit-sticker.png" alt="Connect with me Button" className="connect-sticker" />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="books-card">
                <p>Talk to me about my favorite books!</p>
                <img src="/images/woman_destroyed.jpg" alt="The Woman Destroyed Book Cover" className="book-cover" />
                <img src="/images/orlando-cover.jpg" alt="Orlando Book Cover" className="book-cover" />
                <img src="/images/in-memoriam-cover.jpg" alt="In Memoriam Book Cover" className="book-cover" />
                <img src="/images/sirens-cover.jpg" alt="Sirens of Titan Book Cover" className="book-cover" />
            </div>
            <div className="FAQ-container">
                <motion.div className="question-card" whileHover={{ scale: 1.1 }}>
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#293d61"}}>Where am I on campus?</p>
                    <p>At Northwestern, you can find me organizing technical workshops with <span style={{fontWeight: "bold"}}>
                    <a href="https://www.discnu.org/"> Develop + Innovate for Social Change</a></span>,
                         working on new panel events or career talks with guest speakers and alumni.
                    </p>
                    <ReusableCoursel slides={DiscPhotos}/>
                    <p> Otherwise, I'll be at Mock Trial practice, practicing my analytical and public speaking skills! 
                        Most recently, our 
                        <span style={{fontWeight: "bold"}}>
                            <a href="https://www.northwesternmocktrial.org/"> Northwestern Mock Trial </a>
                        </span> team won 8th place at Nationals. 
                    </p>
                    <ReusableCoursel slides={NUMTPhotos}/>
                </motion.div>
                <motion.div className="question-card" whileHover={{ scale: 1.1 }}>
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#293d61"}}>Why software engineering?</p>
                    <p>Growing up, I always thought I would pursue a career in law. I interned for the <span style={{fontWeight: "bold"}}><a href="https://sfdistrictattorney.org/">San Francisco District
                        Attorney Office</a></span> as well as <span style={{fontWeight: "bold"}}><a href="https://alpha-law.co.kr/">The Alpha Law Firm</a></span> in Seoul, South Korea, which were amazing experiences.<br/>
                        <br/>However, as I was tasked with looking through massive databases of penal codes or Supreme Court rulings, 
                        I was constantly frustrated by how clunky it was to use these tools. The more I struggled with the user  
                        experience of these sites, the more interested I got in the other side of things; specifically, 
                        <span style={{fontWeight: "bold"}}> in how these tools were built, and how they could be improved.</span> <br/> 
                        <br/>Now, I love to code because it allows me to combine my analytical skills with my creativity to build 
                        tools that can make a difference! Check out my <span style={{fontWeight: "bold"}}><Link to="/projects">projects page</Link></span> to see some of the things I've developed.
                    </p>
                    <ReusableCoursel slides={SDFAPhotos}/>
                </motion.div>
            </div>
        </div>
    );
}