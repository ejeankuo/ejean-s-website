import "./aboutpage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="about-me-container">
            <div className="about-me-header">
                <img src="/about-me.png" alt="About me" className="signature-about" />
                <div className="about-card">
                    <div className="about-text">
                        <p>Hello! I'm Ejean Kuo, a third-year student at Northwestern University pursuing a B.A. in Computer Science and English Literature.</p>
                        <p>I'm from the San Francisco Bay Area, but I'm currently based in Evanston, IL. I love to study languages, 
                            whether it's through coding or by reading/writing, and to explore the intersection of technology and creativity.  
                            I'm always eager to learn new skills and take on exciting projects.</p>
                        <p>In my free time, I enjoy reading novels, experimenting with new programming languages, crafting by journaling or sewing, and traveling the world!</p>
                        <p>Feel free to explore my website to learn more about my projects and resumé. Click below to get in touch with me!</p>
                        <Link to="/contacts" className="about-button">
                            <img src="/connect-fruit-sticker.png" alt="Connect with me Button" className="connect-sticker" />
                        </Link>
                    </div>
                    <img src="/busan-ejean.jpg" alt="Ejean Kuo Personal" className="about-photo" />
                </div>
            </div>
            <div className="books-card">
                <p>Talk to me about my favorite books!</p>
                <img src="/woman_destroyed.jpg" alt="The Woman Destroyed Book Cover" className="book-cover" />
                <img src="/orlando-cover.jpg" alt="Orlando Book Cover" className="book-cover" />
                <img src="/in-memoriam-cover.jpg" alt="In Memoriam Book Cover" className="book-cover" />
                <img src="/sirens-cover.jpg" alt="Sirens of Titan Book Cover" className="book-cover" />
            </div>
            <div className="FAQ-container">
                <h2 style={{textAlign:"center", fontSize: "28px" }}>More about me:</h2>
                <div className="question-card">
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#7e6072"}}>Where am I on campus?</p>
                    <p>At Northwestern, you can find me organizing technical workshops with <span style={{fontWeight: "bold"}}>
                    <a href="https://www.discnu.org/"> Develop + Innovate for Social Change </a></span>,
                        <br /> working on new panel events or career talks with guest speakers and alumni.
                    </p>
                    <img src="/disc_catering.png" alt="Ejean with DISC exec" className="faq-photo" />
                    <img src="/CAE_presentation.png" alt="CAE presentation" className="faq-photo" />
                    <p> Otherwise, I'll be at Mock Trial practice, practicing my analytical and public speaking skills! <br /> Most recently, our <span style={{fontWeight: "bold"}}><a href="https://www.northwesternmocktrial.org/">Northwestern Mock Trial </a></span>
                        team won 8th place at Nationals. 
                    </p>
                    <img src="/numt_ejean.jpg" alt="Northwestern Mock Trial Defense" className="faq-photo" />
                    <img src="/numt_fall_team.png" alt="Northwestern Mock Trial Team" className="faq-photo" />
                </div>
                <div className="question-card">
                    <p style={{fontWeight: "bold", fontSize: "20px", color: "#7e6072"}}>Why software engineering?</p>
                    <p>Growing up, I always thought I would pursue a career in law. I interned for the <span style={{fontWeight: "bold"}}><a href="https://sfdistrictattorney.org/">San Francisco District
                        <br/> Attorney Office</a></span> as well as <span style={{fontWeight: "bold"}}><a href="https://alpha-law.co.kr/">The Alpha Law Firm</a></span> in Seoul, South Korea, which were amazing experiences.<br/>
                        <br/>However, as I was tasked with looking through massive databases of penal codes or Supreme Court rulings, 
                        <br/> I was constantly frustrated by how clunky it was to use these tools. The more I struggled with the user  
                        <br/> experience of these sites, the more interested I got in the other side of things; specifically, 
                        <br/> <span style={{fontWeight: "bold"}}>in how these tools were built, and how they could be improved.</span> <br/> 
                        <br/> Now, I love to code because it allows me to combine my analytical skills with my creativity to build 
                        <br/> tools that can make a difference! Check out my <Link to="/projects">projects page</Link> to see some of the things I've developed.
                    </p>
                    <img src="/sfda_internship.jpg" alt="SFDA BeReal Screenshot" className="faq-photo" />
                </div>
            </div>
        </div>
    );
    // 
}