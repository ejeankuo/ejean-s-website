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
                        <p>I love to study languages––whether it's coding or reading/writing––as well as explore the intersection of technology and creativity.  I'm always eager to learn new skills and take on exciting projects.</p>
                        <p>In my free time, I enjoy reading classic novels, experimenting with new programming languages, and café hopping.</p>
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

        </div>
    );
}