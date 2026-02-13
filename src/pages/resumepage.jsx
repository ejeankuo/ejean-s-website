// Resume page
import "./resumepage.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollExperience({ src, label, location, year, description}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end end", "start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1],[0, 1, 1, 0]);

    return (
        <section className="experiences-scroll-container">
            <motion.div className="experience-caption" ref={ref} style={{ opacity }}>
                <h2>{label}</h2>
                <p>{location} {year}</p>
                <br/>
                <p>{description}</p>
            </motion.div>
        </section>
    )
}

export default function ResumePage() {
    return (
        <div className="resume-page">
            <div className="resume-actions">
                <img 
                    src="/images/resumepage.png" 
                    alt="Download My Resume" 
                    className="resume-header" 
                    width="650px"
                    loading="eager"
                />
                <a href="/images/Ejean_Kuo_Resume.pdf" download>
                    <img src="/images/button-here.png" alt="Click Here" className="resume-button" loading="eager"/>
                </a>
            </div>

            <div className="resume-image-container">
                <p className="resume-figure-caption"> Scroll to see my experiences: </p>
                <>
                    <ScrollExperience 
                        label="Software Engineer Intern @ Disney" 
                        location="Santa Monica, CA" 
                        year="| Incoming Summer 2026" 
                        description={<>Incoming intern for the Commerce, Data, & Identity <br/>
                        Team for Disney Entertainment & ESPN Technology division</>}
                    />
                    <ScrollExperience 
                        label="Undergraduate Researcher @ Northwestern University" 
                        location="Evanston, IL" 
                        year="| May 2025 - Present" 
                        description={<>Doing stuff</>}
                    />
                    <ScrollExperience 
                        label="Software Engineer Intern @ Climate Action Evanston" 
                        location="Evanston, IL" 
                        year="| December 2024 - May 2025" 
                        description={<>DId stuff</>}
                    />
                    <ScrollExperience />
                </>
                {/* <p className="resume-figure-caption"> Or, just take a look! </p>
                <img src="/images/Ejean_Kuo_Resume.webp" alt="Resume preview" className="resume-image" /> */}
            </div>
        </div>
    );
  }