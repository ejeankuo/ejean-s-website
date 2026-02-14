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
                <h2 style={{color:"#919859"}}>{label}</h2>
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
                        year="~ Incoming Summer 2026" 
                        description={<>Incoming software engineer intern for the Commerce, Data, & Identity
                        Team for Disney Entertainment & ESPN Technology division.</>}
                    />
                    <ScrollExperience 
                        label="Undergraduate Researcher @ Northwestern University, Department of CS" 
                        location="Evanston, IL" 
                        year="~ May 2025 - Present" 
                        description={<>Formalized 4 foundational properties of strongly regular graphs
                        in Rocq (formerly Coq) and built verified example generators in OCaml,
                        with active development towards contributing results to Rocq’s open-source GraphTheory library.</>}
                    />
                    <ScrollExperience 
                        label="Software Engineer Intern @ Climate Action Evanston" 
                        location="Evanston, IL" 
                        year="~ December 2024 - May 2025" 
                        description={<>Designed a full-stack tracking form and data display page for a non-profit's
                        website supporting 2500+ users, centralizing data collection and visualization into one location,
                        cutting redundant manual updates and streamlining staff workflows by 40%. </>}
                    />
                    <ScrollExperience />
                </>
                {/* <p className="resume-figure-caption"> Or, just take a look! </p>
                <img src="/images/Ejean_Kuo_Resume.webp" alt="Resume preview" className="resume-image" /> */}
            </div>
        </div>
    );
  }