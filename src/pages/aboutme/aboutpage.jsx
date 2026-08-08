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
                        <p>I'm Ejean (pronounced "EEE-jean"), a senior at Northwestern University pursuing a B.A. in Computer Science and English Literature.
                            I'm from the San Francisco Bay Area, but I'm currently based in Evanston, Illinois.
                        </p>
                        <p> I love studying languages, whether it's through code, reading, or writing, and exploring the intersection of technology 
                            and creative storytelling. My goal is to build tools that help share stories in fun, effective, and creative ways. 
                        </p>
                        <p>
                        It’s that exact mission that brought me to Santa Monica this summer; I've been working at Disney as a Software Engineer Intern,
                            working on Disney+, Hulu, and ESPN streaming services! 
                            It's been incredibly rewarding to help build the tech that brings magical stories to life for people all over the world.
                        </p>
                        <p>In my free time, I love reading, journaling, sewing, traveling the world, and building exciting web apps. Explore my website to learn more about my projects and resumé!</p>
                        <p>(P.S. click the sticker to get in touch with me!) :) </p>
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
                <img src="/images/janeeyre.jpg" alt="Jane Eyre Book Cover" className="book-cover" />
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
                <motion.div className="question-card" whileHover={{ scale: 1.1 }}>
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#293d61"}}>What's my coding soundtrack?</p>
                    <p>Currently, my favorite songs to listen to while coding are: </p>
                    <div>
                        <p>"AMERICAN GIRL" by Tiffany Day<br/>
                            "Mangos" by Shallow Alcove <br/>
                            "whenever you want" by lighthearted <br/>
                            "Your Star" by Shallow Alcove <br/>
                            "Sore Throat" by Malcolm Todd <br/>
                            "Backburner" by NIKI <br/>
                            "maggots for brains" by Olivia Rodrigo <br/>
                            "EVERYTHING I'VE EVER WANTED" by Tiffany Day
                        </p>
                    </div>
                    <motion.img className="vinyl-record" src="/images/record_vinyl.png"></motion.img>
                </motion.div>
                <motion.div className="question-card" whileHover={{ scale: 1.1 }}>
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#293d61"}}>What's next?</p>
                    <p>I'm currently working in Santa Monica, CA as a software engineer intern at Disney!
                        I've been working on building exciting A/B experiments on the Disney+, Hulu, and ESPN web pages, 
                        automating subscription sign-up flows, upgrading core payment pages, and supporting backend migration
                        from legacy code to a new, optimized platform code base. When I'm not in the office, you can catch me 
                        at Disneyland eating churros and riding the Incredicoaster! <span class="no-break">{"\u2600\uFE0E"}(▀U ▀-͠)</span>
                    </p>
                </motion.div>
                <div className="footer"></div>
            </div>
        </div>
    );
}