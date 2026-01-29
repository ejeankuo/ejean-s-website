// Contacts Page

import "./contactspage.css";
import Email from './emailform/email';

export default function ContactsPage() {
    return (
        <div className="contacts-page">
            {/* Contact Details */}
            <img 
                src="/connectwithme.png" 
                alt="Connect with Me" 
                className="contact-image"
                loading="eager"
            />
            <div className="contacts-row">
                {/* Left column */}
                <ul className="contacts">
                    <li>
                        <a href="https://github.com/ejeankuo" className="contact-link"> 
                            <img src="/github-logo.png" alt="github" className="logo"/> 
                            github.com/ejeankuo
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ejeankuo/" className="contact-link"> 
                            <img src="/linkedin-logo.png" alt="linkedin" className="logo"/> 
                            linkedin.com/in/ejeankuo
                        </a>
                    </li> 
                    <li>
                        <a href="tel:+19257011032" className="contact-link"> 
                            <img src="/phone-logo.png" alt="phone" className="logo"/>
                            (925) 701-1032  
                        </a>
                    </li>
                </ul>

                {/* Right column */}
                <div className="email-form">
                    <Email />
                </div>
            </div>
        </div>
    );
  }

/* <li>
        <a href="mailto:ejeankuo2027@u.northwestern.edu" className="contact-link"> 
            <img src="/mail-logo.png" alt="mail" className="logo"/> 
            ejeankuo2027@u.northwestern.edu
        </a>
    </li>
*/