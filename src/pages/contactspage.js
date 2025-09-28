// Contacts Page

import "./contactspage.css";
import { AiFillPhone, AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function ContactsPage() {
    return (
        <div className="contacts-page">
            {/* Contact Details */}
            <img 
                src="/connectwithme.png" 
                alt="Connect with Me" 
                className="contact-image"
            />
            <ul className="contacts">
                <li><a href="tel:+19257011032"><AiFillPhone /> (925) 701-1032</a></li>
                <li><a href="mailto:ejeankuo2027@u.northwestern.edu"> <AiFillMail /> ejeankuo2027@u.northwestern.edu</a></li>
                <li><a href="https://github.com/ejeankuo"><AiFillGithub /> github.com/ejeankuo</a></li>
                <li><a href="https://www.linkedin.com/in/ejeankuo/"> <AiFillLinkedin /> linkedin.com/in/ejeankuo</a></li> 
            </ul>
        </div>
    );
  }