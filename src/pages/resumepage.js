// Resume page
import "./resumepage.css";

export default function ResumePage() {
    return (
        <div className="resume-page">
            <div className="resume-actions">
            <img 
                src="resumepage.png" 
                alt="Download My Resume" 
                className="resume-header" 
                width="650px"
                loading="eager"
            />
            <a className="button" href="/EjeanKuo_Resume.pdf" download>
                <img src="button-here.png" alt="Click Here" className="resume-button" loading="eager"/>
            </a>
            </div>

            <div className="resume-image-container">
                <p className="resume-figure-caption"> Or, just take a look! </p>
                <img src="/EjeanKuo_Resume-1.png" alt="Resume preview" className="resume-image" />
            </div>
        </div>
    );
  }