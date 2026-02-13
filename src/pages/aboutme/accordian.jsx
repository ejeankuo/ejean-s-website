import Accordion from 'react-bootstrap/Accordion';
import ReusableCoursel from "./carousel.js";
import { Link } from "react-router-dom";

const DiscPhotos = [
    { src: "/disc_catering.png", alt: "Ejean with DISC exec" },
    { src: "/CAE_presentation.png", alt: "CAE presentation" }
]

const NUMTPhotos = [
    { src: "/numt_ejean.jpg", alt: "Northwestern Mock Trial Defense"},
    { src: "/numt_fall_team.png", alt: "Northwestern Mock Trial Team"}
]

const SDFAPhotos = [
    { src: "/sfda_internship.jpg", alt: "SFDA BeReal Screenshot" },
    { src: "/sfda_intern2.jpg", alt: "Ejean at SFDA Office" }
]


function ReusableAllCollapse() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where am I on campus?</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why software engineering?</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ReusableAllCollapse;